'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className="fixed bottom-[120px] right-[28px] z-40 p-3 bg-[#082B52]/90 border border-[#CBDCEB] text-[#20C7E8] hover:text-white hover:bg-[#087FE5] rounded-full shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 backdrop-blur-md"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
