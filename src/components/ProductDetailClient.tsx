'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Zap, 
  Layers, 
  Compass, 
  CheckCircle2, 
  Download, 
  Sparkles, 
  ChevronRight, 
  ChevronDown,
  PhoneCall, 
  HelpCircle,
  FileText,
  Maximize2,
  ArrowRight,
  MessageCircle
} from 'lucide-react';
import { Product, getRelatedProducts, CATALOGUES } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import QuoteModal from '@/components/QuoteModal';
import PageBanner from '@/components/PageBanner';

interface ProductDetailClientProps {
  product: Product;
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  const [selectedImage, setSelectedImage] = useState<string>(product.image);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const relatedProducts = getRelatedProducts(product.slug, 4);

  // Relevant catalogue for download
  const relevantCatalogue = product.category === 'pool-lighting' 
    ? CATALOGUES[0] 
    : CATALOGUES[1];

  // Specific FAQs based on product
  const faqs = [
    {
      q: `What is the warranty and ingress protection on ${product.code}?`,
      a: `${product.code} is certified IP68 waterproof for submerged underwater applications and is backed by a 2-Year Manufacturer Warranty under standard aquatic operation.`
    },
    {
      q: `What electrical supply and wiring is supplied with this fixture?`,
      a: `Operates on safe low voltage (12V AC/DC) and includes a factory-installed 1-metre Poly Cab submersible underwater grade cable sealed with an IP68 marine gland.`
    },
    {
      q: `What color options are available for ${product.code}?`,
      a: `Available in Warm White (WW 3000K), Cool White (CW 6500K), Blue, Red, Green, and dynamic RGB synchronous color control.`
    }
  ];

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className="bg-white min-h-screen text-[#142C49]">
      {/* Standardized Page Banner with Consistent Height */}
      <PageBanner
        breadcrumbs={[
          { label: 'Products', href: '/products' },
          { label: product.categoryName, href: `/${product.categorySlug}` },
          { label: `${product.code}` }
        ]}
        badge={
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-xs border border-white/20 text-xs text-[#00E5FF] font-semibold shadow-xs">
            <span className="font-mono font-bold tracking-wider">{product.code}</span>
            <span>•</span>
            <span>{product.specifications['Protection Class'] || 'IP68'} Submersible</span>
          </div>
        }
        title={product.name}
        description={product.shortDescription || `${product.categoryName} engineered for demanding aquatic environments.`}
        imageSrc={product.category === 'pool-lighting' ? '/assets/banners/banner-pool.jpg' : '/assets/banners/banner-fountains.png'}
        imageAlt={product.name}
      />

      {/* Main Product Hero & Gallery Overview */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Image Gallery Stage */}
          <div className="lg:col-span-6 space-y-4">
            {/* Main Image Stage */}
            <div className="relative aspect-[4/3] rounded-3xl bg-[#F8FBFE] border border-[#CBDCEB] p-6 sm:p-10 flex items-center justify-center overflow-hidden shadow-card-subtle group">
              {/* Product Code Badge */}
              <div className="absolute top-4 left-4 z-10 flex items-center space-x-2">
                <span className="px-3 py-1 rounded-lg text-xs font-mono font-bold uppercase tracking-wider bg-[#082B52] text-white shadow-xs">
                  {product.code}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-white text-[#087FE5] border border-[#CBDCEB]">
                  {product.specifications['Protection Class'] ? product.specifications['Protection Class'].split(' ')[0] : 'IP68'}
                </span>
              </div>

              {/* Centered Image with Contain */}
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={selectedImage}
                  alt={`${product.name} - ${product.code}`}
                  fill
                  className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>
            </div>

            {/* Gallery Thumbnails */}
            {product.gallery && product.gallery.length > 1 && (
              <div className="flex items-center space-x-3 overflow-x-auto pb-2 scrollbar-none">
                {product.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    aria-label={`View thumbnail ${idx + 1}`}
                    className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 shrink-0 bg-[#F8FBFE] p-1 transition-all ${
                      selectedImage === img
                        ? 'border-[#087FE5] shadow-md scale-105'
                        : 'border-[#CBDCEB] hover:border-[#087FE5]/60 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.code} thumbnail ${idx + 1}`}
                      fill
                      className="object-contain p-1"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Product Information & CTAs */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2.5">
              <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#087FE5]">
                <span>{product.subCategory}</span>
                <span>•</span>
                <span>{product.categoryName}</span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#142C49] tracking-tight leading-tight">
                {product.name}
              </h1>

              <div className="flex flex-wrap items-center gap-3 text-xs pt-1">
                <span className="font-semibold text-[#63758B]">Model Series:</span>
                <span className="font-mono font-bold text-[#082B52] bg-[#F0F7FC] px-2.5 py-1 rounded-md border border-[#CBDCEB]">
                  {product.code}
                </span>
                <span className="text-emerald-600 font-semibold flex items-center bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                  Verified Engineering Data
                </span>
              </div>
            </div>

            <p className="text-sm text-[#5A6E85] leading-relaxed">
              {product.description}
            </p>

            {/* Quick Specs Highlight Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-[#F4F9FD] border border-[#CBDCEB] text-xs">
              <div className="p-2 rounded-xl bg-white border border-[#E2EDF5]">
                <div className="text-[#63758B] text-[11px] font-medium">Protection Class</div>
                <div className="font-bold text-[#142C49] truncate mt-0.5">{product.specifications['Protection Class'] || 'IP68 Submersible'}</div>
              </div>
              <div className="p-2 rounded-xl bg-white border border-[#E2EDF5]">
                <div className="text-[#63758B] text-[11px] font-medium">LED Emitter</div>
                <div className="font-bold text-[#142C49] truncate mt-0.5">{product.specifications['LED Chip'] || 'Power LED'}</div>
              </div>
              <div className="p-2 rounded-xl bg-white border border-[#E2EDF5]">
                <div className="text-[#63758B] text-[11px] font-medium">Body Material</div>
                <div className="font-bold text-[#142C49] truncate mt-0.5">{product.specifications['Body Material'] || 'SS 304 / 316 / ABS'}</div>
              </div>
              <div className="p-2 rounded-xl bg-white border border-[#E2EDF5]">
                <div className="text-[#63758B] text-[11px] font-medium">Beam Angle</div>
                <div className="font-bold text-[#142C49] truncate mt-0.5">{product.specifications['Beam Angle'] || 'Multi-Angle'}</div>
              </div>
              <div className="p-2 rounded-xl bg-white border border-[#E2EDF5]">
                <div className="text-[#63758B] text-[11px] font-medium">Mounting Type</div>
                <div className="font-bold text-[#142C49] truncate mt-0.5">{product.specifications['Mounting'] || 'Submersible'}</div>
              </div>
              <div className="p-2 rounded-xl bg-white border border-[#E2EDF5]">
                <div className="text-[#63758B] text-[11px] font-medium">Warranty Period</div>
                <div className="font-bold text-[#142C49] truncate mt-0.5">{product.specifications['Warranty'] || '2 Years'}</div>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setQuoteOpen(true)}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-[#087FE5] to-[#20C7E8] text-white hover:scale-105 active:scale-95 transition-all shadow-md hover:shadow-cyan-500/25"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Request Technical Quote
              </button>

              <a
                href={relevantCatalogue.file}
                download={relevantCatalogue.filename}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full font-semibold text-xs text-[#082B52] bg-white hover:bg-[#F0F7FC] transition-all border border-[#CBDCEB] shadow-xs"
              >
                <Download className="w-4 h-4 mr-2 text-[#087FE5]" />
                Download Brochure (PDF)
              </a>
            </div>

            {/* Direct WhatsApp Quick Chat Link */}
            <div className="pt-1 flex items-center space-x-2 text-xs text-[#63758B]">
              <span>Need immediate sizing or installation guidance?</span>
              <a
                href={`https://wa.me/918668466689?text=Hello%20Aqualuxis%20Light%2C%20I%20need%20specifications%20for%20${encodeURIComponent(product.name)}%20(${product.code})`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#087FE5] font-semibold hover:underline flex items-center"
              >
                <MessageCircle className="w-3.5 h-3.5 mr-1" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Technical Specifications Section */}
      <section className="py-16 bg-[#F4F9FD] border-t border-b border-[#CBDCEB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left: Complete Specifications Table */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center space-x-2 text-[#087FE5]">
                <Layers className="w-5 h-5 text-[#087FE5]" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#142C49]">
                  Technical Specifications Table
                </h2>
              </div>

              <div className="bg-white rounded-2xl border border-[#CBDCEB] overflow-hidden shadow-xs">
                <table className="w-full text-xs text-left">
                  <tbody>
                    {Object.entries(product.specifications).map(([key, value], idx) => (
                      <tr 
                        key={key} 
                        className={`transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-[#F9FCFF]'} hover:bg-[#F0F7FC]`}
                      >
                        <td className="py-3.5 px-5 font-bold text-[#142C49] w-2/5 border-b border-[#E3EDF5]">
                          {key}
                        </td>
                        <td className="py-3.5 px-5 text-[#3E5268] border-b border-[#E3EDF5] font-medium leading-relaxed">
                          {value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right: Engineered Advantages & Recommended Applications */}
            <div className="lg:col-span-5 space-y-6">
              {/* Features Box */}
              <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#CBDCEB] space-y-3.5 shadow-xs">
                <h3 className="font-bold text-base text-[#142C49] flex items-center">
                  <ShieldCheck className="w-4 h-4 text-[#087FE5] mr-2" />
                  Engineered Advantages
                </h3>
                <ul className="space-y-2.5 text-xs text-[#142C49]">
                  {product.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-[#087FE5] mr-2.5 shrink-0 mt-0.5" />
                      <span className="leading-relaxed text-[#4A5D73]">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recommended Applications Box */}
              <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#CBDCEB] space-y-3.5 shadow-xs">
                <h3 className="font-bold text-base text-[#142C49] flex items-center">
                  <Compass className="w-4 h-4 text-[#20C7E8] mr-2" />
                  Recommended Installations
                </h3>
                <ul className="space-y-2.5 text-xs text-[#142C49]">
                  {product.applications.map((app, idx) => (
                    <li key={idx} className="flex items-start">
                      <ArrowRight className="w-4 h-4 text-[#087FE5] mr-2.5 shrink-0 mt-0.5" />
                      <span className="leading-relaxed text-[#4A5D73]">{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Model Variations / Dimension Table if available */}
          {product.variants && product.variants.length > 0 && (
            <div className="space-y-4 pt-2">
              <h3 className="font-bold text-lg sm:text-xl text-[#142C49] flex items-center">
                <Layers className="w-5 h-5 text-[#087FE5] mr-2" />
                Model Dimensional Variants &amp; Wattage Matrix
              </h3>
              <div className="bg-white rounded-2xl border border-[#CBDCEB] overflow-x-auto shadow-xs">
                <table className="w-full text-xs text-left">
                  <thead className="bg-[#082B52] text-white uppercase text-[10px] tracking-wider font-mono">
                    <tr>
                      <th className="py-3.5 px-5">Model Code</th>
                      <th className="py-3.5 px-5">Dimensions (Diameter / Height)</th>
                      <th className="py-3.5 px-5">Rated Power Output</th>
                      <th className="py-3.5 px-5 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.variants.map((v, idx) => (
                      <tr 
                        key={v.code} 
                        className={`transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-[#F9FCFF]'} hover:bg-[#F0F7FC]`}
                      >
                        <td className="py-3.5 px-5 font-mono font-bold text-[#087FE5] border-b border-[#E3EDF5]">
                          {v.code}
                        </td>
                        <td className="py-3.5 px-5 font-medium text-[#142C49] border-b border-[#E3EDF5]">
                          {v.dimension}
                        </td>
                        <td className="py-3.5 px-5 font-medium text-[#142C49] border-b border-[#E3EDF5]">
                          {v.wattage}
                        </td>
                        <td className="py-3.5 px-5 border-b border-[#E3EDF5] text-right">
                          <button
                            onClick={() => setQuoteOpen(true)}
                            className="inline-flex items-center text-[11px] font-bold text-[#087FE5] hover:text-[#06264A] hover:underline"
                          >
                            <span>Quote {v.code}</span>
                            <ArrowRight className="w-3 h-3 ml-1" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* FAQs Accordion Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#087FE5] block">
              Engineering Support
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#142C49] tracking-tight">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div 
                  key={idx} 
                  className="bg-white rounded-2xl border border-[#CBDCEB] overflow-hidden shadow-2xs transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-[#F8FBFE] transition-colors"
                  >
                    <span className="text-sm font-bold text-[#142C49] flex items-center">
                      <HelpCircle className="w-4 h-4 text-[#087FE5] mr-2.5 shrink-0" />
                      {faq.q}
                    </span>
                    <ChevronDown 
                      className={`w-4 h-4 text-[#087FE5] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs text-[#5A6E85] pl-11 leading-relaxed border-t border-[#F0F7FC]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      <section className="py-16 bg-[#F4F9FD] border-t border-[#CBDCEB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#087FE5]">
                DISCOVER MORE
              </span>
              <h3 className="text-2xl font-extrabold text-[#142C49]">
                Related {product.categoryName} Luminaires
              </h3>
            </div>
            <Link
              href={`/${product.categorySlug}`}
              className="inline-flex items-center text-xs font-bold text-[#087FE5] hover:text-[#06264A] transition-colors group"
            >
              <span>View All in Category</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Quote Request Modal */}
      <QuoteModal
        isOpen={quoteOpen}
        onClose={() => setQuoteOpen(false)}
        defaultProduct={`${product.name} (${product.code})`}
      />
    </div>
  );
}
