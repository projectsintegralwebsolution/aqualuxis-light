import pymupdf

doc = pymupdf.open('public/assets/catalogue/AQUALUXIS LIGHT CATLOGUE.pdf')
for pno in [3, 4]:
    page = doc[pno]
    for img in page.get_images():
        xref = img[0]
        base_img = doc.extract_image(xref)
        w, h = base_img["width"], base_img["height"]
        print(f"Page {pno+1}, xref {xref}, size {w}x{h}")
