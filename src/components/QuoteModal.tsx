'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, CheckCircle, AlertCircle, Loader2, Sparkles, Send } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '@/data/products';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProduct?: string;
  defaultCategory?: string;
}

export default function QuoteModal({
  isOpen,
  onClose,
  defaultProduct,
  defaultCategory,
}: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    productOrCategory: defaultProduct || defaultCategory || '',
    quantity: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (defaultProduct) {
      setFormData(prev => ({ ...prev, productOrCategory: defaultProduct }));
    } else if (defaultCategory) {
      setFormData(prev => ({ ...prev, productOrCategory: defaultCategory }));
    }
  }, [defaultProduct, defaultCategory, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    
    // Client validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMessage('Please fill in your name, email, and contact phone number.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSuccess(true);
      } else {
        setErrorMessage(data.message || 'There was an issue submitting your request. Please try again.');
      }
    } catch (err: any) {
      setErrorMessage('Network error. Please check your connection or contact us via WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSuccess(false);
    setErrorMessage('');
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      productOrCategory: defaultProduct || '',
      quantity: '',
      message: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-[#082B52] border border-[#087FE5]/40 rounded-3xl max-w-xl w-full p-5 sm:p-7 shadow-2xl text-white overflow-hidden max-h-[92vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        {/* Glow ambient */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#087FE5]/20 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 z-20 text-slate-300 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Official AQUALUXIS LIGHT Logo */}
        <div className="flex justify-center items-center mb-4 sm:mb-5 pt-0.5">
          <div className="relative w-[175px] sm:w-[220px] aspect-[1024/185]">
            <Image
              src="/assets/branding/aqualuxis-logo-light.png"
              alt="AQUALUXIS LIGHT - Brilliance Beneath The Surface"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>

        {success ? (
          <div className="text-center py-6 sm:py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#087FE5]/20 border border-[#20C7E8] text-[#20C7E8] flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold font-heading">Quote Request Received</h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto">
              Thank you, <strong className="text-white">{formData.name}</strong>. Our aquatic lighting technical specialist will review your specifications and contact you shortly with photometric schedules and commercial terms.
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-full bg-[#087FE5] hover:bg-[#20C7E8] hover:text-[#082B52] text-white font-bold text-xs uppercase tracking-wider transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-5 sm:space-y-6">
            <div>
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#20C7E8]/20 text-[#20C7E8] mb-2 border border-[#20C7E8]/30">
                <Sparkles className="w-3 h-3" />
                <span>B2B Commercial Inquiry</span>
              </div>
              <h2 className="text-2xl font-bold text-white">
                Request a Formal Quotation
              </h2>
              <p className="text-xs text-slate-300 mt-1">
                Direct factory support for pool builders, electrical MEP contractors, and landscape architects.
              </p>
            </div>

            {errorMessage && (
              <div className="p-3 rounded-lg bg-rose-500/20 border border-rose-500/40 text-xs text-rose-200 flex items-center space-x-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Verma"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/60 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#20C7E8] focus:ring-1 focus:ring-[#20C7E8] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Company / Contractor Firm
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={e => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Apex Aquatics Pvt Ltd"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/60 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#20C7E8] focus:ring-1 focus:ring-[#20C7E8] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="rahul@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/60 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#20C7E8] focus:ring-1 focus:ring-[#20C7E8] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/60 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#20C7E8] focus:ring-1 focus:ring-[#20C7E8] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Selected Product / Category
                  </label>
                  <input
                    type="text"
                    value={formData.productOrCategory}
                    onChange={e => setFormData({ ...formData, productOrCategory: e.target.value })}
                    placeholder="e.g. HF00 Swimming Pool Light"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/60 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#20C7E8] focus:ring-1 focus:ring-[#20C7E8] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Estimated Quantity
                  </label>
                  <input
                    type="text"
                    value={formData.quantity}
                    onChange={e => setFormData({ ...formData, quantity: e.target.value })}
                    placeholder="e.g. 24 units or Complete Project"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/60 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#20C7E8] focus:ring-1 focus:ring-[#20C7E8] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Project Notes &amp; Specifications
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Specify desired CCT (Warm/Cool/RGB), mounting requirements, swimming pool dimensions, or voltage preferences..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/60 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#20C7E8] focus:ring-1 focus:ring-[#20C7E8] transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 rounded-full font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-[#087FE5] to-[#20C7E8] text-white hover:opacity-95 transition-all shadow-md flex items-center justify-center space-x-2 disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Official Quote Request</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-[10px] text-center text-slate-400">
                Direct inquiry to AQUALUXIS LIGHT Factory Sales. Your contact information is kept strictly confidential.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
