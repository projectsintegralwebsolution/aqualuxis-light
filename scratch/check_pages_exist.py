import os
from PIL import Image

# Let's inspect pages 6 to 36 in scratch/pdf_pages
print("Examining available pages...")
for p in range(6, 37):
    path = f"scratch/pdf_pages/page_{p:02d}.png"
    if os.path.exists(path):
        im = Image.open(path)
        print(f"Page {p:02d}: {im.size}")
