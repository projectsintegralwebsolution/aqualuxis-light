import os
from PIL import Image

search_dirs = [
    'public/assets',
    'scratch',
    r'C:\Users\admin\.gemini\antigravity\brain\8ba9a458-02c7-47c8-a6b9-0bfa883c4f88'
]

print("Searching for existing installation photos...")
found_photos = []

for sdir in search_dirs:
    if not os.path.exists(sdir):
        continue
    for root, dirs, files in os.walk(sdir):
        if 'node_modules' in root or '.git' in root or '.next' in root:
            continue
        for f in files:
            if f.lower().endswith(('.jpg', '.jpeg', '.webp', '.png')):
                p = os.path.join(root, f)
                try:
                    sz = os.path.getsize(p)
                    if sz > 40000: # larger than 40KB
                        im = Image.open(p)
                        w, h = im.size
                        if w >= 600 and h >= 350:
                            found_photos.append((p, w, h, sz))
                except:
                    pass

print(f"Total candidate images found: {len(found_photos)}")
for p, w, h, sz in found_photos[:40]:
    print(f"  {p} ({w}x{h}, {sz//1024}KB)")
