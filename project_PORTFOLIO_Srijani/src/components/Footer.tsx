import React from 'react';
import { Heart, Coffee, Code, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-amber-900 via-orange-900 to-amber-900 text-white py-12 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-orange-800/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-800/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Main Content */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-r from-amber-600 to-orange-700 rounded-full animate-bounce">
                <Coffee className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-200 to-orange-200 bg-clip-text text-transparent">
                Srijani Mukhopadhyay
              </h3>
            </div>
            
            <p className="text-amber-200 text-lg mb-6 max-w-2xl mx-auto">
              AI & ML Specialist | Data Scientist | Software Developer
            </p>
            
            <div className="flex items-center justify-center gap-2 text-amber-300 mb-6">
              <span>Made with</span>
              <Heart size={18} className="text-red-400 animate-pulse" />
              <span>and</span>
              <Coffee size={18} className="text-amber-400 animate-bounce" />
              <span>using</span>
              <Code size={18} className="text-blue-400" />
              <span>and lots of</span>
              <Sparkles size={18} className="text-yellow-400 animate-pulse" />
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-amber-800/50 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-amber-300">
                © {new Date().getFullYear()} Srijani Mukhopadhyay. All rights reserved.
              </p>
              
              <div className="flex items-center gap-6 text-amber-300">
                <span className="text-sm">Built with React & Tailwind CSS</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm">Available for opportunities</span>
                </div>
              </div>
            </div>
          </div>

          {/* Fun Quote */}
          <div className="mt-8 p-4 bg-gradient-to-r from-amber-800/30 to-orange-800/30 rounded-2xl border border-amber-700/50">
            <p className="text-amber-200 italic">
              "The future belongs to those who believe in the beauty of their dreams and the power of AI to make them reality."
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;