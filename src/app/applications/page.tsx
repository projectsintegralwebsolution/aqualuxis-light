import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Waves, 
  Droplet, 
  SunMedium, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2,
  Compass,
  Cpu,
  ShieldCheck,
  Layers
} from 'lucide-react';
import PageBanner from '@/components/PageBanner';

export const metadata: Metadata = {
  title: 'Applications & Lighting Solutions | Swimming Pools, Fountains & Cascades',
  description: 'Explore comprehensive aquatic illumination solutions for luxury residential pools, commercial resorts, dynamic fountain geysers, and architectural water walls.',
};

export default function ApplicationsPage() {
  const applicationCategories = [
    {
      id: 'swimming-pools',
      title: 'Swimming Pool Illumination',
      subtitle: 'Residential Estates, Resort Lagoons & Olympic Aquatic Complexes',
      description: 'Underwater swimming pool lighting requires high luminous efficacy to evenly diffuse through water while minimizing glare on the surface. AQUALUXIS LIGHT provides both ultra-slim surface-mount models (15mm profile) for simple retrofit/installation and heavy-duty 11-inch fixtures for high-depth illumination.',
      image: '/assets/hero/hero-pool-night-luxury.webp',
      recommendedCodes: ['HF00 - HF05', 'HF012', 'HF011 / HF013', 'HF020 / HF021', 'HF023 - HF027'],
      benefits: [
        'Safe 12V AC/DC low-voltage operation compliant with pool safety codes',
        'Multi-angle optical lenses (10° to 90°) for uniform pool floor grazing',
        'Resistance to chlorine, bromine, and salt-electrolyzed pool water',
        'Available in monochromatic (WW 3000K, CW 6500K) and synchronous RGB'
      ],
      link: '/pool-lighting',
      icon: Waves
    },
    {
      id: 'fountains-geysers',
      title: 'Dynamic Fountains & Dancing Jets',
      subtitle: 'Vertical Water Columns, Bell Displays & Frothy Foam Jets',
      description: 'Fountains present extreme turbulence and vertical aeration that rapidly disperse ordinary light. Our center-hole donut fixtures (HF052–HF061) thread directly onto fountain nozzles, firing focused beams upward inside the water core for brilliant, shadow-free illumination.',
      image: '/assets/hero/hero-fountain-grand.webp',
      recommendedCodes: ['HF039 - HF042', 'HF043 - HF047', 'HF052 - HF057', 'HF058 - HF061', 'HF064'],
      benefits: [
        'Center-hole pass-through fitting 1", 1.5", and 2" nozzle threads',
        'High-punch spot optics designed to illuminate water columns up to 15m high',
        '180° heavy-duty swivel brackets for pinpoint angled target aiming',
        'Solid SS 304/316 submersible construction resisting mineral buildup'
      ],
      link: '/fountain-lighting',
      icon: Droplet
    },
    {
      id: 'water-walls-cascades',
      title: 'Architectural Cascades & Spillways',
      subtitle: 'Shear Descents, Acrylic Cobra Waterfalls & Wall Grazers',
      description: 'Water walls and sheet cascades require specialized illumination that emphasizes the fluid texture without hot spots. From linear IP68 LED wall washers grazing stone backdrops to illuminated acrylic cobra waterfalls where the water itself glows, AQUALUXIS LIGHT creates captivating focal points.',
      image: '/assets/products/hf080-action-water-flow.jpg',
      recommendedCodes: ['HF062', 'HF076', 'HF078', 'HF080', 'HF077'],
      benefits: [
        'Integrated LED channels within acrylic nozzles for internal water glow',
        'Smooth laminar sheet spillways producing crystal-clear shear cascades',
        'Linear wall washers with asymmetric optics for wall texture grazing',
        'Durable stainless steel construction matching modern architecture'
      ],
      link: '/water-feature-lighting',
      icon: Layers
    }
  ];

  return (
    <div className="bg-white min-h-screen text-[#142C49]">
      {/* Standardized Page Banner */}
      <PageBanner
        breadcrumbs={[{ label: 'Applications & Solutions' }]}
        eyebrow="ARCHITECTURAL LIGHTING DESIGN"
        title="Applications & Aquatic Solutions"
        description="Explore how AQUALUXIS LIGHT luminaires are engineered to illuminate swimming pools, vertical fountain columns, architectural cascades, and public water spectacles."
        imageSrc="/assets/banners/banner-fountains.png"
        imageAlt="Applications & Aquatic Solutions"
        badge={
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-xs border border-white/20 text-xs text-[#00E5FF] font-semibold shadow-xs">
            <Compass className="w-3.5 h-3.5" />
            <span>Commercial &amp; Residential Aquatic Applications</span>
          </div>
        }
      />

      {/* Main Solutions List */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-20">
        {applicationCategories.map((app, idx) => {
          const CategoryIcon = app.icon;
          return (
            <div
              key={app.id}
              id={app.id}
              className="bg-white rounded-3xl border border-[#DCE8F2] p-6 sm:p-8 lg:p-10 shadow-card-subtle hover:shadow-card-hover transition-all duration-300"
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Visual Column */}
                <div className={`lg:col-span-6 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative aspect-[16/11] sm:aspect-[4/3] rounded-2xl overflow-hidden border border-[#CBDCEB] shadow-sm bg-[#082B52] group">
                    <Image
                      src={app.image}
                      alt={app.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 550px"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Badge & Title Overlay on Image Bottom */}
                    <div className="absolute bottom-5 left-5 right-5 text-white">
                      <div className="inline-flex items-center space-x-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-[#20C7E8] bg-[#082B52]/90 backdrop-blur-xs px-3 py-1 rounded-full border border-white/20 shadow-xs mb-2">
                        <CategoryIcon className="w-3.5 h-3.5" />
                        <span>Application Focus</span>
                      </div>
                      <h4 className="text-lg sm:text-xl font-bold leading-snug drop-shadow-sm">
                        {app.title}
                      </h4>
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div className={`lg:col-span-6 space-y-6 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#087FE5] block">
                      {app.subtitle}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#142C49] tracking-tight leading-tight">
                      {app.title}
                    </h3>
                  </div>

                  <p className="text-sm text-[#5A6E85] leading-relaxed">
                    {app.description}
                  </p>

                  {/* Recommended Codes */}
                  <div className="space-y-2 pt-1">
                    <span className="text-xs font-bold text-[#142C49] uppercase tracking-wider block">
                      Recommended Model Families:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {app.recommendedCodes.map(code => (
                        <span
                          key={code}
                          className="text-xs font-mono font-bold px-3 py-1.5 rounded-lg bg-[#F0F7FC] text-[#087FE5] border border-[#CBDCEB] shadow-2xs"
                        >
                          {code}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Benefits */}
                  <div className="space-y-2.5 pt-1">
                    <span className="text-xs font-bold text-[#142C49] uppercase tracking-wider block">
                      Key Technical Advantages:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#142C49]">
                      {app.benefits.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-start p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E8F1F7]">
                          <CheckCircle2 className="w-4 h-4 text-[#087FE5] mr-2 shrink-0 mt-0.5" />
                          <span className="leading-snug">{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Link */}
                  <div className="pt-2">
                    <Link
                      href={app.link}
                      className="inline-flex items-center px-7 py-3 rounded-full bg-[#087FE5] hover:bg-[#20C7E8] hover:text-[#06264A] text-white font-bold text-xs shadow-md transition-all group"
                    >
                      <span>Explore Suitable Products</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
