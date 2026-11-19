import json

txt = open('src/data/products.ts', 'r', encoding='utf-8').read()

# Let's inspect products and how we map them
mapping = {
    # 01. Underwater Lighting (5 subcategories)
    "al00-al015-surface": ("underwater-lighting", "SS Surface Swimming Pool Lights"),
    "al016-al029a-abs": ("underwater-lighting", "ABS Body Swimming Pool Lights"),
    "al030-al031-ss": ("underwater-lighting", "SS Body Swimming Pool Lights"),
    "al032-al036-concealed": ("underwater-lighting", "Concealed Swimming Pool Lights"),
    "al062-wall-washer": ("underwater-lighting", "LED Wall Washer Lights"),

    # 02. Fountain Lighting (4 subcategories)
    "al037-al040-full-ss-spot": ("fountain-lighting", "Full SS Spot Fountain Lights"),
    "al041-al052-ss-spot": ("fountain-lighting", "SS Spot Fountain Lights"),
    "al053-al057-nozzle": ("fountain-lighting", "Nozzle Fountain Lights"),
    "al058-al061-adj-nozzle": ("fountain-lighting", "Adjustable Nozzle Fountain Lights"),

    # 03. Fountain Nozzles & Water Features (3 subcategories)
    "al063-umbrella-nozzle": ("fountain-nozzles-water-features", "Fountain Nozzles"),
    "al064-foam-nozzle": ("fountain-nozzles-water-features", "Fountain Nozzles"),
    "al065-finger-jet": ("fountain-nozzles-water-features", "Fountain Nozzles"),
    "al066-long-foam-nozzle": ("fountain-nozzles-water-features", "Fountain Nozzles"),
    "al067-geyser-nozzle": ("fountain-nozzles-water-features", "Fountain Nozzles"),
    "al068-ss-foam-nozzle": ("fountain-nozzles-water-features", "Fountain Nozzles"),
    "al069-tulip-nozzle": ("fountain-nozzles-water-features", "Fountain Nozzles"),
    "al070-fan-jet-nozzle": ("fountain-nozzles-water-features", "Fountain Nozzles"),
    "al071-revolving-nozzle": ("fountain-nozzles-water-features", "Fountain Nozzles"),
    "al072-flower-cluster-nozzle": ("fountain-nozzles-water-features", "Fountain Nozzles"),
    "al073-crown-nozzle": ("fountain-nozzles-water-features", "Fountain Nozzles"),
    "al074-flower-nozzle": ("fountain-nozzles-water-features", "Fountain Nozzles"),

    "al075-ss-cascade-blade": ("fountain-nozzles-water-features", "SS Water Cascade Nozzles"),
    "al076-ss-step-blade": ("fountain-nozzles-water-features", "SS Water Cascade Nozzles"),
    "al077-ss-water-cascade": ("fountain-nozzles-water-features", "SS Water Cascade Nozzles"),

    "al078-cobra-nozzle": ("fountain-nozzles-water-features", "Acrylic Waterfall Nozzles"),
    "al079-dolphin-nozzle": ("fountain-nozzles-water-features", "Acrylic Waterfall Nozzles"),
    "al080-acrylic-cobra": ("fountain-nozzles-water-features", "Acrylic Waterfall Nozzles"),
    "al081-acrylic-blade": ("fountain-nozzles-water-features", "Acrylic Waterfall Nozzles"),
}

print(f"Total mapped products: {len(mapping)}")
