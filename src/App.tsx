import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServiceGrid } from './components/ServiceGrid';
import { Strategy } from './components/Strategy';
import { Objectives } from './components/Objectives';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <ServiceGrid />
        <Strategy />
        <Objectives />
        
        {/* About / CTA Section */}
        <section id="about" className="py-24 bg-slate-50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-navy mb-6">Ready to transform your operations?</h2>
              <p className="text-xl text-navy/60 mb-10">
                Join 50+ industry leaders who have already automated their way to the top.
              </p>
              <button className="bg-electric text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-electric/90 transition-all shadow-xl shadow-electric/20 active:scale-95">
                Book a Free Strategy Session
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
