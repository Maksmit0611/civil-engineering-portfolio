# NISARVA — Freebuff / Codex handoff: complete actual source acquisition and validation

**Canonical product name:** NISARVA. Refer to the engineering carbon intelligence AI application and all newly created product modules, screens, docs, and examples as **NISARVA**. Do not rename the user's existing general engineering portfolio repository or break older source links. See `AGENTS.md` for project-wide instructions.

## Task contract

You are continuing the NISARVA Australian Engineering Carbon Data Acquisition Kit prepared on 2026-10-12. This is **not yet** an operational, approved emissions database. The previous environment had access to official web research but was unable to download XLSX or PDF source binaries because of DNS/network restrictions. Do not claim anything was downloaded when it was not.

**Your next task is data acquisition and validation, not building a dashboard or choosing a new model.**

Use the files in this package as follows:

1. Read `README.md`, `reports/ACQUISITION_AND_LICENSING_REPORT.md`, `config/source_registry.json` and `reports/acquisition_run.json`.
2. Run `python -m unittest discover -s tests -v`. Confirm all five tests pass.
3. Use `python scripts/acquire_and_inventory.py` in your network-enabled development environment; if its network calls fail, provide clear diagnostics and ask for an authorised upload, not invented data.
4. Download NECD September 2026 v2.0, NGA Factors 2026 (workbook and PDF), NABERS Material Factor Database and Technical Workbook v2026.3, and Victorian DTP Engineering Standards Catalogue from the exact official links in the registry.
5. Respect website terms, rate limits, and document licence conditions. Do not bulk-fetch Standards Australia Reader Room publications or credential-gated content.
6. Record SHA-256, download URL, source date, byte count, sheet count, worksheet names, table regions, formula caches, notes, revisions and import errors for each workbook.
7. For each actual factor table, create reviewed source-specific parsers with explicit column mapping, units, boundaries, GWP indicator, material classification, country/state, factor year and source workbook sheet/cell references.
8. Reconcile all parsed numeric factor values against source cells by programmatic extraction, and visually cross-check complex layouts/table headings/notes. Quarantine unresolved rows.
9. Implement a source-level licence register. Keep data for sources with unclear redistribution permission in a private, local, nonbundled area. User authorisation is needed for AusLCI, restricted EPD sources and EPiC redistribution as specified by their terms.
10. Run `scripts/validate_mapped_factors.py` for approved factor export sets. Its `source_file_verified=yes` condition must only be set after original source and mapping have actually been checked.
11. Ingest DTP catalogue; record every current and archived listed publication's metadata and URL, but acquire full text **only** where the individual document's permissions allow it. Retain superseded statuses and historical applicability.
12. For ISO, EN, PAS, AS and AS/NZS standards, collect titles, source URLs, publication status, applicability and licence references. DO NOT reproduce copyrighted standards full text without permission. Implement optional licensed-user upload where the licence allows AI use.
13. Produce `datasets/approved_factors.csv`, `datasets/dtp_standards_index.csv`, `datasets/source_licence_register.csv`, `datasets/data_quality_log.csv` only when real data has been imported, with non-success rows and gaps separately disclosed. Never create fake success artifacts to pass tests.
14. Produce a new `reports/FINAL_DATA_ACQUISITION_REPORT.md` with counts by source and sheet (raw numeric candidates, mapped candidate factors, rejected factors, independently verified factors and approved factors); cite source documents, link terms, hashes and tests.
15. Do not advance to the LLM brain until all priority public workbook factor ranges are mapped, source permissions verified and regulatorily relevant standards/specification references indexed.

## Required validation semantics

- `DOWNLOAD_SUCCESS`: bytes saved and SHA-256 recorded.
- `STRUCTURE_VALID`: ZIP CRC / XLSX schema or PDF structure confirmed.
- `PARSED`: source cells / table ranges extracted.
- `MAPPED`: columns, units and lifecycle/scope boundaries explicitly associated with source fields.
- `SOURCE_RECONCILED`: mapped factor equals approved source cell, with source locator and source version.
- `ENGINEERING_REVIEWED`: project/specific product applicability, functional unit, GWP method and factor year reviewed.
- `LICENCE_CLEARED`: appropriate permitted use recorded.
- `APPROVED_FOR_PRODUCTION`: all gates satisfied with reviewer approval.

Do not use the words "all factors validated" if any source workbook has not been inspected, any factors remain unmapped or any licensing is outstanding. Deliver the actual data package and evidence in addition to code.

## Important quality checks

- Keep NGA general accounting factors separate from statutory NGER calculations.
- Keep EPD A1-A3, A4, A5 and other modules distinct and do not aggregate overlapping totals.
- Preserve electricity location-based vs market-based methods and Scope 2 vs Scope 3 factors.
- Prevent material manufacturing double counting when importing process data.
- Do not compare material factors with mismatched declared units or GWP indicators.
- A 2026 PDF/manual may not have identical figures to a workbook; investigate any discrepancy before publishing.
- Distinguish the current DTP standard from council variants and historical VicRoads publications.
- Record whether material substitutions require formal approval or testing rather than asserting compliance.