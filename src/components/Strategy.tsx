import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Rocket, Activity } from 'lucide-react';

const steps = [
  {
    title: 'Analyze',
    description: 'We deep-dive into your current operations to identify bottlenecks and high-impact opportunities.',
    icon: Search,
  },
  {
    title: 'Design',
    description: 'Our architects draft a custom automation blueprint tailored to your specific business goals.',
    icon: PenTool,
  },
  {
    title: 'Implement',
    description: 'We deploy the solution using agile methodologies, ensuring zero downtime for your team.',
    icon: Rocket,
  },
  {
    title: 'Monitor',
    description: 'Continuous optimization and support to ensure your systems evolve with your business.',
    icon: Activity,
  },
];

export const Strategy = () => {
  return (
    <section id="strategy" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-4xl font-bold text-navy mb-6">The 4-Step Strategy</h2>
            <p className="text-navy/60 mb-8 leading-relaxed">
              Our proven methodology takes the guesswork out of automation. We move fast, but we move with precision.
            </p>
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-navy text-white">
              <div className="w-12 h-12 rounded-full bg-electric flex items-center justify-center font-bold text-xl">
                98%
              </div>
              <div>
                <p className="font-bold">Efficiency Increase</p>
                <p className="text-xs text-white/60 text-nowrap">Average across our client portfolio</p>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8 relative">
            {/* Connecting lines for desktop */}
            <div className="hidden sm:block absolute top-1/2 left-0 right-0 h-px bg-navy/5 -translate-y-1/2 -z-10" />
            <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-px bg-navy/5 -translate-x-1/2 -z-10" />

            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-navy/5 shadow-sm hover:border-electric/20 transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-navy">
                    <step.icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-electric uppercase tracking-widest">Step 0{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">{step.title}</h3>
                <p className="text-navy/60 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
