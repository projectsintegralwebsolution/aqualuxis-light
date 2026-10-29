/**
 * AQUALUXIS LIGHT — Verified Video Portfolio Data
 * Grounded in official product & project demonstrations from:
 * https://www.youtube.com/@humafountainsandpools5545
 * 
 * To add or replace videos:
 * Add the 11-character YouTube video ID and provide title, category, and description.
 */

export interface PortfolioVideo {
  id: string;
  title: string;
  category: 'Swimming Pool Lighting' | 'Fountain Lighting' | 'Water Curtains & Cascades' | 'Garden & Landscape Lighting' | 'Product Demonstrations';
  description: string;
  duration: string;
  views?: string;
  timeAgo?: string;
  featured?: boolean;
}

export const VIDEO_CATEGORIES = [
  'All Videos',
  'Swimming Pool Lighting',
  'Fountain Lighting',
  'Water Curtains & Cascades',
  'Garden & Landscape Lighting',
  'Product Demonstrations',
] as const;

export type VideoCategory = typeof VIDEO_CATEGORIES[number];

export const PORTFOLIO_VIDEOS: PortfolioVideo[] = [
  {
    id: 'QjMXQ2AFLpE',
    title: 'Precision 316L Stainless Steel Spot Fountain Luminaire',
    category: 'Fountain Lighting',
    description: 'Submersible high-intensity directional LED spotlight with optical tempered glass lens for architectural fountains, geysers, and water plumes.',
    duration: '0:47',
    views: '42 views',
    timeAgo: '1 year ago',
    featured: true,
  },
  {
    id: 'QBk8roFdA6s',
    title: 'Ultra-Slim ABS Underwater Swimming Pool Luminaire',
    category: 'Swimming Pool Lighting',
    description: 'High-efficiency submersible ABS LED pool light engineered for luxury residential swimming pools and resort installations.',
    duration: '0:29',
    views: '24 views',
    timeAgo: '1 year ago',
  },
  {
    id: 'nzQstfq6KQc',
    title: 'Marine-Grade 316 Stainless Steel Pool Luminaire',
    category: 'Swimming Pool Lighting',
    description: 'Solid 316L stainless-steel surface-mounted underwater LED fixture delivering brilliant white and cyan aquatic illumination.',
    duration: '0:29',
    views: '54 views',
    timeAgo: '1 year ago',
  },
  {
    id: 'DUeJ0k35wS4',
    title: 'Concealed Flush-Mount Submersible Pool Fixture',
    category: 'Swimming Pool Lighting',
    description: 'Architectural flush-mounted niche LED luminaire providing seamless, glare-free perimeter pool illumination beneath the waterline.',
    duration: '0:31',
    views: '48 views',
    timeAgo: '1 year ago',
  },
  {
    id: 'FPQXKMl5WVo',
    title: 'Center-Hole Donut Fountain Ring Luminaire System',
    category: 'Fountain Lighting',
    description: 'Multi-nozzle center-hole ring fountain luminaire creating concentric illuminated water jets with synchronous color transitions.',
    duration: '1:01',
    views: '89 views',
    timeAgo: '1 year ago',
  },
  {
    id: 'NvF3WaqLFHU',
    title: 'Precision Sheer Descent Water Blade & Cascade',
    category: 'Water Curtains & Cascades',
    description: 'Continuous crystalline laminar sheet water descent paired with integrated LED grazing illumination for pools and water walls.',
    duration: '0:10',
    views: '60 views',
    timeAgo: '11 months ago',
  },
  {
    id: 'kSbIL8gDeHE',
    title: 'Sculptural Stainless Steel Cobra Waterfall Feature',
    category: 'Water Curtains & Cascades',
    description: 'Hydrotherapy curved cobra waterfall nozzle with integrated submersible lighting reflection over swimming pool water.',
    duration: '0:33',
    views: '56 views',
    timeAgo: '1 year ago',
  },
  {
    id: '_3b1tmnmnJA',
    title: 'Architectural Fountain Water Spillway & Weir Blade',
    category: 'Water Curtains & Cascades',
    description: 'Precision stainless steel weir blade water spillway with underwater accent lighting for terrace water features.',
    duration: '0:46',
    views: '41 views',
    timeAgo: '1 year ago',
  },
  {
    id: '0-BnNq7ATIM',
    title: 'Finger Jet Precision Multi-Nozzle Fountain Spray',
    category: 'Fountain Lighting',
    description: 'Arching laminar water jets illuminated with submersible LED spotlights for civic plazas, malls, and hotel water bodies.',
    duration: '0:10',
    views: '79 views',
    timeAgo: '11 months ago',
  },
  {
    id: '-ZytYvIov30',
    title: 'Revolving Dynamic Dancing Fountain Nozzle System',
    category: 'Fountain Lighting',
    description: 'Rotating spiral water pattern illuminated with multi-color submersible LED lighting for choreographic fountain shows.',
    duration: '0:31',
    views: '45 views',
    timeAgo: '1 year ago',
  },
  {
    id: 'zsSi7LZzmus',
    title: 'Crystalline Mushroom Umbrella Fountain Display',
    category: 'Fountain Lighting',
    description: 'Smooth transparent water bell film illuminated from underneath by submerged LED luminaires in shallow water basins.',
    duration: '0:22',
    views: '42 views',
    timeAgo: '1 year ago',
  },
  {
    id: '0QZgnooAcmc',
    title: 'Diamond Cluster Precision Architectural Nozzle',
    category: 'Fountain Lighting',
    description: 'Geyser-style crystalline water plume with high-thrust vertical throw illuminated with submersible lights.',
    duration: '0:18',
    views: '59 views',
    timeAgo: '2 years ago',
  },
  {
    id: 'wJs4nBzrZOM',
    title: 'Outdoor Architectural Garden Bollard Luminaire',
    category: 'Garden & Landscape Lighting',
    description: 'Weatherproof IP65 outdoor bollard light testing and photometric throw demonstration for pedestrian pathways and decks.',
    duration: '0:44',
    views: '39 views',
    timeAgo: '2 years ago',
  },
  {
    id: 'tjPUP2BaQSE',
    title: 'Commercial Garden Bollard Optical Testing',
    category: 'Garden & Landscape Lighting',
    description: 'Precision testing of 360-degree diffused landscape illumination and corrosion-resistant marine finishes.',
    duration: '1:54',
    views: '17 views',
    timeAgo: '2 years ago',
  },
  {
    id: '_xBayvTTFKU',
    title: 'Pedestrian Pathway Bollard Light Photometrics',
    category: 'Garden & Landscape Lighting',
    description: 'Architectural pathway lighting evaluation demonstrating low-glare cutoff optics and durable aluminum alloy housing.',
    duration: '1:17',
    views: '13 views',
    timeAgo: '2 years ago',
  },
  {
    id: 'bQ2m8mo7YN0',
    title: 'Precision Machined Stainless Steel Fountain Nozzles',
    category: 'Product Demonstrations',
    description: 'CNC machined 304/316 marine-grade fountain nozzles engineered for crisp water trajectories, adjustable angles, and longevity.',
    duration: '0:55',
    views: '92 views',
    timeAgo: '1 year ago',
  },
  {
    id: 'WeQPIRh32Qo',
    title: 'Civic Plaza Musical Fountain Illumination Show',
    category: 'Fountain Lighting',
    description: 'Dynamic dancing fountain synchronized to DMX512 controls with RGB submersible LED lights illuminating central geysers.',
    duration: '1:44',
    views: '24 views',
    timeAgo: '2 years ago',
  },
  {
    id: 'gyOD8x19NfQ',
    title: 'Multi-Tiered Resort Plaza Fountain Display',
    category: 'Fountain Lighting',
    description: 'Tiered water jets illuminated with warm-white and electric-cyan LED luminaires in an upscale commercial hospitality setting.',
    duration: '1:21',
    views: '12 views',
    timeAgo: '2 years ago',
  },
  {
    id: 'i8Rdmv8QXe0',
    title: 'Rotational 360 Swivel Nozzle Demonstration',
    category: 'Fountain Lighting',
    description: 'High-speed rotating water nozzle creating an intricate aquatic vortex with perimeter LED spotlighting.',
    duration: '1:04',
    views: '27 views',
    timeAgo: '2 years ago',
  },
  {
    id: 'J5U0GO5UJOo',
    title: 'High-Torque Stainless Steel Revolving Nozzle',
    category: 'Fountain Lighting',
    description: 'Submersible water-driven rotating nozzle producing dynamic spiral jets illuminated by underwater pool lights.',
    duration: '0:10',
    views: '38 views',
    timeAgo: '2 years ago',
  },
  {
    id: '5qfg8mh4KXM',
    title: 'High-Power LED Underwater Commercial Showcase',
    category: 'Fountain Lighting',
    description: 'Underwater LED luminaires operating at full output, demonstrating lumen maintenance and thermal dissipation.',
    duration: '0:22',
    views: '30 views',
    timeAgo: '1 year ago',
  },
  {
    id: 'ULZrbaprtbI',
    title: 'Commercial Water Feature Engineering & Flow Testing',
    category: 'Fountain Lighting',
    description: 'Full-scale hydraulic and electrical testing of submersible aquatic lights, high-flow pumps, and manifold assemblies.',
    duration: '1:01',
    views: '119 views',
    timeAgo: '1 year ago',
  },
  {
    id: '6ivrGVbkU4Y',
    title: 'Synchronized Aquatic Lighting & Jet Assembly',
    category: 'Fountain Lighting',
    description: 'Factory integration and live testing of stainless steel submersible luminaires with precision fountain nozzles.',
    duration: '0:50',
    views: '25 views',
    timeAgo: '1 year ago',
  },
  {
    id: 'O5T-sdJIsaA',
    title: 'Architectural Aquatic Water Feature System',
    category: 'Fountain Lighting',
    description: 'Complete water feature lighting and hydraulics commissioned for luxury architectural properties.',
    duration: '0:50',
    views: '44 views',
    timeAgo: '1 year ago',
  },
];

export function getFeaturedVideo(): PortfolioVideo {
  return PORTFOLIO_VIDEOS.find(v => v.featured) || PORTFOLIO_VIDEOS[0];
}
