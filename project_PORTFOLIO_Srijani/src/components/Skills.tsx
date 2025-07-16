import React, { useState } from 'react';
import { Code, Database, BarChart3, Wrench, Brain, Globe, ChevronRight } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code size={24} />,
      skills: [
        { name: "Python", level: 90, color: "from-blue-500 to-blue-600" },
        { name: "C", level: 85, color: "from-gray-500 to-gray-600" },
        { name: "Java", level: 80, color: "from-red-500 to-red-600" }
      ],
      color: "from-blue-500 to-indigo-600",
      bgColor: "from-blue-50 to-indigo-50"
    },
    {
      title: "Web Technologies",
      icon: <Globe size={24} />,
      skills: [
        { name: "HTML", level: 95, color: "from-orange-500 to-orange-600" },
        { name: "CSS", level: 90, color: "from-blue-500 to-blue-600" },
        { name: "JavaScript", level: 85, color: "from-yellow-500 to-yellow-600" },
        { name: "Bootstrap", level: 80, color: "from-purple-500 to-purple-600" }
      ],
      color: "from-green-500 to-emerald-600",
      bgColor: "from-green-50 to-emerald-50"
    },
    {
      title: "Database Systems",
      icon: <Database size={24} />,
      skills: [
        { name: "MySQL", level: 85, color: "from-blue-500 to-blue-600" },
        { name: "Oracle 10g", level: 75, color: "from-red-500 to-red-600" }
      ],
      color: "from-purple-500 to-violet-600",
      bgColor: "from-purple-50 to-violet-50"
    },
    {
      title: "Data Science & ML",
      icon: <Brain size={24} />,
      skills: [
        { name: "TensorFlow", level: 85, color: "from-orange-500 to-orange-600" },
        { name: "Keras", level: 80, color: "from-red-500 to-red-600" },
        { name: "OpenCV", level: 85, color: "from-green-500 to-green-600" },
        { name: "Pandas", level: 90, color: "from-blue-500 to-blue-600" },
        { name: "NumPy", level: 90, color: "from-indigo-500 to-indigo-600" },
        { name: "Matplotlib", level: 85, color: "from-purple-500 to-purple-600" },
        { name: "Seaborn", level: 80, color: "from-pink-500 to-pink-600" }
      ],
      color: "from-orange-500 to-red-600",
      bgColor: "from-orange-50 to-red-50"
    },
    {
      title: "Data Analysis Tools",
      icon: <BarChart3 size={24} />,
      skills: [
        { name: "Power BI", level: 85, color: "from-yellow-500 to-yellow-600" }
      ],
      color: "from-red-500 to-pink-600",
      bgColor: "from-red-50 to-pink-50"
    },
    {
      title: "Other Tools & Technologies",
      icon: <Wrench size={24} />,
      skills: [
        { name: "GitHub", level: 90, color: "from-gray-500 to-gray-600" },
        { name: "VS Code", level: 95, color: "from-blue-500 to-blue-600" },
        { name: "Google Colab", level: 85, color: "from-orange-500 to-orange-600" },
        { name: "Jupyter Notebook", level: 90, color: "from-orange-500 to-red-600" },
        { name: "MS Office", level: 90, color: "from-blue-500 to-indigo-600" },
        { name: "LaTeX", level: 75, color: "from-green-500 to-green-600" }
      ],
      color: "from-indigo-500 to-purple-600",
      bgColor: "from-indigo-50 to-purple-50"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-amber-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center gap-3 bg-amber-100 text-amber-800 px-6 py-3 rounded-full text-sm font-medium mb-6">
            <Brain size={20} />
            Technical Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-800 via-orange-700 to-amber-900 bg-clip-text text-transparent mb-6">
            Skills
          </h2>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            Technical skills and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Category Tabs */}
          <div className="lg:col-span-1">
            <div className="space-y-2 sticky top-24">
              {skillCategories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-300 group ${
                    activeCategory === index
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                      : 'bg-white/70 text-amber-800 hover:bg-white/90 hover:scale-102'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${
                      activeCategory === index 
                        ? 'bg-white/20' 
                        : `bg-gradient-to-r ${category.color} text-white`
                    }`}>
                      {category.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-sm">{category.title}</h3>
                      <p className={`text-xs ${
                        activeCategory === index ? 'text-white/80' : 'text-amber-600'
                      }`}>
                        {category.skills.length} skills
                      </p>
                    </div>
                    <ChevronRight 
                      size={16} 
                      className={`transition-transform duration-300 ${
                        activeCategory === index ? 'rotate-90' : 'group-hover:translate-x-1'
                      }`} 
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Skills Display */}
          <div className="lg:col-span-3">
            <div className={`bg-gradient-to-br ${skillCategories[activeCategory].bgColor} rounded-3xl p-8 shadow-xl border border-amber-200/50`}>
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-4 rounded-2xl bg-gradient-to-r ${skillCategories[activeCategory].color} text-white shadow-lg`}>
                  {skillCategories[activeCategory].icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-amber-900">
                    {skillCategories[activeCategory].title}
                  </h3>
                  <p className="text-amber-700">
                    {skillCategories[activeCategory].skills.length} technologies
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skillCategories[activeCategory].skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fadeInUp"
                    style={{ animationDelay: `${skillIndex * 100}ms` }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-bold text-amber-900">{skill.name}</h4>
                      <span className="text-sm font-medium text-amber-700">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-amber-200 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out shadow-sm`}
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${skillIndex * 200}ms`
                        }}
                      ></div>
                    </div>
                    
                    <div className="mt-3 flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${skill.color}`}></div>
                      <span className="text-xs text-amber-600 font-medium">
                        {skill.level >= 90 ? 'Expert' : skill.level >= 80 ? 'Advanced' : skill.level >= 70 ? 'Intermediate' : 'Beginner'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;