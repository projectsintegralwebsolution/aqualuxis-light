import fitz

doc = fitz.open('scratch/catalogue_extracted/AQUALUXIS LIGHT CATLOGUE.pdf')
for p_no in range(5, 36):
    page = doc[p_no]
    print(f"=== PAGE {p_no+1} ===")
    img_list = page.get_images()
    for idx, img in enumerate(img_list):
        xref = img[0]
        base = doc.extract_image(xref)
        w, h = base['width'], base['height']
        if w >= 250 and h >= 150:
            # find where it is placed on the page
            rects = page.get_image_rects(xref)
            print(f"  Img {idx}: xref={xref}, size={w}x{h}, rects={rects}")
