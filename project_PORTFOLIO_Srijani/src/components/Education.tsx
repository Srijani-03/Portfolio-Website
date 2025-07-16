import React, { useState } from 'react';
import { GraduationCap, Calendar, MapPin, Award, ChevronDown, ChevronUp } from 'lucide-react';

const Education = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const educationData = [
    {
      institution: "University of Engineering & Management",
      degree: "B.Tech CSE (AI & ML)",
      duration: "Aug 2022 - Jul 2026",
      location: "Kolkata, India",
      grade: "CGPA: 9.19 (till 6th semester)",
      current: true,
      details: [
        "Specializing in Artificial Intelligence and Machine Learning",
        "Relevant coursework: Data Structures, Algorithms, Machine Learning, Deep Learning",
        "Active member of technical clubs and innovation centers",
        "Consistent academic performance with high CGPA"
      ],
      color: "from-amber-500 to-orange-600"
    },
    {
      institution: "Barrackpore Girls' High School",
      degree: "Higher Secondary Education",
      duration: "2022",
      location: "Barrackpore, India",
      grade: "Percentage: 85.6%",
      current: false,
      details: [
        "Science stream with focus on Mathematics and Physics",
        "Strong foundation in analytical thinking",
        "Participated in various academic competitions",
        "Developed leadership skills through school activities"
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      institution: "Barrackpore Girls' High School",
      degree: "Secondary Education",
      duration: "2020",
      location: "Barrackpore, India",
      grade: "Percentage: 91%",
      current: false,
      details: [
        "Excellent academic performance across all subjects",
        "Active participation in cultural and literary events",
        "Developed strong communication and presentation skills",
        "Foundation for future academic success"
      ],
      color: "from-red-500 to-pink-500"
    }
  ];

  const toggleExpand = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 relative">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-amber-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-orange-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center gap-3 bg-amber-100 text-amber-800 px-6 py-3 rounded-full text-sm font-medium mb-6">
            <GraduationCap size={20} />
            Academic Journey
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-800 via-orange-700 to-amber-900 bg-clip-text text-transparent mb-6">
            Education
          </h2>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            My academic foundation in computer science and artificial intelligence
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-amber-200/50 hover:border-amber-300 animate-fadeInUp`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1">
                  <div className="flex items-start gap-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${edu.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <GraduationCap size={28} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-amber-900 mb-2 group-hover:text-orange-700 transition-colors">
                            {edu.institution}
                          </h3>
                          <p className="text-xl font-semibold bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent mb-4">
                            {edu.degree}
                          </p>
                        </div>
                        {edu.current && (
                          <div className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium animate-pulse">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                            Current
                          </div>
                        )}
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-amber-700 mb-4">
                        <div className="flex items-center gap-2 bg-amber-100 px-3 py-2 rounded-full">
                          <Calendar size={16} />
                          <span className="font-medium">{edu.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-orange-100 px-3 py-2 rounded-full">
                          <MapPin size={16} />
                          <span className="font-medium">{edu.location}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold ${
                          edu.current 
                            ? 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-800' 
                            : 'bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800'
                        }`}>
                          <Award size={16} />
                          {edu.grade}
                        </div>
                        
                        <button
                          onClick={() => toggleExpand(index)}
                          className="flex items-center gap-2 text-amber-600 hover:text-orange-700 font-medium transition-colors group/btn"
                        >
                          <span>Details</span>
                          {expandedCard === index ? (
                            <ChevronUp size={20} className="group-hover/btn:animate-bounce" />
                          ) : (
                            <ChevronDown size={20} className="group-hover/btn:animate-bounce" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Expandable Details */}
              <div className={`overflow-hidden transition-all duration-500 ${
                expandedCard === index ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
              }`}>
                <div className="border-t border-amber-200 pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {edu.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start gap-3 animate-fadeInUp" style={{ animationDelay: `${detailIndex * 100}ms` }}>
                        <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-amber-800">{detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;