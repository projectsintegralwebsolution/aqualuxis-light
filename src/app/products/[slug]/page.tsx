import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PRODUCTS, getProductBySlug } from '@/data/products';
import ProductDetailClient from '@/components/ProductDetailClient';

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = getProductBySlug(params.slug);

  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  const title = `${product.name} (${product.code}) | IP68 Underwater Lighting`;
  const description = `${product.shortDescription} Engineered by AQUALUXIS LIGHT with ${product.specifications['Protection Class'] || 'IP68'} protection and ${product.specifications['Body Material'] || 'marine-grade alloy'}.`;

  return {
    title,
    description,
    openGraph: {
      title: `${product.code} - ${product.name} | AQUALUXIS LIGHT`,
      description,
      images: [
        {
          url: product.image,
          width: 800,
          height: 600,
          alt: `${product.name} (${product.code}) AQUALUXIS LIGHT`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.code} - ${product.name}`,
      description,
      images: [product.image],
    },
  };
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  // Schema.org Product structured data (factual, no invented fake reviews)
  const productSchema = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: product.name,
    image: [`https://aqualuxislight.com${product.image}`],
    description: product.description,
    sku: product.code,
    mpn: product.code,
    brand: {
      '@type': 'Brand',
      name: 'AQUALUXIS LIGHT',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'AQUALUXIS LIGHT',
    },
    category: product.categoryName,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <ProductDetailClient product={product} />
    </>
  );
}
