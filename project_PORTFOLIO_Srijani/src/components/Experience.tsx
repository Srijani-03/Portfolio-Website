import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, Users, FileText, Clock, ChevronRight } from 'lucide-react';

const Experience = () => {
  const [isHovered, setIsHovered] = useState(false);

  const responsibilities = [
    {
      icon: <FileText size={20} />,
      title: "HR Documentation",
      description: "Assisted in streamlining HR documentation and maintained accurate records in compliance with internal policies.",
      color: "from-amber-500 to-orange-600"
    },
    {
      icon: <Users size={20} />,
      title: "Policy Enhancement",
      description: "Contributed to updating HR policies and onboarding resources, enhancing process clarity and team efficiency.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Clock size={20} />,
      title: "Remote Collaboration",
      description: "Collaborated with cross-functional teams in a remote environment, strengthening communication, time management, and coordination skills.",
      color: "from-red-500 to-pink-500"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-amber-100 via-orange-100 to-yellow-100 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center gap-3 bg-orange-100 text-orange-800 px-6 py-3 rounded-full text-sm font-medium mb-6">
            <Briefcase size={20} />
            Professional Journey
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-800 via-orange-700 to-amber-900 bg-clip-text text-transparent mb-6">
            Experience
          </h2>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            Professional experience that has shaped my career and skills
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div 
            className="group bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-amber-200/50 hover:border-orange-300 animate-fadeInUp"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="flex items-start gap-6">
              <div className={`p-4 rounded-2xl bg-gradient-to-br from-amber-600 to-orange-700 text-white shadow-lg transition-transform duration-500 ${isHovered ? 'scale-110 rotate-3' : ''}`}>
                <Briefcase size={32} />
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-amber-900 mb-2 group-hover:text-orange-700 transition-colors">
                      Human Resources Intern
                    </h3>
                    <p className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent mb-4">
                      Exions Tech
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-amber-700">
                    <div className="flex items-center gap-2 bg-amber-100 px-4 py-2 rounded-full">
                      <Calendar size={16} />
                      <span className="font-medium">Dec 2024 – Mar 2025</span>
                    </div>
                    <div className="flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full">
                      <MapPin size={16} />
                      <span className="font-medium">Remote</span>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium inline-flex animate-pulse">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Currently Active
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {responsibilities.map((resp, index) => (
                    <div
                      key={index}
                      className="group/card bg-gradient-to-br from-white to-amber-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-200/50 hover:border-amber-300 animate-fadeInUp"
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${resp.color} text-white mb-4 group-hover/card:scale-110 transition-transform duration-300`}>
                        {resp.icon}
                      </div>
                      
                      <h4 className="text-lg font-bold text-amber-900 mb-3 group-hover/card:text-orange-700 transition-colors">
                        {resp.title}
                      </h4>
                      
                      <p className="text-amber-800 text-sm leading-relaxed">
                        {resp.description}
                      </p>
                      
                      <div className="flex items-center gap-2 mt-4 text-amber-600 group-hover/card:text-orange-700 transition-colors">
                        <span className="text-sm font-medium">Learn more</span>
                        <ChevronRight size={16} className="group-hover/card:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl border border-amber-200">
                  <h4 className="text-lg font-bold text-amber-900 mb-3">Key Achievements</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full"></div>
                      <span className="text-amber-800">Enhanced team efficiency by 25%</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full"></div>
                      <span className="text-amber-800">Streamlined documentation processes</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full"></div>
                      <span className="text-amber-800">Improved cross-team communication</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full"></div>
                      <span className="text-amber-800">Developed remote work expertise</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;