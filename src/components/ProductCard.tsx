'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { Product } from '@/data/products';
import QuoteModal from './QuoteModal';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [quoteOpen, setQuoteOpen] = useState(false);

  // Extract key highlight pills from specifications
  const protection = product.specifications['Protection Class'] || 'IP68';
  const wattages = product.specifications['Available Wattages'] || product.specifications['Power Consumption'] || '12V Low Voltage';

  return (
    <>
      <div className="group relative bg-white rounded-2xl border border-[#E3EDF5] hover:border-[#087FE5]/60 shadow-card-subtle hover:shadow-card-hover transition-all duration-300 flex flex-col overflow-hidden">
        
        {/* Top Image Container */}
        <div className="relative aspect-[4/3] bg-[#F0F7FC]/70 p-6 flex items-center justify-center overflow-hidden border-b border-[#E3EDF5]">
          
          {/* Model Tag - Dark Navy Pill */}
          <div className="absolute top-3 left-3 z-10">
            <span className="inline-block px-2.5 py-1 text-[11px] font-mono font-bold uppercase tracking-wider bg-[#082B52] text-white rounded-md shadow-xs">
              {product.code}
            </span>
          </div>

          {/* Subcategory Tag - Light Blue Pill */}
          <div className="absolute top-3 right-3 z-10">
            <span className="inline-block px-2.5 py-0.5 text-[10px] font-semibold bg-white text-[#087FE5] rounded-full border border-[#CBDCEB] shadow-2xs">
              {product.subCategory}
            </span>
          </div>

          {/* Product Image */}
          <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
            <Image
              src={product.image}
              alt={`${product.name} - ${product.code} AQUALUXIS LIGHT`}
              fill
              className="object-contain p-2"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          </div>
        </div>

        {/* Content Container */}
        <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
          <div className="space-y-1.5">
            <Link href={`/products/${product.slug}`} className="block">
              <h3 className="font-sans font-bold text-sm sm:text-base text-[#142C49] group-hover:text-[#087FE5] transition-colors line-clamp-2 leading-snug">
                {product.name}
              </h3>
            </Link>
            <p className="text-xs text-[#63758B] line-clamp-2 leading-relaxed">
              {product.shortDescription}
            </p>
          </div>

          {/* Specs Mini-Grid */}
          <div className="pt-2 border-t border-[#E3EDF5] space-y-1 text-[11px]">
            <div className="flex items-center text-[#142C49] truncate">
              <ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-[#087FE5] shrink-0" />
              <span className="font-semibold mr-1 text-[#63758B]">Optics:</span>
              <span className="truncate font-medium">{protection.split(' ')[0]} Submersible</span>
            </div>
            {wattages && (
              <div className="flex items-center text-[#142C49] truncate">
                <Zap className="w-3.5 h-3.5 mr-1.5 text-[#20C7E8] shrink-0" />
                <span className="font-semibold mr-1 text-[#63758B]">Wattage:</span>
                <span className="truncate font-medium">{wattages.length > 25 ? wattages.slice(0, 25) + '...' : wattages}</span>
              </div>
            )}
          </div>

          {/* Action Buttons: Details & Quote */}
          <div className="pt-2 grid grid-cols-2 gap-2">
            <Link
              href={`/products/${product.slug}`}
              className="inline-flex items-center justify-center py-2 px-3 rounded-lg text-xs font-bold text-[#142C49] bg-[#F0F7FC] hover:bg-[#087FE5] hover:text-white transition-all border border-[#CBDCEB]"
            >
              Details
              <ArrowRight className="w-3 h-3 ml-1" />
            </Link>
            <button
              onClick={() => setQuoteOpen(true)}
              className="inline-flex items-center justify-center py-2 px-3 rounded-lg text-xs font-bold bg-[#082B52] hover:bg-[#087FE5] text-white transition-all shadow-xs"
            >
              Quote
            </button>
          </div>
        </div>
      </div>

      <QuoteModal
        isOpen={quoteOpen}
        onClose={() => setQuoteOpen(false)}
        defaultProduct={`${product.name} (${product.code})`}
      />
    </>
  );
}
