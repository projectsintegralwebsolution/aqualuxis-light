import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  variant?: 'light' | 'dark';
}

export default function Breadcrumbs({ items, variant = 'dark' }: BreadcrumbsProps) {
  const isLight = variant === 'light';

  const schemaItems = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://aqualuxislight.com',
    },
    ...items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 2,
      name: item.label,
      ...(item.href ? { item: `https://aqualuxislight.com${item.href}` } : {}),
    })),
  ];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: schemaItems,
  };

  return (
    <nav aria-label="Breadcrumb" className={`py-3 text-xs ${isLight ? 'text-white/70' : 'text-[#003B70]/80'}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ol className="flex items-center flex-wrap gap-1.5">
        <li className="inline-flex items-center">
          <Link 
            href="/" 
            className={`flex items-center transition-colors ${
              isLight ? 'text-white/80 hover:text-[#00E5FF]' : 'text-[#003B70] hover:text-[#008CFF]'
            }`}
          >
            <Home className="w-3.5 h-3.5 mr-1" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={idx} className="inline-flex items-center">
              <ChevronRight className={`w-3.5 h-3.5 mx-1 ${isLight ? 'text-white/40' : 'text-gray-400'}`} />
              {item.href && !isLast ? (
                <Link 
                  href={item.href} 
                  className={`transition-colors ${
                    isLight ? 'text-white/80 hover:text-[#00E5FF]' : 'text-[#003B70] hover:text-[#008CFF]'
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <span className={`font-semibold line-clamp-1 max-w-[240px] sm:max-w-none ${
                  isLight ? 'text-white' : 'text-[#071426]'
                }`}>
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
