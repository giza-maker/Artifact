"""Synthetic OCR input. Original fixture content; never a real purchase."""
import json
from pathlib import Path
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor

root = Path(__file__).resolve().parent.parent
source = json.loads((root / 'fixtures/receipts.json').read_text(encoding='utf-8'))
receipt = next(r for r in source['receipts'] if r['id'] == 'digital_en_aed_001')
target = root / 'fixtures/digital-receipt-synthetic.pdf'
c = canvas.Canvas(str(target), pagesize=(420, 560))
c.setTitle('Nomli synthetic digital grocery receipt')
c.setAuthor('Nomli development fixtures')
c.setFillColor(HexColor('#f97316'))
c.roundRect(28, 492, 38, 38, 10, fill=1, stroke=0)
c.setFillColor(HexColor('#120e0b'))
c.setFont('Helvetica-Bold', 22)
c.drawString(37, 502, 'N')
c.setFont('Helvetica-Bold', 18)
c.drawString(78, 507, 'Nomli fixture receipt')
c.setFont('Helvetica', 9)
c.setFillColor(HexColor('#555555'))
c.drawString(28, 467, 'SYNTHETIC TEST DOCUMENT - NOT A REAL TRANSACTION')
c.setFillColor(HexColor('#191919'))
y = 426
for index, line in enumerate(receipt['printedTextLines']):
    c.setFont('Courier-Bold' if index == 0 or line.startswith('Total') else 'Courier', 10)
    c.drawString(28, y, line)
    y -= 26
c.setStrokeColor(HexColor('#dddddd'))
c.line(28, y+9, 392, y+9)
c.setFont('Helvetica', 9)
c.setFillColor(HexColor('#555555'))
c.drawString(28, 106, 'Currency: AED. Line prices exclude the displayed VAT.')
c.drawString(28, 88, 'No expiry dates printed. Package counts require explicit units.')
c.drawString(28, 70, 'Ground truth: fixtures/receipts.json : digital_en_aed_001')
c.save()
print(target)
