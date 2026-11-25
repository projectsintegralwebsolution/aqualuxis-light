'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ChevronLeft,
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
import QuoteModal from '@/components/QuoteModal';
import PageBanner from '@/components/PageBanner';
import {
  SURFACE_POOL_LIGHT_FAMILY,
  SURFACE_POOL_MODELS,
  SurfacePoolModel,
  getSurfacePoolModel
} from '@/data/surfacePoolLightModels';

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

export default function SurfacePoolLightDetail() {
  const family = SURFACE_POOL_LIGHT_FAMILY;
  
  // Selected Model State (defaults to AL03 as per Screenshot 2)
  const [selectedModel, setSelectedModel] = useState<SurfacePoolModel>(
    () => getSurfacePoolModel('AL03')
  );

  // Selected Options within the model
  const [selectedWattage, setSelectedWattage] = useState<string>(
    selectedModel.wattageOptions[0] || '9 Watt'
  );
  const [selectedColour, setSelectedColour] = useState<string>('WW (2700–3000K)');

  // Main Image Gallery Stage
  const [mainImage, setMainImage] = useState<string>(selectedModel.image);
  const [activeThumbIndex, setActiveThumbIndex] = useState<number>(0);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);
  const thumbContainerRef = useRef<HTMLDivElement>(null);

  // Active Tab for Sticky Navigation
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

  // Verified Product Images for the vertical thumbnail gallery (AL00–AL015 Family)
  const galleryImages = [
    {
      src: '/assets/products/al03-surface-pool-light.jpg',
      label: 'AL03 (5")',
    },
    {
      src: '/assets/products/al01-surface-pool-light.jpg',
      label: 'AL01 (3")',
    },
    {
      src: '/assets/products/al02-surface-pool-light.jpg',
      label: 'AL02 (4")',
    },
    {
      src: '/assets/products/al04-surface-pool-light.jpg',
      label: 'AL04 (5")',
    },
    {
      src: '/assets/products/al05-surface-pool-light.jpg',
      label: 'AL05 (6")',
    },
    {
      src: '/assets/products/al00-surface-pool-light-profile.jpg',
      label: 'Side Profile',
    },
    {
      src: '/assets/products/al00-surface-pool-light-rear.jpg',
      label: 'Mounting Base',
    },
    {
      src: '/assets/products/al00-surface-pool-light-side-angle.jpg',
      label: 'Side Angle with Cable',
    },
    {
      src: '/assets/products/al00-surface-pool-light-front-view.jpg',
      label: 'Front View with Cable',
    },
  ];

  // When selectedModel changes, update main image and wattage
  useEffect(() => {
    setMainImage(selectedModel.image);
    setSelectedWattage(selectedModel.wattageOptions[0] || selectedModel.wattage);
    const foundIdx = galleryImages.findIndex(g => g.src === selectedModel.image);
    setActiveThumbIndex(foundIdx !== -1 ? foundIdx : 0);
  }, [selectedModel]);

  const handleThumbnailClick = (img: string, idx: number) => {
    setMainImage(img);
    setActiveThumbIndex(idx);
  };

  const handlePrevImage = () => {
    if (galleryImages.length <= 1) return;
    const currentIdx = galleryImages.findIndex((img) => img.src === mainImage);
    const effectiveIdx = currentIdx !== -1 ? currentIdx : activeThumbIndex;
    const newIdx = effectiveIdx === 0 ? galleryImages.length - 1 : effectiveIdx - 1;
    setActiveThumbIndex(newIdx);
    setMainImage(galleryImages[newIdx].src);
    if (thumbContainerRef.current) {
      const thumbButtons = thumbContainerRef.current.querySelectorAll('button');
      if (thumbButtons[newIdx]) {
        thumbButtons[newIdx].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
      }
    }
  };

  const handleNextImage = () => {
    if (galleryImages.length <= 1) return;
    const currentIdx = galleryImages.findIndex((img) => img.src === mainImage);
    const effectiveIdx = currentIdx !== -1 ? currentIdx : activeThumbIndex;
    const newIdx = effectiveIdx === galleryImages.length - 1 ? 0 : effectiveIdx + 1;
    setActiveThumbIndex(newIdx);
    setMainImage(galleryImages[newIdx].src);
    if (thumbContainerRef.current) {
      const thumbButtons = thumbContainerRef.current.querySelectorAll('button');
      if (thumbButtons[newIdx]) {
        thumbButtons[newIdx].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
      }
    }
  };

  const handlePrevThumb = handlePrevImage;
  const handleNextThumb = handleNextImage;

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
        productOrCategory: `${selectedModel.code} - Surface Model Pool Light (${selectedWattage}, ${selectedColour})`,
        message: formState.requirements || 'Requested quotation for Surface Model Swimming Pool Light.',
      };
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setFormSuccess(true);
      } else {
        setFormError(data.message || 'Error submitting enquiry. Please contact us on WhatsApp.');
      }
    } catch {
      setFormError('Error connecting to server. Please reach us via WhatsApp directly.');
    } finally {
      setFormLoading(false);
    }
  };

  return (
    <div className="bg-white min-h-screen text-[#142C49]">
      
      {/* =========================================================================
          SECTION A – BREADCRUMB & HERO BANNER (Restored Previous Full-Width Navy Design)
      ========================================================================= */}
      <PageBanner
        breadcrumbs={[
          { label: 'Products', href: '/products' },
          { label: 'Swimming Pool Lights', href: '/products' },
          { label: 'Surface Model Swimming Pool Light' },
        ]}
        eyebrow="COMMERCIAL & RESIDENTIAL AQUATIC APPLICATIONS"
        title="Surface Model Swimming Pool Light"
        description="High-performance surface mounted swimming pool lights designed for durability, efficient illumination and reliable underwater performance. All luminaires are IP68 certified and rated for continuous submerged operation."
        imageSrc="/assets/banners/banner-fountains.png"
        imageAlt="Surface Model Swimming Pool Light Banner"
      />

      {/* =========================================================================
          SECTION B – PRODUCT OVERVIEW (Two-Column Layout Matching Screenshot 1 & 2)
      ========================================================================= */}
      <section className="py-10 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT: Product Gallery (Vertical Thumbnails + Main Image) */}
          <div className="lg:col-span-6 flex flex-col-reverse sm:flex-row gap-4 items-center sm:items-start">
            
            {/* Vertical Thumbnail Strip (8 Verified Images AL00–AL015 + Navigation) */}
            <div className="flex sm:flex-col items-center gap-1.5 sm:gap-2 w-full sm:w-20 shrink-0">
              <button
                type="button"
                onClick={handlePrevThumb}
                className="hidden sm:flex w-full items-center justify-center py-1.5 text-[#63758B] hover:text-[#087FE5] hover:bg-[#F0F7FC] rounded-lg transition-colors"
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
                      className={`relative w-16 h-16 sm:w-18 sm:h-18 rounded-xl overflow-hidden border-2 shrink-0 bg-white p-1 transition-all ${
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
                className="hidden sm:flex w-full items-center justify-center py-1.5 text-[#63758B] hover:text-[#087FE5] hover:bg-[#F0F7FC] rounded-lg transition-colors"
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
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/95 hover:bg-white border border-[#CBDCEB] text-[#63758B] hover:text-[#087FE5] flex items-center justify-center shadow-xs transition-colors"
                aria-label="Toggle zoom view"
              >
                <Maximize2 className="w-4 h-4" />
              </button>

              {/* Previous & Next Navigation Buttons */}
              {galleryImages.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={handlePrevImage}
                    aria-label="Previous product image"
                    className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/95 hover:bg-white border border-[#CBDCEB] text-[#556987] hover:text-[#087FE5] flex items-center justify-center shadow-sm hover:shadow-md transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#087FE5]/30 active:scale-95"
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNextImage}
                    aria-label="Next product image"
                    className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/95 hover:bg-white border border-[#CBDCEB] text-[#556987] hover:text-[#087FE5] flex items-center justify-center shadow-sm hover:shadow-md transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#087FE5]/30 active:scale-95"
                  >
                    <ChevronRight className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                  </button>
                </>
              )}

              {/* Main Cutout Image */}
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={mainImage}
                  alt={`${selectedModel.code} Surface Swimming Pool Light`}
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
                {family.categoryName}
              </span>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] tracking-tight leading-tight">
                {family.fullName}
              </h2>

              <p className="text-xs sm:text-sm text-[#5A6E85] leading-relaxed">
                {family.description}
              </p>
            </div>

            {/* 4 Technical Attribute Cards (Grid Layout from Screenshot 1 & 2) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
              {/* Card 1: Body */}
              <div className="bg-[#F8FBFE] border border-[#CBDCEB] rounded-2xl p-3 text-center space-y-1">
                <div className="w-7 h-7 mx-auto rounded-lg bg-white border border-[#CBDCEB] flex items-center justify-center text-[#087FE5]">
                  <Layers className="w-4 h-4" />
                </div>
                <div className="text-[11px] font-bold text-[#0A2540] leading-tight">
                  SS 304/306 / Aluminium
                </div>
                <div className="text-[10px] text-[#63758B]">
                  Body Material
                </div>
              </div>

              {/* Card 2: Wattage Range */}
              <div className="bg-[#F8FBFE] border border-[#CBDCEB] rounded-2xl p-3 text-center space-y-1">
                <div className="w-7 h-7 mx-auto rounded-lg bg-white border border-[#CBDCEB] flex items-center justify-center text-[#087FE5]">
                  <Zap className="w-4 h-4" />
                </div>
                <div className="text-[11px] font-bold text-[#0A2540] leading-tight">
                  3 – 36 Watt
                </div>
                <div className="text-[10px] text-[#63758B]">
                  (Wattage Range)
                </div>
              </div>

              {/* Card 3: Diameter */}
              <div className="bg-[#F8FBFE] border border-[#CBDCEB] rounded-2xl p-3 text-center space-y-1">
                <div className="w-7 h-7 mx-auto rounded-lg bg-white border border-[#CBDCEB] flex items-center justify-center text-[#087FE5]">
                  <Circle className="w-4 h-4" />
                </div>
                <div className="text-[11px] font-bold text-[#0A2540] leading-tight">
                  Ø 3" – 6"
                </div>
                <div className="text-[10px] text-[#63758B]">
                  (Diameter)
                </div>
              </div>

              {/* Card 4: Beam Angle */}
              <div className="bg-[#F8FBFE] border border-[#CBDCEB] rounded-2xl p-3 text-center space-y-1">
                <div className="w-7 h-7 mx-auto rounded-lg bg-white border border-[#CBDCEB] flex items-center justify-center text-[#087FE5]">
                  <Compass className="w-4 h-4" />
                </div>
                <div className="text-[11px] font-bold text-[#0A2540] leading-tight">
                  10° – 90°
                </div>
                <div className="text-[10px] text-[#63758B]">
                  (Beam Angle)
                </div>
              </div>
            </div>

            {/* Available Colours Section (Redesigned with Clear Swatches, Names & Temperatures) */}
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

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button
                onClick={() => setQuoteOpen(true)}
                className="flex-1 py-3.5 px-6 rounded-xl font-bold bg-[#0A2540] hover:bg-[#087FE5] text-white flex items-center justify-center space-x-2 transition-all shadow-md group"
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
          DYNAMIC TAB CONTENT AREA – ONLY ACTIVE TAB IS DISPLAYED
      ========================================================================= */}
      <div className="w-full">
        {/* TAB 1: SPECIFICATIONS */}
        {activeTab === 'specifications' && (
          <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
              
              {/* Left: Technical Specification Table */}
              <div className="lg:col-span-7 flex flex-col h-full space-y-4">
                <h3 className="text-xl font-bold text-[#0A2540]">
                  Technical Specifications
                </h3>

                <div className="rounded-2xl border border-[#CBDCEB] overflow-hidden bg-white shadow-xs flex-1 flex flex-col justify-between">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <tbody className="divide-y divide-[#E2E8F0]">
                      {Object.entries(family.commonSpecifications).map(([key, val], idx) => (
                        <tr key={key} className={idx % 2 === 0 ? 'bg-[#F8FBFE]' : 'bg-white'}>
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

              {/* Right: Key Highlights with Arched Photo (Matching Reference) */}
              <div className="lg:col-span-5 flex flex-col h-full space-y-4">
                <div className="flex items-center space-x-2 text-[#0A2540]">
                  <Sparkles className="w-5 h-5 text-[#087FE5]" />
                  <h3 className="text-xl font-bold">Key Highlights</h3>
                </div>

                <div className="bg-[#F8FBFE] border border-[#CBDCEB] rounded-3xl p-6 sm:p-7 relative overflow-hidden shadow-xs flex-1 flex flex-col justify-between">
                  <div className="space-y-3.5 z-10">
                    {family.keyHighlights.map((highlight, idx) => (
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
                        alt="Submerged pool lighting illustration"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/60 to-transparent" />
                      <span className="absolute bottom-2.5 left-3 text-[11px] font-bold text-white tracking-wide">
                        Certified IP68 Submersible Luminaires
                      </span>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 2: MODELS & VARIANTS (MOST IMPORTANT - Interactive Table & Card) */}
        {activeTab === 'models-variants' && (
          <div className="py-12 sm:py-16 bg-[#F8FBFE] border-b border-[#E2E8F0]">
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
                  Select a model to view its details, image and specifications.
                </p>
              </div>

              {/* Interactive Models Grid (Table on Left, Selected Details on Right) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                
                {/* LEFT: All 16 Models Interactive Table */}
                <div className="lg:col-span-7 bg-white rounded-2xl border border-[#CBDCEB] shadow-xs overflow-hidden flex flex-col h-[520px]">
                  <div className="flex-1 overflow-y-auto">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead className="bg-[#0A2540] text-white sticky top-0 z-10 text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                        <tr>
                          <th className="py-3 px-4 sm:px-6">Model No.</th>
                          <th className="py-3 px-4 sm:px-6">Wattage</th>
                          <th className="py-3 px-4 sm:px-6">Diameter (Dia)</th>
                          <th className="py-3 px-4 text-center w-12">Select</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#E2E8F0]">
                        {SURFACE_POOL_MODELS.map((model) => {
                          const isSelected = selectedModel.code === model.code;
                          return (
                            <tr
                              key={model.code}
                              onClick={() => setSelectedModel(model)}
                              className={`cursor-pointer transition-colors ${
                                isSelected
                                  ? 'bg-[#EBF5FF] font-bold text-[#087FE5]'
                                  : 'hover:bg-[#F8FBFE] text-[#142C49]'
                              }`}
                            >
                              <td className="py-3 px-4 sm:px-6">
                                <span className="font-mono">{model.code}</span>
                              </td>
                              <td className="py-3 px-4 sm:px-6">
                                {model.wattage}
                              </td>
                              <td className="py-3 px-4 sm:px-6">
                                {model.diameter}
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

                {/* RIGHT: Selected Model Details Card (Screenshot 2) */}
                <div className="lg:col-span-5 bg-white rounded-2xl border border-[#CBDCEB] p-5 shadow-xs flex flex-col justify-between h-[520px]">
                  
                  {/* Top Details Section */}
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between pb-2 border-b border-[#E2E8F0]">
                      <h4 className="text-base sm:text-lg font-extrabold text-[#0A2540]">
                        {selectedModel.code} – Model Details
                      </h4>
                      <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-[#087FE5] border border-blue-200">
                        Surface Mount
                      </span>
                    </div>

                    {/* Model Image Stage */}
                    <div className="relative w-full h-32 sm:h-36 rounded-xl bg-[#F8FBFE] border border-[#CBDCEB] flex items-center justify-center p-3 overflow-hidden">
                      <Image
                        src={selectedModel.image}
                        alt={`${selectedModel.code} product visual`}
                        fill
                        className="object-contain p-2"
                      />
                    </div>

                    {/* Dynamic Specs List */}
                    <div className="space-y-1 text-xs sm:text-sm">
                      <div className="flex items-center justify-between py-1 border-b border-[#F0F7FC]">
                        <span className="font-bold text-[#63758B]">Wattage</span>
                        <span className="font-bold text-[#0A2540]">: {selectedModel.wattage}</span>
                      </div>
                      <div className="flex items-center justify-between py-1 border-b border-[#F0F7FC]">
                        <span className="font-bold text-[#63758B]">Diameter</span>
                        <span className="font-bold text-[#0A2540]">: {selectedModel.diameter}</span>
                      </div>
                      <div className="flex items-center justify-between py-1 border-b border-[#F0F7FC]">
                        <span className="font-bold text-[#63758B]">Body Material</span>
                        <span className="font-semibold text-[#0A2540]">: {selectedModel.bodyMaterial}</span>
                      </div>
                      <div className="flex items-center justify-between py-1 border-b border-[#F0F7FC]">
                        <span className="font-bold text-[#63758B]">Thickness</span>
                        <span className="font-semibold text-[#0A2540]">: {selectedModel.thickness}</span>
                      </div>
                    </div>

                    {/* Wattage Variations Selector if available */}
                    {selectedModel.wattageOptions.length > 1 && (
                      <div className="space-y-1 pt-0.5">
                        <span className="text-[10px] font-bold text-[#63758B] uppercase tracking-wider block">
                          Select Wattage Variation:
                        </span>
                        <div className="flex gap-2">
                          {selectedModel.wattageOptions.map(watt => (
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

            </div>
          </div>
        )}

        {/* TAB 3: FEATURES (Verified Product Characteristics) */}
        {activeTab === 'features' && (
          <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-[#0A2540]">
                <Star className="w-5 h-5 text-[#087FE5]" />
                <h3 className="text-2xl font-extrabold tracking-tight">Features &amp; Engineering</h3>
              </div>
              <p className="text-xs sm:text-sm text-[#5A6E85]">
                Engineered specifically for continuous underwater submersion in demanding aquatic environments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {family.features.map((feat, idx) => (
                <div key={idx} className="bg-[#F8FBFE] border border-[#CBDCEB] rounded-2xl p-6 space-y-3 hover:border-[#087FE5] transition-all group">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#CBDCEB] flex items-center justify-center text-[#087FE5] group-hover:bg-[#087FE5] group-hover:text-white transition-colors">
                    {idx === 0 && <ShieldCheck className="w-5 h-5" />}
                    {idx === 1 && <Layers className="w-5 h-5" />}
                    {idx === 2 && <Zap className="w-5 h-5" />}
                    {idx === 3 && <Disc className="w-5 h-5" />}
                    {idx === 4 && <Compass className="w-5 h-5" />}
                    {idx === 5 && <Cpu className="w-5 h-5" />}
                  </div>
                  <h4 className="text-sm font-bold text-[#0A2540]">
                    {feat.title}
                  </h4>
                  <p className="text-xs text-[#5A6E85] leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: APPLICATIONS (Suitable Real Aquatic Installation Venues) */}
        {activeTab === 'applications' && (
          <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-[#0A2540]">
                <LayoutGrid className="w-5 h-5 text-[#087FE5]" />
                <h3 className="text-2xl font-extrabold tracking-tight">Applications</h3>
              </div>
              <p className="text-xs sm:text-sm text-[#5A6E85]">
                Versatile aquatic lighting solutions engineered for concrete, tiled and liner pools.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {family.applications.map((app, idx) => (
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

        {/* TAB 5: DOWNLOADS (Verified Product Documentation) */}
        {activeTab === 'downloads' && (
          <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
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
          SECTION I – FREQUENTLY ASKED QUESTIONS (Accordion Screenshot 1)
      ========================================================================= */}
      <section className="py-12 sm:py-16 bg-[#F8FBFE] border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="space-y-2">
            <h3 className="text-2xl font-extrabold text-[#0A2540] tracking-tight">
              Frequently Asked Questions
            </h3>
            <p className="text-xs sm:text-sm text-[#5A6E85]">
              Quick answers to common questions about our Surface Model Swimming Pool Light series.
            </p>
          </div>

          <div className="max-w-4xl space-y-3">
            {family.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-[#CBDCEB] overflow-hidden transition-all shadow-xs"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full text-left px-5 py-4 flex items-center justify-between text-xs sm:text-sm font-bold text-[#0A2540] hover:text-[#087FE5]"
                  >
                    <span>{faq.q}</span>
                    <span className="text-lg text-[#087FE5] ml-4 font-normal">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-4 text-xs text-[#5A6E85] leading-relaxed border-t border-[#F0F7FC] pt-3">
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
          SECTION J – EXPLORE OTHER SWIMMING POOL LIGHTS (Screenshot 1)
      ========================================================================= */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex items-center space-x-2 text-[#0A2540]">
          <Layers className="w-5 h-5 text-[#087FE5]" />
          <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
            Explore Other Swimming Pool Lights
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {family.relatedSubcategories.map((rel, idx) => (
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
                <h4 className="text-xs sm:text-sm font-bold text-[#0A2540] group-hover:text-[#087FE5] transition-colors leading-snug">
                  {rel.name}
                </h4>
                <span className="text-[10px] font-mono font-semibold text-[#63758B] block">
                  {rel.models}
                </span>
                <span className="text-xs font-bold text-[#087FE5] flex items-center space-x-1 pt-1">
                  <span>View Products</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION K – ENQUIRY & WHATSAPP CONSULTATION
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
                  href={`https://wa.me/919820285117?text=${encodeURIComponent(`Hello Aqualuxis Light, I am inquiring about model ${selectedModel.code} (${selectedWattage}, ${selectedColour}) for swimming pool lighting.`)}`}
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
                Pre-populated for model: <strong className="text-[#087FE5]">{selectedModel.code}</strong> ({selectedWattage}, {selectedColour})
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
                      value={`${selectedModel.code} - ${selectedWattage} - ${selectedColour}`}
                      className="w-full px-3 py-2 rounded-xl border border-[#CBDCEB] bg-[#F0F7FC] text-[#087FE5] font-bold cursor-not-allowed"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold mb-1 text-[#0A2540]">Project Details / Quantities</label>
                    <textarea
                      rows={2}
                      value={formState.requirements}
                      onChange={e => setFormState({ ...formState, requirements: e.target.value })}
                      placeholder="e.g. 12 units required for commercial resort pool in Mumbai"
                      className="w-full px-3 py-2 rounded-xl border border-[#CBDCEB] focus:outline-none focus:border-[#087FE5] bg-[#F8FBFE]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formLoading}
                    className="w-full py-3 rounded-xl font-bold bg-[#087FE5] hover:bg-[#076bc2] text-white flex items-center justify-center space-x-2 transition-all shadow-md"
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
        defaultProduct={`${selectedModel.code} - Surface Model Swimming Pool Light (${selectedWattage}, ${selectedColour})`}
      />

    </div>
  );
}
