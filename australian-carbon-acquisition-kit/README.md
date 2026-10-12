# NISARVA — Engineering Carbon Intelligence

**NISARVA** is the project and product name for this Australian engineering carbon emissions and lifecycle-assessment AI agent. The name is a modern coinage inspired by Sanskrit *Nisarga* (nature); it is not claimed to be a traditional Sanskrit word.

**Tagline:** Engineering Intelligence, Inspired by Nature.

**Project status:** Data acquisition and verification in progress. NISARVA is not yet a production-ready carbon factor database.

## Australian Engineering Carbon Data Acquisition Kit

**Research and acquisition checkpoint:** 12 October 2026.  
**Primary jurisdiction:** Commonwealth of Australia and Victoria (roads and civil infrastructure).

## Important — do not mistake source identification for full data acquisition

This NISARVA acquisition kit is a working **data acquisition and validation pipeline**, standards/specification metadata registry, verified source bibliography, and a small **web-cross-checked example** from the 2026 NGA electricity table. It is **not** a complete ingested Australian factor database. The execution environment used to create this kit could access official government web pages via a research tool, but had **no functioning direct binary download network**: all six first-pass workbook/PDF fetches failed DNS resolution. See `reports/acquisition_run.json`. Source original XLSX/PDF files are therefore not bundled, and web-cross-checked factor rows are not approved for production.

The user should not need to buy API credits to run these tools. A network-enabled machine or Freebuff coding workspace will be needed to fetch the public files. Registration/licence-gated sources require user authorisation. Not all Australian standards can legally be copied to an agent.

## Inventory

- `config/source_registry.json`: 24 source records with official URLs, source type, jurisdiction, known licence/access caveats, priority and current status.
- `scripts/acquire_and_inventory.py`: downloader, official-domain restriction, file hash, ZIP CRC and PDF magic checks, detailed XLSX worksheet/cell inventory including formulas and extraction status.
- `scripts/validate_mapped_factors.py`: strict mapped-factor checks. Missing source checks, units, GWP indicators and licence clearance fail approval.
- `config/factor_mapping_template.csv`: required normalized factor structure for importing worksheets after technical mapping.
- `data/nga2026_web_crosschecked_sample.csv`: 2026 NGA Table 1 values manually cross-checked against official PDF. **No row is approved for production** pending the original file and table comparison. Tasmania has been withheld due possible PDF rendered-text disagreement.
- `data/standards_specifications_index.csv`: 30 relevant standards and transport specification identifiers, without copyright-restricted full text. Editions are deliberately unverified.
- `data/regulatory_observations.json`: 6 structured summaries based on official pages, with legal/applicability review restrictions.
- `tests/test_acquisition_and_factors.py`: automated acquisition, schema and sample calculation tests.
- `reports/ACQUISITION_AND_LICENSING_REPORT.md`: download status, known restrictions, limits and completion checklist.

## Installation and execution (network-enabled Freebuff/Codex environment)

Python 3.11+ is sufficient for the download and raw XLSX inventory phase. All code uses the Python standard library; no LLM API key is needed.

```bash
cd australian_carbon_acquisition_kit
python -m unittest discover -s tests -v
python scripts/acquire_and_inventory.py
# Or retrieve additional explicitly listed public methodology PDFs:
python scripts/acquire_and_inventory.py --all-public
# If a dataset is still blocked, use the authorised download link in the registry
# and install the official file in downloads/; then adapt importer to inventory it.
```

Expected after download: `downloads/<source-id>.xlsx` or PDF, plus:
- `reports/acquisition_run.json` listing statuses, sha256, file size and worksheet metrics.
- `data/raw_xlsx_cell_inventory.csv` — all parsed spreadsheet cells with source-sheet-cell references and candidate flag.

**Factor validation requires a second step.** Review sheet headers and source footnotes. Map numeric source cells to material, units, functional/declared unit, GWP indicator, lifecycle boundary, jurisdiction, year, method, and licensing status. Fill `config/factor_mapping_template.csv` to create a mapped CSV. The validator will reject any factor until the original source is confirmed, the evidence is reviewed and licence use cleared:

```bash
python scripts/validate_mapped_factors.py path/to/mapped_factors.csv
```

For NGA 2026, do not use these general estimation factors as a substitute for the legally required NGER Measurement Determination. For the national embodied carbon databook, do not mix asset-level benchmark values with process factors in a calculation without a non-double-counting design.

## Permitted and restricted documents

1. NGA Factors 2026 PDF identifies **CC BY 4.0**, with required source attribution (see PDF page 2). Preserve attribution and any third-party restrictions.
2. Victorian government website content generally carries CC BY 4.0 subject to exceptions and third-party material; specific DTP technical publication reuse permission must be confirmed at document level.
3. Standards Australia Reader Room **prohibits downloads, reproduction and embedding** its selected viewer documents in applications without permission. Store links, metadata and user-authorised access references only.
4. EPiC allows specified internal and client-service uses but requires a separate licence when its database is incorporated into an externally commercially distributed product; check actual terms for your use.
5. AusLCI factor downloads involve registration and applicable licence conditions.
6. EPD Australasia declarations are verified case by case; the source registry is not a licence to harvest all EPDs.

## Practical completion plan for Freebuff

1. Run the official public acquisition script and resolve any blocked files using source owners or authorised uploads.
2. Inventory the NECD 2026, NGA 2026, NABERS v2026.3 and DTP catalogue. Count and fingerprint every sheet, table and reference.
3. Create source-specific column mappings using accompanying technical notes. Every individual mapped factor must include source sheet/cell or page/table locator and units.
4. Cross-check a representative sample from each worksheet against the original visual table, and perform a full automated numeric reconciliation wherever workbook formulas and metadata permit. Keep unsupported rows quarantined.
5. Use the DTP catalogue to index current **and** superseded technical publications; fetch only those permitted for ingestion, and retain licence evidence. Do not treat Wyndham Council roadworks specifications as necessarily identical to current DTP documents.
6. Require technical and, where necessary, legal reviewer approval before publishing a national factor release or declaring standard compliance.
7. Produce immutable manifests: each approved factor must be tied to dataset version, original checksum, source locator, mapping method and reviewer approval.

## Primary official portals

- NECD: https://www.infrastructure.gov.au/infrastructure-transport-vehicles/net-zero/working-states-and-territories-decarbonise-infrastructure-and-transport
- NGA: https://www.dcceew.gov.au/climate-change/publications/national-greenhouse-accounts-factors-2026
- NABERS: https://www.nabers.gov.au/publications/national-emission-factors-database
- DTP: https://www.vic.gov.au/dtp-technical-publications
- ecologiQ: https://bigbuild.vic.gov.au/about/ecologiq/resources
- Standards Australia terms: https://www.standards.org.au/legal/rr-terms
- AusLCI: https://www.auslci.com.au/emission-factors/
- EPiC licence: https://msd.unimelb.edu.au/research/impact-agendas/climate-action/environmental-performance-in-construction/usage-and-licence-information

**Engineering-use caution:** A complete list of source factors is not synonymous with a fit-for-purpose project model. Project applicability, boundaries, quality, methods and individual material specifications always need review.