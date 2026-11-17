import json

products_data = [
    # 1. Surface Model Swimming Pool Light
    {
        "id": "al00-al015-surface",
        "code": "AL00 - AL015",
        "name": "Surface Model Swimming Pool Light (SS 304/316/Aluminium)",
        "slug": "surface-model-swimming-pool-light-al00-al015",
        "category": "pool-lighting",
        "categorySlug": "pool-lighting",
        "categoryName": "Pool Lighting",
        "subCategory": "Surface Mount Lights",
        "shortDescription": "Full stainless steel surface-mount swimming pool light engineered for underwater durability and high photometric efficiency.",
        "description": "Manufactured with premium SS 304/316 marine-grade stainless steel or aluminium plate, the AQUALUXIS LIGHT Surface Model Swimming Pool Light delivers reliable, long-lasting illumination for concrete and tiled swimming pools. Features IP68 water ingress protection, high-efficiency Power LED Edison chips, and customizable beam spread angles.",
        "image": "/assets/products/al00-surface-pool-light.jpg",
        "gallery": [
            "/assets/products/al00-surface-pool-light.jpg",
            "/assets/products/al00-surface-pool-light-gallery-1.jpg",
            "/assets/products/al00-surface-pool-light-gallery-2.jpg",
            "/assets/products/al00-surface-pool-light-gallery-3.jpg",
            "/assets/products/al00-surface-pool-light-gallery-4.jpg",
            "/assets/products/al00-surface-pool-light-gallery-5.jpg"
        ],
        "specifications": {
            "Body Material": "SS 304 / 316 / Aluminium Plate Model",
            "Lens": "PC Glass (Impact & UV Resistant)",
            "LED Chip": "Power LED Edison",
            "Protection Class": "IP68 Submersible Waterproof",
            "Mounting": "Pool Wall Surface Mounting",
            "Beam Angle": "10°, 20°, 30°, 40°, 45°, 60°, 90°",
            "Wire": "Poly Cab (1 Mtr Wire)",
            "Color Options": "WW (2700–3000K), NW (4000–4500K), CW (6000–6500K), Red, Blue, Green, RGB",
            "Dimensions": "Dia 50mm to 6\" (Thickness 1\")"
        },
        "variants": [
            {"code": "AL00", "dimension": "Dia 50 mm, Thickness 1\"", "wattage": "1*3 = 3 Watt"},
            {"code": "AL01", "dimension": "Dia 3\", Thickness 1\"", "wattage": "3 Watt / 9 Watt"},
            {"code": "AL02", "dimension": "Dia 4\", Thickness 1\"", "wattage": "6 Watt / 18 Watt"},
            {"code": "AL03", "dimension": "Dia 5\", Thickness 1\"", "wattage": "9 Watt / 27 Watt"},
            {"code": "AL04", "dimension": "Dia 5\", Thickness 1\"", "wattage": "12 Watt / 36 Watt"},
            {"code": "AL05", "dimension": "Dia 6\", Thickness 1\"", "wattage": "18 Watt"},
            {"code": "AL06", "dimension": "Dia 3\", Thickness 1\"", "wattage": "3 Watt / 9 Watt"},
            {"code": "AL07", "dimension": "Dia 4\", Thickness 1\"", "wattage": "6 Watt / 18 Watt"},
            {"code": "AL08", "dimension": "Dia 5\", Thickness 1\"", "wattage": "9 Watt / 27 Watt"},
            {"code": "AL09", "dimension": "Dia 5\", Thickness 1\"", "wattage": "12 Watt / 36 Watt"},
            {"code": "AL010", "dimension": "Dia 6\", Thickness 1\"", "wattage": "18 Watt"},
            {"code": "AL011", "dimension": "Dia 3\", Thickness 1\"", "wattage": "3 Watt / 9 Watt"},
            {"code": "AL012", "dimension": "Dia 4\", Thickness 1\"", "wattage": "6 Watt / 18 Watt"},
            {"code": "AL013", "dimension": "Dia 5\", Thickness 1\"", "wattage": "9 Watt / 27 Watt"},
            {"code": "AL014", "dimension": "Dia 5\", Thickness 1\"", "wattage": "12 Watt / 36 Watt"},
            {"code": "AL015", "dimension": "Dia 6\", Thickness 1\"", "wattage": "18 Watt"}
        ],
        "applications": [
            "Commercial Swimming Pools",
            "Residential Villa & Resort Pools",
            "Concrete & Tiled Aquatic Basins",
            "Lap & Infinity Pools"
        ],
        "features": [
            "True IP68 hermetically sealed construction for underwater safety",
            "High-output Power LED Edison chips with minimal lumen depreciation",
            "Precision optical beam angle options from narrow 10° spot to wide 90° flood",
            "Marine-grade corrosion resistant stainless steel and aluminium housing",
            "Compatible with standard 12V low-voltage transformer safety systems"
        ],
        "isFeatured": True
    },

    # 2. ABS Body Swimming Pool Light
    {
        "id": "al016-al029a-abs",
        "code": "AL016 - AL029(A)",
        "name": "ABS Body Swimming Pool Light",
        "slug": "abs-body-swimming-pool-light-al016-al029a",
        "category": "pool-lighting",
        "categorySlug": "pool-lighting",
        "categoryName": "Pool Lighting",
        "subCategory": "ABS Pool Lights",
        "shortDescription": "Corrosion-proof ABS engineered swimming pool lights with high-lumen Edison & Cree LED chips in ultra-slim and classic profiles.",
        "description": "Constructed from impact-resistant ABS and polycarbonate polymers, the AQUALUXIS LIGHT ABS Body Pool Light series offers zero risk of corrosion in chemical and salt chlorination pools. Available in diverse profiles from ultra-slim 15mm nicheless models to wide 11-inch fixtures with premium SMD 2835 Cree and Power LED Edison chips.",
        "image": "/assets/products/al016-abs-pool-light.jpg",
        "gallery": [
            "/assets/products/al016-abs-pool-light.jpg",
            "/assets/products/al016-abs-pool-light-gallery-1.jpg",
            "/assets/products/al016-abs-pool-light-gallery-2.jpg",
            "/assets/products/al016-abs-pool-light-gallery-3.jpg",
            "/assets/products/al016-abs-pool-light-gallery-4.jpg",
            "/assets/products/al016-abs-pool-light-gallery-5.jpg"
        ],
        "specifications": {
            "Body Material": "ABS + PC (Engineered Polymers)",
            "Lens": "PC Glass (UV Stabilized)",
            "LED Chip": "Power LED Edison / SMD 2835 CREE",
            "Protection Class": "IP68 Submersible Waterproof",
            "Wire": "Poly Cab (1 Mtr Wire)",
            "Beam Angle": "10°, 20°, 30°, 40°, 45°, 60°, 90°",
            "Color Options": "WW (2700–3000K), NW (4000–4500K), CW (6000–6500K), Red, Blue, Green, RGB",
            "Dimensions": "Dia 5.5\" to 11\" (Depth 15mm to 60mm)"
        },
        "variants": [
            {"code": "AL016", "dimension": "Dia 5.5\", Depth 40 mm", "wattage": "3 Watt / 9 Watt"},
            {"code": "AL017", "dimension": "Dia 6.5\", Depth 40 mm", "wattage": "6 Watt / 18 Watt"},
            {"code": "AL018", "dimension": "Dia 9\", Depth 40 mm", "wattage": "9 Watt / 27 Watt"},
            {"code": "AL019", "dimension": "Dia 9\", Depth 40 mm", "wattage": "12 Watt / 36 Watt"},
            {"code": "AL020", "dimension": "Dia 9\", Depth 40 mm", "wattage": "18 Watt"},
            {"code": "AL021", "dimension": "Dia 11\", Depth 41 mm", "wattage": "12W / 18W / 27W / 36W"},
            {"code": "AL022", "dimension": "Dia 11\", Depth 41 mm", "wattage": "12W / 18W / 27W / 36W"},
            {"code": "AL023", "dimension": "Dia 11\", Depth 50 mm", "wattage": "12W / 18W / 27W / 36W"},
            {"code": "AL024", "dimension": "Dia 11\", Depth 15 mm (Ultra Slim)", "wattage": "12W / 18W / 27W / 36W"},
            {"code": "AL025", "dimension": "Dia 10\", Depth 60 mm", "wattage": "12 Watt / 18 Watt"},
            {"code": "AL026", "dimension": "Dia 10\", Depth 60 mm", "wattage": "12 Watt / 18 Watt"},
            {"code": "AL027", "dimension": "Dia 10\", Depth 60 mm", "wattage": "12 Watt / 18 Watt"},
            {"code": "AL028", "dimension": "Dia 10\", Depth 60 mm", "wattage": "12 Watt / 18 Watt"},
            {"code": "AL029", "dimension": "Dia 9.5\", Depth 60 mm", "wattage": "12W / 18W / 27W / 36W"},
            {"code": "AL029(A)", "dimension": "Dia 6.5\", Depth 60 mm", "wattage": "9W / 12W / 18W"}
        ],
        "applications": [
            "Chlorinated & Salt Water Pools",
            "Residential Villa Swimming Pools",
            "Hotel & Club Leisure Pools",
            "Spas & Hydrotherapy Plunge Pools"
        ],
        "features": [
            "100% chemical resistant engineered ABS body eliminating rust and galvanic corrosion",
            "Ultra-slim 15mm profile option (AL024) for effortless surface mounting without wall niches",
            "High luminous efficiency SMD 2835 Cree and Power LED Edison chips",
            "Superior thermal management for long continuous operating life underwater",
            "Rich monochromatic and multi-color RGB options"
        ],
        "isFeatured": True
    },

    # 3. SS Body Swimming Pool Light
    {
        "id": "al030-al031-ss",
        "code": "AL030 / AL031",
        "name": "SS Body Swimming Pool Light",
        "slug": "ss-body-swimming-pool-light-al030-al031",
        "category": "pool-lighting",
        "categorySlug": "pool-lighting",
        "categoryName": "Pool Lighting",
        "subCategory": "Stainless Steel Pool Lights",
        "shortDescription": "Heavy-duty stainless steel and polycarbonate underwater luminaires with high-lumen Cree and Edison LEDs.",
        "description": "Constructed with solid stainless steel faceplates and reinforced polycarbonate backing, the AQUALUXIS LIGHT SS Body Swimming Pool Light combines mechanical strength with aesthetic elegance. Built for luxury residential, resort, and commercial aquatic facilities.",
        "image": "/assets/products/al030-ss-pool-light.jpg",
        "gallery": [
            "/assets/products/al030-ss-pool-light.jpg",
            "/assets/products/al030-ss-pool-light-gallery-1.jpg",
            "/assets/products/al030-ss-pool-light-gallery-2.jpg",
            "/assets/products/al030-ss-pool-light-gallery-3.jpg",
            "/assets/products/al030-ss-pool-light-gallery-4.jpg"
        ],
        "specifications": {
            "Body Material": "SS + PC",
            "Lens": "PC Glass",
            "LED Chip": "CREE / Edison / SMD 2835 CREE / Power LED",
            "Protection Class": "IP68 Submersible Waterproof",
            "Wire": "Poly Cab (1 Mtr Wire)",
            "Beam Angle": "10°, 20°, 30°, 40°, 45°, 60°, 90°",
            "Color Options": "WW (2700–3000K), NW (4000–4500K), CW (6000–6500K), Red, Blue, Green, RGB",
            "Dimensions": "Dia 8\" to 9\" (Depth 35mm to 40mm)"
        },
        "variants": [
            {"code": "AL030", "dimension": "Dia 8\", Depth 35 mm", "wattage": "6W / 18W / 9W / 27W / 12W / 36W"},
            {"code": "AL031", "dimension": "Dia 9\", Depth 40 mm", "wattage": "12 Watt / 18 Watt"}
        ],
        "applications": [
            "Luxury Resort Swimming Pools",
            "Commercial Aquatic Centers",
            "Architectural Reflections Pools",
            "Private Villa Pools"
        ],
        "features": [
            "High grade stainless steel faceplate with impact-resistant PC glass lens",
            "Advanced SMD 2835 Cree and Power LED optics for uniform illumination",
            "Submersible IP68 rating engineered for continuous deep submersion",
            "Low-voltage 12V safe operation standard"
        ],
        "isFeatured": True
    },

    # 4. Concealed Swimming Pool Light
    {
        "id": "al032-al036-concealed",
        "code": "AL032 - AL036",
        "name": "Concealed Swimming Pool Light",
        "slug": "concealed-swimming-pool-light-al032-al036",
        "category": "pool-lighting",
        "categorySlug": "pool-lighting",
        "categoryName": "Pool Lighting",
        "subCategory": "Concealed / In-Ground Lights",
        "shortDescription": "Recessed concealed stainless steel underwater luminaires for steps, ledges, perimeter walls, and submerged pool niches.",
        "description": "Engineered for flush recessed mounting into swimming pool walls, steps, and bottom floors, the AQUALUXIS LIGHT Concealed Swimming Pool Light delivers seamless architectural integration. Made of marine-grade SS 304/316 stainless steel with Edison Power LEDs and protective PC glass.",
        "image": "/assets/products/al032-concealed-pool-light.jpg",
        "gallery": [
            "/assets/products/al032-concealed-pool-light.jpg",
            "/assets/products/al032-concealed-pool-light-gallery-1.jpg",
            "/assets/products/al032-concealed-pool-light-gallery-2.jpg",
            "/assets/products/al032-concealed-pool-light-gallery-3.jpg",
            "/assets/products/al032-concealed-pool-light-gallery-4.jpg",
            "/assets/products/al032-concealed-pool-light-gallery-5.jpg"
        ],
        "specifications": {
            "Body Material": "SS 304 / 316",
            "Lens": "PC Glass",
            "LED Chip": "Power LED Edison",
            "Protection Class": "IP68 Submersible Waterproof",
            "Wire": "Poly Cab (1 Mtr Wire)",
            "Beam Angle": "10°, 20°, 30°, 40°, 45°, 60°, 90°",
            "Color Options": "WW (2700–3000K), NW (4000–4500K), CW (6000–6500K), Red, Blue, Green, RGB",
            "Dimensions": "Outer Dia 45mm to 140mm (Cutout 32mm to 110mm)"
        },
        "variants": [
            {"code": "AL032", "dimension": "Outer 45 mm, Cutout 32 mm, Height 55 mm", "wattage": "1 Watt / 3 Watt"},
            {"code": "AL033", "dimension": "Outer 85 mm, Cutout 60 mm, Height 56 mm", "wattage": "3 Watt / 9 Watt"},
            {"code": "AL034", "dimension": "Outer 110 mm, Cutout 85 mm, Height 46 mm", "wattage": "6 Watt / 18 Watt"},
            {"code": "AL035", "dimension": "Outer 140 mm, Cutout 110 mm, Height 50 mm (9 LED)", "wattage": "9 Watt / 27 Watt"},
            {"code": "AL036", "dimension": "Outer 140 mm, Cutout 110 mm, Height 50 mm (12 LED)", "wattage": "12 Watt / 36 Watt"}
        ],
        "applications": [
            "Pool Steps, Benches & Shallow Baja Shelves",
            "In-Ground Concrete Pool Niches",
            "Pool Coping & Perimeter Grazing",
            "Submerged Architectural Water Walls"
        ],
        "features": [
            "Flush in-ground / in-wall recessed design preventing swimmer interference",
            "Precision SS 304/316 marine stainless steel bezel and body",
            "High impact PC glass lens resistant to pool chemicals and thermal shock",
            "Comprehensive wattage range from 1W accent to 36W high output"
        ],
        "isFeatured": True
    },

    # 5. Full SS Spot Fountain Light
    {
        "id": "al037-al040-full-ss-spot",
        "code": "AL037 - AL040",
        "name": "Full SS Spot Fountain Light",
        "slug": "full-ss-spot-fountain-light-al037-al040",
        "category": "fountain-lighting",
        "categorySlug": "fountain-lighting",
        "categoryName": "Fountain Lighting",
        "subCategory": "Spot Fountain Lights",
        "shortDescription": "Full stainless steel 304/316 underwater spot projector engineered for dynamic water fountains and architectural jets.",
        "description": "Constructed from 100% solid SS 304/316 stainless steel, the AQUALUXIS LIGHT Full SS Spot Fountain Light is built for continuous underwater operation in fountains and water basins. Features high-intensity Cree and Edison LED chips for sharp, punchy water beam illumination.",
        "image": "/assets/products/al037-full-ss-spot-fountain-light.jpg",
        "gallery": [
            "/assets/products/al037-full-ss-spot-fountain-light.jpg",
            "/assets/products/al037-full-ss-spot-fountain-light-gallery-1.jpg",
            "/assets/products/al037-full-ss-spot-fountain-light-gallery-2.jpg",
            "/assets/products/al037-full-ss-spot-fountain-light-gallery-3.jpg",
            "/assets/products/al037-full-ss-spot-fountain-light-gallery-4.jpg"
        ],
        "specifications": {
            "Body Material": "SS 304 / 316",
            "Lens": "PC Glass",
            "LED Chip": "CREE / Edison",
            "Protection Class": "IP68 Submersible Waterproof",
            "Wire": "Poly Cab (1 Mtr Wire)",
            "Beam Angle": "10°, 20°, 30°, 40°, 45°, 60°, 90°",
            "Color Options": "WW (2700–3000K), NW (4000–4500K), CW (6000–6500K), Red, Blue, Green, RGB",
            "Dimensions": "Outer Dia 3.4\" to 140 mm (Back Dia 2.2\" to 85 mm)"
        },
        "variants": [
            {"code": "AL037", "dimension": "Outer Dia 3.4\", Back Dia 2.2\"", "wattage": "3 Watt / 9 Watt"},
            {"code": "AL038", "dimension": "Outer Dia 110 mm, Back Dia 85 mm", "wattage": "6 Watt / 18 Watt"},
            {"code": "AL039", "dimension": "Outer Dia 140 mm, Back Dia 85 mm", "wattage": "9 Watt / 27 Watt"},
            {"code": "AL040", "dimension": "Outer Dia 140 mm, Back Dia 85 mm", "wattage": "12 Watt / 36 Watt"}
        ],
        "applications": [
            "Architectural Plaza Fountains",
            "Water Spray Jets & Water Geysers",
            "Reflecting Pools & Basin Displays",
            "Commercial Water Sculptures"
        ],
        "features": [
            "All stainless steel marine grade construction resistant to turbulence and vibration",
            "Concentrated beam angles for deep water jet penetration",
            "Submersible IP68 waterproof cable connection with Poly Cab wire",
            "High performance Cree/Edison LED emitters"
        ],
        "isFeatured": True
    },

    # 6. SS Spot Fountain Light
    {
        "id": "al041-al052-ss-spot",
        "code": "AL041 - AL052",
        "name": "SS Spot Fountain Light",
        "slug": "ss-spot-fountain-light-al041-al052",
        "category": "fountain-lighting",
        "categorySlug": "fountain-lighting",
        "categoryName": "Fountain Lighting",
        "subCategory": "Spot Fountain Lights",
        "shortDescription": "High-output stainless steel and pressure die casting spot fountain lights available in 5 stylish body finishes.",
        "description": "The AQUALUXIS LIGHT SS Spot Fountain Light series spans 12 precision models crafted with SS 304/316 and pressure die-cast housings. Offering directional swivel adjustment, multi-wattage configurations up to 36W, and five stylish body finishes for discerning landscape architects and fountain designers.",
        "image": "/assets/products/al041-ss-spot-fountain-light.jpg",
        "gallery": [
            "/assets/products/al041-ss-spot-fountain-light.jpg",
            "/assets/products/al041-ss-spot-fountain-light-gallery-1.jpg",
            "/assets/products/al041-ss-spot-fountain-light-gallery-2.jpg",
            "/assets/products/al041-ss-spot-fountain-light-gallery-3.jpg",
            "/assets/products/al041-ss-spot-fountain-light-gallery-4.jpg",
            "/assets/products/al041-ss-spot-fountain-light-gallery-5.jpg"
        ],
        "specifications": {
            "Body Material": "SS 304 / 316 / Pressure Die Casting Body",
            "Lens": "PC Glass",
            "LED Chip": "CREE / Edison",
            "Protection Class": "IP68 Submersible Waterproof",
            "Wire": "Poly Cab (1 Mtr Wire)",
            "Beam Angle": "10°, 20°, 30°, 40°, 45°, 60°, 90°",
            "Body Finishes": "Available in 5 Stylish Body Finishes",
            "Color Options": "WW (2700–3000K), NW (4000–4500K), CW (6000–6500K), Red, Blue, Green, RGB",
            "Dimensions": "Dia 3\" to 6\" (Outer Dia up to 140 mm)"
        },
        "variants": [
            {"code": "AL041", "dimension": "Dia 3\", Thickness 22 mm", "wattage": "3 Watt / 9 Watt"},
            {"code": "AL042", "dimension": "Dia 4\", Thickness 22 mm", "wattage": "6 Watt / 18 Watt"},
            {"code": "AL043", "dimension": "Dia 5\", Thickness 1\"", "wattage": "9 Watt / 27 Watt"},
            {"code": "AL044", "dimension": "Dia 5\", Thickness 1\"", "wattage": "12 Watt / 36 Watt"},
            {"code": "AL045", "dimension": "Dia 6\", Thickness 1\"", "wattage": "18 Watt"},
            {"code": "AL046", "dimension": "Outer Dia 85 mm, Back Dia 60 mm", "wattage": "3 Watt / 9 Watt"},
            {"code": "AL047", "dimension": "Outer Dia 140 mm, Back Dia 110 mm", "wattage": "6 Watt / 18 Watt"},
            {"code": "AL048", "dimension": "Outer Dia 140 mm, Back Dia 110 mm", "wattage": "9 Watt / 27 Watt"},
            {"code": "AL049", "dimension": "Outer Dia 140 mm, Back Dia 110 mm", "wattage": "12 Watt / 36 Watt"},
            {"code": "AL050", "dimension": "Outer Dia 120 mm, Back Dia 85 mm", "wattage": "6 Watt / 18 Watt"},
            {"code": "AL051", "dimension": "Outer Dia 120 mm, Back Dia 85 mm", "wattage": "12 Watt / 36 Watt"},
            {"code": "AL052", "dimension": "Outer Dia 120 mm, Back Dia 85 mm", "wattage": "12 Watt / 36 Watt"}
        ],
        "applications": [
            "Commercial Plaza & Municipal Fountains",
            "Decorative Water Basins & Waterfalls",
            "Resort Entry Aquatic Displays",
            "Pond & Lake Aeration Spotlighting"
        ],
        "features": [
            "Available in 5 stylish body finishes for architectural harmony",
            "Pressure die casting and marine stainless steel dual durability",
            "High power Cree / Edison LED chips producing vibrant saturated colors",
            "Adjustable aiming brackets for precision optical targeting"
        ],
        "isFeatured": True
    },

    # 7. Nozzle Fountain Light
    {
        "id": "al053-al057-nozzle",
        "code": "AL053 - AL057",
        "name": "Nozzle Fountain Light",
        "slug": "nozzle-fountain-light-al053-al057",
        "category": "fountain-lighting",
        "categorySlug": "fountain-lighting",
        "categoryName": "Fountain Lighting",
        "subCategory": "Nozzle Mount Lights",
        "shortDescription": "Center-threaded underwater donut fixture designed for direct mounting over fountain nozzles and spray heads.",
        "description": "The AQUALUXIS LIGHT Nozzle Fountain Light features a central threaded opening allowing fountain nozzles to pass directly through the luminaire. Water jets emerge surrounded by high-intensity Cree and Edison LED illumination, delivering dazzling columns of colored light with zero shadowing.",
        "image": "/assets/products/al053-nozzle-fountain-light.jpg",
        "gallery": [
            "/assets/products/al053-nozzle-fountain-light.jpg",
            "/assets/products/al053-nozzle-fountain-light-gallery-1.jpg",
            "/assets/products/al053-nozzle-fountain-light-gallery-2.jpg",
            "/assets/products/al053-nozzle-fountain-light-gallery-3.jpg",
            "/assets/products/al053-nozzle-fountain-light-gallery-4.jpg"
        ],
        "specifications": {
            "Body Material": "SS 304 / 316 / Aluminium (Flat Model)",
            "Lens": "PC Glass",
            "LED Chip": "CREE / Edison",
            "Protection Class": "IP68 Submersible Waterproof",
            "Wire": "Poly Cab (1 Mtr Wire)",
            "Beam Angle": "10°, 20°, 30°, 40°, 45°, 60°, 90°",
            "Thread Specifications": "1/2\" (AL053–AL055) and 1\" (AL056–AL057)",
            "Color Options": "WW (2700–3000K), NW (4000–4500K), CW (6000–6500K), Red, Blue, Green, RGB",
            "Dimensions": "Dia 4\" to 5\" (Thickness 32 mm)"
        },
        "variants": [
            {"code": "AL053", "dimension": "Dia 4\", Thread 1/2\", Thickness 32 mm", "wattage": "3 Watt / 9 Watt"},
            {"code": "AL054", "dimension": "Dia 4\", Thread 1/2\", Thickness 32 mm", "wattage": "4 Watt / 12 Watt"},
            {"code": "AL055", "dimension": "Dia 4\", Thread 1/2\", Thickness 32 mm", "wattage": "5 Watt / 15 Watt"},
            {"code": "AL056", "dimension": "Dia 5\", Thread 1\", Thickness 32 mm", "wattage": "6 Watt / 18 Watt"},
            {"code": "AL057", "dimension": "Dia 5\", Thread 1\", Thickness 32 mm", "wattage": "9 Watt / 27 Watt"}
        ],
        "applications": [
            "Vertical Geyser & Cascade Nozzles",
            "Musical & Interactive Fountains",
            "Plaza Jet Rings & Spray Rings",
            "Foam Jet & Finger Jet Illuminations"
        ],
        "features": [
            "Direct nozzle pass-through geometry for 360-degree uniform water column illumination",
            "Standard 1/2\" and 1\" BSP thread compatibility",
            "Ultra-durable SS 304/316 and flat aluminium body",
            "Hermetic IP68 seal for long-term underwater submersion"
        ],
        "isFeatured": True
    },

    # 8. Adjustable Nozzle Fountain Light
    {
        "id": "al058-al061-adj-nozzle",
        "code": "AL058 - AL061",
        "name": "Adjustable Nozzle Fountain Light",
        "slug": "adjustable-nozzle-fountain-light-al058-al061",
        "category": "fountain-lighting",
        "categorySlug": "fountain-lighting",
        "categoryName": "Fountain Lighting",
        "subCategory": "Nozzle Mount Lights",
        "shortDescription": "Articulating center-hole nozzle light with 1.5-inch pass-through and multi-angle aiming for dynamic water arches.",
        "description": "Designed for complex water choreography and angled nozzle sprays, the AQUALUXIS LIGHT Adjustable Nozzle Fountain Light features a generous 1.5-inch center hole with internal articulating alignment. Allows the light beam to follow angled water jets precisely.",
        "image": "/assets/products/al058-adjustable-nozzle-fountain-light.jpg",
        "gallery": [
            "/assets/products/al058-adjustable-nozzle-fountain-light.jpg",
            "/assets/products/al058-adjustable-nozzle-fountain-light-gallery-1.jpg",
            "/assets/products/al058-adjustable-nozzle-fountain-light-gallery-2.jpg",
            "/assets/products/al058-adjustable-nozzle-fountain-light-gallery-3.jpg",
            "/assets/products/al058-adjustable-nozzle-fountain-light-gallery-4.jpg"
        ],
        "specifications": {
            "Body Material": "SS 304 / 316",
            "Lens": "PC Glass",
            "LED Chip": "CREE / Edison",
            "Protection Class": "IP68 Submersible Waterproof",
            "Wire": "Poly Cab (1 Mtr Wire)",
            "Beam Angle": "10°, 20°, 30°, 40°, 45°, 60°, 90°",
            "Center Hole": "1.5 Inch",
            "Color Options": "WW (2700–3000K), NW (4000–4500K), CW (6000–6500K), Red, Blue, Green, RGB",
            "Dimensions": "Outer Dia 5\", Thickness 2\""
        },
        "variants": [
            {"code": "AL058", "dimension": "Outer 5\", Centre Hole 1.5\", Thickness 2\"", "wattage": "3 Watt / 9 Watt"},
            {"code": "AL059", "dimension": "Outer 5\", Centre Hole 1.5\", Thickness 2\"", "wattage": "6 Watt / 18 Watt"},
            {"code": "AL060", "dimension": "Outer 5\", Centre Hole 1.5\", Thickness 2\"", "wattage": "9 Watt / 27 Watt"},
            {"code": "AL061", "dimension": "Outer 5\", Centre Hole 1.5\", Thickness 2\"", "wattage": "12 Watt / 36 Watt"}
        ],
        "applications": [
            "Angled Parabolic Jet Fountains",
            "Dancing Jumping Water Jets",
            "Multi-Jet Architectural Water Basins",
            "Choreographed Fountain Displays"
        ],
        "features": [
            "1.5-inch large center hole accommodating larger commercial fountain nozzles",
            "Articulating angular alignment mechanism to illuminate angled water plumes",
            "Marine-grade SS 304/316 housing built for harsh aquatic conditions",
            "High power Cree / Edison LED arrays up to 36 Watt"
        ],
        "isFeatured": True
    },

    # 9. LED Wall Washer Light
    {
        "id": "al062-wall-washer",
        "code": "AL062",
        "name": "LED Wall Washer Light",
        "slug": "led-wall-washer-light-al062",
        "category": "water-feature-lighting",
        "categorySlug": "water-feature-lighting",
        "categoryName": "Water Feature Lighting",
        "subCategory": "Wall Washer Lights",
        "shortDescription": "High-performance IP65 architectural linear LED wall washer for facade grazing, water walls, and textured stone features.",
        "description": "The AQUALUXIS LIGHT LED Wall Washer Light (AL062) delivers uniform vertical light grazing across architectural surfaces, waterfalls, and exterior building facades. Engineered with die-casting aluminium, Edison Power LEDs, and precision asymmetric optics.",
        "image": "/assets/products/al062-led-wall-washer-light.jpg",
        "gallery": [
            "/assets/products/al062-led-wall-washer-light.jpg",
            "/assets/products/al062-led-wall-washer-light-gallery-1.jpg"
        ],
        "specifications": {
            "Protection Rating": "IP65",
            "Housing": "Die-Casting Aluminium",
            "LED Chip": "Edison Power LED",
            "Beam Angle": "15° – 60°",
            "Power Input": "12V / 24V DC",
            "Wattage Range": "9 Watt – 54 Watt",
            "Warranty": "2 Years of Warranty",
            "Available Sizes": "1 Ft – 12 Ft",
            "Color Options": "WW (2700–3000K), NW (4000–4500K), CW (6000–6500K), Red, Blue, Green, RGB"
        },
        "variants": [
            {"code": "AL062-1FT", "dimension": "Length 1 Ft (Custom Available)", "wattage": "9W - 18W"},
            {"code": "AL062-2FT", "dimension": "Length 2 Ft", "wattage": "18W - 24W"},
            {"code": "AL062-3FT", "dimension": "Length 3 Ft", "wattage": "27W - 36W"},
            {"code": "AL062-4FT", "dimension": "Length 4 Ft", "wattage": "36W - 54W"},
            {"code": "AL062-CUSTOM", "dimension": "Length Up to 12 Ft", "wattage": "Up to 54 Watt"}
        ],
        "applications": [
            "Architectural Water Walls & Waterfalls",
            "Exterior Building Facades & Grazing",
            "Textured Stone & Landscape Boundary Walls",
            "Resort Entry Features & Hotel Atriums"
        ],
        "features": [
            "Die-casting aluminium housing with high thermal dissipation fins",
            "Asymmetric and narrow beam optics (15°-60°) for clean vertical grazing",
            "Customizable lengths from 1 Ft up to 12 Ft with 2-year warranty",
            "IP65 rated weather protection for demanding outdoor environments"
        ],
        "isFeatured": True
    },

    # 10. Umbrella / Bell Nozzle
    {
        "id": "al063-umbrella-nozzle",
        "code": "AL063",
        "name": "Umbrella / Bell Nozzle",
        "slug": "umbrella-bell-nozzle-al063",
        "category": "fountain-lighting",
        "categorySlug": "fountain-lighting",
        "categoryName": "Fountain Lighting",
        "subCategory": "Fountain Nozzles",
        "shortDescription": "Precision chrome-plated brass nozzle producing an elegant transparent bell/umbrella laminar water sheet.",
        "description": "The AQUALUXIS LIGHT Umbrella / Bell Nozzle (AL063) shapes water into a serene, transparent laminar dome resembling an open mushroom or umbrella canopy. Manufactured in chrome-plated brass for smooth, quiet, splash-free indoor and outdoor fountain features.",
        "image": "/assets/products/al063-umbrella-bell-nozzle.jpg",
        "gallery": [
            "/assets/products/al063-umbrella-bell-nozzle.jpg",
            "/assets/products/al063-umbrella-bell-nozzle-gallery-1.jpg"
        ],
        "specifications": {
            "Nozzle Type": "Umbrella Nozzle (Mushroom / Bell)",
            "Housing": "Brass with Chrome Plated",
            "Thread": "1 Inch",
            "Height": "8 Inch",
            "Power / Flow": "As per pump (pressure) flow"
        },
        "variants": [
            {"code": "AL063", "dimension": "Height 8\", Thread 1\"", "wattage": "Flow as per pump pressure"}
        ],
        "applications": [
            "Indoor Courtyard & Atrium Fountains",
            "Serene Reflecting Pools",
            "Residential Water Gardens",
            "Commercial Entry Lobby Fountains"
        ],
        "features": [
            "Silent laminar umbrella water veil with zero splashing",
            "Solid brass construction with high-luster chrome plating",
            "Standard 1\" thread connection for simple installation",
            "Adjustable water film thickness via top cap adjustment"
        ],
        "isFeatured": True
    },

    # 11. Foam Nozzle
    {
        "id": "al064-foam-nozzle",
        "code": "AL064",
        "name": "Foam Nozzle",
        "slug": "foam-nozzle-al064",
        "category": "fountain-lighting",
        "categorySlug": "fountain-lighting",
        "categoryName": "Fountain Lighting",
        "subCategory": "Fountain Nozzles",
        "shortDescription": "Aerated bubbling foam nozzle producing a lively, frothy white water plume with superior wind stability.",
        "description": "The AQUALUXIS LIGHT Foam Nozzle (AL064) draws air into the water stream using the Venturi effect to produce a dense, high-visibility frothy white foam column. Highly wind-stable and strongly responsive to underwater illumination.",
        "image": "/assets/products/al064-foam-nozzle.jpg",
        "gallery": [
            "/assets/products/al064-foam-nozzle.jpg",
            "/assets/products/al064-foam-nozzle-gallery-1.jpg"
        ],
        "specifications": {
            "Nozzle Type": "Foam Nozzle",
            "Housing": "Brass with Chrome Plated",
            "Thread": "1 Inch",
            "Height": "155 mm",
            "Power / Flow": "As per pump (pressure) flow"
        },
        "variants": [
            {"code": "AL064", "dimension": "Height 155 mm, Thread 1\"", "wattage": "Flow as per pump pressure"}
        ],
        "applications": [
            "Commercial Plaza & Public Fountains",
            "Wind-Exposed Outdoor Water Basins",
            "Hotel Entrance Water Displays",
            "Illuminated Color-Changing Fountains"
        ],
        "features": [
            "Produces dense aerated bubbling white water with exceptional light reflection",
            "Heavy-duty chrome plated brass body built for long service life",
            "High wind resistance compared to standard single jet nozzles",
            "Compact 155mm height with standard 1-inch inlet"
        ],
        "isFeatured": False
    },

    # 12. Finger Jet Nozzle
    {
        "id": "al065-finger-jet",
        "code": "AL065",
        "name": "Finger Jet Nozzle",
        "slug": "finger-jet-nozzle-al065",
        "category": "fountain-lighting",
        "categorySlug": "fountain-lighting",
        "categoryName": "Fountain Lighting",
        "subCategory": "Fountain Nozzles",
        "shortDescription": "Multi-jet finger nozzle creating parabolic water arches in 7, 10, 14, and 20 finger configurations.",
        "description": "The AQUALUXIS LIGHT Finger Jet Nozzle (AL065) discharges precision parabolic crystal streams radiating gracefully in a fan or arch shape. Available in 7, 10, 14, and 20 finger spray configurations crafted in chrome-plated brass.",
        "image": "/assets/products/al065-finger-jet-nozzle.jpg",
        "gallery": [
            "/assets/products/al065-finger-jet-nozzle.jpg",
            "/assets/products/al065-finger-jet-nozzle-gallery-1.jpg"
        ],
        "specifications": {
            "Nozzle Type": "Finger Nozzle",
            "Housing": "Brass with Chrome Plated",
            "Thread": "1 Inch",
            "Height": "90 mm",
            "Available Sizes": "7 Finger, 10 Finger, 14 Fingers, 20 Fingers",
            "Power / Flow": "As per pump (pressure) flow"
        },
        "variants": [
            {"code": "AL065-7F", "dimension": "7 Finger Jets, Height 90 mm, Thread 1\"", "wattage": "Flow as per pump pressure"},
            {"code": "AL065-10F", "dimension": "10 Finger Jets, Height 90 mm, Thread 1\"", "wattage": "Flow as per pump pressure"},
            {"code": "AL065-14F", "dimension": "14 Finger Jets, Height 90 mm, Thread 1\"", "wattage": "Flow as per pump pressure"},
            {"code": "AL065-20F", "dimension": "20 Finger Jets, Height 90 mm, Thread 1\"", "wattage": "Flow as per pump pressure"}
        ],
        "applications": [
            "Resort & Estate Swimming Pool Entries",
            "Decorative Plaza Arches & Walk-Through Waterways",
            "Commercial Water Displays & Fountain Basins",
            "Interactive Splash Pads"
        ],
        "features": [
            "Delivers clear crystalline laminar finger jets in delicate radiating arcs",
            "Choice of 7, 10, 14, or 20 individual precision-bored jets",
            "Solid brass with mirror chrome plating for premium corrosion resistance",
            "Compact 90 mm profile with standard 1-inch female BSP thread"
        ],
        "isFeatured": True
    },

    # 13. Long Foam Nozzle
    {
        "id": "al066-long-foam-nozzle",
        "code": "AL066",
        "name": "Long Foam Nozzle",
        "slug": "long-foam-nozzle-al066",
        "category": "fountain-lighting",
        "categorySlug": "fountain-lighting",
        "categoryName": "Fountain Lighting",
        "subCategory": "Fountain Nozzles",
        "shortDescription": "Extended barrel foam nozzle producing soaring, high-volume columnar aerated geysers.",
        "description": "Engineered with an elongated mixing chamber, the AQUALUXIS LIGHT Long Foam Nozzle (AL066) produces majestic, high-altitude frothy water columns. The extended barrel intensifies air-water aeration for high visibility in open plaza installations.",
        "image": "/assets/products/al066-long-foam-nozzle.jpg",
        "gallery": [
            "/assets/products/al066-long-foam-nozzle.jpg",
            "/assets/products/al066-long-foam-nozzle-gallery-1.jpg"
        ],
        "specifications": {
            "Nozzle Type": "Foam Nozzle (Long Barrel)",
            "Housing": "Brass with Chrome Plated",
            "Thread": "1 Inch",
            "Power / Flow": "As per pump (pressure) flow"
        },
        "variants": [
            {"code": "AL066", "dimension": "Long Barrel Profile, Thread 1\"", "wattage": "Flow as per pump pressure"}
        ],
        "applications": [
            "Large Outdoor Plazas & Traffic Circles",
            "High-Wind Public Water Installations",
            "Lakeside & Central Basin Displays",
            "Commercial Property Entrances"
        ],
        "features": [
            "Extended aeration chamber generating monumental white foam plumes",
            "Superior wind stability preserving spray structure in blustery conditions",
            "Solid brass construction with heavy-duty chrome plating",
            "Standard 1-inch inlet connection"
        ],
        "isFeatured": False
    },

    # 14. Geyser Nozzle
    {
        "id": "al067-geyser-nozzle",
        "code": "AL067",
        "name": "Geyser Nozzle",
        "slug": "geyser-nozzle-al067",
        "category": "fountain-lighting",
        "categorySlug": "fountain-lighting",
        "categoryName": "Fountain Lighting",
        "subCategory": "Fountain Nozzles",
        "shortDescription": "Water-level dependent cascade jet nozzle creating high-impact erupting water plumes.",
        "description": "The AQUALUXIS LIGHT Geyser Nozzle (AL067) utilizes the surrounding pool water to create powerful, turbulent erupting geysers. Its conical eruption delivers dynamic acoustic presence and dramatic visual weight in commercial fountain basins.",
        "image": "/assets/products/al067-geyser-nozzle.jpg",
        "gallery": [
            "/assets/products/al067-geyser-nozzle.jpg",
            "/assets/products/al067-geyser-nozzle-gallery-1.jpg"
        ],
        "specifications": {
            "Nozzle Type": "Cascade Jet Nozzle / Geyser Nozzle",
            "Housing": "Brass with Chrome Plated",
            "Thread": "1 Inch",
            "Power / Flow": "As per pump (pressure) flow"
        },
        "variants": [
            {"code": "AL067", "dimension": "Cascade Jet Profile, Thread 1\"", "wattage": "Flow as per pump pressure"}
        ],
        "applications": [
            "City Squares & Municipal Parks",
            "Central Fountain Centerpieces",
            "Commercial Mall Feature Fountains",
            "Resort Water Features"
        ],
        "features": [
            "Entrains pool water for massive conical geyser eruptions",
            "Dynamic water sound dampening ambient urban noise",
            "Corrosion-resistant chrome plated brass body",
            "Standard 1-inch thread interface"
        ],
        "isFeatured": False
    },

    # 15. SS Foam Nozzle
    {
        "id": "al068-ss-foam-nozzle",
        "code": "AL068",
        "name": "SS Foam Nozzle",
        "slug": "ss-foam-nozzle-al068",
        "category": "fountain-lighting",
        "categorySlug": "fountain-lighting",
        "categoryName": "Fountain Lighting",
        "subCategory": "Fountain Nozzles",
        "shortDescription": "Composite foam nozzle combining chrome-plated brass with black ABS engineered polymer.",
        "description": "The AQUALUXIS LIGHT SS Foam Nozzle (AL068) features a robust composite design of chrome-plated brass and high-durability black ABS. Produces rich, highly aerated white bubbling foam jets with optimal water conservation.",
        "image": "/assets/products/al068-ss-foam-nozzle.jpg",
        "gallery": [
            "/assets/products/al068-ss-foam-nozzle.jpg",
            "/assets/products/al068-ss-foam-nozzle-gallery-1.jpg"
        ],
        "specifications": {
            "Nozzle Type": "Foam Nozzle",
            "Housing": "Brass with Chrome Plated with Black ABS",
            "Thread": "1 Inch",
            "Power / Flow": "As per pump (pressure) flow"
        },
        "variants": [
            {"code": "AL068", "dimension": "Brass & ABS Composite, Thread 1\"", "wattage": "Flow as per pump pressure"}
        ],
        "applications": [
            "Residential & Commercial Fountains",
            "Water Basin Clusters & Ring Manifolds",
            "Architectural Reflections Pools",
            "Modern Urban Landscaping"
        ],
        "features": [
            "Hybrid brass and durable black ABS construction",
            "High air-to-water mixture ratio for maximum visual opacity",
            "Resistant to scale buildup and pool chemical wear",
            "Standard 1-inch thread for easy retrofits"
        ],
        "isFeatured": False
    },

    # 16. Tulip Nozzle
    {
        "id": "al069-tulip-nozzle",
        "code": "AL069",
        "name": "Tulip Nozzle",
        "slug": "tulip-nozzle-al069",
        "category": "fountain-lighting",
        "categorySlug": "fountain-lighting",
        "categoryName": "Fountain Lighting",
        "subCategory": "Fountain Nozzles",
        "shortDescription": "Sculptural nozzle forming a delicate translucent tulip-flower water chalice.",
        "description": "The AQUALUXIS LIGHT Tulip Nozzle (AL069) shapes water into an upward-curving transparent water cup resembling a blooming tulip. Elegant, low-noise, and captivating when illuminated from within by submersible LEDs.",
        "image": "/assets/products/al069-tulip-nozzle.jpg",
        "gallery": [
            "/assets/products/al069-tulip-nozzle.jpg",
            "/assets/products/al069-tulip-nozzle-gallery-1.jpg"
        ],
        "specifications": {
            "Nozzle Type": "Tulip Nozzle",
            "Housing": "Brass with Chrome Plated",
            "Height": "8 Inch",
            "Thread": "1 Inch",
            "Power / Flow": "As per pump (pressure) flow"
        },
        "variants": [
            {"code": "AL069", "dimension": "Height 8\", Thread 1\"", "wattage": "Flow as per pump pressure"}
        ],
        "applications": [
            "Botanical Garden Fountains",
            "Courtyard & Hotel Lobby Water Features",
            "Private Villa Gardens",
            "Refined Architectural Patios"
        ],
        "features": [
            "Forms an exquisite translucent chalice water pattern resembling a tulip",
            "Chrome plated brass body with fine mechanical tolerances",
            "Quiet low-splash water movement ideal for enclosed environments",
            "8-inch body height with 1-inch female connection"
        ],
        "isFeatured": False
    },

    # 17. Fan Jet Nozzle
    {
        "id": "al070-fan-jet-nozzle",
        "code": "AL070",
        "name": "Fan Jet Nozzle",
        "slug": "fan-jet-nozzle-al070",
        "category": "fountain-lighting",
        "categorySlug": "fountain-lighting",
        "categoryName": "Fountain Lighting",
        "subCategory": "Fountain Nozzles",
        "shortDescription": "Wide-angle planar fan jet discharging a broad vertical sheet of crystal water.",
        "description": "The AQUALUXIS LIGHT Fan Jet Nozzle (AL070) produces a wide, paper-thin fan sheet of water. Perfect for perimeter displays, water curtain walls, and projecting laser or light shows against falling water droplets.",
        "image": "/assets/products/al070-fan-jet-nozzle.jpg",
        "gallery": [
            "/assets/products/al070-fan-jet-nozzle.jpg",
            "/assets/products/al070-fan-jet-nozzle-gallery-1.jpg"
        ],
        "specifications": {
            "Nozzle Type": "Fan Nozzle",
            "Housing": "Brass with Chrome Plated",
            "Height": "3.5 Inch",
            "Thread": "1 Inch",
            "Power / Flow": "As per pump (pressure) flow"
        },
        "variants": [
            {"code": "AL070", "dimension": "Height 3.5\", Thread 1\"", "wattage": "Flow as per pump pressure"}
        ],
        "applications": [
            "Water Curtain & Screen Displays",
            "Perimeter Basin Arrays",
            "Architectural Shield Water Walls",
            "Interactive Water Shows"
        ],
        "features": [
            "Wide planar fan angle spreading water uniformly",
            "Solid brass with mirror chrome plating",
            "Compact 3.5\" profile for tight basin integration",
            "Standard 1-inch connection"
        ],
        "isFeatured": False
    },

    # 18. Revolving Nozzle
    {
        "id": "al071-revolving-nozzle",
        "code": "AL071",
        "name": "Revolving Nozzle",
        "slug": "revolving-nozzle-al071",
        "category": "fountain-lighting",
        "categorySlug": "fountain-lighting",
        "categoryName": "Fountain Lighting",
        "subCategory": "Fountain Nozzles",
        "shortDescription": "Hydraulic self-rotating multi-arm brass nozzle creating spiraling dynamic water choreography.",
        "description": "The AQUALUXIS LIGHT Revolving Nozzle (AL071) harnesses water pressure to rotate autonomously without electrical motors. Multi-angle angled jets spin in continuous rhythm, creating a mesmerizing rotating helix of water.",
        "image": "/assets/products/al071-revolving-nozzle.jpg",
        "gallery": [
            "/assets/products/al071-revolving-nozzle.jpg",
            "/assets/products/al071-revolving-nozzle-gallery-1.jpg"
        ],
        "specifications": {
            "Nozzle Type": "Revolving Nozzle",
            "Housing": "Brass with Chrome Plated",
            "Thread": "1 Inch",
            "Power / Flow": "As per pump (pressure) flow"
        },
        "variants": [
            {"code": "AL071", "dimension": "Revolving Multi-Arm, Thread 1\"", "wattage": "Flow as per pump pressure"}
        ],
        "applications": [
            "Centerpiece Plaza Fountains",
            "Resort & Theme Park Features",
            "Public Roundabouts & Gardens",
            "Dynamic Animated Fountain Displays"
        ],
        "features": [
            "Autonomous hydraulic rotation driven purely by water flow",
            "Precision mechanical bearing system for continuous reliable rotation",
            "Chrome-plated brass construction built to withstand constant rotational forces",
            "Standard 1-inch thread interface"
        ],
        "isFeatured": True
    },

    # 19. Diamond / Flower Cluster Nozzle
    {
        "id": "al072-flower-cluster-nozzle",
        "code": "AL072",
        "name": "Diamond / Flower Cluster Nozzle",
        "slug": "diamond-flower-cluster-nozzle-al072",
        "category": "fountain-lighting",
        "categorySlug": "fountain-lighting",
        "categoryName": "Fountain Lighting",
        "subCategory": "Fountain Nozzles",
        "shortDescription": "Multi-tier flower cluster nozzle generating a tiered crystalline bouquet of water jets.",
        "description": "The AQUALUXIS LIGHT Diamond / Flower Cluster Nozzle (AL072) combines concentric rings of precision jets to form a multi-tiered dome or bouquet spray. Delivers high visual fullness and captivating light reflection in fountain basins.",
        "image": "/assets/products/al072-diamond-flower-cluster-nozzle.jpg",
        "gallery": [
            "/assets/products/al072-diamond-flower-cluster-nozzle.jpg",
            "/assets/products/al072-diamond-flower-cluster-nozzle-gallery-1.jpg"
        ],
        "specifications": {
            "Nozzle Type": "Flower Cluster Nozzle / Diamond Nozzle",
            "Housing": "Brass with Chrome Plated",
            "Thread": "1 Inch",
            "Power / Flow": "As per pump (pressure) flow"
        },
        "variants": [
            {"code": "AL072", "dimension": "Tiered Cluster Array, Thread 1\"", "wattage": "Flow as per pump pressure"}
        ],
        "applications": [
            "Central Fountain Basins",
            "Palace & Luxury Estate Gardens",
            "Commercial Plaza Water Displays",
            "Botanical Water Features"
        ],
        "features": [
            "Concentric multi-tiered spray pattern creating high volume visual impact",
            "Solid brass chrome-plated body with precision-machined orifice nozzles",
            "Spectacular illumination when paired with center-hole or spotlight fixtures",
            "Standard 1-inch female connection"
        ],
        "isFeatured": True
    },

    # 20. Crown Nozzle
    {
        "id": "al073-crown-nozzle",
        "code": "AL073",
        "name": "Crown Nozzle",
        "slug": "crown-nozzle-al073",
        "category": "fountain-lighting",
        "categorySlug": "fountain-lighting",
        "categoryName": "Fountain Lighting",
        "subCategory": "Fountain Nozzles",
        "shortDescription": "Regal multi-jet crown nozzle available in 1\", 1/2\", 3/8\", 1/4\", and 1/8\" thread sizes.",
        "description": "The AQUALUXIS LIGHT Crown Nozzle (AL073) shoots a radiating circle of outward-angled crystalline water jets resembling a monarch's crown. Available across five distinct sizes from miniature 1/8\" up to standard 1\" commercial fittings.",
        "image": "/assets/products/al073-crown-nozzle.jpg",
        "gallery": [
            "/assets/products/al073-crown-nozzle.jpg",
            "/assets/products/al073-crown-nozzle-gallery-1.jpg"
        ],
        "specifications": {
            "Nozzle Type": "Crown Nozzle",
            "Housing": "Brass with Chrome Plated",
            "Available Sizes": "1\", 1/2\", 3/8\", 1/4\", 1/8\"",
            "Power / Flow": "As per pump (pressure) flow"
        },
        "variants": [
            {"code": "AL073-1IN", "dimension": "Thread Size 1\"", "wattage": "Flow as per pump pressure"},
            {"code": "AL073-05IN", "dimension": "Thread Size 1/2\"", "wattage": "Flow as per pump pressure"},
            {"code": "AL073-38IN", "dimension": "Thread Size 3/8\"", "wattage": "Flow as per pump pressure"},
            {"code": "AL073-14IN", "dimension": "Thread Size 1/4\"", "wattage": "Flow as per pump pressure"},
            {"code": "AL073-18IN", "dimension": "Thread Size 1/8\"", "wattage": "Flow as per pump pressure"}
        ],
        "applications": [
            "Regal Garden & Courtyard Centerpieces",
            "Manifold Spray Rings",
            "Sculptural Water Features",
            "Compact Residential Ponds"
        ],
        "features": [
            "Radiating parabolic crown pattern with precision water trajectories",
            "Extensive thread size options from 1/8\" micro to 1\" full-scale",
            "Mirror-finish chrome over solid brass body",
            "Excellent wind resistance and crisp geometric definition"
        ],
        "isFeatured": False
    },

    # 21. Flower Nozzle
    {
        "id": "al074-flower-nozzle",
        "code": "AL074",
        "name": "Flower Nozzle",
        "slug": "flower-nozzle-al074",
        "category": "fountain-lighting",
        "categorySlug": "fountain-lighting",
        "categoryName": "Fountain Lighting",
        "subCategory": "Fountain Nozzles",
        "shortDescription": "Artistic flower spray nozzle forming tiered blooming floral water petal formations.",
        "description": "The AQUALUXIS LIGHT Flower Nozzle (AL074) disperses water into outward-curving tiers resembling floral petals surrounding a central pistil jet. Made in chrome-plated brass for refined landscape and pool fountain installations.",
        "image": "/assets/products/al074-flower-nozzle.jpg",
        "gallery": [
            "/assets/products/al074-flower-nozzle.jpg",
            "/assets/products/al074-flower-nozzle-gallery-1.jpg"
        ],
        "specifications": {
            "Nozzle Type": "Flower Nozzle",
            "Housing": "Brass with Chrome Plated",
            "Thread": "1 Inch",
            "Power / Flow": "As per pump (pressure) flow"
        },
        "variants": [
            {"code": "AL074", "dimension": "Flower Pattern, Thread 1\"", "wattage": "Flow as per pump pressure"}
        ],
        "applications": [
            "Botanical Water Displays",
            "Hotel & Resort Front Water Features",
            "Residential Garden Ponds",
            "Decorative Pool Side Fountains"
        ],
        "features": [
            "Forms an intricate blooming flower petal spray geometry",
            "Precision-cast and machined chrome plated brass housing",
            "Operates smoothly with standard commercial submersible pumps",
            "Standard 1-inch female BSP connection"
        ],
        "isFeatured": False
    },

    # 22. SS Water Cascade / Blade Nozzle
    {
        "id": "al075-ss-cascade-blade",
        "code": "AL075",
        "name": "SS Water Cascade / Blade Nozzle",
        "slug": "ss-water-cascade-blade-nozzle-al075",
        "category": "water-feature-lighting",
        "categorySlug": "water-feature-lighting",
        "categoryName": "Water Feature Lighting",
        "subCategory": "Water Cascades & Blades",
        "shortDescription": "Heavy-duty stainless steel shear descent waterfall spillway available from 6 inches up to 10 feet.",
        "description": "The AQUALUXIS LIGHT SS Water Cascade / Blade Nozzle (AL075) produces a continuous, crystal-clear sheet of falling water. Manufactured from marine-grade stainless steel with dual 1\"/1.5\" inlet threading and internal baffling for perfect laminar flow across widths up to 10 feet.",
        "image": "/assets/products/al075-ss-water-cascade-blade-nozzle.jpg",
        "gallery": [
            "/assets/products/al075-ss-water-cascade-blade-nozzle.jpg",
            "/assets/products/al075-ss-water-cascade-blade-nozzle-gallery-1.jpg",
            "/assets/products/al075-ss-water-cascade-blade-nozzle-gallery-2.jpg"
        ],
        "specifications": {
            "Nozzle Type": "Water Fall / Blade Nozzle",
            "Housing": "SS (Stainless Steel)",
            "Thread": "1\" / 1.5\"",
            "Sizes Available": "6\", 8\", 10\", 1 Ft – 10 Ft",
            "Power / Flow": "As per pump (pressure) flow"
        },
        "variants": [
            {"code": "AL075-6IN", "dimension": "Width 6\", Thread 1\"", "wattage": "Flow as per pump pressure"},
            {"code": "AL075-8IN", "dimension": "Width 8\", Thread 1\"", "wattage": "Flow as per pump pressure"},
            {"code": "AL075-10IN", "dimension": "Width 10\", Thread 1\"", "wattage": "Flow as per pump pressure"},
            {"code": "AL075-1FT", "dimension": "Width 1 Ft, Thread 1\" / 1.5\"", "wattage": "Flow as per pump pressure"},
            {"code": "AL075-2FT", "dimension": "Width 2 Ft, Thread 1.5\"", "wattage": "Flow as per pump pressure"},
            {"code": "AL075-3FT", "dimension": "Width 3 Ft, Thread 1.5\"", "wattage": "Flow as per pump pressure"},
            {"code": "AL075-4FT", "dimension": "Width 4 Ft, Thread 1.5\"", "wattage": "Flow as per pump pressure"},
            {"code": "AL075-6FT", "dimension": "Width 6 Ft, Thread 1.5\"", "wattage": "Flow as per pump pressure"},
            {"code": "AL075-8FT", "dimension": "Width 8 Ft, Thread 1.5\"", "wattage": "Flow as per pump pressure"},
            {"code": "AL075-10FT", "dimension": "Width 10 Ft, Thread 1.5\"", "wattage": "Flow as per pump pressure"}
        ],
        "applications": [
            "Swimming Pool Raised Wall Waterfalls",
            "Shear Descent Waterfall Spouts",
            "Resort Feature Walls & Spas",
            "Architectural Retaining Walls"
        ],
        "features": [
            "Internal hydrodynamic baffle chambers generating smooth glass-like laminar sheets",
            "Solid marine grade stainless steel construction with zero warping",
            "Extensive size selection from compact 6-inch to expansive 10-foot continuous blades",
            "Dual 1-inch and 1.5-inch inlet options for flexible plumbing"
        ],
        "isFeatured": True
    },

    # 23. SS Step Water Blade Nozzle
    {
        "id": "al076-ss-step-blade",
        "code": "AL076",
        "name": "SS Step Water Blade Nozzle",
        "slug": "ss-step-water-blade-nozzle-al076",
        "category": "water-feature-lighting",
        "categorySlug": "water-feature-lighting",
        "categoryName": "Water Feature Lighting",
        "subCategory": "Water Cascades & Blades",
        "shortDescription": "Stepped stainless steel waterfall blade engineered for pool steps, copings, and tiered retaining walls.",
        "description": "The AQUALUXIS LIGHT SS Step Water Blade Nozzle (AL076) features a specialized stepped projection geometry that easily nests into coping steps, stone walls, and brickwork. Spanning sizes from 1 Ft to 8 Ft for uniform cascading water veils.",
        "image": "/assets/products/al076-ss-step-water-blade-nozzle.jpg",
        "gallery": [
            "/assets/products/al076-ss-step-water-blade-nozzle.jpg",
            "/assets/products/al076-ss-step-water-blade-nozzle-gallery-1.jpg"
        ],
        "specifications": {
            "Nozzle Type": "Water Fall / Step Blade",
            "Housing": "SS (Stainless Steel)",
            "Thread": "1\" / 1.5\"",
            "Sizes Available": "1 Ft – 8 Ft",
            "Power / Flow": "As per pump (pressure) flow"
        },
        "variants": [
            {"code": "AL076-1FT", "dimension": "Width 1 Ft, Thread 1\" / 1.5\"", "wattage": "Flow as per pump pressure"},
            {"code": "AL076-2FT", "dimension": "Width 2 Ft, Thread 1.5\"", "wattage": "Flow as per pump pressure"},
            {"code": "AL076-3FT", "dimension": "Width 3 Ft, Thread 1.5\"", "wattage": "Flow as per pump pressure"},
            {"code": "AL076-4FT", "dimension": "Width 4 Ft, Thread 1.5\"", "wattage": "Flow as per pump pressure"},
            {"code": "AL076-6FT", "dimension": "Width 6 Ft, Thread 1.5\"", "wattage": "Flow as per pump pressure"},
            {"code": "AL076-8FT", "dimension": "Width 8 Ft, Thread 1.5\"", "wattage": "Flow as per pump pressure"}
        ],
        "applications": [
            "Tiered Pool Copings & Steps",
            "Multi-Level Terrace Water Features",
            "Architectural Planter Waterfalls",
            "Villa Entry Stepped Cascades"
        ],
        "features": [
            "Step profile engineered for masonry and tile step integration",
            "Full stainless steel body with laser-welded seams",
            "Consistent laminar sheet descent even at variable pump pressures",
            "Standard 1\" and 1.5\" BSP threaded inlets"
        ],
        "isFeatured": True
    },

    # 24. SS Water Cascade Nozzle
    {
        "id": "al077-ss-water-cascade",
        "code": "AL077",
        "name": "SS Water Cascade Nozzle",
        "slug": "ss-water-cascade-nozzle-al077",
        "category": "water-feature-lighting",
        "categorySlug": "water-feature-lighting",
        "categoryName": "Water Feature Lighting",
        "subCategory": "Water Cascades & Blades",
        "shortDescription": "Architectural stainless steel waterfall cascade spillway in lengths from 1 foot to 8 feet.",
        "description": "Crafted from marine-grade stainless steel, the AQUALUXIS LIGHT SS Water Cascade Nozzle (AL077) creates an uninterrupted, mirror-smooth water curtain. Engineered with interior flow-calming vanes to eliminate water turbulence before the weir edge.",
        "image": "/assets/products/al077-ss-water-cascade-nozzle.jpg",
        "gallery": [
            "/assets/products/al077-ss-water-cascade-nozzle.jpg",
            "/assets/products/al077-ss-water-cascade-nozzle-gallery-1.jpg"
        ],
        "specifications": {
            "Nozzle Type": "Water Fall / Cascade",
            "Housing": "SS (Stainless Steel)",
            "Thread": "1\" / 1.5\"",
            "Sizes Available": "1 Ft – 8 Ft",
            "Power / Flow": "As per pump (pressure) flow"
        },
        "variants": [
            {"code": "AL077-1FT", "dimension": "Width 1 Ft, Thread 1\" / 1.5\"", "wattage": "Flow as per pump pressure"},
            {"code": "AL077-2FT", "dimension": "Width 2 Ft, Thread 1.5\"", "wattage": "Flow as per pump pressure"},
            {"code": "AL077-3FT", "dimension": "Width 3 Ft, Thread 1.5\"", "wattage": "Flow as per pump pressure"},
            {"code": "AL077-4FT", "dimension": "Width 4 Ft, Thread 1.5\"", "wattage": "Flow as per pump pressure"},
            {"code": "AL077-6FT", "dimension": "Width 6 Ft, Thread 1.5\"", "wattage": "Flow as per pump pressure"},
            {"code": "AL077-8FT", "dimension": "Width 8 Ft, Thread 1.5\"", "wattage": "Flow as per pump pressure"}
        ],
        "applications": [
            "Infinity Pool Edges & Vanishing Spillways",
            "Commercial Plaza Water Walls",
            "Resort Waterfall Walls",
            "Modern Garden Water Feats"
        ],
        "features": [
            "Precision-engineered weir lip delivering continuous unbroken water sheeting",
            "Stainless steel construction impervious to outdoor weathering and treated pool water",
            "Broad range of standard lengths from 1 Ft to 8 Ft",
            "Clean concealed installation inside stone or rendered walls"
        ],
        "isFeatured": True
    },

    # 25. Cobra Nozzle
    {
        "id": "al078-cobra-nozzle",
        "code": "AL078",
        "name": "Cobra Nozzle",
        "slug": "cobra-nozzle-al078",
        "category": "water-feature-lighting",
        "categorySlug": "water-feature-lighting",
        "categoryName": "Water Feature Lighting",
        "subCategory": "Decorative Waterfalls",
        "shortDescription": "Sculptural stainless steel cobra waterfall fountain in 1 Ft, 2 Ft, and 3 Ft heights.",
        "description": "The AQUALUXIS LIGHT Cobra Nozzle (AL078) is a freestanding sculptural waterfall crafted in gleaming stainless steel. Its iconic arching cobra silhouette projects a wide curtain of water back into the pool, providing both striking visual grandeur and relaxing hydrotherapeutic shoulder massage.",
        "image": "/assets/products/al078-cobra-nozzle.jpg",
        "gallery": [
            "/assets/products/al078-cobra-nozzle.jpg",
            "/assets/products/al078-cobra-nozzle-gallery-1.jpg",
            "/assets/products/al078-cobra-nozzle-gallery-2.jpg",
            "/assets/products/al078-cobra-nozzle-gallery-3.jpg"
        ],
        "specifications": {
            "Nozzle Type": "Water Fall / Cobra Waterfall",
            "Housing": "SS (Stainless Steel)",
            "Thread": "1\" / 2\"",
            "Sizes Available": "1 Ft, 2 Ft, 3 Ft",
            "Power / Flow": "As per pump (pressure) flow"
        },
        "variants": [
            {"code": "AL078-1FT", "dimension": "Height 1 Ft, Thread 1\" / 2\"", "wattage": "Flow as per pump pressure"},
            {"code": "AL078-2FT", "dimension": "Height 2 Ft, Thread 2\"", "wattage": "Flow as per pump pressure"},
            {"code": "AL078-3FT", "dimension": "Height 3 Ft, Thread 2\"", "wattage": "Flow as per pump pressure"}
        ],
        "applications": [
            "Luxury Swimming Pool Decks",
            "Spa & Wellness Hydrotherapy Zones",
            "Hotel & Resort Pool Centerpieces",
            "Private Villa Architectural Pools"
        ],
        "features": [
            "Iconic sculptural cobra silhouette in polished marine stainless steel",
            "Dual visual spectacle and invigorating neck/shoulder hydro-massage flow",
            "Heavy-duty mounting base with secure flange anchors",
            "Threaded 1\" / 2\" bottom inlet for high-flow hydraulic performance"
        ],
        "isFeatured": True
    },

    # 26. Dolphin Nozzle
    {
        "id": "al079-dolphin-nozzle",
        "code": "AL079",
        "name": "Dolphin Nozzle",
        "slug": "dolphin-nozzle-al079",
        "category": "water-feature-lighting",
        "categorySlug": "water-feature-lighting",
        "categoryName": "Water Feature Lighting",
        "subCategory": "Decorative Waterfalls",
        "shortDescription": "Graceful arching dolphin-profile stainless steel poolside waterfall in 2-foot height.",
        "description": "The AQUALUXIS LIGHT Dolphin Nozzle (AL079) combines hydrodynamic grace with solid stainless steel durability. Its fluid dolphin-inspired curvature projects an arching cascade into the pool, adding movement and relaxing acoustics to luxury pool surroundings.",
        "image": "/assets/products/al079-dolphin-nozzle.jpg",
        "gallery": [
            "/assets/products/al079-dolphin-nozzle.jpg",
            "/assets/products/al079-dolphin-nozzle-gallery-1.jpg"
        ],
        "specifications": {
            "Nozzle Type": "Water Fall / Dolphin Cascade",
            "Housing": "SS (Stainless Steel)",
            "Thread": "1\" / 2\"",
            "Sizes Available": "2 Ft",
            "Power / Flow": "As per pump (pressure) flow"
        },
        "variants": [
            {"code": "AL079-2FT", "dimension": "Height 2 Ft, Thread 1\" / 2\"", "wattage": "Flow as per pump pressure"}
        ],
        "applications": [
            "Luxury Resort & Hotel Poolsides",
            "Private Villa Pool Surrounds",
            "Children's & Family Water Features",
            "Therapy & Hydro-Spa Basins"
        ],
        "features": [
            "Organic curved dolphin profile crafted in marine stainless steel",
            "Soothing sound of falling water combined with shoulder massage stream",
            "Mirror-polished corrosion resistant exterior finish",
            "1\" / 2\" inlet plumbing for versatile flow rate adjustment"
        ],
        "isFeatured": False
    },

    # 27. Acrylic Cobra Nozzle
    {
        "id": "al080-acrylic-cobra",
        "code": "AL080",
        "name": "Acrylic Cobra Nozzle",
        "slug": "acrylic-cobra-nozzle-al080",
        "category": "water-feature-lighting",
        "categorySlug": "water-feature-lighting",
        "categoryName": "Water Feature Lighting",
        "subCategory": "Decorative Waterfalls",
        "shortDescription": "Transparent optical acrylic cobra waterfall with integrated internal LED illumination in square and curved profiles.",
        "description": "Crafted from crystal-clear optical acrylic, the AQUALUXIS LIGHT Acrylic Cobra Nozzle (AL080) revolutionizes poolside aesthetics. Internal LED lighting refracts directly through the clear body and falling water sheet, creating a glowing neon-like water cascade at night. Available in 2 Ft Square and Curve models.",
        "image": "/assets/products/al080-acrylic-cobra-nozzle.jpg",
        "gallery": [
            "/assets/products/al080-acrylic-cobra-nozzle.jpg",
            "/assets/products/al080-acrylic-cobra-nozzle-gallery-1.jpg"
        ],
        "specifications": {
            "Nozzle Type": "Water Fall / Illuminated Acrylic Cobra",
            "Housing": "Acrylic (Crystal Clear Optical Grade)",
            "Thread": "2 Inch",
            "Models Available": "2 Ft (Square), 2 Ft (Curve)",
            "Power / Flow": "As per pump (pressure) flow"
        },
        "variants": [
            {"code": "AL080-SQ", "dimension": "2 Ft (Square), Thread 2\"", "wattage": "Flow as per pump pressure"},
            {"code": "AL080-CV", "dimension": "2 Ft (Curve), Thread 2\"", "wattage": "Flow as per pump pressure"}
        ],
        "applications": [
            "Luxury Designer Pools & Spas",
            "Nightclub & Lounge Poolside Features",
            "High-End Private Villa Decks",
            "Illuminated Evening Water Shows"
        ],
        "features": [
            "100% transparent UV-resistant optical acrylic housing",
            "Internal LED channel illuminates the entire structure and falling water stream",
            "Available in both sharp architectural Square and flowing Curved profiles",
            "2-inch high-flow inlet ensuring smooth, full-sheet water delivery"
        ],
        "isFeatured": True
    },

    # 28. Acrylic Blade Nozzle
    {
        "id": "al081-acrylic-blade",
        "code": "AL081",
        "name": "Acrylic Blade Nozzle",
        "slug": "acrylic-blade-nozzle-al081",
        "category": "water-feature-lighting",
        "categorySlug": "water-feature-lighting",
        "categoryName": "Water Feature Lighting",
        "subCategory": "Water Cascades & Blades",
        "shortDescription": "Crystal-clear optical acrylic waterfall blade spillway with internal LED channel in 1 Ft to 4 Ft widths.",
        "description": "The AQUALUXIS LIGHT Acrylic Blade Nozzle (AL081) combines modern transparent acrylic construction with high-performance water sheeting. Designed with internal channels for integrated LED illumination, turning water walls into radiant glowing waterfalls.",
        "image": "/assets/products/al081-acrylic-blade-nozzle.jpg",
        "gallery": [
            "/assets/products/al081-acrylic-blade-nozzle.jpg",
            "/assets/products/al081-acrylic-blade-nozzle-gallery-1.jpg",
            "/assets/products/al081-acrylic-blade-nozzle-gallery-2.jpg"
        ],
        "specifications": {
            "Nozzle Type": "Water Fall / Transparent Blade Spillway",
            "Housing": "Acrylic (Crystal Clear Optical Grade)",
            "Thread": "1.5 Inch",
            "Sizes Available": "1 Ft, 2 Ft, 3 Ft, 4 Ft",
            "Power / Flow": "As per pump (pressure) flow"
        },
        "variants": [
            {"code": "AL081-1FT", "dimension": "Width 1 Ft, Thread 1.5\"", "wattage": "Flow as per pump pressure"},
            {"code": "AL081-2FT", "dimension": "Width 2 Ft, Thread 1.5\"", "wattage": "Flow as per pump pressure"},
            {"code": "AL081-3FT", "dimension": "Width 3 Ft, Thread 1.5\"", "wattage": "Flow as per pump pressure"},
            {"code": "AL081-4FT", "dimension": "Width 4 Ft, Thread 1.5\"", "wattage": "Flow as per pump pressure"}
        ],
        "applications": [
            "Modern Pool Wall Spillways",
            "Illuminated Interior & Exterior Water Walls",
            "Terrace & Patio Water Cascades",
            "Hotel & Resort Feature Walls"
        ],
        "features": [
            "Precision-engineered optical acrylic weir for glass-like transparent waterfall descent",
            "Integrated internal slot for waterproof LED strip illumination",
            "UV-stabilized non-yellowing acrylic suitable for direct sunlight exposure",
            "1.5-inch threaded bottom inlet connection"
        ],
        "isFeatured": True
    }
]

print(f"Total products to write: {len(products_data)}")

# Let's read the current products.ts up to PRODUCTS
with open('src/data/products.ts', 'r', encoding='utf-8') as f:
    orig = f.read()

# The header interfaces are lines 1-52
header_part = orig[:orig.find('export const PRODUCTS: Product[] = [')]

# The footer part after PRODUCTS
footer_start = orig.find('export const CATEGORIES: CategoryInfo[] = [')
footer_part = orig[footer_start:]

# Update CATEGORIES in footer_part to reflect updated counts:
# pool-lighting: 4
# fountain-lighting: 16
# water-feature-lighting: 8
import re

footer_part = re.sub(
    r'("id":\s*"pool-lighting"[\s\S]*?"productCount":\s*)\d+',
    r'\g<1>4',
    footer_part
)
footer_part = re.sub(
    r'("id":\s*"fountain-lighting"[\s\S]*?"productCount":\s*)\d+',
    r'\g<1>16',
    footer_part
)
footer_part = re.sub(
    r'("id":\s*"water-feature-lighting"[\s\S]*?"productCount":\s*)\d+',
    r'\g<1>8',
    footer_part
)

# Convert products_data to nicely indented TypeScript array
products_ts = "export const PRODUCTS: Product[] = " + json.dumps(products_data, indent=2) + ";\n\n"

new_content = header_part + products_ts + footer_part

with open('src/data/products.ts', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Successfully written updated src/data/products.ts!")
