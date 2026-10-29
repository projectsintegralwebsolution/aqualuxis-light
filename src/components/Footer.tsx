'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send,
  CheckCircle,
  Loader2,
  ArrowRight
} from 'lucide-react';

export default function Footer() {
  const [miniName, setMiniName] = useState('');
  const [miniEmail, setMiniEmail] = useState('');
  const [miniMessage, setMiniMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleMiniSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!miniName.trim() || !miniEmail.trim()) return;

    setSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: miniName,
          email: miniEmail,
          phone: '+91 (Via Quick Footer Inquiry)',
          message: miniMessage || 'Quick inquiry from footer form',
          productOrCategory: 'General Inquiry',
        }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitted(true);
      }
    } catch {
      // ignore
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <footer className="bg-[#041A33] text-slate-300 border-t border-[#087FE5]/25 relative overflow-hidden">
      {/* Subtle aquatic top illumination */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-36 bg-gradient-to-b from-[#087FE5]/12 to-transparent pointer-events-none" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Col 1 (3 cols): Brand & Positioning */}
          <div className="lg:col-span-3 space-y-4">
            <Link href="/" className="inline-block group">
              {/* Clean logo sitting naturally on dark footer with zero background box or border */}
              <div className="relative w-[210px] sm:w-[230px] h-[44px]">
                <Image
                  src="/assets/branding/aqualuxis-logo-light.png"
                  alt="AQUALUXIS LIGHT - Brilliance Beneath The Surface"
                  fill
                  className="object-contain object-left group-hover:opacity-90 transition-opacity"
                />
              </div>
            </Link>

            <p className="text-xs text-slate-300/90 leading-relaxed max-w-sm">
              Premium underwater and fountain lighting solutions for pools, landscapes and architectural water features. Engineered for performance. Designed for extraordinary spaces.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-2.5 text-slate-300 pt-1">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#087FE5] hover:text-white border border-white/10 flex items-center justify-center transition-all text-xs font-bold"
                aria-label="LinkedIn"
              >
                in
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#087FE5] hover:text-white border border-white/10 flex items-center justify-center transition-all text-xs font-bold"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#087FE5] hover:text-white border border-white/10 flex items-center justify-center transition-all text-xs font-bold"
                aria-label="Instagram"
              >
                ig
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#087FE5] hover:text-white border border-white/10 flex items-center justify-center transition-all text-xs font-bold"
                aria-label="YouTube"
              >
                yt
              </a>
            </div>
          </div>

          {/* Col 2 (2 cols): Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white border-b border-white/10 pb-2.5 flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#20C7E8] mr-2" />
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-[#20C7E8] transition-colors flex items-center py-0.5">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-[#20C7E8] transition-colors flex items-center py-0.5">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#20C7E8] transition-colors flex items-center py-0.5">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/applications" className="hover:text-[#20C7E8] transition-colors flex items-center py-0.5">
                  Applications
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#20C7E8] transition-colors flex items-center py-0.5">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/catalogue" className="hover:text-[#20C7E8] transition-colors flex items-center py-0.5">
                  Downloads
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-[#20C7E8] transition-colors flex items-center py-0.5">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3 (2 cols): Our Products */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white border-b border-white/10 pb-2.5 flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#20C7E8] mr-2" />
              Our Products
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/pool-lighting" className="hover:text-[#20C7E8] transition-colors flex items-center py-0.5">
                  Swimming Pool Lights
                </Link>
              </li>
              <li>
                <Link href="/pool-lighting" className="hover:text-[#20C7E8] transition-colors flex items-center py-0.5">
                  Underwater Lights
                </Link>
              </li>
              <li>
                <Link href="/fountain-lighting" className="hover:text-[#20C7E8] transition-colors flex items-center py-0.5">
                  LED Fountain Lights
                </Link>
              </li>
              <li>
                <Link href="/fountain-lighting" className="hover:text-[#20C7E8] transition-colors flex items-center py-0.5">
                  Fountain Nozzles
                </Link>
              </li>
              <li>
                <Link href="/water-feature-lighting" className="hover:text-[#20C7E8] transition-colors flex items-center py-0.5">
                  Garden Lights
                </Link>
              </li>
              <li>
                <Link href="/water-feature-lighting" className="hover:text-[#20C7E8] transition-colors flex items-center py-0.5">
                  Wall Washer Lights
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#20C7E8] transition-colors flex items-center py-0.5">
                  Controllers &amp; Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4 (2 cols): Contact Info */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white border-b border-white/10 pb-2.5 flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#20C7E8] mr-2" />
              Contact Info
            </h4>
            <div className="space-y-3 text-xs text-slate-300/90">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#20C7E8] shrink-0 mt-0.5" />
                <span className="leading-relaxed">172, Lighting House, Mumbai, Maharashtra, India</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#20C7E8] shrink-0" />
                <a href="tel:+918668466689" className="hover:text-[#20C7E8] transition-colors font-medium">
                  +91 8668466689
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-[#20C7E8] shrink-0" />
                <a href="mailto:info@aqualuxislight.com" className="hover:text-[#20C7E8] transition-colors font-medium break-all">
                  info@aqualuxislight.com
                </a>
              </div>
            </div>
          </div>

          {/* Col 5 (3 cols): Request a Quote Mini Form */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white border-b border-white/10 pb-2.5 flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#20C7E8] mr-2" />
              Request a Quote
            </h4>

            {submitted ? (
              <div className="bg-emerald-950/60 border border-emerald-500/40 rounded-xl p-4 text-center space-y-2">
                <CheckCircle className="w-6 h-6 text-emerald-400 mx-auto" />
                <p className="text-xs text-white font-bold">Inquiry Sent!</p>
                <p className="text-[11px] text-slate-300">Our engineering team will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleMiniSubmit} className="space-y-2.5">
                <input
                  type="text"
                  required
                  value={miniName}
                  onChange={(e) => setMiniName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.06] border border-white/15 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-[#20C7E8] focus:bg-white/[0.1] transition-all"
                />
                <input
                  type="email"
                  required
                  value={miniEmail}
                  onChange={(e) => setMiniEmail(e.target.value)}
                  placeholder="Your Email"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.06] border border-white/15 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-[#20C7E8] focus:bg-white/[0.1] transition-all"
                />
                <textarea
                  rows={2}
                  value={miniMessage}
                  onChange={(e) => setMiniMessage(e.target.value)}
                  placeholder="Your Project Requirements..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.06] border border-white/15 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-[#20C7E8] focus:bg-white/[0.1] transition-all resize-none"
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#087FE5] to-[#20C7E8] hover:from-[#066ac2] hover:to-[#1ab3d1] text-white text-xs font-bold transition-all shadow-md flex items-center justify-center space-x-1.5 disabled:opacity-60"
                >
                  {submitting ? (
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  ) : (
                    <>
                      <span>Submit Enquiry</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar: Copyright & Mandatory Integral Web Solution Link */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <p>© 2026 Aqualuxis Light. All rights Reserved.</p>
          <div className="flex items-center space-x-4">
            <Link href="/privacy-policy" className="hover:text-[#20C7E8] transition-colors">
              Privacy Policy
            </Link>
            <span className="text-slate-600">|</span>
            <Link href="/terms-and-conditions" className="hover:text-[#20C7E8] transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
          <p className="flex items-center space-x-1">
            <span>Developed by</span>
            <a
              href="https://integralwebsolution.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#20C7E8] hover:text-white transition-colors underline decoration-[#20C7E8]/50"
            >
              Integral Web Solution
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
