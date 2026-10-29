'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const whatsappUrl = "https://wa.me/918668466689?text=Hello%20Aqualuxis%20Light%2C%20I%20would%20like%20to%20enquire%20about%20your%20underwater%20lighting%20solutions.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with AQUALUXIS LIGHT on WhatsApp"
      className="fixed bottom-[54px] right-6 z-40 flex items-center justify-center w-13 h-13 p-3.5 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group"
    >
      <MessageCircle className="w-6 h-6 fill-white" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-bold pl-0 group-hover:pl-2 text-white">
        WhatsApp Us
      </span>
    </a>
  );
}
