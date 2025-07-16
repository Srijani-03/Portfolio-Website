import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle, User, FileText } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "srijani.mukherjee2003@gmail.com",
      href: "mailto:srijani.mukherjee2003@gmail.com",
      color: "from-red-500 to-pink-600",
      bgColor: "from-red-50 to-pink-50"
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      value: "+91 9433616483",
      href: "tel:+919433616483",
      color: "from-green-500 to-emerald-600",
      bgColor: "from-green-50 to-emerald-50"
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      value: "Barrackpore, Kolkata - 700123",
      href: "#",
      color: "from-purple-500 to-violet-600",
      bgColor: "from-purple-50 to-violet-50"
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      name: "GitHub",
      href: "https://github.com/Srijani-03",
      color: "from-gray-700 to-gray-900",
      hoverColor: "hover:from-gray-800 hover:to-black"
    },
    {
      icon: <Linkedin size={24} />,
      name: "LinkedIn",
      href: "https://linkedin.com/in/srijani-mukhopadhyay",
      color: "from-blue-600 to-blue-800",
      hoverColor: "hover:from-blue-700 hover:to-blue-900"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-80 h-80 bg-amber-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center gap-3 bg-yellow-100 text-yellow-800 px-6 py-3 rounded-full text-sm font-medium mb-6">
            <MessageCircle size={20} />
            Let's Connect
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-800 via-orange-700 to-amber-900 bg-clip-text text-transparent mb-6">
            Get In Touch
          </h2>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-fadeInLeft">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-amber-200/50">
              <h3 className="text-2xl font-bold text-amber-900 mb-8 flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-amber-600 to-orange-700 rounded-lg text-white">
                  <MessageCircle size={24} />
                </div>
                Contact Information
              </h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="group flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-white to-amber-50 hover:from-amber-50 hover:to-orange-50 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
                  >
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${info.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-amber-900 mb-1">{info.title}</h4>
                      <a 
                        href={info.href}
                        className="text-amber-700 hover:text-orange-700 transition-colors font-medium"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <h4 className="font-bold text-amber-900 mb-6 flex items-center gap-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full"></div>
                  Connect with me
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group p-4 rounded-2xl bg-gradient-to-r ${social.color} ${social.hoverColor} text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110`}
                    >
                      <div className="group-hover:animate-bounce">
                        {social.icon}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fadeInRight">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-amber-200/50">
              <h3 className="text-2xl font-bold text-amber-900 mb-8 flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-amber-600 to-orange-700 rounded-lg text-white">
                  <Send size={24} />
                </div>
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label htmlFor="name" className="block text-sm font-bold text-amber-900 mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-600" size={20} />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-4 border-2 border-amber-200 rounded-2xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm"
                        placeholder="Your full name"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label htmlFor="email" className="block text-sm font-bold text-amber-900 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-600" size={20} />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-4 border-2 border-amber-200 rounded-2xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <label htmlFor="subject" className="block text-sm font-bold text-amber-900 mb-2">
                    Subject
                  </label>
                  <div className="relative">
                    <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-600" size={20} />
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-4 border-2 border-amber-200 rounded-2xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm"
                      placeholder="What's this about?"
                    />
                  </div>
                </div>

                <div className="relative">
                  <label htmlFor="message" className="block text-sm font-bold text-amber-900 mb-2">
                    Message
                  </label>
                  <div className="relative">
                    <MessageCircle className="absolute left-3 top-4 text-amber-600" size={20} />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full pl-12 pr-4 py-4 border-2 border-amber-200 rounded-2xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 resize-vertical bg-white/70 backdrop-blur-sm"
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-amber-600 to-orange-700 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 ${
                    isSubmitting 
                      ? 'opacity-70 cursor-not-allowed' 
                      : 'hover:from-amber-700 hover:to-orange-800 hover:scale-105'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} className="group-hover:animate-bounce" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;