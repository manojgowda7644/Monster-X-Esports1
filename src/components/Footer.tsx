import React from 'react';
import { Download, ExternalLink, MessageCircle, Shield } from 'lucide-react';
import { LINKS, LOGO_SRC } from '../data/esportsData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#05070a] border-t border-slate-800/80 text-slate-400 py-10 pb-20 sm:pb-12">
      <div className="max-w-2xl mx-auto px-4 space-y-8">
        
        {/* Brand Lockup */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-purple-500/40 bg-slate-900 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(168,85,247,0.25)]">
              <img
                src={LOGO_SRC}
                alt="Monster X Esports"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="font-heading font-extrabold text-lg text-white">
              MONSTER <span className="text-purple-400">X</span> ESPORTS
            </span>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed">
            Monster X Esports Bharat ka sabse bharosemand esports platform hai jahan gaming skills ke dum par rozana hazaron players real cash jeette hain.
          </p>

          <div className="text-xs text-slate-500">
            © {new Date().getFullYear()} Monster X Esports. All rights reserved.
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="space-y-3">
          <div className="font-heading font-bold text-xs uppercase tracking-wider text-white">
            QUICK LINKS
          </div>
          <ul className="space-y-2 text-xs text-slate-300">
            <li>
              <a href={LINKS.webApp} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                Continue to Tournament Web Portal
              </a>
            </li>
            <li>
              <a href={LINKS.downloadApk} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
                Download Monster-X-Esports APK (v3.2.0)
              </a>
            </li>
            <li>
              <a href={LINKS.whatsAppSupport} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
                24x7 WhatsApp Customer Support
              </a>
            </li>
          </ul>
        </div>

        {/* Play & Support Direct Links */}
        <div className="space-y-3">
          <div className="font-heading font-bold text-xs uppercase tracking-wider text-white">
            PLAY & SUPPORT
          </div>
          <div className="space-y-2.5 text-xs">
            <a
              href={LINKS.downloadApk}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
            >
              <Download className="w-4 h-4 shrink-0" />
              <span>Download Monster-X-Esports APK</span>
            </a>

            <a
              href={LINKS.webApp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors font-medium"
            >
              <ExternalLink className="w-4 h-4 shrink-0 text-emerald-400" />
              <span>Continue to Tournament Web</span>
            </a>

            <a
              href={LINKS.whatsAppSupport}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>WhatsApp Customer Support</span>
            </a>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="pt-6 border-t border-slate-900 space-y-4">
          <div className="flex items-start gap-2.5 text-xs text-slate-500 leading-relaxed">
            <Shield className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
            <p>
              Skill-Based Gaming: Tournaments on this platform are games of skill under Indian law. Players must be 18 years or older.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-500">
            <span>Fair Play Certified</span>
            <span>·</span>
            <span>Instant UPI Payouts</span>
            <span>·</span>
            <span>24/7 Helpline</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
