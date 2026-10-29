import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, ShieldCheck, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';
import { getProductsByCategory, CATEGORIES } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import PageBanner from '@/components/PageBanner';

export const metadata: Metadata = {
  title: 'Fountain Lighting & Nozzles (IP68) | Center-Hole, Spot & Swivel Fixtures',
  description: 'Precision IP68 underwater fountain lights, center-hole donut lights for fountain nozzles, heavy-duty adjustable stand spots, and architectural fountain nozzles.',
  openGraph: {
    title: 'Fountain Lighting | AQUALUXIS LIGHT',
    description: 'High-intensity submersible LED luminaires and nozzles for dynamic water features and vertical dancing fountains.',
    images: ['/assets/hero/hero-fountain-grand.webp'],
  },
};

export default function FountainLightingPage() {
  const products = getProductsByCategory('fountain-lighting');

  return (
    <div className="bg-white min-h-screen text-[#142C49]">
      {/* Standardized Page Banner */}
      <PageBanner
        breadcrumbs={[
          { label: 'Products', href: '/products' },
          { label: 'Fountain Lighting & Nozzles' }
        ]}
        badge={
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-xs border border-white/20 text-xs text-[#00E5FF] font-semibold shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Center Hole &amp; Concentrated Beam Optics</span>
          </div>
        }
        title="Fountain Lighting & Nozzles"
        description="Engineered to penetrate dense vertical water columns and dynamic aeration jets. Our center-hole donut fixtures mount directly around fountain nozzles, delivering intense optical saturation without shadows."
        imageSrc="/assets/banners/banner-fountains.png"
        imageAlt="Fountain Lighting & Nozzles"
        rightContent={
          <div className="bg-[#0A2544]/85 backdrop-blur-md border border-[#00E5FF]/20 p-4 rounded-xl shadow-xl space-y-2.5 text-xs">
            <div className="font-bold text-xs text-white flex items-center">
              <ShieldCheck className="w-4 h-4 mr-1.5 text-[#00E5FF]" />
              Optical &amp; Mounting Features
            </div>
            <div className="space-y-1.5 text-[#DCE5EF] text-[11px]">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5FF] shrink-0" />
                <span>Center-Hole Sizes: 1&quot;, 1.5&quot;, 2&quot; BSP/NPT</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5FF] shrink-0" />
                <span>Beam Angles: 10°, 20°, 30°, 45°, 90° Optical</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5FF] shrink-0" />
                <span>Swivel Brackets: 180° Heavy Duty SS Pivot</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5FF] shrink-0" />
                <span>Full SS 304/316 High-Corrosion Casting</span>
              </div>
            </div>
          </div>
        }
      />

      {/* Product Catalog Grid */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#142C49]">
              Verified Fountain Models &amp; Nozzles ({products.length})
            </h2>
            <p className="text-xs sm:text-sm text-[#63758B]">
              Spot luminaires, center-hole fixtures, and precision stainless steel nozzles for musical fountains and public plazas.
            </p>
          </div>
          <Link
            href="/catalogue"
            className="hidden sm:inline-flex items-center text-xs font-bold text-[#087FE5] hover:underline"
          >
            <span>Download Fountain Catalogue (PDF)</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
