import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Award, Globe, Target, Lightbulb, CheckCircle, ArrowRight, ChevronLeft, ChevronRight, ExternalLink, Linkedin } from 'lucide-react';

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slideshowImages = [
    {
      src: '/Images/bollegraaf-new-1.jpg',
      alt: 'Bollegraaf Balers Installation',
      title: 'Bollegraaf Equipment'
    },
    {
      src: '/Images/tomra-optical-sorting-new.jpg',
      alt: 'TOMRA Optical Sorting System',
      title: 'TOMRA Technology'
    },
    {
      src: '/Images/glass-cleanup-1.jpg',
      alt: 'Glass Cleanup Systems',
      title: 'Glass Processing'
    },
    {
      src: '/Images/smicon-depackager-new.jpg',
      alt: 'Smicon Food Waste Processing',
      title: 'Food Waste Processing'
    },
    {
      src: '/Images/lubo-screening-new.jpg',
      alt: 'Lubo Screening Technology',
      title: 'Screening Technology'
    },
    {
      src: '/Images/greyparrot-ai-new.jpg',
      alt: 'Greyparrot AI Technology',
      title: 'AI Technology'
    },
    {
      src: '/Images/centriair-new-1.jpg',
      alt: 'Centriair Odor Control',
      title: 'Odor Control Systems'
    },
    {
      src: '/Images/pellenc-optical-new.jpg',
      alt: 'Pellenc Optical Sorting',
      title: 'Optical Sorting'
    },
    {
      src: '/Images/gunther-screens-new.jpg',
      alt: 'Gunther Screening Equipment',
      title: 'Screening Equipment'
    }
  ];

  // Auto-advance slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slideshowImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideshowImages.length) % slideshowImages.length);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
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

  const leadershipTeam = [
    {
      name: "Pieter Eenkema van Dijk",
      position: "President & CEO",
      linkedin: "https://www.linkedin.com/in/pieter-eenkema-van-dijk-1a7096a9/",
      image: "/Images/leadership-pvd.jpg",
      bio: "Leading Van Dyk Recycling Solutions with vision and innovation since 1984."
    },
    {
      name: "Erik Eenkema van Dijk",
      position: "Executive Vice President & COO",
      linkedin: "https://www.linkedin.com/in/erik-eenkema-van-dijk/",
      image: "/Images/leadership-evd.jpg",
      bio: "Overseeing operations and ensuring excellence in all aspects of our business."
    },
    {
      name: "Mark Neitzey",
      position: "Director of Sales",
      linkedin: "https://www.linkedin.com/in/mark-neitzey/",
      image: "/Images/leadership-mark-neitzey.jpg",
      bio: "Sales leader driving business growth and building strong client relationships across North American markets."
    },
    {
      name: "Chris Bova",
      position: "VP of Operations",
      linkedin: "https://www.linkedin.com/in/christopher-bova-306b1711/",
      image: "/Images/leadership-chris-bova.jpg",
      bio: "Operations expert ensuring seamless project delivery and customer satisfaction across all installations."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
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
                src={slideshowImages[currentSlide].src}
                alt={slideshowImages[currentSlide].alt}
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
            {slideshowImages.map((_, index) => (
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
              Overview - Van Dyk Recycling Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Leading the Future of Recycling Technology Since 1995
            </p>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-block"
            >
              <div className="bg-vd-orange text-white px-8 py-4 rounded-lg font-semibold text-lg">
                Your Trusted Recycling Partner
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                For nearly three decades, Van Dyk Recycling Solutions has been at the forefront of 
                recycling technology, helping businesses and communities maximize their recycling potential 
                while minimizing environmental impact.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInUp}>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Founded in Excellence</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Since 1995, we've been dedicated to providing innovative recycling solutions that 
                  help our clients achieve their sustainability goals while maintaining operational efficiency. 
                  Our commitment to excellence has made us a trusted partner for recycling facilities across North America.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-vd-orange" />
                    <span className="text-gray-700">Over 25 years of industry experience</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-vd-orange" />
                    <span className="text-gray-700">500+ successful installations</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-vd-orange" />
                    <span className="text-gray-700">24/7 customer support</span>
                  </div>
                </div>
              </motion.div>
              <motion.div variants={fadeInUp} className="relative">
                <img
                  src="https://vdrs.com/wp-content/uploads/2025/02/Van-Dyk-Group-Photo-Edit-2-c2.jpg"
                  alt="Van Dyk Team"
                  className="rounded-xl shadow-2xl"
                  onError={(e) => { e.currentTarget.src = '/Images/image-1749759453479.png'; }}
                />
                <div className="absolute -bottom-6 -right-6 bg-vd-orange text-white p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-sm">Projects Completed</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission & Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're committed to revolutionizing recycling through innovative technology, 
                exceptional service, and sustainable solutions.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div variants={fadeInUp} className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-vd-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To provide cutting-edge recycling solutions that maximize material recovery, 
                  reduce waste, and create sustainable value for our clients and communities.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-vd-orange text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation</h3>
                <p className="text-gray-600">
                  We continuously invest in the latest technology and partner with industry leaders 
                  to bring you the most advanced recycling solutions available.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Sustainability</h3>
                <p className="text-gray-600">
                  Every solution we provide is designed to minimize environmental impact while 
                  maximizing the economic benefits of recycling.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-7xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Leadership Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet the visionary leaders driving innovation and excellence in recycling technology. 
                Our experienced team brings decades of industry expertise and a shared vision for sustainable solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {leadershipTeam.map((leader) => (
                <motion.div
                  key={leader.name}
                  variants={fadeInUp}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
                >
                  <div className="relative">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src = '/Images/image-1749759453479.png';
                        e.currentTarget.alt = 'Leadership photo';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={leader.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/90 hover:bg-white text-vd-blue p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                        aria-label={`View ${leader.name}'s LinkedIn profile`}
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-vd-blue transition-colors">
                      {leader.name}
                    </h3>
                    <p className="text-vd-orange font-semibold mb-3 text-sm uppercase tracking-wide">
                      {leader.position}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {leader.bio}
                    </p>
                    
                    <a
                      href={leader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-vd-blue hover:text-vd-blue-dark font-medium text-sm transition-colors group/link"
                    >
                      <Linkedin className="w-4 h-4 mr-2" />
                      Connect on LinkedIn
                      <ExternalLink className="w-3 h-3 ml-1 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Team Info */}
            <motion.div variants={fadeInUp} className="mt-16 text-center">
              <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Team Philosophy</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  At Van Dyk Recycling Solutions, we believe that great leadership starts with great people. 
                  Our leadership team is committed to fostering innovation, maintaining the highest standards of quality, 
                  and building lasting relationships with our clients and partners.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-vd-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-vd-blue" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Collaborative Leadership</h4>
                    <p className="text-sm text-gray-600">Working together to achieve common goals</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-vd-orange/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-vd-orange" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Industry Excellence</h4>
                    <p className="text-sm text-gray-600">Setting standards for recycling technology</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-green-600/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Globe className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Global Impact</h4>
                    <p className="text-sm text-gray-600">Creating sustainable solutions worldwide</p>
                  </div>
                </div>
              </div>
            </motion.div>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Partner with Us?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Let's work together to create a more sustainable future through innovative recycling solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-vd-orange hover:bg-vd-orange-alt text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
              >
                Get in Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.a>
              <motion.a
                href="/solutions"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white hover:bg-white hover:text-vd-blue px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
              >
                View Our Solutions
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;