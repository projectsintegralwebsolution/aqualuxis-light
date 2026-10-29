import type { Metadata } from 'next';
import OurWorkPortfolio from '@/components/OurWorkPortfolio';

export const metadata: Metadata = {
  title: 'Our Work | Pool & Fountain Lighting Videos | AQUALUXIS LIGHT',
  description: 'Explore pool lighting, underwater LED lights, fountain illumination and water feature videos from AQUALUXIS LIGHT. Discover lighting inspiration for your next project.',
  alternates: {
    canonical: 'https://aqualuxislight.com/gallery',
  },
};

export default function ProjectsPage() {
  return <OurWorkPortfolio />;
}
