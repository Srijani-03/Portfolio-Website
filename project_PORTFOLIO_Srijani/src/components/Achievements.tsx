import React, { useState } from 'react';
import { Award, Users, Mic, Radio, Trophy, AlignCenterVertical as Certificate, ChevronDown, ChevronUp, Star, Calendar } from 'lucide-react';

const Achievements = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [expandedItems, setExpandedItems] = useState<{[key: string]: number | null}>({
    leadership: null,
    activities: null,
    certifications: null
  });

  const tabs = [
    { id: 'leadership', label: 'Leadership', icon: <Award size={20} />, color: 'from-blue-500 to-indigo-600' },
    { id: 'activities', label: 'Activities', icon: <Users size={20} />, color: 'from-green-500 to-emerald-600' },
    { id: 'certifications', label: 'Certifications', icon: <Certificate size={20} />, color: 'from-purple-500 to-violet-600' }
  ];

  const leadership = [
    {
      title: "Mentor – MLCanvas2.0",
      organization: "Innovation and Entrepreneurship Development Centre, UEM Kolkata",
      date: "Mar 2025",
      icon: <Award size={20} />,
      color: "from-amber-500 to-orange-600",
      description: [
        "Guided and mentored participants in a poster-making competition focused on Machine Learning themes.",
        "Helped foster creativity and innovation among participants while ensuring smooth event coordination."
      ]
    },
    {
      title: "Student Mentor – ALGOTRIX",
      organization: "Innovation and Entrepreneurship Development Centre, UEM Kolkata",
      date: "Mar 2025",
      icon: <Users size={20} />,
      color: "from-blue-500 to-indigo-600",
      description: [
        "Actively supported and reviewed project submissions in a department-level technical competition.",
        "Ensured successful coordination of the event by mentoring project groups."
      ]
    },
    {
      title: "Mentor – HARDWIRED",
      organization: "Innovation and Entrepreneurship Development Centre, UEM Kolkata",
      date: "Mar 2025",
      icon: <Trophy size={20} />,
      color: "from-purple-500 to-pink-600",
      description: [
        "Guided and mentored participants in a poster-making competition focused on Machine Learning themes.",
        "Played a pivotal role in organizing and executing the event successfully."
      ]
    }
  ];

  const activities = [
    {
      title: "Community Outreach Activities",
      organization: "Barrackpore Girls' Alumni Association: Prattay",
      date: "Dec 2022 - Present",
      icon: <Users size={20} />,
      color: "from-green-500 to-emerald-600",
      description: [
        "Distributed food and clothes to underprivileged children at a brickworks community in suburban Chakdaha.",
        "Donated stationery and learning materials to support the education of children at a community-run learning center in suburban Barrackpore."
      ]
    },
    {
      title: "YouTube Content Creator – Recitation & Audio Stories",
      organization: "Founder",
      date: "Dec 2020 - Present",
      icon: <Mic size={20} />,
      color: "from-red-500 to-pink-600",
      description: [
        "Launched and manage a literary-themed channel focused on poetry recitations, audio storytelling, and voice-over art.",
        "Promotes original and classic literature through expressive voice performance."
      ]
    },
    {
      title: "Event Organizer – \"Shabdabaji\"",
      organization: "University of Engineering & Management, Kolkata",
      date: "Jan 2024",
      icon: <Star size={20} />,
      color: "from-yellow-500 to-orange-600",
      description: [
        "Communicated and Organized \"Shabdabaji\" – a Bengali wordplay and cultural event hosted by RJ Roy",
        "Engaged participants in interactive linguistic games and poetic performances to celebrate Bengali heritage."
      ]
    },
    {
      title: "Voice Artist – Radio JU 90.8 MHz",
      organization: "Jadavpur University, Kolkata",
      date: "May 2023 - Jul 2023",
      icon: <Radio size={20} />,
      color: "from-indigo-500 to-purple-600",
      description: [
        "Performed an expressive poetry recitation piece, contributing to the promotion of regional literature through voice modulation and emotion.",
        "Narrated an engaging audio story for \"Sishutaranga\" - A Children's Program conducted by Community Radio JU 90.8 MHz"
      ]
    },
    {
      title: "Slam Poetry Winner – Ibtida 2023",
      organization: "Jadavpur University, Kolkata",
      date: "Feb 2023",
      icon: <Trophy size={20} />,
      color: "from-amber-500 to-yellow-600",
      description: [
        "Represented University of Engineering & Management at the inter-college cultural fest Ibtida 2023 hosted by Jadavpur University and secured 1st Position in the Slam Poetry competition (LAFZ)."
      ]
    }
  ];

  const certifications = [
    { name: "IBM Data Science Professional Certificate", status: "ongoing", color: "from-blue-500 to-indigo-600", progress: 75 },
    { name: "Microsoft Power BI Data Analyst", status: "ongoing", color: "from-yellow-500 to-orange-600", progress: 60 },
    { name: "Google Project Management", date: "Nov 2024 - May 2025", color: "from-green-500 to-emerald-600", progress: 100 },
    { name: "Google Cloud Computing Foundations (NPTEL)", date: "Aug 2024 - Oct 2024", color: "from-purple-500 to-violet-600", progress: 100 },
    { name: "Enhancing Soft Skills and Personality (NPTEL)", date: "Feb 2023 - Apr 2023", color: "from-pink-500 to-red-600", progress: 100 }
  ];

  const toggleExpand = (section: string, index: number) => {
    setExpandedItems(prev => ({
      ...prev,
      [section]: prev[section as keyof typeof prev] === index ? null : index
    }));
  };

  const renderLeadership = () => (
    <div className="space-y-6">
      {leadership.map((item, index) => (
        <div
          key={index}
          className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-200/50 animate-fadeInUp"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="flex items-start gap-4">
            <div className={`p-3 rounded-xl bg-gradient-to-r ${item.color} text-white shadow-lg`}>
              {item.icon}
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h4 className="text-xl font-bold text-amber-900 mb-1">{item.title}</h4>
                  <p className="text-amber-600 font-semibold">{item.organization}</p>
                </div>
                <div className="flex items-center gap-2 mt-2 md:mt-0">
                  <Calendar size={16} className="text-amber-600" />
                  <span className="text-amber-700 font-medium">{item.date}</span>
                </div>
              </div>
              
              <button
                onClick={() => toggleExpand('leadership', index)}
                className="flex items-center gap-2 text-amber-600 hover:text-orange-700 font-medium transition-colors mb-4"
              >
                <span>View Details</span>
                {expandedItems.leadership === index ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${
                expandedItems.leadership === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="space-y-2">
                  {item.description.map((desc, descIndex) => (
                    <div key={descIndex} className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.color} mt-2 flex-shrink-0`}></div>
                      <p className="text-amber-800">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderActivities = () => (
    <div className="space-y-6">
      {activities.map((activity, index) => (
        <div
          key={index}
          className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-200/50 animate-fadeInUp"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="flex items-start gap-4">
            <div className={`p-3 rounded-xl bg-gradient-to-r ${activity.color} text-white shadow-lg`}>
              {activity.icon}
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h4 className="text-xl font-bold text-amber-900 mb-1">{activity.title}</h4>
                  <p className="text-amber-600 font-semibold">{activity.organization}</p>
                </div>
                <div className="flex items-center gap-2 mt-2 md:mt-0">
                  <Calendar size={16} className="text-amber-600" />
                  <span className="text-amber-700 font-medium">{activity.date}</span>
                </div>
              </div>
              
              <button
                onClick={() => toggleExpand('activities', index)}
                className="flex items-center gap-2 text-amber-600 hover:text-orange-700 font-medium transition-colors mb-4"
              >
                <span>View Details</span>
                {expandedItems.activities === index ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${
                expandedItems.activities === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="space-y-2">
                  {activity.description.map((desc, descIndex) => (
                    <div key={descIndex} className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${activity.color} mt-2 flex-shrink-0`}></div>
                      <p className="text-amber-800">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderCertifications = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {certifications.map((cert, index) => (
        <div
          key={index}
          className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-200/50 animate-fadeInUp hover:scale-105"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="flex items-start gap-4 mb-4">
            <div className={`p-3 rounded-xl bg-gradient-to-r ${cert.color} text-white shadow-lg`}>
              <Certificate size={20} />
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-bold text-amber-900 mb-2">{cert.name}</h4>
              <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                cert.status === 'ongoing' 
                  ? 'bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-800' 
                  : 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-800'
              }`}>
                {cert.status === 'ongoing' ? 'In Progress' : 'Completed'}
              </span>
              {cert.date && (
                <p className="text-amber-600 text-sm mt-2">{cert.date}</p>
              )}
            </div>
          </div>
          
          {cert.progress && (
            <div className="mt-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-amber-700">Progress</span>
                <span className="text-sm font-bold text-amber-900">{cert.progress}%</span>
              </div>
              <div className="w-full bg-amber-200 rounded-full h-2">
                <div
                  className={`h-2 bg-gradient-to-r ${cert.color} rounded-full transition-all duration-1000`}
                  style={{ width: `${cert.progress}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-amber-100 via-orange-100 to-yellow-100 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-80 h-80 bg-orange-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center gap-3 bg-orange-100 text-orange-800 px-6 py-3 rounded-full text-sm font-medium mb-6">
            <Trophy size={20} />
            Accomplishments
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-800 via-orange-700 to-amber-900 bg-clip-text text-transparent mb-6">
            Achievements & Activities
          </h2>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            Leadership experience, extracurricular activities, and professional certifications
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-col sm:flex-row justify-center mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-amber-200/50">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? `bg-gradient-to-r ${tab.color} text-white shadow-lg scale-105`
                    : 'text-amber-800 hover:bg-amber-100'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[600px]">
          {activeTab === 0 && renderLeadership()}
          {activeTab === 1 && renderActivities()}
          {activeTab === 2 && renderCertifications()}
        </div>
      </div>
    </section>
  );
};

export default Achievements;