import React, { useState } from 'react';
import { Code, Calendar, ExternalLink, Github, ChevronDown, ChevronUp, Sparkles, BarChart3, Shield } from 'lucide-react';

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "HR Analytics Dashboard",
      duration: "June 2025",
      tools: ["Power BI", "DAX", "Data Modeling", "Visualization Techniques"],
      githubUrl: "https://github.com/Srijani-03/HR-Analytics-Dashboard", // Replace with your actual GitHub URL
      description: [
        "Developed an interactive HR analytics dashboard in Power BI to analyze attrition trends based on age, salary, education, job role, and experience.",
        "Implemented calculated measures using DAX to compute attrition rate, average age, salary, and years of experience.",
        "Created dynamic filters and slicers for business functions and gender, enabling HR teams to perform targeted retention analysis.",
        "Designed visual components including bar charts, donut charts, and line graphs for enhanced decision-making insights."
      ],
      category: "Data Analytics",
      icon: <BarChart3 size={24} />,
      color: "from-green-500 to-emerald-600",
      bgColor: "from-green-50 to-emerald-50",
      features: ["Interactive Dashboards", "Real-time Analytics", "Custom DAX Measures", "Dynamic Filtering"]
    },
    {
      title: "Emotion-Based Music Playback System Using Face & Emotion Detection",
      duration: "Mar 2025 - May 2025",
      tools: ["Python", "OpenCV", "Haar Cascade", "Deep Learning", "Flask", "Pygame"],
      githubUrl: "https://github.com/Srijani-03/Emotion-Based-Music-Playback-System-", // Replace with your actual GitHub URL
      description: [
        "Developed a real-time facial emotion recognition system to dynamically trigger music playback based on user mood.",
        "Implemented Haar cascade-based face detection and a deep learning emotion classifier, achieving accurate live emotion classification.",
        "Created a responsive Flask web interface ensuring smooth user interaction and multi-platform accessibility.",
        "Applied affective computing principles to analyze user expressions and personalize multimedia engagement."
      ],
      category: "AI/ML",
      icon: <Sparkles size={24} />,
      color: "from-purple-500 to-pink-600",
      bgColor: "from-purple-50 to-pink-50",
      features: ["Real-time Detection", "Deep Learning", "Web Interface", "Emotion Classification"]
    },
    {
      title: "Smart Ring for Women's Safety",
      duration: "Feb 2024 - Jul 2024",
      tools: ["Raspberry Pi", "IoT Sensors", "Python", "Embedded Systems"],
      githubUrl: "https://github.com/Srijani-03/Smart-Ring-for-Women-s-Safety-", // Replace with your actual GitHub URL
      description: [
        "Developed a safety device using Raspberry Pi and IoT components to enable real-time distress signal triggering and monitoring.",
        "Implemented hardware-software integration for seamless data transmission and instant alert generation during emergencies.",
        "Created a compact and intuitive prototype ensuring practical usability and portability for everyday safety.",
        "Applied real-time sensor communication techniques to analyze environmental triggers and user input."
      ],
      category: "IoT",
      icon: <Shield size={24} />,
      color: "from-orange-500 to-red-600",
      bgColor: "from-orange-50 to-red-50",
      features: ["IoT Integration", "Real-time Alerts", "Compact Design", "Emergency Response"]
    }
  ];

  const toggleExpand = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-80 h-80 bg-amber-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center gap-3 bg-yellow-100 text-yellow-800 px-6 py-3 rounded-full text-sm font-medium mb-6">
            <Code size={20} />
            Technical Showcase
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-800 via-orange-700 to-amber-900 bg-clip-text text-transparent mb-6">
            Projects
          </h2>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            Innovative solutions and technical projects that demonstrate my skills and creativity
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-amber-200/50 hover:border-amber-300 animate-fadeInUp`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Project Icon & Category */}
                <div className="flex-shrink-0">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${project.color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {project.icon}
                  </div>
                  <div className="mt-4">
                    <span className={`inline-block px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r ${project.bgColor} text-gray-800`}>
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-amber-900 mb-3 group-hover:text-orange-700 transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex items-center gap-2 bg-amber-100 px-3 py-2 rounded-full">
                          <Calendar size={16} className="text-amber-600" />
                          <span className="text-amber-800 font-medium text-sm">{project.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
                      <Code size={18} />
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, toolIndex) => (
                        <span
                          key={toolIndex}
                          className="px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 rounded-full text-sm font-medium hover:from-amber-200 hover:to-orange-200 transition-all duration-300 hover:scale-105"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
                      <Sparkles size={18} />
                      Key Features:
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2 bg-white/70 px-3 py-2 rounded-lg">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.color}`}></div>
                          <span className="text-amber-800 text-sm font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Expand/Collapse Button */}
                  <button
                    onClick={() => toggleExpand(index)}
                    className="flex items-center gap-2 text-amber-600 hover:text-orange-700 font-semibold transition-colors group/btn mb-4"
                  >
                    <span>Project Details</span>
                    {expandedProject === index ? (
                      <ChevronUp size={20} className="group-hover/btn:animate-bounce" />
                    ) : (
                      <ChevronDown size={20} className="group-hover/btn:animate-bounce" />
                    )}
                  </button>

                  {/* Expandable Details */}
                  <div className={`overflow-hidden transition-all duration-500 ${
                    expandedProject === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="border-t border-amber-200 pt-6">
                      <div className="space-y-4">
                        {project.description.map((desc, descIndex) => (
                          <div key={descIndex} className="flex items-start gap-3 animate-fadeInUp" style={{ animationDelay: `${descIndex * 100}ms` }}>
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.color} mt-2 flex-shrink-0`}></div>
                            <p className="text-amber-800 leading-relaxed">{desc}</p>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex gap-4 mt-6">
                        <a 
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-gradient-to-r from-amber-600 to-orange-700 text-white px-6 py-3 rounded-full hover:from-amber-700 hover:to-orange-800 transition-all duration-300 font-medium hover:scale-105"
                        >
                          <Github size={18} />
                          View Code
                        </a>
                      </div>
                    </div>
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

export default Projects;