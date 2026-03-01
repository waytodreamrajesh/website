import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Zap, 
  RefreshCcw, 
  TrendingUp, 
  Users, 
  Clock, 
  CheckCircle2, 
  Layers, 
  Globe, 
  Lock 
} from 'lucide-react';

const objectives = [
  { title: 'Efficiency', icon: Zap },
  { title: 'Consistency', icon: RefreshCcw },
  { title: 'Scalability', icon: TrendingUp },
  { title: 'Collaboration', icon: Users },
  { title: 'Speed', icon: Clock },
  { title: 'Accuracy', icon: CheckCircle2 },
  { title: 'Integration', icon: Layers },
  { title: 'Global Reach', icon: Globe },
  { title: 'Security', icon: Lock },
  { title: 'Precision', icon: Target },
];

export const Objectives = () => {
  return (
    <section id="objectives" className="py-24 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Objectives</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Every solution we build is measured against these ten pillars of operational excellence.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {objectives.map((obj, index) => (
            <motion.div
              key={obj.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass-dark p-6 rounded-2xl flex flex-col items-center justify-center text-center group hover:bg-white hover:text-navy transition-all duration-300"
            >
              <obj.icon className="w-8 h-8 mb-4 text-electric group-hover:text-navy transition-colors" />
              <span className="font-semibold text-sm tracking-tight">{obj.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
