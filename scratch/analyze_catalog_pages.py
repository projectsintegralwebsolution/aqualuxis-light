import fitz
import os
from PIL import Image

doc = fitz.open('scratch/catalogue_extracted/AQUALUXIS LIGHT CATLOGUE.pdf')

# Map product codes and their catalogue page numbers (0-indexed)
product_pages = {
    "AL00 - AL015 (Surface Pool Light)": [2, 3, 4], # Pages 3, 4, 5
    "AL016 - AL029(A) (ABS Body Pool Light)": [5, 6, 7, 8, 9], # Pages 6, 7, 8, 9, 10
    "AL030 / AL031 (SS Body Pool Light)": [10, 11], # Pages 11, 12
    "AL032 - AL036 (Concealed Pool Light)": [12, 13], # Pages 13, 14
    "AL037 - AL040 (Full SS Spot Fountain)": [14], # Page 15
    "AL041 - AL052 (SS Spot Fountain)": [15, 16, 17], # Pages 16, 17, 18
    "AL053 - AL057 (Nozzle Fountain Light)": [19], # Page 20
    "AL058 - AL061 (Adjustable Nozzle Light)": [20], # Page 21
    "AL062 (LED Wall Washer)": [21], # Page 22
    "AL063 (Umbrella Nozzle)": [22, 23], # Pages 23, 24
    "AL064 (Foam Nozzle)": [22, 23], # Pages 23, 24
    "AL065 (Finger Nozzle)": [23, 24], # Pages 24, 25
    "AL066 (Long Foam Nozzle)": [23, 24], # Pages 24, 25
    "AL067 (Geyser / Cascade Jet)": [24, 25], # Pages 25, 26
    "AL068 (SS Foam Nozzle)": [24, 25], # Pages 25, 26
    "AL069 (Tulip Nozzle)": [25, 26], # Pages 26, 27
    "AL070 (Fan Jet Nozzle)": [25, 26], # Pages 26, 27
    "AL071 (Revolving Nozzle)": [26, 27], # Pages 27, 28
    "AL072 (Diamond / Flower Cluster)": [26, 27], # Pages 27, 28
    "AL073 (Crown Nozzle)": [27, 28], # Pages 28, 29
    "AL074 (Flower Nozzle)": [27, 28], # Pages 28, 29
    "AL075 (SS Water Cascade / Blade)": [28, 29], # Pages 29, 30
    "AL076 (SS Step Water Blade)": [29, 30], # Pages 30, 31
    "AL077 (SS Water Cascade)": [30, 31], # Pages 31, 32
    "AL078 (Cobra Nozzle)": [31, 32], # Pages 32, 33
    "AL079 (Dolphin Nozzle)": [32, 33], # Pages 33, 34
    "AL080 (Acrylic Cobra Nozzle)": [33, 34], # Pages 34, 35
    "AL081 (Acrylic Blade Nozzle)": [34, 35], # Pages 35, 36
}

for prod, pages in product_pages.items():
    print(f"\n==================================================")
    print(f"PRODUCT: {prod}")
    print(f"==================================================")
    for p_idx in pages:
        page = doc[p_idx]
        images = page.get_images(full=True)
        print(f"  Page {p_idx+1}: {len(images)} images")
        for idx, img in enumerate(images):
            xref = img[0]
            bimg = doc.extract_image(xref)
            w, h = bimg["width"], bimg["height"]
            ext = bimg["ext"]
            # Look at aspect ratio
            aspect = w / h if h > 0 else 1
            print(f"    - xref {xref}: {w}x{h} (aspect {aspect:.2f}, {ext})")
