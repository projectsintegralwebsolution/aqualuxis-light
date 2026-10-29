'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Play, 
  X, 
  Sparkles, 
  ExternalLink, 
  ChevronDown, 
  ArrowRight, 
  SlidersHorizontal,
  Clock,
  Eye,
  CheckCircle2,
  Tv
} from 'lucide-react';
import { PORTFOLIO_VIDEOS, VIDEO_CATEGORIES, VideoCategory, PortfolioVideo } from '@/data/videos';
import QuoteModal from '@/components/QuoteModal';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function OurWorkPortfolio() {
  const [selectedCategory, setSelectedCategory] = useState<VideoCategory>('All Videos');
  const [visibleCount, setVisibleCount] = useState<number>(9);
  const [activeVideo, setActiveVideo] = useState<PortfolioVideo | null>(null);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  // Filter videos based on active category
  const filteredVideos = selectedCategory === 'All Videos'
    ? PORTFOLIO_VIDEOS
    : PORTFOLIO_VIDEOS.filter(v => v.category === selectedCategory);

  const visibleVideos = filteredVideos.slice(0, visibleCount);
  const hasMore = visibleCount < filteredVideos.length;

  const handleCategorySelect = (cat: VideoCategory) => {
    setSelectedCategory(cat);
    setVisibleCount(9);
  };

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  // Keyboard Escape listener for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveVideo(null);
      }
    };
    if (activeVideo) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeVideo]);

  return (
    <div className="bg-white min-h-screen text-[#102747]">
      
      {/* =========================================================================
          1. COMPACT LEFT-ALIGNED HERO BANNER (Exact Reference Banner Size: h-[280px] lg:h-[300px])
      ========================================================================= */}
      <section className="relative overflow-hidden bg-[#06182C] border-b border-[#0A3055]/50 min-h-[260px] h-auto py-6 sm:py-0 sm:h-[280px] lg:h-[300px] flex items-center">
        
        {/* Background Banner Image */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/assets/banners/banner-fountains.png"
            alt="AQUALUXIS LIGHT - Our Work Portfolio"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Subtle dark gradient overlay to ensure perfect text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#06182C]/95 via-[#06182C]/80 to-[#06182C]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#06182C] via-transparent to-transparent opacity-75" />
        </div>

        {/* Banner Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top-Left Breadcrumbs */}
          <Breadcrumbs items={[{ label: 'Our Work' }]} variant="light" />

          {/* Left-Aligned Stack */}
          <div className="mt-1.5 sm:mt-2 space-y-2 sm:space-y-2.5 max-w-3xl text-left">
            {/* Small Category Badge */}
            <div>
              <div className="inline-flex items-center space-x-1.5 px-3 py-0.5 rounded-full text-[11px] font-semibold text-[#00E5FF] bg-[#00E5FF]/10 border border-[#00E5FF]/30 backdrop-blur-sm shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#00E5FF]" />
                <span>OUR WORK</span>
              </div>
            </div>

            {/* Main H1 Heading */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Explore Our Work
            </h1>

            {/* Description */}
            <p className="text-xs sm:text-sm text-[#DCE5EF] leading-relaxed max-w-2xl line-clamp-2 sm:line-clamp-none">
              Discover pool lighting installations, stunning fountain displays, underwater LED lighting, and inspiring aquatic projects through our video collection.
            </p>

            {/* Hero Action Buttons - Left Aligned */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <a
                href="#videos"
                className="inline-flex items-center px-4 py-1.5 sm:py-2 rounded-lg bg-gradient-to-r from-[#087FEA] to-[#00BCEB] hover:opacity-95 text-white font-semibold text-xs shadow-sm hover:shadow-cyan-500/20 transition-all"
              >
                <span>Explore Videos</span>
                <ChevronDown className="w-3.5 h-3.5 ml-1" />
              </a>

              <button
                type="button"
                onClick={() => setQuoteModalOpen(true)}
                className="inline-flex items-center px-4 py-1.5 sm:py-2 rounded-lg bg-white/10 hover:bg-white/15 border border-[#00E5FF]/40 hover:border-[#00E5FF] text-white font-semibold text-xs backdrop-blur-sm transition-all"
              >
                <span>Request a Quote</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. CATEGORIES & VIDEO GALLERY (Light Content Section)
      ========================================================================= */}
      <section id="videos" className="py-14 sm:py-16 lg:py-20 bg-[#F4F8FC] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#087FEA]">
              VIDEO PORTFOLIO
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#06264A] tracking-tight">
              Aquatic Lighting &amp; Installation Demonstrations
            </h2>
            <p className="text-sm sm:text-base text-[#52677C] leading-relaxed">
              Browse our complete video collection demonstrating submersible LED luminaires, fountain choreography, water blade features, and commercial installations.
            </p>
          </div>

          {/* Horizontal Responsive Category Filters */}
          <div className="mb-10 sm:mb-12">
            <div className="flex items-center space-x-2 overflow-x-auto pb-3 sm:pb-0 sm:flex-wrap sm:justify-center sm:gap-2 no-scrollbar">
              {VIDEO_CATEGORIES.map((category) => {
                const isActive = selectedCategory === category;
                const count = category === 'All Videos'
                  ? PORTFOLIO_VIDEOS.length
                  : PORTFOLIO_VIDEOS.filter(v => v.category === category).length;

                return (
                  <button
                    key={category}
                    onClick={() => handleCategorySelect(category)}
                    className={`whitespace-nowrap px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 shrink-0 ${
                      isActive
                        ? 'bg-[#087FEA] text-white shadow-md shadow-[#087FEA]/30 scale-102'
                        : 'bg-white text-[#06264A] hover:bg-[#EAF4FC] hover:text-[#087FEA] border border-[#CBDCEB]/60'
                    }`}
                  >
                    <span>{category}</span>
                    <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-[#52677C]'
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Video Grid (Desktop: 3 cols, Tablet: 2 cols, Mobile: 1 col) */}
          {visibleVideos.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {visibleVideos.map((video) => (
                <div
                  key={video.id}
                  className="group bg-white rounded-2xl border border-[#CBDCEB]/70 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Thumbnail & Play Overlay */}
                  <div
                    onClick={() => setActiveVideo(video)}
                    className="relative aspect-video w-full bg-slate-900 cursor-pointer overflow-hidden"
                    role="button"
                    tabIndex={0}
                    aria-label={`Play video: ${video.title}`}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setActiveVideo(video); }}
                  >
                    <Image
                      src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                      alt={video.title}
                      fill
                      loading="lazy"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 group-hover:via-black/10 transition-colors" />

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#087FEA]/90 group-hover:bg-[#00BCEB] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                        <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-current ml-0.5" />
                      </div>
                    </div>

                    {/* Category Label */}
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#06264A]/80 text-[#00BCEB] backdrop-blur-xs border border-white/10">
                      {video.category}
                    </span>

                    {/* Duration Badge */}
                    <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-black/80 text-white">
                      {video.duration}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-base sm:text-lg font-bold text-[#06264A] group-hover:text-[#087FEA] transition-colors line-clamp-2 leading-snug">
                        {video.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#52677C] leading-relaxed line-clamp-2">
                        {video.description}
                      </p>
                    </div>

                    {/* Card Footer: Watch Video Action & External Link */}
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                      <button
                        onClick={() => setActiveVideo(video)}
                        className="inline-flex items-center space-x-1.5 font-bold text-[#087FEA] hover:text-[#00BCEB] transition-colors"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Watch Video</span>
                      </button>

                      <a
                        href={`https://www.youtube.com/watch?v=${video.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-slate-600 transition-colors inline-flex items-center"
                        title="Watch on YouTube"
                        aria-label={`Watch ${video.title} on YouTube`}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-200 p-8 max-w-md mx-auto">
              <Tv className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-[#06264A]">No videos found</h3>
              <p className="text-xs text-slate-500 mt-1">
                There are no videos currently categorized under {selectedCategory}.
              </p>
              <button
                onClick={() => handleCategorySelect('All Videos')}
                className="mt-4 px-5 py-2 rounded-full bg-[#087FEA] text-white text-xs font-bold"
              >
                View All Videos
              </button>
            </div>
          )}

          {/* Load More Button */}
          {hasMore && (
            <div className="mt-12 text-center">
              <button
                onClick={handleLoadMore}
                className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-white hover:bg-[#EAF4FC] border border-[#CBDCEB] text-[#06264A] hover:text-[#087FEA] font-bold text-xs sm:text-sm uppercase tracking-wider shadow-sm transition-all"
              >
                <span>Load More Videos</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <p className="text-xs text-[#52677C] mt-2">
                Showing {visibleVideos.length} of {filteredVideos.length} videos
              </p>
            </div>
          )}

        </div>
      </section>

      {/* =========================================================================
          4. PROJECT ENQUIRY CTA SECTION
      ========================================================================= */}
      <section className="relative py-20 bg-[#03172D] text-white overflow-hidden">
        {/* Cinematic pool background with 55% dark overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/banners/banner-pool.jpg"
            alt="Swimming Pool Lighting Project Planning"
            fill
            className="object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#03172D]/95 via-[#06264A]/80 to-[#03172D]/95" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#00BCEB]/20 text-[#00BCEB] border border-[#00BCEB]/30">
            <Sparkles className="w-3.5 h-3.5 mr-1.5" />
            B2B Commercial &amp; Project Support
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Planning Your Next Lighting Project?
          </h2>

          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Discover lighting solutions for swimming pools, fountains, water features, and landscape projects. Direct factory support for pool builders, MEP contractors, and landscape architects.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/products"
              className="inline-flex items-center px-7 py-3.5 rounded-full bg-[#00BCEB] hover:bg-[#087FEA] text-[#03172D] hover:text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg transition-all"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>

            <button
              onClick={() => setQuoteModalOpen(true)}
              className="inline-flex items-center px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/40 text-white font-bold text-xs sm:text-sm uppercase tracking-wider backdrop-blur-sm transition-all"
            >
              <span>Request a Quote</span>
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. ACCESSIBLE VIDEO MODAL PLAYER
      ========================================================================= */}
      {activeVideo && (
        <div 
          className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setActiveVideo(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="video-modal-title"
        >
          <div 
            className="relative bg-[#06264A] border border-[#087FEA]/40 rounded-2xl sm:rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl text-white"
            onClick={e => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors"
              aria-label="Close video player"
            >
              <X className="w-5 h-5" />
            </button>

            {/* 16:9 Responsive Embed */}
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1&rel=0`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>

            {/* Video Details in Modal */}
            <div className="p-5 sm:p-6 space-y-3 bg-[#03172D]">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#087FEA]/20 text-[#00BCEB] border border-[#00BCEB]/30">
                  {activeVideo.category}
                </span>

                <a
                  href={`https://www.youtube.com/watch?v=${activeVideo.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs text-slate-300 hover:text-white transition-colors"
                >
                  <span>Watch on YouTube</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#00BCEB]" />
                </a>
              </div>

              <h3 id="video-modal-title" className="text-lg sm:text-xl font-bold text-white leading-snug">
                {activeVideo.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {activeVideo.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Quotation Popup Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
      />

    </div>
  );
}
