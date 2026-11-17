import pymupdf

doc = pymupdf.open('scratch/catalogue_extracted/AQUALUXIS LIGHT CATLOGUE.pdf')

def inspect_page(pno):
    page = doc[pno - 1]
    print(f"\n==================== PAGE {pno} ====================")
    text = page.get_text()
    models = []
    for line in text.split('\n'):
        if 'AL' in line:
            models.append(line.strip())
    print("Models mentioned:", models)
    
    img_list = page.get_images()
    print(f"Total raw images on page: {len(img_list)}")
    for idx, img in enumerate(img_list):
        xref = img[0]
        rects = page.get_image_rects(xref)
        base = doc.extract_image(xref)
        rect_str = f"({rects[0].x0:.1f}, {rects[0].y0:.1f}, {rects[0].x1:.1f}, {rects[0].y1:.1f})" if rects else "none"
        print(f"  Img #{idx+1} [xref {xref}] {base['width']}x{base['height']} {base['ext']} at {rect_str}")

# Inspect pages 14 to 36
for p in range(14, 37):
    inspect_page(p)
