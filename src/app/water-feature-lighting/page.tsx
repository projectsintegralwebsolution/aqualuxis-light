import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SunMedium, ShieldCheck, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';
import { getProductsByCategory, CATEGORIES } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import PageBanner from '@/components/PageBanner';

export const metadata: Metadata = {
  title: 'Water Feature Lighting & Cascades | Wall Washers, Blades & Acrylic Cobras',
  description: 'Precision linear LED wall washers, stainless steel sheer descent cascades, and illuminated acrylic cobra water blades engineered for architectural water features.',
  openGraph: {
    title: 'Water Feature Lighting | AQUALUXIS LIGHT',
    description: 'Architectural wall washers, water cascades, and illuminated acrylic blades for luxury resorts and villas.',
    images: ['/assets/applications/app-architectural-facade.webp'],
  },
};

export default function WaterFeatureLightingPage() {
  const products = getProductsByCategory('water-feature-lighting');

  return (
    <div className="bg-white min-h-screen text-[#142C49]">
      {/* Standardized Page Banner */}
      <PageBanner
        breadcrumbs={[
          { label: 'Products', href: '/products' },
          { label: 'Water Feature Lighting & Cascades' }
        ]}
        badge={
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-xs border border-white/20 text-xs text-[#00E5FF] font-semibold shadow-xs">
            <SunMedium className="w-3.5 h-3.5" />
            <span>Architectural Grazing &amp; Laminar Cascades</span>
          </div>
        }
        title="Water Feature Lighting & Cascades"
        description="Elevate textured stone walls, glass water curtains, and swimming pool descents with linear LED wall washers and internal LED illuminated acrylic cobra nozzles."
        imageSrc="/assets/banners/banner-fountains.png"
        imageAlt="Water Feature Lighting & Cascades"
        rightContent={
          <div className="bg-[#0A2544]/85 backdrop-blur-md border border-[#00E5FF]/20 p-4 rounded-xl shadow-xl space-y-2.5 text-xs">
            <div className="font-bold text-xs text-white flex items-center">
              <ShieldCheck className="w-4 h-4 mr-1.5 text-[#00E5FF]" />
              Architectural Highlights
            </div>
            <div className="space-y-1.5 text-[#DCE5EF] text-[11px]">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5FF] shrink-0" />
                <span>Laminar Flow: Zero splashing sheer water veil</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5FF] shrink-0" />
                <span>Materials: 304/316 Stainless Steel &amp; UV Acrylic</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5FF] shrink-0" />
                <span>Grazing Optics: Asymmetric wall washer beams</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5FF] shrink-0" />
                <span>Colorways: Warm White, RGB, and DMX Sync</span>
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
              Verified Water Feature Models ({products.length})
            </h2>
            <p className="text-xs sm:text-sm text-[#63758B]">
              Linear wall washers, stainless steel water blades, and illuminated acrylic cobra water descents.
            </p>
          </div>
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
