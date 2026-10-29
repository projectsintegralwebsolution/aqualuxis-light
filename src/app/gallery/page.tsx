import type { Metadata } from 'next';
import OurWorkPortfolio from '@/components/OurWorkPortfolio';

export const metadata: Metadata = {
  title: 'Our Work | Pool & Fountain Lighting Videos | AQUALUXIS LIGHT',
  description: 'Explore pool lighting, underwater LED lights, fountain illumination and water feature videos from AQUALUXIS LIGHT. Discover lighting inspiration for your next project.',
  alternates: {
    canonical: 'https://aqualuxislight.com/gallery',
  },
  openGraph: {
    title: 'Our Work | Pool & Fountain Lighting Videos | AQUALUXIS LIGHT',
    description: 'Explore verified installations of AQUALUXIS LIGHT submersible LED luminaires and dynamic water fountain systems.',
    url: 'https://aqualuxislight.com/gallery',
    siteName: 'AQUALUXIS LIGHT',
    images: [
      {
        url: 'https://aqualuxislight.com/assets/banners/banner-pool-night.jpg',
        width: 1200,
        height: 630,
        alt: 'AQUALUXIS LIGHT - Our Work Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function GalleryPage() {
  return <OurWorkPortfolio />;
}
