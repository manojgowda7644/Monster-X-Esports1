import React from 'react';
import { Download, ExternalLink, MessageCircle } from 'lucide-react';
import { LINKS } from '../data/esportsData';

export const MobileBottomBar: React.FC = () => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 h-14 bg-[#090b10]/95 backdrop-blur-md border-t border-slate-800 px-3 flex items-center justify-between gap-2 shadow-2xl">
      {/* Continue to web */}
      <a
        href={LINKS.webApp}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-slate-800/90 text-slate-200 text-xs font-semibold whitespace-nowrap"
      >
        <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
        <span>Web Play</span>
      </a>

      {/* Main Download APK */}
      <a
        href={LINKS.downloadApk}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-gradient-to-r from-emerald-400 to-teal-400 text-black text-xs font-bold uppercase tracking-wider shadow-md whitespace-nowrap"
      >
        <Download className="w-4 h-4 stroke-[2.5]" />
        <span>Download APK</span>
      </a>

      {/* WhatsApp Support */}
      <a
        href={LINKS.whatsAppSupport}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366]"
        aria-label="WhatsApp Support"
      >
        <MessageCircle className="w-5 h-5 fill-current/20" />
      </a>
    </div>
  );
};
