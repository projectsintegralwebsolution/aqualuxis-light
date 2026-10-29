import type { Metadata } from 'next';
import Link from 'next/link';
import PageBanner from '@/components/PageBanner';

export const metadata: Metadata = {
  title: 'Terms & Conditions | AQUALUXIS LIGHT',
  description: 'Terms and conditions governing the specification, supply, and warranty of AQUALUXIS LIGHT aquatic luminaires.',
};

export default function TermsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Standardized Page Banner */}
      <PageBanner
        breadcrumbs={[{ label: 'Terms & Conditions' }]}
        eyebrow="COMMERCIAL TERMS & SPECIFICATIONS"
        title="Terms & Conditions"
        description="Effective: October 2026 • Governing the specification, supply, and warranty of AQUALUXIS LIGHT luminaires."
        imageSrc="/assets/banners/banner-fountains.png"
        imageAlt="Terms & Conditions"
      />

      <section className="py-14 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-sm prose-slate text-xs text-[#071426]/85 space-y-6">
        <div>
          <h2 className="text-base font-bold text-[#071426]">1. Product Specifications & Engineering Tolerances</h2>
          <p className="mt-1 leading-relaxed">
            All dimensions, optical beam angles, wattages, and materials published on this website are based on factory manufacturing specifications. Due to continuous engineering improvements, actual production tolerances adhere to ISO 9001:2015 standards.
          </p>
        </div>

        <div>
          <h2 className="text-base font-bold text-[#071426]">2. Electrical Installation & Safe Operating Conditions</h2>
          <p className="mt-1 leading-relaxed">
            All underwater pool and fountain luminaires must be installed by a licensed electrical contractor using certified step-down isolation transformers delivering safe extra-low voltage (12V AC/DC). Operating submersible fixtures outside water for prolonged testing will void the warranty due to lack of convective aquatic cooling.
          </p>
        </div>

        <div>
          <h2 className="text-base font-bold text-[#071426]">3. Manufacturer Limited Warranty</h2>
          <p className="mt-1 leading-relaxed">
            AQUALUXIS LIGHT luminaires carry a standard 2-Year Manufacturer Limited Warranty covering defects in materials and workmanship, provided fixtures are installed strictly in accordance with factory guidelines and protected by appropriate surge and earth-leakage devices.
          </p>
        </div>

        <div>
          <h2 className="text-base font-bold text-[#071426]">4. Commercial Quotations & Delivery</h2>
          <p className="mt-1 leading-relaxed">
            All commercial proposals and lead times are confirmed in writing via formal proforma documentation. For project inquiries, reach us at <a href="mailto:sales@aqualuxislight.com" className="text-[#008CFF] underline">sales@aqualuxislight.com</a>.
          </p>
        </div>
      </section>
    </div>
  );
}
