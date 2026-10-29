'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  ChevronDown, 
  ChevronRight,
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Download, 
  Globe, 
  Search, 
  ArrowRight,
  Waves, 
  Droplet, 
  Sparkles, 
  CircleDot, 
  Trees, 
  SunMedium, 
  Layers, 
  Sliders, 
  ShieldCheck, 
  Compass, 
  FileText, 
  Building2, 
  Wrench,
  CheckCircle,
  Play,
  LayoutGrid,
  Image as ImageIcon,
  MessageSquareQuote,
  Zap,
  Settings
} from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '@/data/products';
import QuoteModal from './QuoteModal';

interface CategoryFeature {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
}

interface BannerCardData {
  image: string;
  eyebrow: string;
  title: string;
  description: string;
  features: CategoryFeature[];
}

interface MegaProductItem {
  title: string;
  code: string;
  description: string;
  image: string;
  href: string;
}

interface SolutionItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  href: string;
  isQuoteModal?: boolean;
}

interface MegaCategory {
  id: string;
  tabLabel: string;
  tabLabelLines: [string, string];
  icon: React.ComponentType<{ className?: string }>;
  categoryLink: string;
  bannerCard: BannerCardData;
  categoryDetails: {
    eyebrow: string;
    heading: string;
    description: string;
    categoryLink: string;
    products: MegaProductItem[];
  };
  exploreButtonText: string;
  solutions: SolutionItem[];
}

const MEGA_CATEGORIES: MegaCategory[] = [
  {
    id: 'underwater-pool-lights',
    tabLabel: 'Underwater Pool Lights',
    tabLabelLines: ['Underwater', 'Pool Lights'],
    icon: Droplet,
    categoryLink: '/products?category=underwater-lights',
    bannerCard: {
      image: '/assets/categories/underwater-lights-new.jpg',
      eyebrow: 'UNDERWATER POOL LIGHTS',
      title: 'Marine-Grade Submersible Fixtures',
      description: 'Heavy-duty 316L stainless steel submersible lights engineered for deep water immersion and saline environments.',
      features: [
        { icon: Droplet, text: 'IP68 Deep Submersion 50m' },
        { icon: ShieldCheck, text: '316L Marine Stainless Steel' },
        { icon: Zap, text: 'Low-Voltage SELV Safety' },
      ],
    },
    categoryDetails: {
      eyebrow: 'EXPLORE OUR RANGE',
      heading: 'Underwater Pool Lights',
      description: 'Submersible luminaires for swimming pools, ponds, water features, and deep architectural tanks.',
      categoryLink: '/products?category=underwater-lights',
      products: [
        {
          title: 'Full SS Body Swimming Pool Light',
          code: '(HF-020 / HF-021)',
          description: 'Solid cast 316L stainless steel luminaire with optical tempered glass for deep water immersion and saline pool environments.',
          image: '/assets/products/hf020-ss-pool-light.webp',
          href: '/products/full-ss-body-swimming-pool-light-hf020-hf021',
        },
        {
          title: 'SS Blue / White Rim Pool Light',
          code: '(HF-022 Series)',
          description: 'Marine-grade stainless steel fixture with distinctive blue or cool white accent rim styling for luxury pools.',
          image: '/assets/products/hf022-ss-blue-rim-pool-light.webp',
          href: '/products/ss-blue-white-rim-swimming-pool-light-hf022',
        },
        {
          title: 'Concealed / In-Ground Pool Light',
          code: '(HF-023 - HF-027)',
          description: 'Flush recessed submersible luminaires for pool steps, shallow ledges, coping edges, and submerged wall niches.',
          image: '/assets/products/hf025-concealed-pool-light.webp',
          href: '/products/concealed-in-ground-swimming-pool-light-hf023-hf027',
        },
        {
          title: 'SS Spot Fountain / Basin Light',
          code: '(HF-039 - HF-042)',
          description: 'Heavy-duty stainless steel submersible spot fixture with adjustable directional angle bracket for aquatic features.',
          image: '/assets/products/hf042-ss-spot-fountain-light.webp',
          href: '/products/ss-spot-fountain-light-hf039-hf042',
        },
      ],
    },
    exploreButtonText: 'Explore All Underwater Pool Lights',
    solutions: [
      { icon: LayoutGrid, title: 'Applications', description: 'Deep Submersion, Ponds & Fountains', href: '/applications#submersible' },
      { icon: FileText, title: 'Technical Resources', description: 'Brochures, Installation Guides', href: '/catalogue' },
      { icon: ImageIcon, title: 'Our Work', description: 'See Lighting in Action', href: '/gallery' },
      { icon: MessageSquareQuote, title: 'Get a Quote', description: 'Discuss Your Project', href: '/contact-us', isQuoteModal: true },
    ],
  },
  {
    id: 'led-pool-lights',
    tabLabel: 'LED Pool Lights',
    tabLabelLines: ['LED Pool', 'Lights'],
    icon: Sparkles,
    categoryLink: '/pool-lighting',
    bannerCard: {
      image: '/assets/products/underwater-pool-luminaire-installed.jpg',
      eyebrow: 'LED POOL LIGHTS',
      title: 'High-Efficiency LED Pool Illumination',
      description: 'Advanced high-lumen SMD LEDs delivering brilliant, uniform illumination and vivid RGB color transitions with minimal power draw.',
      features: [
        { icon: Zap, text: 'Ultra-Low Energy Consumption' },
        { icon: Sparkles, text: 'Vibrant RGB & Warm White' },
        { icon: Droplet, text: 'IP68 Sealed Protection' },
      ],
    },
    categoryDetails: {
      eyebrow: 'EXPLORE OUR RANGE',
      heading: 'LED Pool Lights',
      description: 'High-performance LED pool luminaires engineered for luminous efficiency, safety, and modern ambience.',
      categoryLink: '/pool-lighting',
      products: [
        {
          title: 'Surface Model Swimming Pool Light',
          code: '(HF-00 - HF-05)',
          description: 'Full stainless steel surface-mount LED pool light delivering high photometric efficiency and IP68 water protection.',
          image: '/assets/products/hf00-surface-pool-light.jpg',
          href: '/products/surface-model-swimming-pool-light-hf00-hf05',
        },
        {
          title: 'Ultra-Slim 15mm ABS Pool Light',
          code: '(HF-012 Series)',
          description: 'Ultra-compact 15mm slim profile fitting with high-density SMD LEDs for wide beam underwater dispersion.',
          image: '/assets/products/hf012-slim-abs-pool-light.webp',
          href: '/products/ultra-slim-15mm-abs-swimming-pool-light-hf012',
        },
        {
          title: 'Custom Color Rim ABS Pool Light',
          code: '(HF-018 Series)',
          description: 'Vibrant interchangeable color rings with synchronized RGB LED color-changing programs for architectural pools.',
          image: '/assets/products/hf018-abs-color-rim-pool-light.webp',
          href: '/products/custom-color-rim-abs-swimming-pool-light-hf018',
        },
        {
          title: 'Heavy-Duty 11" ABS Pool Light',
          code: '(HF-011 / HF-013)',
          description: 'Expansive 11-inch diameter fixture with high-lumen Cree LEDs for large residential and commercial pools.',
          image: '/assets/products/hf011-abs-pool-light.webp',
          href: '/products/heavy-duty-11-inch-abs-swimming-pool-light-hf011-hf013',
        },
      ],
    },
    exploreButtonText: 'Explore All LED Pool Lights',
    solutions: [
      { icon: LayoutGrid, title: 'Applications', description: 'Pools, Fountains, Landscapes & More', href: '/applications' },
      { icon: FileText, title: 'Technical Resources', description: 'Brochures, Installation Guides', href: '/catalogue' },
      { icon: ImageIcon, title: 'Our Work', description: 'See Lighting in Action', href: '/gallery' },
      { icon: MessageSquareQuote, title: 'Get a Quote', description: 'Discuss Your Project', href: '/contact-us', isQuoteModal: true },
    ],
  },
  {
    id: 'swimming-pool-lights',
    tabLabel: 'Swimming Pool Lights',
    tabLabelLines: ['Swimming', 'Pool Lights'],
    icon: Waves,
    categoryLink: '/pool-lighting',
    bannerCard: {
      image: '/assets/products/underwater-pool-luminaire-installed.jpg',
      eyebrow: 'SWIMMING POOL LIGHTS',
      title: 'Premium Pool Lighting Solutions',
      description: 'Energy-efficient, durable and high-performance LED lights designed for residential, commercial and luxury swimming pools.',
      features: [
        { icon: Droplet, text: 'IP68 Waterproof Protection' },
        { icon: Settings, text: 'High-Quality Materials' },
        { icon: Zap, text: 'Energy Efficient LEDs' },
      ],
    },
    categoryDetails: {
      eyebrow: 'EXPLORE OUR RANGE',
      heading: 'Swimming Pool Lights',
      description: 'Wide range of LED pool lights designed for safety, ambience and long-lasting performance.',
      categoryLink: '/pool-lighting',
      products: [
        {
          title: 'ABS Body Swimming Pool Light',
          code: '(HF-06 - HF-010)',
          description: 'Durable ABS and polycarbonate pool lights with superior chemical resistance and uniform light distribution.',
          image: '/assets/products/hf06-abs-pool-light.jpg',
          href: '/products/abs-body-swimming-pool-light-hf06-hf010',
        },
        {
          title: 'Surface Model Pool Light (SS 304/316)',
          code: '(HF-00 - HF-05)',
          description: 'High-grade marine stainless steel surface luminaire with impact-resistant optical lens and sealed driver.',
          image: '/assets/products/hf00-surface-pool-light.jpg',
          href: '/products/surface-model-swimming-pool-light-hf00-hf05',
        },
        {
          title: 'Ultra-Slim 15mm ABS Pool Light',
          code: '(HF-012 Series)',
          description: 'Nicheless 15mm surface mount design eliminating deep wall penetrations in concrete, liner and tile pools.',
          image: '/assets/products/hf012-slim-abs-pool-light.webp',
          href: '/products/ultra-slim-15mm-abs-swimming-pool-light-hf012',
        },
        {
          title: 'Full SS Body Swimming Pool Light',
          code: '(HF-020 / HF-021)',
          description: 'Seamless stainless steel faceplate luminaire providing high output and corrosion resistance.',
          image: '/assets/products/hf020-ss-pool-light.webp',
          href: '/products/full-ss-body-swimming-pool-light-hf020-hf021',
        },
      ],
    },
    exploreButtonText: 'Explore All Swimming Pool Lights',
    solutions: [
      { icon: LayoutGrid, title: 'Applications', description: 'Pools, Fountains, Landscapes & More', href: '/applications' },
      { icon: FileText, title: 'Technical Resources', description: 'Brochures, Installation Guides', href: '/catalogue' },
      { icon: ImageIcon, title: 'Our Work', description: 'See Lighting in Action', href: '/gallery' },
      { icon: MessageSquareQuote, title: 'Get a Quote', description: 'Discuss Your Project', href: '/contact-us', isQuoteModal: true },
    ],
  },
  {
    id: 'pool-light-fittings',
    tabLabel: 'Pool Light Fittings',
    tabLabelLines: ['Pool Light', 'Fittings'],
    icon: Wrench,
    categoryLink: '/products?category=swimming-pool-lights',
    bannerCard: {
      image: '/assets/categories/underwater-lights-new.jpg',
      eyebrow: 'POOL LIGHT FITTINGS',
      title: 'Niche & Surface Mounting Systems',
      description: 'Precision engineered wall niches, trim rings, threaded adapters, and waterproof mounting brackets for concrete, liner, and fiberglass pools.',
      features: [
        { icon: Settings, text: 'Corrosion-Proof Materials' },
        { icon: ShieldCheck, text: 'Universal Retrofit Compatibility' },
        { icon: Droplet, text: '100% Watertight Cable Seals' },
      ],
    },
    categoryDetails: {
      eyebrow: 'EXPLORE OUR RANGE',
      heading: 'Pool Light Fittings',
      description: 'Mounting brackets, niche adaptors, trim rings, and cable conduit glands for seamless pool light installations.',
      categoryLink: '/products?category=swimming-pool-lights',
      products: [
        {
          title: 'Ultra-Slim 15mm ABS Fitting',
          code: '(HF-012 Series)',
          description: 'Ultra-compact 15mm profile fitting mounting flush to any pool wall with no recess cavity required.',
          image: '/assets/products/hf012-slim-abs-pool-light.webp',
          href: '/products/ultra-slim-15mm-abs-swimming-pool-light-hf012',
        },
        {
          title: 'ABS Interchangeable Color Rims',
          code: '(HF-018 Series)',
          description: 'Modular architectural rim covers in grey, blue, black, and white to complement pool tile finishes.',
          image: '/assets/products/hf018-abs-color-rim-pool-light.webp',
          href: '/products/custom-color-rim-abs-swimming-pool-light-hf018',
        },
        {
          title: 'Concealed Mounting Niches',
          code: '(HF-023 - HF-027)',
          description: 'Precision pre-cast niches and mounting sleeves for poured concrete, tiled, and gunite pools.',
          image: '/assets/products/hf025-concealed-pool-light.webp',
          href: '/products/concealed-in-ground-swimming-pool-light-hf023-hf027',
        },
        {
          title: 'Heavy-Duty 11" Bracket Assembly',
          code: '(HF-011 / HF-013)',
          description: 'Universal stainless steel backplate and corrosion-proof mounting bracket kit for retrofit upgrades.',
          image: '/assets/products/hf011-abs-pool-light.webp',
          href: '/products/heavy-duty-11-inch-abs-swimming-pool-light-hf011-hf013',
        },
      ],
    },
    exploreButtonText: 'Explore All Pool Light Fittings',
    solutions: [
      { icon: LayoutGrid, title: 'Applications', description: 'Concrete, Liner & Fiberglass Pools', href: '/applications' },
      { icon: FileText, title: 'Technical Resources', description: 'Installation & Retrofit Manuals', href: '/catalogue' },
      { icon: ImageIcon, title: 'Our Work', description: 'See Lighting in Action', href: '/gallery' },
      { icon: MessageSquareQuote, title: 'Get a Quote', description: 'Discuss Your Project', href: '/contact-us', isQuoteModal: true },
    ],
  },
  {
    id: 'underwater-fountain-lights',
    tabLabel: 'Underwater Fountain Lights',
    tabLabelLines: ['Underwater', 'Fountain Lights'],
    icon: Droplet,
    categoryLink: '/fountain-lighting',
    bannerCard: {
      image: '/assets/categories/led-fountain-lights-new.jpg',
      eyebrow: 'UNDERWATER FOUNTAIN LIGHTS',
      title: 'High-Output Submersible Fountain Fixtures',
      description: 'Precision 304 & 316 stainless steel underwater spotlights built to withstand continuous water movement and high-pressure fountain spray.',
      features: [
        { icon: Droplet, text: 'IP68 Immersion Rated' },
        { icon: ShieldCheck, text: 'Stainless Steel 304/316' },
        { icon: Zap, text: 'High-Power CREE/Epistar LEDs' },
      ],
    },
    categoryDetails: {
      eyebrow: 'EXPLORE OUR RANGE',
      heading: 'Underwater Fountain Lights',
      description: 'Heavy-duty stainless steel spotlights and stand-mounted projectors designed for water basins and pond features.',
      categoryLink: '/fountain-lighting',
      products: [
        {
          title: 'SS Submersible Spotlights',
          code: '(HF-039 Series)',
          description: 'Marine stainless steel spotlight with adjustable tilt bracket for precision illumination of architectural fountain jets.',
          image: '/assets/products/hf039-ss-spot-fountain-light.webp',
          href: '/products/ss-spot-fountain-light-hf039-hf042',
        },
        {
          title: 'Pedestal Swivel Projectors',
          code: '(HF-043 Series)',
          description: 'Heavy-duty pedestal base submersible fixture for basin floors, rockeries, and multi-tiered fountains.',
          image: '/assets/products/hf043-spot-fountain-stand-light.webp',
          href: '/products/spot-fountain-stand-light-hf043-hf047',
        },
        {
          title: 'High-Lumen Basin Uplights',
          code: '(HF-041 Series)',
          description: 'High-intensity underwater beam fixture designed for deep basins and soaring vertical water columns.',
          image: '/assets/products/hf041-ss-spot-fountain-light.webp',
          href: '/products/ss-spot-fountain-light-hf039-hf042',
        },
        {
          title: 'Water-Cooled Submersible Fixtures',
          code: '(HF-045 Series)',
          description: 'Robust thermal design with hydrodynamic water jacket cooling for continuous 24/7 commercial operation.',
          image: '/assets/products/hf045-spot-fountain-stand-light.webp',
          href: '/products/spot-fountain-stand-light-hf043-hf047',
        },
      ],
    },
    exploreButtonText: 'Explore All Underwater Fountain Lights',
    solutions: [
      { icon: LayoutGrid, title: 'Applications', description: 'Plaza & Decorative Water Basins', href: '/applications#fountains' },
      { icon: FileText, title: 'Technical Resources', description: 'Beam Angle & Wattage Specs', href: '/catalogue' },
      { icon: ImageIcon, title: 'Our Work', description: 'See Lighting in Action', href: '/gallery' },
      { icon: MessageSquareQuote, title: 'Get a Quote', description: 'Discuss Your Project', href: '/contact-us', isQuoteModal: true },
    ],
  },
  {
    id: 'fountain-lights',
    tabLabel: 'Fountain Lights',
    tabLabelLines: ['Fountain', 'Lights'],
    icon: Sparkles,
    categoryLink: '/fountain-lighting',
    bannerCard: {
      image: '/assets/categories/led-fountain-lights-new.jpg',
      eyebrow: 'FOUNTAIN LIGHTING',
      title: 'Commercial Fountain Illumination',
      description: 'Dynamic underwater lighting engineered for plaza fountains, commercial water features, and choreography displays.',
      features: [
        { icon: Droplet, text: 'Watertight Submersible IP68' },
        { icon: Sparkles, text: 'RGBW Dynamic Color Shows' },
        { icon: ShieldCheck, text: 'Long Service Life & DMX512' },
      ],
    },
    categoryDetails: {
      eyebrow: 'EXPLORE OUR RANGE',
      heading: 'Fountain Lights',
      description: 'Dynamic center-hole donut lights and high-intensity swivel spotlights for illuminated water columns.',
      categoryLink: '/fountain-lighting',
      products: [
        {
          title: 'Center-Hole Fountain Light',
          code: '(HF-052 - HF-057)',
          description: 'Center-hole water flow luminaire with DMX512 color syncing, designed for high-rise fountain nozzles.',
          image: '/assets/products/hf052-nozzle-fountain-light.webp',
          href: '/products/nozzle-fountain-light-center-hole-hf052-hf057',
        },
        {
          title: 'Adjustable Nozzle Fountain Light',
          code: '(HF-058 - HF-061)',
          description: 'Integrated center nozzle hole with angular tilt adjustment for customized water plume and spray illumination.',
          image: '/assets/products/hf058-adjustable-nozzle-fountain-light.webp',
          href: '/products/adjustable-center-hole-nozzle-fountain-light-hf058-hf061',
        },
        {
          title: 'SS Spot Fountain Light (Heavy Duty)',
          code: '(HF-039 - HF-042)',
          description: 'Precision marine stainless steel spotlights engineered for demanding outdoor architectural fountain basins.',
          image: '/assets/products/hf042-ss-spot-fountain-light.webp',
          href: '/products/ss-spot-fountain-light-hf039-hf042',
        },
        {
          title: 'Spot Fountain Stand Light',
          code: '(HF-043 - HF-047)',
          description: 'Stable weighted tripod and pedestal mount fixtures for pond features, cascades, and water gardens.',
          image: '/assets/products/hf046-spot-fountain-stand-light.webp',
          href: '/products/spot-fountain-stand-light-hf043-hf047',
        },
      ],
    },
    exploreButtonText: 'Explore All Fountain Lights',
    solutions: [
      { icon: LayoutGrid, title: 'Applications', description: 'Musical & Plaza Fountains', href: '/applications#fountains' },
      { icon: FileText, title: 'Technical Resources', description: 'Brochures, Installation Guides', href: '/catalogue' },
      { icon: ImageIcon, title: 'Our Work', description: 'See Lighting in Action', href: '/gallery' },
      { icon: MessageSquareQuote, title: 'Get a Quote', description: 'Discuss Your Project', href: '/contact-us', isQuoteModal: true },
    ],
  },
  {
    id: 'fountain-light-fittings',
    tabLabel: 'Fountain Light Fittings',
    tabLabelLines: ['Fountain Light', 'Fittings'],
    icon: CircleDot,
    categoryLink: '/products?category=fountain-nozzles',
    bannerCard: {
      image: '/assets/categories/fountain-nozzles-new.jpg',
      eyebrow: 'FOUNTAIN LIGHT FITTINGS',
      title: 'Precision Fountain Nozzle Systems',
      description: 'Machined solid brass and 316 stainless steel nozzles sculpting crystal water curtains, aerated jets, and geysers.',
      features: [
        { icon: Droplet, text: 'Precision Water Spray Patterns' },
        { icon: Settings, text: 'Solid Brass & SS 304/316' },
        { icon: Zap, text: 'Wind-Stable Hydrodynamics' },
      ],
    },
    categoryDetails: {
      eyebrow: 'EXPLORE OUR RANGE',
      heading: 'Fountain Light Fittings',
      description: 'Engineered hydrodynamics for architectural cascades, laminar bell sheets, and dramatic foam geysers.',
      categoryLink: '/products?category=fountain-nozzles',
      products: [
        {
          title: 'Umbrella / Bell Fountain Nozzle',
          code: '(HF-063 Series)',
          description: 'Produces a uniform transparent laminar water sheet resembling a graceful umbrella or mushroom canopy.',
          image: '/assets/products/hf063-umbrella-nozzle.webp',
          href: '/products/umbrella-bell-nozzle-hf063',
        },
        {
          title: 'Foam Jet Fountain Nozzle',
          code: '(HF-064 Series)',
          description: 'Aerated bubbling foam nozzle that creates a thick, frothy, high-visibility white water column.',
          image: '/assets/products/hf064-foam-nozzle.webp',
          href: '/products/foam-jet-fountain-nozzle-hf064',
        },
        {
          title: 'Finger Jet / Multi-Jet Nozzle',
          code: '(HF-065 Series)',
          description: 'Precision multi-hole brass nozzle shooting delicate crystal water arches and intersecting finger sprays.',
          image: '/assets/products/hf065-finger-jet-nozzle.webp',
          href: '/products/finger-jet-multi-jet-fountain-nozzle-hf065',
        },
        {
          title: 'Revolving Rotational Nozzle',
          code: '(HF-072 Series)',
          description: 'Hydraulic self-rotating multi-arm brass nozzle generating mesmerizing spiraling water choreography.',
          image: '/assets/products/hf072-revolving-nozzle.webp',
          href: '/products/revolving-rotational-fountain-nozzle-hf072',
        },
      ],
    },
    exploreButtonText: 'Explore All Fountain Light Fittings',
    solutions: [
      { icon: LayoutGrid, title: 'Applications', description: 'Plaza & Decorative Water Features', href: '/applications#water-features' },
      { icon: FileText, title: 'Technical Resources', description: 'Flow Rate & Pressure Specs', href: '/catalogue' },
      { icon: ImageIcon, title: 'Our Work', description: 'See Lighting in Action', href: '/gallery' },
      { icon: MessageSquareQuote, title: 'Get a Quote', description: 'Discuss Your Project', href: '/contact-us', isQuoteModal: true },
    ],
  },
  {
    id: 'led-fountain-lights',
    tabLabel: 'LED Fountain Lights',
    tabLabelLines: ['LED Fountain', 'Lights'],
    icon: Waves,
    categoryLink: '/fountain-lighting',
    bannerCard: {
      image: '/assets/categories/led-fountain-lights-new.jpg',
      eyebrow: 'LED FOUNTAIN LIGHTS',
      title: 'High-Lumen LED Fountain Illuminators',
      description: 'State-of-the-art DMX-controlled LED fountain fixtures delivering high intensity, saturated color mixing and fast response times.',
      features: [
        { icon: Sparkles, text: 'High-Brightness RGBW LEDs' },
        { icon: Zap, text: 'DMX512 Protocol Control' },
        { icon: Droplet, text: 'IP68 Sealed Silicone Gaskets' },
      ],
    },
    categoryDetails: {
      eyebrow: 'EXPLORE OUR RANGE',
      heading: 'LED Fountain Lights',
      description: 'Multi-wattage LED fixtures with integrated thermal management for brilliant vertical illumination of water features.',
      categoryLink: '/fountain-lighting',
      products: [
        {
          title: 'Center-Hole Donut LED Light',
          code: '(HF-052 - HF-057)',
          description: 'Donut ring LED fixture allowing the fountain nozzle to fire directly through the center for uniform light.',
          image: '/assets/products/hf052-nozzle-fountain-light.webp',
          href: '/products/nozzle-fountain-light-center-hole-hf052-hf057',
        },
        {
          title: 'Adjustable Beam LED Fixture',
          code: '(HF-058 - HF-061)',
          description: 'Articulating center-hole fixture with precision optics for steep angle or angled fountain jet alignment.',
          image: '/assets/products/hf058-adjustable-nozzle-fountain-light.webp',
          href: '/products/adjustable-center-hole-nozzle-fountain-light-hf058-hf061',
        },
        {
          title: 'High-Power RGBW LED Projector',
          code: '(HF-039 - HF-042)',
          description: 'High-lumen underwater spotlight with DMX controller compatibility for musical fountain shows.',
          image: '/assets/products/hf042-ss-spot-fountain-light.webp',
          href: '/products/ss-spot-fountain-light-hf039-hf042',
        },
        {
          title: 'Musical Fountain Sync LED',
          code: '(HF-053 Series)',
          description: 'Fast-response RGBW LED luminaire designed for high-frequency synchronization with music and water valves.',
          image: '/assets/products/hf053-nozzle-fountain-light.webp',
          href: '/products/nozzle-fountain-light-center-hole-hf052-hf057',
        },
      ],
    },
    exploreButtonText: 'Explore All LED Fountain Lights',
    solutions: [
      { icon: LayoutGrid, title: 'Applications', description: 'Musical & Interactive Fountains', href: '/applications#fountains' },
      { icon: FileText, title: 'Technical Resources', description: 'DMX Addressing & Wiring Schemes', href: '/catalogue' },
      { icon: ImageIcon, title: 'Our Work', description: 'See Lighting in Action', href: '/gallery' },
      { icon: MessageSquareQuote, title: 'Get a Quote', description: 'Discuss Your Project', href: '/contact-us', isQuoteModal: true },
    ],
  },
  {
    id: 'architectural-water-lighting',
    tabLabel: 'Architectural Water Lighting',
    tabLabelLines: ['Architectural', 'Water Lighting'],
    icon: SunMedium,
    categoryLink: '/water-feature-lighting',
    bannerCard: {
      image: '/assets/categories/wall-washer-lights-new.jpg',
      eyebrow: 'ARCHITECTURAL WATER LIGHTING',
      title: 'Linear Façade & Water Wall Washers',
      description: 'High-intensity linear LED luminaires casting seamless vertical light sweeps down textured stone and water curtains.',
      features: [
        { icon: Droplet, text: 'IP67 Sealed Waterproofing' },
        { icon: Settings, text: 'Asymmetric Optical Lenses' },
        { icon: Zap, text: 'DMX512 Color Grazing' },
      ],
    },
    categoryDetails: {
      eyebrow: 'EXPLORE OUR RANGE',
      heading: 'Architectural Water Lighting',
      description: 'Linear LED luminaires engineered to cast uniform light down textured stone facades and cascading water veils.',
      categoryLink: '/water-feature-lighting',
      products: [
        {
          title: 'LED Architectural Wall Washer',
          code: '(HF-062 Series)',
          description: 'Extruded aluminum luminaire with precision optical lenses for uniform grazing of exterior stone and waterfalls.',
          image: '/assets/products/hf062-led-wall-washer-light.webp',
          href: '/products/led-architectural-wall-washer-light-hf062',
        },
        {
          title: 'Step Water Blade Nozzle',
          code: '(HF-077 Series)',
          description: 'Concealed spillway system projecting a sheer, sheet-like laminar waterfall off architectural stone steps.',
          image: '/assets/products/hf077-step-water-blade-nozzle.webp',
          href: '/products/step-water-blade-nozzle-hf077',
        },
        {
          title: 'SS Water Cascade Nozzle',
          code: '(HF-076 Series)',
          description: 'Stainless steel shear descent waterfall spillway creating a smooth, crystal-clear curtain of falling water.',
          image: '/assets/products/hf076-water-cascade-nozzle.webp',
          href: '/products/ss-water-cascade-nozzle-hf076',
        },
        {
          title: 'Facade Grazing Projector',
          code: '(HF-039 Series)',
          description: 'Narrow-beam underwater and exterior projector for dramatic vertical illumination of architectural features.',
          image: '/assets/products/hf039-ss-spot-fountain-light.webp',
          href: '/products/ss-spot-fountain-light-hf039-hf042',
        },
      ],
    },
    exploreButtonText: 'Explore All Architectural Water Lighting',
    solutions: [
      { icon: LayoutGrid, title: 'Applications', description: 'Façades, Waterfalls & Entry Walls', href: '/water-feature-lighting' },
      { icon: FileText, title: 'Technical Resources', description: 'Mounting & Beam Angle Guides', href: '/catalogue' },
      { icon: ImageIcon, title: 'Our Work', description: 'See Lighting in Action', href: '/gallery' },
      { icon: MessageSquareQuote, title: 'Get a Quote', description: 'Discuss Your Project', href: '/contact-us', isQuoteModal: true },
    ],
  },
  {
    id: 'water-feature-lights',
    tabLabel: 'Water Feature Lights',
    tabLabelLines: ['Water Feature', 'Lights'],
    icon: Layers,
    categoryLink: '/water-feature-lighting',
    bannerCard: {
      image: '/assets/categories/water-curtains-new.jpg',
      eyebrow: 'WATER FEATURE LIGHTS',
      title: 'Illuminated Waterfalls & Cascades',
      description: 'Engineered acrylic and 316L stainless steel waterfalls creating glass-like laminar sheets with integrated LED glow.',
      features: [
        { icon: Droplet, text: 'Laminar Sheet Flow' },
        { icon: Sparkles, text: 'Internal LED Edge Channel' },
        { icon: Settings, text: 'Optical Grade Acrylic & 316 SS' },
      ],
    },
    categoryDetails: {
      eyebrow: 'EXPLORE OUR RANGE',
      heading: 'Water Feature Lights',
      description: 'Mesmerizing water veils, acrylic cobra descents, and stainless steel sheer blades with internal LED lighting.',
      categoryLink: '/water-feature-lighting',
      products: [
        {
          title: 'Acrylic Cobra Nozzle with LED',
          code: '(HF-080 Series)',
          description: 'Crystal-clear optical acrylic cobra waterfall that channels internal LED illumination directly into the falling water.',
          image: '/assets/products/hf080-acrylic-cobra-nozzle.jpg',
          href: '/products/acrylic-cobra-nozzle-illuminated-hf080',
        },
        {
          title: 'Stainless Steel Cobra Waterfall',
          code: '(HF-078 Series)',
          description: 'Sculptural marine-grade stainless steel cobra waterfall producing an invigorating aquatic sheet.',
          image: '/assets/products/hf078-cobra-waterfall-nozzle.webp',
          href: '/products/stainless-steel-cobra-waterfall-nozzle-hf078',
        },
        {
          title: 'SS Water Cascade Nozzle',
          code: '(HF-076 Series)',
          description: 'Precision engineered sheer descent weir creating a continuous glass-like laminar veil of water.',
          image: '/assets/products/hf076-water-cascade-nozzle.webp',
          href: '/products/ss-water-cascade-nozzle-hf076',
        },
        {
          title: 'Step Water Blade Nozzle',
          code: '(HF-077 Series)',
          description: 'Discreet recessed step water blade producing a tranquil cascading curtain into pool copings.',
          image: '/assets/products/hf077-step-water-blade-nozzle.webp',
          href: '/products/step-water-blade-nozzle-hf077',
        },
      ],
    },
    exploreButtonText: 'Explore All Water Feature Lights',
    solutions: [
      { icon: LayoutGrid, title: 'Applications', description: 'Resorts, Spas & Modern Pools', href: '/water-feature-lighting' },
      { icon: FileText, title: 'Technical Resources', description: 'Flow Rate Requirements Table', href: '/catalogue' },
      { icon: ImageIcon, title: 'Our Work', description: 'See Lighting in Action', href: '/gallery' },
      { icon: MessageSquareQuote, title: 'Get a Quote', description: 'Discuss Your Project', href: '/contact-us', isQuoteModal: true },
    ],
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [activeCategoryTab, setActiveCategoryTab] = useState<string>('underwater-pool-lights');
  const [activeProductIndex, setActiveProductIndex] = useState<number>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const menuTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const [menuTop, setMenuTop] = useState<number>(108);
  const pathname = usePathname();

  // Dynamically calculate navbar bottom position for accurate mega menu placement
  useEffect(() => {
    const updateMenuPosition = () => {
      if (headerRef.current) {
        const rect = headerRef.current.getBoundingClientRect();
        setMenuTop(Math.round(rect.bottom));
      }
    };
    updateMenuPosition();
    window.addEventListener('resize', updateMenuPosition);
    window.addEventListener('scroll', updateMenuPosition);
    return () => {
      window.removeEventListener('resize', updateMenuPosition);
      window.removeEventListener('scroll', updateMenuPosition);
    };
  }, [isScrolled, megaMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMegaMenuOpen(false);
    setMobileMenuOpen(false);
    setSearchModalOpen(false);
  }, [pathname]);

  // Handle escape key to close menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMegaMenuOpen(false);
        setSearchModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleMouseEnter = () => {
    if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
    setMegaMenuOpen(true);
  };

  const handleMouseLeave = () => {
    menuTimeoutRef.current = setTimeout(() => {
      setMegaMenuOpen(false);
    }, 220);
  };

  const currentCategory = MEGA_CATEGORIES.find((c) => c.id === activeCategoryTab) || MEGA_CATEGORIES[0];
  const activeProduct = currentCategory.categoryDetails.products[activeProductIndex] || currentCategory.categoryDetails.products[0];

  const filteredSearchProducts = searchQuery.trim()
    ? PRODUCTS.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.categoryName.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5)
    : [];

  return (
    <>
      <header ref={headerRef} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled ? 'shadow-md' : ''
      }`}>
        {/* Top Utility Bar (Preserving verified contact info) */}
        <div className="bg-[#F4F9FC] border-b border-[#DDEAF3] text-xs text-[#667C96] py-1.5 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Left: Contact Info */}
            <div className="flex items-center space-x-6">
              <a
                href="mailto:info@aqualuxislight.com"
                className="flex items-center hover:text-[#087FE5] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 mr-1.5 text-[#087FE5]" />
                <span className="hidden sm:inline">info@aqualuxislight.com</span>
                <span className="sm:hidden">Email</span>
              </a>
              <a
                href="tel:+918668466689"
                className="flex items-center hover:text-[#087FE5] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 mr-1.5 text-[#087FE5]" />
                <span>+91 8668466689</span>
              </a>
            </div>

            {/* Right: Location, Brochure, Global Presence */}
            <div className="flex items-center space-x-5">
              <span className="hidden md:flex items-center">
                <MapPin className="w-3.5 h-3.5 mr-1 text-[#087FE5]" />
                Mumbai, India
              </span>
              <Link
                href="/catalogue"
                className="hidden sm:flex items-center hover:text-[#087FE5] transition-colors font-medium text-[#102747]"
              >
                <Download className="w-3.5 h-3.5 mr-1 text-[#087FE5]" />
                Brochure
              </Link>
              <span className="hidden lg:flex items-center">
                <Globe className="w-3.5 h-3.5 mr-1 text-[#087FE5]" />
                Global Presence
              </span>
              <div className="flex items-center space-x-2.5 text-[#667C96] pl-2 border-l border-[#DDEAF3]">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#087FE5] transition-colors font-bold text-[11px]">in</a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#087FE5] transition-colors font-bold text-[11px]">f</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#087FE5] transition-colors font-bold text-[11px]">ig</a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#087FE5] transition-colors font-bold text-[11px]">yt</a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar (Clean White Background) */}
        <div className="bg-white border-b border-[#DDEAF3] relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              
              {/* Logo */}
              <Link href="/" className="flex items-center group py-1">
                <div className="relative w-[210px] sm:w-[240px] md:w-[260px] h-[40px] sm:h-[46px]">
                  <Image
                    src="/assets/branding/aqualuxis-logo.png"
                    alt="AQUALUXIS LIGHT - Brilliance Beneath The Surface"
                    fill
                    className="object-contain object-left"
                    priority
                  />
                </div>
              </Link>

              {/* Desktop Navigation Links */}
              <nav className="hidden lg:flex items-center space-x-1.5">
                <Link
                  href="/"
                  className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                    pathname === '/' 
                      ? 'text-[#087FE5]' 
                      : 'text-[#102747] hover:text-[#087FE5]'
                  }`}
                >
                  Home
                </Link>

                <Link
                  href="/about-us"
                  className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                    pathname === '/about-us' 
                      ? 'text-[#087FE5]' 
                      : 'text-[#102747] hover:text-[#087FE5]'
                  }`}
                >
                  About Us
                </Link>

                {/* Products Navigation Item with Active Mega Menu Indicator */}
                <div
                  className="relative flex items-center"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div
                    className={`rounded-t-xl transition-all flex items-center relative ${
                      megaMenuOpen || pathname.startsWith('/products') || pathname.endsWith('-lighting')
                        ? 'text-[#087FE5] bg-[#EAF6FD]'
                        : 'text-[#102747] hover:text-[#087FE5] hover:bg-[#EAF6FD]/50'
                    }`}
                  >
                    {/* Products Page Navigation Link - Clicking navigates to /products */}
                    <Link
                      href="/products"
                      className="pl-4 pr-1.5 py-2 text-sm font-semibold flex items-center transition-colors focus:outline-none"
                    >
                      Products
                    </Link>

                    {/* Separate Dropdown Arrow Button - Clicking toggles mega menu without navigating */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setMegaMenuOpen(!megaMenuOpen);
                      }}
                      aria-expanded={megaMenuOpen}
                      aria-label="Toggle Products mega menu"
                      className="pl-1 pr-3 py-2 text-sm flex items-center justify-center transition-colors focus:outline-none"
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          megaMenuOpen ? 'rotate-180 text-[#087FE5]' : 'text-[#667C96]'
                        }`}
                      />
                    </button>

                    {/* Small arrow indicator pointing down into mega menu when open */}
                    {megaMenuOpen && (
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45 border-t border-l border-[#DDEAF3] z-50 pointer-events-none" />
                    )}
                  </div>

                  {/* =========================================================================
                      MEGA MENU CONTAINER (4-Card Layout from Reference Image 1 & 2)
                  ========================================================================= */}
                  {megaMenuOpen && (
                    <div
                      style={{
                        top: `${menuTop}px`,
                        maxHeight: `calc(100dvh - ${menuTop}px - 12px)`,
                        width: 'calc(100vw - 60px)',
                        maxWidth: '1380px',
                      }}
                      className="fixed left-1/2 -translate-x-1/2 bg-white rounded-2xl border border-[#DDEAF3] shadow-2xl p-3.5 lg:p-4 z-50 text-[#102747] animate-in fade-in slide-in-from-top-1 duration-200 flex flex-col overflow-hidden"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      {/* A. Top Horizontal Category Navigation Bar - Pinned & Always Accessible */}
                      <div className="shrink-0 bg-[#F6FAFD] border border-[#DFEBF3] rounded-2xl p-1 mb-2.5">
                        <div className="grid grid-cols-10 gap-1 xl:gap-1.5">
                          {MEGA_CATEGORIES.map((cat) => {
                            const IconComponent = cat.icon;
                            const isActive = activeCategoryTab === cat.id;
                            return (
                              <button
                                key={cat.id}
                                onClick={() => {
                                  setActiveCategoryTab(cat.id);
                                  setActiveProductIndex(0);
                                }}
                                onMouseEnter={() => {
                                  setActiveCategoryTab(cat.id);
                                  setActiveProductIndex(0);
                                }}
                                className={`w-full h-[64px] xl:h-[68px] flex flex-col items-center justify-center p-0.5 rounded-xl transition-all duration-200 relative group ${
                                  isActive
                                    ? 'bg-[#EBF5FB] border border-[#CDE5F7] shadow-xs text-[#087FE5]'
                                    : 'bg-transparent hover:bg-white/80 border border-transparent hover:border-[#E2EDF5] text-[#5A738E] hover:text-[#102747]'
                                }`}
                              >
                                {/* Category Icon */}
                                <div className={`w-6 h-6 xl:w-7 xl:h-7 rounded-lg flex items-center justify-center mb-1 transition-all duration-200 ${
                                  isActive
                                    ? 'bg-[#087FE5] text-white shadow-xs'
                                    : 'bg-white border border-[#DFEBF3] text-[#087FE5] group-hover:bg-[#EBF5FB] group-hover:border-[#CDE5F7]'
                                }`}>
                                  <IconComponent className="w-3.5 h-3.5" />
                                </div>

                                {/* Category Label (2 standardized lines) */}
                                <div className="text-[10px] xl:text-[10.5px] 2xl:text-[11px] font-bold leading-[1.15] text-center flex flex-col items-center justify-center min-h-[22px] px-0.5">
                                  <span className="truncate max-w-full">{cat.tabLabelLines[0]}</span>
                                  <span className="truncate max-w-full">{cat.tabLabelLines[1]}</span>
                                </div>

                                {/* Active Refined Cyan Underline */}
                                {isActive && (
                                  <div className="absolute -bottom-1 left-2 right-2 h-[2px] bg-[#00E5FF] rounded-full shadow-[0_0_6px_rgba(0,229,255,0.7)]" />
                                )}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* B. Main Content Area (4-Card Balanced Multi-Column Layout) - Vertically Scrollable when Viewport is Constrained */}
                      <div className="flex-1 overflow-y-auto min-h-0 pr-1 -mr-1">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5 items-stretch">
                          
                          {/* -------------------------------------------------------------
                              CARD 1: Promotional Category Card (Reference Image 2)
                          ------------------------------------------------------------- */}
                          <div className="rounded-2xl overflow-hidden relative p-4.5 lg:p-5 text-white shadow-md flex flex-col justify-between min-h-[350px] bg-[#06264A]">
                            {/* Full-bleed background image with subtle dark overlay */}
                            <Image
                              src={currentCategory.bannerCard.image}
                              alt={currentCategory.bannerCard.title}
                              fill
                              className="object-cover"
                              priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#06264A]/95 via-[#06264A]/60 to-[#06264A]/70 pointer-events-none" />

                            {/* Top Text Area */}
                            <div className="relative z-10 space-y-1.5">
                              <span className="text-[10px] font-mono font-bold tracking-[0.22em] text-[#00E5FF] uppercase block">
                                {currentCategory.bannerCard.eyebrow}
                              </span>
                              <h3 className="font-sans font-bold text-xl lg:text-[22px] leading-[1.15] text-white">
                                {currentCategory.bannerCard.title}
                              </h3>
                              <div className="w-10 h-0.5 bg-white/30 my-2" />
                              <p className="text-xs text-slate-200 leading-relaxed font-sans line-clamp-3">
                                {currentCategory.bannerCard.description}
                              </p>
                            </div>

                            {/* Bottom Feature Badges */}
                            <div className="relative z-10 space-y-2 pt-3">
                              {currentCategory.bannerCard.features.map((feat, idx) => {
                                const FeatIcon = feat.icon;
                                return (
                                  <div key={idx} className="flex items-center space-x-2.5">
                                    <div className="w-7 h-7 rounded-full bg-white text-[#087FE5] flex items-center justify-center shrink-0 shadow-sm">
                                      <FeatIcon className="w-3.5 h-3.5" />
                                    </div>
                                    <span className="text-xs font-semibold text-white">
                                      {feat.text}
                                    </span>
                                  </div>
                                );
                              })}
                            </div>
                          </div>

                          {/* -------------------------------------------------------------
                              CARD 2: Category Details & Subcategory List
                          ------------------------------------------------------------- */}
                          <div className="bg-white rounded-2xl border border-[#DDEAF3] p-4 lg:p-4.5 flex flex-col justify-between shadow-xs min-h-[350px]">
                            <div>
                              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#087FE5] block mb-1">
                                {currentCategory.categoryDetails.eyebrow}
                              </span>
                              <h3 className="font-sans font-bold text-lg text-[#102747] leading-tight mb-0.5">
                                {currentCategory.categoryDetails.heading}
                              </h3>
                              <p className="text-[11px] text-[#5A738E] leading-relaxed mb-2.5 line-clamp-2">
                                {currentCategory.categoryDetails.description}
                              </p>

                              {/* Exactly 4 Products with interactive hover connection to Column 3 */}
                              <div className="space-y-1 pt-0.5">
                                {currentCategory.categoryDetails.products.map((prod, idx) => {
                                  const isSelected = activeProductIndex === idx;
                                  return (
                                    <Link
                                      key={idx}
                                      href={prod.href}
                                      onMouseEnter={() => setActiveProductIndex(idx)}
                                      onTouchStart={() => setActiveProductIndex(idx)}
                                      onClick={() => setMegaMenuOpen(false)}
                                      className={`flex items-center justify-between py-1.5 px-2 rounded-xl border transition-all duration-150 group ${
                                        isSelected
                                          ? 'bg-[#EBF5FB] border-[#CDE5F7] shadow-xs text-[#087FE5]'
                                          : 'bg-transparent hover:bg-[#F4F9FD] border-transparent hover:border-[#DDEAF3] text-[#102747]'
                                      }`}
                                    >
                                      <div className="flex items-center space-x-2 min-w-0 pr-1">
                                        <div className={`w-6 h-6 rounded-full bg-[#F4F9FC] border overflow-hidden relative shrink-0 p-0.5 transition-colors ${
                                          isSelected ? 'border-[#087FE5] bg-white ring-1 ring-[#087FE5]/30' : 'border-[#DDEAF3]'
                                        }`}>
                                          <Image
                                            src={prod.image}
                                            alt={prod.title}
                                            fill
                                            className="object-contain p-0.5"
                                          />
                                        </div>
                                        <span className={`text-xs font-semibold truncate transition-colors ${
                                          isSelected ? 'text-[#087FE5]' : 'text-[#102747] group-hover:text-[#087FE5]'
                                        }`}>
                                          {prod.title}
                                        </span>
                                      </div>
                                      <ChevronRight className={`w-3.5 h-3.5 shrink-0 transition-transform ${
                                        isSelected ? 'text-[#087FE5] translate-x-0.5' : 'text-[#8AA4BE] group-hover:text-[#087FE5]'
                                      }`} />
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>

                            {/* Bottom View All Link */}
                            <div className="pt-2 mt-1.5 border-t border-[#EAF2F8]">
                              <Link
                                href={currentCategory.categoryDetails.categoryLink}
                                onClick={() => setMegaMenuOpen(false)}
                                className="inline-flex items-center text-xs font-bold text-[#087FE5] hover:text-[#06264A] transition-colors group"
                              >
                                <span>View All {currentCategory.tabLabel}</span>
                                <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                              </Link>
                            </div>
                          </div>

                          {/* -------------------------------------------------------------
                              CARD 3: Featured Product Showcase (Simplified & Connected)
                          ------------------------------------------------------------- */}
                          <div className="bg-gradient-to-b from-[#F7FBFE] to-white rounded-2xl border border-[#DDEAF3] p-4 lg:p-4.5 flex flex-col justify-between shadow-xs relative group min-h-[350px]">
                            <div className="flex flex-col h-full justify-between">
                              <div>
                                <div className="mb-1.5">
                                  <span className="bg-[#087FE5] text-white text-[9px] font-mono font-bold px-2 py-0.5 rounded-full inline-block tracking-wider uppercase">
                                    FEATURED PRODUCT
                                  </span>
                                </div>

                                {/* Enlarged Single Product Cut-Out Stage (No thumbnails below) */}
                                <div className="relative w-full h-[178px] my-1 flex items-center justify-center">
                                  <Image
                                    key={activeProduct.image}
                                    src={activeProduct.image}
                                    alt={activeProduct.title}
                                    fill
                                    className="object-contain transition-all duration-300 group-hover:scale-105"
                                  />
                                </div>

                                <h4 className="text-xs lg:text-sm font-bold text-[#102747] leading-snug line-clamp-1">
                                  {activeProduct.title}{' '}
                                  <span className="text-[#087FE5] font-semibold">{activeProduct.code}</span>
                                </h4>
                                <p className="text-[11px] text-[#5A738E] leading-relaxed my-1 line-clamp-2">
                                  {activeProduct.description}
                                </p>
                              </div>

                              {/* Blue pill button */}
                              <div className="pt-1.5">
                                <Link
                                  href={activeProduct.href}
                                  onClick={() => setMegaMenuOpen(false)}
                                  className="bg-[#087FE5] hover:bg-[#0667BA] text-white text-xs font-bold py-2 px-4 rounded-full inline-flex items-center space-x-1 shadow-xs transition-colors"
                                >
                                  <span>View Product</span>
                                  <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                              </div>
                            </div>
                          </div>

                          {/* -------------------------------------------------------------
                              CARD 4: Explore Lighting Solutions & Resources
                          ------------------------------------------------------------- */}
                          <div className="bg-white rounded-2xl border border-[#DDEAF3] p-4 lg:p-4.5 flex flex-col justify-between shadow-xs min-h-[350px]">
                            <div>
                              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#087FE5] block mb-1">
                                More Than Just Products
                              </span>
                              <h3 className="font-sans font-bold text-lg text-[#102747] leading-tight mb-0.5">
                                Explore Lighting Solutions
                              </h3>
                              <p className="text-[11px] text-[#5A738E] leading-relaxed mb-2 line-clamp-2">
                                Discover resources and information to help you choose the right lighting for your project.
                              </p>

                              {/* 4 Solution Resource Links */}
                              <div className="space-y-1">
                                {currentCategory.solutions.map((sol, idx) => {
                                  const SolIcon = sol.icon;
                                  if (sol.isQuoteModal) {
                                    return (
                                      <button
                                        key={idx}
                                        onClick={() => {
                                          setMegaMenuOpen(false);
                                          setQuoteModalOpen(true);
                                        }}
                                        className="w-full flex items-center justify-between p-1.5 rounded-xl border border-[#E2EDF5] hover:border-[#087FE5] hover:bg-[#F8FBFE] transition-all group text-left"
                                      >
                                        <div className="flex items-center space-x-2 min-w-0 pr-1">
                                          <div className="w-6 h-6 rounded-lg bg-[#EAF6FD] text-[#087FE5] flex items-center justify-center shrink-0">
                                            <SolIcon className="w-3.5 h-3.5" />
                                          </div>
                                          <div className="min-w-0">
                                            <span className="text-xs font-bold text-[#102747] group-hover:text-[#087FE5] transition-colors block truncate">
                                              {sol.title}
                                            </span>
                                            <span className="text-[10px] text-[#5A738E] block truncate">
                                              {sol.description}
                                            </span>
                                          </div>
                                        </div>
                                        <ChevronRight className="w-3.5 h-3.5 text-[#087FE5] shrink-0 group-hover:translate-x-0.5 transition-transform" />
                                      </button>
                                    );
                                  }
                                  return (
                                    <Link
                                      key={idx}
                                      href={sol.href}
                                      onClick={() => setMegaMenuOpen(false)}
                                      className="flex items-center justify-between p-1.5 rounded-xl border border-[#E2EDF5] hover:border-[#087FE5] hover:bg-[#F8FBFE] transition-all group"
                                    >
                                      <div className="flex items-center space-x-2 min-w-0 pr-1">
                                        <div className="w-6 h-6 rounded-lg bg-[#EAF6FD] text-[#087FE5] flex items-center justify-center shrink-0">
                                          <SolIcon className="w-3.5 h-3.5" />
                                        </div>
                                        <div className="min-w-0">
                                          <span className="text-xs font-bold text-[#102747] group-hover:text-[#087FE5] transition-colors block truncate">
                                            {sol.title}
                                          </span>
                                          <span className="text-[10px] text-[#5A738E] block truncate">
                                            {sol.description}
                                          </span>
                                        </div>
                                      </div>
                                      <ChevronRight className="w-3.5 h-3.5 text-[#087FE5] shrink-0 group-hover:translate-x-0.5 transition-transform" />
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>

                            {/* Bottom Full-Width Pill Button */}
                            <div className="pt-2 mt-1.5 border-t border-[#EAF2F8]">
                              <Link
                                href={currentCategory.categoryDetails.categoryLink}
                                onClick={() => setMegaMenuOpen(false)}
                                className="w-full py-1.5 px-3 rounded-full border border-[#BCE0FD] bg-[#F2F8FE] text-[#087FE5] hover:bg-[#087FE5] hover:text-white text-xs font-bold text-center transition-colors flex items-center justify-center space-x-1"
                              >
                                <span>{currentCategory.exploreButtonText}</span>
                                <ArrowRight className="w-3.5 h-3.5 ml-1" />
                              </Link>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <Link
                  href="/applications"
                  className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                    pathname === '/applications' 
                      ? 'text-[#087FE5]' 
                      : 'text-[#102747] hover:text-[#087FE5]'
                  }`}
                >
                  Applications
                </Link>

                <Link
                  href="/gallery"
                  className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                    pathname === '/gallery' || pathname === '/projects'
                      ? 'text-[#087FE5]' 
                      : 'text-[#102747] hover:text-[#087FE5]'
                  }`}
                >
                  Our Work
                </Link>

                <Link
                  href="/catalogue"
                  className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                    pathname === '/catalogue' 
                      ? 'text-[#087FE5]' 
                      : 'text-[#102747] hover:text-[#087FE5]'
                  }`}
                >
                  Downloads
                </Link>

                <Link
                  href="/contact-us"
                  className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                    pathname === '/contact-us' 
                      ? 'text-[#087FE5]' 
                      : 'text-[#102747] hover:text-[#087FE5]'
                  }`}
                >
                  Contact Us
                </Link>
              </nav>

              {/* Right: Search Icon + Request a Quote Pill Button */}
              <div className="hidden lg:flex items-center space-x-3.5">
                <button
                  onClick={() => setSearchModalOpen(true)}
                  className="w-10 h-10 rounded-full border border-[#DDEAF3] bg-[#F4F9FC] text-[#102747] hover:text-[#087FE5] hover:border-[#087FE5] flex items-center justify-center transition-colors shadow-2xs"
                  aria-label="Search Catalogue"
                >
                  <Search className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setQuoteModalOpen(true)}
                  className="inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-[#087FE5] to-[#20C7E8] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-cyan-500/25 transition-all transform hover:scale-105"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </button>
              </div>

              {/* Mobile Actions */}
              <div className="flex items-center space-x-2 lg:hidden">
                <button
                  onClick={() => setSearchModalOpen(true)}
                  className="p-2 rounded-lg text-[#102747] hover:bg-[#F4F9FC]"
                  aria-label="Search"
                >
                  <Search className="w-5 h-5" />
                </button>

                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2 rounded-lg text-[#102747] hover:bg-[#F4F9FC]"
                  aria-label="Toggle Navigation"
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-[#DDEAF3] shadow-xl max-h-[85vh] overflow-y-auto">
            <div className="px-4 py-6 space-y-4">
              <div className="space-y-1 border-b border-[#DDEAF3] pb-4">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-lg text-sm font-bold text-[#102747] hover:bg-[#F4F9FC]"
                >
                  Home
                </Link>
                <Link
                  href="/about-us"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-lg text-sm font-bold text-[#102747] hover:bg-[#F4F9FC]"
                >
                  About Us
                </Link>

                {/* Expandable Products Accordion with Separated Link & Toggle */}
                <div>
                  <div
                    className={`flex items-center justify-between rounded-lg transition-colors ${
                      pathname.startsWith('/products') || pathname.endsWith('-lighting')
                        ? 'bg-[#EAF6FD] text-[#087FE5]'
                        : 'hover:bg-[#F4F9FC] text-[#102747]'
                    }`}
                  >
                    {/* Products Page Navigation Link */}
                    <Link
                      href="/products"
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex-1 px-3 py-2 text-sm font-bold transition-colors ${
                        pathname.startsWith('/products') || pathname.endsWith('-lighting')
                          ? 'text-[#087FE5]'
                          : 'text-[#102747] hover:text-[#087FE5]'
                      }`}
                    >
                      Products
                    </Link>

                    {/* Separate Toggle Button for Mobile Accordion */}
                    <button
                      type="button"
                      aria-label="Toggle Products sub-categories"
                      aria-expanded={mobileProductsOpen}
                      onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                      className="p-2 text-[#087FE5] hover:bg-[#EAF6FD] rounded-lg transition-colors mr-1"
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          mobileProductsOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </div>

                  {mobileProductsOpen && (
                    <div className="pl-3 pr-2 py-2 space-y-1 text-xs bg-white border-l-2 border-[#087FE5] ml-3 my-2">
                      <Link
                        href="/products"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block font-bold text-[#087FE5] py-1.5 px-2 rounded-md hover:bg-[#EAF6FD]"
                      >
                        Explore All 21 Products →
                      </Link>
                      {MEGA_CATEGORIES.map((cat) => {
                        const CatIcon = cat.icon;
                        return (
                          <Link
                            key={cat.id}
                            href={cat.categoryLink}
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center space-x-2 font-semibold text-[#102747] py-1 px-2 rounded-md hover:text-[#087FE5] hover:bg-[#F4F9FC]"
                          >
                            <CatIcon className="w-3.5 h-3.5 text-[#087FE5] shrink-0" />
                            <span>{cat.tabLabel}</span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>

                <Link
                  href="/applications"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-lg text-sm font-bold text-[#102747] hover:bg-[#F4F9FC]"
                >
                  Applications
                </Link>
                <Link
                  href="/gallery"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-sm font-bold transition-colors ${
                    pathname === '/gallery' || pathname === '/projects'
                      ? 'text-[#087FE5] bg-[#F4F9FC]' 
                      : 'text-[#102747] hover:bg-[#F4F9FC]'
                  }`}
                >
                  Our Work
                </Link>
                <Link
                  href="/catalogue"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-lg text-sm font-bold text-[#102747] hover:bg-[#F4F9FC]"
                >
                  Downloads &amp; Catalogues
                </Link>
                <Link
                  href="/contact-us"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-lg text-sm font-bold text-[#102747] hover:bg-[#F4F9FC]"
                >
                  Contact Us
                </Link>
              </div>

              {/* Mobile CTA Button */}
              <div className="pt-2 space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setQuoteModalOpen(true);
                  }}
                  className="w-full py-3 rounded-full bg-gradient-to-r from-[#087FE5] to-[#20C7E8] text-white text-sm font-bold shadow-md flex items-center justify-center space-x-2"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="text-center text-xs text-[#667C96] space-y-1">
                  <p>Direct Engineering Support: +91 8668466689</p>
                  <p>Email: info@aqualuxislight.com</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Interactive Search Modal */}
      {searchModalOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl w-full max-w-2xl border border-[#DDEAF3] shadow-2xl overflow-hidden">
            <div className="p-4 border-b border-[#DDEAF3] flex items-center space-x-3 bg-[#F4F9FC]">
              <Search className="w-5 h-5 text-[#087FE5]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by product name, model (e.g. HF00, HF052), or category..."
                className="w-full bg-transparent text-sm sm:text-base font-semibold text-[#102747] placeholder-[#667C96] focus:outline-none"
                autoFocus
              />
              <button
                onClick={() => setSearchModalOpen(false)}
                className="p-1 rounded-full hover:bg-slate-200 text-[#667C96]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 max-h-96 overflow-y-auto">
              {filteredSearchProducts.length > 0 ? (
                <div className="space-y-2">
                  <span className="text-[11px] font-bold uppercase text-[#667C96] px-2 block">
                    Matching Models ({filteredSearchProducts.length})
                  </span>
                  {filteredSearchProducts.map((p) => (
                    <Link
                      key={p.id}
                      href={`/products/${p.slug}`}
                      onClick={() => setSearchModalOpen(false)}
                      className="flex items-center space-x-3 p-2.5 rounded-xl hover:bg-[#EAF6FD] transition-colors border border-transparent hover:border-[#DDEAF3]"
                    >
                      <div className="relative w-12 h-12 bg-white rounded-lg border border-[#DDEAF3] p-1 shrink-0">
                        <Image
                          src={p.image}
                          alt={p.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <span className="text-xs font-mono font-bold text-[#087FE5] bg-blue-50 px-1.5 py-0.5 rounded">
                            {p.code}
                          </span>
                          <span className="text-xs font-bold text-[#102747]">
                            {p.name}
                          </span>
                        </div>
                        <span className="text-[11px] text-[#667C96]">
                          {p.categoryName} • IP68
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#087FE5]" />
                    </Link>
                  ))}
                </div>
              ) : searchQuery.trim() ? (
                <div className="py-8 text-center text-sm text-[#667C96]">
                  No products matched &quot;{searchQuery}&quot;. Try searching &quot;Pool&quot;, &quot;Fountain&quot;, or &quot;HF00&quot;.
                </div>
              ) : (
                <div className="py-6 text-center text-xs text-[#667C96]">
                  Type model code or category to search verified AQUALUXIS LIGHT catalogue.
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Global Quote Request Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
      />
    </>
  );
}
