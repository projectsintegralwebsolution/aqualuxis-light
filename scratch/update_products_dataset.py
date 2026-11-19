import re
import json

# Read current products.ts
with open('src/data/products.ts', 'r', encoding='utf-8') as f:
    ts_content = f.read()

# Define the updates for each product
# We will match each product by id or code and update its image, gallery, and variants

updates = {
    "al00-al015-surface": {
        "image": "/assets/products/al00-surface-pool-light.jpg",
        "gallery": [
            "/assets/products/al00-surface-pool-light.jpg",
            "/assets/products/al01-surface-pool-light.jpg",
            "/assets/products/al02-surface-pool-light.jpg",
            "/assets/products/al03-surface-pool-light.jpg",
            "/assets/products/al04-surface-pool-light.jpg",
            "/assets/products/al05-surface-pool-light.jpg",
            "/assets/products/al06-surface-pool-light.jpg",
            "/assets/products/al07-surface-pool-light.jpg",
            "/assets/products/al00-surface-pool-light-profile.jpg",
            "/assets/products/al00-surface-pool-light-rear.jpg"
        ],
        "variant_images": {
            "AL00": "/assets/products/al00-surface-pool-light.jpg",
            "AL01": "/assets/products/al01-surface-pool-light.jpg",
            "AL02": "/assets/products/al02-surface-pool-light.jpg",
            "AL03": "/assets/products/al03-surface-pool-light.jpg",
            "AL04": "/assets/products/al04-surface-pool-light.jpg",
            "AL05": "/assets/products/al05-surface-pool-light.jpg",
            "AL06": "/assets/products/al06-surface-pool-light.jpg",
            "AL07": "/assets/products/al07-surface-pool-light.jpg",
            "AL08": "/assets/products/al08-surface-pool-light.jpg",
            "AL09": "/assets/products/al09-surface-pool-light.jpg",
            "AL010": "/assets/products/al010-surface-pool-light.jpg",
            "AL011": "/assets/products/al011-surface-pool-light.jpg",
            "AL012": "/assets/products/al012-surface-pool-light.jpg",
            "AL013": "/assets/products/al013-surface-pool-light.jpg",
            "AL014": "/assets/products/al014-surface-pool-light.jpg",
            "AL015": "/assets/products/al015-surface-pool-light.jpg"
        }
    },
    "al030-al031-ss": {
        "image": "/assets/products/al030-ss-pool-light.jpg",
        "gallery": [
            "/assets/products/al030-ss-pool-light.jpg",
            "/assets/products/al030-ss-pool-light-side.jpg",
            "/assets/products/al030-ss-pool-light-rear.jpg",
            "/assets/products/al031-ss-pool-light.jpg",
            "/assets/products/al031-ss-pool-light-side.jpg",
            "/assets/products/al031-ss-pool-light-rear.jpg",
            "/assets/products/al031-ss-pool-light-profile.jpg"
        ],
        "variant_images": {
            "AL030": "/assets/products/al030-ss-pool-light.jpg",
            "AL031": "/assets/products/al031-ss-pool-light.jpg"
        }
    },
    "al032-al036-concealed": {
        "image": "/assets/products/al032-concealed-pool-light.jpg",
        "gallery": [
            "/assets/products/al032-concealed-pool-light.jpg",
            "/assets/products/al033-concealed-pool-light.jpg",
            "/assets/products/al034-concealed-pool-light.jpg",
            "/assets/products/al035-concealed-pool-light.jpg",
            "/assets/products/al036-concealed-pool-light.jpg",
            "/assets/products/al032-concealed-pool-light-profile.jpg",
            "/assets/products/al033-concealed-pool-light-profile.jpg",
            "/assets/products/al036-concealed-pool-light-rear.jpg"
        ],
        "variant_images": {
            "AL032": "/assets/products/al032-concealed-pool-light.jpg",
            "AL033": "/assets/products/al033-concealed-pool-light.jpg",
            "AL034": "/assets/products/al034-concealed-pool-light.jpg",
            "AL035": "/assets/products/al035-concealed-pool-light.jpg",
            "AL036": "/assets/products/al036-concealed-pool-light.jpg"
        }
    },
    "al037-al040-full-ss-spot": {
        "image": "/assets/products/al037-full-ss-spot-fountain-light.jpg",
        "gallery": [
            "/assets/products/al037-full-ss-spot-fountain-light.jpg",
            "/assets/products/al038-full-ss-spot-fountain-light.jpg",
            "/assets/products/al039-full-ss-spot-fountain-light.jpg",
            "/assets/products/al040-full-ss-spot-fountain-light.jpg",
            "/assets/products/al037-full-ss-spot-fountain-light-bracket.jpg",
            "/assets/products/al037-full-ss-spot-fountain-light-profile.jpg",
            "/assets/products/al037-full-ss-spot-fountain-light-bezel.jpg"
        ],
        "variant_images": {
            "AL037": "/assets/products/al037-full-ss-spot-fountain-light.jpg",
            "AL038": "/assets/products/al038-full-ss-spot-fountain-light.jpg",
            "AL039": "/assets/products/al039-full-ss-spot-fountain-light.jpg",
            "AL040": "/assets/products/al040-full-ss-spot-fountain-light.jpg"
        }
    },
    "al041-al052-ss-spot": {
        "image": "/assets/products/al041-ss-spot-fountain-light.jpg",
        "gallery": [
            "/assets/products/al041-ss-spot-fountain-light.jpg",
            "/assets/products/al042-ss-spot-fountain-light.jpg",
            "/assets/products/al043-ss-spot-fountain-light.jpg",
            "/assets/products/al044-ss-spot-fountain-light.jpg",
            "/assets/products/al045-ss-spot-fountain-light.jpg",
            "/assets/products/al046-ss-spot-fountain-light.jpg",
            "/assets/products/al047-ss-spot-fountain-light.jpg",
            "/assets/products/al048-ss-spot-fountain-light.jpg",
            "/assets/products/al049-ss-spot-fountain-light.jpg",
            "/assets/products/al050-ss-spot-fountain-light.jpg"
        ],
        "variant_images": {
            "AL041": "/assets/products/al041-ss-spot-fountain-light.jpg",
            "AL042": "/assets/products/al042-ss-spot-fountain-light.jpg",
            "AL043": "/assets/products/al043-ss-spot-fountain-light.jpg",
            "AL044": "/assets/products/al044-ss-spot-fountain-light.jpg",
            "AL045": "/assets/products/al045-ss-spot-fountain-light.jpg",
            "AL046": "/assets/products/al046-ss-spot-fountain-light.jpg",
            "AL047": "/assets/products/al047-ss-spot-fountain-light.jpg",
            "AL048": "/assets/products/al048-ss-spot-fountain-light.jpg",
            "AL049": "/assets/products/al049-ss-spot-fountain-light.jpg",
            "AL050": "/assets/products/al050-ss-spot-fountain-light.jpg",
            "AL051": "/assets/products/al049-ss-spot-fountain-light.jpg",
            "AL052": "/assets/products/al050-ss-spot-fountain-light.jpg"
        }
    },
    "al053-al057-nozzle": {
        "image": "/assets/products/al053-nozzle-fountain-light.jpg",
        "gallery": [
            "/assets/products/al053-nozzle-fountain-light.jpg",
            "/assets/products/al054-nozzle-fountain-light.jpg",
            "/assets/products/al055-nozzle-fountain-light.jpg",
            "/assets/products/al056-nozzle-fountain-light.jpg",
            "/assets/products/al057-nozzle-fountain-light.jpg"
        ],
        "variant_images": {
            "AL053": "/assets/products/al053-nozzle-fountain-light.jpg",
            "AL054": "/assets/products/al054-nozzle-fountain-light.jpg",
            "AL055": "/assets/products/al055-nozzle-fountain-light.jpg",
            "AL056": "/assets/products/al056-nozzle-fountain-light.jpg",
            "AL057": "/assets/products/al057-nozzle-fountain-light.jpg"
        }
    },
    "al058-al061-adj-nozzle": {
        "image": "/assets/products/al058-adjustable-nozzle-fountain-light.jpg",
        "gallery": [
            "/assets/products/al058-adjustable-nozzle-fountain-light.jpg",
            "/assets/products/al059-adjustable-nozzle-fountain-light.jpg",
            "/assets/products/al060-adjustable-nozzle-fountain-light.jpg",
            "/assets/products/al061-adjustable-nozzle-fountain-light.jpg",
            "/assets/products/al058-adjustable-nozzle-fountain-light-side.jpg"
        ],
        "variant_images": {
            "AL058": "/assets/products/al058-adjustable-nozzle-fountain-light.jpg",
            "AL059": "/assets/products/al059-adjustable-nozzle-fountain-light.jpg",
            "AL060": "/assets/products/al060-adjustable-nozzle-fountain-light.jpg",
            "AL061": "/assets/products/al061-adjustable-nozzle-fountain-light.jpg"
        }
    },
    "al062-wall-washer": {
        "image": "/assets/products/al062-led-wall-washer-light.jpg",
        "gallery": [
            "/assets/products/al062-led-wall-washer-light.jpg"
        ],
        "variant_images": {
            "AL062": "/assets/products/al062-led-wall-washer-light.jpg"
        }
    },
    "al063-umbrella-nozzle": {
        "image": "/assets/products/al063-umbrella-bell-nozzle.jpg",
        "gallery": [
            "/assets/products/al063-umbrella-bell-nozzle.jpg"
        ]
    },
    "al064-foam-nozzle": {
        "image": "/assets/products/al064-foam-nozzle.jpg",
        "gallery": [
            "/assets/products/al064-foam-nozzle.jpg"
        ]
    },
    "al065-finger-jet": {
        "image": "/assets/products/al065-finger-jet-nozzle.jpg",
        "gallery": [
            "/assets/products/al065-finger-jet-nozzle.jpg"
        ]
    },
    "al066-long-foam-nozzle": {
        "image": "/assets/products/al066-long-foam-nozzle.jpg",
        "gallery": [
            "/assets/products/al066-long-foam-nozzle.jpg"
        ]
    },
    "al067-geyser-nozzle": {
        "image": "/assets/products/al067-geyser-nozzle.jpg",
        "gallery": [
            "/assets/products/al067-geyser-nozzle.jpg"
        ]
    },
    "al068-ss-foam-nozzle": {
        "image": "/assets/products/al068-ss-foam-nozzle.jpg",
        "gallery": [
            "/assets/products/al068-ss-foam-nozzle.jpg",
            "/assets/products/al068-ss-foam-nozzle-detail.jpg"
        ]
    },
    "al069-tulip-nozzle": {
        "image": "/assets/products/al069-tulip-nozzle.jpg",
        "gallery": [
            "/assets/products/al069-tulip-nozzle.jpg"
        ]
    },
    "al070-fan-jet-nozzle": {
        "image": "/assets/products/al070-fan-jet-nozzle.jpg",
        "gallery": [
            "/assets/products/al070-fan-jet-nozzle.jpg"
        ]
    },
    "al071-revolving-nozzle": {
        "image": "/assets/products/al071-revolving-nozzle.jpg",
        "gallery": [
            "/assets/products/al071-revolving-nozzle.jpg"
        ]
    },
    "al072-flower-cluster-nozzle": {
        "image": "/assets/products/al072-diamond-flower-cluster-nozzle.jpg",
        "gallery": [
            "/assets/products/al072-diamond-flower-cluster-nozzle.jpg"
        ]
    },
    "al073-crown-nozzle": {
        "image": "/assets/products/al073-crown-nozzle.jpg",
        "gallery": [
            "/assets/products/al073-crown-nozzle.jpg"
        ]
    },
    "al074-flower-nozzle": {
        "image": "/assets/products/al074-flower-nozzle.jpg",
        "gallery": [
            "/assets/products/al074-flower-nozzle.jpg"
        ]
    },
    "al075-ss-cascade-blade": {
        "image": "/assets/products/al075-ss-water-cascade-blade-nozzle.jpg",
        "gallery": [
            "/assets/products/al075-ss-water-cascade-blade-nozzle.jpg"
        ]
    },
    "al076-ss-step-blade": {
        "image": "/assets/products/al076-ss-step-water-blade-nozzle.jpg",
        "gallery": [
            "/assets/products/al076-ss-step-water-blade-nozzle.jpg"
        ]
    },
    "al077-ss-water-cascade": {
        "image": "/assets/products/al077-ss-water-cascade-nozzle.jpg",
        "gallery": [
            "/assets/products/al077-ss-water-cascade-nozzle.jpg"
        ]
    },
    "al078-cobra-nozzle": {
        "image": "/assets/products/al078-cobra-nozzle.jpg",
        "gallery": [
            "/assets/products/al078-cobra-nozzle.jpg",
            "/assets/products/al078-cobra-nozzle-profile.jpg"
        ]
    },
    "al079-dolphin-nozzle": {
        "image": "/assets/products/al079-dolphin-nozzle.jpg",
        "gallery": [
            "/assets/products/al079-dolphin-nozzle.jpg"
        ]
    },
    "al080-acrylic-cobra": {
        "image": "/assets/products/al080-acrylic-cobra-nozzle.jpg",
        "gallery": [
            "/assets/products/al080-acrylic-cobra-nozzle.jpg"
        ]
    },
    "al081-acrylic-blade": {
        "image": "/assets/products/al081-acrylic-blade-nozzle.jpg",
        "gallery": [
            "/assets/products/al081-acrylic-blade-nozzle.jpg",
            "/assets/products/al081-acrylic-blade-nozzle-detail.jpg"
        ]
    }
}

print(f"Configured updates for {len(updates)} product families.")
