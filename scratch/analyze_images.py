import pymupdf

doc = pymupdf.open('scratch/catalogue_extracted/AQUALUXIS LIGHT CATLOGUE.pdf')

for pno in range(3, 36):
    page = doc[pno]
    print(f'=== Page {pno+1} ===')
    # get text blocks
    blocks = page.get_text('blocks')
    for b in blocks:
        # b is (x0, y0, x1, y1, text, block_no, block_type)
        if b[4].strip():
            print(f'   Text ({b[0]:.1f}, {b[1]:.1f}, {b[2]:.1f}, {b[3]:.1f}): {b[4].strip()[:60]}...')
    for img_info in page.get_images():
        xref = img_info[0]
        rects = page.get_image_rects(xref)
        base = doc.extract_image(xref)
        w, h, ext = base['width'], base['height'], base['ext']
        if rects:
            r = rects[0]
            print(f'   Img xref {xref} ({w}x{h} {ext}) at ({r.x0:.1f}, {r.y0:.1f}, {r.x1:.1f}, {r.y1:.1f})')
