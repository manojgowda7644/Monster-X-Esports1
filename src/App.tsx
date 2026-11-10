/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AuthProvider } from './context/AuthContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileBottomBar } from './components/MobileBottomBar';

export default function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-[#090b10] text-slate-100 flex flex-col font-sans pb-16 sm:pb-0">
        <Navbar />
        <main className="flex-1">
          <Hero />
        </main>
        <Footer />
        <FloatingWhatsApp />
        <MobileBottomBar />
      </div>
    </AuthProvider>
  );
}
