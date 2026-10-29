import React from 'react';
import Image from 'next/image';
import Breadcrumbs, { BreadcrumbItem } from '@/components/Breadcrumbs';

export interface PageBannerProps {
  breadcrumbs: BreadcrumbItem[];
  eyebrow?: string;
  badge?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  rightContent?: React.ReactNode;
}

export default function PageBanner({
  breadcrumbs,
  eyebrow,
  badge,
  title,
  description,
  imageSrc = '/assets/banners/banner-fountains.png',
  imageAlt = 'Aqualuxis Banner',
  rightContent,
}: PageBannerProps) {
  return (
    <section className="relative overflow-hidden bg-[#06182C] border-b border-[#0A3055]/50 h-[280px] lg:h-[300px] flex items-center">
      {/* Background Banner Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06182C]/95 via-[#06182C]/80 to-[#06182C]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06182C] via-transparent to-transparent opacity-75" />
      </div>

      {/* Banner Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} variant="light" />

        <div className="mt-2 sm:mt-3 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          <div className={`${rightContent ? 'lg:col-span-8' : 'lg:col-span-12'} space-y-2 sm:space-y-2.5 max-w-3xl`}>
            {badge ? (
              <div>{badge}</div>
            ) : eyebrow ? (
              <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[#00E5FF] block">
                {eyebrow}
              </span>
            ) : null}

            <h1 className="text-2xl sm:text-4xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {title}
            </h1>

            {description && (
              <p className="text-xs sm:text-sm text-[#DCE5EF] leading-relaxed line-clamp-3 sm:line-clamp-none max-w-2xl">
                {description}
              </p>
            )}
          </div>

          {rightContent && (
            <div className="hidden lg:block lg:col-span-4">
              {rightContent}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
