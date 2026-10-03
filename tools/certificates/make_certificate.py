#!/usr/bin/env python3
"""CHIEF Certificate of Authenticity generator.

Reproduces the approved certificate design (A5 landscape, Noto Serif, gold frame) exactly,
with the coordinates taken from the approved PDF (CHIEF-SP-011-01, Oct 2026).

Usage:
  python3 tools/certificates/make_certificate.py \
      --title "Two as One" --artwork-no 11 --year 2026 --tier super \
      --size "150 × 112 cm" --finish "Perspex · Gloss finish" \
      --copy 1 --collector "Collector Name" --out out.pdf

Privacy: collector names are never stored in this (public) repository. Output PDFs go
outside the repo; only the anonymous ledger (issued.json) is kept here.
"""
import argparse, json, os, datetime
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

HERE = os.path.dirname(os.path.abspath(__file__))
pdfmetrics.registerFont(TTFont('NS', os.path.join(HERE, 'fonts', 'NotoSerif-Regular.ttf')))
pdfmetrics.registerFont(TTFont('NSB', os.path.join(HERE, 'fonts', 'NotoSerif-Bold.ttf')))

W, H = 595.276, 419.528
GOLD = (0.69803926, 0.5764706, 0.34509806)
INK = (0.08235294, 0.08235294, 0.08235294)
GREY = (0.43529413, 0.41960786, 0.3882353)
BAND = (0.95686277, 0.9411765, 0.90588238)
BAND2 = (0.98039218, 0.972549, 0.9529412)
TIERS = {
    'super': {'label': 'SUPER PREMIUM', 'total': 7, 'code': 'SP'},
    'premium': {'label': 'PREMIUM', 'total': 25, 'code': 'PR'},
    'late-night': {'label': 'OPEN AFTER MIDNIGHT', 'total': 25, 'code': 'AM'},
}


def make(out, title, artwork_no, year, tier, size, finish, copy, collector):
    t = TIERS[tier]
    total = t['total']
    if not 1 <= copy <= total:
        raise SystemExit(f'Copy number must be between 1 and {total}')
    cert_id = f"CHIEF-{t['code']}-{artwork_no:03d}-{copy:02d}"
    c = canvas.Canvas(out, pagesize=(W, H))
    c.setTitle(f'Certificate of Authenticity · {title} · {copy}/{total}')
    c.setAuthor('Eran Yerushalmi (CHIEF)')
    # bands
    c.setFillColorRGB(*BAND); c.rect(41.2, 166.505, 512.95, 39.55, stroke=0, fill=1)
    c.setFillColorRGB(*BAND2); c.rect(41.2, 139.105, 512.95, 27.35, stroke=0, fill=1)
    # logo
    c.drawImage(os.path.join(HERE, 'chief-logo-coa.png'), 57.2, 306.155, 92.15, 78.45, mask='auto')
    # header right
    c.setFillColorRGB(*GOLD); c.setFont('NSB', 8.5); c.drawRightString(547.25, 375.455, t['label'])
    c.setFillColorRGB(*INK); c.setFont('NSB', 13); c.drawRightString(547.2, 353.355, f'LIMITED EDITION OF {total}')
    # title + subtitle
    cx = W / 2
    c.setFont('NSB', 19); c.drawCentredString(cx, 275.355, 'CERTIFICATE OF AUTHENTICITY')
    c.setFillColorRGB(*GREY); c.setFont('NS', 8.5)
    c.drawCentredString(cx, 256.805, 'This document certifies that the artwork described below is an authentic work by Eran Yerushalmi (CHIEF).')
    # fields
    cols = (48.25, 255.2, 408.25)
    rows = (
        (232.855, 215.855, ('ARTWORK TITLE', title), ('YEAR', str(year)), ('ARTWORK NO.', f'No. {artwork_no}')),
        (193.305, 176.305, ('PRINT SIZE', size), ('MEDIUM / FINISH', finish), ('EDITION NUMBER', f'{copy} / {total}')),
    )
    for ly, vy, *cells in rows:
        for x, (label, value) in zip(cols, cells):
            c.setFillColorRGB(*GOLD); c.setFont('NSB', 7.5); c.drawString(x, ly, label)
            c.setFillColorRGB(*INK); c.setFont('NS', 11.5); c.drawString(x, vy, value)
    # collector
    c.setFillColorRGB(*GOLD); c.setFont('NSB', 9)
    c.drawCentredString(cx, 152.105, f'ORIGINAL COLLECTOR  ·  {collector.upper()}')
    c.setFillColorRGB(*GREY); c.setFont('NS', 8)
    c.drawCentredString(cx, 125.505, f'This edition is strictly limited to {total} signed and numbered prints. Edition {copy}/{total} is recorded as sold to the collector named above.')
    # signature / date / id
    c.setFillColorRGB(*INK); c.setFont('NS', 9)
    for x in (126.7, 297.7):
        c.drawCentredString(x, 106.155, '_' * 24)
    c.drawCentredString(468.75, 106.155, cert_id)
    c.setFillColorRGB(*GOLD); c.setFont('NSB', 7)
    for x, label in ((126.7, 'ARTIST SIGNATURE'), (297.8, 'DATE'), (468.7, 'CERTIFICATE ID')):
        c.drawCentredString(x, 90.255, label)
    # footer
    c.setFillColorRGB(*GREY); c.setFont('NSB', 6.5)
    c.drawCentredString(cx, 16.305, 'ERANCHIEF.COM  •  FINE ART PHOTOGRAPHY  •  VALID ONLY WITH ORIGINAL ARTIST SIGNATURE')
    # frame
    c.setStrokeColorRGB(*GOLD); c.setLineWidth(1.5); c.setLineJoin(1)
    c.rect(18.75, 15.155, 576.5 - 18.75, 400.805 - 15.155, stroke=1, fill=0)
    c.showPage(); c.save()
    return cert_id


def record(cert_id, args):
    """Anonymous ledger of issued certificates (no collector names) so edition numbers never repeat."""
    path = os.path.join(HERE, 'issued.json')
    ledger = json.load(open(path)) if os.path.exists(path) else []
    if any(e['certificate_id'] == cert_id for e in ledger):
        raise SystemExit(f'{cert_id} was already issued')
    ledger.append({'certificate_id': cert_id, 'artwork_no': args.artwork_no, 'title': args.title, 'tier': args.tier,
                   'copy': args.copy, 'size': args.size, 'finish': args.finish, 'issued': datetime.date.today().isoformat()})
    json.dump(ledger, open(path, 'w'), ensure_ascii=False, indent=1)


if __name__ == '__main__':
    p = argparse.ArgumentParser()
    p.add_argument('--title', required=True); p.add_argument('--artwork-no', type=int, required=True)
    p.add_argument('--year', type=int, required=True); p.add_argument('--tier', choices=TIERS, required=True)
    p.add_argument('--size', required=True); p.add_argument('--finish', required=True)
    p.add_argument('--copy', type=int, required=True); p.add_argument('--collector', required=True)
    p.add_argument('--out', required=True); p.add_argument('--record', action='store_true', help='add to the anonymous ledger')
    a = p.parse_args()
    cid = make(a.out, a.title, a.artwork_no, a.year, a.tier, a.size, a.finish, a.copy, a.collector)
    if a.record:
        record(cid, a)
    print(cid, a.out)
