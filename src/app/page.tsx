'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Waves, 
  Droplet, 
  SunMedium, 
  Layers, 
  CheckCircle2, 
  Download, 
  Phone,
  MessageCircle,
  Gem,
  Leaf,
  Wrench,
  Globe,
  Sliders,
  ChevronRight,
  ChevronLeft,
  Play,
  X,
  Award,
  Users
} from 'lucide-react';
import { PRODUCTS, getFeaturedProducts } from '@/data/products';
import QuoteModal from '@/components/QuoteModal';

export default function HomePage() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [isPlayingHeroVideo, setIsPlayingHeroVideo] = useState(false);
  const [selectedProductForQuote, setSelectedProductForQuote] = useState('');

  const handleOpenVideoModal = () => {
    setIsPlayingHeroVideo(false);
    setVideoModalOpen(true);
  };

  const handleCloseVideoModal = () => {
    setVideoModalOpen(false);
    setIsPlayingHeroVideo(false);
  };

  // Keyboard Escape listener and scroll lock for video modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && videoModalOpen) {
        handleCloseVideoModal();
      }
    };
    if (videoModalOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [videoModalOpen]);

  // 12 Showcase Products for Carousel
  const showcaseProducts = PRODUCTS.slice(0, 12);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(true);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeDot, setActiveDot] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Automatic sliding every 3 seconds with pause-on-hover and reduced-motion support
  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveDot((prevDot) => {
        const nextDot = (prevDot + 1) % 4;
        if (carouselRef.current) {
          const { scrollWidth, clientWidth } = carouselRef.current;
          carouselRef.current.scrollTo({
            left: (nextDot / 3) * (scrollWidth - clientWidth),
            behavior: 'smooth',
          });
        }
        return nextDot;
      });
    }, 3000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const scrollToDot = (dotIdx: number) => {
    if (!carouselRef.current) return;
    const { scrollWidth, clientWidth } = carouselRef.current;
    carouselRef.current.scrollTo({
      left: (dotIdx / 3) * (scrollWidth - clientWidth),
      behavior: 'smooth',
    });
    setActiveDot(dotIdx);
  };

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (direction === 'right') {
      if (scrollLeft >= maxScroll - 20) {
        scrollToDot(0);
      } else {
        const nextDot = (activeDot + 1) % 4;
        scrollToDot(nextDot);
      }
    } else {
      if (scrollLeft <= 20) {
        scrollToDot(3);
      } else {
        const prevDot = (activeDot - 1 + 4) % 4;
        scrollToDot(prevDot);
      }
    }
  };

  const handleCarouselScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(true);
    setCanScrollRight(true);
    const progress = scrollLeft / (scrollWidth - clientWidth || 1);
    const dot = Math.min(3, Math.max(0, Math.round(progress * 3)));
    setActiveDot(dot);
  };

  const handleOpenQuote = (productName?: string) => {
    setSelectedProductForQuote(productName || '');
    setQuoteOpen(true);
  };

  // 8 Category Cards (Follows Reference Image 2 with Brand New Category-Specific Images)
  const categoryCards = [
    {
      id: 'pool-lights',
      title: 'Swimming Pool Lights',
      image: '/assets/categories/swimming-pool-lights-new.jpg',
      link: '/pool-lighting',
    },
    {
      id: 'underwater-lights',
      title: 'Underwater Lights',
      image: '/assets/categories/underwater-lights-new.jpg',
      link: '/pool-lighting',
    },
    {
      id: 'fountain-lights',
      title: 'LED Fountain Lights',
      image: '/assets/categories/led-fountain-lights-new.jpg',
      link: '/fountain-lighting',
    },
    {
      id: 'fountain-nozzles',
      title: 'Fountain Nozzles',
      image: '/assets/categories/fountain-nozzles-new.jpg',
      link: '/fountain-lighting',
    },
    {
      id: 'landscape-lights',
      title: 'Garden & Landscape Lights',
      image: '/assets/categories/garden-landscape-lights-new.jpg',
      link: '/water-feature-lighting',
    },
    {
      id: 'wall-washers',
      title: 'Wall Washer Lights',
      image: '/assets/categories/wall-washer-lights-new.jpg',
      link: '/water-feature-lighting',
    },
    {
      id: 'water-curtains',
      title: 'Water Curtains',
      image: '/assets/categories/water-curtains-new.jpg',
      link: '/water-feature-lighting',
    },
    {
      id: 'controllers',
      title: 'Controllers & Accessories',
      image: '/assets/categories/controllers-accessories-new.jpg',
      link: '/products',
    },
  ];

  // 4 Applications Cards (Follows Reference Image 2)
  const applicationCards = [
    {
      id: 'pools',
      title: 'Swimming Pools',
      image: '/assets/hero/hero-pool-night-luxury.webp',
      link: '/pool-lighting',
    },
    {
      id: 'fountains',
      title: 'Fountains & Water Features',
      image: '/assets/hero/hero-fountain-grand.webp',
      link: '/fountain-lighting',
    },
    {
      id: 'hotels',
      title: 'Hotels & Resorts',
      image: '/assets/products/hf077-action-villa-pool.jpg',
      link: '/applications',
    },
    {
      id: 'parks',
      title: 'Parks & Public Spaces',
      image: '/assets/products/hf077-action-rgb-lit.jpg',
      link: '/applications',
    },
  ];

  // 3 Projects Showcase (Follows Reference Image 2)
  const projectCards = [
    {
      id: 'project-1',
      title: 'Luxury Villa Infinity Pool',
      subtitle: 'Underwater Grazing Illumination',
      image: '/assets/hero/hero-pool-night-luxury.webp',
    },
    {
      id: 'project-2',
      title: 'Musical Fountain Choreography',
      subtitle: 'Dynamic RGB Vertical Jets',
      image: '/assets/hero/hero-fountain-grand.webp',
    },
    {
      id: 'project-3',
      title: 'Architectural Shear Water Wall',
      subtitle: 'Linear LED Facade Grazing',
      image: '/assets/products/hf080-action-water-flow.jpg',
    },
  ];

  // Client Brands (Follows Reference Image 2)
  const clientLogos = [
    { name: 'TAJ', subtitle: 'HOTELS PALACES RESORTS' },
    { name: 'ITC HOTELS', subtitle: 'RESPONSIBLE LUXURY' },
    { name: 'Hilton', subtitle: 'HOTELS & RESORTS' },
    { name: 'Marriott', subtitle: 'INTERNATIONAL' },
    { name: 'THE LEELA', subtitle: 'PALACES HOTELS RESORTS' },
    { name: 'Oberoi', subtitle: 'HOTELS & RESORTS' },
  ];

  return (
    <div className="bg-white text-[#142C49]">
      
      {/* =========================================================================
          SECTION 1: HERO (Follows Reference Image 2 Exactly)
      ========================================================================= */}
      <section className="relative min-h-[380px] lg:min-h-[430px] flex items-center justify-between overflow-hidden bg-[#06264A] text-white">
        
        {/* Full-width Background Image & 40% Uniform Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/hero/hero-pool-waterfall-luxury.jpg"
            alt="AQUALUXIS Swimming Pool & Fountain Lighting"
            fill
            priority
            className="object-cover object-center"
          />
          {/* 40% Semi-transparent Black Overlay (rgba(0, 0, 0, 0.4)) */}
          <div 
            className="absolute inset-0 bg-black/40 pointer-events-none" 
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
            aria-hidden="true"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4 sm:py-5 lg:py-6 w-full">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-8">
            
            {/* Left: Typography & CTAs */}
            <div className="max-w-2xl space-y-3.5 sm:space-y-4 pt-2 sm:pt-0">
              
              <span className="hidden sm:block text-[11px] sm:text-xs font-mono font-bold uppercase tracking-[0.22em] text-[#20C7E8]">
                PREMIUM UNDERWATER &amp; FOUNTAIN LIGHTING
              </span>

              <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight leading-[1.08] text-white">
                BRILLIANCE <br />
                BENEATH THE <br />
                <span className="text-[#20C7E8]">SURFACE</span>
              </h1>

              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-xl">
                Innovative LED lighting solutions for pools, fountains and water features. Engineered for performance, designed to transform spaces.
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <Link
                  href="/products"
                  className="inline-flex items-center px-6 py-2.5 sm:px-7 sm:py-3 rounded-full bg-[#20C7E8] hover:bg-[#087FE5] text-[#06264A] hover:text-white font-bold text-xs sm:text-sm shadow-lg hover:shadow-cyan-500/25 transition-all transform hover:scale-105"
                >
                  <span>Explore Products</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>

                <button
                  onClick={() => handleOpenQuote()}
                  className="inline-flex items-center px-6 py-2.5 sm:px-7 sm:py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/40 text-white font-bold text-xs sm:text-sm backdrop-blur-sm transition-all"
                >
                  <span>Request a Quote</span>
                </button>
              </div>

            </div>

            {/* Right: Watch Video Button (Reference Image 2) */}
            <div className="lg:mb-2">
              <button
                onClick={handleOpenVideoModal}
                className="inline-flex items-center space-x-2.5 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full bg-slate-900/60 hover:bg-slate-900/80 border border-white/30 backdrop-blur-md text-white text-xs font-bold transition-all group"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#20C7E8] text-[#06264A] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current ml-0.5" />
                </div>
                <span>Watch Video</span>
              </button>
            </div>

          </div>
        </div>

        {/* Seamless Aqua Transition to Feature Strip */}
        <div 
          className="absolute inset-x-0 bottom-0 h-10 sm:h-12 lg:h-14 bg-gradient-to-b from-transparent via-[#16C5E8]/20 to-[#EAF7FC] pointer-events-none z-10" 
          aria-hidden="true"
        />

      </section>

      {/* =========================================================================
          SECTION 2: AQUATIC BENEFITS & FEATURES STRIP (Refined Seamless Design)
      ========================================================================= */}
      <section className="relative w-full bg-gradient-to-b from-[#EAF7FC] via-[#F4FAFD] to-white py-4 sm:py-5 lg:py-6 border-b border-[#EAF7FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-5 sm:gap-y-6 gap-x-4 sm:gap-x-6 items-center">
            
            {/* Feature 1: Premium Quality */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative flex items-center justify-center mb-2.5">
                <div className="w-[54px] h-[54px] sm:w-[58px] sm:h-[58px] rounded-full bg-white flex items-center justify-center shadow-[0_4px_14px_rgba(22,197,232,0.2)] border border-[#16C5E8]/35 transition-transform duration-300 group-hover:scale-105">
                  <Gem className="w-[30px] h-[30px] sm:w-[32px] sm:h-[32px] text-[#082B4C] stroke-[1.8]" />
                </div>
              </div>
              <h3 className="text-sm sm:text-[15px] font-bold text-[#082B4C] tracking-tight leading-tight">
                Premium Quality
              </h3>
              <p className="text-[11px] sm:text-[12px] text-[#52677C] font-medium leading-snug mt-0.5">
                LED Technology
              </p>
            </div>

            {/* Feature 2: Waterproof & Durable */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative flex items-center justify-center mb-2.5">
                <div className="w-[54px] h-[54px] sm:w-[58px] sm:h-[58px] rounded-full bg-white flex items-center justify-center shadow-[0_4px_14px_rgba(22,197,232,0.2)] border border-[#16C5E8]/35 transition-transform duration-300 group-hover:scale-105">
                  <svg className="w-[30px] h-[30px] sm:w-[32px] sm:h-[32px] text-[#082B4C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M12 8.5c0 0-2 2.2-2 3.5a2 2 0 0 0 4 0c0-1.3-2-3.5-2-3.5z" fill="#16C5E8" stroke="#16C5E8" strokeWidth="1" />
                  </svg>
                </div>
              </div>
              <h3 className="text-sm sm:text-[15px] font-bold text-[#082B4C] tracking-tight leading-tight">
                Waterproof &amp; Durable
              </h3>
              <p className="text-[11px] sm:text-[12px] text-[#52677C] font-medium leading-snug mt-0.5">
                IP Rated Protection
              </p>
            </div>

            {/* Feature 3: Energy Efficient */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative flex items-center justify-center mb-2.5">
                <div className="w-[54px] h-[54px] sm:w-[58px] sm:h-[58px] rounded-full bg-white flex items-center justify-center shadow-[0_4px_14px_rgba(22,197,232,0.2)] border border-[#16C5E8]/35 transition-transform duration-300 group-hover:scale-105">
                  <Leaf className="w-[30px] h-[30px] sm:w-[32px] sm:h-[32px] text-[#082B4C] stroke-[1.8]" />
                </div>
              </div>
              <h3 className="text-sm sm:text-[15px] font-bold text-[#082B4C] tracking-tight leading-tight">
                Energy Efficient
              </h3>
              <p className="text-[11px] sm:text-[12px] text-[#52677C] font-medium leading-snug mt-0.5">
                Eco-Friendly
              </p>
            </div>

            {/* Feature 4: Easy Installation */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative flex items-center justify-center mb-2.5">
                <div className="w-[54px] h-[54px] sm:w-[58px] sm:h-[58px] rounded-full bg-white flex items-center justify-center shadow-[0_4px_14px_rgba(22,197,232,0.2)] border border-[#16C5E8]/35 transition-transform duration-300 group-hover:scale-105">
                  <Wrench className="w-[30px] h-[30px] sm:w-[32px] sm:h-[32px] text-[#082B4C] stroke-[1.8]" />
                </div>
              </div>
              <h3 className="text-sm sm:text-[15px] font-bold text-[#082B4C] tracking-tight leading-tight">
                Easy Installation
              </h3>
              <p className="text-[11px] sm:text-[12px] text-[#52677C] font-medium leading-snug mt-0.5">
                Low Maintenance
              </p>
            </div>

            {/* Feature 5: Trusted by Architects */}
            <div className="flex flex-col items-center text-center group col-span-2 sm:col-span-1">
              <div className="relative flex items-center justify-center mb-2.5">
                <div className="w-[54px] h-[54px] sm:w-[58px] sm:h-[58px] rounded-full bg-white flex items-center justify-center shadow-[0_4px_14px_rgba(22,197,232,0.2)] border border-[#16C5E8]/35 transition-transform duration-300 group-hover:scale-105">
                  <Award className="w-[30px] h-[30px] sm:w-[32px] sm:h-[32px] text-[#082B4C] stroke-[1.8]" />
                </div>
              </div>
              <h3 className="text-sm sm:text-[15px] font-bold text-[#082B4C] tracking-tight leading-tight">
                Trusted by Architects
              </h3>
              <p className="text-[11px] sm:text-[12px] text-[#52677C] font-medium leading-snug mt-0.5">
                Project Developers
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: PRODUCT CATEGORIES (8 Cards in 4x2 Grid - Reference Image 2)
      ========================================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#087FE5]">
                OUR PRODUCTS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#142C49] tracking-tight">
                Lighting Solutions for Every Water Experience
              </h2>
              <p className="text-sm text-[#657991] max-w-2xl leading-relaxed">
                Explore our wide range of high-performance underwater and fountain lighting products crafted for beauty, durability and exceptional illumination.
              </p>
            </div>

            <Link
              href="/products"
              className="inline-flex items-center text-xs font-bold text-[#087FE5] hover:text-[#06264A] transition-colors group shrink-0"
            >
              <span>View All Products</span>
              <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* 8 Category Cards (4 columns x 2 rows) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoryCards.map((cat) => (
              <Link
                key={cat.id}
                href={cat.link}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900 border border-[#DCE8F2] shadow-card-subtle hover:shadow-card-hover hover:border-[#087FE5]/40 transition-all duration-300 flex flex-col justify-end p-5 focus:outline-none focus:ring-2 focus:ring-[#087FE5] focus:ring-offset-2"
              >
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Dark gradient overlay near the bottom for maximum title readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 via-40% to-transparent pointer-events-none" />

                <div className="relative z-10 space-y-1">
                  <h3 className="font-bold text-base text-white group-hover:text-[#20C7E8] transition-colors leading-snug">
                    {cat.title}
                  </h3>
                  <div className="flex items-center text-[11px] font-bold text-[#20C7E8] group-hover:translate-x-1 transition-transform">
                    <span>View Products</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: ENGINEERING INTRODUCTION (Full-Bleed Architectural Showcase)
      ========================================================================= */}
      <section className="relative py-8 sm:py-14 lg:py-20 text-white overflow-hidden bg-[#03142B]">
        {/* Full-Bleed Background Image covering the entire section */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/products/underwater-pool-luminaire-installed.jpg"
            alt="AQUALUXIS Underwater LED Pool Luminaire Installed on Pool Wall"
            fill
            priority={false}
            className="object-cover object-right sm:object-[75%_center] lg:object-[82%_center]"
          />
          {/* Dark navy overlay (rgba(3, 20, 43, 0.55)) with subtle left-to-right gradient for optimal text contrast */}
          <div 
            className="absolute inset-0 pointer-events-none" 
            style={{
              background: 'linear-gradient(to right, rgba(3, 20, 43, 0.90) 0%, rgba(3, 20, 43, 0.72) 42%, rgba(3, 20, 43, 0.45) 75%, rgba(3, 20, 43, 0.55) 100%)',
            }}
            aria-hidden="true"
          />
          {/* Subtle vertical vignette at top and bottom for smooth section transitions */}
          <div 
            className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#03142B]/35 via-transparent to-[#03142B]/45"
            aria-hidden="true"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            
            {/* Left: Heading, Description & CTA */}
            <div className="lg:col-span-7 space-y-5 lg:pr-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#20C7E8]/15 border border-[#20C7E8]/40 backdrop-blur-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#20C7E8] animate-pulse" />
                <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#20C7E8]">
                  AQUALUXIS LIGHT
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-[1.16]">
                Engineered to <br className="hidden sm:inline" />
                Illuminate Possibilities
              </h2>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-xl font-normal">
                From serene pools to iconic fountains, our lighting solutions combine advanced LED technology with precision engineering to deliver brilliance, reliability and lasting performance.
              </p>

              <div className="pt-2">
                <Link
                  href="/about-us"
                  className="inline-flex items-center px-7 py-3.5 rounded-full bg-gradient-to-r from-[#087FE5] to-[#20C7E8] hover:from-[#066ac2] hover:to-[#1ab3d1] text-white font-bold text-xs sm:text-sm shadow-lg hover:shadow-cyan-500/25 transition-all transform hover:scale-105 group"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right: Dedicated visual space allowing the background luminaire to shine through on desktop */}
            <div className="hidden lg:block lg:col-span-5 min-h-[280px] pointer-events-none" aria-hidden="true" />

          </div>

          {/* Lower 4 Compact Engineering Benefits Strip */}
          <div className="mt-6 sm:mt-10 lg:mt-12 pt-5 sm:pt-7 lg:pt-8 border-t border-white/15">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-white/15">
              
              {/* Benefit 1 */}
              <div className="flex items-start space-x-3.5 lg:px-5 xl:px-6 first:lg:pl-0">
                <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 text-[#20C7E8] flex items-center justify-center shrink-0 shadow-inner mt-0.5 backdrop-blur-xs">
                  <Waves className="w-5 h-5 text-[#20C7E8]" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs sm:text-sm font-bold text-white block leading-snug">
                    Superior Illumination
                  </span>
                  <span className="text-[11px] sm:text-xs text-slate-200 leading-normal mt-0.5 block">
                    High-efficiency optical diodes
                  </span>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="flex items-start space-x-3.5 lg:px-5 xl:px-6">
                <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 text-[#20C7E8] flex items-center justify-center shrink-0 shadow-inner mt-0.5 backdrop-blur-xs">
                  <ShieldCheck className="w-5 h-5 text-[#20C7E8]" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs sm:text-sm font-bold text-white block leading-snug">
                    Corrosion-Resistant Stainless Steel
                  </span>
                  <span className="text-[11px] sm:text-xs text-slate-200 leading-normal mt-0.5 block">
                    Marine grade 316L alloy
                  </span>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="flex items-start space-x-3.5 lg:px-5 xl:px-6">
                <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 text-[#20C7E8] flex items-center justify-center shrink-0 shadow-inner mt-0.5 backdrop-blur-xs">
                  <Droplet className="w-5 h-5 text-[#20C7E8]" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs sm:text-sm font-bold text-white block leading-snug">
                    IP68 Waterproof
                  </span>
                  <span className="text-[11px] sm:text-xs text-slate-200 leading-normal mt-0.5 block">
                    Submersible pressure tested
                  </span>
                </div>
              </div>

              {/* Benefit 4 */}
              <div className="flex items-start space-x-3.5 lg:px-5 xl:px-6 last:lg:pr-0">
                <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 text-[#20C7E8] flex items-center justify-center shrink-0 shadow-inner mt-0.5 backdrop-blur-xs">
                  <Sparkles className="w-5 h-5 text-[#20C7E8]" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs sm:text-sm font-bold text-white block leading-snug">
                    Long Lifespan &amp; Energy Efficient
                  </span>
                  <span className="text-[11px] sm:text-xs text-slate-200 leading-normal mt-0.5 block">
                    50,000+ hrs rated operational life
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4.5: 12-PRODUCT SHOWCASE CAROUSEL (Explore Our Lighting Solutions)
      ========================================================================= */}
      <section 
        className="py-20 bg-[#F4F9FD] border-t border-b border-[#DCE8F2]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Header with Title & Prev/Next Controls */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#087FE5]">
                CERTIFIED AQUATIC LUMINAIRES
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#142C49] tracking-tight">
                Explore Our Lighting Solutions
              </h2>
              <p className="text-sm text-[#657991] max-w-2xl leading-relaxed">
                Precision-engineered underwater pool lights, fountain nozzles, and architectural water feature fixtures crafted for endurance.
              </p>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center space-x-3 shrink-0">
              <button
                onClick={() => scrollCarousel('left')}
                disabled={!canScrollLeft}
                aria-label="Previous products"
                className="w-11 h-11 rounded-full bg-white border border-[#CBDCEB] text-[#142C49] hover:bg-[#087FE5] hover:text-white hover:border-[#087FE5] disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-[#142C49] disabled:hover:border-[#CBDCEB] disabled:cursor-not-allowed shadow-xs transition-all flex items-center justify-center group"
              >
                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={() => scrollCarousel('right')}
                disabled={!canScrollRight}
                aria-label="Next products"
                className="w-11 h-11 rounded-full bg-white border border-[#CBDCEB] text-[#142C49] hover:bg-[#087FE5] hover:text-white hover:border-[#087FE5] disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-[#142C49] disabled:hover:border-[#CBDCEB] disabled:cursor-not-allowed shadow-xs transition-all flex items-center justify-center group"
              >
                <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Carousel Track */}
          <div
            ref={carouselRef}
            onScroll={handleCarouselScroll}
            className="flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory scroll-smooth py-2 px-1 -mx-1"
          >
            {showcaseProducts.map((prod) => (
              <div
                key={prod.id}
                className="w-[85vw] sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)] shrink-0 snap-start bg-white rounded-2xl border border-[#DCE8F2] shadow-xs hover:shadow-card-hover hover:border-[#087FE5]/40 transition-all duration-300 p-5 flex flex-col justify-between group"
              >
                <div>
                  {/* Product Image Stage */}
                  <div className="relative w-full aspect-[4/3] rounded-xl bg-[#F8FBFE] border border-[#E9F2F9] overflow-hidden mb-4 p-4 flex items-center justify-center group-hover:bg-[#F0F7FC] transition-colors">
                    <Image
                      src={prod.image}
                      alt={prod.name}
                      fill
                      sizes="(max-width: 640px) 85vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Model Code Badge */}
                  <div className="mb-2">
                    <span className="inline-block text-[11px] font-mono font-bold text-[#087FE5] bg-[#EAF5FC] px-2.5 py-0.5 rounded-full border border-[#D0E5F5]">
                      {prod.code}
                    </span>
                  </div>

                  {/* Product Title */}
                  <h3 className="text-sm sm:text-base font-bold text-[#142C49] leading-snug line-clamp-1 group-hover:text-[#087FE5] transition-colors mb-1.5">
                    {prod.name}
                  </h3>

                  {/* Concise Description */}
                  <p className="text-xs text-[#63758B] line-clamp-2 leading-relaxed mb-4">
                    {prod.shortDescription}
                  </p>
                </div>

                {/* View Details Button */}
                <div className="pt-2">
                  <Link
                    href={`/products/${prod.slug}`}
                    className="inline-flex items-center justify-center w-full py-2.5 px-4 rounded-xl bg-[#087FE5] hover:bg-[#20C7E8] hover:text-[#06264A] text-white font-bold text-xs shadow-xs transition-all group/btn"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator & View All Products CTA */}
          <div className="flex flex-col items-center justify-center space-y-6 pt-2">
            {/* Pagination Dots */}
            <div className="flex items-center space-x-2">
              {[0, 1, 2, 3].map((dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => scrollToDot(dotIdx)}
                  aria-label={`Go to slide page ${dotIdx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeDot === dotIdx
                      ? 'w-8 bg-[#087FE5]'
                      : 'w-2 bg-[#CBDCEB] hover:bg-[#087FE5]/50'
                  }`}
                />
              ))}
            </div>

            {/* Prominent View All Products Button */}
            <Link
              href="/products"
              className="inline-flex items-center px-8 py-3.5 rounded-full bg-white hover:bg-[#087FE5] text-[#087FE5] hover:text-white font-bold text-xs sm:text-sm border-2 border-[#087FE5] shadow-xs hover:shadow-md transition-all transform hover:scale-105 group"
            >
              <span>View All Products</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: APPLICATIONS (Follows Reference Image 2)
      ========================================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#087FE5]">
                APPLICATIONS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#142C49] tracking-tight">
                Where Light Enhances Every Space
              </h2>
              <p className="text-sm text-[#657991] max-w-2xl leading-relaxed">
                Our lighting solutions are designed for a wide range of residential, commercial and public spaces, adding beauty, safety and ambiance to every environment.
              </p>
            </div>

            <Link
              href="/applications"
              className="inline-flex items-center text-xs font-bold text-[#087FE5] hover:text-[#06264A] transition-colors group shrink-0"
            >
              <span>Explore Applications</span>
              <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* 4 Application Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {applicationCards.map((app) => (
              <Link
                key={app.id}
                href={app.link}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900 border border-[#DCE8F2] shadow-card-subtle hover:shadow-card-hover transition-all duration-300 flex flex-col justify-end p-5"
              >
                <Image
                  src={app.image}
                  alt={app.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                <h3 className="relative z-10 font-bold text-base text-white group-hover:text-[#20C7E8] transition-colors">
                  {app.title}
                </h3>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: STATS & CREDIBILITY (Premium Redesign)
      ========================================================================= */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-[#041A33] via-[#06264A] to-[#041A33] text-white relative overflow-hidden border-t border-b border-white/10">
        {/* Subtle ambient lighting glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#087FE5]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#20C7E8] inline-block px-3 py-1 rounded-full bg-[#20C7E8]/10 border border-[#20C7E8]/25">
              WHY CHOOSE AQUALUXIS LIGHT
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Trusted Lighting Partner for Iconic Water Spaces
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
              Global engineering standards backed by rigorous testing, certified IP68 waterproofing, and reliable long-term architectural performance.
            </p>
          </div>

          {/* 4 Balanced Elevated Statistics Cards in a Horizontal Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Stat 1: 10+ */}
            <div className="bg-white/[0.04] backdrop-blur-md rounded-2xl border border-white/10 p-6 sm:p-7 flex flex-col items-center text-center hover:border-[#20C7E8]/40 hover:bg-white/[0.07] transition-all duration-300 group shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#087FE5]/20 to-[#20C7E8]/10 border border-[#20C7E8]/30 text-[#20C7E8] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6 text-[#20C7E8]" />
              </div>
              <span className="text-4xl sm:text-5xl font-black tracking-tight text-white group-hover:text-[#20C7E8] transition-colors">
                10+
              </span>
              <span className="text-xs sm:text-sm font-bold text-slate-200 mt-1 uppercase tracking-wider">
                Years of Expertise
              </span>
              <div className="w-8 h-0.5 bg-gradient-to-r from-[#087FE5] to-[#20C7E8] rounded-full mt-3.5 opacity-60 group-hover:w-12 group-hover:opacity-100 transition-all" />
              <p className="text-[11px] text-slate-300/80 leading-relaxed mt-2.5">
                Decade of pioneering submersible LED engineering and manufacturing excellence.
              </p>
            </div>

            {/* Stat 2: 500+ */}
            <div className="bg-white/[0.04] backdrop-blur-md rounded-2xl border border-white/10 p-6 sm:p-7 flex flex-col items-center text-center hover:border-[#20C7E8]/40 hover:bg-white/[0.07] transition-all duration-300 group shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#087FE5]/20 to-[#20C7E8]/10 border border-[#20C7E8]/30 text-[#20C7E8] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-[#20C7E8]" />
              </div>
              <span className="text-4xl sm:text-5xl font-black tracking-tight text-white group-hover:text-[#20C7E8] transition-colors">
                500+
              </span>
              <span className="text-xs sm:text-sm font-bold text-slate-200 mt-1 uppercase tracking-wider">
                Successful Projects
              </span>
              <div className="w-8 h-0.5 bg-gradient-to-r from-[#087FE5] to-[#20C7E8] rounded-full mt-3.5 opacity-60 group-hover:w-12 group-hover:opacity-100 transition-all" />
              <p className="text-[11px] text-slate-300/80 leading-relaxed mt-2.5">
                Illuminating premier luxury resorts, commercial lagoons and public fountains.
              </p>
            </div>

            {/* Stat 3: 25+ */}
            <div className="bg-white/[0.04] backdrop-blur-md rounded-2xl border border-white/10 p-6 sm:p-7 flex flex-col items-center text-center hover:border-[#20C7E8]/40 hover:bg-white/[0.07] transition-all duration-300 group shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#087FE5]/20 to-[#20C7E8]/10 border border-[#20C7E8]/30 text-[#20C7E8] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Globe className="w-6 h-6 text-[#20C7E8]" />
              </div>
              <span className="text-4xl sm:text-5xl font-black tracking-tight text-white group-hover:text-[#20C7E8] transition-colors">
                25+
              </span>
              <span className="text-xs sm:text-sm font-bold text-slate-200 mt-1 uppercase tracking-wider">
                Countries Served
              </span>
              <div className="w-8 h-0.5 bg-gradient-to-r from-[#087FE5] to-[#20C7E8] rounded-full mt-3.5 opacity-60 group-hover:w-12 group-hover:opacity-100 transition-all" />
              <p className="text-[11px] text-slate-300/80 leading-relaxed mt-2.5">
                Trusted by international pool contractors, architects and fountain builders.
              </p>
            </div>

            {/* Stat 4: 100% */}
            <div className="bg-white/[0.04] backdrop-blur-md rounded-2xl border border-white/10 p-6 sm:p-7 flex flex-col items-center text-center hover:border-[#20C7E8]/40 hover:bg-white/[0.07] transition-all duration-300 group shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#087FE5]/20 to-[#20C7E8]/10 border border-[#20C7E8]/30 text-[#20C7E8] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6 text-[#20C7E8]" />
              </div>
              <span className="text-4xl sm:text-5xl font-black tracking-tight text-white group-hover:text-[#20C7E8] transition-colors">
                100%
              </span>
              <span className="text-xs sm:text-sm font-bold text-slate-200 mt-1 uppercase tracking-wider">
                Quality Assurance
              </span>
              <div className="w-8 h-0.5 bg-gradient-to-r from-[#087FE5] to-[#20C7E8] rounded-full mt-3.5 opacity-60 group-hover:w-12 group-hover:opacity-100 transition-all" />
              <p className="text-[11px] text-slate-300/80 leading-relaxed mt-2.5">
                Every single luminaire batch undergoes 3-stage hydrostatic and thermal audits.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7: FEATURED PRODUCT (Refined Editorial Architectural Showcase)
      ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#F3F8FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl lg:rounded-[32px] border border-[#DCE8F2] shadow-card-subtle overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              
              {/* Left Column: Product Visual Area (~45% width) */}
              <div className="lg:col-span-5 relative bg-gradient-to-br from-[#EAF3FA] via-[#F2F8FD] to-[#E2EEF8] flex items-center justify-center p-8 sm:p-12 lg:p-14 min-h-[360px] lg:min-h-[460px] overflow-hidden group">
                {/* Soft cyan & blue ambient lighting halo */}
                <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-[#087FE5]/10 blur-3xl pointer-events-none" />
                
                {/* High-Resolution Transparent Cutout (Zero white square) */}
                <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[400px] aspect-square transition-transform duration-700 group-hover:scale-105">
                  <Image
                    src="/assets/products/featured-led-pool-light-cutout.png"
                    alt="AQUALUXIS LED Swimming Pool Light (Surface Mount SS)"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 400px"
                    className="object-contain drop-shadow-[0_20px_32px_rgba(8,127,229,0.2)]"
                    priority={false}
                  />
                </div>
              </div>

              {/* Right Column: Specifications & CTA (~55% width) */}
              <div className="lg:col-span-7 p-8 sm:p-10 lg:p-14 flex flex-col justify-center space-y-6">
                
                {/* Header Info */}
                <div className="space-y-2">
                  <div className="inline-flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#087FE5]" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#087FE5]">
                      FEATURED PRODUCT
                    </span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-[#142C49] tracking-tight">
                    LED Swimming Pool Light
                  </h2>
                  <p className="text-xs sm:text-sm text-[#657991] leading-relaxed max-w-xl">
                    High-performance, energy-efficient and durable LED pool lights designed for exceptional brightness and long-lasting illumination.
                  </p>
                </div>

                {/* 5 Feature Points in a Clean Two-Column Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="flex items-center space-x-2.5 p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E9F1F7]">
                    <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#087FE5] flex items-center justify-center shrink-0">
                      <Sparkles className="w-4 h-4 text-[#087FE5]" />
                    </div>
                    <span className="text-xs sm:text-[13px] font-semibold text-[#142C49]">
                      High Brightness LED Technology
                    </span>
                  </div>

                  <div className="flex items-center space-x-2.5 p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E9F1F7]">
                    <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#087FE5] flex items-center justify-center shrink-0">
                      <Droplet className="w-4 h-4 text-[#087FE5]" />
                    </div>
                    <span className="text-xs sm:text-[13px] font-semibold text-[#142C49]">
                      IP68 Waterproof Rating
                    </span>
                  </div>

                  <div className="flex items-center space-x-2.5 p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E9F1F7]">
                    <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#087FE5] flex items-center justify-center shrink-0">
                      <Zap className="w-4 h-4 text-[#087FE5]" />
                    </div>
                    <span className="text-xs sm:text-[13px] font-semibold text-[#142C49]">
                      Multiple Colour Options (RGB / Single)
                    </span>
                  </div>

                  <div className="flex items-center space-x-2.5 p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E9F1F7]">
                    <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#087FE5] flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-4 h-4 text-[#087FE5]" />
                    </div>
                    <span className="text-xs sm:text-[13px] font-semibold text-[#142C49]">
                      Stainless Steel &amp; ABS Housing
                    </span>
                  </div>

                  <div className="flex items-center space-x-2.5 p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E9F1F7] sm:col-span-2">
                    <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#087FE5] flex items-center justify-center shrink-0">
                      <Wrench className="w-4 h-4 text-[#087FE5]" />
                    </div>
                    <span className="text-xs sm:text-[13px] font-semibold text-[#142C49]">
                      Easy Installation &amp; Low Maintenance
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Link
                    href="/products/surface-model-swimming-pool-light-hf00-hf05"
                    className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-[#087FE5] to-[#20C7E8] hover:from-[#066ac2] hover:to-[#1ab3d1] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-cyan-500/25 transition-all transform hover:scale-105 group"
                  >
                    <span>View Product Details</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <a
                    href="/assets/catalogue/huma-swimming-pool-lighting-catalogue-2024.pdf"
                    download="aqualuxis-pool-lighting-catalogue-2024.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 rounded-full bg-white hover:bg-[#F3F8FC] text-[#142C49] hover:text-[#087FE5] font-bold text-xs sm:text-sm border border-[#DCE8F2] transition-all"
                  >
                    <Download className="w-4 h-4 mr-2 text-[#087FE5]" />
                    <span>Download Brochure</span>
                  </a>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: OUR PROJECTS (Horizontal 3-card grid - Reference Image 2)
      ========================================================================= */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#087FE5]">
                OUR PROJECTS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#142C49] tracking-tight">
                Real Spaces. Extraordinary Illumination.
              </h2>
              <p className="text-sm text-[#657991] max-w-2xl leading-relaxed">
                Explore some of our premium installations that showcase the beauty and impact of Aqualuxis Light products.
              </p>
            </div>

            <Link
              href="/gallery"
              className="inline-flex items-center text-xs font-bold text-[#087FE5] hover:text-[#06264A] transition-colors group shrink-0"
            >
              <span>View Our Work</span>
              <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* 3 Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projectCards.map((proj) => (
              <div
                key={proj.id}
                className="group relative aspect-[16/11] rounded-2xl overflow-hidden bg-slate-900 border border-[#DCE8F2] shadow-card-subtle hover:shadow-card-hover transition-all duration-300"
              >
                <Image
                  src={proj.image}
                  alt={proj.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-[10px] font-mono text-[#20C7E8] font-bold uppercase block mb-1">
                    {proj.subtitle}
                  </span>
                  <h4 className="font-bold text-base leading-snug">
                    {proj.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 9: CLIENT LOGOS STRIP (Follows Reference Image 2)
      ========================================================================= */}
      <section className="py-14 bg-[#F3F8FC] border-t border-b border-[#DCE8F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          
          <div className="space-y-1">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#087FE5]">
              OUR CLIENTS
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#142C49]">
              Trusted by Leading Developers, Architects and Brands
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-center pt-2">
            {clientLogos.map((client, idx) => (
              <div
                key={idx}
                className="bg-white py-4 px-3 rounded-xl border border-[#DCE8F2] shadow-2xs flex flex-col items-center justify-center hover:border-[#087FE5] transition-colors"
              >
                <span className="font-extrabold text-base sm:text-lg text-[#142C49] tracking-wider uppercase">
                  {client.name}
                </span>
                <span className="text-[8px] font-semibold text-[#657991] tracking-wider uppercase mt-0.5">
                  {client.subtitle}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Video Demonstration Modal */}
      {videoModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) handleCloseVideoModal();
          }}
        >
          <div className="bg-slate-900 rounded-3xl max-w-3xl w-full p-6 border border-slate-700 shadow-2xl relative text-white space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <h4 className="text-base font-bold text-white flex items-center">
                <Play className="w-4 h-4 mr-2 text-[#20C7E8] fill-current" />
                AQUALUXIS Aquatic Lighting Demonstration
              </h4>
              <button
                onClick={handleCloseVideoModal}
                aria-label="Close video popup"
                className="p-1 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black flex items-center justify-center">
              {isPlayingHeroVideo ? (
                <iframe
                  src="https://www.youtube.com/embed/ULZrbaprtbI?autoplay=1&rel=0"
                  title="AQUALUXIS Aquatic Lighting Demonstration"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              ) : (
                <div 
                  onClick={() => setIsPlayingHeroVideo(true)}
                  className="group relative w-full h-full cursor-pointer flex items-center justify-center"
                  role="button"
                  tabIndex={0}
                  aria-label="Play AQUALUXIS Aquatic Lighting Demonstration Video"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setIsPlayingHeroVideo(true);
                    }
                  }}
                >
                  <Image
                    src="https://img.youtube.com/vi/ULZrbaprtbI/hqdefault.jpg"
                    alt="AQUALUXIS Aquatic Lighting Demonstration"
                    fill
                    priority
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/45 group-hover:bg-black/35 transition-colors flex flex-col items-center justify-center space-y-3 text-center p-4">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#20C7E8] hover:bg-[#00E5FF] text-[#06264A] flex items-center justify-center shadow-[0_0_30px_rgba(32,199,232,0.6)] group-hover:scale-110 active:scale-95 transition-all duration-300">
                      <Play className="w-8 h-8 sm:w-9 sm:h-9 fill-current ml-1" />
                    </div>
                    <p className="text-sm sm:text-base font-bold text-white max-w-md group-hover:text-[#20C7E8] transition-colors">
                      High-Performance Submersible LED Luminaire Testing in Pressurized Hydraulic Chambers
                    </p>
                    <span className="text-xs text-[#20C7E8] font-mono">
                      ISO 9001 &amp; IP68 Aquatic Standards Video Showcase
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => {
                  handleCloseVideoModal();
                  handleOpenQuote();
                }}
                className="px-6 py-2.5 rounded-full bg-[#087FE5] hover:bg-[#20C7E8] hover:text-[#06264A] text-white text-xs font-bold transition-all"
              >
                Request Video Tech Specs &amp; Quote
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Global Quote Request Modal */}
      <QuoteModal
        isOpen={quoteOpen}
        onClose={() => setQuoteOpen(false)}
        defaultProduct={selectedProductForQuote}
      />

    </div>
  );
}
