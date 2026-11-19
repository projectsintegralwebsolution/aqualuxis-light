'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Maximize2,
  FileText,
  Package,
  Star,
  LayoutGrid,
  Download,
  Layers,
  HardDrive,
  Zap,
  Circle,
  Compass,
  ShieldCheck,
  Disc,
  Cpu,
  CheckCircle2,
  ArrowRight,
  PhoneCall,
  MessageCircle,
  Check,
  Sparkles,
  HelpCircle,
  Send,
  Loader2,
  AlertCircle
} from 'lucide-react';
import { Product, ProductVariant, getRelatedProducts, CATALOGUES } from '@/data/products';
import { getProductApplications } from '@/data/productApplications';
import PageBanner from '@/components/PageBanner';
import QuoteModal from '@/components/QuoteModal';
import SurfacePoolLightDetail from '@/components/SurfacePoolLightDetail';

interface ProductDetailClientProps {
  product: Product;
}

// 7 Verified Available Colour Options with CCT Temperatures
const AVAILABLE_COLOUR_OPTIONS = [
  {
    id: 'WW (2700–3000K)',
    name: 'WW',
    temp: '2700–3000K',
    bg: '#FFD56B',
    border: '#E5B842',
    darkCheck: true,
  },
  {
    id: 'NW (4000–4500K)',
    name: 'NW',
    temp: '4000–4500K',
    bg: '#FFF2CE',
    border: '#E0D2A4',
    darkCheck: true,
  },
  {
    id: 'CW (6000–6500K)',
    name: 'CW',
    temp: '6000–6500K',
    bg: '#FFFFFF',
    border: '#CBDCEB',
    darkCheck: true,
  },
  {
    id: 'Red',
    name: 'Red',
    temp: '',
    bg: '#EF4444',
    border: '#DC2626',
    darkCheck: false,
  },
  {
    id: 'Blue',
    name: 'Blue',
    temp: '',
    bg: '#2563EB',
    border: '#1D4ED8',
    darkCheck: false,
  },
  {
    id: 'Green',
    name: 'Green',
    temp: '',
    bg: '#10B981',
    border: '#059669',
    darkCheck: false,
  },
  {
    id: 'RGB',
    name: 'RGB',
    temp: 'Multi-Color',
    bg: 'linear-gradient(135deg, #FF0055 0%, #00FFCC 50%, #0066FF 100%)',
    border: '#CBDCEB',
    darkCheck: false,
  },
];

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  // STRICT RULE: If viewing the approved Surface Model Swimming Pool Light page, preserve untouched
  if (product.slug === 'surface-model-swimming-pool-light-al00-al015' || product.id === 'al00-al015-surface') {
    return <SurfacePoolLightDetail />;
  }

  // Model & Variants handling
  const variants = product.variants || [];
  const hasVariants = variants.length > 0;
  
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(() => {
    return variants[0] || {
      code: product.code,
      dimension: product.specifications['Dimensions'] || product.specifications['Height'] || 'Standard Dimensions',
      wattage: product.specifications['Wattage'] || product.specifications['Power / Flow'] || 'Standard',
    };
  });

  // Parse wattage variations for currently selected model
  const wattageOptions = useMemo(() => {
    if (!selectedVariant.wattage) return [];
    if (selectedVariant.wattage.includes('/')) {
      return selectedVariant.wattage.split('/').map(w => w.trim()).filter(Boolean);
    }
    return [selectedVariant.wattage.trim()];
  }, [selectedVariant]);

  const [selectedWattage, setSelectedWattage] = useState<string>(
    wattageOptions[0] || selectedVariant.wattage || ''
  );

  // Check if product supports lighting color variations
  const hasColorOptions = useMemo(() => {
    if (product.specifications['Color Options']) return true;
    const nameLower = product.name.toLowerCase();
    if (nameLower.includes('nozzle') || nameLower.includes('cascade') || nameLower.includes('blade')) {
      return false;
    }
    return product.category === 'pool-lighting' || product.category === 'fountain-lighting' || nameLower.includes('light');
  }, [product]);

  const [selectedColour, setSelectedColour] = useState<string>(
    hasColorOptions ? 'WW (2700–3000K)' : ''
  );

  // Gallery Handling
  const galleryImages = useMemo(() => {
    const list: { src: string; label: string }[] = [];
    const seen = new Set<string>();

    const addImg = (src: string, label: string) => {
      if (src && !seen.has(src)) {
        seen.add(src);
        list.push({ src, label });
      }
    };

    // 1. Primary image
    addImg(product.image, `${product.code} Primary`);

    // 2. Specific gallery images from dataset (Strictly product cutouts / genuine views)
    if (product.gallery && product.gallery.length > 0) {
      product.gallery.forEach((g, i) => addImg(g, `${product.code} View ${i + 1}`));
    }

    return list;
  }, [product]);

  const [mainImage, setMainImage] = useState<string>(product.image);
  const [activeThumbIndex, setActiveThumbIndex] = useState<number>(0);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);
  const thumbContainerRef = useRef<HTMLDivElement>(null);

  // Active Tab for Horizontal Sticky Navigation
  const [activeTab, setActiveTab] = useState<string>('specifications');

  // Modal & FAQ States
  const [quoteOpen, setQuoteOpen] = useState<boolean>(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Inline Enquiry Form State
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    requirements: '',
  });
  const [formLoading, setFormLoading] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState('');

  // When selected variant changes, update wattage
  useEffect(() => {
    if (wattageOptions.length > 0) {
      setSelectedWattage(wattageOptions[0]);
    }
  }, [selectedVariant, wattageOptions]);

  const handleThumbnailClick = (src: string, idx: number) => {
    setMainImage(src);
    setActiveThumbIndex(idx);
  };

  const handlePrevThumb = () => {
    const newIdx = activeThumbIndex === 0 ? galleryImages.length - 1 : activeThumbIndex - 1;
    setActiveThumbIndex(newIdx);
    setMainImage(galleryImages[newIdx].src);
    if (thumbContainerRef.current) {
      thumbContainerRef.current.scrollBy({ top: -75, behavior: 'smooth' });
    }
  };

  const handleNextThumb = () => {
    const newIdx = activeThumbIndex === galleryImages.length - 1 ? 0 : activeThumbIndex + 1;
    setActiveThumbIndex(newIdx);
    setMainImage(galleryImages[newIdx].src);
    if (thumbContainerRef.current) {
      thumbContainerRef.current.scrollBy({ top: 75, behavior: 'smooth' });
    }
  };

  const handleInlineSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    if (!formState.name.trim() || !formState.email.trim() || !formState.phone.trim()) {
      setFormError('Please enter your Name, Email, and Phone Number.');
      return;
    }
    setFormLoading(true);
    try {
      const payload = {
        name: formState.name,
        email: formState.email,
        phone: formState.phone,
        product: `${product.name} (${selectedVariant.code})`,
        specifications: `${selectedWattage || 'Standard'} ${selectedColour ? `| Colour: ${selectedColour}` : ''}`,
        requirements: formState.requirements,
      };

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setFormSuccess(true);
      } else {
        setFormError('Failed to send inquiry. Please try again or reach us via WhatsApp.');
      }
    } catch {
      setFormError('Error connecting to server. Please reach us via WhatsApp directly.');
    } finally {
      setFormLoading(false);
    }
  };

  // Derive 4 Primary Quick Specification Badges
  const quickHighlights = useMemo(() => {
    const specs = product.specifications;
    const material = specs['Body Material'] || specs['Housing'] || 'Marine-Grade Alloy';
    const wattageOrFlow = specs['Power'] || specs['Wattage'] || specs['Power / Flow'] || selectedVariant.wattage || 'Variable';
    const dimensions = specs['Available Sizes'] || specs['Sizes Available'] || specs['Dimensions'] || specs['Height'] || specs['Outer Dia'] || specs['Thread'] || selectedVariant.dimension || 'Standard Size';
    const beamOrConnection = specs['Beam Angle'] || ((specs['Available Sizes'] || specs['Sizes Available']) ? specs['Thread'] : null) || specs['Nozzle Type'] || specs['Thread'] || specs['Protection Class'] || specs['Protection Rating'] || 'IP68 Underwater';

    return [
      {
        icon: <Layers className="w-4 h-4" />,
        label: material,
        sub: 'Body Material',
      },
      {
        icon: <Zap className="w-4 h-4" />,
        label: wattageOrFlow,
        sub: specs['Wattage'] ? 'Wattage Range' : 'Power / Flow',
      },
      {
        icon: <Circle className="w-4 h-4" />,
        label: dimensions,
        sub: (specs['Available Sizes'] || specs['Sizes Available'])
          ? 'Available Sizes'
          : (specs['Dimensions'] || specs['Height'] || specs['Outer Dia'])
            ? 'Dimensions / Dia'
            : 'Connection Thread',
      },
      {
        icon: <Compass className="w-4 h-4" />,
        label: beamOrConnection || specs['Thread'] || 'Standard',
        sub: specs['Beam Angle'] ? 'Beam Angle' : specs['Thread'] ? 'Thread' : specs['Nozzle Type'] ? 'Nozzle Type' : 'Connection / Rating',
      },
    ];
  }, [product, selectedVariant]);

  // Downloads configuration
  const downloads = useMemo(() => {
    return [
      {
        title: `${product.code} Technical Datasheet`,
        description: `Complete dimensional schematics, electrical ratings, photometric performance, and mounting details for ${product.name}.`,
        file: '/assets/catalogues/Aqualuxis_Light_Catalogue_Complete.pdf',
        format: 'PDF (2.4 MB)',
        badge: 'Official Datasheet',
      },
      {
        title: 'Aqualuxis Full Product Catalogue',
        description: 'Explore our complete 83-model architectural aquatic illumination and water feature lineup.',
        file: '/assets/catalogues/Aqualuxis_Light_Catalogue_Complete.pdf',
        format: 'PDF (18.6 MB)',
        badge: 'Master Catalogue',
      },
      {
        title: 'Submersible Installation & Safety Manual',
        description: 'Professional guidance for conduit gland sealing, low-voltage transformer wiring and IP68 underwater installation.',
        file: '/assets/catalogues/Aqualuxis_Light_Catalogue_Complete.pdf',
        format: 'PDF (1.2 MB)',
        badge: 'Installation Guide',
      },
    ];
  }, [product]);

  // Dynamic Verified FAQs
  const faqs = useMemo(() => {
    const list = [
      {
        q: `What is the construction material and corrosion resistance of ${product.name}?`,
        a: `Constructed using ${product.specifications['Body Material'] || product.specifications['Housing'] || 'premium marine-grade alloys'} specifically engineered for long-term corrosion resistance in chemically treated pools and freshwater installations.`
      },
      {
        q: `What are the available wattage and sizing options?`,
        a: hasVariants 
          ? `The ${product.name} family includes models from ${variants[0]?.code} to ${variants[variants.length - 1]?.code}, supporting wattages ranging from ${variants[0]?.wattage} to ${variants[variants.length - 1]?.wattage}.`
          : `Available with standard ratings: ${product.specifications['Wattage'] || product.specifications['Power / Flow'] || 'as specified in the technical datasheet'}.`
      },
      {
        q: `What is the certified ingress protection and operating voltage?`,
        a: `Certified ${product.specifications['Protection Class'] || product.specifications['Protection Rating'] || 'IP68 waterproof for submerged operation'}. Operates on safe low voltage (12V AC/DC) with factory-potted submersible cabling.`
      },
    ];

    if (hasColorOptions) {
      list.push({
        q: `What LED colour temperatures and dynamic options are available?`,
        a: `Available in Warm White (WW 2700–3000K), Neutral White (NW 4000–4500K), Cool White (CW 6000–6500K), Red, Blue, Green, and synchronous RGB dynamic color changing modes.`
      });
    } else {
      list.push({
        q: `How is this fixture installed and plumbed?`,
        a: `Installs via standard ${product.specifications['Thread'] || product.specifications['Mounting'] || 'standard aquatic fittings'} with heavy-duty commercial threading for leak-free, long-life operation.`
      });
    }

    list.push({
      q: `How do I request formal engineering drawings, IES files, or a custom quotation?`,
      a: `Click "Request a Quote" on this page, fill out the project inquiry form below, or reach our technical sales desk directly via WhatsApp at +91 98202 85117.`
    });

    return list;
  }, [product, hasVariants, variants, hasColorOptions]);

  const relatedProducts = useMemo(() => getRelatedProducts(product.slug, 3), [product.slug]);

  // Category banner image mapping
  const bannerImage = useMemo(() => {
    if (product.category === 'pool-lighting') return '/assets/banners/banner-fountains.png';
    if (product.category === 'fountain-lighting') return '/assets/hero/hero-fountain-grand.webp';
    return '/assets/hero/hero-pool-night-luxury.webp';
  }, [product]);

  return (
    <div className="bg-white min-h-screen text-[#142C49]">
      
      {/* =========================================================================
          SECTION A – BREADCRUMB & HERO BANNER (Full-Width Master Template)
      ========================================================================= */}
      <PageBanner
        breadcrumbs={[
          { label: 'Products', href: '/products' },
          { label: product.categoryName, href: `/${product.categorySlug}` },
          { label: product.name },
        ]}
        eyebrow={`${product.categoryName.toUpperCase()} • COMMERCIAL & RESIDENTIAL`}
        title={product.name}
        description={product.shortDescription || product.description}
        imageSrc={bannerImage}
        imageAlt={`${product.name} Banner`}
      />

      {/* =========================================================================
          SECTION B – PRODUCT OVERVIEW (Two-Column Layout Matching Master Template)
      ========================================================================= */}
      <section className="py-10 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT: Product Gallery (Vertical Thumbnails + Main Image Stage) */}
          <div className="lg:col-span-6 flex flex-col-reverse sm:flex-row gap-4 items-center sm:items-start">
            
            {/* Vertical Thumbnail Strip */}
            <div className="flex sm:flex-col items-center gap-1.5 sm:gap-2 w-full sm:w-20 shrink-0">
              <button
                type="button"
                onClick={handlePrevThumb}
                className="hidden sm:flex w-full items-center justify-center py-1.5 text-[#63758B] hover:text-[#087FE5] hover:bg-[#F0F7FC] rounded-lg transition-colors cursor-pointer"
                aria-label="Previous thumbnail"
              >
                <ChevronUp className="w-4 h-4" />
              </button>

              <div
                ref={thumbContainerRef}
                className="flex sm:flex-col gap-2 overflow-x-auto sm:overflow-y-auto sm:max-h-[460px] scrollbar-none pb-1 sm:pb-0 w-full justify-start scroll-smooth"
              >
                {galleryImages.map((item, idx) => {
                  const isSelected = mainImage === item.src;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleThumbnailClick(item.src, idx)}
                      aria-label={`Select ${item.label}`}
                      className={`relative w-16 h-16 sm:w-18 sm:h-18 rounded-xl overflow-hidden border-2 shrink-0 bg-white p-1 transition-all cursor-pointer ${
                        isSelected
                          ? 'border-[#087FE5] ring-2 ring-blue-100 shadow-sm scale-102'
                          : 'border-[#CBDCEB] hover:border-[#087FE5]/60 opacity-80 hover:opacity-100'
                      }`}
                    >
                      <Image
                        src={item.src}
                        alt={item.label}
                        fill
                        className="object-contain p-1"
                      />
                    </button>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={handleNextThumb}
                className="hidden sm:flex w-full items-center justify-center py-1.5 text-[#63758B] hover:text-[#087FE5] hover:bg-[#F0F7FC] rounded-lg transition-colors cursor-pointer"
                aria-label="Next thumbnail"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            {/* Large Product Image Stage */}
            <div className="relative flex-1 w-full aspect-square rounded-3xl bg-gradient-to-br from-[#F8FBFE] via-white to-[#EEF6FC] border border-[#CBDCEB] p-6 sm:p-10 flex items-center justify-center overflow-hidden shadow-card-subtle group">
              
              {/* Zoom Button */}
              <button
                type="button"
                onClick={() => setIsZoomed(!isZoomed)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/95 hover:bg-white border border-[#CBDCEB] text-[#63758B] hover:text-[#087FE5] flex items-center justify-center shadow-xs transition-colors cursor-pointer"
                aria-label="Toggle zoom view"
              >
                <Maximize2 className="w-4 h-4" />
              </button>

              {/* Product Code Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#082B52] text-white shadow-xs">
                  {selectedVariant.code || product.code}
                </span>
              </div>

              {/* Main Cutout Image */}
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={mainImage}
                  alt={`${product.name} - ${selectedVariant.code || product.code}`}
                  fill
                  className={`object-contain p-2 transition-transform duration-500 ${
                    isZoomed ? 'scale-125' : 'group-hover:scale-105'
                  }`}
                  priority
                />
              </div>
            </div>

          </div>

          {/* RIGHT: Product Overview & Core Attributes */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Category Tag & Name */}
            <div className="space-y-2">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#EBF5FF] text-[#087FE5] border border-blue-200">
                {product.subCategory || product.categoryName}
              </span>

              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] tracking-tight leading-tight">
                {product.name}
              </h1>

              <p className="text-xs sm:text-sm text-[#5A6E85] leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* 4 Technical Attribute Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
              {quickHighlights.map((attr, idx) => (
                <div key={idx} className="bg-[#F8FBFE] border border-[#CBDCEB] rounded-2xl p-3 text-center space-y-1">
                  <div className="w-7 h-7 mx-auto rounded-lg bg-white border border-[#CBDCEB] flex items-center justify-center text-[#087FE5]">
                    {attr.icon}
                  </div>
                  <div className="text-[11px] font-bold text-[#0A2540] leading-tight truncate" title={attr.label}>
                    {attr.label}
                  </div>
                  <div className="text-[10px] text-[#63758B]">
                    {attr.sub}
                  </div>
                </div>
              ))}
            </div>

            {/* Available Colours Section (Rendered only for applicable fixtures) */}
            {hasColorOptions && (
              <div className="space-y-3 pt-3 border-t border-[#E2E8F0]">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#0A2540] uppercase tracking-wider">
                    Available Colours :
                  </span>
                  <span className="text-xs font-semibold text-[#087FE5]">
                    Selected: <strong className="text-[#0A2540]">{selectedColour}</strong>
                  </span>
                </div>

                <div className="grid grid-cols-4 sm:grid-cols-7 gap-2 sm:gap-2.5">
                  {AVAILABLE_COLOUR_OPTIONS.map((col) => {
                    const isSelected = selectedColour === col.id;
                    return (
                      <button
                        key={col.id}
                        type="button"
                        onClick={() => setSelectedColour(col.id)}
                        className={`flex flex-col items-center p-2 rounded-2xl border transition-all text-center group cursor-pointer ${
                          isSelected
                            ? 'bg-blue-50/80 border-[#087FE5] ring-2 ring-[#087FE5]/30 shadow-xs scale-102'
                            : 'bg-[#F8FBFE] border-[#CBDCEB] hover:border-[#087FE5]/60 hover:bg-white'
                        }`}
                      >
                        <div
                          className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 flex items-center justify-center transition-transform group-hover:scale-105 shadow-2xs ${
                            isSelected ? 'ring-2 ring-offset-2 ring-[#087FE5]' : ''
                          }`}
                          style={{ background: col.bg, borderColor: col.border }}
                        >
                          {isSelected && (
                            <Check className={`w-4 h-4 stroke-[3] ${col.darkCheck ? 'text-[#0A2540]' : 'text-white'}`} />
                          )}
                        </div>

                        <span className="text-xs font-bold text-[#0A2540] mt-1.5 block leading-tight">
                          {col.name}
                        </span>

                        <span className="text-[10px] text-[#63758B] mt-0.5 block font-medium leading-tight min-h-[14px]">
                          {col.temp || ''}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button
                onClick={() => setQuoteOpen(true)}
                className="flex-1 py-3.5 px-6 rounded-xl font-bold bg-[#0A2540] hover:bg-[#087FE5] text-white flex items-center justify-center space-x-2 transition-all shadow-md group cursor-pointer"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="/assets/catalogue/AQUALUXIS%20LIGHT%20CATLOGUE.pdf"
                download="AQUALUXIS LIGHT CATLOGUE.pdf"
                className="py-3.5 px-6 rounded-xl font-bold bg-white hover:bg-[#F8FBFE] text-[#142C49] border border-[#CBDCEB] flex items-center justify-center space-x-2 transition-all shadow-xs"
              >
                <Download className="w-4 h-4 text-[#087FE5]" />
                <span>Download Catalogue</span>
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION C – STICKY PAGE NAVIGATION TABS (5 Tabs with Balanced Spacing)
      ========================================================================= */}
      <nav className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-[#E2E8F0] shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-5 w-full text-xs sm:text-sm font-semibold">
            
            <button
              onClick={() => setActiveTab('specifications')}
              className={`py-4 px-2 sm:px-4 flex items-center justify-center space-x-2 sm:space-x-2.5 transition-all border-b-[3px] cursor-pointer ${
                activeTab === 'specifications'
                  ? 'border-[#087FE5] text-[#087FE5] font-bold'
                  : 'border-transparent text-[#0A2540] hover:text-[#087FE5]'
              }`}
            >
              <FileText className="w-5 h-5 shrink-0" />
              <span className="truncate">Specifications</span>
            </button>

            <button
              onClick={() => setActiveTab('models-variants')}
              className={`py-4 px-2 sm:px-4 flex items-center justify-center space-x-2 sm:space-x-2.5 transition-all border-b-[3px] cursor-pointer ${
                activeTab === 'models-variants'
                  ? 'border-[#087FE5] text-[#087FE5] font-bold'
                  : 'border-transparent text-[#0A2540] hover:text-[#087FE5]'
              }`}
            >
              <Package className="w-5 h-5 shrink-0" />
              <span className="truncate">Models & Variants</span>
            </button>

            <button
              onClick={() => setActiveTab('features')}
              className={`py-4 px-2 sm:px-4 flex items-center justify-center space-x-2 sm:space-x-2.5 transition-all border-b-[3px] cursor-pointer ${
                activeTab === 'features'
                  ? 'border-[#087FE5] text-[#087FE5] font-bold'
                  : 'border-transparent text-[#0A2540] hover:text-[#087FE5]'
              }`}
            >
              <Star className="w-5 h-5 shrink-0" />
              <span className="truncate">Features</span>
            </button>

            <button
              onClick={() => setActiveTab('applications')}
              className={`py-4 px-2 sm:px-4 flex items-center justify-center space-x-2 sm:space-x-2.5 transition-all border-b-[3px] cursor-pointer ${
                activeTab === 'applications'
                  ? 'border-[#087FE5] text-[#087FE5] font-bold'
                  : 'border-transparent text-[#0A2540] hover:text-[#087FE5]'
              }`}
            >
              <LayoutGrid className="w-5 h-5 shrink-0" />
              <span className="truncate">Applications</span>
            </button>

            <button
              onClick={() => setActiveTab('downloads')}
              className={`py-4 px-2 sm:px-4 flex items-center justify-center space-x-2 sm:space-x-2.5 transition-all border-b-[3px] cursor-pointer ${
                activeTab === 'downloads'
                  ? 'border-[#087FE5] text-[#087FE5] font-bold'
                  : 'border-transparent text-[#0A2540] hover:text-[#087FE5]'
              }`}
            >
              <Download className="w-5 h-5 shrink-0" />
              <span className="truncate">Downloads</span>
            </button>

          </div>
        </div>
      </nav>

      {/* =========================================================================
          DYNAMIC TAB CONTENT AREA – ONLY ACTIVE TAB IS DISPLAYED (Zero Scrolling)
      ========================================================================= */}
      <div className="w-full">
        
        {/* TAB 1: SPECIFICATIONS */}
        {activeTab === 'specifications' && (
          <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
              
              {/* Left: Technical Specification Table */}
              <div className="lg:col-span-7 flex flex-col h-full space-y-4">
                <h3 className="text-xl font-bold text-[#0A2540]">
                  Technical Specifications
                </h3>

                <div className="rounded-2xl border border-[#CBDCEB] overflow-hidden bg-white shadow-xs flex-1 flex flex-col justify-between">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <tbody className="divide-y divide-[#E2E8F0]">
                      <tr className="bg-[#F8FBFE]">
                        <td className="py-3 px-4 sm:px-6 font-bold text-[#0A2540] w-1/3 border-r border-[#E2E8F0]">
                          Model Designation
                        </td>
                        <td className="py-3 px-4 sm:px-6 font-mono font-bold text-[#087FE5]">
                          {selectedVariant.code || product.code}
                        </td>
                      </tr>
                      {Object.entries(product.specifications).map(([key, val], idx) => (
                        <tr key={key} className={idx % 2 === 1 ? 'bg-[#F8FBFE]' : 'bg-white'}>
                          <td className="py-3 px-4 sm:px-6 font-bold text-[#0A2540] w-1/3 border-r border-[#E2E8F0]">
                            {key}
                          </td>
                          <td className="py-3 px-4 sm:px-6 text-[#5A6E85] font-medium">
                            {val}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Right: Key Highlights with Arched Photo */}
              <div className="lg:col-span-5 flex flex-col h-full space-y-4">
                <div className="flex items-center space-x-2 text-[#0A2540]">
                  <Sparkles className="w-5 h-5 text-[#087FE5]" />
                  <h3 className="text-xl font-bold">Key Highlights</h3>
                </div>

                <div className="bg-[#F8FBFE] border border-[#CBDCEB] rounded-3xl p-6 sm:p-7 relative overflow-hidden shadow-xs flex-1 flex flex-col justify-between">
                  <div className="space-y-3.5 z-10">
                    {(product.features.length > 0 ? product.features.slice(0, 5) : [
                      `Engineered for durable ${product.specifications['Protection Class'] || 'IP68'} aquatic operation`,
                      `High-efficiency ${product.specifications['LED Chip'] || 'Power LED Edison'} technology`,
                      'Corrosion-resistant marine-grade architectural housing',
                      'Available in custom specifications and multiple beam spreads',
                      'Tested for continuous long-service aquatic submersion'
                    ]).map((highlight, idx) => (
                      <div key={idx} className="flex items-start space-x-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#087FE5] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm font-semibold text-[#142C49] leading-snug">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Decorative Arched Underwater Lighting Photo */}
                  <div className="mt-6 pt-4 border-t border-[#CBDCEB]">
                    <div className="relative h-36 w-full rounded-2xl overflow-hidden shadow-inner">
                      <Image
                        src="/assets/banners/features-pool-water.jpg"
                        alt="Submerged aquatic installation illustration"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/60 to-transparent" />
                      <span className="absolute bottom-2.5 left-3 text-[11px] font-bold text-white tracking-wide">
                        Certified Submersible Aquatic Engineering
                      </span>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 2: MODELS & VARIANTS */}
        {activeTab === 'models-variants' && (
          <div className="py-12 sm:py-16 bg-[#F8FBFE] border-b border-[#E2E8F0] animate-fadeIn">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
              
              {/* Header */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2.5 text-[#0A2540]">
                  <div className="w-8 h-8 rounded-lg bg-[#EBF5FF] border border-blue-200 flex items-center justify-center text-[#087FE5]">
                    <Package className="w-4 h-4" />
                  </div>
                  <h3 className="text-2xl font-extrabold tracking-tight">
                    Models &amp; Variants
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#5A6E85]">
                  {hasVariants 
                    ? 'Select a model from the list below to preview its dynamic specifications, sizing and wattage variations.'
                    : 'Detailed technical specification and dimensional configuration for this model.'}
                </p>
              </div>

              {hasVariants ? (
                /* Multi-Model Layout (Matching Master Template Height) */
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  
                  {/* LEFT: Selectable Model Table */}
                  <div className="lg:col-span-7 bg-white rounded-2xl border border-[#CBDCEB] shadow-xs overflow-hidden flex flex-col h-[520px]">
                    <div className="flex-1 overflow-y-auto">
                      <table className="w-full text-left text-xs sm:text-sm">
                        <thead className="bg-[#0A2540] text-white sticky top-0 z-10 text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                          <tr>
                            <th className="py-3 px-4 sm:px-6">Model No.</th>
                            <th className="py-3 px-4 sm:px-6">Wattage / Rating</th>
                            <th className="py-3 px-4 sm:px-6">Dimensions</th>
                            <th className="py-3 px-4 text-center w-12">Select</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#E2E8F0]">
                          {variants.map((v) => {
                            const isSelected = selectedVariant.code === v.code;
                            return (
                              <tr
                                key={v.code}
                                onClick={() => {
                                  setSelectedVariant(v);
                                  if (v.image) setMainImage(v.image);
                                }}
                                className={`cursor-pointer transition-colors ${
                                  isSelected
                                    ? 'bg-[#EBF5FF] font-bold text-[#087FE5]'
                                    : 'hover:bg-[#F8FBFE] text-[#142C49]'
                                }`}
                              >
                                <td className="py-3 px-4 sm:px-6">
                                  <span className="font-mono">{v.code}</span>
                                </td>
                                <td className="py-3 px-4 sm:px-6">
                                  {v.wattage}
                                </td>
                                <td className="py-3 px-4 sm:px-6">
                                  {v.dimension}
                                </td>
                                <td className="py-3 px-4 text-center">
                                  <div className={`w-4 h-4 mx-auto rounded-full border flex items-center justify-center ${
                                    isSelected
                                      ? 'border-[#087FE5] bg-[#087FE5] text-white'
                                      : 'border-[#CBDCEB] bg-white'
                                  }`}>
                                    {isSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* RIGHT: Selected Model Details Card */}
                  <div className="lg:col-span-5 bg-white rounded-2xl border border-[#CBDCEB] p-5 shadow-xs flex flex-col justify-between h-[520px]">
                    
                    {/* Top Details */}
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between pb-2 border-b border-[#E2E8F0]">
                        <h4 className="text-base sm:text-lg font-extrabold text-[#0A2540]">
                          {selectedVariant.code} – Model Details
                        </h4>
                        <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-[#087FE5] border border-blue-200">
                          {product.subCategory || 'Verified Model'}
                        </span>
                      </div>

                      {/* Model Image Stage */}
                      <div className="relative w-full h-32 sm:h-36 rounded-xl bg-[#F8FBFE] border border-[#CBDCEB] flex items-center justify-center p-3 overflow-hidden">
                        <Image
                          src={selectedVariant.image || product.image}
                          alt={`${selectedVariant.code} visual`}
                          fill
                          className="object-contain p-2"
                        />
                      </div>

                      {/* Dynamic Specs List */}
                      <div className="space-y-1 text-xs sm:text-sm">
                        <div className="flex items-center justify-between py-1 border-b border-[#F0F7FC]">
                          <span className="font-bold text-[#63758B]">Wattage / Rating</span>
                          <span className="font-bold text-[#0A2540]">: {selectedVariant.wattage}</span>
                        </div>
                        <div className="flex items-center justify-between py-1 border-b border-[#F0F7FC]">
                          <span className="font-bold text-[#63758B]">Dimensions</span>
                          <span className="font-bold text-[#0A2540]">: {selectedVariant.dimension}</span>
                        </div>
                        {selectedVariant.ledChip && (
                          <div className="flex items-center justify-between py-1 border-b border-[#F0F7FC]">
                            <span className="font-bold text-[#63758B]">LED Chip</span>
                            <span className="font-semibold text-[#0A2540]">: {selectedVariant.ledChip}</span>
                          </div>
                        )}
                        <div className="flex items-center justify-between py-1 border-b border-[#F0F7FC]">
                          <span className="font-bold text-[#63758B]">Body Material</span>
                          <span className="font-semibold text-[#0A2540]">: {product.specifications['Body Material'] || product.specifications['Housing'] || 'Marine-Grade SS'}</span>
                        </div>
                        {(product.specifications['Protection Class'] || product.specifications['Protection Rating']) && (
                          <div className="flex items-center justify-between py-1 border-b border-[#F0F7FC]">
                            <span className="font-bold text-[#63758B]">Protection Class</span>
                            <span className="font-semibold text-[#0A2540]">: {product.specifications['Protection Class'] || product.specifications['Protection Rating']}</span>
                          </div>
                        )}
                      </div>

                      {/* Wattage Variations Selector */}
                      {wattageOptions.length > 1 && (
                        <div className="space-y-1 pt-0.5">
                          <span className="text-[10px] font-bold text-[#63758B] uppercase tracking-wider block">
                            Select Wattage Variation:
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {wattageOptions.map(watt => (
                              <button
                                key={watt}
                                onClick={() => setSelectedWattage(watt)}
                                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                                  selectedWattage === watt
                                    ? 'bg-[#087FE5] text-white shadow-xs'
                                    : 'bg-[#F0F7FC] text-[#142C49] border border-[#CBDCEB] hover:bg-[#E2EDF5]'
                                }`}
                              >
                                {watt}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-2.5 pt-3 border-t border-[#F0F7FC]">
                      <button
                        onClick={() => setQuoteOpen(true)}
                        className="flex-1 py-2.5 px-3.5 rounded-xl font-bold bg-[#0A2540] hover:bg-[#087FE5] text-white flex items-center justify-center space-x-1.5 transition-all shadow-xs text-xs sm:text-sm cursor-pointer"
                      >
                        <span>Add to Quote +</span>
                      </button>
                      <button
                        onClick={() => setActiveTab('specifications')}
                        className="py-2.5 px-3.5 rounded-xl font-bold bg-white border border-[#CBDCEB] hover:bg-[#F8FBFE] text-[#142C49] flex items-center justify-center space-x-1 transition-all text-xs sm:text-sm cursor-pointer"
                      >
                        <span>View Specifications ↓</span>
                      </button>
                    </div>

                  </div>

                </div>
              ) : (
                /* Single Model Card for Single-SKU Products (Nozzles/Washers) */
                <div className="bg-white rounded-3xl border border-[#CBDCEB] p-6 sm:p-8 shadow-xs max-w-4xl mx-auto space-y-6">
                  <div className="flex flex-col sm:flex-row items-center gap-6">
                    <div className="relative w-44 h-44 rounded-2xl bg-[#F8FBFE] border border-[#CBDCEB] flex items-center justify-center p-4 shrink-0 overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                    <div className="space-y-3 flex-1">
                      <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-blue-50 text-[#087FE5] border border-blue-200">
                        {product.code}
                      </span>
                      <h4 className="text-xl font-bold text-[#0A2540]">
                        {product.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#5A6E85]">
                        {product.description}
                      </p>
                      <div className="flex flex-wrap gap-3 pt-2">
                        <button
                          onClick={() => setQuoteOpen(true)}
                          className="py-2.5 px-5 rounded-xl font-bold bg-[#0A2540] hover:bg-[#087FE5] text-white text-xs sm:text-sm transition-all shadow-xs cursor-pointer"
                        >
                          Request Quotation for {product.code}
                        </button>
                        <button
                          onClick={() => setActiveTab('specifications')}
                          className="py-2.5 px-5 rounded-xl font-bold bg-white border border-[#CBDCEB] hover:bg-[#F8FBFE] text-[#142C49] text-xs sm:text-sm transition-all cursor-pointer"
                        >
                          View Full Specifications
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        )}

        {/* TAB 3: FEATURES */}
        {activeTab === 'features' && (
          <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 animate-fadeIn">
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-[#0A2540]">
                <Star className="w-5 h-5 text-[#087FE5]" />
                <h3 className="text-2xl font-extrabold tracking-tight">Features &amp; Engineering</h3>
              </div>
              <p className="text-xs sm:text-sm text-[#5A6E85]">
                Engineered specifically for demanding commercial and residential aquatic installations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(product.features.length > 0 ? product.features : [
                "Hermetically sealed submersible construction for maximum safety",
                "High-performance optical clarity and thermal dissipation",
                "Certified IP68 / IP65 water ingress protection",
                "Marine-grade corrosion resistant stainless steel or alloy housing",
                "Compatible with standard low-voltage 12V/24V safety controllers",
                "Long operational service life with low maintenance requirements"
              ]).map((feat, idx) => (
                <div key={idx} className="bg-[#F8FBFE] border border-[#CBDCEB] rounded-2xl p-6 space-y-3 hover:border-[#087FE5] transition-all group">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#CBDCEB] flex items-center justify-center text-[#087FE5] group-hover:bg-[#087FE5] group-hover:text-white transition-colors">
                    {idx % 6 === 0 && <ShieldCheck className="w-5 h-5" />}
                    {idx % 6 === 1 && <Layers className="w-5 h-5" />}
                    {idx % 6 === 2 && <Zap className="w-5 h-5" />}
                    {idx % 6 === 3 && <Disc className="w-5 h-5" />}
                    {idx % 6 === 4 && <Compass className="w-5 h-5" />}
                    {idx % 6 === 5 && <Cpu className="w-5 h-5" />}
                  </div>
                  <h4 className="text-sm font-bold text-[#0A2540]">
                    Feature {idx + 1}
                  </h4>
                  <p className="text-xs text-[#5A6E85] leading-relaxed">
                    {feat}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: APPLICATIONS */}
        {activeTab === 'applications' && (
          <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 animate-fadeIn">
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-[#0A2540]">
                <LayoutGrid className="w-5 h-5 text-[#087FE5]" />
                <h3 className="text-2xl font-extrabold tracking-tight">Applications</h3>
              </div>
              <p className="text-xs sm:text-sm text-[#5A6E85]">
                Versatile aquatic installation venues engineered for high-performance durability.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {getProductApplications(product.slug).map((app, idx) => (
                <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-[#CBDCEB] shadow-xs group hover:shadow-md transition-all">
                  <div className="relative h-44 w-full overflow-hidden">
                    <Image
                      src={app.image}
                      alt={app.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-3 text-xs font-bold text-white">
                      {app.title}
                    </span>
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-[#5A6E85] leading-snug">
                      {app.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: DOWNLOADS */}
        {activeTab === 'downloads' && (
          <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 animate-fadeIn">
            <div className="space-y-1.5">
              <div className="flex items-center space-x-2 text-[#0A2540]">
                <Download className="w-5 h-5 text-[#087FE5]" />
                <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">Product Documentation &amp; Downloads</h3>
              </div>
              <p className="text-xs sm:text-sm text-[#5A6E85]">
                Access the official Aqualuxis Light product catalogue and explore our complete product range.
              </p>
            </div>

            {/* Premium Horizontal Download Panel */}
            <div className="relative bg-white border border-[#CBDCEB] rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xs overflow-hidden">
              {/* Subtle architectural background wave */}
              <div className="absolute right-0 top-0 bottom-0 w-96 pointer-events-none opacity-40 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#087FE5]/15 via-[#CBDCEB]/20 to-transparent" />

              <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-8">
                
                {/* LEFT AREA – DOCUMENT IDENTITY */}
                <div className="flex items-start sm:items-center space-x-4 sm:space-x-5 flex-1 min-w-0">
                  {/* Styled PDF Icon Container */}
                  <div className="relative w-16 h-18 sm:w-20 sm:h-22 rounded-2xl bg-gradient-to-b from-[#E0F2FE] via-[#BAE6FD]/40 to-[#E0F2FE] border border-[#BAE6FD] flex items-center justify-center shrink-0 shadow-xs overflow-hidden group">
                    <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-[#087FE5]/15 to-transparent" />
                    <div className="relative w-9 h-11 sm:w-10 sm:h-12 bg-white rounded-md shadow-xs border border-slate-200 flex flex-col justify-between p-1 sm:p-1.5">
                      <div className="w-4 h-1 bg-slate-300 rounded-full" />
                      <div className="space-y-0.5">
                        <div className="w-6 h-0.5 bg-slate-200 rounded-full" />
                        <div className="w-4 h-0.5 bg-slate-200 rounded-full" />
                      </div>
                      <div className="bg-[#EF4444] text-white text-[8px] sm:text-[9px] font-black tracking-wider text-center py-0.5 rounded-[3px] uppercase">
                        PDF
                      </div>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-1.5 min-w-0">
                    <span className="inline-block text-[10px] sm:text-[11px] font-mono font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-[#E0F2FE] text-[#087FE5] border border-[#BAE6FD]">
                      OFFICIAL PRODUCT CATALOGUE
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-[#0A2540] leading-snug">
                      Aqualuxis Light – Complete Product Catalogue
                    </h4>
                    <p className="text-xs sm:text-sm text-[#5A6E85] leading-relaxed max-w-xl">
                      Explore our complete collection of underwater swimming pool lights, fountain lighting, LED wall washers, fountain nozzles and water features.
                    </p>
                  </div>
                </div>

                {/* MIDDLE AREA – DOCUMENT INFORMATION */}
                <div className="lg:border-l lg:border-[#E2E8F0] lg:pl-8 py-1 flex flex-col justify-center space-y-2.5 text-xs shrink-0">
                  <div className="flex items-center space-x-2.5">
                    <FileText className="w-4 h-4 text-[#087FE5] shrink-0" />
                    <span className="text-[#63758B] min-w-[70px]">File Format:</span>
                    <span className="font-bold text-[#0A2540]">PDF</span>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <Layers className="w-4 h-4 text-[#087FE5] shrink-0" />
                    <span className="text-[#63758B] min-w-[70px]">File Name:</span>
                    <span className="font-bold text-[#0A2540] font-mono text-[11px] sm:text-xs">AQUALUXIS LIGHT CATLOGUE.pdf</span>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <HardDrive className="w-4 h-4 text-[#087FE5] shrink-0" />
                    <span className="text-[#63758B] min-w-[70px]">File Size:</span>
                    <span className="font-bold text-[#0A2540]">10.5 MB</span>
                  </div>
                </div>

                {/* RIGHT AREA – DOWNLOAD ACTION */}
                <div className="lg:border-l lg:border-[#E2E8F0] lg:pl-8 flex items-center shrink-0">
                  <a
                    href="/assets/catalogue/AQUALUXIS%20LIGHT%20CATLOGUE.pdf"
                    download="AQUALUXIS LIGHT CATLOGUE.pdf"
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-6 py-3.5 rounded-xl bg-[#084B82] hover:bg-[#0A2540] text-white font-bold text-sm transition-all shadow-xs hover:shadow-md cursor-pointer shrink-0 whitespace-nowrap"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Catalogue</span>
                  </a>
                </div>

              </div>
            </div>
          </div>
        )}

      </div>

      {/* =========================================================================
          SECTION I – FREQUENTLY ASKED QUESTIONS (Accordion Master Template)
      ========================================================================= */}
      <section className="py-12 sm:py-16 bg-[#F8FBFE] border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="space-y-2">
            <h3 className="text-2xl font-extrabold text-[#0A2540] tracking-tight">
              Frequently Asked Questions
            </h3>
            <p className="text-xs sm:text-sm text-[#5A6E85]">
              Quick answers to common questions about {product.name}.
            </p>
          </div>

          <div className="space-y-3 max-w-4xl">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-[#CBDCEB] overflow-hidden transition-all shadow-2xs"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full py-4 px-6 text-left flex items-center justify-between space-x-4 cursor-pointer hover:bg-[#F8FBFE] transition-colors"
                  >
                    <span className="text-xs sm:text-sm font-bold text-[#0A2540]">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#087FE5] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-4 pt-1 text-xs sm:text-sm text-[#5A6E85] leading-relaxed border-t border-[#F0F7FC]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION J – EXPLORE RELATED PRODUCTS (Matching Master Template)
      ========================================================================= */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex items-center space-x-2 text-[#0A2540]">
          <Layers className="w-5 h-5 text-[#087FE5]" />
          <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
            Explore Related Products
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {relatedProducts.map((rel, idx) => (
            <Link
              key={idx}
              href={`/products/${rel.slug}`}
              className="bg-white border border-[#CBDCEB] hover:border-[#087FE5] rounded-3xl p-5 flex items-center space-x-4 group transition-all shadow-xs hover:shadow-md"
            >
              <div className="relative w-20 h-20 rounded-2xl bg-[#F8FBFE] border border-[#CBDCEB] flex items-center justify-center p-2 shrink-0 overflow-hidden">
                <Image
                  src={rel.image}
                  alt={rel.name}
                  fill
                  className="object-contain p-1.5 group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="min-w-0 flex-1 space-y-1">
                <h4 className="text-xs sm:text-sm font-bold text-[#0A2540] group-hover:text-[#087FE5] transition-colors leading-snug truncate">
                  {rel.name}
                </h4>
                <span className="text-[10px] font-mono font-semibold text-[#63758B] block">
                  {rel.code}
                </span>
                <span className="text-xs font-bold text-[#087FE5] flex items-center space-x-1 pt-1">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION K – ENQUIRY & WHATSAPP CONSULTATION (Master Template)
      ========================================================================= */}
      <section className="py-12 sm:py-16 bg-[#0A2540] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Direct WhatsApp Contact */}
            <div className="lg:col-span-6 space-y-4">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-[#20C7E8] border border-white/10">
                Direct Engineering Consultation
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Request Specifications or Customized Quotation
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
                Need photometric layouts, cable length customizations, or bulk wholesale pricing? Our technical team provides fast project turnarounds.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href={`https://wa.me/919820285117?text=${encodeURIComponent(`Hello Aqualuxis Light, I am inquiring about model ${selectedVariant.code || product.code} (${selectedWattage || 'Standard'}${selectedColour ? `, ${selectedColour}` : ''}) for ${product.name}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-5 rounded-xl font-bold bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center space-x-2 text-xs sm:text-sm transition-all shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Enquiry (+91 98202 85117)</span>
                </a>

                <a
                  href="tel:+919820285117"
                  className="py-3 px-5 rounded-xl font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 flex items-center space-x-2 text-xs sm:text-sm transition-all"
                >
                  <PhoneCall className="w-4 h-4 text-[#20C7E8]" />
                  <span>Call Technical Sales</span>
                </a>
              </div>
            </div>

            {/* Right Column: Fast Quote Form with Selected Model */}
            <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 text-[#142C49] shadow-2xl">
              <h4 className="text-lg font-bold text-[#0A2540] mb-1">
                Project Quote Request
              </h4>
              <p className="text-xs text-[#63758B] mb-4">
                Pre-populated for model: <strong className="text-[#087FE5]">{selectedVariant.code || product.code}</strong> {selectedWattage ? `(${selectedWattage})` : ''} {selectedColour ? `(${selectedColour})` : ''}
              </p>

              {formSuccess ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h5 className="font-bold text-emerald-900">Enquiry Submitted!</h5>
                  <p className="text-xs text-emerald-700">
                    Thank you! Our lighting engineering team will respond within 2-4 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleInlineSubmit} className="space-y-3 text-xs">
                  {formError && (
                    <div className="p-2.5 rounded-xl bg-red-50 text-red-700 border border-red-200 text-xs">
                      {formError}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-semibold mb-1 text-[#0A2540]">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={e => setFormState({ ...formState, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-3 py-2 rounded-xl border border-[#CBDCEB] focus:outline-none focus:border-[#087FE5] bg-[#F8FBFE]"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold mb-1 text-[#0A2540]">Phone / Mobile *</label>
                      <input
                        type="tel"
                        required
                        value={formState.phone}
                        onChange={e => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="+91 98200 00000"
                        className="w-full px-3 py-2 rounded-xl border border-[#CBDCEB] focus:outline-none focus:border-[#087FE5] bg-[#F8FBFE]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold mb-1 text-[#0A2540]">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={e => setFormState({ ...formState, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full px-3 py-2 rounded-xl border border-[#CBDCEB] focus:outline-none focus:border-[#087FE5] bg-[#F8FBFE]"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold mb-1 text-[#0A2540]">Selected Luminaire Configuration</label>
                    <input
                      type="text"
                      readOnly
                      value={`${product.name} | ${selectedVariant.code || product.code} ${selectedWattage ? `- ${selectedWattage}` : ''} ${selectedColour ? `- ${selectedColour}` : ''}`}
                      className="w-full px-3 py-2 rounded-xl border border-[#CBDCEB] bg-[#F0F7FC] text-[#087FE5] font-bold cursor-not-allowed"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold mb-1 text-[#0A2540]">Project Details / Quantities</label>
                    <textarea
                      rows={2}
                      value={formState.requirements}
                      onChange={e => setFormState({ ...formState, requirements: e.target.value })}
                      placeholder="e.g. 12 units required for aquatic installation"
                      className="w-full px-3 py-2 rounded-xl border border-[#CBDCEB] focus:outline-none focus:border-[#087FE5] bg-[#F8FBFE]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formLoading}
                    className="w-full py-3 rounded-xl font-bold bg-[#087FE5] hover:bg-[#076bc2] text-white flex items-center justify-center space-x-2 transition-all shadow-md cursor-pointer"
                  >
                    {formLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Request...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Project Enquiry</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>

          </div>
        </div>
      </section>

      {/* Quote Modal */}
      <QuoteModal
        isOpen={quoteOpen}
        onClose={() => setQuoteOpen(false)}
        defaultProduct={`${product.name} - ${selectedVariant.code || product.code} (${selectedWattage || 'Standard'}${selectedColour ? `, ${selectedColour}` : ''})`}
      />

    </div>
  );
}
