import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import BackToTop from '@/components/BackToTop';
import { COMPANY_INFO } from '@/data/products';

export const metadata: Metadata = {
  metadataBase: new URL('https://aqualuxislight.com'),
  title: {
    default: 'AQUALUXIS LIGHT | Brilliance Beneath The Surface | Premium Underwater & Pool Lighting',
    template: '%s | AQUALUXIS LIGHT',
  },
  description: 'AQUALUXIS LIGHT manufactures certified IP68 waterproof LED swimming pool lights, fountain lighting fixtures, stainless steel nozzles, and architectural water feature luminaires.',
  keywords: [
    'AQUALUXIS LIGHT',
    'swimming pool lights',
    'underwater LED lights',
    'fountain lights',
    'fountain nozzles',
    'IP68 pool lights',
    'SS 304 pool lights',
    'SS 316 underwater lighting',
    'water feature lights',
    'wall washer lights',
    'water curtains',
    'Huma Fountains equivalent'
  ],
  authors: [{ name: 'AQUALUXIS LIGHT' }],
  creator: 'AQUALUXIS LIGHT',
  publisher: 'AQUALUXIS LIGHT',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aqualuxislight.com',
    siteName: 'AQUALUXIS LIGHT',
    title: 'AQUALUXIS LIGHT | Brilliance Beneath The Surface',
    description: 'Certified IP68 underwater LED pool lights, fountain lighting systems, and architectural water feature luminaires.',
    images: [
      {
        url: '/assets/branding/aqualuxis-logo.jpg',
        width: 1200,
        height: 630,
        alt: 'AQUALUXIS LIGHT Logo - Brilliance Beneath The Surface',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AQUALUXIS LIGHT | Brilliance Beneath The Surface',
    description: 'Precision-engineered underwater LED luminaires for luxury pools, dynamic fountains, and architectural water features.',
    images: ['/assets/branding/aqualuxis-logo.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://aqualuxislight.com/#organization',
    name: 'AQUALUXIS LIGHT',
    url: 'https://aqualuxislight.com',
    logo: 'https://aqualuxislight.com/assets/branding/aqualuxis-logo.jpg',
    slogan: 'BRILLIANCE BENEATH THE SURFACE',
    description: 'Certified IP68 waterproof underwater LED lighting, pool luminaires, fountain systems, and water feature solutions.',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: COMPANY_INFO.phone,
      contactType: 'technical support & sales',
      email: COMPANY_INFO.email,
      areaServed: 'Global',
      availableLanguage: ['English', 'Hindi'],
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Industrial Lighting Zone, Vasai East',
      addressLocality: 'Vasai',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN',
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://aqualuxislight.com/#website',
    url: 'https://aqualuxislight.com',
    name: 'AQUALUXIS LIGHT',
    publisher: {
      '@id': 'https://aqualuxislight.com/#organization',
    },
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-white text-[#142C49] selection:bg-[#087FE5] selection:text-white">
        <Header />
        <main className="flex-1 pt-[72px] lg:pt-[116px]">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <BackToTop />
      </body>
    </html>
  );
}
