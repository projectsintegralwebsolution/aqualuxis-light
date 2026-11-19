'use client';

import React, { useState, useMemo, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Search, 
  Filter, 
  Waves, 
  Droplet, 
  Sparkles, 
  Layers, 
  ArrowRight,
  Zap,
  Circle,
  Palette,
  Compass,
  RotateCcw,
  X,
  ChevronDown,
  Check,
  SlidersHorizontal,
  Grid,
  ShieldCheck,
  CheckSquare,
  Square
} from 'lucide-react';
import { PRODUCTS, Product } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import QuoteModal from '@/components/QuoteModal';
import PageBanner from '@/components/PageBanner';

// 3 Main Categories with 12 Subcategories (5 + 4 + 3)
const MAIN_CATEGORIES = [
  {
    id: 'underwater-lighting',
    number: '01',
    name: 'Underwater Lighting',
    subCategoryCountText: '5 Subcategories',
    subCategories: [
      'SS Surface Swimming Pool Lights',
      'ABS Body Swimming Pool Lights',
      'SS Body Swimming Pool Lights',
      'Concealed Swimming Pool Lights',
      'LED Wall Washer Lights',
    ],
    icon: Waves,
  },
  {
    id: 'fountain-lighting',
    number: '02',
    name: 'Fountain Lighting',
    subCategoryCountText: '4 Subcategories',
    subCategories: [
      'Full SS Spot Fountain Lights',
      'SS Spot Fountain Lights',
      'Nozzle Fountain Lights',
      'Adjustable Nozzle Fountain Lights',
    ],
    icon: Sparkles,
  },
  {
    id: 'fountain-nozzles-water-features',
    number: '03',
    name: 'Fountain Nozzles & Water Features',
    subCategoryCountText: '3 Subcategories',
    subCategories: [
      'Fountain Nozzles',
      'SS Water Cascade Nozzles',
      'Acrylic Waterfall Nozzles',
    ],
    icon: Droplet,
  },
];

const ALL_SUBCATEGORIES = MAIN_CATEGORIES.flatMap(c => c.subCategories);

// Technical Filter Options populated strictly from the catalogue
const WATTAGE_OPTIONS = [
  '1W',
  '3W',
  '4W',
  '5W',
  '6W',
  '9W',
  '12W',
  '18W',
  '27W',
  '36W',
  '54W',
];

const DIAMETER_OPTIONS = [
  'Dia 50 mm',
  'Dia 3"',
  'Dia 4"',
  'Dia 5"',
  'Dia 6"',
  '1/2" BSP',
  '3/4" BSP',
  '1" BSP',
  '1.5" BSP',
  '2" BSP',
  '300 mm - 1500 mm',
];

const MATERIAL_OPTIONS = [
  'SS 304',
  'SS 316',
  'ABS',
  'Aluminium',
  'Acrylic',
  'Brass',
];

const COLOUR_OPTIONS = [
  'WW',
  'NW',
  'CW',
  'Red',
  'Blue',
  'Green',
  'RGB',
];

const BEAM_ANGLE_OPTIONS = [
  '10°',
  '20°',
  '30°',
  '40°',
  '45°',
  '60°',
  '90°',
];

const IP_RATING_OPTIONS = [
  'IP68',
];

export default function ProductsPage() {
  // Navigation & Category states
  const [selectedMainCategory, setSelectedMainCategory] = useState<string>('all');
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Multi-Select Technical Filter states (string arrays)
  const [selectedWattages, setSelectedWattages] = useState<string[]>([]);
  const [selectedDiameters, setSelectedDiameters] = useState<string[]>([]);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [selectedColours, setSelectedColours] = useState<string[]>([]);
  const [selectedBeamAngles, setSelectedBeamAngles] = useState<string[]>([]);
  const [selectedIpRatings, setSelectedIpRatings] = useState<string[]>([]);

  // UI Dropdown states
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string>('default');
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const dropdownContainerRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside or Escape key
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownContainerRef.current && 
        !dropdownContainerRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpenDropdown(null);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Determine available subcategories for current main category
  const availableSubCategories = useMemo(() => {
    if (selectedMainCategory === 'all') {
      return ALL_SUBCATEGORIES;
    }
    const cat = MAIN_CATEGORIES.find(c => c.id === selectedMainCategory);
    return cat ? cat.subCategories : ALL_SUBCATEGORIES;
  }, [selectedMainCategory]);

  const handleSelectMainCategory = (catId: string) => {
    setSelectedMainCategory(catId);
    setSelectedSubCategory('all');
  };

  // Helper toggle function for multi-select
  const toggleSelection = (list: string[], item: string, setter: React.Dispatch<React.SetStateAction<string[]>>) => {
    setter(prev => 
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  // Filtered Products with Multi-Select Logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      // 1. Main Category filter
      if (selectedMainCategory !== 'all') {
        const cat = MAIN_CATEGORIES.find(c => c.id === selectedMainCategory);
        if (cat && !cat.subCategories.includes(p.subCategory)) {
          return false;
        }
      }

      // 2. Subcategory filter
      if (selectedSubCategory !== 'all') {
        if (p.subCategory !== selectedSubCategory) {
          return false;
        }
      }

      // 3. Search Query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const match = 
          p.name.toLowerCase().includes(query) ||
          p.code.toLowerCase().includes(query) ||
          p.subCategory.toLowerCase().includes(query) ||
          p.shortDescription.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          Object.values(p.specifications).some(val => val.toLowerCase().includes(query)) ||
          p.variants.some(v => 
            v.code.toLowerCase().includes(query) || 
            v.wattage.toLowerCase().includes(query) || 
            v.dimension.toLowerCase().includes(query)
          );
        if (!match) return false;
      }

      // 4. Multi-Select Wattages
      if (selectedWattages.length > 0) {
        const matchW = selectedWattages.some(targetW => {
          // Normalize number e.g. "9W" -> "9"
          const numMatch = targetW.match(/\d+/);
          const num = numMatch ? numMatch[0] : targetW.toLowerCase();
          const regex = new RegExp(`(?:^|[^\\d])${num}\\s*(?:w|watt)?(?:[^\\d]|$)`, 'i');
          const variantMatch = p.variants.some(v => regex.test(v.wattage));
          const specMatch = p.specifications['Wattage'] && regex.test(p.specifications['Wattage']);
          return variantMatch || specMatch;
        });
        if (!matchW) return false;
      }

      // 5. Multi-Select Diameter / Size
      if (selectedDiameters.length > 0) {
        const matchD = selectedDiameters.some(targetD => {
          const dQuery = targetD.toLowerCase().replace(/^(dia|bsp)\s*/i, '').trim();
          const variantMatch = p.variants.some(v => v.dimension.toLowerCase().includes(dQuery));
          const specMatch = (p.specifications['Dimensions'] && p.specifications['Dimensions'].toLowerCase().includes(dQuery)) ||
            (p.specifications['Thread Size'] && p.specifications['Thread Size'].toLowerCase().includes(dQuery));
          return variantMatch || specMatch;
        });
        if (!matchD) return false;
      }

      // 6. Multi-Select Body Material
      if (selectedMaterials.length > 0) {
        const matchM = selectedMaterials.some(targetM => {
          const mQuery = targetM.toLowerCase();
          const specMat = (p.specifications['Body Material'] || '').toLowerCase();
          const nameMat = p.name.toLowerCase();
          return specMat.includes(mQuery) || nameMat.includes(mQuery);
        });
        if (!matchM) return false;
      }

      // 7. Multi-Select LED Colour
      if (selectedColours.length > 0) {
        const matchC = selectedColours.some(targetC => {
          const cQuery = targetC.toLowerCase();
          const specCol = (p.specifications['Color Options'] || '').toLowerCase();
          return specCol.includes(cQuery);
        });
        if (!matchC) return false;
      }

      // 8. Multi-Select Beam Angle
      if (selectedBeamAngles.length > 0) {
        const matchA = selectedBeamAngles.some(targetA => {
          const specAngle = p.specifications['Beam Angle'] || '';
          return specAngle.includes(targetA);
        });
        if (!matchA) return false;
      }

      // 9. Multi-Select IP Rating
      if (selectedIpRatings.length > 0) {
        const matchIP = selectedIpRatings.some(targetIP => {
          const specIP = p.specifications['Protection Class'] || '';
          return specIP.includes(targetIP);
        });
        if (!matchIP) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
      if (sortBy === 'code-asc') return a.code.localeCompare(b.code);
      return 0; // default order
    });
  }, [
    selectedMainCategory,
    selectedSubCategory,
    searchQuery,
    selectedWattages,
    selectedDiameters,
    selectedMaterials,
    selectedColours,
    selectedBeamAngles,
    selectedIpRatings,
    sortBy,
  ]);

  // Clear all filters handler
  const handleClearAll = () => {
    setSelectedMainCategory('all');
    setSelectedSubCategory('all');
    setSearchQuery('');
    setSelectedWattages([]);
    setSelectedDiameters([]);
    setSelectedMaterials([]);
    setSelectedColours([]);
    setSelectedBeamAngles([]);
    setSelectedIpRatings([]);
    setOpenDropdown(null);
  };

  // Active filter chips list
  const activeFilters = useMemo(() => {
    const list: { label: string; clear: () => void }[] = [];
    
    if (selectedMainCategory !== 'all') {
      const cat = MAIN_CATEGORIES.find(c => c.id === selectedMainCategory);
      if (cat) {
        list.push({
          label: cat.name,
          clear: () => {
            setSelectedMainCategory('all');
            setSelectedSubCategory('all');
          },
        });
      }
    }

    if (selectedSubCategory !== 'all') {
      list.push({
        label: selectedSubCategory,
        clear: () => setSelectedSubCategory('all'),
      });
    }

    selectedWattages.forEach(w => {
      list.push({
        label: w,
        clear: () => setSelectedWattages(prev => prev.filter(i => i !== w)),
      });
    });

    selectedDiameters.forEach(d => {
      list.push({
        label: d,
        clear: () => setSelectedDiameters(prev => prev.filter(i => i !== d)),
      });
    });

    selectedMaterials.forEach(m => {
      list.push({
        label: m,
        clear: () => setSelectedMaterials(prev => prev.filter(i => i !== m)),
      });
    });

    selectedColours.forEach(c => {
      list.push({
        label: c,
        clear: () => setSelectedColours(prev => prev.filter(i => i !== c)),
      });
    });

    selectedBeamAngles.forEach(b => {
      list.push({
        label: `Beam: ${b}`,
        clear: () => setSelectedBeamAngles(prev => prev.filter(i => i !== b)),
      });
    });

    selectedIpRatings.forEach(ip => {
      list.push({
        label: ip,
        clear: () => setSelectedIpRatings(prev => prev.filter(i => i !== ip)),
      });
    });

    if (searchQuery.trim()) {
      list.push({
        label: `Search: "${searchQuery}"`,
        clear: () => setSearchQuery(''),
      });
    }

    return list;
  }, [
    selectedMainCategory,
    selectedSubCategory,
    selectedWattages,
    selectedDiameters,
    selectedMaterials,
    selectedColours,
    selectedBeamAngles,
    selectedIpRatings,
    searchQuery,
  ]);

  // Total technical filter selections count
  const technicalFiltersCount = 
    selectedWattages.length +
    selectedDiameters.length +
    selectedMaterials.length +
    selectedColours.length +
    selectedBeamAngles.length +
    selectedIpRatings.length;

  return (
    <div className="bg-white min-h-screen text-[#142C49]">
      
      {/* =========================================================================
          HERO BANNER (Strictly Preserved)
      ========================================================================= */}
      <PageBanner
        breadcrumbs={[{ label: 'Products Catalogue' }]}
        eyebrow="COMPLETE AQUATIC ILLUMINATION RANGE"
        title="Submersible & Fountain Products"
        description="Explore 83 factory-engineered underwater LED luminaires, fountain nozzles, wall grazing fixtures, and illuminated water blades. All luminaires are IP68 certified and rated for continuous submerged operation."
        imageSrc="/assets/banners/banner-fountains.png"
        imageAlt="Submersible & Fountain Products"
      />

      {/* =========================================================================
          MAIN FILTER & LISTING SECTION
      ========================================================================= */}
      <section className="py-10 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* =======================================================================
            1. MAIN CATEGORY NAVIGATION (01, 02, 03 + Full Non-Truncated Names)
        ======================================================================= */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#087FE5]">
              Main Product Categories
            </span>
            <span className="text-xs text-[#63758B] hidden sm:inline">
              Select category to view dedicated subcategories
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
            {/* All Categories Option */}
            <button
              onClick={() => handleSelectMainCategory('all')}
              className={`p-2.5 sm:p-3 rounded-xl border text-left transition-all flex items-start justify-between gap-2.5 group min-h-[66px] ${
                selectedMainCategory === 'all'
                  ? 'bg-[#082B52] border-[#082B52] text-white shadow-md ring-2 ring-[#087FE5]/30'
                  : 'bg-[#F8FBFE] border-[#CBDCEB] hover:border-[#087FE5] hover:bg-[#EEF6FC] text-[#142C49]'
              }`}
            >
              <div className="flex items-start space-x-2.5 min-w-0 flex-1">
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                  selectedMainCategory === 'all'
                    ? 'bg-white/15 text-[#20C7E8]'
                    : 'bg-white text-[#087FE5] border border-[#CBDCEB]'
                }`}>
                  <Grid className="w-3.5 h-3.5" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[12.5px] sm:text-[13px] font-bold block leading-snug whitespace-normal">
                    All Categories
                  </span>
                  <span className={`text-[9.5px] sm:text-[10px] block mt-0.5 leading-tight ${
                    selectedMainCategory === 'all' ? 'text-slate-300' : 'text-[#63758B]'
                  }`}>
                    Complete Product Lineup
                  </span>
                </div>
              </div>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 mt-0.5 ${
                selectedMainCategory === 'all'
                  ? 'bg-white/20 text-white'
                  : 'bg-white text-[#63758B] border border-[#CBDCEB]'
              }`}>
                12
              </span>
            </button>

            {/* 3 Main Categories */}
            {MAIN_CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isSelected = selectedMainCategory === cat.id;
              const subtitle = cat.id === 'underwater-lighting'
                ? 'Pools & Wall Grazing'
                : cat.id === 'fountain-lighting'
                ? 'Spot & Nozzle Luminaires'
                : 'Nozzles & Water Cascades';

              return (
                <button
                  key={cat.id}
                  onClick={() => handleSelectMainCategory(cat.id)}
                  className={`p-2.5 sm:p-3 rounded-xl border text-left transition-all flex items-start justify-between gap-2.5 group min-h-[66px] ${
                    isSelected
                      ? 'bg-[#082B52] border-[#082B52] text-white shadow-md ring-2 ring-[#087FE5]/30'
                      : 'bg-[#F8FBFE] border-[#CBDCEB] hover:border-[#087FE5] hover:bg-[#EEF6FC] text-[#142C49]'
                  }`}
                >
                  <div className="flex items-start space-x-2.5 min-w-0 flex-1">
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                      isSelected
                        ? 'bg-white/15 text-[#20C7E8]'
                        : 'bg-white text-[#087FE5] border border-[#CBDCEB]'
                    }`}>
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-[12.5px] sm:text-[13px] font-bold block leading-snug whitespace-normal">
                        {cat.name}
                      </span>
                      <span className={`text-[9.5px] sm:text-[10px] block mt-0.5 leading-tight ${
                        isSelected ? 'text-slate-300' : 'text-[#63758B]'
                      }`}>
                        {subtitle}
                      </span>
                    </div>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 mt-0.5 ${
                    isSelected
                      ? 'bg-white/20 text-white'
                      : 'bg-white text-[#63758B] border border-[#CBDCEB]'
                  }`}>
                    {cat.subCategories.length}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* =======================================================================
            2. SUBCATEGORY FILTER ROW (Horizontal Scrollable with Icons)
        ======================================================================= */}
        <div className="bg-[#F8FBFE] p-3.5 sm:p-4 rounded-2xl border border-[#CBDCEB] space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#142C49] flex items-center">
              <Filter className="w-3.5 h-3.5 mr-1.5 text-[#087FE5]" />
              Filter by Subcategory:
            </span>
            <span className="text-[11px] text-[#63758B]">
              Showing {availableSubCategories.length} subcategories
            </span>
          </div>

          <div className="flex items-center space-x-2 overflow-x-auto pb-1.5 pt-0.5 scrollbar-none text-xs">
            {/* All Types Button */}
            <button
              onClick={() => setSelectedSubCategory('all')}
              className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shrink-0 flex items-center space-x-1.5 ${
                selectedSubCategory === 'all'
                  ? 'bg-[#087FE5] text-white shadow-xs'
                  : 'bg-white text-[#63758B] hover:text-[#142C49] hover:bg-[#EEF6FC] border border-[#CBDCEB]'
              }`}
            >
              <Grid className="w-3.5 h-3.5" />
              <span>All Types</span>
            </button>

            {/* Individual Subcategory Pills */}
            {availableSubCategories.map((sub) => {
              const isSelected = selectedSubCategory === sub;
              return (
                <button
                  key={sub}
                  onClick={() => setSelectedSubCategory(sub)}
                  className={`px-3.5 py-1.5 rounded-xl font-bold transition-all shrink-0 flex items-center space-x-1.5 ${
                    isSelected
                      ? 'bg-[#087FE5] text-white shadow-xs'
                      : 'bg-white text-[#63758B] hover:text-[#142C49] hover:bg-[#EEF6FC] border border-[#CBDCEB]'
                  }`}
                >
                  <span className="truncate">{sub}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* =======================================================================
            3. TECHNICAL FILTERS (Zero Overflow Clipping + Multi-Select Support)
        ======================================================================= */}
        <div ref={dropdownContainerRef} className="space-y-4 relative z-20">
          
          {/* Mobile Filter Toggle Button (< md) */}
          <div className="flex md:hidden items-center justify-between gap-3">
            <button
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              className="flex-1 py-2.5 px-4 rounded-xl bg-[#F0F7FC] border border-[#CBDCEB] text-xs font-bold text-[#142C49] flex items-center justify-center space-x-2"
            >
              <SlidersHorizontal className="w-4 h-4 text-[#087FE5]" />
              <span>Technical Filters {technicalFiltersCount > 0 ? `(${technicalFiltersCount})` : ''}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${mobileFiltersOpen ? 'rotate-180' : ''}`} />
            </button>

            <div className="relative flex-1">
              <Search className="w-3.5 h-3.5 text-[#63758B] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="w-full pl-8 pr-3 py-2 rounded-xl text-xs font-semibold bg-[#F0F7FC] border border-[#CBDCEB] text-[#142C49] placeholder-[#63758B] focus:outline-none focus:border-[#087FE5]"
              />
            </div>
          </div>

          {/* Desktop & Expanded Mobile Filters Row */}
          <div className={`${mobileFiltersOpen ? 'block' : 'hidden md:block'} space-y-4`}>
            <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
              
              {/* Left: 6 Dropdown Controls (flex-wrap ensures NO overflow-x clipping) */}
              <div className="flex flex-wrap items-center gap-2 text-xs relative">
                
                {/* 1. Wattage Dropdown */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setOpenDropdown(openDropdown === 'wattage' ? null : 'wattage')}
                    className={`px-3 py-2 rounded-xl font-bold border flex items-center space-x-1.5 transition-all ${
                      selectedWattages.length > 0
                        ? 'bg-blue-50 border-[#087FE5] text-[#087FE5] ring-1 ring-[#087FE5]'
                        : 'bg-white border-[#CBDCEB] hover:border-[#087FE5]/60 text-[#142C49]'
                    }`}
                  >
                    <Zap className="w-3.5 h-3.5 text-[#20C7E8]" />
                    <span>
                      {selectedWattages.length === 0
                        ? 'Wattage'
                        : selectedWattages.length === 1
                        ? selectedWattages[0]
                        : `Wattage (${selectedWattages.length})`}
                    </span>
                    <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                  </button>

                  {openDropdown === 'wattage' && (
                    <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-2xl shadow-2xl border border-[#CBDCEB] p-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                      <div className="flex items-center justify-between px-2 py-1 mb-1 border-b border-[#F0F7FC]">
                        <span className="text-[11px] font-bold text-[#63758B] uppercase">Wattage Options</span>
                        {selectedWattages.length > 0 && (
                          <button
                            onClick={() => setSelectedWattages([])}
                            className="text-[10px] text-[#087FE5] hover:underline font-bold"
                          >
                            Reset
                          </button>
                        )}
                      </div>
                      <div className="max-h-56 overflow-y-auto space-y-0.5">
                        {WATTAGE_OPTIONS.map((w) => {
                          const isChecked = selectedWattages.includes(w);
                          return (
                            <button
                              key={w}
                              type="button"
                              onClick={() => toggleSelection(selectedWattages, w, setSelectedWattages)}
                              className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-2 transition-colors ${
                                isChecked ? 'bg-blue-50 text-[#087FE5]' : 'text-[#142C49] hover:bg-[#F8FBFE]'
                              }`}
                            >
                              <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                                isChecked ? 'bg-[#087FE5] border-[#087FE5] text-white' : 'border-[#CBDCEB] bg-white'
                              }`}>
                                {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                              </div>
                              <span className="truncate">{w}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                {/* 2. Diameter / Size Dropdown */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setOpenDropdown(openDropdown === 'diameter' ? null : 'diameter')}
                    className={`px-3 py-2 rounded-xl font-bold border flex items-center space-x-1.5 transition-all ${
                      selectedDiameters.length > 0
                        ? 'bg-blue-50 border-[#087FE5] text-[#087FE5] ring-1 ring-[#087FE5]'
                        : 'bg-white border-[#CBDCEB] hover:border-[#087FE5]/60 text-[#142C49]'
                    }`}
                  >
                    <Circle className="w-3.5 h-3.5 text-[#087FE5]" />
                    <span>
                      {selectedDiameters.length === 0
                        ? 'Diameter / Size'
                        : selectedDiameters.length === 1
                        ? selectedDiameters[0]
                        : `Size (${selectedDiameters.length})`}
                    </span>
                    <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                  </button>

                  {openDropdown === 'diameter' && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-[#CBDCEB] p-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                      <div className="flex items-center justify-between px-2 py-1 mb-1 border-b border-[#F0F7FC]">
                        <span className="text-[11px] font-bold text-[#63758B] uppercase">Diameter / Size</span>
                        {selectedDiameters.length > 0 && (
                          <button
                            onClick={() => setSelectedDiameters([])}
                            className="text-[10px] text-[#087FE5] hover:underline font-bold"
                          >
                            Reset
                          </button>
                        )}
                      </div>
                      <div className="max-h-56 overflow-y-auto space-y-0.5">
                        {DIAMETER_OPTIONS.map((d) => {
                          const isChecked = selectedDiameters.includes(d);
                          return (
                            <button
                              key={d}
                              type="button"
                              onClick={() => toggleSelection(selectedDiameters, d, setSelectedDiameters)}
                              className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-2 transition-colors ${
                                isChecked ? 'bg-blue-50 text-[#087FE5]' : 'text-[#142C49] hover:bg-[#F8FBFE]'
                              }`}
                            >
                              <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                                isChecked ? 'bg-[#087FE5] border-[#087FE5] text-white' : 'border-[#CBDCEB] bg-white'
                              }`}>
                                {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                              </div>
                              <span className="truncate">{d}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                {/* 3. Body Material Dropdown */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setOpenDropdown(openDropdown === 'material' ? null : 'material')}
                    className={`px-3 py-2 rounded-xl font-bold border flex items-center space-x-1.5 transition-all ${
                      selectedMaterials.length > 0
                        ? 'bg-blue-50 border-[#087FE5] text-[#087FE5] ring-1 ring-[#087FE5]'
                        : 'bg-white border-[#CBDCEB] hover:border-[#087FE5]/60 text-[#142C49]'
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5 text-[#087FE5]" />
                    <span>
                      {selectedMaterials.length === 0
                        ? 'Body Material'
                        : selectedMaterials.length === 1
                        ? selectedMaterials[0]
                        : `Material (${selectedMaterials.length})`}
                    </span>
                    <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                  </button>

                  {openDropdown === 'material' && (
                    <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-2xl shadow-2xl border border-[#CBDCEB] p-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                      <div className="flex items-center justify-between px-2 py-1 mb-1 border-b border-[#F0F7FC]">
                        <span className="text-[11px] font-bold text-[#63758B] uppercase">Body Material</span>
                        {selectedMaterials.length > 0 && (
                          <button
                            onClick={() => setSelectedMaterials([])}
                            className="text-[10px] text-[#087FE5] hover:underline font-bold"
                          >
                            Reset
                          </button>
                        )}
                      </div>
                      <div className="max-h-56 overflow-y-auto space-y-0.5">
                        {MATERIAL_OPTIONS.map((m) => {
                          const isChecked = selectedMaterials.includes(m);
                          return (
                            <button
                              key={m}
                              type="button"
                              onClick={() => toggleSelection(selectedMaterials, m, setSelectedMaterials)}
                              className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-2 transition-colors ${
                                isChecked ? 'bg-blue-50 text-[#087FE5]' : 'text-[#142C49] hover:bg-[#F8FBFE]'
                              }`}
                            >
                              <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                                isChecked ? 'bg-[#087FE5] border-[#087FE5] text-white' : 'border-[#CBDCEB] bg-white'
                              }`}>
                                {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                              </div>
                              <span className="truncate">{m}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                {/* 4. LED Colour Dropdown */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setOpenDropdown(openDropdown === 'colour' ? null : 'colour')}
                    className={`px-3 py-2 rounded-xl font-bold border flex items-center space-x-1.5 transition-all ${
                      selectedColours.length > 0
                        ? 'bg-blue-50 border-[#087FE5] text-[#087FE5] ring-1 ring-[#087FE5]'
                        : 'bg-white border-[#CBDCEB] hover:border-[#087FE5]/60 text-[#142C49]'
                    }`}
                  >
                    <Palette className="w-3.5 h-3.5 text-[#20C7E8]" />
                    <span>
                      {selectedColours.length === 0
                        ? 'LED Colour'
                        : selectedColours.length === 1
                        ? selectedColours[0]
                        : `Colour (${selectedColours.length})`}
                    </span>
                    <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                  </button>

                  {openDropdown === 'colour' && (
                    <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-2xl shadow-2xl border border-[#CBDCEB] p-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                      <div className="flex items-center justify-between px-2 py-1 mb-1 border-b border-[#F0F7FC]">
                        <span className="text-[11px] font-bold text-[#63758B] uppercase">LED Colour</span>
                        {selectedColours.length > 0 && (
                          <button
                            onClick={() => setSelectedColours([])}
                            className="text-[10px] text-[#087FE5] hover:underline font-bold"
                          >
                            Reset
                          </button>
                        )}
                      </div>
                      <div className="max-h-56 overflow-y-auto space-y-0.5">
                        {COLOUR_OPTIONS.map((c) => {
                          const isChecked = selectedColours.includes(c);
                          return (
                            <button
                              key={c}
                              type="button"
                              onClick={() => toggleSelection(selectedColours, c, setSelectedColours)}
                              className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-2 transition-colors ${
                                isChecked ? 'bg-blue-50 text-[#087FE5]' : 'text-[#142C49] hover:bg-[#F8FBFE]'
                              }`}
                            >
                              <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                                isChecked ? 'bg-[#087FE5] border-[#087FE5] text-white' : 'border-[#CBDCEB] bg-white'
                              }`}>
                                {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                              </div>
                              <span className="truncate">{c}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                {/* 5. Beam Angle Dropdown */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setOpenDropdown(openDropdown === 'beam' ? null : 'beam')}
                    className={`px-3 py-2 rounded-xl font-bold border flex items-center space-x-1.5 transition-all ${
                      selectedBeamAngles.length > 0
                        ? 'bg-blue-50 border-[#087FE5] text-[#087FE5] ring-1 ring-[#087FE5]'
                        : 'bg-white border-[#CBDCEB] hover:border-[#087FE5]/60 text-[#142C49]'
                    }`}
                  >
                    <Compass className="w-3.5 h-3.5 text-[#087FE5]" />
                    <span>
                      {selectedBeamAngles.length === 0
                        ? 'Beam Angle'
                        : selectedBeamAngles.length === 1
                        ? `Beam: ${selectedBeamAngles[0]}`
                        : `Beam (${selectedBeamAngles.length})`}
                    </span>
                    <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                  </button>

                  {openDropdown === 'beam' && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-2xl shadow-2xl border border-[#CBDCEB] p-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                      <div className="flex items-center justify-between px-2 py-1 mb-1 border-b border-[#F0F7FC]">
                        <span className="text-[11px] font-bold text-[#63758B] uppercase">Beam Angles</span>
                        {selectedBeamAngles.length > 0 && (
                          <button
                            onClick={() => setSelectedBeamAngles([])}
                            className="text-[10px] text-[#087FE5] hover:underline font-bold"
                          >
                            Reset
                          </button>
                        )}
                      </div>
                      <div className="max-h-56 overflow-y-auto space-y-0.5">
                        {BEAM_ANGLE_OPTIONS.map((b) => {
                          const isChecked = selectedBeamAngles.includes(b);
                          return (
                            <button
                              key={b}
                              type="button"
                              onClick={() => toggleSelection(selectedBeamAngles, b, setSelectedBeamAngles)}
                              className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-2 transition-colors ${
                                isChecked ? 'bg-blue-50 text-[#087FE5]' : 'text-[#142C49] hover:bg-[#F8FBFE]'
                              }`}
                            >
                              <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                                isChecked ? 'bg-[#087FE5] border-[#087FE5] text-white' : 'border-[#CBDCEB] bg-white'
                              }`}>
                                {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                              </div>
                              <span>{b}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                {/* 6. IP Rating Dropdown */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setOpenDropdown(openDropdown === 'ip' ? null : 'ip')}
                    className={`px-3 py-2 rounded-xl font-bold border flex items-center space-x-1.5 transition-all ${
                      selectedIpRatings.length > 0
                        ? 'bg-blue-50 border-[#087FE5] text-[#087FE5] ring-1 ring-[#087FE5]'
                        : 'bg-white border-[#CBDCEB] hover:border-[#087FE5]/60 text-[#142C49]'
                    }`}
                  >
                    <Droplet className="w-3.5 h-3.5 text-[#20C7E8]" />
                    <span>
                      {selectedIpRatings.length === 0
                        ? 'IP Rating'
                        : selectedIpRatings[0]}
                    </span>
                    <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                  </button>

                  {openDropdown === 'ip' && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-2xl shadow-2xl border border-[#CBDCEB] p-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                      <div className="flex items-center justify-between px-2 py-1 mb-1 border-b border-[#F0F7FC]">
                        <span className="text-[11px] font-bold text-[#63758B] uppercase">IP Rating</span>
                        {selectedIpRatings.length > 0 && (
                          <button
                            onClick={() => setSelectedIpRatings([])}
                            className="text-[10px] text-[#087FE5] hover:underline font-bold"
                          >
                            Reset
                          </button>
                        )}
                      </div>
                      <div className="space-y-0.5">
                        {IP_RATING_OPTIONS.map((ip) => {
                          const isChecked = selectedIpRatings.includes(ip);
                          return (
                            <button
                              key={ip}
                              type="button"
                              onClick={() => toggleSelection(selectedIpRatings, ip, setSelectedIpRatings)}
                              className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-2 transition-colors ${
                                isChecked ? 'bg-blue-50 text-[#087FE5]' : 'text-[#142C49] hover:bg-[#F8FBFE]'
                              }`}
                            >
                              <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                                isChecked ? 'bg-[#087FE5] border-[#087FE5] text-white' : 'border-[#CBDCEB] bg-white'
                              }`}>
                                {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                              </div>
                              <span>{ip} Submersible</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                {/* Clear All Link when filters active */}
                {activeFilters.length > 0 && (
                  <button
                    type="button"
                    onClick={handleClearAll}
                    className="px-2.5 py-2 text-xs font-bold text-[#087FE5] hover:text-[#06264A] flex items-center space-x-1 shrink-0"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Clear All</span>
                  </button>
                )}

              </div>

              {/* Right: Search Box (Desktop) */}
              <div className="relative w-full md:w-64 lg:w-72 shrink-0 hidden md:block">
                <Search className="w-4 h-4 text-[#63758B] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Search models, wattage..."
                  className="w-full pl-10 pr-4 py-2 rounded-full text-xs font-semibold bg-[#F0F7FC] border border-[#CBDCEB] text-[#142C49] placeholder-[#63758B] focus:outline-none focus:border-[#087FE5] transition-colors"
                />
              </div>

            </div>
          </div>

          {/* =====================================================================
              4. ACTIVE FILTER CHIPS ROW (Matching Image 2)
          ===================================================================== */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-[#E3EDF5] text-xs">
            
            {/* Active Chips Strip */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-semibold text-[#63758B] shrink-0">
                Selected Filters:
              </span>
              
              {activeFilters.length > 0 ? (
                <>
                  {activeFilters.map((f, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center px-2.5 py-1 rounded-lg bg-blue-50 text-[#087FE5] border border-blue-200 text-[11px] font-bold"
                    >
                      <span className="truncate max-w-[140px] sm:max-w-[200px]">{f.label}</span>
                      <button
                        type="button"
                        onClick={f.clear}
                        className="ml-1.5 p-0.5 hover:bg-blue-100 rounded-full"
                        aria-label={`Remove filter ${f.label}`}
                      >
                        <X className="w-3 h-3 text-[#087FE5]" />
                      </button>
                    </span>
                  ))}
                  <button
                    type="button"
                    onClick={handleClearAll}
                    className="text-[#087FE5] hover:underline font-bold text-[11px] ml-1"
                  >
                    Clear All
                  </button>
                </>
              ) : (
                <span className="text-[#63758B] italic text-[11px]">
                  None (showing full catalogue)
                </span>
              )}
            </div>

            {/* Results Counter & Sort Dropdown */}
            <div className="flex items-center space-x-3 shrink-0 self-end sm:self-auto">
              <span className="text-[#63758B]">
                Showing <strong className="text-[#142C49] font-bold">{filteredProducts.length}</strong> Products
              </span>
              <div className="flex items-center space-x-1.5">
                <span className="text-[#63758B] hidden md:inline">Sort By:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-[#F0F7FC] border border-[#CBDCEB] text-[#142C49] font-semibold text-xs rounded-lg px-2.5 py-1 focus:outline-none focus:border-[#087FE5]"
                >
                  <option value="default">Most Popular</option>
                  <option value="name-asc">Product Name (A-Z)</option>
                  <option value="code-asc">Model Code (AL)</option>
                </select>
              </div>
            </div>

          </div>
        </div>

        {/* =======================================================================
            5. PRODUCTS GRID (4 Columns)
        ======================================================================= */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center space-y-4 bg-[#F8FBFE] rounded-2xl border border-[#CBDCEB]">
            <div className="w-16 h-16 rounded-full bg-blue-50 text-[#087FE5] flex items-center justify-center mx-auto">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[#142C49]">No products match your criteria</h3>
            <p className="text-sm text-[#63758B] max-w-md mx-auto">
              Try adjusting your category selection, unchecking technical filters, or resetting your search query.
            </p>
            <button
              type="button"
              onClick={handleClearAll}
              className="px-6 py-2.5 rounded-full bg-[#087FE5] text-white text-xs font-bold shadow-xs hover:bg-[#066ac2] transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        )}

      </section>

      {/* Global Quote Request Modal */}
      <QuoteModal
        isOpen={quoteOpen}
        onClose={() => setQuoteOpen(false)}
      />
    </div>
  );
}
