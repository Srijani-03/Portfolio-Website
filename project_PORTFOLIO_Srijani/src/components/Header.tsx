import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, Coffee } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#education', label: 'Education' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-amber-50/95 backdrop-blur-md shadow-lg border-b border-amber-200' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="p-2 bg-gradient-to-br from-amber-600 to-orange-700 rounded-full group-hover:scale-110 transition-transform duration-300">
              <Coffee className="text-white" size={24} />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-800 via-orange-700 to-amber-900 bg-clip-text text-transparent">
              Srijani Mukhopadhyay
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 text-amber-800 hover:text-orange-700 transition-all duration-300 font-medium group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-600 to-orange-700 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-3">
            {[
              { href: "https://github.com/Srijani-03", icon: Github, color: "hover:text-gray-800" },
              { href: "https://linkedin.com/in/srijani-mukhopadhyay", icon: Linkedin, color: "hover:text-blue-600" },
              { href: "mailto:srijani.mukherjee2003@gmail.com", icon: Mail, color: "hover:text-red-600" },
              { href: "tel:+919433616483", icon: Phone, color: "hover:text-green-600" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`p-2 text-amber-700 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-amber-100 rounded-full`}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-amber-800 hover:text-orange-700 transition-colors hover:bg-amber-100 rounded-full"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-amber-200 bg-amber-50/95 backdrop-blur-md animate-fadeIn">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 text-amber-800 hover:text-orange-700 hover:bg-amber-100 rounded-lg transition-all duration-300 font-medium"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center justify-center space-x-4 mt-6 pt-4 border-t border-amber-200">
              {[
                { href: "https://github.com/Srijani-03", icon: Github },
                { href: "https://linkedin.com/in/srijani-mukhopadhyay", icon: Linkedin },
                { href: "mailto:srijani.mukherjee2003@gmail.com", icon: Mail },
                { href: "tel:+919433616483", icon: Phone }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="p-3 text-amber-700 hover:text-orange-700 transition-all duration-300 hover:scale-110 hover:bg-amber-100 rounded-full"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;