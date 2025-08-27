import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { 
  ArrowRight, Briefcase, Wrench, User, MapPin, Phone, Mail, Clock, 
  Send, Building2, MessageSquare, ChevronLeft, ChevronRight, X,
  FileText, Upload, CheckCircle, DollarSign, Calendar, Globe,
  Award, Target, Heart, Zap
} from 'lucide-react';

const AboutCareersContact = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showApplicationForm, setShowApplicationForm] = useState<string | null>(null);
  const [expandedJob, setExpandedJob] = useState<string | null>(null);
  const location = useLocation();

  // Determine active tab based on URL path
  const getActiveTab = () => {
    if (location.pathname === '/about') return 'about';
    if (location.pathname === '/careers') return 'careers';
    if (location.pathname === '/contact') return 'contact';
    return 'contact'; // default
  };

  const activeTab = getActiveTab();

  // Slideshow images (1.jpg to 9.jpg)
  const slideImages = Array.from({ length: 9 }, (_, i) => `/Images/${i + 1}.jpg`);

  // Auto-advance slideshow - pause when modals are open
  useEffect(() => {
    if (showApplicationForm || expandedJob) {
      return; // Don't start timer when modals are open
    }
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slideImages.length, showApplicationForm, expandedJob]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideImages.length) % slideImages.length);
  };

  const companyCards = [
    {
      id: 'whoIsVanDyk',
      title: 'Who is VAN DYK?',
      content: 'Van Dyk Recycling Solutions is the leading provider of recycling sorting systems in the world. Van Dyk helps waste and recycling companies maximize their profits by supplying state of the art sorting systems and equipment to process recycled materials.',
      image: '/Images/image-1749759459073.png',
      features: ['World Leader', 'Since 1984', 'Global Reach', 'Innovation Focus']
    },
    {
      id: 'whatWeDo',
      title: 'What We Do',
      content: 'We partner with our clients to improve their business performance through more reliable operations and innovative strategies that reduce their labor costs, mitigate risk of downtime, increase the quality of their end products, ensure safety of personnel, and optimize costs associated with operations, maintenance, and total asset spend.',
      image: '/Images/image-1749759502636.png',
      features: ['Performance Improvement', 'Cost Reduction', 'Quality Enhancement', 'Safety Focus']
    },
    {
      id: 'howWereDifferent',
      title: 'How We\'re Different',
      content: 'The innovative people of Van Dyk Recycling Solutions are the lifeline of the organization, filling the hallways with contagious energy and enthusiasm. Our team has the freedom and latitude to develop their own creativity within our stable organization. Van Dyk has a true family feel.',
      image: '/Images/image-1749759495211.png',
      features: ['Family Owned', 'Employee Freedom', 'Innovation Culture', 'Full Benefits']
    }
  ];

  const jobRoles = [
    {
      id: 'fieldService',
      title: 'Field Service Technician',
      icon: Wrench,
      shortDescription: 'Turn-key installation, service and maintenance of recycling machinery across North America',
      fullDescription: 'Van Dyk Recycling Solutions has several vacancies across the United States, in Canada and in Mexico. Van Dyk is a rapidly growing company and we are constantly seeking additional service technicians for the installation and service of large industrial recycling equipment installations.',
      roleDetails: [
        'Handle turn-key installation, service and maintenance of all machinery sold by Van Dyk',
        'Troubleshoot, repair and resolve issues with equipment (electrical, hydraulic, mechanical)',
        'Maintain customer contact for installation, training, or service',
        'Perform preventive maintenance inspections on machines',
        'Train customers on safe operating procedures and preventative maintenance'
      ],
      experienceNeeded: [
        'Knowledge of electrical, mechanical, and/or hydraulic systems and schematics',
        'Ability to read electrical and hydraulic diagrams, connection drawings and mechanical drawings',
        'Comfort working with 480 volt electrical systems',
        'Large machinery troubleshooting experience (highly valued)',
        'Solid verbal communication skills in English',
        'Excellent customer relations skills - you are our company ambassador',
        'Willingness to work outside normal hours and spend nights on location'
      ],
      benefits: [
        'Salaried position with paid overtime for work beyond 8 hours per business day',
        'Weekend work and travel considered overtime',
        '20 paid vacation days and 8 paid holidays',
        'Paid health insurance for you, spouse, and dependent children',
        'Paid dental insurance for family',
        'Paid $250,000 life insurance policy',
        'Profit-sharing pension plan + 401K plan',
        'High degree of independence in internationally active organization',
        'Plenty of opportunities for personal development'
      ],
      travel: '90% of jobs require travel; 60% within designated territory near your home',
      locations: 'United States, Canada, Mexico, Central America',
      contact: 'achirca@vdrs.com',
      contactName: 'Alin Chirca',
      image: '/Images/image-1749759487003.png',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'mechanicalInstaller',
      title: 'Mechanical Installer',
      icon: Briefcase,
      shortDescription: 'Mechanical installation of complete recycling systems and equipment',
      fullDescription: 'Van Dyk Recycling Solutions has several vacancies across the United States, in Canada and in Mexico. Van Dyk is a family-owned, rapidly growing company, and we are constantly seeking additional mechanical installers for the installation of large industrial recycling equipment.',
      roleDetails: [
        'Responsible for mechanical installation of all machinery sold by Van Dyk',
        'Install single pieces of equipment or complete sorting systems',
        'Work with conveyors, screens, balers and optical sorters',
        'Receive hands-on experiential learning training',
        'Travel to sites and shadow veteran mechanics on installations',
        'Maintain customer contact during installation process'
      ],
      experienceNeeded: [
        'Experience erecting heavy equipment',
        'Experience working with related large machinery (preferred)',
        'Strong work ethic and willingness to heed advice',
        'Ability to work diligently in unsupervised settings',
        'Solid verbal communication skills in English',
        'Additional languages (Spanish, French, Dutch, German, Polish) are an advantage'
      ],
      benefits: [
        'Salaried position with paid overtime for work beyond 8 hours per business day',
        'Weekend work and travel considered overtime',
        '20 paid vacation days and 8 paid holidays',
        'Fully funded health insurance for you, spouse, and dependent children',
        'Company-funded HSA to fully cover deductibles',
        'Paid dental insurance for family',
        'Paid $250,000 life insurance policy',
        'Profit-sharing pension plan (7-12% of salary)',
        'Additional 401K plan offer',
        'High degree of independence with strong growth opportunities'
      ],
      travel: '90% of jobs require travel within the United States',
      locations: 'United States, Canada, Mexico',
      contact: 'achirca@vdrs.com',
      contactName: 'Alin Chirca',
      image: '/Images/image-1749759490576.png',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'internships',
      title: 'Internships',
      icon: User,
      shortDescription: 'Learn data engineering, drawing, and sorting machine operations in Norwalk',
      fullDescription: 'Van Dyk Recycling Solutions offers challenging internship opportunities in our Norwalk, CT headquarters focusing on data engineering, technical drawing, and sorting machine operations.',
      roleDetails: [
        'Work on data engineering projects for recycling analytics',
        'Learn technical drawing and CAD design for sorting systems',
        'Understand sorting machine operations and optimization',
        'Collaborate with engineering teams on real projects',
        'Gain hands-on experience with recycling equipment',
        'Participate in equipment testing and validation processes'
      ],
      experienceNeeded: [
        'Students or recent graduates in engineering, computer science, or related fields',
        'Interest in data analysis and engineering systems',
        'Basic knowledge of technical drawing or CAD (preferred)',
        'Eagerness to learn and strong work ethic',
        'Ability to work independently and as part of a team',
        'Good communication skills in English'
      ],
      benefits: [
        'Valuable industry experience in recycling technology',
        'Mentorship from industry experts',
        'Professional network building',
        'Potential for future full-time employment',
        'Exposure to cutting-edge recycling technology',
        'Skills development in data engineering and technical drawing'
      ],
      travel: 'Based in Norwalk, CT - no travel required',
      locations: 'Norwalk, Connecticut headquarters',
      contact: 'info@vdrs.com',
      contactName: 'Van Dyk HR Team',
      image: '/Images/image-1749759499434.png',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const JobDetailModal = ({ job, onClose, onApply }: { job: any, onClose: () => void, onApply: () => void }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with gradient */}
        <div className={`bg-gradient-to-r ${job.color} text-white p-6 rounded-t-2xl`}>
          <div className="flex justify-between items-start">
            <div className="flex items-center space-x-4">
              <job.icon className="w-12 h-12 text-white" />
              <div>
                <h2 className="text-3xl font-bold">{job.title}</h2>
                <p className="text-white/90">{job.shortDescription}</p>
              </div>
            </div>
            <button onClick={onClose} className="text-white/80 hover:text-white">
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
        
        <div className="p-6">
          {/* Overview */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-vd-blue mb-4 flex items-center">
              <Target className="w-6 h-6 mr-2 text-vd-orange" />
              Position Overview
            </h3>
            <p className="text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-lg">
              {job.fullDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* The Role */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-vd-blue mb-4 flex items-center">
                <Briefcase className="w-5 h-5 mr-2 text-vd-orange" />
                The Role
              </h3>
              <ul className="space-y-3">
                {job.roleDetails.map((detail: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-vd-green mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{detail}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 grid grid-cols-1 gap-4">
                <div className="flex items-center bg-blue-50 p-3 rounded-lg">
                  <Globe className="w-5 h-5 text-blue-600 mr-3" />
                  <div>
                    <span className="font-medium text-blue-800">Travel:</span>
                    <span className="text-blue-700 ml-2">{job.travel}</span>
                  </div>
                </div>
                <div className="flex items-center bg-green-50 p-3 rounded-lg">
                  <MapPin className="w-5 h-5 text-green-600 mr-3" />
                  <div>
                    <span className="font-medium text-green-800">Locations:</span>
                    <span className="text-green-700 ml-2">{job.locations}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Needed */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-vd-blue mb-4 flex items-center">
                <Award className="w-5 h-5 mr-2 text-vd-orange" />
                Experience Needed
              </h3>
              <ul className="space-y-3">
                {job.experienceNeeded.map((exp: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <Zap className="w-4 h-4 text-vd-orange mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{exp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-gradient-to-br from-vd-blue to-vd-blue-dark text-white rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Heart className="w-5 h-5 mr-2 text-vd-orange" />
              Benefits & Compensation
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {job.benefits.map((benefit: string, index: number) => (
                <div key={index} className="flex items-start">
                  <DollarSign className="w-4 h-4 text-vd-orange mt-1 mr-3 flex-shrink-0" />
                  <span className="text-white text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Apply Section */}
          <div className="bg-vd-orange/5 border border-vd-orange/20 rounded-xl p-6 text-center">
            <h3 className="text-xl font-semibold text-vd-blue mb-4">Ready to Join Our Team?</h3>
            <p className="text-gray-600 mb-6">
              Submit your application through our online portal.
            </p>
            <div className="flex justify-center">
              <button
                onClick={onApply}
                className="bg-vd-orange hover:bg-vd-orange-alt text-white font-semibold py-3 px-8 rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Apply Now</span>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  const ApplicationForm = ({ jobRole, onClose }: { jobRole: any, onClose: () => void }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`bg-gradient-to-r ${jobRole.color} text-white p-6 rounded-t-2xl`}>
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Application for {jobRole.title}</h2>
            <button onClick={onClose} className="text-white/80 hover:text-white">
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
        
        <div className="p-6 h-[calc(90vh-120px)] overflow-hidden">
          <div className="mb-4 text-center">
            <p className="text-gray-600">
              Please complete the application form below for the {jobRole.title} position.
            </p>
          </div>
          
          <div className="w-full h-full rounded-lg overflow-hidden border border-gray-200">
            <iframe 
              src="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=7YKQMSwus0K6eGyqSyijxbLJzBecdydNjMz8TRHTYd1UQVNMVFpNMFFGMFpGNVRFMEdVWlZNOVFIQi4u&embed=true" 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              marginWidth="0" 
              marginHeight="0" 
              style={{ border: 'none', maxWidth: '100%', maxHeight: '100%' }}
              allow="fullscreen; web-share"
              title={`Application form for ${jobRole.title}`}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Image Slideshow Banner */}
      <div className="relative h-96 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <img
              src={slideImages[currentSlide]}
              alt={`Van Dyk facility ${currentSlide + 1}`}
              className="w-full h-full object-cover object-center"
              onError={(e) => {
                e.currentTarget.src = '/Images/image-1749759459073.png';
              }}
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Slideshow Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white/90 p-3 rounded-full backdrop-blur-sm transition-colors shadow-lg"
        >
          <ChevronLeft className="w-6 h-6 text-vd-blue" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white/90 p-3 rounded-full backdrop-blur-sm transition-colors shadow-lg"
        >
          <ChevronRight className="w-6 h-6 text-vd-blue" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slideImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors shadow-sm ${
                index === currentSlide ? 'bg-vd-orange' : 'bg-white/70 hover:bg-white/90'
              }`}
            />
          ))}
        </div>

        {/* Page Title Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white bg-vd-blue-dark/80 px-8 py-6 rounded-2xl backdrop-blur-sm">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {activeTab === 'about' && 'Van Dyk Recycling Solutions'}
              {activeTab === 'careers' && 'Join Our Team'}
              {activeTab === 'contact' && 'Get in Touch'}
            </h1>
            <p className="text-xl text-gray-100">
              {activeTab === 'about' && 'Leading the Industry Since 1984'}
              {activeTab === 'careers' && 'Drive innovation in recycling solutions'}
              {activeTab === 'contact' && 'Have questions? Our team is here to help'}
            </p>
          </div>
        </div>
      </div>

      {/* Van Dyk Recycling Solutions Section */}
      <AnimatePresence mode="wait">
        {activeTab === 'about' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="container mx-auto px-4 py-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-vd-blue mb-4">About Our Company</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Discover who we are, what we do, and what makes us different
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {companyCards.map((card, index) => (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow group h-full flex flex-col"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        width="400"
                        height="192"
                        onError={(e) => {
                          e.currentTarget.src = '/Images/image-1749759453479.png';
                          e.currentTarget.alt = 'Image not available';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-vd-blue-dark/80 to-transparent" />
                    </div>
                    
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-semibold text-vd-blue mb-3">{card.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed flex-grow">{card.content}</p>
                      
                      <div className="grid grid-cols-2 gap-2">
                        {card.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-500">
                            <span className="w-2 h-2 bg-vd-orange rounded-full mr-2"></span>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Careers Section */}
      <AnimatePresence mode="wait">
        {activeTab === 'careers' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="container mx-auto px-4 py-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-vd-blue mb-4">Career Opportunities</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Join our team and help drive innovation in recycling solutions
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {jobRoles.map((job, index) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 group h-full flex flex-col transform hover:-translate-y-2"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={job.image}
                        alt={job.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        width="400"
                        height="192"
                        onError={(e) => {
                          e.currentTarget.src = '/Images/image-1749759453479.png';
                          e.currentTarget.alt = 'Image not available';
                        }}
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${job.color} opacity-80`} />
                      <div className="absolute top-4 left-4">
                        <job.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                          {job.id === 'internships' ? 'Entry Level' : 'Experienced'}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-semibold text-vd-blue mb-2">{job.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed text-sm flex-grow">{job.shortDescription}</p>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center text-sm">
                          <MapPin className="w-4 h-4 text-vd-orange mr-2" />
                          <span className="text-gray-600">{job.locations}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Globe className="w-4 h-4 text-vd-blue mr-2" />
                          <span className="text-gray-600">{job.travel}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-col gap-3 mt-auto">
                        <button
                          onClick={() => setExpandedJob(job.id)}
                          className="bg-vd-blue hover:bg-vd-blue-dark text-white font-semibold py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
                        >
                          <FileText className="w-4 h-4" />
                          <span>View Details</span>
                        </button>
                        <button
                          onClick={() => setShowApplicationForm(job.id)}
                          className="bg-vd-orange hover:bg-vd-orange-alt text-white font-semibold py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
                        >
                          <User className="w-4 h-4" />
                          <span>I'm Interested</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Section */}
      <AnimatePresence mode="wait">
        {activeTab === 'contact' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="container mx-auto px-4 py-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Information */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-8"
                >
                  <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                    <h2 className="text-2xl font-bold text-vd-blue mb-6">Contact Information</h2>
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-vd-blue/10 p-3 rounded-lg">
                          <MapPin className="w-6 h-6 text-vd-orange" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">Our Location</h3>
                          <p className="text-gray-600">
                            360 Dr. Martin Luther King Jr. Drive<br />
                            Norwalk, CT 06854<br />
                            United States
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-vd-blue/10 p-3 rounded-lg">
                          <Phone className="w-6 h-6 text-vd-orange" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">Phone Numbers</h3>
                          <p className="text-gray-600">
                            Main: <a href="tel:+12039671100" className="text-vd-orange hover:text-vd-orange-alt">+1 (203) 967-1100</a><br />
                            Support: <a href="tel:+12039671100" className="text-vd-orange hover:text-vd-orange-alt">+1 (203) 967-1100</a>
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-vd-blue/10 p-3 rounded-lg">
                          <Mail className="w-6 h-6 text-vd-orange" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">Email Addresses</h3>
                          <p className="text-gray-600">
                            General: <a href="mailto:info@vdrs.com" className="text-vd-orange hover:text-vd-orange-alt">info@vdrs.com</a><br />
                            Support: <a href="mailto:support@vdrs.com" className="text-vd-orange hover:text-vd-orange-alt">support@vdrs.com</a><br />
                            Shipping: <a href="mailto:shipping@vdrs.com" className="text-vd-orange hover:text-vd-orange-alt">shipping@vdrs.com</a><br />
                            Service: <a href="mailto:service@vdrs.com" className="text-vd-orange hover:text-vd-orange-alt">service@vdrs.com</a>
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-vd-blue/10 p-3 rounded-lg">
                          <Clock className="w-6 h-6 text-vd-orange" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                          <p className="text-gray-600">
                            Monday - Friday: 8:00 AM - 6:00 PM EST<br />
                            Saturday: 9:00 AM - 1:00 PM EST<br />
                            Sunday: Closed
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
                >
                  <h2 className="text-2xl font-bold text-vd-blue mb-6">Send Us a Message</h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <User className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vd-orange focus:border-vd-orange"
                            placeholder="John Doe"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                          Company Name
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Building2 className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vd-orange focus:border-vd-orange"
                            placeholder="Your Company"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Mail className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vd-orange focus:border-vd-orange"
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Phone className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vd-orange focus:border-vd-orange"
                            placeholder="+1 (555) 000-0000"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <div className="relative">
                        <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                          <MessageSquare className="h-5 w-5 text-gray-400" />
                        </div>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vd-orange focus:border-vd-orange"
                          placeholder="How can we help you?"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-vd-orange hover:bg-vd-orange-alt text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                    >
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </button>
                  </form>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Job Detail Modal */}
      <AnimatePresence>
        {expandedJob && (
          <JobDetailModal 
            job={jobRoles.find(job => job.id === expandedJob)!} 
            onClose={() => setExpandedJob(null)}
            onApply={() => {
              setExpandedJob(null);
              setShowApplicationForm(expandedJob);
            }}
          />
        )}
      </AnimatePresence>

      {/* Application Form Modal */}
      <AnimatePresence>
        {showApplicationForm && (
          <ApplicationForm 
            jobRole={jobRoles.find(job => job.id === showApplicationForm)!} 
            onClose={() => setShowApplicationForm(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default AboutCareersContact;