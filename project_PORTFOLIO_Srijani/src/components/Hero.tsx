import React, { useState, useEffect } from 'react';
import { Download, MapPin, Mail, Phone, Sparkles, Code, Brain, Palette } from 'lucide-react';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    { text: "AI & ML Specialist", icon: <Brain size={20} /> },
    { text: "Data Scientist", icon: <Sparkles size={20} /> },
    { text: "Software Developer", icon: <Code size={20} /> },
    { text: "Creative Innovator", icon: <Palette size={20} /> }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="min-h-screen pt-20 pb-16 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-yellow-200/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-8 animate-fadeInUp">
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-bounce">
                <Sparkles size={16} />
                Available for opportunities
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-amber-900 mb-6 leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-800 bg-clip-text text-transparent animate-pulse">
                  Srijani
                </span>
              </h1>
              
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-6 h-16">
                <span className="text-xl md:text-2xl text-amber-800">I'm a</span>
                <div className="relative">
                  <div className="flex items-center gap-2 bg-gradient-to-r from-amber-600 to-orange-700 text-white px-4 py-2 rounded-lg font-semibold text-xl md:text-2xl animate-slideInRight">
                    {roles[currentRole].icon}
                    {roles[currentRole].text}
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-2xl mb-8 animate-fadeInUp delay-300">
              <p className="text-lg md:text-xl text-amber-800 leading-relaxed">
                Computer Science undergraduate specializing in <span className="font-semibold text-orange-700">Artificial Intelligence</span> and <span className="font-semibold text-orange-700">Machine Learning</span>. 
                Passionate about building intelligent systems that create real-world impact through innovative technology solutions.
              </p>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 text-amber-700 mb-8 animate-fadeInUp delay-500">
              {[
                { icon: MapPin, text: "Barrackpore, Kolkata" },
                { icon: Phone, text: "+91 9433616483" },
                { icon: Mail, text: "srijani.mukherjee2003@gmail.com" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 bg-white/70 px-4 py-2 rounded-full hover:bg-white/90 transition-all duration-300 hover:scale-105">
                  <item.icon size={16} className="text-orange-600" />
                  <span className="text-sm md:text-base">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fadeInUp delay-700">
              <a
                href="/Srijani_Mukhopadhyay _CV.pdf"
                download
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-amber-600 to-orange-700 text-white px-8 py-4 rounded-full hover:from-amber-700 hover:to-orange-800 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Download size={20} className="group-hover:animate-bounce" />
                Download Resume
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 border-2 border-amber-600 text-amber-700 px-8 py-4 rounded-full hover:bg-amber-600 hover:text-white transition-all duration-300 font-semibold text-lg hover:scale-105"
              >
                <Sparkles size={20} className="group-hover:animate-spin" />
                Let's Connect
              </a>
            </div>
          </div>

          {/* Right Content - Image Placeholder */}
          <div className="flex-1 flex justify-center lg:justify-end animate-fadeInRight">
            <div className="relative">
              {/* Main Image Container */}
              <div className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-amber-200 via-orange-200 to-yellow-200 rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 relative overflow-hidden group">
                {/* Placeholder for actual image */}
                <div className="w-72 h-72 md:w-88 md:h-88 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center border-4 border-white/50 overflow-hidden">
                  <img 
                    src="/formal_photo.png" 
                    alt="Srijani Mukhopadhyay" 
                    className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-bounce delay-1000">
                  <Brain className="text-white" size={24} />
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center animate-bounce delay-2000">
                  <Code className="text-white" size={16} />
                </div>
                <div className="absolute top-1/4 -left-6 w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center animate-bounce">
                  <Sparkles className="text-white" size={14} />
                </div>
              </div>

              {/* Background Decoration */}
              <div className="absolute inset-0 -z-10">
                <div className="w-full h-full bg-gradient-to-br from-amber-300/20 to-orange-300/20 rounded-full blur-xl animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-amber-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-amber-600 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;