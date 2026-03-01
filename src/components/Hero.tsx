import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-electric/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] bg-navy/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric/10 border border-electric/20 text-electric text-xs font-bold uppercase tracking-wider mb-6"
          >
            <Sparkles className="w-3 h-3" />
            Intelligent Automation for the Modern Enterprise
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-navy leading-[1.1] mb-6"
          >
            Skip the Jargon.<br />
            <span className="text-electric">Make your Operations Faster.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-navy/60 mb-10 leading-relaxed max-w-2xl"
          >
            We help forward-thinking companies automate complex workflows, reduce overhead, and scale without friction. No fluff, just results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <button className="group relative bg-navy text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 overflow-hidden transition-all hover:pr-10 active:scale-95 animate-pulse-subtle">
              <span className="relative z-10">Scale Your Business</span>
              <ArrowRight className="w-5 h-5 transition-all group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-electric translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            
            <button className="flex items-center gap-3 text-navy font-semibold px-6 py-4 hover:text-electric transition-colors">
              <div className="w-10 h-10 rounded-full border border-navy/10 flex items-center justify-center group-hover:border-electric/30">
                <Play className="w-4 h-4 fill-current" />
              </div>
              See How It Works
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
