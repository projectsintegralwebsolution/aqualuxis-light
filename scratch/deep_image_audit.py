import fitz
from PIL import Image
import io
import os

doc = fitz.open('scratch/catalogue_extracted/AQUALUXIS LIGHT CATLOGUE.pdf')

# Let's write a report of every page's text and image xrefs
for page_idx in range(len(doc)):
    page = doc[page_idx]
    text = page.get_text().strip().replace('\n', ' ')
    imgs = page.get_images(full=True)
    print(f"=== PAGE {page_idx+1} ({len(imgs)} images) ===")
    print(f"Text: {text[:120]}")
    for idx, img in enumerate(imgs):
        xref = img[0]
        # Get bounding box on page if possible
        rects = page.get_image_rects(xref)
        bimg = doc.extract_image(xref)
        w, h, ext = bimg["width"], bimg["height"], bimg["ext"]
        r_str = f"bbox={rects[0]}" if rects else "no bbox"
        print(f"   xref {xref}: {w}x{h} ({ext}), {r_str}")
    print()
