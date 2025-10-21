import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, Wrench, User, FileText, ExternalLink, ChevronLeft, ChevronRight,
  Heart, Shield, DollarSign, Clock, MapPin, Users, Award, Star,
  CheckCircle, ArrowRight, Globe, Zap, Coffee, Dumbbell, Mail, X
} from 'lucide-react';
import { IMAGE_ASSIGNMENTS } from '../config/images';

const Careers = () => {
  const [activeTab, setActiveTab] = useState('whoIsVanDyk');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedJob, setSelectedJob] = useState(null);

  // Slideshow images with facility information
  const slideImages = [
    { src: IMAGE_ASSIGNMENTS.careers.slideshow[0], title: 'Front Lobby', description: 'Welcoming reception area' },
    { src: IMAGE_ASSIGNMENTS.careers.slideshow[1], title: 'Employee Cafe', description: 'Comfortable dining and break space' },
    { src: IMAGE_ASSIGNMENTS.careers.slideshow[2], title: 'Fitness Center', description: 'Employee gym and wellness center' },
    { src: IMAGE_ASSIGNMENTS.careers.slideshow[3], title: 'Board Room', description: 'Executive meeting and conference space' },
    { src: IMAGE_ASSIGNMENTS.careers.slideshow[4], title: 'Building Exterior', description: 'Modern facility exterior view' },
    { src: IMAGE_ASSIGNMENTS.careers.slideshow[5], title: 'Living Wall', description: 'Green living wall for natural ambiance' },
    { src: IMAGE_ASSIGNMENTS.careers.slideshow[6], title: 'Employee Lounge', description: 'Relaxing lounge area for employees' },
    { src: IMAGE_ASSIGNMENTS.careers.slideshow[7], title: 'Norwalk Headquarters', description: 'Our main office and administrative center' },
    { src: IMAGE_ASSIGNMENTS.careers.slideshow[8], title: 'Rebuilt Shop', description: 'Equipment refurbishment and repair center' }
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

  const jobRoles = [
    { 
      id: 'fieldService', 
      name: 'Field Service Technician', 
      icon: Wrench,
      location: 'North America',
      type: 'Full-time',
      experience: '2+ years',
      travel: '90% travel required',
      color: 'blue',
      gradient: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    { 
      id: 'mechanicalInstaller', 
      name: 'Mechanical Installer', 
      icon: Briefcase,
      location: 'North America',
      type: 'Full-time',
      experience: '1+ years',
      travel: '90% travel required',
      color: 'orange',
      gradient: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200'
    },
    { 
      id: 'interns', 
      name: 'Internships', 
      icon: User,
      location: 'Norwalk, CT',
      type: 'Internship',
      experience: 'Student/Recent Grad',
      travel: 'Minimal travel',
      color: 'green',
      gradient: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
  ];

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
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Team
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100">
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
                    className={`${role.bgColor} ${role.borderColor} border-2 rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 group relative`}
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
                            <h3 className="text-2xl font-bold">{role.name}</h3>
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
                          <div className="font-bold text-vd-blue">{role.type}</div>
                        </div>
                        <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                          <div className="text-sm text-gray-500 mb-1">Experience</div>
                          <div className="font-bold text-vd-blue">{role.experience}</div>
                        </div>
                      </div>

                      <div className={`bg-gradient-to-r ${role.gradient}/10 border border-${role.color}-200 rounded-xl p-4 mb-6`}>
                        <div className={`flex items-center text-sm font-semibold mb-2 text-${role.color}-600`}>
                          <Globe className="w-4 h-4 mr-2" />
                          Travel Requirements
                        </div>
                        <p className="text-sm text-gray-700">{role.travel}</p>
                      </div>
                    
                      <p className="text-gray-700 leading-relaxed mb-8">
                        {role.id === 'fieldService' && 
                          "Join our team as a Field Service Technician and work with cutting-edge recycling equipment across North America. Travel to customer sites, install and maintain machinery, and provide expert technical support."
                        }
                        {role.id === 'mechanicalInstaller' && 
                          "Become a Mechanical Installer and help build the future of recycling. Work with conveyors, screens, balers, and optical sorters while gaining hands-on experience with industry-leading technology."
                        }
                        {role.id === 'interns' && 
                          "Start your career with our internship program. Gain valuable hands-on experience in electrical, mechanical, and hydraulic systems while working alongside industry experts."
                        }
                      </p>

                      <div className="space-y-3">
                        <button
                          onClick={() => setSelectedJob(role)}
                          className={`w-full bg-gradient-to-r ${role.gradient} hover:opacity-90 text-white font-bold px-6 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center`}
                        >
                          <ArrowRight className="h-5 w-5 mr-2" />
                          View Details
                        </button>
                        
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
                  onClick={() => setActiveTab('whoIsVanDyk')}
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

      {/* Job Details Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Modal Header */}
            <div className={`bg-gradient-to-r ${selectedJob.gradient} p-6 text-white relative`}>
              <button
                onClick={() => setSelectedJob(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
              <div className="flex items-center">
                <div className="bg-white/20 p-3 rounded-xl mr-4">
                  <selectedJob.icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{selectedJob.name}</h2>
                  <div className="flex items-center text-white/80 mt-1">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{selectedJob.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Job Details Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="text-sm text-gray-500 mb-1">Type</div>
                  <div className="font-bold text-vd-blue">{selectedJob.type}</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="text-sm text-gray-500 mb-1">Experience</div>
                  <div className="font-bold text-vd-blue">{selectedJob.experience}</div>
                </div>
              </div>

              {/* Travel Requirements */}
              <div className={`bg-gradient-to-r ${selectedJob.gradient}/10 border border-${selectedJob.color}-200 rounded-xl p-4 mb-6`}>
                <div className={`flex items-center text-sm font-semibold mb-2 text-${selectedJob.color}-600`}>
                  <Globe className="w-4 h-4 mr-2" />
                  Travel Requirements
                </div>
                <p className="text-sm text-gray-700">{selectedJob.travel}</p>
              </div>

              {/* Job Description */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-vd-blue mb-3">Job Description</h3>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  {selectedJob.id === 'fieldService' && (
                    <>
                      <p>
                        Van Dyk Recycling Solutions has several vacancies across the United States, in Canada and in Mexico. 
                        Van Dyk is a rapidly growing company and we are constantly seeking additional service technicians 
                        for the installation and service of large industrial recycling equipment installations.
                      </p>
                      <div>
                        <h4 className="font-semibold text-vd-blue mb-2">The Role</h4>
                        <p>
                          You will be responsible for handling turn-key installation, service and maintenance of all machinery 
                          sold by Van Dyk. You will troubleshoot, repair and resolve any issues with the associated equipment. 
                          Installations and service can be electrical, hydraulic and/or mechanical in nature. You will maintain 
                          contact with the customer, as it pertains to the installation, training, or service of the customer's machines. 
                          Regularly you will have to perform preventive maintenance inspections on machines. Part of the job is also 
                          to train the customer on the safe operating procedures and standard preventative maintenance of all equipment.
                        </p>
                        <p className="mt-2">
                          <strong>90% of jobs will require you to travel;</strong> 60% of that is within a designated territory (near your home). 
                          Deployment in Canada, Mexico and occasionally elsewhere in Central America is also possible.
                        </p>
                      </div>
                    </>
                  )}
                  {selectedJob.id === 'mechanicalInstaller' && (
                    <>
                      <p>
                        Van Dyk Recycling Solutions has several vacancies across the United States, in Canada and in Mexico. 
                        Van Dyk is a family-owned, rapidly growing company, and we are constantly seeking additional mechanical 
                        installers for the installation of large industrial recycling equipment.
                      </p>
                      <div>
                        <h4 className="font-semibold text-vd-blue mb-2">The Role</h4>
                        <p>
                          You will be responsible for mechanical installation of all machinery sold by Van Dyk. Installations may be 
                          a single piece of equipment or a complete sorting system. Systems consist of conveyors, screens, balers and 
                          optical sorters. You will receive training in the form of hands-on experiential learning, during which you 
                          will travel to sites and shadow veteran mechanics on installations, working alongside them. You will maintain 
                          contact with the customer as it pertains to the installation.
                        </p>
                        <p className="mt-2">
                          <strong>90% of jobs will require you to travel</strong> within the United States. Deployment in Canada, 
                          Mexico and other locations abroad is also possible.
                        </p>
                      </div>
                    </>
                  )}
                  {selectedJob.id === 'interns' && (
                    <p>
                      Start your career with our internship program. Gain valuable hands-on experience in electrical, mechanical, 
                      and hydraulic systems while working alongside industry experts.
                    </p>
                  )}
                </div>
              </div>

              {/* Requirements */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-vd-blue mb-3">Experience Needed</h3>
                <ul className="space-y-2 text-gray-700">
                  {selectedJob.id === 'fieldService' && (
                    <>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Knowledge of electrical, mechanical, and/or hydraulic systems and schematics</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Ability to read electrical and hydraulic diagrams, connection drawings and mechanical drawings</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Comfortable working with 480 volt electrical systems</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Experience working with relevant large machinery is beneficial</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Troubleshooting experience is extremely sought after – being able to diagnose issues on site</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Solid verbal communication skills in English (other languages such as Spanish, French, Dutch, German, or Polish are an advantage)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Excellent customer relations skills and customer focus</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Willingness to work outside normal working hours and spend nights on location if necessary</span>
                      </li>
                    </>
                  )}
                  {selectedJob.id === 'mechanicalInstaller' && (
                    <>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Experience erecting heavy equipment</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Experience working with related large machinery is a plus</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Strong work ethic and willingness to heed advice are a must</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Ability to work diligently in an unsupervised setting</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Solid verbal communication skills in English (other languages such as Spanish, French, Dutch, German, or Polish are an advantage)</span>
                      </li>
                    </>
                  )}
                  {selectedJob.id === 'interns' && (
                    <>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Currently enrolled in or recent graduate of engineering program</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Interest in recycling and environmental technology</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Strong analytical and problem-solving skills</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Eagerness to learn and work with industry experts</span>
                      </li>
                    </>
                  )}
                </ul>
              </div>

              {/* Benefits */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-vd-blue mb-3">Benefits</h3>
                <div className="text-gray-700 leading-relaxed space-y-3">
                  {(selectedJob.id === 'fieldService' || selectedJob.id === 'mechanicalInstaller') && (
                    <>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Salaried position with paid overtime (travel and work) for anything beyond 8 hours per business day</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Work and travel on Saturday and Sunday are considered overtime</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>20 paid vacation days and 8 paid holidays</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Paid health insurance for you, your spouse, and dependent children</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Paid dental insurance for you, your spouse, and dependent children</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Paid $250,000.00 life insurance policy</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Profit-sharing pension plan as well as an additional 401K plan offer</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>A varied and challenging position with a high degree of independence within an internationally active organization with strong growth ambitions</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Plenty of opportunities for personal development</span>
                      </div>
                      {selectedJob.id === 'mechanicalInstaller' && (
                        <div className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Fully funded health insurance including company-funded HSA to fully cover deductibles</span>
                        </div>
                      )}
                      {selectedJob.id === 'mechanicalInstaller' && (
                        <div className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Profit-sharing pension plan where approx. 7-12% of your salary is put into an account for your future pension</span>
                        </div>
                      )}
                    </>
                  )}
                  {selectedJob.id === 'interns' && (
                    <>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Hands-on experience with industry-leading recycling equipment</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Mentorship from experienced industry professionals</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Exposure to electrical, mechanical, and hydraulic systems</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Potential for full-time employment upon successful completion</span>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <a
                  href="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=7YKQMSwus0K6eGyqSyijxbLJzBecdydNjMz8TRHTYd1UQVNMVFpNMFFGMFpGNVRFMEdVWlZNOVFIQi4u&embed=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-vd-blue hover:bg-vd-blue-dark text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center"
                >
                  <FileText className="h-5 w-5 mr-2" />
                  Apply Now
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 font-semibold rounded-xl transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Careers;