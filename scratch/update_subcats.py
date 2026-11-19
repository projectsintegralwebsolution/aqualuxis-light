import re

file_path = 'src/data/products.ts'
content = open(file_path, 'r', encoding='utf-8').read()

replacements = [
    # 01. Underwater Lighting (5 subcategories)
    ('id": "al00-al015-surface",', '"subCategory": "Surface Mount Lights",', '"subCategory": "SS Surface Swimming Pool Lights",'),
    ('id": "al016-al029a-abs",', '"subCategory": "ABS Pool Lights",', '"subCategory": "ABS Body Swimming Pool Lights",'),
    ('id": "al030-al031-ss",', '"subCategory": "Stainless Steel Pool Lights",', '"subCategory": "SS Body Swimming Pool Lights",'),
    ('id": "al032-al036-concealed",', '"subCategory": "Concealed / In-Ground Lights",', '"subCategory": "Concealed Swimming Pool Lights",'),
    ('id": "al062-wall-washer",', '"subCategory": "Wall Washer Lights",', '"subCategory": "LED Wall Washer Lights",'),

    # 02. Fountain Lighting (4 subcategories)
    ('id": "al037-al040-full-ss-spot",', '"subCategory": "Spot Fountain Lights",', '"subCategory": "Full SS Spot Fountain Lights",'),
    ('id": "al041-al052-ss-spot",', '"subCategory": "Spot Fountain Lights",', '"subCategory": "SS Spot Fountain Lights",'),
    ('id": "al053-al057-nozzle",', '"subCategory": "Nozzle Mount Lights",', '"subCategory": "Nozzle Fountain Lights",'),
    ('id": "al058-al061-adj-nozzle",', '"subCategory": "Nozzle Mount Lights",', '"subCategory": "Adjustable Nozzle Fountain Lights",'),

    # 03. Fountain Nozzles & Water Features (3 subcategories)
    # al063 - al074 already have "Fountain Nozzles"
    ('id": "al075-ss-cascade-blade",', '"subCategory": "Water Cascades & Blades",', '"subCategory": "SS Water Cascade Nozzles",'),
    ('id": "al076-ss-step-blade",', '"subCategory": "Water Cascades & Blades",', '"subCategory": "SS Water Cascade Nozzles",'),
    ('id": "al077-ss-water-cascade",', '"subCategory": "Water Cascades & Blades",', '"subCategory": "SS Water Cascade Nozzles",'),

    ('id": "al078-cobra-nozzle",', '"subCategory": "Decorative Waterfalls",', '"subCategory": "Acrylic Waterfall Nozzles",'),
    ('id": "al079-dolphin-nozzle",', '"subCategory": "Decorative Waterfalls",', '"subCategory": "Acrylic Waterfall Nozzles",'),
    ('id": "al080-acrylic-cobra",', '"subCategory": "Decorative Waterfalls",', '"subCategory": "Acrylic Waterfall Nozzles",'),
    ('id": "al081-acrylic-blade",', '"subCategory": "Water Cascades & Blades",', '"subCategory": "Acrylic Waterfall Nozzles",'),
]

for marker, target, replacement in replacements:
    pos = content.find(marker)
    if pos == -1:
        print(f"Marker not found: {marker}")
        continue
    # find target after marker
    target_pos = content.find(target, pos)
    if target_pos == -1 or target_pos - pos > 500:
        print(f"Target not found near marker: {marker}")
        continue
    content = content[:target_pos] + replacement + content[target_pos + len(target):]
    print(f"Replaced {target} with {replacement} for {marker}")

open(file_path, 'w', encoding='utf-8').write(content)
print("Updated products.ts successfully!")
