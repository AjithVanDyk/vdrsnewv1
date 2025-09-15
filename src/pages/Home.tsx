import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Recycle, Users, Award, TrendingUp, ChevronDown } from 'lucide-react';

const Home = () => {
  const stats = [
    { number: '500+', label: 'Installations Worldwide' },
    { number: '25+', label: 'Years of Experience' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Countries Served' },
  ];

  const services = [
    {
      title: 'Single Stream Recycling',
      description: 'Complete turnkey solutions for single stream recycling facilities with advanced sorting technology.',
      icon: Recycle,
      image: '/Images/image-1749759506179.png'
    },
    {
      title: 'Bollegraaf Equipment',
      description: 'Industry-leading ballistic separators and optical sorting systems for maximum efficiency.',
      icon: Award,
      image: '/Images/image-1749759502636.png'
    },
    {
      title: 'Expert Consulting',
      description: 'Professional guidance and training to optimize your recycling operations and processes.',
      icon: Users,
      image: '/Images/image-1749759499434.png'
    },
    {
      title: 'Global Support',
      description: 'Worldwide service network with local support and 24/7 technical assistance.',
      icon: TrendingUp,
      image: '/Images/image-1749759495211.png'
    },
  ];

  return (
    <div className="min-h-screen smooth-scroll">
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        <img 
          src="/Images/image-1749759459073.png"
          alt="Van Dyk Recycling Solutions"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-vd-blue-dark/85 via-vd-blue/75 to-vd-blue-dark/85"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="max-w-5xl text-white"
            >
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              >
                We Consult and Sell Equipment to Help
                <span className="block text-vd-orange">Recyclers and Waste Processors</span>
                <span className="block text-4xl md:text-5xl mt-4">Maximize Profits</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl"
              >
                Advanced recycling technology, expert consulting, and comprehensive support services to optimize your operations.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap gap-4 mb-12"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/equipment"
                    className="bg-vd-orange hover:bg-vd-orange-alt text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-vd-orange/25 inline-flex items-center"
                  >
                    BOLLEGRAAF BALERS
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/contact"
                    className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-vd-blue px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl"
                  >
                    IS YOUR PRODUCT RECYCLABLE?
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/solutions"
                    className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
                  >
                    HIGH VOLUME FOOD DEPACKAGING
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/solutions"
                    className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
                  >
                    GOT ODOR PROBLEMS?
                  </Link>
                </motion.div>
              </motion.div>
              
              {/* Stats Bar */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-vd-orange mb-2">{stat.number}</div>
                    <div className="text-sm md:text-base text-blue-100">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-8 h-8 text-white" />
          </motion.div>
        </motion.div>
      </div>


      {/* Services Section */}
      <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-vd-blue mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive recycling solutions tailored to your needs, from equipment to expert support
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-vd-blue-dark/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <service.icon className="w-8 h-8 text-vd-orange" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-vd-blue mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    to="/services"
                    className="text-vd-orange font-medium inline-flex items-center hover:text-vd-orange-alt transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Training and Parts Sections */}
      <div className="bg-gradient-to-b from-white to-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Train Like the Best */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 p-8 text-center"
            >
              <img
                src="/Images/image-1749759499434.png"
                alt="Van Dyk University"
                className="w-48 h-auto mx-auto mb-6"
              />
              <h2 className="text-3xl font-bold text-vd-blue mb-3">Train Like the Best</h2>
              <p className="text-gray-600 mb-6">Training on the installation and repair of our products.</p>
              <Link
                to="/services/training"
                className="inline-block bg-vd-orange hover:bg-vd-orange-alt text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Details & Schedules
              </Link>
            </motion.div>

            {/* Order Parts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 p-8 text-center"
            >
              <img
                src="/Images/VDRS-lockup-mod-8-19-22-350.png"
                alt="Van Dyk Direct Logo"
                className="w-48 h-auto mx-auto mb-6"
                onError={(e) => {
                  e.currentTarget.src = '/Images/image-1749759453479.png';
                  e.currentTarget.alt = 'Image not available';
                }}
              />
              <h2 className="text-3xl font-bold text-vd-blue mb-3">Order Parts</h2>
              <p className="text-gray-600 mb-6">Get a quote. Order parts. Find what you need here.</p>
              <Link
                to="/contact"
                className="inline-block bg-vd-orange hover:bg-vd-orange-alt text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Place Your Order
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;