export interface SurfacePoolModel {
  code: string;
  name: string;
  wattage: string;
  wattageOptions: string[];
  diameter: string;
  thickness: string;
  bodyMaterial: string;
  lens: string;
  ledChip: string;
  wire: string;
  beamAngle: string;
  protection: string;
  image: string;
  gallery: string[];
  description?: string;
}

export const SURFACE_POOL_LIGHT_FAMILY = {
  id: 'surface-model-swimming-pool-light',
  name: 'Surface Model Swimming Pool Light',
  fullName: 'Surface Model Swimming Pool Light (SS 304/306/Aluminium)',
  subCategory: 'SS Surface Swimming Pool Lights',
  categoryName: 'Swimming Pool Light',
  categorySlug: 'pool-lighting',
  slug: 'surface-model-swimming-pool-light-al00-al015',
  shortDescription: 'High-performance surface mounted swimming pool lights designed for durability and superior illumination.',
  description: 'Robust and stylish surface mount design with high-efficiency LEDs, ideal for swimming pools, water bodies and landscape projects.',
  defaultModelCode: 'AL03',
  heroBannerImage: '/assets/banners/banner-pool-night.jpg',
  commonSpecifications: {
    'Body Material': 'SS 304 / SS 306 / Aluminium',
    'Lens': 'PC Glass',
    'LED Chip': 'Power LED Edison',
    'Wire': 'Poly Cab (1 Mtr Wire)',
    'Thickness': '1"',
    'Beam Angle': '10°, 20°, 30°, 40°, 45°, 60°, 90°',
    'Colour Options': 'WW, NW, CW, Red, Blue, Green, RGB',
    'Protection Rating': 'IP68 Submersible Waterproof',
    'Mounting Type': 'Surface Wall Mounting',
    'Operating Voltage': '12V AC/DC Low Voltage'
  },
  availableColours: [
    { name: 'WW (2700–3000K)', bg: '#FFDE8A', border: '#E5C572' },
    { name: 'NW (4000–4500K)', bg: '#FFF5D6', border: '#E5DCB8' },
    { name: 'CW (6000–6500K)', bg: '#FFFFFF', border: '#CBDCEB' },
    { name: 'Red', bg: '#EF4444', border: '#DC2626' },
    { name: 'Blue', bg: '#2563EB', border: '#1D4ED8' },
    { name: 'Green', bg: '#10B981', border: '#059669' },
    { 
      name: 'RGB', 
      bg: 'linear-gradient(135deg, #FF0055 0%, #00FFCC 50%, #0066FF 100%)', 
      border: '#CBDCEB' 
    },
  ],
  keyHighlights: [
    'Corrosion-resistant & durable body',
    'High-efficiency Power LED',
    'Uniform and bright illumination',
    'Multiple wattage and size options',
    'Suitable for pool and water applications'
  ],
  features: [
    {
      title: 'IP68 Submersible Waterproof',
      description: 'Hermetically sealed construction engineered for permanent underwater operation up to 2 meters depth.',
      icon: 'ShieldCheck'
    },
    {
      title: 'SS 304 / 306 & Aluminium Housing',
      description: 'Marine-grade corrosion-resistant body engineered to withstand chlorinated and saline swimming pool chemistry.',
      icon: 'Layers'
    },
    {
      title: 'High-Efficiency Edison LEDs',
      description: 'High-performance Edison Power LEDs providing maximum lumens per watt with superior thermal dissipation.',
      icon: 'Zap'
    },
    {
      title: 'Impact-Resistant PC Glass Lens',
      description: 'Heavy-duty optical polycarbonate glass lens resistant to high water pressure and UV degradation.',
      icon: 'Disc'
    },
    {
      title: 'Multiple Precision Beam Angles',
      description: 'Optical beam options (10° to 90°) for focused underwater illumination or broad luminous pool washes.',
      icon: 'Compass'
    },
    {
      title: '12V / 24V Safe Low Voltage',
      description: 'Low-voltage operation compliant with international safety standards for submerged human-occupancy pools.',
      icon: 'Cpu'
    }
  ],
  applications: [
    {
      title: 'Residential Underwater Swimming Pool Lighting',
      description: 'Surface-mounted low-profile illumination engineered for private villa pools, providing wide beam optical spread across crystalline water.',
      image: '/assets/applications/surface-model-swimming-pool-light-al00-al015-app-1.jpg'
    },
    {
      title: 'Luxury Resort Swimming Pool Illumination',
      description: 'High-lumen 316 stainless steel fixture withstanding continuous high-salinity exposure and chemical chlorination in multi-tier resort lagoons.',
      image: '/assets/applications/surface-model-swimming-pool-light-al00-al015-app-2.jpg'
    },
    {
      title: 'Commercial Swimming Pool Lighting',
      description: 'Reliable 12V AC/DC low-voltage operation for Olympic-length competition pools, aquatic centers, and health club lap basins.',
      image: '/assets/applications/surface-model-swimming-pool-light-al00-al015-app-3.jpg'
    },
    {
      title: 'Architectural Pool Lighting',
      description: 'Precision optical beam shaping for infinity edges, perimeter wet decks, and modern geometric architectural water elements.',
      image: '/assets/applications/surface-model-swimming-pool-light-al00-al015-app-4.jpg'
    }
  ],
  downloads: [
    {
      title: 'Aqualuxis Light – Complete Product Catalogue',
      description: 'Explore the complete Aqualuxis Light product range, including underwater swimming pool lights, fountain lighting, LED wall washers, fountain nozzles and water cascade solutions.',
      file: '/assets/catalogue/AQUALUXIS%20LIGHT%20CATLOGUE.pdf',
      format: 'PDF',
      badge: 'Official Product Catalogue'
    }
  ],
  faqs: [
    {
      q: 'What is the body material of the Surface Model Swimming Pool Light?',
      a: 'Manufactured with high-grade SS 304, SS 316 marine-grade stainless steel or aluminium plate for superior corrosion resistance against chlorinated and saline swimming pool water chemistry.'
    },
    {
      q: 'What are the available wattage options?',
      a: 'The Surface Model range offers wattages from 3 Watt (1 × 3W in AL00) up to 36 Watt (AL04/AL09/AL014), including dual-wattage variants such as 3W/9W, 6W/18W, 9W/27W, and 12W/36W.'
    },
    {
      q: 'Can it be used for both swimming pools and water features?',
      a: 'Yes, with certified IP68 waterproof submersible construction and durable PC glass lens, it is fully rated for continuous underwater operation in swimming pools, spas, jacuzzis, fountains, and architectural water bodies.'
    },
    {
      q: 'What are the available model sizes?',
      a: 'Outer diameters include compact 50 mm (AL00) followed by 3 inch, 4 inch, 5 inch, and 6 inch diameters, all engineered with an ultra-slim 1-inch thickness profile.'
    },
    {
      q: 'What beam angles can be selected?',
      a: 'Precision optical lenses are available in 10°, 20°, 30°, 40°, 45°, 60°, and 90° beam angles for narrow accent spotlighting or expansive aquatic floodlighting.'
    },
    {
      q: 'How can I request a quotation?',
      a: 'Select your desired model (e.g. AL03), wattage, and colour option in the interactive Models & Variants section, then click "Request a Quote" or contact our engineering team via WhatsApp at +91 98202 85117.'
    }
  ],
  relatedSubcategories: [
    {
      name: 'ABS Body Swimming Pool Light',
      slug: 'abs-body-swimming-pool-light-al016-al029a',
      image: '/assets/products/al017-abs-pool-light.jpg',
      models: 'AL016 – AL029A',
      features: 'High-grade ABS housing, corrosion-free'
    },
    {
      name: 'SS Body Swimming Pool Light',
      slug: 'ss-body-swimming-pool-light-al030-al031',
      image: '/assets/products/al030-ss-pool-light.jpg',
      models: 'AL030 – AL031',
      features: 'Full Stainless Steel marine grade'
    },
    {
      name: 'Concealed Swimming Pool Light',
      slug: 'concealed-swimming-pool-light-al032-al036',
      image: '/assets/products/al032-concealed-pool-light.jpg',
      models: 'AL032 – AL036',
      features: 'Flush recessed in-ground installation'
    }
  ]
};

// All 16 models AL00 to AL015 strictly according to the catalogue
export const SURFACE_POOL_MODELS: SurfacePoolModel[] = [
  {
    code: 'AL00',
    name: 'Surface Model Swimming Pool Light AL00',
    wattage: '3 Watt (1 × 3W)',
    wattageOptions: ['3 Watt'],
    diameter: '50 mm',
    thickness: '1"',
    bodyMaterial: 'SS 304 / SS 306 / Aluminium',
    lens: 'PC Glass',
    ledChip: 'Power LED Edison',
    wire: 'Poly Cab (1 Mtr Wire)',
    beamAngle: '10°, 20°, 30°, 40°, 45°, 60°, 90°',
    protection: 'IP68 Submersible',
    image: '/assets/products/al00-surface-pool-light.jpg',
    gallery: [
      '/assets/products/al00-surface-pool-light.jpg',
      '/assets/products/al00-surface-pool-light-profile.jpg',
      '/assets/products/al00-surface-pool-light-rear.jpg',
      '/assets/products/al01-surface-pool-light.jpg',
      '/assets/products/al02-surface-pool-light.jpg'
    ]
  },
  {
    code: 'AL01',
    name: 'Surface Model Swimming Pool Light AL01',
    wattage: '3 Watt / 9 Watt',
    wattageOptions: ['3 Watt', '9 Watt'],
    diameter: '3"',
    thickness: '1"',
    bodyMaterial: 'SS 304 / SS 306 / Aluminium',
    lens: 'PC Glass',
    ledChip: 'Power LED Edison',
    wire: 'Poly Cab (1 Mtr Wire)',
    beamAngle: '10°, 20°, 30°, 40°, 45°, 60°, 90°',
    protection: 'IP68 Submersible',
    image: '/assets/products/al01-surface-pool-light.jpg',
    gallery: [
      '/assets/products/al01-surface-pool-light.jpg',
      '/assets/products/al00-surface-pool-light-profile.jpg',
      '/assets/products/al00-surface-pool-light-rear.jpg',
      '/assets/products/al01-surface-pool-light.jpg'
    ]
  },
  {
    code: 'AL02',
    name: 'Surface Model Swimming Pool Light AL02',
    wattage: '6 Watt / 18 Watt',
    wattageOptions: ['6 Watt', '18 Watt'],
    diameter: '4"',
    thickness: '1"',
    bodyMaterial: 'SS 304 / SS 306 / Aluminium',
    lens: 'PC Glass',
    ledChip: 'Power LED Edison',
    wire: 'Poly Cab (1 Mtr Wire)',
    beamAngle: '10°, 20°, 30°, 40°, 45°, 60°, 90°',
    protection: 'IP68 Submersible',
    image: '/assets/products/al02-surface-pool-light.jpg',
    gallery: [
      '/assets/products/al02-surface-pool-light.jpg',
      '/assets/products/al00-surface-pool-light-profile.jpg',
      '/assets/products/al00-surface-pool-light-rear.jpg',
      '/assets/products/al01-surface-pool-light.jpg'
    ]
  },
  {
    code: 'AL03',
    name: 'Surface Model Swimming Pool Light AL03',
    wattage: '9 Watt / 27 Watt',
    wattageOptions: ['9 Watt', '27 Watt'],
    diameter: '5"',
    thickness: '1"',
    bodyMaterial: 'SS 304 / SS 306 / Aluminium',
    lens: 'PC Glass',
    ledChip: 'Power LED Edison',
    wire: 'Poly Cab (1 Mtr Wire)',
    beamAngle: '10°, 20°, 30°, 40°, 45°, 60°, 90°',
    protection: 'IP68 Submersible',
    image: '/assets/products/al03-surface-pool-light.jpg',
    gallery: [
      '/assets/products/al03-surface-pool-light.jpg',
      '/assets/products/al00-surface-pool-light-profile.jpg',
      '/assets/products/al00-surface-pool-light-rear.jpg',
      '/assets/products/al01-surface-pool-light.jpg',
      '/assets/products/al02-surface-pool-light.jpg'
    ]
  },
  {
    code: 'AL04',
    name: 'Surface Model Swimming Pool Light AL04',
    wattage: '12 Watt / 36 Watt',
    wattageOptions: ['12 Watt', '36 Watt'],
    diameter: '5"',
    thickness: '1"',
    bodyMaterial: 'SS 304 / SS 306 / Aluminium',
    lens: 'PC Glass',
    ledChip: 'Power LED Edison',
    wire: 'Poly Cab (1 Mtr Wire)',
    beamAngle: '10°, 20°, 30°, 40°, 45°, 60°, 90°',
    protection: 'IP68 Submersible',
    image: '/assets/products/al04-surface-pool-light.jpg',
    gallery: [
      '/assets/products/al04-surface-pool-light.jpg',
      '/assets/products/al00-surface-pool-light-profile.jpg',
      '/assets/products/al00-surface-pool-light-rear.jpg',
      '/assets/products/al01-surface-pool-light.jpg'
    ]
  },
  {
    code: 'AL05',
    name: 'Surface Model Swimming Pool Light AL05',
    wattage: '18 Watt',
    wattageOptions: ['18 Watt'],
    diameter: '6"',
    thickness: '1"',
    bodyMaterial: 'SS 304 / SS 306 / Aluminium',
    lens: 'PC Glass',
    ledChip: 'Power LED Edison',
    wire: 'Poly Cab (1 Mtr Wire)',
    beamAngle: '10°, 20°, 30°, 40°, 45°, 60°, 90°',
    protection: 'IP68 Submersible',
    image: '/assets/products/al05-surface-pool-light.jpg',
    gallery: [
      '/assets/products/al05-surface-pool-light.jpg',
      '/assets/products/al00-surface-pool-light-profile.jpg',
      '/assets/products/al00-surface-pool-light-rear.jpg',
      '/assets/products/al01-surface-pool-light.jpg'
    ]
  },
  {
    code: 'AL06',
    name: 'Surface Model Swimming Pool Light AL06',
    wattage: '3 Watt / 9 Watt',
    wattageOptions: ['3 Watt', '9 Watt'],
    diameter: '3"',
    thickness: '1"',
    bodyMaterial: 'SS 304 / SS 306 / Aluminium',
    lens: 'PC Glass',
    ledChip: 'Power LED Edison',
    wire: 'Poly Cab (1 Mtr Wire)',
    beamAngle: '10°, 20°, 30°, 40°, 45°, 60°, 90°',
    protection: 'IP68 Submersible',
    image: '/assets/products/al06-surface-pool-light.jpg',
    gallery: [
      '/assets/products/al06-surface-pool-light.jpg',
      '/assets/products/al00-surface-pool-light-profile.jpg',
      '/assets/products/al00-surface-pool-light-rear.jpg'
    ]
  },
  {
    code: 'AL07',
    name: 'Surface Model Swimming Pool Light AL07',
    wattage: '6 Watt / 18 Watt',
    wattageOptions: ['6 Watt', '18 Watt'],
    diameter: '4"',
    thickness: '1"',
    bodyMaterial: 'SS 304 / SS 306 / Aluminium',
    lens: 'PC Glass',
    ledChip: 'Power LED Edison',
    wire: 'Poly Cab (1 Mtr Wire)',
    beamAngle: '10°, 20°, 30°, 40°, 45°, 60°, 90°',
    protection: 'IP68 Submersible',
    image: '/assets/products/al07-surface-pool-light.jpg',
    gallery: [
      '/assets/products/al07-surface-pool-light.jpg',
      '/assets/products/al00-surface-pool-light-profile.jpg',
      '/assets/products/al00-surface-pool-light-rear.jpg'
    ]
  },
  {
    code: 'AL08',
    name: 'Surface Model Swimming Pool Light AL08',
    wattage: '9 Watt / 27 Watt',
    wattageOptions: ['9 Watt', '27 Watt'],
    diameter: '5"',
    thickness: '1"',
    bodyMaterial: 'SS 304 / SS 306 / Aluminium',
    lens: 'PC Glass',
    ledChip: 'Power LED Edison',
    wire: 'Poly Cab (1 Mtr Wire)',
    beamAngle: '10°, 20°, 30°, 40°, 45°, 60°, 90°',
    protection: 'IP68 Submersible',
    image: '/assets/products/al08-surface-pool-light.jpg',
    gallery: [
      '/assets/products/al08-surface-pool-light.jpg',
      '/assets/products/al00-surface-pool-light-profile.jpg',
      '/assets/products/al00-surface-pool-light-rear.jpg'
    ]
  },
  {
    code: 'AL09',
    name: 'Surface Model Swimming Pool Light AL09',
    wattage: '12 Watt / 36 Watt',
    wattageOptions: ['12 Watt', '36 Watt'],
    diameter: '5"',
    thickness: '1"',
    bodyMaterial: 'SS 304 / SS 306 / Aluminium',
    lens: 'PC Glass',
    ledChip: 'Power LED Edison',
    wire: 'Poly Cab (1 Mtr Wire)',
    beamAngle: '10°, 20°, 30°, 40°, 45°, 60°, 90°',
    protection: 'IP68 Submersible',
    image: '/assets/products/al09-surface-pool-light.jpg',
    gallery: [
      '/assets/products/al09-surface-pool-light.jpg',
      '/assets/products/al00-surface-pool-light-profile.jpg',
      '/assets/products/al00-surface-pool-light-rear.jpg'
    ]
  },
  {
    code: 'AL010',
    name: 'Surface Model Swimming Pool Light AL010',
    wattage: '18 Watt',
    wattageOptions: ['18 Watt'],
    diameter: '6"',
    thickness: '1"',
    bodyMaterial: 'SS 304 / SS 306 / Aluminium',
    lens: 'PC Glass',
    ledChip: 'Power LED Edison',
    wire: 'Poly Cab (1 Mtr Wire)',
    beamAngle: '10°, 20°, 30°, 40°, 45°, 60°, 90°',
    protection: 'IP68 Submersible',
    image: '/assets/products/al010-surface-pool-light.jpg',
    gallery: [
      '/assets/products/al010-surface-pool-light.jpg',
      '/assets/products/al00-surface-pool-light-profile.jpg',
      '/assets/products/al00-surface-pool-light-rear.jpg'
    ]
  },
  {
    code: 'AL011',
    name: 'Surface Model Swimming Pool Light AL011',
    wattage: '3 Watt / 9 Watt',
    wattageOptions: ['3 Watt', '9 Watt'],
    diameter: '3"',
    thickness: '1"',
    bodyMaterial: 'SS 304 / SS 306 / Aluminium',
    lens: 'PC Glass',
    ledChip: 'Power LED Edison',
    wire: 'Poly Cab (1 Mtr Wire)',
    beamAngle: '10°, 20°, 30°, 40°, 45°, 60°, 90°',
    protection: 'IP68 Submersible',
    image: '/assets/products/al011-surface-pool-light.jpg',
    gallery: [
      '/assets/products/al011-surface-pool-light.jpg',
      '/assets/products/al00-surface-pool-light-profile.jpg',
      '/assets/products/al00-surface-pool-light-rear.jpg'
    ]
  },
  {
    code: 'AL012',
    name: 'Surface Model Swimming Pool Light AL012',
    wattage: '6 Watt / 18 Watt',
    wattageOptions: ['6 Watt', '18 Watt'],
    diameter: '4"',
    thickness: '1"',
    bodyMaterial: 'SS 304 / SS 306 / Aluminium',
    lens: 'PC Glass',
    ledChip: 'Power LED Edison',
    wire: 'Poly Cab (1 Mtr Wire)',
    beamAngle: '10°, 20°, 30°, 40°, 45°, 60°, 90°',
    protection: 'IP68 Submersible',
    image: '/assets/products/al012-surface-pool-light.jpg',
    gallery: [
      '/assets/products/al012-surface-pool-light.jpg',
      '/assets/products/al00-surface-pool-light-profile.jpg',
      '/assets/products/al00-surface-pool-light-rear.jpg'
    ]
  },
  {
    code: 'AL013',
    name: 'Surface Model Swimming Pool Light AL013',
    wattage: '9 Watt / 27 Watt',
    wattageOptions: ['9 Watt', '27 Watt'],
    diameter: '5"',
    thickness: '1"',
    bodyMaterial: 'SS 304 / SS 306 / Aluminium',
    lens: 'PC Glass',
    ledChip: 'Power LED Edison',
    wire: 'Poly Cab (1 Mtr Wire)',
    beamAngle: '10°, 20°, 30°, 40°, 45°, 60°, 90°',
    protection: 'IP68 Submersible',
    image: '/assets/products/al013-surface-pool-light.jpg',
    gallery: [
      '/assets/products/al013-surface-pool-light.jpg',
      '/assets/products/al00-surface-pool-light-profile.jpg',
      '/assets/products/al00-surface-pool-light-rear.jpg'
    ]
  },
  {
    code: 'AL014',
    name: 'Surface Model Swimming Pool Light AL014',
    wattage: '12 Watt / 36 Watt',
    wattageOptions: ['12 Watt', '36 Watt'],
    diameter: '5"',
    thickness: '1"',
    bodyMaterial: 'SS 304 / SS 306 / Aluminium',
    lens: 'PC Glass',
    ledChip: 'Power LED Edison',
    wire: 'Poly Cab (1 Mtr Wire)',
    beamAngle: '10°, 20°, 30°, 40°, 45°, 60°, 90°',
    protection: 'IP68 Submersible',
    image: '/assets/products/al014-surface-pool-light.jpg',
    gallery: [
      '/assets/products/al014-surface-pool-light.jpg',
      '/assets/products/al00-surface-pool-light-profile.jpg',
      '/assets/products/al00-surface-pool-light-rear.jpg'
    ]
  },
  {
    code: 'AL015',
    name: 'Surface Model Swimming Pool Light AL015',
    wattage: '18 Watt',
    wattageOptions: ['18 Watt'],
    diameter: '6"',
    thickness: '1"',
    bodyMaterial: 'SS 304 / SS 306 / Aluminium',
    lens: 'PC Glass',
    ledChip: 'Power LED Edison',
    wire: 'Poly Cab (1 Mtr Wire)',
    beamAngle: '10°, 20°, 30°, 40°, 45°, 60°, 90°',
    protection: 'IP68 Submersible',
    image: '/assets/products/al015-surface-pool-light.jpg',
    gallery: [
      '/assets/products/al015-surface-pool-light.jpg',
      '/assets/products/al00-surface-pool-light-profile.jpg',
      '/assets/products/al00-surface-pool-light-rear.jpg'
    ]
  }
];

export function getSurfacePoolModel(code: string): SurfacePoolModel {
  const normalized = code.trim().toUpperCase();
  const found = SURFACE_POOL_MODELS.find(m => m.code.toUpperCase() === normalized);
  return found || SURFACE_POOL_MODELS[3]; // Default to AL03
}
