'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Search, 
  Filter, 
  Waves, 
  Droplet, 
  Sparkles, 
  SunMedium, 
  FileText, 
  ShieldCheck, 
  HelpCircle,
  ChevronDown,
  Layers,
  ArrowRight
} from 'lucide-react';
import { PRODUCTS, CATEGORIES, Product } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import Breadcrumbs from '@/components/Breadcrumbs';
import QuoteModal from '@/components/QuoteModal';
import PageBanner from '@/components/PageBanner';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedSubCat, setSelectedSubCat] = useState<string>('all');
  const [quoteOpen, setQuoteOpen] = useState(false);

  // Subcategories list
  const subCategories = useMemo(() => {
    const list = new Set<string>();
    PRODUCTS.forEach(p => {
      if (selectedCategory === 'all' || p.category === selectedCategory) {
        list.add(p.subCategory);
      }
    });
    return Array.from(list);
  }, [selectedCategory]);

  // Filtered Products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchCat = selectedCategory === 'all' || p.category === selectedCategory;
      const matchSub = selectedSubCat === 'all' || p.subCategory === selectedSubCat;
      const query = searchQuery.toLowerCase().trim();
      const matchQuery = !query || 
        p.name.toLowerCase().includes(query) ||
        p.code.toLowerCase().includes(query) ||
        p.shortDescription.toLowerCase().includes(query) ||
        (p.specifications['Body Material'] && p.specifications['Body Material'].toLowerCase().includes(query));
      
      return matchCat && matchSub && matchQuery;
    });
  }, [selectedCategory, selectedSubCat, searchQuery]);

  return (
    <div className="bg-white min-h-screen text-[#142C49]">
      {/* Standardized Page Banner */}
      <PageBanner
        breadcrumbs={[{ label: 'Products Catalogue' }]}
        eyebrow="COMPLETE AQUATIC ILLUMINATION RANGE"
        title="Submersible & Fountain Products"
        description="Explore 21 factory-engineered underwater LED luminaires, fountain nozzles, wall grazing fixtures, and illuminated water blades. All luminaires are IP68 certified and rated for continuous submerged operation."
        imageSrc="/assets/banners/banner-fountains.png"
        imageAlt="Submersible & Fountain Products"
      />

      {/* Main Filter & Listing Section */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Search & Category Filter Controls */}
        <div className="space-y-6 mb-10">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            
            {/* Category Pills */}
            <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0">
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedSubCat('all');
                }}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all shrink-0 ${
                  selectedCategory === 'all'
                    ? 'bg-[#087FE5] text-white shadow-xs'
                    : 'bg-[#F0F7FC] text-[#63758B] hover:text-[#142C49] hover:bg-[#E3EDF5]'
                }`}
              >
                All Products (21)
              </button>

              <button
                onClick={() => {
                  setSelectedCategory('pool-lighting');
                  setSelectedSubCat('all');
                }}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all shrink-0 flex items-center space-x-1.5 ${
                  selectedCategory === 'pool-lighting'
                    ? 'bg-[#087FE5] text-white shadow-xs'
                    : 'bg-[#F0F7FC] text-[#63758B] hover:text-[#142C49] hover:bg-[#E3EDF5]'
                }`}
              >
                <Waves className="w-3.5 h-3.5" />
                <span>Pool Lights (8)</span>
              </button>

              <button
                onClick={() => {
                  setSelectedCategory('fountain-lighting');
                  setSelectedSubCat('all');
                }}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all shrink-0 flex items-center space-x-1.5 ${
                  selectedCategory === 'fountain-lighting'
                    ? 'bg-[#087FE5] text-white shadow-xs'
                    : 'bg-[#F0F7FC] text-[#63758B] hover:text-[#142C49] hover:bg-[#E3EDF5]'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Fountain Lights (8)</span>
              </button>

              <button
                onClick={() => {
                  setSelectedCategory('water-feature-lighting');
                  setSelectedSubCat('all');
                }}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all shrink-0 flex items-center space-x-1.5 ${
                  selectedCategory === 'water-feature-lighting'
                    ? 'bg-[#087FE5] text-white shadow-xs'
                    : 'bg-[#F0F7FC] text-[#63758B] hover:text-[#142C49] hover:bg-[#E3EDF5]'
                }`}
              >
                <SunMedium className="w-3.5 h-3.5" />
                <span>Water Features (5)</span>
              </button>
            </div>

            {/* Live Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-[#63758B] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search models, wattage, materials..."
                className="w-full pl-10 pr-4 py-2 rounded-full text-xs font-semibold bg-[#F0F7FC] border border-[#CBDCEB] text-[#142C49] placeholder-[#63758B] focus:outline-none focus:border-[#087FE5] transition-colors"
              />
            </div>

          </div>

          {/* Subcategory Pills */}
          {subCategories.length > 1 && (
            <div className="flex items-center space-x-2 overflow-x-auto pb-1 text-xs">
              <span className="text-[#63758B] font-semibold flex items-center shrink-0 mr-1">
                <Filter className="w-3.5 h-3.5 mr-1 text-[#087FE5]" />
                Filter by Type:
              </span>
              <button
                onClick={() => setSelectedSubCat('all')}
                className={`px-3 py-1 rounded-lg transition-colors font-medium ${
                  selectedSubCat === 'all'
                    ? 'bg-[#082B52] text-white'
                    : 'bg-[#F0F7FC] text-[#63758B] hover:text-[#142C49]'
                }`}
              >
                All Types
              </button>
              {subCategories.map(sub => (
                <button
                  key={sub}
                  onClick={() => setSelectedSubCat(sub)}
                  className={`px-3 py-1 rounded-lg transition-colors font-medium shrink-0 ${
                    selectedSubCat === sub
                      ? 'bg-[#082B52] text-white'
                      : 'bg-[#F0F7FC] text-[#63758B] hover:text-[#142C49]'
                  }`}
                >
                  {sub}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Results Counter */}
        <div className="mb-6 flex items-center justify-between text-xs text-[#63758B] border-b border-[#E3EDF5] pb-3">
          <span>
            Showing <strong className="text-[#142C49]">{filteredProducts.length}</strong> of {PRODUCTS.length} verified products
          </span>
          {(searchQuery || selectedCategory !== 'all' || selectedSubCat !== 'all') && (
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedSubCat('all');
                setSearchQuery('');
              }}
              className="text-[#087FE5] hover:underline font-semibold"
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* Products Grid (4 columns) */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#F0F7FC] text-[#087FE5] flex items-center justify-center mx-auto">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[#142C49]">No products match your criteria</h3>
            <p className="text-sm text-[#63758B] max-w-md mx-auto">
              Try adjusting your search query or clear subcategory filters to browse the complete catalogue.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedSubCat('all');
                setSearchQuery('');
              }}
              className="px-6 py-2.5 rounded-full bg-[#087FE5] text-white text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}

      </section>

      {/* Global Quote Request Modal */}
      <QuoteModal
        isOpen={quoteOpen}
        onClose={() => setQuoteOpen(false)}
      />
    </div>
  );
}
