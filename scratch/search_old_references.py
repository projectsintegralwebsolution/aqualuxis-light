import os
import glob
import re

files = glob.glob('src/**/*', recursive=True)

old_slug_samples = [
    'hf00', 'hf06', 'hf012', 'hf018', 'hf020', 'hf022', 'hf023', 'hf039',
    'hf043', 'hf052', 'hf058', 'hf062', 'hf076', 'hf078', 'hf080', 'hf063',
    'hf064', 'hf065', 'hf072', 'hf077'
]

results = []
for f in files:
    if os.path.isfile(f) and (f.endswith('.tsx') or f.endswith('.ts') or f.endswith('.json')):
        if 'src\\data\\products.ts' in f or 'src/data/products.ts' in f:
            continue
        try:
            with open(f, 'r', encoding='utf-8') as fp:
                content = fp.read()
            for s in old_slug_samples:
                if s in content.lower():
                    results.append((f, s))
        except Exception as e:
            pass

print(f"Occurrences found outside src/data/products.ts: {len(results)}")
for r in set(results):
    print(f"  {r[0]} mentions '{r[1]}'")
