import re

with open('src/data/products.ts', 'r', encoding='utf-8') as f:
    content = f.read()

pattern = re.compile(r'{\s*"id":\s*"([^"]+)",\s*"code":\s*"([^"]+)",\s*"name":\s*"([^"]+)",\s*"slug":\s*"([^"]+)"')
matches = pattern.findall(content)
print(f"Total products: {len(matches)}")
for i, m in enumerate(matches):
    print(f"{i+1}. id={m[0]}, code={m[1]}, slug={m[3]}, name={m[2]}")
