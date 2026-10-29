'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import PageBanner from '@/components/PageBanner';

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    productOrCategory: '',
    quantity: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMessage('Please fill in your name, email, and phone number.');
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
        setErrorMessage(data.message || 'Failed to submit quote request. Please try again.');
      }
    } catch (err) {
      setErrorMessage('Network error occurred. Please try again or WhatsApp our technical desk.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white min-h-screen text-[#142C49]">
      {/* Standardized Page Banner */}
      <PageBanner
        breadcrumbs={[{ label: 'Contact Us' }]}
        badge={
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/10 backdrop-blur-xs text-[#00E5FF] border border-white/20 shadow-xs">
            <Phone className="w-3.5 h-3.5 mr-1.5 text-[#00E5FF]" />
            Direct Factory &amp; Engineering Support
          </span>
        }
        title="Contact AQUALUXIS LIGHT"
        description="Connect directly with our engineering and lighting sales desk for project quotations, wholesale procurement, custom bracket fabrication, or technical inquiries."
        imageSrc="/assets/banners/banner-fountains.png"
        imageAlt="Contact AQUALUXIS LIGHT"
      />

      {/* Main Content: Info & Interactive Form */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column (5 cols): Verified Factory Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#087FE5]">
                DIRECT CONTACTS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#142C49]">
                Get in Touch With Our Engineering Team
              </h2>
              <p className="text-[#63758B] text-sm leading-relaxed">
                Whether you are designing a luxury resort pool, an architectural fountain, or a public water cascade, we provide rapid-turnaround technical proposals, wiring schedules, and B2B pricing.
              </p>
            </div>

            {/* Information Cards */}
            <div className="space-y-4">
              <div className="bg-[#F0F7FC] p-5 rounded-2xl border border-[#CBDCEB] shadow-xs flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-white text-[#087FE5] border border-[#CBDCEB] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] text-[#63758B] font-bold uppercase tracking-wider block">Phone Support</span>
                  <a href="tel:+918668466689" className="text-sm sm:text-base font-bold text-[#142C49] hover:text-[#087FE5] block transition-colors">
                    +91 8668466689
                  </a>
                  <p className="text-xs text-[#63758B]">Secondary: +91 9766775542</p>
                </div>
              </div>

              <div className="bg-[#F0F7FC] p-5 rounded-2xl border border-[#CBDCEB] shadow-xs flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-white text-emerald-600 border border-[#CBDCEB] flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] text-[#63758B] font-bold uppercase tracking-wider block">Instant WhatsApp Support</span>
                  <a
                    href="https://wa.me/918668466689?text=Hello%20Aqualuxis%20Team,%20I%20have%20an%20inquiry"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base font-bold text-[#142C49] hover:text-[#087FE5] block transition-colors"
                  >
                    +91 8668466689 (Chat Now)
                  </a>
                  <p className="text-xs text-[#63758B]">Fast response for CAD drawings &amp; price lists</p>
                </div>
              </div>

              <div className="bg-[#F0F7FC] p-5 rounded-2xl border border-[#CBDCEB] shadow-xs flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-white text-[#087FE5] border border-[#CBDCEB] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] text-[#63758B] font-bold uppercase tracking-wider block">Email Inquiries</span>
                  <a href="mailto:info@aqualuxislight.com" className="text-sm sm:text-base font-bold text-[#142C49] hover:text-[#087FE5] block transition-colors">
                    info@aqualuxislight.com
                  </a>
                  <p className="text-xs text-[#63758B]">Quotations returned within 24 business hours</p>
                </div>
              </div>

              <div className="bg-[#F0F7FC] p-5 rounded-2xl border border-[#CBDCEB] shadow-xs flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-white text-[#087FE5] border border-[#CBDCEB] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] text-[#63758B] font-bold uppercase tracking-wider block">Manufacturing &amp; Dispatch Facility</span>
                  <p className="text-xs sm:text-sm font-semibold text-[#142C49] leading-relaxed">
                    AQUALUXIS LIGHT Manufacturing Division<br />
                    Industrial Lighting Zone, Vasai East, Maharashtra 401208, India
                  </p>
                </div>
              </div>

              <div className="bg-[#F0F7FC] p-5 rounded-2xl border border-[#CBDCEB] shadow-xs flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-white text-[#087FE5] border border-[#CBDCEB] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] text-[#63758B] font-bold uppercase tracking-wider block">Operating Hours</span>
                  <p className="text-xs sm:text-sm font-semibold text-[#142C49]">
                    Monday – Saturday: 9:30 AM – 7:00 PM IST
                  </p>
                  <p className="text-xs text-[#63758B]">Closed on Sundays &amp; National Holidays</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): Clean Inquiry Form */}
          <div className="lg:col-span-7 bg-[#082B52] rounded-3xl p-8 sm:p-10 border border-[#CBDCEB] shadow-xl text-white relative">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#087FE5]/20 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#20C7E8]">
                  FAST RESPONSE GUARANTEE
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Discuss Your Lighting Requirements
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Provide your project parameters, luminaire models, or estimated quantities. Our application engineering team will send you itemised technical specifications and wholesale pricing.
                </p>
              </div>

              {success ? (
                <div className="bg-emerald-950/60 border border-emerald-500/40 rounded-2xl p-8 text-center space-y-4 my-8">
                  <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-white">Inquiry Received Successfully!</h4>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    Thank you, <span className="text-white font-semibold">{formData.name}</span>. Your request has been forwarded to our technical sales team. An engineer will reach out to you within 24 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setSuccess(false);
                      setFormData({
                        name: '',
                        company: '',
                        email: '',
                        phone: '',
                        productOrCategory: '',
                        quantity: '',
                        message: '',
                      });
                    }}
                    className="inline-flex items-center px-6 py-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="bg-rose-950/60 border border-rose-500/50 rounded-lg p-3 text-rose-300 text-xs flex items-center space-x-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        Full Name <span className="text-[#20C7E8]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rajesh Sharma"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-[#20C7E8] focus:ring-1 focus:ring-[#20C7E8] transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        Company / Contractor Firm
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. BlueWave Pools Pvt Ltd"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-[#20C7E8] focus:ring-1 focus:ring-[#20C7E8] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        Email Address <span className="text-[#20C7E8]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-[#20C7E8] focus:ring-1 focus:ring-[#20C7E8] transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        Phone / WhatsApp <span className="text-[#20C7E8]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-[#20C7E8] focus:ring-1 focus:ring-[#20C7E8] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        Product of Interest / Category
                      </label>
                      <select
                        value={formData.productOrCategory}
                        onChange={(e) => setFormData({ ...formData, productOrCategory: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-[#20C7E8] focus:ring-1 focus:ring-[#20C7E8] transition-colors"
                      >
                        <option value="">Select Category / Product</option>
                        <option value="Swimming Pool Lights (Full Range)">Swimming Pool Lights (Full Range)</option>
                        <option value="Underwater Fountain Lights">Underwater Fountain Lights</option>
                        <option value="Fountain Nozzles & Accessories">Fountain Nozzles &amp; Accessories</option>
                        <option value="Water Feature & Curtain Lights">Water Feature &amp; Curtain Lights</option>
                        <option value="Custom Project Consultation">Custom Project Consultation</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        Estimated Quantity
                      </label>
                      <input
                        type="text"
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                        placeholder="e.g. 24 Units / Complete Project"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-[#20C7E8] focus:ring-1 focus:ring-[#20C7E8] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Project Details / Technical Requirements
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Specify project type (concrete pool, vinyl liner, dry deck fountain), desired CCT/RGB, installation timeline, or custom mounting requirements..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-[#20C7E8] focus:ring-1 focus:ring-[#20C7E8] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-[#087FE5] to-[#20C7E8] text-white font-extrabold text-xs sm:text-sm shadow-md hover:shadow-cyan-500/25 transition-all flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Transmitting Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Official Request for Quote</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-slate-400 text-center pt-1">
                    Direct factory inquiry. No third-party spam. Privacy fully protected.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
