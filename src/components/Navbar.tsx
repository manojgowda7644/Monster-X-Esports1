import React, { useState } from 'react';
import { Download, Menu, X, ExternalLink, MessageCircle, LogIn, LogOut, User } from 'lucide-react';
import { LINKS, LOGO_SRC } from '../data/esportsData';
import { useAuth } from '../context/AuthContext';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, signIn, signOut } = useAuth();

  return (
    <header className="sticky top-0 z-50 bg-[#090b10]/95 backdrop-blur-md border-b border-purple-500/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Brand wordmark & logo */}
        <a href="#" className="flex items-center gap-3 shrink-0 group">
          <div className="relative w-11 h-11 rounded-xl overflow-hidden border border-purple-500/40 bg-slate-900 shadow-[0_0_15px_rgba(168,85,247,0.3)] flex items-center justify-center transition-transform group-hover:scale-105">
            <img
              src={LOGO_SRC}
              alt="Monster X Esports Logo"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-base sm:text-lg tracking-tight text-white group-hover:text-purple-400 transition-colors whitespace-nowrap">
              MONSTER <span className="text-purple-400">X</span> ESPORTS
            </span>
            <span className="text-[10px] text-slate-400 font-medium tracking-wider uppercase -mt-0.5">
              PLAY & WIN DAILY CASH
            </span>
          </div>
        </a>

        {/* Right side controls: Auth + Download + Hamburger */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {user ? (
            <div className="flex items-center gap-2">
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt={user.displayName || 'User'}
                  className="w-7 h-7 rounded-full border border-purple-400 object-cover"
                />
              ) : (
                <div className="w-7 h-7 rounded-full bg-purple-900 border border-purple-400 flex items-center justify-center text-xs text-white">
                  {user.displayName?.[0] || 'U'}
                </div>
              )}
              <button
                onClick={() => signOut()}
                className="hidden sm:flex items-center gap-1 text-[11px] text-slate-400 hover:text-white transition-colors"
                title="Sign out"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Logout</span>
              </button>
            </div>
          ) : (
            <button
              onClick={() => signIn()}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors whitespace-nowrap"
            >
              <LogIn className="w-3.5 h-3.5 text-purple-400" />
              <span className="hidden sm:inline">Sign In</span>
            </button>
          )}

          <a
            href={LINKS.downloadApk}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 text-xs font-bold text-black bg-[#10b981] hover:bg-[#059669] rounded-lg shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all whitespace-nowrap"
          >
            Download
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-500"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Slide-out / Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-slate-800 bg-[#0c0f17] px-4 pt-3 pb-5 space-y-2 max-w-4xl mx-auto shadow-2xl">
          <a
            href={LINKS.webApp}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-semibold text-white bg-slate-800/80 hover:bg-slate-700 transition-colors"
          >
            <div className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4 text-cyan-400" />
              <span>Continue to Tournament Web</span>
            </div>
            <span className="text-xs text-cyan-400 font-mono">Open Web →</span>
          </a>

          <a
            href={LINKS.downloadApk}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-semibold text-black bg-emerald-400 hover:bg-emerald-300 transition-colors"
          >
            <div className="flex items-center gap-2">
              <Download className="w-4 h-4 stroke-[2.5]" />
              <span>Download Android APK</span>
            </div>
            <span className="text-xs text-black/80 font-mono">v3.2.0</span>
          </a>

          <a
            href={LINKS.whatsAppSupport}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 hover:bg-emerald-900/60 transition-colors"
          >
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Customer Support</span>
            </div>
            <span className="text-xs text-emerald-400 font-mono">Chat Live →</span>
          </a>
        </div>
      )}
    </header>
  );
};
