import fitz
from PIL import Image
import os

doc = fitz.open('scratch/catalogue_extracted/AQUALUXIS LIGHT CATLOGUE.pdf')

def examine_page(pno, label):
    page = doc[pno - 1]
    text = page.get_text().strip().replace('\n', ' ')
    imgs = page.get_images(full=True)
    print(f"\n=======================================================")
    print(f"PAGE {pno}: {label}")
    print(f"Text: {text[:140]}")
    print(f"Images ({len(imgs)}):")
    for idx, img in enumerate(imgs):
        xref = img[0]
        rects = page.get_image_rects(xref)
        bimg = doc.extract_image(xref)
        w, h, ext = bimg["width"], bimg["height"], bimg["ext"]
        aspect = w / h if h > 0 else 1
        bbox_str = f"bbox=({rects[0].x0:.1f}, {rects[0].y0:.1f}, {rects[0].x1:.1f}, {rects[0].y1:.1f})" if rects else ""
        print(f"  [{idx+1}] xref {xref}: {w}x{h} ({ext}, aspect {aspect:.2f}) {bbox_str}")

# Check SS Body (P11, P12)
examine_page(11, "SS Body Pool Light (AL030/AL031)")
examine_page(12, "SS Body Pool Light Details / Photo")

# Check Concealed Pool Light (P13, P14)
examine_page(13, "Concealed Pool Light (AL032-AL036)")
examine_page(14, "Concealed Pool Light Details / Photo")

# Check Full SS Spot (P15)
examine_page(15, "Full SS Spot Fountain Light (AL037-AL040)")

# Check SS Spot (P16, P17, P18)
examine_page(16, "SS Spot Fountain Light (AL041-AL044)")
examine_page(17, "SS Nozzle Light (AL045-AL048)")
examine_page(18, "Adjustable Nozzle (AL049-AL052)")

# Check Fountain Nozzle Light (P20, P21)
examine_page(20, "Fountain Light (AL053-AL057)")
examine_page(21, "Adjustable Fountain Nozzle Light (AL058-AL061)")

# Check Wall Washer (P22)
examine_page(22, "LED Wall Washer (AL062)")
