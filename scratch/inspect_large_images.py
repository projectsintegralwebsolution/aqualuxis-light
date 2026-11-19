import os
from PIL import Image

for d in ['scratch/pdf_images', 'scratch/extracted_images']:
    files = [f for f in os.listdir(d) if f.lower().endswith(('.jpg', '.jpeg', '.png', '.webp'))]
    print(f"{d}: {len(files)} images")
    large_files = []
    for f in files:
        try:
            im = Image.open(os.path.join(d, f))
            if im.size[0] >= 400 and im.size[1] >= 250:
                large_files.append((f, im.size))
        except:
            pass
    print(f"  {len(large_files)} high-res (>400x250) images")
    for f, sz in large_files[:15]:
        print(f"    {f}: {sz}")
