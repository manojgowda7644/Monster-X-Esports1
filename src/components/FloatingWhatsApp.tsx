import React from 'react';
import { MessageCircle } from 'lucide-react';
import { LINKS } from '../data/esportsData';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside
      aria-label="Customer Support"
      className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 flex items-center group"
    >
      {/* Tooltip on hover */}
      <span className="hidden sm:inline-block mr-3 px-3 py-1.5 rounded-lg bg-slate-900/95 text-white text-xs font-semibold shadow-xl border border-emerald-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        24/7 WhatsApp Support · चैट करें
      </span>

      <a
        href={LINKS.whatsAppSupport}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-[0_4px_20px_rgba(37,211,102,0.45)] hover:scale-105 active:scale-95 transition-all duration-200"
        aria-label="Chat with Monster X Esports Support on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white/20" />
      </a>
    </aside>
  );
};
