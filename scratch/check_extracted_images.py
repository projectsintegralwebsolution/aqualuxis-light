import os
import glob

files = glob.glob('scratch/extracted_images/*.*')
print(f"Total extracted files: {len(files)}")

# Group by page
from collections import defaultdict
by_page = defaultdict(list)
for f in files:
    name = os.path.basename(f)
    # name format: pX_...
    p = name.split('_')[0]
    by_page[p].append(f)

# Sort pages numerically
sorted_pages = sorted(by_page.keys(), key=lambda x: int(x[1:]))
for p in sorted_pages:
    print(f"\n{p}: {len(by_page[p])} images")
    for f in by_page[p]:
        size = os.path.getsize(f)
        print(f"  {os.path.basename(f)} ({size // 1024} KB)")
