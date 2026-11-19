// Verified Product Data for AQUALUXIS LIGHT
// Brand Tagline: "BRILLIANCE BENEATH THE SURFACE"

export interface ProductVariant {
  code: string;
  dimension: string;
  wattage: string;
  image?: string;
  ledChip?: string;
}

export interface Product {
  id: string;
  code: string;
  name: string;
  slug: string;
  category: 'pool-lighting' | 'fountain-lighting' | 'water-feature-lighting';
  categorySlug: string;
  categoryName: string;
  subCategory: string;
  shortDescription: string;
  description: string;
  image: string;
  gallery: string[];
  specifications: Record<string, string>;
  variants: ProductVariant[];
  applications: string[];
  features: string[];
  isFeatured: boolean;
}

export interface CategoryInfo {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  heroImage: string;
  productCount: number;
  subCategories: string[];
  highlights: string[];
}

export interface CatalogueItem {
  id: string;
  title: string;
  filename: string;
  cover: string;
  file: string;
  pages: number;
  fileSize: string;
  description: string;
}

export const PRODUCTS: Product[] = [
  {
    "id": "al00-al015-surface",
    "code": "AL00 - AL015",
    "name": "Surface Model Swimming Pool Light (SS 304/316/Aluminium)",
    "slug": "surface-model-swimming-pool-light-al00-al015",
    "category": "pool-lighting",
    "categorySlug": "pool-lighting",
    "categoryName": "Pool Lighting",
    "subCategory": "SS Surface Swimming Pool Lights",
    "shortDescription": "Full stainless steel surface-mount swimming pool light engineered for underwater durability and high photometric efficiency.",
    "description": "Manufactured with premium SS 304/316 marine-grade stainless steel or aluminium plate, the AQUALUXIS LIGHT Surface Model Swimming Pool Light delivers reliable, long-lasting illumination for concrete and tiled swimming pools. Features IP68 water ingress protection, high-efficiency Power LED Edison chips, and customizable beam spread angles.",
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
    "specifications": {
      "Body Material": "SS 304 / 316 / Aluminium Plate Model",
      "Lens": "PC Glass (Impact & UV Resistant)",
      "LED Chip": "Power LED Edison",
      "Protection Class": "IP68 Submersible Waterproof",
      "Mounting": "Pool Wall Surface Mounting",
      "Beam Angle": "10\u00b0, 20\u00b0, 30\u00b0, 40\u00b0, 45\u00b0, 60\u00b0, 90\u00b0",
      "Wire": "Poly Cab (1 Mtr Wire)",
      "Color Options": "WW (2700\u20133000K), NW (4000\u20134500K), CW (6000\u20136500K), Red, Blue, Green, RGB",
      "Dimensions": "Dia 50mm to 6\" (Thickness 1\")"
    },
    "variants": [
      {
        "code": "AL00",
        "dimension": "Dia 50 mm, Thickness 1\"",
        "wattage": "1*3 = 3 Watt",
        "image": "/assets/products/al00-surface-pool-light.jpg"
      },
      {
        "code": "AL01",
        "dimension": "Dia 3\", Thickness 1\"",
        "wattage": "3 Watt / 9 Watt",
        "image": "/assets/products/al01-surface-pool-light.jpg"
      },
      {
        "code": "AL02",
        "dimension": "Dia 4\", Thickness 1\"",
        "wattage": "6 Watt / 18 Watt",
        "image": "/assets/products/al02-surface-pool-light.jpg"
      },
      {
        "code": "AL03",
        "dimension": "Dia 5\", Thickness 1\"",
        "wattage": "9 Watt / 27 Watt",
        "image": "/assets/products/al03-surface-pool-light.jpg"
      },
      {
        "code": "AL04",
        "dimension": "Dia 5\", Thickness 1\"",
        "wattage": "12 Watt / 36 Watt",
        "image": "/assets/products/al04-surface-pool-light.jpg"
      },
      {
        "code": "AL05",
        "dimension": "Dia 6\", Thickness 1\"",
        "wattage": "18 Watt",
        "image": "/assets/products/al05-surface-pool-light.jpg"
      },
      {
        "code": "AL06",
        "dimension": "Dia 3\", Thickness 1\"",
        "wattage": "3 Watt / 9 Watt",
        "image": "/assets/products/al06-surface-pool-light.jpg"
      },
      {
        "code": "AL07",
        "dimension": "Dia 4\", Thickness 1\"",
        "wattage": "6 Watt / 18 Watt",
        "image": "/assets/products/al07-surface-pool-light.jpg"
      },
      {
        "code": "AL08",
        "dimension": "Dia 5\", Thickness 1\"",
        "wattage": "9 Watt / 27 Watt",
        "image": "/assets/products/al08-surface-pool-light.jpg"
      },
      {
        "code": "AL09",
        "dimension": "Dia 5\", Thickness 1\"",
        "wattage": "12 Watt / 36 Watt",
        "image": "/assets/products/al09-surface-pool-light.jpg"
      },
      {
        "code": "AL010",
        "dimension": "Dia 6\", Thickness 1\"",
        "wattage": "18 Watt",
        "image": "/assets/products/al010-surface-pool-light.jpg"
      },
      {
        "code": "AL011",
        "dimension": "Dia 3\", Thickness 1\"",
        "wattage": "3 Watt / 9 Watt",
        "image": "/assets/products/al011-surface-pool-light.jpg"
      },
      {
        "code": "AL012",
        "dimension": "Dia 4\", Thickness 1\"",
        "wattage": "6 Watt / 18 Watt",
        "image": "/assets/products/al012-surface-pool-light.jpg"
      },
      {
        "code": "AL013",
        "dimension": "Dia 5\", Thickness 1\"",
        "wattage": "9 Watt / 27 Watt",
        "image": "/assets/products/al013-surface-pool-light.jpg"
      },
      {
        "code": "AL014",
        "dimension": "Dia 5\", Thickness 1\"",
        "wattage": "12 Watt / 36 Watt",
        "image": "/assets/products/al014-surface-pool-light.jpg"
      },
      {
        "code": "AL015",
        "dimension": "Dia 6\", Thickness 1\"",
        "wattage": "18 Watt",
        "image": "/assets/products/al015-surface-pool-light.jpg"
      }
    ],
    "applications": [
      "Residential Underwater Swimming Pool Lighting",
      "Luxury Resort Swimming Pool Illumination",
      "Commercial Swimming Pool Lighting",
      "Architectural Pool Lighting"
],
    "features": [
      "True IP68 hermetically sealed construction for underwater safety",
      "High-output Power LED Edison chips with minimal lumen depreciation",
      "Precision optical beam angle options from narrow 10\u00b0 spot to wide 90\u00b0 flood",
      "Marine-grade corrosion resistant stainless steel and aluminium housing",
      "Compatible with standard 12V low-voltage transformer safety systems"
    ],
    "isFeatured": true
  },
  {
    "id": "al016-al029a-abs",
    "code": "AL016 - AL029(A)",
    "name": "ABS Body Swimming Pool Light",
    "slug": "abs-body-swimming-pool-light-al016-al029a",
    "category": "pool-lighting",
    "categorySlug": "pool-lighting",
    "categoryName": "Pool Lighting",
    "subCategory": "ABS Body Swimming Pool Lights",
    "shortDescription": "Corrosion-proof ABS engineered swimming pool lights with high-lumen Edison & Cree LED chips in ultra-slim and classic profiles.",
    "description": "Constructed from impact-resistant ABS and polycarbonate polymers, the AQUALUXIS LIGHT ABS Body Pool Light series offers zero risk of corrosion in chemical and salt chlorination pools. Available in diverse profiles from ultra-slim 15mm nicheless models to wide 11-inch fixtures with premium SMD 2835 Cree and Power LED Edison chips.",
    "image": "/assets/products/al017-abs-pool-light.jpg",
    "gallery": [
      "/assets/products/al017-abs-pool-light.jpg",
      "/assets/products/al018-abs-pool-light.jpg",
      "/assets/products/al021-abs-pool-light.jpg",
      "/assets/products/al021-abs-pool-light-rear.jpg",
      "/assets/products/al023-abs-pool-light-profile.jpg",
      "/assets/products/al024-abs-pool-light.jpg",
      "/assets/products/al024-abs-pool-light-profile.jpg",
      "/assets/products/al025-abs-pool-light.jpg",
      "/assets/products/al029-abs-colorways.jpg"
    ],
    "specifications": {
      "Body Material": "ABS + PC (Engineered Polymers)",
      "Lens": "PC Glass (UV Stabilized)",
      "LED Chip": "Power LED Edison (AL016–AL020) / SMD 2835 CREE (AL021–AL029A)",
      "Protection Class": "IP68 Submersible Waterproof",
      "Warranty": "3 Years Warranty (2–3 Years for AL029 series)",
      "Wire": "Poly Cab (1 Mtr Wire)",
      "Beam Angle": "10\u00b0, 20\u00b0, 30\u00b0, 40\u00b0, 45\u00b0, 60\u00b0, 90\u00b0",
      "Color Options": "WW (2700\u20133000K), NW (4000\u20134500K), CW (6000\u20136500K), Red, Blue, Green, RGB",
      "Dimensions": "Dia 5.5\" to 11\" (Depth 15mm to 60mm)"
    },
    "variants": [
      {
        "code": "AL016",
        "dimension": "Dia 5.5\", Depth 40 mm",
        "wattage": "3 Watt / 9 Watt",
        "image": "/assets/products/al017-abs-pool-light.jpg",
        "ledChip": "Power LED Edison"
      },
      {
        "code": "AL017",
        "dimension": "Dia 6.5\", Depth 40 mm",
        "wattage": "6 Watt / 18 Watt",
        "image": "/assets/products/al017-abs-pool-light.jpg",
        "ledChip": "Power LED Edison"
      },
      {
        "code": "AL018",
        "dimension": "Dia 9\", Depth 40 mm",
        "wattage": "9 Watt / 27 Watt",
        "image": "/assets/products/al018-abs-pool-light.jpg",
        "ledChip": "Power LED Edison"
      },
      {
        "code": "AL019",
        "dimension": "Dia 9\", Depth 40 mm",
        "wattage": "12 Watt / 36 Watt",
        "image": "/assets/products/al019-abs-pool-light.jpg",
        "ledChip": "Power LED Edison"
      },
      {
        "code": "AL020",
        "dimension": "Dia 9\", Depth 40 mm",
        "wattage": "18 Watt",
        "image": "/assets/products/al020-abs-pool-light.jpg",
        "ledChip": "Power LED Edison"
      },
      {
        "code": "AL021",
        "dimension": "Dia 11\", Depth 41 mm",
        "wattage": "12W / 18W / 27W / 36W",
        "image": "/assets/products/al021-abs-pool-light.jpg",
        "ledChip": "SMD 2835 CREE"
      },
      {
        "code": "AL022",
        "dimension": "Dia 11\", Depth 41 mm",
        "wattage": "12W / 18W / 27W / 36W",
        "image": "/assets/products/al022-abs-pool-light.jpg",
        "ledChip": "SMD 2835 CREE"
      },
      {
        "code": "AL023",
        "dimension": "Dia 11\", Depth 50 mm",
        "wattage": "12W / 18W / 27W / 36W",
        "image": "/assets/products/al023-abs-pool-light.jpg",
        "ledChip": "SMD 2835 CREE"
      },
      {
        "code": "AL024",
        "dimension": "Dia 11\", Depth 15 mm (Ultra Slim Nicheless)",
        "wattage": "12W / 18W / 27W / 36W",
        "image": "/assets/products/al024-abs-pool-light.jpg",
        "ledChip": "SMD 2835 CREE"
      },
      {
        "code": "AL025",
        "dimension": "Dia 10\", Depth 60 mm",
        "wattage": "12 Watt / 18 Watt",
        "image": "/assets/products/al025-abs-pool-light.jpg",
        "ledChip": "SMD 2835 CREE"
      },
      {
        "code": "AL026",
        "dimension": "Dia 10\", Depth 60 mm",
        "wattage": "12 Watt / 18 Watt",
        "image": "/assets/products/al026-abs-pool-light.jpg",
        "ledChip": "SMD 2835 CREE"
      },
      {
        "code": "AL027",
        "dimension": "Dia 10\", Depth 60 mm",
        "wattage": "12 Watt / 18 Watt",
        "image": "/assets/products/al027-abs-pool-light.jpg",
        "ledChip": "SMD 2835 CREE"
      },
      {
        "code": "AL028",
        "dimension": "Dia 10\", Depth 60 mm",
        "wattage": "12 Watt / 18 Watt",
        "image": "/assets/products/al028-abs-pool-light.jpg",
        "ledChip": "SMD 2835 CREE"
      },
      {
        "code": "AL029",
        "dimension": "Dia 9.5\", Depth 60 mm",
        "wattage": "12W / 18W / 27W / 36W",
        "image": "/assets/products/al029-abs-pool-light.jpg",
        "ledChip": "SMD 2835 CREE (Color Rims: Grey/Black/Blue/Red)"
      },
      {
        "code": "AL029(A)",
        "dimension": "Dia 6.5\", Depth 60 mm",
        "wattage": "9W / 12W / 18W",
        "image": "/assets/products/al029a-abs-pool-light.jpg",
        "ledChip": "SMD 2835 CREE"
      }
    ],
    "applications": [
      "Residential Swimming Pools",
      "Saltwater & Chlorinated Swimming Pools",
      "Hotel & Resort Swimming Pools",
      "Commercial Aquatic Facilities"
],
    "features": [
      "100% chemical resistant engineered ABS body eliminating rust and galvanic corrosion",
      "Ultra-slim 15mm profile option (AL024) for effortless surface mounting without wall niches",
      "High luminous efficiency SMD 2835 Cree and Power LED Edison chips",
      "Superior thermal management for long continuous operating life underwater",
      "Rich monochromatic and multi-color RGB options"
    ],
    "isFeatured": true
  },
  {
    "id": "al030-al031-ss",
    "code": "AL030 / AL031",
    "name": "SS Body Swimming Pool Light",
    "slug": "ss-body-swimming-pool-light-al030-al031",
    "category": "pool-lighting",
    "categorySlug": "pool-lighting",
    "categoryName": "Pool Lighting",
    "subCategory": "SS Body Swimming Pool Lights",
    "shortDescription": "Heavy-duty stainless steel and polycarbonate underwater luminaires with high-lumen Cree and Edison LEDs.",
    "description": "Constructed with solid stainless steel faceplates and reinforced polycarbonate backing, the AQUALUXIS LIGHT SS Body Swimming Pool Light combines mechanical strength with aesthetic elegance. Built for luxury residential, resort, and commercial aquatic facilities.",
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
    "specifications": {
      "Body Material": "SS + PC",
      "Lens": "PC Glass",
      "LED Chip": "CREE / Edison / SMD 2835 CREE / Power LED",
      "Protection Class": "IP68 Submersible Waterproof",
      "Wire": "Poly Cab (1 Mtr Wire)",
      "Beam Angle": "10\u00b0, 20\u00b0, 30\u00b0, 40\u00b0, 45\u00b0, 60\u00b0, 90\u00b0",
      "Color Options": "WW (2700\u20133000K), NW (4000\u20134500K), CW (6000\u20136500K), Red, Blue, Green, RGB",
      "Dimensions": "Dia 8\" to 9\" (Depth 35mm to 40mm)"
    },
    "variants": [
      {
        "code": "AL030",
        "dimension": "Dia 8\", Depth 35 mm",
        "wattage": "6W / 18W / 9W / 27W / 12W / 36W",
        "image": "/assets/products/al030-ss-pool-light.jpg"
      },
      {
        "code": "AL031",
        "dimension": "Dia 9\", Depth 40 mm",
        "wattage": "12 Watt / 18 Watt",
        "image": "/assets/products/al031-ss-pool-light.jpg"
      }
    ],
    "applications": [
      "Premium Residential Swimming Pools",
      "Luxury Hotel Swimming Pools",
      "Resort Pool Installations",
      "Commercial Swimming Pool Environments"
],
    "features": [
      "High grade stainless steel faceplate with impact-resistant PC glass lens",
      "Advanced SMD 2835 Cree and Power LED optics for uniform illumination",
      "Submersible IP68 rating engineered for continuous deep submersion",
      "Low-voltage 12V safe operation standard"
    ],
    "isFeatured": true
  },
  {
    "id": "al032-al036-concealed",
    "code": "AL032 - AL036",
    "name": "Concealed Swimming Pool Light",
    "slug": "concealed-swimming-pool-light-al032-al036",
    "category": "pool-lighting",
    "categorySlug": "pool-lighting",
    "categoryName": "Pool Lighting",
    "subCategory": "Concealed Swimming Pool Lights",
    "shortDescription": "Recessed concealed stainless steel underwater luminaires for steps, ledges, perimeter walls, and submerged pool niches.",
    "description": "Engineered for flush recessed mounting into swimming pool walls, steps, and bottom floors, the AQUALUXIS LIGHT Concealed Swimming Pool Light delivers seamless architectural integration. Made of marine-grade SS 304/316 stainless steel with Edison Power LEDs and protective PC glass.",
    "image": "/assets/products/al032-concealed-pool-light.jpg",
    "gallery": [
      "/assets/products/al032-concealed-pool-light.jpg",
      "/assets/products/al032-concealed-pool-light-housing.jpg",
      "/assets/products/al034-concealed-pool-light.jpg",
      "/assets/products/al035-concealed-pool-light.jpg",
      "/assets/products/al036-concealed-pool-light.jpg",
      "/assets/products/al032-concealed-pool-light-profile.jpg",
      "/assets/products/al033-concealed-pool-light-profile.jpg",
      "/assets/products/al036-concealed-pool-light-rear.jpg"
],
    "specifications": {
      "Body Material": "SS 304 / 316",
      "Lens": "PC Glass",
      "LED Chip": "Power LED Edison",
      "Protection Class": "IP68 Submersible Waterproof",
      "Wire": "Poly Cab (1 Mtr Wire)",
      "Beam Angle": "10\u00b0, 20\u00b0, 30\u00b0, 40\u00b0, 45\u00b0, 60\u00b0, 90\u00b0",
      "Color Options": "WW (2700\u20133000K), NW (4000\u20134500K), CW (6000\u20136500K), Red, Blue, Green, RGB",
      "Dimensions": "Outer Dia 45mm to 140mm (Cutout 32mm to 110mm)"
    },
    "variants": [
      {
        "code": "AL032",
        "dimension": "Outer 45 mm, Cutout 32 mm, Height 55 mm",
        "wattage": "1 Watt / 3 Watt",
        "image": "/assets/products/al032-concealed-pool-light.jpg"
      },
      {
        "code": "AL033",
        "dimension": "Outer 85 mm, Cutout 60 mm, Height 56 mm",
        "wattage": "3 Watt / 9 Watt",
        "image": "/assets/products/al033-concealed-pool-light.jpg"
      },
      {
        "code": "AL034",
        "dimension": "Outer 110 mm, Cutout 85 mm, Height 46 mm",
        "wattage": "6 Watt / 18 Watt",
        "image": "/assets/products/al034-concealed-pool-light.jpg"
      },
      {
        "code": "AL035",
        "dimension": "Outer 140 mm, Cutout 110 mm, Height 50 mm (9 LED)",
        "wattage": "9 Watt / 27 Watt",
        "image": "/assets/products/al035-concealed-pool-light.jpg"
      },
      {
        "code": "AL036",
        "dimension": "Outer 140 mm, Cutout 110 mm, Height 50 mm (12 LED)",
        "wattage": "12 Watt / 36 Watt",
        "image": "/assets/products/al036-concealed-pool-light.jpg"
      }
    ],
    "applications": [
      "Flush-Mounted Pool Lighting Installations",
      "Minimalist Architectural Swimming Pools",
      "Luxury Infinity Pools",
      "Integrated Underwater Pool Lighting"
],
    "features": [
      "Flush in-ground / in-wall recessed design preventing swimmer interference",
      "Precision SS 304/316 marine stainless steel bezel and body",
      "High impact PC glass lens resistant to pool chemicals and thermal shock",
      "Comprehensive wattage range from 1W accent to 36W high output"
    ],
    "isFeatured": true
  },
  {
    "id": "al037-al040-full-ss-spot",
    "code": "AL037 - AL040",
    "name": "Full SS Spot Fountain Light",
    "slug": "full-ss-spot-fountain-light-al037-al040",
    "category": "fountain-lighting",
    "categorySlug": "fountain-lighting",
    "categoryName": "Fountain Lighting",
    "subCategory": "Full SS Spot Fountain Lights",
    "shortDescription": "Full stainless steel 304/316 underwater spot projector engineered for dynamic water fountains and architectural jets.",
    "description": "Constructed from 100% solid SS 304/316 stainless steel, the AQUALUXIS LIGHT Full SS Spot Fountain Light is built for continuous underwater operation in fountains and water basins. Features high-intensity Cree and Edison LED chips for sharp, punchy water beam illumination.",
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
    "specifications": {
      "Body Material": "SS 304 / 316",
      "Lens": "PC Glass",
      "LED Chip": "CREE / Edison",
      "Protection Class": "IP68 Submersible Waterproof",
      "Wire": "Poly Cab (1 Mtr Wire)",
      "Beam Angle": "10\u00b0, 20\u00b0, 30\u00b0, 40\u00b0, 45\u00b0, 60\u00b0, 90\u00b0",
      "Color Options": "WW (2700\u20133000K), NW (4000\u20134500K), CW (6000\u20136500K), Red, Blue, Green, RGB",
      "Dimensions": "Outer Dia 3.4\" to 140 mm (Back Dia 2.2\" to 85 mm)"
    },
    "variants": [
      {
        "code": "AL037",
        "dimension": "Outer Dia 3.4\", Back Dia 2.2\"",
        "wattage": "3 Watt / 9 Watt",
        "image": "/assets/products/al037-full-ss-spot-fountain-light.jpg"
      },
      {
        "code": "AL038",
        "dimension": "Outer Dia 110 mm, Back Dia 85 mm",
        "wattage": "6 Watt / 18 Watt",
        "image": "/assets/products/al038-full-ss-spot-fountain-light.jpg"
      },
      {
        "code": "AL039",
        "dimension": "Outer Dia 140 mm, Back Dia 85 mm",
        "wattage": "9 Watt / 27 Watt",
        "image": "/assets/products/al039-full-ss-spot-fountain-light.jpg"
      },
      {
        "code": "AL040",
        "dimension": "Outer Dia 140 mm, Back Dia 85 mm",
        "wattage": "12 Watt / 36 Watt",
        "image": "/assets/products/al040-full-ss-spot-fountain-light.jpg"
      }
    ],
    "applications": [
      "Large Architectural Fountains",
      "Musical Fountain Installations",
      "Public Fountain Lighting",
      "Commercial Water Displays"
],
    "features": [
      "All stainless steel marine grade construction resistant to turbulence and vibration",
      "Concentrated beam angles for deep water jet penetration",
      "Submersible IP68 waterproof cable connection with Poly Cab wire",
      "High performance Cree/Edison LED emitters"
    ],
    "isFeatured": true
  },
  {
    "id": "al041-al052-ss-spot",
    "code": "AL041 - AL052",
    "name": "SS Spot Fountain Light",
    "slug": "ss-spot-fountain-light-al041-al052",
    "category": "fountain-lighting",
    "categorySlug": "fountain-lighting",
    "categoryName": "Fountain Lighting",
    "subCategory": "SS Spot Fountain Lights",
    "shortDescription": "High-output stainless steel and pressure die casting spot fountain lights available in 5 stylish body finishes.",
    "description": "The AQUALUXIS LIGHT SS Spot Fountain Light series spans 12 precision models crafted with SS 304/316 and pressure die-cast housings. Offering directional swivel adjustment, multi-wattage configurations up to 36W, and five stylish body finishes for discerning landscape architects and fountain designers.",
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
    "specifications": {
      "Body Material": "SS 304 / 316 / Pressure Die Casting Body",
      "Lens": "PC Glass",
      "LED Chip": "CREE / Edison",
      "Protection Class": "IP68 Submersible Waterproof",
      "Wire": "Poly Cab (1 Mtr Wire)",
      "Beam Angle": "10\u00b0, 20\u00b0, 30\u00b0, 40\u00b0, 45\u00b0, 60\u00b0, 90\u00b0",
      "Body Finishes": "Available in 5 Stylish Body Finishes",
      "Color Options": "WW (2700\u20133000K), NW (4000\u20134500K), CW (6000\u20136500K), Red, Blue, Green, RGB",
      "Dimensions": "Dia 3\" to 6\" (Outer Dia up to 140 mm)"
    },
    "variants": [
      {
        "code": "AL041",
        "dimension": "Dia 3\", Thickness 22 mm",
        "wattage": "3 Watt / 9 Watt",
        "image": "/assets/products/al041-ss-spot-fountain-light.jpg"
      },
      {
        "code": "AL042",
        "dimension": "Dia 4\", Thickness 22 mm",
        "wattage": "6 Watt / 18 Watt",
        "image": "/assets/products/al042-ss-spot-fountain-light.jpg"
      },
      {
        "code": "AL043",
        "dimension": "Dia 5\", Thickness 1\"",
        "wattage": "9 Watt / 27 Watt",
        "image": "/assets/products/al043-ss-spot-fountain-light.jpg"
      },
      {
        "code": "AL044",
        "dimension": "Dia 5\", Thickness 1\"",
        "wattage": "12 Watt / 36 Watt",
        "image": "/assets/products/al044-ss-spot-fountain-light.jpg"
      },
      {
        "code": "AL045",
        "dimension": "Dia 6\", Thickness 1\"",
        "wattage": "18 Watt",
        "image": "/assets/products/al045-ss-spot-fountain-light.jpg"
      },
      {
        "code": "AL046",
        "dimension": "Outer Dia 85 mm, Back Dia 60 mm",
        "wattage": "3 Watt / 9 Watt",
        "image": "/assets/products/al046-ss-spot-fountain-light.jpg"
      },
      {
        "code": "AL047",
        "dimension": "Outer Dia 140 mm, Back Dia 110 mm",
        "wattage": "6 Watt / 18 Watt",
        "image": "/assets/products/al047-ss-spot-fountain-light.jpg"
      },
      {
        "code": "AL048",
        "dimension": "Outer Dia 140 mm, Back Dia 110 mm",
        "wattage": "9 Watt / 27 Watt",
        "image": "/assets/products/al048-ss-spot-fountain-light.jpg"
      },
      {
        "code": "AL049",
        "dimension": "Outer Dia 140 mm, Back Dia 110 mm",
        "wattage": "12 Watt / 36 Watt",
        "image": "/assets/products/al049-ss-spot-fountain-light.jpg"
      },
      {
        "code": "AL050",
        "dimension": "Outer Dia 120 mm, Back Dia 85 mm",
        "wattage": "6 Watt / 18 Watt",
        "image": "/assets/products/al050-ss-spot-fountain-light.jpg"
      },
      {
        "code": "AL051",
        "dimension": "Outer Dia 120 mm, Back Dia 85 mm",
        "wattage": "12 Watt / 36 Watt",
        "image": "/assets/products/al049-ss-spot-fountain-light.jpg"
      },
      {
        "code": "AL052",
        "dimension": "Outer Dia 120 mm, Back Dia 85 mm",
        "wattage": "12 Watt / 36 Watt",
        "image": "/assets/products/al050-ss-spot-fountain-light.jpg"
      }
    ],
    "applications": [
      "Decorative Fountains",
      "Garden Fountains",
      "Resort Fountains",
      "Landscape Water Installations"
],
    "features": [
      "Available in 5 stylish body finishes for architectural harmony",
      "Pressure die casting and marine stainless steel dual durability",
      "High power Cree / Edison LED chips producing vibrant saturated colors",
      "Adjustable aiming brackets for precision optical targeting"
    ],
    "isFeatured": true
  },
  {
    "id": "al053-al057-nozzle",
    "code": "AL053 - AL057",
    "name": "Nozzle Fountain Light",
    "slug": "nozzle-fountain-light-al053-al057",
    "category": "fountain-lighting",
    "categorySlug": "fountain-lighting",
    "categoryName": "Fountain Lighting",
    "subCategory": "Nozzle Fountain Lights",
    "shortDescription": "Center-threaded underwater donut fixture designed for direct mounting over fountain nozzles and spray heads.",
    "description": "The AQUALUXIS LIGHT Nozzle Fountain Light features a central threaded opening allowing fountain nozzles to pass directly through the luminaire. Water jets emerge surrounded by high-intensity Cree and Edison LED illumination, delivering dazzling columns of colored light with zero shadowing.",
    "image": "/assets/products/al053-nozzle-fountain-light.jpg",
    "gallery": [
      "/assets/products/al053-nozzle-fountain-light.jpg",
      "/assets/products/al054-nozzle-fountain-light.jpg",
      "/assets/products/al055-nozzle-fountain-light.jpg",
      "/assets/products/al056-nozzle-fountain-light.jpg",
      "/assets/products/al057-nozzle-fountain-light.jpg"
],
    "specifications": {
      "Body Material": "SS 304 / 316 / Aluminium (Flat Model)",
      "Lens": "PC Glass",
      "LED Chip": "CREE / Edison",
      "Protection Class": "IP68 Submersible Waterproof",
      "Wire": "Poly Cab (1 Mtr Wire)",
      "Beam Angle": "10\u00b0, 20\u00b0, 30\u00b0, 40\u00b0, 45\u00b0, 60\u00b0, 90\u00b0",
      "Thread Specifications": "1/2\" (AL053\u2013AL055) and 1\" (AL056\u2013AL057)",
      "Color Options": "WW (2700\u20133000K), NW (4000\u20134500K), CW (6000\u20136500K), Red, Blue, Green, RGB",
      "Dimensions": "Dia 4\" to 5\" (Thickness 32 mm)"
    },
    "variants": [
      {
        "code": "AL053",
        "dimension": "Dia 4\", Thread 1/2\", Thickness 32 mm",
        "wattage": "3 Watt / 9 Watt",
        "image": "/assets/products/al053-nozzle-fountain-light.jpg"
      },
      {
        "code": "AL054",
        "dimension": "Dia 4\", Thread 1/2\", Thickness 32 mm",
        "wattage": "4 Watt / 12 Watt",
        "image": "/assets/products/al054-nozzle-fountain-light.jpg"
      },
      {
        "code": "AL055",
        "dimension": "Dia 4\", Thread 1/2\", Thickness 32 mm",
        "wattage": "5 Watt / 15 Watt",
        "image": "/assets/products/al055-nozzle-fountain-light.jpg"
      },
      {
        "code": "AL056",
        "dimension": "Dia 5\", Thread 1\", Thickness 32 mm",
        "wattage": "6 Watt / 18 Watt",
        "image": "/assets/products/al056-nozzle-fountain-light.jpg"
      },
      {
        "code": "AL057",
        "dimension": "Dia 5\", Thread 1\", Thickness 32 mm",
        "wattage": "9 Watt / 27 Watt",
        "image": "/assets/products/al057-nozzle-fountain-light.jpg"
      }
    ],
    "applications": [
      "Illuminated Fountain Jets",
      "Musical Fountain Displays",
      "Decorative Water Features",
      "Public Fountain Installations"
],
    "features": [
      "Direct nozzle pass-through geometry for 360-degree uniform water column illumination",
      "Standard 1/2\" and 1\" BSP thread compatibility",
      "Ultra-durable SS 304/316 and flat aluminium body",
      "Hermetic IP68 seal for long-term underwater submersion"
    ],
    "isFeatured": true
  },
  {
    "id": "al058-al061-adj-nozzle",
    "code": "AL058 - AL061",
    "name": "Adjustable Nozzle Fountain Light",
    "slug": "adjustable-nozzle-fountain-light-al058-al061",
    "category": "fountain-lighting",
    "categorySlug": "fountain-lighting",
    "categoryName": "Fountain Lighting",
    "subCategory": "Adjustable Nozzle Fountain Lights",
    "shortDescription": "Articulating center-hole nozzle light with 1.5-inch pass-through and multi-angle aiming for dynamic water arches.",
    "description": "Designed for complex water choreography and angled nozzle sprays, the AQUALUXIS LIGHT Adjustable Nozzle Fountain Light features a generous 1.5-inch center hole with internal articulating alignment. Allows the light beam to follow angled water jets precisely.",
    "image": "/assets/products/al058-adjustable-nozzle-fountain-light.jpg",
    "gallery": [
      "/assets/products/al058-adjustable-nozzle-fountain-light.jpg",
      "/assets/products/al059-adjustable-nozzle-fountain-light.jpg",
      "/assets/products/al060-adjustable-nozzle-fountain-light.jpg",
      "/assets/products/al061-adjustable-nozzle-fountain-light.jpg",
      "/assets/products/al058-adjustable-nozzle-fountain-light-side.jpg"
],
    "specifications": {
      "Body Material": "SS 304 / 316",
      "Lens": "PC Glass",
      "LED Chip": "CREE / Edison",
      "Protection Class": "IP68 Submersible Waterproof",
      "Wire": "Poly Cab (1 Mtr Wire)",
      "Beam Angle": "10\u00b0, 20\u00b0, 30\u00b0, 40\u00b0, 45\u00b0, 60\u00b0, 90\u00b0",
      "Center Hole": "1.5 Inch",
      "Color Options": "WW (2700\u20133000K), NW (4000\u20134500K), CW (6000\u20136500K), Red, Blue, Green, RGB",
      "Dimensions": "Outer Dia 5\", Thickness 2\""
    },
    "variants": [
      {
        "code": "AL058",
        "dimension": "Outer 5\", Centre Hole 1.5\", Thickness 2\"",
        "wattage": "3 Watt / 9 Watt",
        "image": "/assets/products/al058-adjustable-nozzle-fountain-light.jpg"
      },
      {
        "code": "AL059",
        "dimension": "Outer 5\", Centre Hole 1.5\", Thickness 2\"",
        "wattage": "6 Watt / 18 Watt",
        "image": "/assets/products/al059-adjustable-nozzle-fountain-light.jpg"
      },
      {
        "code": "AL060",
        "dimension": "Outer 5\", Centre Hole 1.5\", Thickness 2\"",
        "wattage": "9 Watt / 27 Watt",
        "image": "/assets/products/al060-adjustable-nozzle-fountain-light.jpg"
      },
      {
        "code": "AL061",
        "dimension": "Outer 5\", Centre Hole 1.5\", Thickness 2\"",
        "wattage": "12 Watt / 36 Watt",
        "image": "/assets/products/al061-adjustable-nozzle-fountain-light.jpg"
      }
    ],
    "applications": [
      "Adjustable Fountain Jet Installations",
      "Decorative Water Displays",
      "Landscape Fountains",
      "Architectural Fountains"
],
    "features": [
      "1.5-inch large center hole accommodating larger commercial fountain nozzles",
      "Articulating angular alignment mechanism to illuminate angled water plumes",
      "Marine-grade SS 304/316 housing built for harsh aquatic conditions",
      "High power Cree / Edison LED arrays up to 36 Watt"
    ],
    "isFeatured": true
  },
  {
    "id": "al062-wall-washer",
    "code": "AL062",
    "name": "LED Wall Washer Light",
    "slug": "led-wall-washer-light-al062",
    "category": "water-feature-lighting",
    "categorySlug": "water-feature-lighting",
    "categoryName": "Water Feature Lighting",
    "subCategory": "LED Wall Washer Lights",
    "shortDescription": "High-performance IP65 architectural linear LED wall washer for facade grazing, water walls, and textured stone features.",
    "description": "The AQUALUXIS LIGHT LED Wall Washer Light (AL062) delivers uniform vertical light grazing across architectural surfaces, waterfalls, and exterior building facades. Engineered with die-casting aluminium, Edison Power LEDs, and precision asymmetric optics.",
    "image": "/assets/products/al062-led-wall-washer-light.jpg",
    "gallery": [
      "/assets/products/al062-led-wall-washer-light.jpg"
],
    "specifications": {
      "Protection Rating": "IP65",
      "Housing": "Die-Casting Aluminium",
      "LED Chip": "Edison Power LED",
      "Beam Angle": "15\u00b0 \u2013 60\u00b0",
      "Power Input": "12V / 24V DC",
      "Wattage Range": "9 Watt \u2013 54 Watt",
      "Warranty": "2 Years of Warranty",
      "Available Sizes": "1 Ft \u2013 12 Ft",
      "Color Options": "WW (2700\u20133000K), NW (4000\u20134500K), CW (6000\u20136500K), Red, Blue, Green, RGB"
    },
    "variants": [
      {
        "code": "AL062-1FT",
        "dimension": "Length 1 Ft (Custom Available)",
        "wattage": "9W - 18W"
      },
      {
        "code": "AL062-2FT",
        "dimension": "Length 2 Ft",
        "wattage": "18W - 24W"
      },
      {
        "code": "AL062-3FT",
        "dimension": "Length 3 Ft",
        "wattage": "27W - 36W"
      },
      {
        "code": "AL062-4FT",
        "dimension": "Length 4 Ft",
        "wattage": "36W - 54W"
      },
      {
        "code": "AL062-CUSTOM",
        "dimension": "Length Up to 12 Ft",
        "wattage": "Up to 54 Watt"
      }
    ],
    "applications": [
      "Illuminated Water Walls",
      "Architectural Facades",
      "Landscape Walls",
      "Fountain Structures"
],
    "features": [
      "Die-casting aluminium housing with high thermal dissipation fins",
      "Asymmetric and narrow beam optics (15\u00b0-60\u00b0) for clean vertical grazing",
      "Customizable lengths from 1 Ft up to 12 Ft with 2-year warranty",
      "IP65 rated weather protection for demanding outdoor environments"
    ],
    "isFeatured": true
  },
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
      "/assets/products/al063-umbrella-bell-nozzle.jpg"
],
    "specifications": {
      "Nozzle Type": "Umbrella Nozzle (Mushroom / Bell)",
      "Housing": "Brass with Chrome Plated",
      "Thread": "1 Inch",
      "Height": "8 Inch",
      "Power / Flow": "As per pump (pressure) flow"
    },
    "variants": [
      {
        "code": "AL063",
        "dimension": "Height 8\", Thread 1\"",
        "wattage": "Flow as per pump pressure"
      }
    ],
    "applications": [
      "Umbrella-Shaped Water Displays",
      "Bell Fountain Installations",
      "Garden & Landscape Fountains",
      "Decorative Resort Fountains"
],
    "features": [
      "Silent laminar umbrella water veil with zero splashing",
      "Solid brass construction with high-luster chrome plating",
      "Standard 1\" thread connection for simple installation",
      "Adjustable water film thickness via top cap adjustment"
    ],
    "isFeatured": true
  },
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
      "/assets/products/al064-foam-nozzle.jpg"
],
    "specifications": {
      "Nozzle Type": "Foam Nozzle",
      "Housing": "Brass with Chrome Plated",
      "Thread": "1 Inch",
      "Height": "155 mm",
      "Power / Flow": "As per pump (pressure) flow"
    },
    "variants": [
      {
        "code": "AL064",
        "dimension": "Height 155 mm, Thread 1\"",
        "wattage": "Flow as per pump pressure"
      }
    ],
    "applications": [
      "Aerated Foam Fountain Displays",
      "Decorative Water Jets",
      "Landscape Fountains",
      "Public Fountain Installations"
],
    "features": [
      "Produces dense aerated bubbling white water with exceptional light reflection",
      "Heavy-duty chrome plated brass body built for long service life",
      "High wind resistance compared to standard single jet nozzles",
      "Compact 155mm height with standard 1-inch inlet"
    ],
    "isFeatured": false
  },
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
      "/assets/products/al065-finger-jet-nozzle-cluster-1.jpg",
      "/assets/products/al065-finger-jet-nozzle-cluster-2.jpg"
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
      {
        "code": "AL065-7F",
        "dimension": "7 Finger Jets, Height 90 mm, Thread 1\"",
        "wattage": "Flow as per pump pressure",
        "image": "/assets/products/al065-finger-jet-nozzle.jpg"
      },
      {
        "code": "AL065-10F",
        "dimension": "10 Finger Jets, Height 90 mm, Thread 1\"",
        "wattage": "Flow as per pump pressure",
        "image": "/assets/products/al065-finger-jet-nozzle-cluster-1.jpg"
      },
      {
        "code": "AL065-14F",
        "dimension": "14 Finger Jets, Height 90 mm, Thread 1\"",
        "wattage": "Flow as per pump pressure",
        "image": "/assets/products/al065-finger-jet-nozzle-cluster-1.jpg"
      },
      {
        "code": "AL065-20F",
        "dimension": "20 Finger Jets, Height 90 mm, Thread 1\"",
        "wattage": "Flow as per pump pressure",
        "image": "/assets/products/al065-finger-jet-nozzle-cluster-2.jpg"
      }
    ],
    "applications": [
      "Multiple Narrow Water Jet Displays",
      "Interactive Fountain Installations",
      "Musical Fountain Arrangements",
      "Decorative Water Features"
],
    "features": [
      "Delivers clear crystalline laminar finger jets in delicate radiating arcs",
      "Choice of 7, 10, 14, or 20 individual precision-bored jets",
      "Solid brass with mirror chrome plating for premium corrosion resistance",
      "Compact 90 mm profile with standard 1-inch female BSP thread"
    ],
    "isFeatured": true
  },
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
      "/assets/products/al066-long-foam-nozzle.jpg"
],
    "specifications": {
      "Nozzle Type": "Foam Nozzle (Long Barrel)",
      "Housing": "Brass with Chrome Plated",
      "Thread": "1 Inch",
      "Power / Flow": "As per pump (pressure) flow"
    },
    "variants": [
      {
        "code": "AL066",
        "dimension": "Long Barrel Profile, Thread 1\"",
        "wattage": "Flow as per pump pressure"
      }
    ],
    "applications": [
      "Continuous Foam Fountain Displays",
      "Aerated Water Features",
      "Decorative Fountains",
      "Landscape Installations"
],
    "features": [
      "Extended aeration chamber generating monumental white foam plumes",
      "Superior wind stability preserving spray structure in blustery conditions",
      "Solid brass construction with heavy-duty chrome plating",
      "Standard 1-inch inlet connection"
    ],
    "isFeatured": false
  },
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
      "/assets/products/al067-geyser-nozzle.jpg"
],
    "specifications": {
      "Nozzle Type": "Cascade Jet Nozzle / Geyser Nozzle",
      "Housing": "Brass with Chrome Plated",
      "Thread": "1 Inch",
      "Power / Flow": "As per pump (pressure) flow"
    },
    "variants": [
      {
        "code": "AL067",
        "dimension": "Cascade Jet Profile, Thread 1\"",
        "wattage": "Flow as per pump pressure"
      }
    ],
    "applications": [
      "Vertical Water Jet Fountains",
      "Plaza Fountains",
      "Public Water Displays",
      "Musical Fountain Installations"
],
    "features": [
      "Entrains pool water for massive conical geyser eruptions",
      "Dynamic water sound dampening ambient urban noise",
      "Corrosion-resistant chrome plated brass body",
      "Standard 1-inch thread interface"
    ],
    "isFeatured": false
  },
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
      "/assets/products/al068-ss-foam-nozzle-detail.jpg"
],
    "specifications": {
      "Nozzle Type": "Foam Nozzle",
      "Housing": "Brass with Chrome Plated with Black ABS",
      "Thread": "1 Inch",
      "Power / Flow": "As per pump (pressure) flow"
    },
    "variants": [
      {
        "code": "AL068",
        "dimension": "Brass & ABS Composite, Thread 1\"",
        "wattage": "Flow as per pump pressure"
      }
    ],
    "applications": [
      "Aerated Fountain Displays",
      "Decorative Water Features",
      "Resort Fountains",
      "Landscape Fountains"
],
    "features": [
      "Hybrid brass and durable black ABS construction",
      "High air-to-water mixture ratio for maximum visual opacity",
      "Resistant to scale buildup and pool chemical wear",
      "Standard 1-inch thread for easy retrofits"
    ],
    "isFeatured": false
  },
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
      "/assets/products/al069-tulip-nozzle.jpg"
],
    "specifications": {
      "Nozzle Type": "Tulip Nozzle",
      "Housing": "Brass with Chrome Plated",
      "Height": "8 Inch",
      "Thread": "1 Inch",
      "Power / Flow": "As per pump (pressure) flow"
    },
    "variants": [
      {
        "code": "AL069",
        "dimension": "Height 8\", Thread 1\"",
        "wattage": "Flow as per pump pressure"
      }
    ],
    "applications": [
      "Tulip-Shaped Fountain Displays",
      "Decorative Garden Fountains",
      "Resort Water Features",
      "Architectural Fountains"
],
    "features": [
      "Forms an exquisite translucent chalice water pattern resembling a tulip",
      "Chrome plated brass body with fine mechanical tolerances",
      "Quiet low-splash water movement ideal for enclosed environments",
      "8-inch body height with 1-inch female connection"
    ],
    "isFeatured": false
  },
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
      "/assets/products/al070-fan-jet-nozzle.jpg"
],
    "specifications": {
      "Nozzle Type": "Fan Nozzle",
      "Housing": "Brass with Chrome Plated",
      "Height": "3.5 Inch",
      "Thread": "1 Inch",
      "Power / Flow": "As per pump (pressure) flow"
    },
    "variants": [
      {
        "code": "AL070",
        "dimension": "Height 3.5\", Thread 1\"",
        "wattage": "Flow as per pump pressure"
      }
    ],
    "applications": [
      "Fan-Shaped Water Displays",
      "Decorative Water Walls",
      "Landscape Fountains",
      "Architectural Water Features"
],
    "features": [
      "Wide planar fan angle spreading water uniformly",
      "Solid brass with mirror chrome plating",
      "Compact 3.5\" profile for tight basin integration",
      "Standard 1-inch connection"
    ],
    "isFeatured": false
  },
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
      "/assets/products/al071-revolving-nozzle.jpg"
],
    "specifications": {
      "Nozzle Type": "Revolving Nozzle",
      "Housing": "Brass with Chrome Plated",
      "Thread": "1 Inch",
      "Power / Flow": "As per pump (pressure) flow"
    },
    "variants": [
      {
        "code": "AL071",
        "dimension": "Revolving Multi-Arm, Thread 1\"",
        "wattage": "Flow as per pump pressure"
      }
    ],
    "applications": [
      "Rotating Water Displays",
      "Dynamic Fountain Installations",
      "Musical Fountains",
      "Public Water Attractions"
],
    "features": [
      "Autonomous hydraulic rotation driven purely by water flow",
      "Precision mechanical bearing system for continuous reliable rotation",
      "Chrome-plated brass construction built to withstand constant rotational forces",
      "Standard 1-inch thread interface"
    ],
    "isFeatured": true
  },
  {
    "id": "al072-flower-cluster-nozzle",
    "code": "AL072",
    "name": "Diamond Nozzle / Flower Cluster Nozzle",
    "slug": "diamond-flower-cluster-nozzle-al072",
    "category": "fountain-lighting",
    "categorySlug": "fountain-lighting",
    "categoryName": "Fountain Lighting",
    "subCategory": "Fountain Nozzles",
    "shortDescription": "Multi-tier flower cluster nozzle generating a tiered crystalline bouquet of water jets.",
    "description": "The AQUALUXIS LIGHT Diamond Nozzle / Flower Cluster Nozzle (AL072) discharges precision concentric water jets forming a multi-tiered crystal dome spray. Crafted from solid brass with chrome plating for fountain installations.",
    "image": "/assets/products/al072-diamond-flower-cluster-nozzle.jpg",
    "gallery": [
      "/assets/products/al072-diamond-flower-cluster-nozzle.jpg"
    ],
    "specifications": {
      "Model No.": "AL072",
      "Nozzle Type": "Flower Cluster Nozzle",
      "Power": "As per pump (pressure / flow)",
      "Housing": "Brass with Chrome Plated",
      "Thread": "1 Inch"
    },
    "variants": [
      {
        "code": "AL072",
        "dimension": "Thread 1\"",
        "wattage": "As per pump (pressure / flow)",
        "image": "/assets/products/al072-diamond-flower-cluster-nozzle.jpg"
      }
    ],
    "applications": [
      "Multi-Stream Flower Cluster Displays",
      "Decorative Fountains",
      "Musical Water Displays",
      "Landscape Fountains"
],
    "features": [
      "Concentric multi-tiered spray pattern creating high volume visual impact",
      "Solid brass chrome-plated body with precision-machined orifice nozzles",
      "Spectacular illumination when paired with center-hole or spotlight fixtures",
      "Standard 1-inch female connection"
    ],
    "isFeatured": true
  },
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
      "/assets/products/al073-crown-nozzle.jpg"
],
    "specifications": {
      "Nozzle Type": "Crown Nozzle",
      "Housing": "Brass with Chrome Plated",
      "Available Sizes": "1\", 1/2\", 3/8\", 1/4\", 1/8\"",
      "Power / Flow": "As per pump (pressure) flow"
    },
    "variants": [
      {
        "code": "AL073-1IN",
        "dimension": "Thread Size 1\"",
        "wattage": "Flow as per pump pressure"
      },
      {
        "code": "AL073-05IN",
        "dimension": "Thread Size 1/2\"",
        "wattage": "Flow as per pump pressure"
      },
      {
        "code": "AL073-38IN",
        "dimension": "Thread Size 3/8\"",
        "wattage": "Flow as per pump pressure"
      },
      {
        "code": "AL073-14IN",
        "dimension": "Thread Size 1/4\"",
        "wattage": "Flow as per pump pressure"
      },
      {
        "code": "AL073-18IN",
        "dimension": "Thread Size 1/8\"",
        "wattage": "Flow as per pump pressure"
      }
    ],
    "applications": [
      "Crown-Shaped Water Displays",
      "Decorative Fountains",
      "Resort Installations",
      "Public Fountain Displays"
],
    "features": [
      "Radiating parabolic crown pattern with precision water trajectories",
      "Extensive thread size options from 1/8\" micro to 1\" full-scale",
      "Mirror-finish chrome over solid brass body",
      "Excellent wind resistance and crisp geometric definition"
    ],
    "isFeatured": false
  },
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
      "/assets/products/al074-flower-nozzle.jpg"
],
    "specifications": {
      "Nozzle Type": "Flower Nozzle",
      "Housing": "Brass with Chrome Plated",
      "Thread": "1 Inch",
      "Power / Flow": "As per pump (pressure) flow"
    },
    "variants": [
      {
        "code": "AL074",
        "dimension": "Flower Pattern, Thread 1\"",
        "wattage": "Flow as per pump pressure"
      }
    ],
    "applications": [
      "Flower-Shaped Water Displays",
      "Decorative Garden Fountains",
      "Landscape Water Features",
      "Architectural Fountains"
],
    "features": [
      "Forms an intricate blooming flower petal spray geometry",
      "Precision-cast and machined chrome plated brass housing",
      "Operates smoothly with standard commercial submersible pumps",
      "Standard 1-inch female BSP connection"
    ],
    "isFeatured": false
  },
  {
    "id": "al075-ss-cascade-blade",
    "code": "AL075",
    "name": "SS Water Cascade / Blade Nozzle",
    "slug": "ss-water-cascade-blade-nozzle-al075",
    "category": "water-feature-lighting",
    "categorySlug": "water-feature-lighting",
    "categoryName": "Water Feature Lighting",
    "subCategory": "SS Water Cascade Nozzles",
    "shortDescription": "Heavy-duty stainless steel shear descent waterfall spillway available from 6 inches up to 10 feet.",
    "description": "The AQUALUXIS LIGHT SS Water Cascade / Blade Nozzle (AL075) produces a continuous, crystal-clear sheet of falling water. Manufactured from marine-grade stainless steel with dual 1\"/1.5\" inlet threading and internal baffling for perfect laminar flow across widths up to 10 feet.",
    "image": "/assets/products/al075-ss-water-cascade-blade-nozzle.jpg",
    "gallery": [
      "/assets/products/al075-ss-water-cascade-blade-nozzle.jpg",
      "/assets/products/al075-water-cascade-rear-entry-drawing.jpg",
      "/assets/products/al075-water-cascade-bottom-entry-drawing.jpg"
    ],
    "specifications": {
      "Model No.": "AL075",
      "Nozzle Type": "Water Fall",
      "Power": "As per pump (pressure / flow)",
      "Housing": "SS (Stainless Steel)",
      "Thread": "1\" / 1.5\"",
      "Available Sizes": "6\", 8\", 10\", 1 FT \u2013 10 FT"
    },
    "variants": [
      {
        "code": "AL075 - 6\"",
        "dimension": "Width 6\", Thread 1\"",
        "wattage": "As per pump (pressure / flow)",
        "image": "/assets/products/al075-ss-water-cascade-blade-nozzle.jpg"
      },
      {
        "code": "AL075 - 8\"",
        "dimension": "Width 8\", Thread 1\"",
        "wattage": "As per pump (pressure / flow)",
        "image": "/assets/products/al075-ss-water-cascade-blade-nozzle.jpg"
      },
      {
        "code": "AL075 - 10\"",
        "dimension": "Width 10\", Thread 1\"",
        "wattage": "As per pump (pressure / flow)",
        "image": "/assets/products/al075-ss-water-cascade-blade-nozzle.jpg"
      },
      {
        "code": "AL075 - 1 FT",
        "dimension": "Width 1 Ft (12\"), Thread 1\" / 1.5\"",
        "wattage": "As per pump (pressure / flow)",
        "image": "/assets/products/al075-ss-water-cascade-blade-nozzle.jpg"
      },
      {
        "code": "AL075 - 2 FT",
        "dimension": "Width 2 Ft (24\"), Thread 1\" / 1.5\"",
        "wattage": "As per pump (pressure / flow)",
        "image": "/assets/products/al075-ss-water-cascade-blade-nozzle.jpg"
      },
      {
        "code": "AL075 - 3 FT",
        "dimension": "Width 3 Ft (36\"), Thread 1\" / 1.5\"",
        "wattage": "As per pump (pressure / flow)",
        "image": "/assets/products/al075-ss-water-cascade-blade-nozzle.jpg"
      },
      {
        "code": "AL075 - 4 FT",
        "dimension": "Width 4 Ft (48\"), Thread 1.5\"",
        "wattage": "As per pump (pressure / flow)",
        "image": "/assets/products/al075-ss-water-cascade-blade-nozzle.jpg"
      },
      {
        "code": "AL075 - 6 FT",
        "dimension": "Width 6 Ft (72\"), Thread 1.5\"",
        "wattage": "As per pump (pressure / flow)",
        "image": "/assets/products/al075-ss-water-cascade-blade-nozzle.jpg"
      },
      {
        "code": "AL075 - 8 FT",
        "dimension": "Width 8 Ft (96\"), Thread 1.5\"",
        "wattage": "As per pump (pressure / flow)",
        "image": "/assets/products/al075-ss-water-cascade-blade-nozzle.jpg"
      },
      {
        "code": "AL075 - 10 FT",
        "dimension": "Width 10 Ft (120\"), Thread 1.5\"",
        "wattage": "As per pump (pressure / flow)",
        "image": "/assets/products/al075-ss-water-cascade-blade-nozzle.jpg"
      }
    ],
    "applications": [
      "Stainless Steel Blade Waterfalls",
      "Infinity Pool Cascades",
      "Resort Water Walls",
      "Architectural Water Features"
],
    "features": [
      "Internal hydrodynamic baffle chambers generating smooth glass-like laminar sheets",
      "Solid marine grade stainless steel construction with zero warping",
      "Extensive size selection from compact 6-inch to expansive 10-foot continuous blades",
      "Dual 1-inch and 1.5-inch inlet options for flexible plumbing"
    ],
    "isFeatured": true
  },
  {
    "id": "al076-ss-step-blade",
    "code": "AL076",
    "name": "SS Step Water Blade Nozzle",
    "slug": "ss-step-water-blade-nozzle-al076",
    "category": "water-feature-lighting",
    "categorySlug": "water-feature-lighting",
    "categoryName": "Water Feature Lighting",
    "subCategory": "SS Water Cascade Nozzles",
    "shortDescription": "Stepped stainless steel waterfall blade engineered for pool steps, copings, and tiered retaining walls.",
    "description": "The AQUALUXIS LIGHT SS Step Water Blade Nozzle (AL076) features a specialized stepped projection geometry that easily nests into coping steps, stone walls, and brickwork. Spanning sizes from 1 Ft to 8 Ft for uniform cascading water veils.",
    "image": "/assets/products/al076-ss-step-water-blade-nozzle.jpg",
    "gallery": [
      "/assets/products/al076-ss-step-water-blade-nozzle.jpg"
],
    "specifications": {
      "Nozzle Type": "Water Fall / Step Blade",
      "Housing": "SS (Stainless Steel)",
      "Thread": "1\" / 1.5\"",
      "Sizes Available": "1 Ft \u2013 8 Ft",
      "Power / Flow": "As per pump (pressure) flow"
    },
    "variants": [
      {
        "code": "AL076-1FT",
        "dimension": "Width 1 Ft, Thread 1\" / 1.5\"",
        "wattage": "Flow as per pump pressure"
      },
      {
        "code": "AL076-2FT",
        "dimension": "Width 2 Ft, Thread 1.5\"",
        "wattage": "Flow as per pump pressure"
      },
      {
        "code": "AL076-3FT",
        "dimension": "Width 3 Ft, Thread 1.5\"",
        "wattage": "Flow as per pump pressure"
      },
      {
        "code": "AL076-4FT",
        "dimension": "Width 4 Ft, Thread 1.5\"",
        "wattage": "Flow as per pump pressure"
      },
      {
        "code": "AL076-6FT",
        "dimension": "Width 6 Ft, Thread 1.5\"",
        "wattage": "Flow as per pump pressure"
      },
      {
        "code": "AL076-8FT",
        "dimension": "Width 8 Ft, Thread 1.5\"",
        "wattage": "Flow as per pump pressure"
      }
    ],
    "applications": [
      "Stepped Waterfall Installations",
      "Multi-Level Water Features",
      "Landscape Cascades",
      "Architectural Water Walls"
],
    "features": [
      "Step profile engineered for masonry and tile step integration",
      "Full stainless steel body with laser-welded seams",
      "Consistent laminar sheet descent even at variable pump pressures",
      "Standard 1\" and 1.5\" BSP threaded inlets"
    ],
    "isFeatured": true
  },
  {
    "id": "al077-ss-water-cascade",
    "code": "AL077",
    "name": "SS Water Cascade Nozzle",
    "slug": "ss-water-cascade-nozzle-al077",
    "category": "water-feature-lighting",
    "categorySlug": "water-feature-lighting",
    "categoryName": "Water Feature Lighting",
    "subCategory": "SS Water Cascade Nozzles",
    "shortDescription": "Architectural stainless steel waterfall cascade spillway in lengths from 1 foot to 8 feet.",
    "description": "Crafted from marine-grade stainless steel, the AQUALUXIS LIGHT SS Water Cascade Nozzle (AL077) creates an uninterrupted, mirror-smooth water curtain. Engineered with interior flow-calming vanes to eliminate water turbulence before the weir edge.",
    "image": "/assets/products/al077-ss-water-cascade-nozzle.jpg",
    "gallery": [
      "/assets/products/al077-ss-water-cascade-nozzle.jpg"
],
    "specifications": {
      "Nozzle Type": "Water Fall / Cascade",
      "Housing": "SS (Stainless Steel)",
      "Thread": "1\" / 1.5\"",
      "Sizes Available": "1 Ft \u2013 8 Ft",
      "Power / Flow": "As per pump (pressure) flow"
    },
    "variants": [
      {
        "code": "AL077-1FT",
        "dimension": "Width 1 Ft, Thread 1\" / 1.5\"",
        "wattage": "Flow as per pump pressure"
      },
      {
        "code": "AL077-2FT",
        "dimension": "Width 2 Ft, Thread 1.5\"",
        "wattage": "Flow as per pump pressure"
      },
      {
        "code": "AL077-3FT",
        "dimension": "Width 3 Ft, Thread 1.5\"",
        "wattage": "Flow as per pump pressure"
      },
      {
        "code": "AL077-4FT",
        "dimension": "Width 4 Ft, Thread 1.5\"",
        "wattage": "Flow as per pump pressure"
      },
      {
        "code": "AL077-6FT",
        "dimension": "Width 6 Ft, Thread 1.5\"",
        "wattage": "Flow as per pump pressure"
      },
      {
        "code": "AL077-8FT",
        "dimension": "Width 8 Ft, Thread 1.5\"",
        "wattage": "Flow as per pump pressure"
      }
    ],
    "applications": [
      "Stainless Steel Water Cascades",
      "Poolside Waterfalls",
      "Luxury Resort Installations",
      "Decorative Water Walls"
],
    "features": [
      "Precision-engineered weir lip delivering continuous unbroken water sheeting",
      "Stainless steel construction impervious to outdoor weathering and treated pool water",
      "Broad range of standard lengths from 1 Ft to 8 Ft",
      "Clean concealed installation inside stone or rendered walls"
    ],
    "isFeatured": true
  },
  {
    "id": "al078-cobra-nozzle",
    "code": "AL078",
    "name": "Cobra Nozzle",
    "slug": "cobra-nozzle-al078",
    "category": "water-feature-lighting",
    "categorySlug": "water-feature-lighting",
    "categoryName": "Water Feature Lighting",
    "subCategory": "Acrylic Waterfall Nozzles",
    "shortDescription": "Sculptural stainless steel cobra waterfall fountain in 1 Ft, 2 Ft, and 3 Ft heights.",
    "description": "The AQUALUXIS LIGHT Cobra Nozzle (AL078) is a freestanding sculptural waterfall crafted in gleaming stainless steel. Its iconic arching cobra silhouette projects a wide curtain of water back into the pool, providing both striking visual grandeur and relaxing hydrotherapeutic shoulder massage.",
    "image": "/assets/products/al078-cobra-nozzle.jpg",
    "gallery": [
      "/assets/products/al078-cobra-nozzle.jpg",
      "/assets/products/al078-cobra-nozzle-2.jpg",
      "/assets/products/al078-cobra-nozzle-3.jpg",
      "/assets/products/al078-cobra-nozzle-profile.jpg"
    ],
    "specifications": {
      "Nozzle Type": "Water Fall / Cobra Waterfall",
      "Housing": "SS (Stainless Steel)",
      "Thread": "1\" / 2\"",
      "Sizes Available": "1 Ft, 2 Ft, 3 Ft",
      "Power / Flow": "As per pump (pressure) flow"
    },
    "variants": [
      {
        "code": "AL078-1FT",
        "dimension": "Height 1 Ft, Thread 1\" / 2\"",
        "wattage": "Flow as per pump pressure",
        "image": "/assets/products/al078-cobra-nozzle.jpg"
      },
      {
        "code": "AL078-2FT",
        "dimension": "Height 2 Ft, Thread 2\"",
        "wattage": "Flow as per pump pressure",
        "image": "/assets/products/al078-cobra-nozzle-2.jpg"
      },
      {
        "code": "AL078-3FT",
        "dimension": "Height 3 Ft, Thread 2\"",
        "wattage": "Flow as per pump pressure",
        "image": "/assets/products/al078-cobra-nozzle-3.jpg"
      }
    ],
    "applications": [
      "Cobra-Style Poolside Waterfalls",
      "Resort Swimming Pool Features",
      "Decorative Landscape Waterfalls",
      "Luxury Spa Water Features"
],
    "features": [
      "Iconic sculptural cobra silhouette in polished marine stainless steel",
      "Dual visual spectacle and invigorating neck/shoulder hydro-massage flow",
      "Heavy-duty mounting base with secure flange anchors",
      "Threaded 1\" / 2\" bottom inlet for high-flow hydraulic performance"
    ],
    "isFeatured": true
  },
  {
    "id": "al079-dolphin-nozzle",
    "code": "AL079",
    "name": "Dolphin Nozzle",
    "slug": "dolphin-nozzle-al079",
    "category": "water-feature-lighting",
    "categorySlug": "water-feature-lighting",
    "categoryName": "Water Feature Lighting",
    "subCategory": "Acrylic Waterfall Nozzles",
    "shortDescription": "Graceful arching dolphin-profile stainless steel poolside waterfall in 2-foot height.",
    "description": "The AQUALUXIS LIGHT Dolphin Nozzle (AL079) combines hydrodynamic grace with solid stainless steel durability. Its fluid dolphin-inspired curvature projects an arching cascade into the pool, adding movement and relaxing acoustics to luxury pool surroundings.",
    "image": "/assets/products/al079-dolphin-nozzle.jpg",
    "gallery": [
      "/assets/products/al079-dolphin-nozzle.jpg"
],
    "specifications": {
      "Nozzle Type": "Water Fall / Dolphin Cascade",
      "Housing": "SS (Stainless Steel)",
      "Thread": "1\" / 2\"",
      "Sizes Available": "2 Ft",
      "Power / Flow": "As per pump (pressure) flow"
    },
    "variants": [
      {
        "code": "AL079-2FT",
        "dimension": "Height 2 Ft, Thread 1\" / 2\"",
        "wattage": "Flow as per pump pressure",
        "image": "/assets/products/al079-dolphin-nozzle.jpg"
      }
    ],
    "applications": [
      "Dolphin-Style Water Displays",
      "Decorative Swimming Pool Installations",
      "Themed Water Features",
      "Resort Water Attractions"
],
    "features": [
      "Organic curved dolphin profile crafted in marine stainless steel",
      "Soothing sound of falling water combined with shoulder massage stream",
      "Mirror-polished corrosion resistant exterior finish",
      "1\" / 2\" inlet plumbing for versatile flow rate adjustment"
    ],
    "isFeatured": false
  },
  {
    "id": "al080-acrylic-cobra",
    "code": "AL080",
    "name": "Acrylic Cobra Nozzle",
    "slug": "acrylic-cobra-nozzle-al080",
    "category": "water-feature-lighting",
    "categorySlug": "water-feature-lighting",
    "categoryName": "Water Feature Lighting",
    "subCategory": "Acrylic Waterfall Nozzles",
    "shortDescription": "Transparent optical acrylic cobra waterfall with integrated internal LED illumination in square and curved profiles.",
    "description": "Crafted from crystal-clear optical acrylic, the AQUALUXIS LIGHT Acrylic Cobra Nozzle (AL080) revolutionizes poolside aesthetics. Internal LED lighting refracts directly through the clear body and falling water sheet, creating a glowing neon-like water cascade at night. Available in 2 Ft Square and Curve models.",
    "image": "/assets/products/al080-acrylic-cobra-nozzle.jpg",
    "gallery": [
      "/assets/products/al080-acrylic-cobra-nozzle.jpg"
],
    "specifications": {
      "Nozzle Type": "Water Fall / Illuminated Acrylic Cobra",
      "Housing": "Acrylic (Crystal Clear Optical Grade)",
      "Thread": "2 Inch",
      "Models Available": "2 Ft (Square), 2 Ft (Curve)",
      "Power / Flow": "As per pump (pressure) flow"
    },
    "variants": [
      {
        "code": "AL080-SQ",
        "dimension": "2 Ft (Square), Thread 2\"",
        "wattage": "Flow as per pump pressure"
      },
      {
        "code": "AL080-CV",
        "dimension": "2 Ft (Curve), Thread 2\"",
        "wattage": "Flow as per pump pressure"
      }
    ],
    "applications": [
      "Acrylic Waterfall Installations",
      "Illuminated Poolside Cascades",
      "Decorative Water Features",
      "Resort Swimming Pools"
],
    "features": [
      "100% transparent UV-resistant optical acrylic housing",
      "Internal LED channel illuminates the entire structure and falling water stream",
      "Available in both sharp architectural Square and flowing Curved profiles",
      "2-inch high-flow inlet ensuring smooth, full-sheet water delivery"
    ],
    "isFeatured": true
  },
  {
    "id": "al081-acrylic-blade",
    "code": "AL081",
    "name": "Acrylic Blade Nozzle",
    "slug": "acrylic-blade-nozzle-al081",
    "category": "water-feature-lighting",
    "categorySlug": "water-feature-lighting",
    "categoryName": "Water Feature Lighting",
    "subCategory": "Acrylic Waterfall Nozzles",
    "shortDescription": "Crystal-clear optical acrylic waterfall blade spillway with internal LED channel in 1 Ft to 4 Ft widths.",
    "description": "The AQUALUXIS LIGHT Acrylic Blade Nozzle (AL081) combines modern transparent acrylic construction with high-performance water sheeting. Designed with internal channels for integrated LED illumination, turning water walls into radiant glowing waterfalls.",
    "image": "/assets/products/al081-acrylic-blade-nozzle.jpg",
    "gallery": [
      "/assets/products/al081-acrylic-blade-nozzle.jpg",
      "/assets/products/al081-acrylic-blade-nozzle-detail.jpg"
],
    "specifications": {
      "Nozzle Type": "Water Fall / Transparent Blade Spillway",
      "Housing": "Acrylic (Crystal Clear Optical Grade)",
      "Thread": "1.5 Inch",
      "Sizes Available": "1 Ft, 2 Ft, 3 Ft, 4 Ft",
      "Power / Flow": "As per pump (pressure) flow"
    },
    "variants": [
      {
        "code": "AL081-1FT",
        "dimension": "Width 1 Ft, Thread 1.5\"",
        "wattage": "Flow as per pump pressure"
      },
      {
        "code": "AL081-2FT",
        "dimension": "Width 2 Ft, Thread 1.5\"",
        "wattage": "Flow as per pump pressure"
      },
      {
        "code": "AL081-3FT",
        "dimension": "Width 3 Ft, Thread 1.5\"",
        "wattage": "Flow as per pump pressure"
      },
      {
        "code": "AL081-4FT",
        "dimension": "Width 4 Ft, Thread 1.5\"",
        "wattage": "Flow as per pump pressure"
      }
    ],
    "applications": [
      "Acrylic Blade Waterfalls",
      "Architectural Water Walls",
      "Poolside Cascades",
      "Decorative Water Installations"
],
    "features": [
      "Precision-engineered optical acrylic weir for glass-like transparent waterfall descent",
      "Integrated internal slot for waterproof LED strip illumination",
      "UV-stabilized non-yellowing acrylic suitable for direct sunlight exposure",
      "1.5-inch threaded bottom inlet connection"
    ],
    "isFeatured": true
  }
];

export const CATEGORIES: CategoryInfo[] = [
  {
    "id": "pool-lighting",
    "name": "Pool Lighting",
    "slug": "pool-lighting",
    "tagline": "Engineered Underwater Luminaires for Pools & Aquatic Spas",
    "description": "Precision-engineered IP68 underwater luminaires crafted from marine-grade 304/316 stainless steel and engineered ABS. Featuring advanced Edison and Cree LED chips with optimal photometric distribution and ultra-low thermal resistance.",
    "heroImage": "/assets/hero/hero-pool-night-luxury.webp",
    "productCount": 4,
    "subCategories": [
      "Surface Mount Lights",
      "ABS Pool Lights",
      "Stainless Steel Pool Lights",
      "Concealed / In-Ground Lights"
    ],
    "highlights": [
      "Certified IP68 true underwater hermetic sealing",
      "Corrosion-resistant SS 304/316 & impact-modified ABS bodies",
      "Safe low-voltage operation (12V AC/DC)",
      "Rich monochromatic & dynamic synchronized RGB colorways"
    ]
  },
  {
    "id": "fountain-lighting",
    "name": "Fountain Lighting",
    "slug": "fountain-lighting",
    "tagline": "High-Lumen Submersible Illumination for Dynamic Water Displays",
    "description": "High-intensity underwater fixtures designed to illuminate vertical water jets, architectural geysers, and dancing water displays. Available in center-hole nozzle configurations and adjustable heavy-duty swivel brackets.",
    "heroImage": "/assets/hero/hero-fountain-grand.webp",
    "productCount": 16,
    "subCategories": [
      "Spot Fountain Lights",
      "Nozzle Mount Lights",
      "Fountain Nozzles"
    ],
    "highlights": [
      "Optical-grade PMMA lenses with concentrated beam punch (10°-90°)",
      "Submersible brass and stainless steel adjustable swivel mounts",
      "Center-hole pass-through design for direct nozzle mounting",
      "Built-in thermal regulation for extended emitter lifespan"
    ]
  },
  {
    "id": "water-feature-lighting",
    "name": "Water Feature Lighting",
    "slug": "water-feature-lighting",
    "tagline": "Architectural Grazing, Shear Water Cascades & Illuminated Spillways",
    "description": "Sophisticated linear wall grazing, stainless steel shear descent cascades, illuminated acrylic cobra nozzles, and architectural spillways that bring movement and acoustic elegance to luxury environments.",
    "heroImage": "/assets/applications/app-architectural-facade.webp",
    "productCount": 8,
    "subCategories": [
      "Wall Washer Lights",
      "Water Cascades & Blades",
      "Decorative Waterfalls"
    ],
    "highlights": [
      "Uniform water sheet laminar flow with integrated LED illumination",
      "Architectural grade SS 304/316 and UV-stabilized crystal acrylics",
      "Subtle grazing optics for textured stone and water wall facades",
      "Easy integration with modern automation and DMX systems"
    ]
  }
];

export const CATALOGUES: CatalogueItem[] = [
  {
    "id": "complete-catalogue",
    "title": "AQUALUXIS LIGHT – Complete Product Catalogue",
    "filename": "AQUALUXIS LIGHT CATLOGUE.pdf",
    "cover": "/assets/catalogue/aqualuxis-light-catalogue-cover.jpg",
    "file": "/assets/catalogue/aqualuxis-light-catalogue.pdf",
    "pages": 37,
    "fileSize": "10.5 MB",
    "description": "Explore our complete range of swimming pool lights, fountain lights, LED wall washers, fountain nozzles and water cascade products. View product models and technical specifications in our latest catalogue."
  }
];

export const COMPANY_INFO = {
  "brandName": "AQUALUXIS LIGHT",
  "tagline": "BRILLIANCE BENEATH THE SURFACE",
  "phone": "+91 8668466689",
  "secondaryPhones": [
    "+91 9766775542",
    "+91 8180944842"
  ],
  "email": "info@aqualuxislight.com",
  "salesEmail": "sales@aqualuxislight.com",
  "whatsappNumber": "918668466689",
  "address": "Industrial Lighting Zone, Vasai East, Maharashtra, India",
  "hours": "Monday – Saturday: 9:00 AM – 7:00 PM IST",
  "social": {
    "linkedin": "https://linkedin.com",
    "instagram": "https://instagram.com"
  }
};

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find(p => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return PRODUCTS.filter(p => p.categorySlug === categorySlug);
}

export function getFeaturedProducts(): Product[] {
  return PRODUCTS.filter(p => p.isFeatured);
}

export function getRelatedProducts(currentSlug: string, limit = 4): Product[] {
  const current = getProductBySlug(currentSlug);
  if (!current) return PRODUCTS.slice(0, limit);
  return PRODUCTS
    .filter(p => p.slug !== currentSlug && p.category === current.category)
    .slice(0, limit);
}
