import fitz
import os

doc = fitz.open('scratch/catalogue_extracted/AQUALUXIS LIGHT CATLOGUE.pdf')
out_dir = 'scratch/pdf_pages'
os.makedirs(out_dir, exist_ok=True)

for i in range(len(doc)):
    page = doc[i]
    pix = page.get_pixmap(dpi=150)
    pix.save(os.path.join(out_dir, f"page_{i+1:02d}.png"))

print(f"Rendered {len(doc)} pages to {out_dir}")
