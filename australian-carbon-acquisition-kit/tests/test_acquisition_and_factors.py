import csv, io, json, tempfile, unittest, zipfile
from pathlib import Path
from sys import path as syspath
BASE=Path(__file__).resolve().parents[1]
syspath.insert(0,str(BASE/'scripts'))
from acquire_and_inventory import read_xlsx
from validate_mapped_factors import validate

class AcquisitionTests(unittest.TestCase):
    def test_source_manifest_is_valid_and_unique(self):
        doc=json.loads((BASE/'config'/'source_registry.json').read_text())
        rows=doc['sources']
        self.assertGreaterEqual(len(rows),20)
        ids=[x['id'] for x in rows]
        self.assertEqual(len(ids),len(set(ids)))
        self.assertTrue(all(x['licence'] and x['download_policy'] for x in rows))

    def test_importer_parses_a_minimal_xlsx_without_fabricating_factors(self):
        wb='''<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets><sheet name="Factors" sheetId="1" r:id="rId1"/></sheets></workbook>'''
        rels='''<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/></Relationships>'''
        sheet='''<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><sheetData><row r="1"><c r="A1" t="inlineStr"><is><t>EF</t></is></c><c r="B1"><v>0.74</v></c></row></sheetData></worksheet>'''
        with tempfile.TemporaryDirectory() as tmp:
            path=Path(tmp)/'test.xlsx'
            with zipfile.ZipFile(path,'w') as z:
                z.writestr('xl/workbook.xml',wb)
                z.writestr('xl/_rels/workbook.xml.rels',rels)
                z.writestr('xl/worksheets/sheet1.xml',sheet)
            with zipfile.ZipFile(path) as z:
                out=io.StringIO(); w=csv.writer(out)
                sheets=read_xlsx(z,'TEST',w)
            self.assertEqual(sheets[0]['numeric_cells'],1)
            self.assertIn('REQUIRES_FACTOR_MAPPING',out.getvalue())
            self.assertIn('0.74',out.getvalue())

    def test_web_confirmed_electricity_factors_are_quarantined_until_binary_verified(self):
        path=BASE/'data'/'nga2026_web_crosschecked_sample.csv'
        with path.open(newline='') as f:
            rows=list(csv.DictReader(f))
        vic=[r for r in rows if r['jurisdiction']=='VIC']
        self.assertEqual(len(vic),2)
        self.assertEqual({r['indicator']:float(r['factor_value']) for r in vic},{'CO2e_scope2':0.74,'CO2e_scope3':0.11})
        self.assertTrue(all(r['source_file_verified']=='no' for r in rows))
        self.assertEqual(len([r for r in rows if r['jurisdiction']=='TAS' and not r['factor_value']]),2)

    def test_nga_calculation_known_examples(self):
        kg=1000*(0.74+0.11)
        self.assertAlmostEqual(kg,850)
        tonnes=700*38.6*(69.9+0.1+0.2+17.3)/1000
        self.assertAlmostEqual(tonnes,2364.25,places=6)
        # NGA published worked example rounds the result to 2364.3 t CO2-e
        self.assertAlmostEqual(tonnes,2364.3,delta=0.1)

    def test_approval_rejected_without_source_file(self):
        path=BASE/'data'/'nga2026_web_crosschecked_sample.csv'
        result=validate(path)
        self.assertEqual(result['approved_rows'],0)
        self.assertEqual(result['blocked_rows'],18)

if __name__=='__main__':unittest.main()