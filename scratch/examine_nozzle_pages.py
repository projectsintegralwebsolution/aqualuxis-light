import fitz

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

for p in range(24, 38):
    examine_page(p, f"Catalogue Page {p}")
