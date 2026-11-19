import re
with open('src/data/products.ts', 'r', encoding='utf-8') as f:
    text = f.read()

ids = re.findall(r'"id":\s*"([^"]+)"', text)
for i in ids:
    print(i)
