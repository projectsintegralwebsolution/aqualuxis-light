import type { Metadata } from 'next';
import SurfacePoolLightDetail from '@/components/SurfacePoolLightDetail';

export const metadata: Metadata = {
  title: 'Surface Model Swimming Pool Light (AL00–AL015) | Aqualuxis Light',
  description: 'Premium surface-mounted swimming pool lighting solutions engineered for durability, efficient illumination and reliable underwater performance. Models AL00 to AL015 in SS 304/306 and Aluminium.',
  alternates: {
    canonical: 'https://aqualuxislight.com/products/surface-model-swimming-pool-light-al00-al015',
  },
  openGraph: {
    title: 'Surface Model Swimming Pool Light (AL00–AL015) | AQUALUXIS LIGHT',
    description: 'Explore the complete family of surface-mounted pool lights (AL00 to AL015) in SS 304/306 and Aluminium.',
    images: ['/assets/products/al00-surface-pool-light.jpg'],
  },
};

export default function SurfacePoolLightFamilyAliasPage() {
  return <SurfacePoolLightDetail />;
}
