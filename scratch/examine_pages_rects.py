import pymupdf
import os
import shutil

doc = pymupdf.open('scratch/catalogue_extracted/AQUALUXIS LIGHT CATLOGUE.pdf')

def examine_page(pno):
    page = doc[pno - 1]
    print(f"\n================ PAGE {pno} ================")
    img_list = page.get_images()
    for idx, img in enumerate(img_list):
        xref = img[0]
        rects = page.get_image_rects(xref)
        base = doc.extract_image(xref)
        rect = rects[0] if rects else None
        r_str = f"({rect.x0:.1f}, {rect.y0:.1f}, {rect.x1:.1f}, {rect.y1:.1f})" if rect else "None"
        print(f"  xref {xref} | size {base['width']}x{base['height']} | ext {base['ext']} | rect {r_str}")

# Let's check pages 24 to 36
for p in range(24, 37):
    examine_page(p)
