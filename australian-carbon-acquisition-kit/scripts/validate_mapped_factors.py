#!/usr/bin/env python3
"""Validate mapped emission factors. Reject placeholders; do not infer factor semantics from numeric cells."""
import argparse, csv, json, math
from collections import Counter
from pathlib import Path
BASE=Path(__file__).resolve().parents[1]
REQUIRED=('factor_id','source_id','factor_value','factor_unit','indicator','boundary','jurisdiction','source_locator','factor_year')
VALID_INDICATORS={'GWP-total','GWP-fossil','GWP-biogenic','GWP-luluc','CO2e_scope1','CO2e_scope2','CO2e_scope3'}
VALID_UNITS={'kgCO2e/kWh','kgCO2e/m3','kgCO2e/kg','kgCO2e/t','kgCO2e/GJ','tCO2e/GJ','kgCO2e/tkm','tCO2e/t','kgCO2e/L','kgCO2e/kL'}

def validate(path):
    with path.open(encoding='utf-8-sig',newline='') as f:
        rows=list(csv.DictReader(f))
    issues=[];seen=set();passes=[]
    for i,row in enumerate(rows,2):
        err=[]
        for key in REQUIRED:
            if not (row.get(key) or '').strip(): err.append(f'missing {key}')
        fid=row.get('factor_id','')
        if fid in seen: err.append('duplicate factor_id')
        seen.add(fid)
        try:
            value=float(row.get('factor_value',''))
            if not math.isfinite(value): err.append('nonfinite factor value')
            if value<0: err.append('negative factor requires explicit method and review')
        except (ValueError,TypeError):err.append('invalid factor value')
        if row.get('factor_unit') not in VALID_UNITS:err.append('unknown/incompatible factor unit; extend validated registry explicitly')
        if row.get('indicator') not in VALID_INDICATORS:err.append('unknown GWP/scope indicator')
        if not (row.get('licence_status') in ('CC_BY_4_0','USER_LICENSED','VERIFIED_REUSABLE')):err.append('licence not cleared')
        if row.get('evidence_reviewed')!='yes':err.append('source evidence not reviewed')
        if row.get('source_file_verified')!='yes':err.append('original source file not independently validated')
        if err:issues.append({'row':i,'factor_id':fid,'issues':err})
        else: passes.append(fid)
    return {'file':str(path),'total_rows':len(rows),'approved_rows':len(passes),'blocked_rows':len(issues),
            'approved_ids':passes,'issues':issues}

if __name__=='__main__':
    ap=argparse.ArgumentParser();ap.add_argument('csv_file',type=Path);args=ap.parse_args()
    r=validate(args.csv_file)
    print(json.dumps(r,indent=2));raise SystemExit(1 if r['blocked_rows'] else 0)