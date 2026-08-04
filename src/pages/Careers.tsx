import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileText, ExternalLink, ChevronLeft, ChevronRight,
  Heart, Shield, DollarSign, Clock, MapPin, Users, Award, Star,
  CheckCircle, ArrowRight, Globe, Zap
} from 'lucide-react';
import { careerJobRoles } from '../data/careers';

const Careers = () => {
  const [activeRoleId, setActiveRoleId] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slideshow images with facility information
  const slideImages = [
    { src: '/Images/careers-front-lobby.jpg', title: 'Front Lobby', description: 'Welcoming reception area' },
    { src: '/Images/careers-cafe-1.jpg', title: 'Employee Cafe', description: 'Comfortable dining and break space' },
    { src: '/Images/careers-gym.jpg', title: 'Fitness Center', description: 'Employee gym and wellness center' },
    { src: '/Images/careers-board-room.jpg', title: 'Board Room', description: 'Executive meeting and conference space' },
    { src: '/Images/careers-exterior-2.jpg', title: 'Building Exterior', description: 'Modern facility exterior view' },
    { src: '/Images/careers-living-wall-2.jpg', title: 'Living Wall', description: 'Green living wall for natural ambiance' },
    { src: '/Images/careers-lounge-1.jpg', title: 'Employee Lounge', description: 'Relaxing lounge area for employees' },
    { src: '/Images/1.jpg', title: 'Norwalk Headquarters', description: 'Our main office and administrative center' },
    { src: '/Images/2.jpg', title: 'Lobby', description: 'Welcoming reception area' },
    { src: '/Images/3.jpg', title: 'Dining Area', description: 'Employee dining and break space' },
    { src: '/Images/4.jpg', title: 'Meeting Room', description: 'Conference and collaboration space' },
    { src: '/Images/5.jpg', title: 'Gym', description: 'Employee fitness and wellness center' },
    { src: '/Images/8.jpg', title: 'Warehouse', description: 'Parts and equipment storage facility' },
    { src: '/Images/9.jpg', title: 'Rebuilt Shop', description: 'Equipment refurbishment and repair center' }
  ];

  // Auto-advance slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slideImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideImages.length) % slideImages.length);
  };

  const jobRoles = careerJobRoles;

  const benefits = [
    {
      icon: DollarSign,
      title: 'Competitive Compensation',
      description: 'Salaried position with paid overtime for travel and work beyond 8 hours per business day'
    },
    {
      icon: Heart,
      title: 'Comprehensive Health Coverage',
      description: 'Fully funded health insurance for you, spouse, and dependent children with company-funded HSA'
    },
    {
      icon: Shield,
      title: 'Life Insurance',
      description: 'Paid $250,000 life insurance policy for peace of mind'
    },
    {
      icon: Clock,
      title: 'Generous Time Off',
      description: '20 paid vacation days and 8 paid holidays annually'
    },
    {
      icon: DollarSign,
      title: 'Retirement Planning',
      description: 'Profit-sharing pension plan (7-12% of salary) plus additional 401K options'
    },
    {
      icon: Globe,
      title: 'Global Opportunities',
      description: 'Work with international teams across North America, Canada, and Mexico'
    }
  ];

  const companyValues = [
    {
      icon: Users,
      title: 'Family-Owned Culture',
      description: 'Experience the warmth and stability of a family-owned business with true family feel'
    },
    {
      icon: Zap,
      title: 'Innovation Freedom',
      description: 'Develop your creativity within our stable organization with freedom and latitude'
    },
    {
      icon: Award,
      title: 'Industry Leadership',
      description: 'Join the world\'s leading provider of recycling sorting systems since 1984'
    },
    {
      icon: Star,
      title: 'Personal Development',
      description: 'Plenty of opportunities for growth in an internationally active organization'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Slideshow */}
      <section className="relative text-white py-20 overflow-hidden -mt-20 pt-20">
        {/* Slideshow Background */}
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <img
                src={slideImages[currentSlide].src}
                alt={slideImages[currentSlide].title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = '/Images/image-1749759453479.png';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40"></div>
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-20"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-20"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
            {slideImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-vd-orange' : 'bg-white/70 hover:bg-white/90'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Experience the Van Dyk difference. {slideImages[currentSlide].title} - {slideImages[currentSlide].description}
            </p>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-block"
            >
              <button
                onClick={() => {
                  document.getElementById('careers-content')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
                className="bg-vd-orange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-vd-orange-alt transition-colors inline-flex items-center"
              >
                Explore Opportunities
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div id="careers-content">
        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-vd-blue mb-4">Why Work With Us?</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  We offer comprehensive benefits and a supportive work environment that values your growth and well-being.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="bg-vd-orange/10 p-4 rounded-xl w-fit mb-6 group-hover:bg-vd-orange/20 transition-colors">
                      <benefit.icon className="h-8 w-8 text-vd-orange" />
                    </div>
                    <h3 className="text-xl font-bold text-vd-blue mb-4">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-6xl mx-auto"
            >
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-vd-blue mb-4">Open Positions</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Join our team and help shape the future of recycling technology. 
                  <span className="text-vd-orange font-semibold">Multiple opportunities available across North America.</span>
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {jobRoles.map((role, index) => (
                  <motion.div
                    key={role.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className={`${role.backgroundClass} ${role.borderClass} border-2 rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 group relative`}
                  >
                    {/* Gradient Header */}
                    <div className={`bg-gradient-to-r ${role.gradient} p-8 text-white relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/10"></div>
                      <div className="relative z-10">
                        <div className="flex items-center mb-4">
                          <div className="bg-white/20 p-3 rounded-xl mr-4 group-hover:bg-white/30 transition-colors">
                            <role.icon className="h-8 w-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold">{role.title}</h3>
                            <div className="flex items-center text-white/80 mt-1">
                              <MapPin className="w-4 h-4 mr-1" />
                              <span className="text-sm">{role.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-8">
                      {/* Job Details */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                          <div className="text-sm text-gray-500 mb-1">Type</div>
                          <div className="font-bold text-vd-blue">{role.roleType}</div>
                        </div>
                        <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                          <div className="text-sm text-gray-500 mb-1">Experience</div>
                          <div className="font-bold text-vd-blue">{role.experienceLevel}</div>
                        </div>
                      </div>

                      <div className={`bg-gradient-to-r ${role.gradient}/10 border ${role.borderClass} rounded-xl p-4 mb-6`}>
                        <div className={`flex items-center text-sm font-semibold mb-2 ${role.accentTextClass}`}>
                          <Globe className="w-4 h-4 mr-2" />
                          Travel Requirements
                        </div>
                        <p className="text-sm text-gray-700">{role.travelSummary}</p>
                      </div>

                      <p className="text-gray-700 leading-relaxed mb-8">
                        {role.shortDescription}
                      </p>

                      <div className="space-y-3">
                        <button
                          onClick={() => setActiveRoleId(activeRoleId === role.id ? null : role.id)}
                          className={`w-full bg-gradient-to-r ${role.gradient} hover:opacity-90 text-white font-bold px-6 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center`}
                        >
                          <ArrowRight className="h-5 w-5 mr-2" />
                          View Details
                        </button>

                        {activeRoleId === role.id && role.highlights.length ? (
                          <div className="bg-white/80 rounded-xl p-4 border border-gray-100">
                            <h4 className="text-sm font-semibold text-vd-blue mb-3">Role Highlights</h4>
                            <ul className="space-y-2">
                              {role.highlights.map(highlight => (
                                <li key={highlight} className="flex items-start text-sm text-gray-700">
                                  <CheckCircle className="w-4 h-4 text-vd-orange mr-2 mt-0.5" />
                                  <span>{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ) : null}
                        
                        <a
                          href="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=7YKQMSwus0K6eGyqSyijxbLJzBecdydNjMz8TRHTYd1UQVNMVFpNMFFGMFpGNVRFMEdVWlZNOVFIQi4u&embed=true"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-vd-blue hover:bg-vd-blue-dark text-white font-bold px-6 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center"
                        >
                          <FileText className="h-5 w-5 mr-2" />
                          Apply Now
                          <ExternalLink className="h-4 w-4 ml-2" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Company Values Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-vd-blue mb-4">Our Values</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Discover what makes Van Dyk Recycling Solutions a unique place to work and grow your career.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {companyValues.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 group text-center"
                  >
                    <div className="bg-vd-orange/10 p-4 rounded-xl w-fit mx-auto mb-6 group-hover:bg-vd-orange/20 transition-colors">
                      <value.icon className="h-8 w-8 text-vd-orange" />
                    </div>
                    <h3 className="text-xl font-bold text-vd-blue mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-vd-blue text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-bold mb-6">Ready to Join Our Team?</h2>
              <p className="text-xl mb-8 text-blue-100">
                Take the next step in your career and help us build a more sustainable future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=7YKQMSwus0K6eGyqSyijxbLJzBecdydNjMz8TRHTYd1UQVNMVFpNMFFGMFpGNVRFMEdVWlZNOVFIQi4u&embed=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-vd-orange hover:bg-vd-orange-alt text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
                >
                  Apply Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </motion.a>
                <motion.button
                  onClick={() => setActiveRoleId(null)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white hover:bg-white hover:text-vd-blue px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
                >
                  Learn More About Us
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Careers;