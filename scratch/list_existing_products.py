import re

with open('src/data/products.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# Match each product block
pattern = r'\{\s*"id":\s*"([^"]+)",\s*"code":\s*"([^"]+)",\s*"name":\s*"([^"]+)",\s*"slug":\s*"([^"]+)"'
matches = re.findall(pattern, text)

print(f"Total existing products: {len(matches)}")
for i, m in enumerate(matches):
    print(f"{i+1}. id: {m[0]} | code: {m[1]} | slug: {m[3]}")
