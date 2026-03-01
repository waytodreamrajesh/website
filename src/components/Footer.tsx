import React from 'react';
import { Cloud, Twitter, Linkedin, Github, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-navy/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-electric rounded flex items-center justify-center">
                <Cloud className="text-white w-5 h-5" />
              </div>
              <span className="text-lg font-bold text-navy">
                Cloud<span className="text-electric">Nova</span>
              </span>
            </div>
            <p className="text-navy/60 text-sm leading-relaxed mb-6">
              Engineering the future of enterprise operations through intelligent automation and strategic design.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-navy/40 hover:text-electric transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-navy/40 hover:text-electric transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-navy/40 hover:text-electric transition-colors"><Github className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-navy mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-navy/60">
              <li><a href="#" className="hover:text-electric transition-colors">Process Automation</a></li>
              <li><a href="#" className="hover:text-electric transition-colors">Data Intelligence</a></li>
              <li><a href="#" className="hover:text-electric transition-colors">System Integration</a></li>
              <li><a href="#" className="hover:text-electric transition-colors">AI Consulting</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-navy mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-navy/60">
              <li><a href="#" className="hover:text-electric transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-electric transition-colors">Our Process</a></li>
              <li><a href="#" className="hover:text-electric transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-electric transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-navy mb-6">Newsletter</h4>
            <p className="text-sm text-navy/60 mb-4">Get the latest insights on automation.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email" 
                className="bg-slate-50 border border-navy/5 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-electric/30"
              />
              <button className="bg-navy text-white p-2 rounded-lg hover:bg-navy/90 transition-colors">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-navy/5 flex flex-col md:row items-center justify-between gap-4">
          <p className="text-xs text-navy/40">© 2024 Cloud Nova Consultancy. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-navy/40">
            <a href="#" className="hover:text-navy transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-navy transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
