import type { Metadata } from 'next';
import Link from 'next/link';
import PageBanner from '@/components/PageBanner';

export const metadata: Metadata = {
  title: 'Privacy Policy | AQUALUXIS LIGHT',
  description: 'Privacy Policy and data governance for AQUALUXIS LIGHT technical inquiries and customer communications.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Standardized Page Banner */}
      <PageBanner
        breadcrumbs={[{ label: 'Privacy Policy' }]}
        eyebrow="LEGAL & DATA GOVERNANCE"
        title="Privacy Policy"
        description="Last updated: October 2026 • Certified IP68 aquatic lighting manufacturer and technical sales inquiries."
        imageSrc="/assets/banners/banner-fountains.png"
        imageAlt="Privacy Policy"
      />

      <section className="py-14 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-sm prose-slate text-xs text-[#071426]/85 space-y-6">
        <div>
          <h2 className="text-base font-bold text-[#071426]">1. Information We Collect</h2>
          <p className="mt-1 leading-relaxed">
            AQUALUXIS LIGHT collects personal and business details voluntarily provided through our quotation and technical support forms, including your full name, company name, corporate email address, phone/WhatsApp number, and project lighting parameters.
          </p>
        </div>

        <div>
          <h2 className="text-base font-bold text-[#071426]">2. How We Utilize Project Information</h2>
          <p className="mt-1 leading-relaxed">
            Information collected is strictly utilized to respond to quotation requests, prepare photometric calculations, provide technical sizing advice, and arrange delivery logistics. We never sell, rent, or trade your contact information to third-party advertisers.
          </p>
        </div>

        <div>
          <h2 className="text-base font-bold text-[#071426]">3. Security and Storage</h2>
          <p className="mt-1 leading-relaxed">
            All data transmissions are protected via SSL/TLS encryption protocols. Administrative access to inquiry databases is restricted to authorized lighting engineering and commercial personnel.
          </p>
        </div>

        <div>
          <h2 className="text-base font-bold text-[#071426]">4. Contact Our Data Controller</h2>
          <p className="mt-1 leading-relaxed">
            For questions regarding our privacy practices or to request modification of submitted project records, contact us at <a href="mailto:info@aqualuxislight.com" className="text-[#008CFF] underline">info@aqualuxislight.com</a>.
          </p>
        </div>
      </section>
    </div>
  );
}
