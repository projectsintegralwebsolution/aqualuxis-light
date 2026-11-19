import re

txt = open('src/data/products.ts', 'r', encoding='utf-8').read()
matches = re.findall(r'"id":\s*"([^"]+)",\s*"code":\s*"([^"]+)",\s*"name":\s*"([^"]+)",.*?category":\s*"([^"]+)",.*?subCategory":\s*"([^"]+)"', txt, re.DOTALL)
for m in matches:
    print(f"ID: {m[0]} | Code: {m[1]} | Cat: {m[3]} | SubCat: {m[4]}")
