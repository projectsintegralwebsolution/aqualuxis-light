import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Waves, ShieldCheck, Zap, Droplet, CheckCircle2, ArrowRight } from 'lucide-react';
import { getProductsByCategory, CATEGORIES } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import PageBanner from '@/components/PageBanner';

export const metadata: Metadata = {
  title: 'Swimming Pool Lighting (IP68) | Surface, Slim ABS & Stainless Steel Luminaires',
  description: 'Explore certified IP68 underwater LED swimming pool lights engineered from marine-grade SS 304/316 and high-impact ABS. Available in surface-mount, ultra-slim 15mm, and concealed designs.',
  openGraph: {
    title: 'Pool Lighting | AQUALUXIS LIGHT',
    description: 'Certified IP68 underwater swimming pool luminaires in marine stainless steel and ABS. Safe 12V low voltage operation.',
    images: ['/assets/hero/hero-pool-night-luxury.webp'],
  },
};

export default function PoolLightingPage() {
  const products = getProductsByCategory('pool-lighting');
  const categoryInfo = CATEGORIES.find(c => c.id === 'pool-lighting');

  return (
    <div className="bg-white min-h-screen text-[#142C49]">
      {/* Standardized Page Banner */}
      <PageBanner
        breadcrumbs={[
          { label: 'Products', href: '/products' },
          { label: 'Swimming Pool Lighting' }
        ]}
        badge={
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-xs border border-white/20 text-xs text-[#00E5FF] font-semibold shadow-xs">
            <Waves className="w-3.5 h-3.5" />
            <span>Certified Submersible Ingress IP68</span>
          </div>
        }
        title="Swimming Pool Lighting"
        description="Manufactured with premium SS 304/316 marine-grade stainless steel plates and high-impact ABS resins, AQUALUXIS LIGHT swimming pool luminaires deliver uniform underwater illumination for concrete, tiled, and fiberglass pools."
        imageSrc="/assets/banners/banner-pool.jpg"
        imageAlt="Swimming Pool Lighting"
        rightContent={
          <div className="bg-[#0A2544]/85 backdrop-blur-md border border-[#00E5FF]/20 p-4 rounded-xl shadow-xl space-y-2.5 text-xs">
            <div className="font-bold text-xs text-white flex items-center">
              <ShieldCheck className="w-4 h-4 mr-1.5 text-[#00E5FF]" />
              Engineering Highlights
            </div>
            <div className="space-y-1.5 text-[#DCE5EF] text-[11px]">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5FF] shrink-0" />
                <span>Body: SS 304 / 316 / ABS / Aluminium Plate</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5FF] shrink-0" />
                <span>Lenses: Impact &amp; UV-Resistant Polycarbonate</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5FF] shrink-0" />
                <span>Cabling: Poly Cab 1M Submersible Wire</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5FF] shrink-0" />
                <span>Power: 12V Safe Low Voltage System</span>
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
              Verified Pool Light Models ({products.length})
            </h2>
            <p className="text-xs sm:text-sm text-[#63758B]">
              Surface, flush-mount, and niche models engineered for commercial and luxury residential swimming pools.
            </p>
          </div>
          <Link
            href="/catalogue"
            className="hidden sm:inline-flex items-center text-xs font-bold text-[#087FE5] hover:underline"
          >
            <span>Download Pool Catalogue (PDF)</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Engineering Technical Guide Strip */}
      <section className="py-12 bg-[#F0F7FC] border-t border-b border-[#CBDCEB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-[#CBDCEB] space-y-2">
              <span className="text-xs font-bold uppercase text-[#087FE5]">Submersible Safety</span>
              <h3 className="font-bold text-base text-[#142C49]">12V AC/DC Low-Voltage Compliance</h3>
              <p className="text-xs text-[#63758B] leading-relaxed">
                All pool luminaires operate strictly on 12V supply. Galvanic safety isolation transformers are required outside pool wet zones to satisfy international electrical codes.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#CBDCEB] space-y-2">
              <span className="text-xs font-bold uppercase text-[#087FE5]">Material Integrity</span>
              <h3 className="font-bold text-base text-[#142C49]">Stainless Steel 316 vs 304 Selection</h3>
              <p className="text-xs text-[#63758B] leading-relaxed">
                For freshwater chlorinated pools, SS 304 provides robust protection. For saltwater pools, marine environments, and therapeutic spas, SS 316 grade is specified to eliminate pitting corrosion.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#CBDCEB] space-y-2">
              <span className="text-xs font-bold uppercase text-[#087FE5]">Photometric Distribution</span>
              <h3 className="font-bold text-base text-[#142C49]">Glare-Controlled Wide Beam Lenses</h3>
              <p className="text-xs text-[#63758B] leading-relaxed">
                Engineered frosted and patterned diffuser lenses distribute illumination evenly across pool floors and walls without producing uncomfortable glare for swimmers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
