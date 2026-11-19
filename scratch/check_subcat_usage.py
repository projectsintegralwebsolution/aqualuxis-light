import os

for root, dirs, files in os.walk('src'):
    for f in files:
        if f.endswith(('.ts', '.tsx')):
            p = os.path.join(root, f)
            txt = open(p, 'r', encoding='utf-8').read()
            if 'subCategory' in txt:
                print(f"File {p} uses subCategory")
