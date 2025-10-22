import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, BookOpen, Users, Award, Clock, MapPin, 
  Calendar, CheckCircle, Star, ArrowRight, ExternalLink,
  Wrench, Settings, Zap, Target, Heart, Globe
} from 'lucide-react';
import SEO from '../components/SEO';
import { SEOData } from '../utils/seo';

const VanDykUniversity = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const seoData: SEOData = {
    title: 'Van Dyk University - Professional Recycling Equipment Training',
    description: 'Comprehensive training programs for recycling equipment operation, maintenance, and optimization. Bollegraaf baler training, TOMRA optical sorting, and advanced recycling technology courses.',
    keywords: 'recycling training, equipment training, Bollegraaf training, TOMRA training, recycling education, professional development, recycling certification, classroom training',
    url: '/van-dyk-university',
    type: 'website'
  };

  const trainingPrograms = [
    {
      id: 'bollegraaf-training',
      title: 'Bollegraaf Baler Training',
      duration: '3 Days',
      level: 'Intermediate',
      description: 'Comprehensive training on Bollegraaf baler operation, maintenance, and troubleshooting.',
      topics: [
        'Baler operation fundamentals',
        'Preventive maintenance procedures',
        'Troubleshooting common issues',
        'Safety protocols and procedures',
        'Performance optimization techniques'
      ],
      prerequisites: 'Basic mechanical knowledge recommended',
      certification: 'Bollegraaf Baler Operator Certificate'
    },
    {
      id: 'tomra-training',
      title: 'TOMRA Optical Sorting Technology',
      duration: '2 Days',
      level: 'Beginner to Advanced',
      description: 'Advanced training on TOMRA optical sorting systems and AI-powered material recognition.',
      topics: [
        'Optical sorting principles',
        'AI and machine learning applications',
        'System configuration and optimization',
        'Quality control and monitoring',
        'Integration with existing systems'
      ],
      prerequisites: 'Basic understanding of recycling processes',
      certification: 'TOMRA Optical Sorting Specialist Certificate'
    },
    {
      id: 'mrf-operations',
      title: 'MRF Operations & Management',
      duration: '5 Days',
      level: 'Advanced',
      description: 'Complete MRF operations training covering all aspects of material recovery facility management.',
      topics: [
        'MRF design and layout optimization',
        'Material flow management',
        'Quality control and contamination reduction',
        'Safety and environmental compliance',
        'Performance metrics and KPIs',
        'Staff training and management'
      ],
      prerequisites: '2+ years recycling industry experience',
      certification: 'MRF Operations Manager Certificate'
    },
    {
      id: 'maintenance-technician',
      title: 'Equipment Maintenance Technician',
      duration: '4 Days',
      level: 'Intermediate',
      description: 'Specialized training for maintenance technicians on recycling equipment repair and maintenance.',
      topics: [
        'Mechanical systems troubleshooting',
        'Hydraulic and pneumatic systems',
        'Electrical systems and controls',
        'Preventive maintenance scheduling',
        'Parts identification and ordering',
        'Safety procedures and lockout/tagout'
      ],
      prerequisites: 'Mechanical or electrical background',
      certification: 'Recycling Equipment Maintenance Technician Certificate'
    }
  ];

  const upcomingSessions = [
    {
      id: 1,
      program: 'Bollegraaf Baler Training',
      date: 'March 15-17, 2024',
      location: 'Norwalk, CT',
      instructor: 'Mike Johnson',
      seatsAvailable: 8
    },
    {
      id: 2,
      program: 'TOMRA Optical Sorting Technology',
      date: 'March 22-23, 2024',
      location: 'Norwalk, CT',
      instructor: 'Sarah Chen',
      seatsAvailable: 12
    },
    {
      id: 3,
      program: 'MRF Operations & Management',
      date: 'April 8-12, 2024',
      location: 'Norwalk, CT',
      instructor: 'Robert Martinez',
      seatsAvailable: 6
    },
    {
      id: 4,
      program: 'Equipment Maintenance Technician',
      date: 'April 15-18, 2024',
      location: 'Norwalk, CT',
      instructor: 'David Wilson',
      seatsAvailable: 10
    }
  ];

  const testimonials = [
    {
      quote: "Todd presented the information in an easy to understand format and was very thorough in his explanations. The small class size gave us the ability to dive deep into technical details of classifier builds, geometry, and sensors.",
      author: "Kevin Hanner",
      company: "Smurfit Westrock",
      rating: 5,
      program: "TOMRA Training School - October 2025"
    },
    {
      quote: "Todd is very knowledgeable and gave very good information. The troubleshooting tasks were very helpful and helped me broaden my optical knowledge. Todd & Victoria are very professional.",
      author: "Ronak Pored",
      company: "GFL",
      rating: 5,
      program: "TOMRA Training School - October 2025"
    },
    {
      quote: "The class was very good. Learned a lot. The instructor was very good. 10/10. Van Dyk is very friendly and the training was super exciting.",
      author: "Abdul Kabah Rahini",
      company: "GFL",
      rating: 5,
      program: "TOMRA Training School - October 2025"
    },
    {
      quote: "OUTSTANDING. Well versed and personable. Much more in-depth than other training programs. Very beneficial for knowledgeable maintenance staff which is key to efficient operations.",
      author: "An Kruan",
      company: "WM Germantown",
      rating: 5,
      program: "TOMRA Training School - October 2025"
    }
  ];

  return (
    <>
      <SEO data={seoData} />
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-vd-blue to-vd-blue-dark text-white py-16"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-vd-orange rounded-full mb-6"
              >
                <GraduationCap className="w-8 h-8 text-white" />
              </motion.div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Van Dyk University
              </h1>
              <p className="text-xl text-gray-200 mb-6">
                Professional Training Programs for Recycling Equipment Excellence
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center">
                  <Award className="w-4 h-4 mr-2" />
                  Industry-Recognized Certifications
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  Expert Instructors
                </div>
                <div className="flex items-center">
                  <Globe className="w-4 h-4 mr-2" />
                  Global Training Network
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation Tabs */}
        <div className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center">
              {[
                { id: 'overview', label: 'Overview', icon: BookOpen },
                { id: 'programs', label: 'Training Programs', icon: GraduationCap },
                { id: 'schedule', label: 'Upcoming Sessions', icon: Calendar },
                { id: 'testimonials', label: 'Success Stories', icon: Star }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-vd-orange text-vd-orange'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <tab.icon className="w-4 h-4 mr-2" />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-16">
          {activeTab === 'overview' && (
            <motion.div
              variants={staggerChildren}
              initial="initial"
              animate="animate"
              className="max-w-6xl mx-auto"
            >
              {/* Why Choose Van Dyk University */}
              <motion.section variants={fadeInUp} className="mb-16">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-vd-blue-dark mb-4">
                    Why Choose Van Dyk University?
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Our comprehensive training programs are designed by industry experts to provide hands-on experience with the latest recycling technology.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    {
                      icon: Award,
                      title: 'Industry Certifications',
                      description: 'Receive recognized certificates that enhance your professional credentials'
                    },
                    {
                      icon: Users,
                      title: 'Expert Instructors',
                      description: 'Learn from experienced professionals with decades of industry knowledge'
                    },
                    {
                      icon: Wrench,
                      title: 'Hands-On Training',
                      description: 'Practical experience with real equipment in our state-of-the-art facility'
                    },
                    {
                      icon: Globe,
                      title: 'Global Network',
                      description: 'Join a worldwide community of recycling professionals and experts'
                    }
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
                    >
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-vd-orange/10 rounded-lg mb-4">
                        <feature.icon className="w-6 h-6 text-vd-orange" />
                      </div>
                      <h3 className="text-lg font-semibold text-vd-blue-dark mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {feature.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* Training Facility */}
              <motion.section variants={fadeInUp} className="mb-16">
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <h2 className="text-2xl font-bold text-vd-blue-dark mb-4">
                        State-of-the-Art Training Facility
                      </h2>
                      <p className="text-gray-600 mb-6">
                        Our Norwalk, CT facility features the latest recycling equipment and technology, providing an ideal environment for hands-on learning and practical experience.
                      </p>
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                          <div>
                            <h4 className="font-semibold text-gray-900">Full-Scale Equipment</h4>
                            <p className="text-sm text-gray-600">Train on actual production equipment</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                          <div>
                            <h4 className="font-semibold text-gray-900">Modern Classroom</h4>
                            <p className="text-sm text-gray-600">Interactive learning environment with latest technology</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                          <div>
                            <h4 className="font-semibold text-gray-900">Safety First</h4>
                            <p className="text-sm text-gray-600">Comprehensive safety training and protocols</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative">
                      <img
                        src="/Images/training-facility.jpg"
                        alt="Van Dyk Training Facility"
                        className="w-full h-64 object-cover rounded-lg"
                        onError={(e) => {
                          e.currentTarget.src = '/Images/image-1749759453479.png';
                        }}
                      />
                    </div>
                  </div>
                </div>
              </motion.section>
            </motion.div>
          )}

          {activeTab === 'programs' && (
            <motion.div
              variants={staggerChildren}
              initial="initial"
              animate="animate"
              className="max-w-6xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-vd-blue-dark mb-4">
                  Training Programs
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Comprehensive training programs designed to enhance your skills and advance your career in recycling technology.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {trainingPrograms.map((program, index) => (
                  <motion.div
                    key={program.id}
                    variants={fadeInUp}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-vd-blue-dark mb-2">
                            {program.title}
                          </h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {program.duration}
                            </div>
                            <div className="flex items-center">
                              <Target className="w-4 h-4 mr-1" />
                              {program.level}
                            </div>
                          </div>
                        </div>
                        <div className="bg-vd-orange text-white px-3 py-1 rounded-full text-sm font-medium">
                          {program.certification.split(' ')[0]}
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4">
                        {program.description}
                      </p>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Topics Covered:</h4>
                        <ul className="space-y-1">
                          {program.topics.map((topic, topicIndex) => (
                            <li key={topicIndex} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-1">Prerequisites:</h4>
                        <p className="text-sm text-gray-600">{program.prerequisites}</p>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-1">Certification:</h4>
                        <p className="text-sm text-gray-600">{program.certification}</p>
                      </div>

                      <button className="w-full bg-vd-orange hover:bg-vd-orange-alt text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        View Schedule
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'schedule' && (
            <motion.div
              variants={staggerChildren}
              initial="initial"
              animate="animate"
              className="max-w-6xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-vd-blue-dark mb-4">
                  Upcoming Training Sessions
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Register for upcoming training sessions. Limited seats available for hands-on learning experience.
                </p>
              </div>

              <div className="space-y-6">
                {upcomingSessions.map((session, index) => (
                  <motion.div
                    key={session.id}
                    variants={fadeInUp}
                    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                  >
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
                      <div>
                        <h3 className="text-lg font-semibold text-vd-blue-dark mb-1">
                          {session.program}
                        </h3>
                        <div className="flex items-center text-sm text-gray-600">
                          <Calendar className="w-4 h-4 mr-2" />
                          {session.date}
                        </div>
                      </div>

                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        {session.location}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-600">
                          <div className="font-medium">Instructor:</div>
                          {session.instructor}
                        </div>
                        <div className="text-sm">
                          <div className="text-gray-600">Seats Available:</div>
                          <div className="font-semibold text-vd-orange">{session.seatsAvailable}</div>
                        </div>
                        <button className="bg-vd-orange hover:bg-vd-orange-alt text-white px-4 py-2 rounded transition-colors">
                          Register
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <div className="bg-vd-blue text-white rounded-xl p-8">
                  <h3 className="text-xl font-bold mb-4">Custom Training Programs</h3>
                  <p className="text-gray-200 mb-6">
                    Need specialized training for your team? We offer custom training programs tailored to your specific equipment and requirements.
                  </p>
                  <button className="bg-vd-orange hover:bg-vd-orange-alt text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center mx-auto">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Request Custom Training
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'testimonials' && (
            <motion.div
              variants={staggerChildren}
              initial="initial"
              animate="animate"
              className="max-w-6xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-vd-blue-dark mb-4">
                  Success Stories
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Hear from professionals who have advanced their careers through Van Dyk University training programs.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-gray-700 mb-4 italic">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="border-t pt-4">
                      <div className="font-semibold text-vd-blue-dark">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.company}
                      </div>
                      <div className="text-xs text-vd-orange font-medium mt-1">
                        {testimonial.program}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
};

export default VanDykUniversity;
