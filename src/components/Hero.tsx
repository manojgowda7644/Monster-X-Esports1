import React from 'react';
import { Download, ExternalLink, MessageCircle, ShieldCheck, Zap, Smartphone, Globe } from 'lucide-react';
import { LINKS, LOGO_SRC } from '../data/esportsData';

export const Hero: React.FC = () => {
  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-8 sm:py-12 space-y-8">
      
      {/* Hero Section */}
      <section className="text-center space-y-6">
        
        {/* User Logo Showcase */}
        <div className="flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-60 blur-lg group-hover:opacity-90 transition duration-300"></div>
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-purple-500/60 bg-black shadow-2xl">
              <img
                src={LOGO_SRC}
                alt="Monster X Esports Official Emblem"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Top Status Pill / Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111624] border border-[#1e293b] text-xs text-slate-300 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#10b981]"></span>
          <span className="font-semibold text-[#10b981]">Official Tournament Platform</span>
          <span className="text-slate-600">·</span>
          <span className="text-slate-300">Daily Real Cash Matches</span>
        </div>

        {/* Hero Headline */}
        <div className="space-y-1">
          <h1 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight">
            Play Tournaments &
          </h1>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] via-[#2dd4bf] to-[#facc15] tracking-tight">
            Earn Real Money Daily
          </h2>
        </div>

        {/* Description in Hindi Language with English text (Hinglish as requested) */}
        <div className="text-slate-300 text-sm sm:text-base leading-relaxed px-1 max-w-xl mx-auto">
          <p>
            <strong className="text-white font-bold">Monster X Esports</strong> Bharat ka sabse bharosemand gaming tournament app hai. Yahan <span className="text-[#10b981] font-semibold">BGMI, Free Fire MAX aur COD Mobile</span> ke daily Solo, Duo aur Squad custom rooms khelein. Har kill (Per Kill) par cash kamayein aur Chicken Dinner / Booyah jeet kar bada prize pool jeetein. Jeeti hui rashi turant apne <span className="text-[#facc15] font-semibold">UPI / PhonePe / Paytm / GPay</span> me nikalein.
          </p>
        </div>

        {/* 3 Main Action Buttons - Formatted prominently with Continue to Web on Top as requested */}
        <div className="space-y-3.5 pt-2">
          
          {/* Button 1 (ON TOP): Continue to Web (Styled with same high-impact format as APK button) */}
          <a
            href={LINKS.webApp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-between px-5 py-4 rounded-2xl bg-gradient-to-r from-[#0284c7] via-[#0ea5e9] to-[#06b6d4] hover:brightness-110 text-white font-heading font-bold shadow-[0_0_25px_rgba(14,165,233,0.35)] hover:shadow-[0_0_35px_rgba(14,165,233,0.5)] transition-all active:scale-[0.99]"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-black/20 flex items-center justify-center shrink-0">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-white/80 leading-none">
                  INSTANT TOURNAMENT WEB PORTAL
                </div>
                <div className="text-base sm:text-lg font-black text-white leading-tight mt-0.5">
                  Continue to Web
                </div>
              </div>
            </div>
            <ExternalLink className="w-5 h-5 text-white stroke-[2.5] shrink-0" />
          </a>

          {/* Button 2 (BELOW): Download Monster-X-Esports APK */}
          <a
            href={LINKS.downloadApk}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-between px-5 py-4 rounded-2xl bg-[#10b981] hover:bg-[#0ea371] text-black font-heading font-bold shadow-[0_0_25px_rgba(16,185,129,0.3)] hover:shadow-[0_0_35px_rgba(16,185,129,0.45)] transition-all active:scale-[0.99]"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-black/15 flex items-center justify-center shrink-0">
                <Smartphone className="w-5 h-5 text-black" />
              </div>
              <div className="text-left">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-black/70 leading-none">
                  ANDROID DIRECT APK
                </div>
                <div className="text-base sm:text-lg font-black text-black leading-tight mt-0.5">
                  Download Monster-X-Esports
                </div>
              </div>
            </div>
            <Download className="w-5 h-5 text-black stroke-[2.5] shrink-0" />
          </a>

          {/* Button 3: Contact Support */}
          <a
            href={LINKS.whatsAppSupport}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-between px-5 py-3.5 rounded-2xl bg-[#0c1a16] hover:bg-[#0f241e] border border-[#134e3a] text-[#10b981] font-heading font-semibold text-base transition-all active:scale-[0.99]"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#25D366]/20 flex items-center justify-center shrink-0">
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
              </div>
              <div className="text-left">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-[#10b981]/70 leading-none">
                  24/7 DEDICATED HELPLINE
                </div>
                <div className="text-sm sm:text-base font-bold text-[#10b981] leading-tight mt-0.5">
                  Contact Support
                </div>
              </div>
            </div>
            <span className="text-xs font-mono text-[#10b981] bg-[#10b981]/10 px-2 py-1 rounded">
              WhatsApp →
            </span>
          </a>

        </div>

        {/* Security & Version Footnotes */}
        <div className="pt-2 space-y-2">
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-400">
            <span className="flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-4 h-4 text-[#10b981]" />
              100% Virus & Malware Safe APK
            </span>
            <span className="text-slate-600">·</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Zap className="w-4 h-4 text-[#facc15]" />
              Instant UPI Withdrawal within 5 Min
            </span>
          </div>
          <div className="text-xs text-slate-500 font-mono">
            Version 3.2.0 (Latest Release)
          </div>
        </div>

      </section>

    </div>
  );
};
