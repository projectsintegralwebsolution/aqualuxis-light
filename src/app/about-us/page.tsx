import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Gem, 
  Settings, 
  Layers, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import PageBanner from '@/components/PageBanner';

export const metadata: Metadata = {
  title: 'About Us | AQUALUXIS LIGHT - Brilliance Beneath The Surface',
  description: 'Learn about AQUALUXIS LIGHT, a premier aquatic lighting engineering brand dedicated to high-performance, IP68 certified submersible luminaires and fountain illumination.',
};

const brandFeatures = [
  {
    title: 'IP68 Underwater Protection',
    description: 'Engineered for demanding aquatic environments.',
    icon: ShieldCheck,
  },
  {
    title: 'Premium Build Quality',
    description: 'Marine-grade materials for long-lasting reliability.',
    icon: Gem,
  },
  {
    title: 'Precision Engineering',
    description: 'Designed for optimal light performance and safety.',
    icon: Settings,
  },
  {
    title: 'Custom Solutions',
    description: 'For pools, fountains, and architectural water features.',
    icon: Layers,
  },
];

const qaStages = [
  {
    step: '01',
    title: 'Hydrostatic Chamber Testing',
    description:
      'Luminaires are submerged in pressurized test chambers to 3 bar (equivalent to 30 meters water depth) to verify the hermetic seal of glands and gaskets.',
    imageSrc: '/assets/about/qa-hydrostatic-testing.jpg',
    imageAlt: 'Hydrostatic Chamber Pressure Testing for IP68 Aquatic Luminaires',
  },
  {
    step: '02',
    title: '48-Hour Thermal Burn-In',
    description:
      'Continuous 48-hour continuous burn-in cycle in heated aquatic baths to eliminate early component failure and verify PCB thermal regulation.',
    imageSrc: '/assets/about/qa-thermal-burnin.jpg',
    imageAlt: '48-Hour Submerged Thermal Burn-In Testing of LED Luminaires',
  },
  {
    step: '03',
    title: 'Spectrophotometric Color Audit',
    description:
      'Goniophotometer color consistency calibration to ensure zero chromatic deviation across multiple fixtures installed in the same pool body.',
    imageSrc: '/assets/about/qa-color-audit.jpg',
    imageAlt: 'Spectrophotometric Color and Chromaticity Calibration Audit',
  },
];

export default function AboutUsPage() {
  return (
    <div className="bg-white min-h-screen text-[#142C49]">
      {/* Standardized Page Banner */}
      <PageBanner
        breadcrumbs={[{ label: 'About Us' }]}
        eyebrow="AQUATIC ILLUMINATION ENGINEERING"
        title="About AQUALUXIS LIGHT"
        description="Brilliance Beneath The Surface. We develop certified IP68 underwater luminaires, precision fountain lights, and architectural water feature systems engineered for enduring performance in demanding aquatic environments."
        imageSrc="/assets/banners/banner-fountains.png"
        imageAlt="About AQUALUXIS LIGHT"
      />

      {/* Horizontal Value Feature Strip */}
      <section className="bg-white border-b border-[#E1EEF8] shadow-[0_2px_12px_rgba(8,127,229,0.03)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-7">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-y-6 lg:gap-0 lg:divide-x lg:divide-[#E1EEF8]">
            {brandFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={feature.title} 
                  className={`flex items-start gap-4 px-2 sm:px-4 lg:px-6 ${
                    idx % 2 === 0 ? 'sm:border-r sm:border-[#E1EEF8] lg:border-r-0' : ''
                  }`}
                >
                  <div className="w-11 h-11 rounded-xl bg-[#EAF5FC] text-[#087FE5] flex items-center justify-center shrink-0 border border-[#D5E9F8] shadow-xs">
                    <Icon className="w-5 h-5 text-[#087FE5]" strokeWidth={2.2} />
                  </div>
                  <div className="space-y-1 min-w-0">
                    <h3 className="text-sm font-bold text-[#142C49] leading-snug">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-[#63758B] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Brand Philosophy Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#087FE5]">
              OUR ENGINEERING PHILOSOPHY
            </span>
            <h2 className="text-3xl font-extrabold text-[#142C49] leading-tight">
              Where Hydrodynamic Resilience Meets Photometric Precision
            </h2>
            <p className="text-sm text-[#63758B] leading-relaxed">
              Submerged lighting exists at the challenging intersection of continuous hydrostatic pressure, corrosive chemical sanitizers, and thermal accumulation. At AQUALUXIS LIGHT, every fixture is engineered from the ground up to solve these fundamental physics challenges.
            </p>
            <p className="text-sm text-[#63758B] leading-relaxed">
              By pairing marine-grade SS 304/SS 316 stainless steel housings and impact-modified ABS plastics with high-efficiency Cree and Edison LED chips, we deliver fixtures that maintain peak lumen output for over 50,000 continuous hours submerged.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-4 text-xs font-semibold text-[#142C49]">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#087FE5] shrink-0" />
                <span>100% Factory Pressure Tested</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#087FE5] shrink-0" />
                <span>Chlorine &amp; Saline Resistance</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#087FE5] shrink-0" />
                <span>Safe 12V Low Voltage Standard</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#087FE5] shrink-0" />
                <span>2-Year Manufacturer Warranty</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-[#CBDCEB] shadow-card-subtle bg-[#082B52]">
              <Image
                src="/assets/hero/hero-fountain-grand.webp"
                alt="AQUALUXIS Production Facility & Fountain Testing"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 3-Stage Testing Protocols - Visual Redesign */}
      <section className="py-20 bg-gradient-to-b from-[#EBF5FC] via-[#E1F0FA] to-[#D5EAF7] border-t border-b border-[#CCE2F2] relative overflow-hidden">
        {/* Subtle aquatic caustic lighting overlay */}
        <div 
          className="absolute inset-0 opacity-40 pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 0%, rgba(255,255,255,0.8), transparent 70%), radial-gradient(circle at 80% 80%, rgba(32,199,232,0.15), transparent 50%)`,
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#087FE5] bg-white/70 px-3 py-1 rounded-full border border-[#CCE2F2] inline-block shadow-xs">
              QUALITY ASSURANCE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#142C49] tracking-tight">
              Rigorous 3-Stage Quality Protocols
            </h2>
            <p className="text-xs sm:text-sm text-[#4A6482] leading-relaxed">
              Every single luminaire batch undergoes stringent laboratory validation before dispatch to pool builders and mechanical electrical contractors.
            </p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
              {qaStages.map((stage) => (
                <div
                  key={stage.step}
                  className="bg-white rounded-2xl sm:rounded-3xl border border-[#CCE2F2] shadow-[0_4px_20px_rgba(8,127,229,0.06)] hover:shadow-[0_10px_30px_rgba(8,127,229,0.12)] hover:border-[#087FE5]/40 transition-all duration-300 p-5 sm:p-6 flex flex-col group relative"
                >
                  {/* Photo with rounded corners and circular numbered badge */}
                  <div className="relative w-full aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden bg-[#072445] mb-5 shadow-xs">
                    <Image
                      src={stage.imageSrc}
                      alt={stage.imageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Badge 01 / 02 / 03 - Floating on photo lower edge */}
                    <div className="absolute bottom-3 left-3 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/95 backdrop-blur-xs text-[#087FE5] font-black text-xs sm:text-sm flex items-center justify-center shadow-md border border-[#D5E9F8]">
                      {stage.step}
                    </div>
                  </div>

                  {/* Stage Content */}
                  <div className="space-y-2.5 flex-1 flex flex-col justify-start">
                    <h3 className="text-base sm:text-lg font-bold text-[#142C49] leading-snug group-hover:text-[#087FE5] transition-colors">
                      {stage.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[#63758B] leading-relaxed">
                      {stage.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Directional Process Arrows */}
            <div className="hidden md:flex absolute top-1/2 left-[33.33%] -translate-x-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white text-[#087FE5] shadow-md border border-[#CCE2F2] items-center justify-center pointer-events-none">
              <ArrowRight className="w-4 h-4 text-[#087FE5]" strokeWidth={2.5} />
            </div>
            <div className="hidden md:flex absolute top-1/2 left-[66.66%] -translate-x-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white text-[#087FE5] shadow-md border border-[#CCE2F2] items-center justify-center pointer-events-none">
              <ArrowRight className="w-4 h-4 text-[#087FE5]" strokeWidth={2.5} />
            </div>
          </div>

        </div>
      </section>

      {/* CTA Box */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#082B52] rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-[#CBDCEB]">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-bold">Partner With AQUALUXIS LIGHT</h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              We provide trade discount schedules, custom bracket engineering, and complete photometric calculations for commercial pool and municipal fountain projects.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-3">
            <Link
              href="/contact-us"
              className="inline-flex items-center px-6 py-3 rounded-full bg-[#087FE5] hover:bg-[#20C7E8] hover:text-[#082B52] text-white font-bold text-xs shadow-md transition-all"
            >
              <span>Contact Engineering Desk</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}