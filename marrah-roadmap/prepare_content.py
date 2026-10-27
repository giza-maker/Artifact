"""Freeze the already-reviewed research into this standalone public showcase."""
import json
import pathlib
import shutil
import argparse
import zipfile
import hashlib

HERE = pathlib.Path(__file__).resolve().parent
parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('--source', type=pathlib.Path, required=True, help='Reviewed research root containing deliverables/ and specs/')
SOURCE = parser.parse_args().source.resolve(strict=True)
for folder in ('data', 'downloads'):
    (HERE / folder).mkdir(parents=True, exist_ok=True)
for name in ('gulf-production-roadmap.pdf', 'uae-worked-example-economics.xlsx', 'gulf-production-backbone.zip'):
    shutil.copy2(SOURCE / 'deliverables' / name, HERE / 'downloads' / name)
evidence = json.loads((SOURCE / 'deliverables/evidence-register.json').read_text(encoding='utf-8-sig'))
with zipfile.ZipFile(SOURCE / 'deliverables/gulf-production-backbone.zip') as package:
    for source_id, currency in [('A04', 'aed'), ('A05', 'usd')]:
        item = next(s for s in evidence['sources'] if s['id'] == source_id)
        original = f'evidence/rate-cards/meta-whatsapp-{currency}-list-rates-effective-2026-10-01.xlsx'
        payload = package.read(original)
        assert hashlib.sha256(payload).hexdigest() == item['sha256']
        item['archive'] = f'downloads/meta-whatsapp-{currency}-rates-2026-10-01.xlsx'
        (HERE / item['archive']).write_bytes(payload)
(HERE / 'data/evidence.json').write_text(json.dumps(evidence, ensure_ascii=False, indent=2), encoding='utf-8')
# Make the public package self-contained; author-only Page access is not a prerequisite.
with zipfile.ZipFile(SOURCE / 'deliverables/gulf-production-backbone.zip') as original:
    payloads = {name: original.read(name) for name in original.namelist() if name != 'manifest-sha256.json'}
start = payloads['START_HERE.txt'].decode('utf-8').replace('\r\r\n', '\n').replace('\r\n', '\n')
first, tail = start.split('EDITABLE ROADMAP', 1)
_, rest = tail.split('\nSCOPE', 1)
start = first + '''PUBLIC SHOWCASE AND EDITABLE WORKING TEXT

https://giza-maker.github.io/Artifact/marrah-roadmap/

The public showcase is a curated interactive brief. gulf-production-roadmap.pdf
contains the complete substantive baseline; production-backbone.json preserves
editable text sections for tooling. No author-only account is required.
Later edits do not automatically refresh these static research files.

SCOPE''' + rest
payloads['START_HERE.txt'] = start.encode('utf-8')
payloads['QA-SUMMARY.txt'] += b'\nPublic showcase export: access instructions point to the public brief. START_HERE and this note were updated; manifest regenerated. Research, model and specification payloads unchanged.\n'
manifest = {name: hashlib.sha256(data).hexdigest() for name, data in payloads.items()}
payloads['manifest-sha256.json'] = json.dumps(manifest, indent=2).encode('utf-8')
with zipfile.ZipFile(HERE / 'downloads/gulf-production-backbone.zip', 'w', compression=zipfile.ZIP_DEFLATED) as public:
    for name, data in payloads.items():
        public.writestr(name, data)
backlog = []
for filename, scope in [('production-backlog.json', 'core'), ('gcc-expansion-backlog.json', 'extension')]:
    data = json.loads((SOURCE / 'specs' / filename).read_text(encoding='utf-8-sig'))
    for item in data['items']:
        backlog.append(dict(item, scope=scope))
(HERE / 'data/backlog.json').write_text(json.dumps(backlog, ensure_ascii=False, indent=2), encoding='utf-8')
print(f'Frozen {len(evidence["sources"])} evidence entries and {len(backlog)} candidate backlog items; prepared three reviewed downloads and verified rate-card mirrors.')
