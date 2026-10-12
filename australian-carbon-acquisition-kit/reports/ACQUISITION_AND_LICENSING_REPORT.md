# Carbon Data and Engineering Specifications — Acquisition / Validation Report

**Date:** 12 October 2026  
**Jurisdiction:** Australia; priority Victoria  
**Outcome:** PARTIAL — verified sources and assembled runnable acquisition kit; remote files not downloaded in this environment.

## Attempted official binary acquisitions

The six `reports/acquisition_run.json` entries record the genuine attempt to download: NECD v2.0 XLSX, NGA 2026 XLSX, NGA 2026 PDF, NABERS v2026.3 database XLSX, NABERS v2026.3 technical workbook XLSX, DTP catalogue XLSX. All six failed at network DNS resolution in the execution environment. No original downloaded workbooks have been silently substituted, and no source SHA-256 hashes are fabricated.

## Successfully checked via official research web sources

- **NGA 2026**: the publishing page confirms the XLSX/PDF availability; publication PDF identifies CC BY 4.0. Published Table 1 provides location-based Scope 2 and 3 electricity factors. Data was checked for a limited subset and added to the provisional CSV; no production approvals issued.
- **NECD September 2026 v2.0**: official resource landing page confirms workbook publication, with supporting May 2026 Guidance Note; the Guidance Note identifies product, transport, fuel, electricity, waste, concrete, benchmark and assumptions sections.
- **NABERS October 2026 database v2026.3**: official page confirms main database and technical workbook.
- **DTP catalogue**: official site confirms one XLSX listing current and archived technical publications, and separate searchable documents from VicRoads and PTV; site updated 7 October 2026.
- **ecologiQ / Recycled First**: official pages define eligible project procurement and documentation context. Cannot assume general permission to use alternative materials.
- **EPA Victoria**: confirmed construction guidance and general environmental duty.
- **NGER / Clean Energy Regulator**: scheme accounting, reporting year and legal determination must be separated from general NGA estimates.
- **Standards Australia**: Reader Room terms explicitly prohibit copying or downloading view-only standards and commercial redistribution.
- **EPiC**: checked University of Melbourne use and distribution limitations.

## Data-quality findings

1. NGA Table 1 factors have clearly different Scope 2 versus Scope 3 boundaries. They cannot be collapsed into a generic GWP material factor or presented as NGER reporting data.
2. Preliminary PDF text-versus-visual review indicated a possible Tasmania figure inconsistency; both Tasmania factor slots are intentionally blank and flagged pending review against source workbook.
3. Public workbook numeric cells cannot be assumed to be emissions factors. They may represent conversions, years, quantities, rates or upstream formula parameters.
4. DTP technical catalogue metadata does not grant a right to redistribute every referenced publication. Each document must pass a licence review.
5. A downloaded EPD is not automatically a valid comparative material factor: product, PCR, declaration unit, GWP indicator, lifecycle boundary and validity must match.
6. Zero or negative factors require method-specific handling. Missing values must never be converted to zero.

## Known legally restricted or account-controlled categories

| Source category | Allowed initial approach | Not assumed |
|---|---|---|
| Standards Australia / AS, AS/NZS | Metadata and official links | Bulk download or redistributed full text |
| AusLCI registered factors | User-authorised licensed import | Anonymous scraping or redistribution |
| University of Melbourne EPiC | Use consistent with its licence; separate licence for commercially distributed data products | Embedded third-party data released with application |
| EPD operator declarations | Per-product linking and authorised extraction | Unrestricted mass harvesting |
| DTP and council technical PDFs | Catalogue metadata and document-by-document permission check | Blanket republication of every PDF |

## Before marking the two user tasks complete

- [ ] Every priority official workbook has been downloaded in a network-enabled, authorised environment.
- [ ] Each workbook has been fingerprinted, structurally validated, parsed and sheet/cell indexed.
- [ ] Emission-factor ranges are mapped against official methodology, units and boundary definitions.
- [ ] Every mapped factor row has passed machine validation and appropriate source checks.
- [ ] DTP catalogue has been downloaded and current/superseded documents indexed.
- [ ] Each eligible standards/specification document has passed licence checks and is acquired where allowed.
- [ ] Reviewer has checked source versions and applicability to the engineering project.

Until then, the two tasks **are not complete**, even though the acquisition implementation and core source directory are ready.