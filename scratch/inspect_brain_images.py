import os
from PIL import Image

brain_dir = r'C:\Users\admin\.gemini\antigravity\brain\8ba9a458-02c7-47c8-a6b9-0bfa883c4f88'
files = [f for f in os.listdir(brain_dir) if f.endswith('.jpg')]

print(f"Inspecting {len(files)} files in brain directory:")
for f in sorted(files):
    p = os.path.join(brain_dir, f)
    im = Image.open(p)
    print(f"  {f}: {im.size}")
