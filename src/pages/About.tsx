import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Building, Users, Award, Globe, Target, Lightbulb, CheckCircle, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slideshowImages = [
    {
      src: '/Images/image-1749759453479.png',
      alt: 'Van Dyk Recycling Solutions Facility',
      title: 'Main Facility'
    },
    {
      src: '/Images/image-1749759459073.png',
      alt: 'Van Dyk Recycling Solutions Equipment',
      title: 'Recycling Equipment'
    },
    {
      src: '/Images/image-1749759467073.png',
      alt: 'Van Dyk Recycling Solutions Technology',
      title: 'Advanced Technology'
    },
    {
      src: '/Images/image-1749759472678.png',
      alt: 'Van Dyk Recycling Solutions Operations',
      title: 'Operations Center'
    },
    {
      src: '/Images/image-1749759476027.png',
      alt: 'Van Dyk Recycling Solutions Team',
      title: 'Expert Team'
    },
    {
      src: '/Images/image-1749759479881.png',
      alt: 'Van Dyk Recycling Solutions Innovation',
      title: 'Innovation Hub'
    },
    {
      src: '/Images/image-1749759487003.png',
      alt: 'Van Dyk Recycling Solutions Solutions',
      title: 'Custom Solutions'
    },
    {
      src: '/Images/image-1749759490576.png',
      alt: 'Van Dyk Recycling Solutions Quality',
      title: 'Quality Assurance'
    },
    {
      src: '/Images/image-1749759495211.png',
      alt: 'Van Dyk Recycling Solutions Growth',
      title: 'Sustainable Growth'
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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-vd-blue to-vd-blue-dark text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About Van Dyk Recycling Solutions
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
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Leadership Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our experienced leadership team brings decades of industry expertise and 
                a shared vision for the future of recycling.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div variants={fadeInUp} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src="/Images/image-1749759453479.png"
                  alt="Leadership"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Executive Leadership</h3>
                  <p className="text-gray-600">
                    Our executive team combines decades of experience in recycling technology, 
                    business development, and customer service.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src="/Images/image-1749759453479.png"
                  alt="Technical Team"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Technical Experts</h3>
                  <p className="text-gray-600">
                    Our technical team includes engineers, technicians, and specialists 
                    who ensure every installation meets the highest standards.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src="/Images/image-1749759453479.png"
                  alt="Support Team"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Support Team</h3>
                  <p className="text-gray-600">
                    Our dedicated support team provides ongoing maintenance, training, 
                    and technical assistance to keep your operations running smoothly.
                  </p>
                </div>
              </motion.div>
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