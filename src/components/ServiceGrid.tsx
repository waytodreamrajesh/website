import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, BarChart3, ShieldCheck, Zap } from 'lucide-react';

const services = [
  {
    title: 'Process Automation',
    description: 'Eliminate repetitive tasks with custom-built RPA and AI-driven workflows.',
    icon: Zap,
    color: 'bg-blue-500',
  },
  {
    title: 'Data Intelligence',
    description: 'Transform raw data into actionable insights with real-time analytics dashboards.',
    icon: BarChart3,
    color: 'bg-indigo-500',
  },
  {
    title: 'System Integration',
    description: 'Connect your disparate tools into a single, cohesive operational engine.',
    icon: Cpu,
    color: 'bg-electric',
  },
  {
    title: 'Security & Compliance',
    description: 'Enterprise-grade security protocols baked into every automation layer.',
    icon: ShieldCheck,
    color: 'bg-navy',
  },
];

export const ServiceGrid = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Our Core Capabilities</h2>
          <p className="text-navy/60">We don't just build tools; we engineer competitive advantages through intelligent design.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-3xl hover:shadow-xl transition-all hover:-translate-y-1 group cursor-default"
            >
              <div className={`w-12 h-12 ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-current/10 group-hover:scale-110 transition-transform`}>
                <service.icon className="text-white w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">{service.title}</h3>
              <p className="text-navy/60 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
