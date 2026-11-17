import subprocess
import re

content = subprocess.check_output(['git', 'show', '4ad4af8:src/data/products.ts'], text=True, encoding='utf-8')

print(f"Length of git products.ts: {len(content)}")
slugs = re.findall(r'"slug":\s*"([^"]+)"', content)
print(f"Total products in git: {len(slugs)}")
for i, s in enumerate(slugs):
    print(f"  {i+1}. {s}")

# Check CATALOGUES in 4ad4af8
cat_match = re.search(r'export const CATALOGUES: CatalogueItem\[\] = (\[[\s\S]*?\]);', content)
if cat_match:
    print("\nCATALOGUES in 4ad4af8:")
    print(cat_match.group(1)[:300])
