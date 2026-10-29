import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Download, FileText, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import PageBanner from '@/components/PageBanner';
import { CATALOGUES } from '@/data/products';

export const metadata: Metadata = {
  title: 'Download Product Catalogues & PDF Brochures | AQUALUXIS LIGHT',
  description: 'Download verified high-resolution PDF product catalogues for AQUALUXIS LIGHT swimming pool lights, fountain illumination, and architectural water feature equipment.',
};

export default function CataloguePage() {
  return (
    <div className="bg-white min-h-screen text-[#142C49]">
      {/* Standardized Page Banner */}
      <PageBanner
        breadcrumbs={[{ label: 'Product Catalogues' }]}
        badge={
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/10 backdrop-blur-xs text-[#00E5FF] border border-white/20 shadow-xs">
            <FileText className="w-3.5 h-3.5 mr-1.5 text-[#00E5FF]" />
            Verified Technical Documentation
          </span>
        }
        title="Product Catalogues & Brochures"
        description="Download our official verified high-resolution product catalogues. Complete with dimensional drawings, lumen outputs, beam angles, wiring schematics, and installation instructions for pool builders, electrical contractors, and landscape architects."
        imageSrc="/assets/banners/banner-fountains.png"
        imageAlt="Product Catalogues & Brochures"
      />

      {/* Catalogues Cards Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CATALOGUES.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl border border-[#CBDCEB] overflow-hidden shadow-card-subtle hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Cover Preview */}
              <div className="relative aspect-[16/10] bg-[#F0F7FC] overflow-hidden p-6 flex items-center justify-center border-b border-[#CBDCEB]">
                <Image
                  src={item.cover}
                  alt={item.title}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#082B52] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-xs">
                  {item.pages} Pages • {item.fileSize}
                </div>
                <div className="absolute top-4 right-4 bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-200 shadow-2xs flex items-center">
                  <ShieldCheck className="w-3.5 h-3.5 mr-1" />
                  Verified
                </div>
              </div>

              {/* Information */}
              <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#087FE5]">
                    Official Engineering Edition
                  </span>
                  <h3 className="text-2xl font-bold text-[#142C49] group-hover:text-[#087FE5] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[#63758B] text-sm leading-relaxed">
                    {item.description}
                  </p>

                  <div className="pt-2 space-y-1.5 text-xs text-[#142C49]">
                    <div className="flex items-center">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#087FE5] mr-2 shrink-0" />
                      Complete dimension sheets and cutout templates
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#087FE5] mr-2 shrink-0" />
                      Photometric data, beam angle charts &amp; wiring guides
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#087FE5] mr-2 shrink-0" />
                      12V / 24V AC/DC low-voltage electrical safety standards
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-6 border-t border-[#E3EDF5] flex items-center justify-between">
                  <span className="text-xs text-[#63758B] font-medium">Format: High-Res PDF</span>
                  <a
                    href={item.file}
                    download={item.filename}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 rounded-full bg-[#087FE5] hover:bg-[#20C7E8] hover:text-[#082B52] text-white font-bold text-xs shadow-md transition-all"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF ({item.fileSize})
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom CAD / Consultation Strip */}
        <div className="mt-16 bg-[#082B52] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl border border-[#CBDCEB]">
          <div className="absolute right-0 bottom-0 w-96 h-96 bg-[#087FE5]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="relative max-w-3xl space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#20C7E8]">
              Need Custom CAD / IES Files?
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Need Project-Specific Lighting Calculations or Custom Bracket Drawings?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Our engineering department provides DIALux simulation files, IES photometric distributions, and tailored mounting drawings for bespoke pool, musical fountain, and water cascade projects.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center px-6 py-3 rounded-full bg-[#087FE5] hover:bg-[#20C7E8] hover:text-[#082B52] text-white font-bold text-xs shadow-md transition-all"
              >
                Contact Engineering Desk
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <a
                href="https://wa.me/918668466689?text=Hello%20Aqualuxis%20Team,%20I%20need%20custom%20lighting%20cad%20files"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-all"
              >
                WhatsApp Technical Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
