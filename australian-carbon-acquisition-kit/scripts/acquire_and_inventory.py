#!/usr/bin/env python3
"""Download public official workbooks; verify ZIP/PDF integrity; extract full XLSX cell inventory.

Only run in a network-enabled development environment. No login bypass or scraping
of restricted standards. This is an extraction/audit step, NOT a guarantee all
numeric XLSX cells are verified emission factors.
"""
from __future__ import annotations
import argparse, csv, datetime as dt, hashlib, html.parser, json, re, shutil, sys, time, urllib.parse, urllib.request, zipfile
from pathlib import Path
from xml.etree import ElementTree as ET

BASE = Path(__file__).resolve().parents[1]
SOURCES = BASE / 'config' / 'source_registry.json'
NS = {'m':'http://schemas.openxmlformats.org/spreadsheetml/2006/main',
      'r':'http://schemas.openxmlformats.org/officeDocument/2006/relationships',
      'p':'http://schemas.openxmlformats.org/package/2006/relationships'}
USER_AGENT = 'EngineeringCarbonDataAcquirer/0.1 (public documents; contact project administrator)'
MAX_DOWNLOAD_BYTES = 45 * 1024 * 1024
MAX_UNCOMPRESSED_XML = 250 * 1024 * 1024
ALLOW_DOMAINS = ('.gov.au', '.vic.gov.au', '.nsw.gov.au')

class LinkReader(html.parser.HTMLParser):
    def __init__(self):
        super().__init__(); self.links=[]; self.href=None; self.content=[]
    def handle_starttag(self, tag, attrs):
        if tag=='a':
            self.href=dict(attrs).get('href'); self.content=[]
    def handle_data(self, data):
        if self.href is not None: self.content.append(data)
    def handle_endtag(self, tag):
        if tag=='a' and self.href is not None:
            self.links.append((self.href, ' '.join(''.join(self.content).split())))
            self.href=None; self.content=[]

def allowed(url):
    q=urllib.parse.urlparse(url)
    return (q.scheme=='https' and q.hostname and
            (q.hostname.endswith('.gov.au') or q.hostname=='gov.au') and
            not q.username and not q.password)

def get_bytes(url):
    if not allowed(url): raise ValueError('Unallowlisted URL '+url)
    req=urllib.request.Request(url, headers={'User-Agent':USER_AGENT,'Accept':'*/*'})
    with urllib.request.urlopen(req, timeout=40) as rsp:
        if not allowed(rsp.url): raise ValueError('Redirect to unexpected URL '+rsp.url)
        size=rsp.headers.get('Content-Length')
        if size and int(size)>MAX_DOWNLOAD_BYTES: raise ValueError('File too large')
        out=bytearray()
        while True:
            b=rsp.read(128*1024)
            if not b: break
            out.extend(b)
            if len(out)>MAX_DOWNLOAD_BYTES: raise ValueError('Download size limit exceeded')
        return bytes(out),rsp.url,rsp.headers.get('Content-Type','')

def resolve_url(source):
    if source.get('url'): return source['url']
    landing=source['landing_url']
    page,_,_=get_bytes(landing)
    parser=LinkReader();parser.feed(page.decode('utf-8','replace'))
    wanted=source['link_text_contains'].lower(); ext='.'+source['format']
    candidates=[]
    for href,text in parser.links:
        absolute=urllib.parse.urljoin(landing,href)
        # Respect listed target and extension; some CMS URLs use querystring.
        urlpath=urllib.parse.urlparse(absolute).path.lower()
        if wanted in text.lower() and (urlpath.endswith(ext) or ext in urlpath):
            if allowed(absolute): candidates.append(absolute)
    if not candidates: raise ValueError('No matching official downloadable link found; inspect landing page')
    return candidates[0]

def element_text(el):
    return ''.join(t.text or '' for t in el.iter() if t.tag.endswith('}t'))

def read_xlsx(zf, source_id, inventory_writer):
    members={x.filename:x for x in zf.infolist()}
    if any(x.file_size>MAX_UNCOMPRESSED_XML for x in members.values()): raise ValueError('Oversized XLSX XML member')
    workbook=ET.fromstring(zf.read('xl/workbook.xml'))
    relations=ET.fromstring(zf.read('xl/_rels/workbook.xml.rels'))
    targets={r.attrib['Id']:r.attrib['Target'].lstrip('/') for r in relations}
    strings=[]
    if 'xl/sharedStrings.xml' in members:
        root=ET.fromstring(zf.read('xl/sharedStrings.xml'))
        strings=[element_text(x) for x in root.findall('m:si',NS)]
    sheet_metrics=[]
    for sheet in workbook.findall('m:sheets/m:sheet',NS):
        title=sheet.attrib.get('name',''); rel=sheet.attrib.get('{'+NS['r']+'}id','')
        path=targets.get(rel,'')
        path = path if path.startswith('xl/') else 'xl/'+path
        if path not in members: raise ValueError('Missing referenced worksheet '+path)
        root=ET.fromstring(zf.read(path))
        n_cells=n_numeric=n_formulas=n_text=n_errors=0
        for cell in root.findall('.//m:sheetData/m:row/m:c',NS):
            ref=cell.get('r',''); t=cell.get('t','n')
            valnode=cell.find('m:v',NS); fnode=cell.find('m:f',NS)
            raw=(valnode.text or '') if valnode is not None else ''
            if t=='s':
                try: val=strings[int(raw)]
                except (ValueError,IndexError): val='[INVALID_SHARED_STRING]'; n_errors+=1
                n_text+=1
            elif t=='inlineStr':
                val=element_text(cell); n_text+=1
            else:
                val=raw
                if t in ('n','') and raw:
                    try: float(raw); n_numeric+=1
                    except ValueError: n_errors+=1
                elif t in ('e',): n_errors+=1
                elif raw: n_text+=1
            formula = (fnode.text or '') if fnode is not None else ''
            n_formulas+=bool(fnode is not None)
            inventory_writer.writerow([source_id,title,ref,val,t,formula,
                'REQUIRES_FACTOR_MAPPING' if (t=='n' and raw) else 'CONTEXT_OR_FORMULA'])
            n_cells+=1
        sheet_metrics.append({'sheet':title,'cells':n_cells,'numeric_cells':n_numeric,'formulas':n_formulas,
                              'text_cells':n_text,'errors':n_errors,'path':path})
    return sheet_metrics

def inspect_file(path, fmt, source_id, inventory_writer):
    with path.open('rb') as fh: sig=fh.read(8)
    if fmt=='xlsx':
        if sig[:2]!=b'PK': raise ValueError('XLSX ZIP magic is absent')
        with zipfile.ZipFile(path) as zf:
            if zf.testzip() is not None: raise ValueError('CRC error in XLSX')
            if 'xl/vbaProject.bin' in zf.namelist(): raise ValueError('Unexpected macro content')
            return {'workbook_sheets':read_xlsx(zf,source_id,inventory_writer),'format_verified':True}
    if fmt=='pdf':
        if not sig.startswith(b'%PDF-'): raise ValueError('PDF magic is absent')
        return {'format_verified':True,'note':'PDF structural magic checked; technical tables still require semantic review'}
    raise ValueError('Unsupported format: '+fmt)

def main():
    ap=argparse.ArgumentParser()
    ap.add_argument('--source-id',action='append',default=[],help='Download only named source(s)')
    ap.add_argument('--all-public',action='store_true',help='Download all listed public workbooks/PDFs')
    ap.add_argument('--delay',type=float,default=1.5,help='Polite inter-request pause in seconds')
    args=ap.parse_args()
    registry=json.loads(SOURCES.read_text(encoding='utf-8'))
    available=[s for s in registry['sources'] if s.get('download_policy')=='public_source_local_processing']
    if args.source_id: available=[s for s in available if s['id'] in args.source_id]
    elif not args.all_public: available=[s for s in available if s['id'] in ('NECD_2026_V2','NGA_2026_XLSX','NGA_2026_PDF','NABERS_MATERIAL_2026_3','NABERS_TECH_2026_3','DTP_CATALOGUE')]
    download_dir=BASE/'downloads';download_dir.mkdir(exist_ok=True)
    data_dir=BASE/'data';data_dir.mkdir(exist_ok=True)
    report=[]
    with (data_dir/'raw_xlsx_cell_inventory.csv').open('w',encoding='utf-8',newline='') as out:
        writer=csv.writer(out);writer.writerow(['source_id','sheet','cell','raw_value','xlsx_type','formula','validation_status'])
        for s in available:
            result={'source_id':s['id'],'name':s['name'],'timestamp_utc':dt.datetime.now(dt.timezone.utc).isoformat()}
            try:
                url=resolve_url(s); content,resolved,mime=get_bytes(url)
                ext=s['format']; path=download_dir/(s['id']+'.'+ext)
                path.write_bytes(content)
                info=inspect_file(path,ext,s['id'],writer)
                result.update(status='FILE_DOWNLOADED_AND_STRUCTURALLY_VALIDATED',url=resolved,
                              bytes=len(content),sha256=hashlib.sha256(content).hexdigest(),mime=mime,
                              local_path=str(path.relative_to(BASE)),**info)
            except Exception as exc:
                result.update(status='FAILED_DOWNLOAD_OR_VALIDATION',error=str(exc))
            report.append(result)
            print(f"{s['id']}: {result['status']}")
            time.sleep(max(0,args.delay))
    report_path=BASE/'reports'/'acquisition_run.json';report_path.parent.mkdir(exist_ok=True)
    report_path.write_text(json.dumps({'generated_utc':dt.datetime.now(dt.timezone.utc).isoformat(),
         'warning':'Structural validation does not equal factor-by-factor semantic validation.',
         'results':report},indent=2),encoding='utf-8')
    print('Saved:',report_path)
    if any(r['status']!='FILE_DOWNLOADED_AND_STRUCTURALLY_VALIDATED' for r in report): sys.exit(2)

if __name__=='__main__': main()