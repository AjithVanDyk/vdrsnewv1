import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Recycle, Users, Award, TrendingUp } from 'lucide-react';
import { useMemo } from 'react';

const Home = () => {
  const stats = useMemo(() => [
    { number: '500+', label: 'Installations Worldwide' },
    { number: '25+', label: 'Years of Experience' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Countries Served' },
  ], []);

  const services = useMemo(() => [
    {
      title: 'Single Stream Recycling',
      description: 'Complete turnkey solutions for single stream recycling facilities with advanced sorting technology.',
      icon: Recycle,
      image: '/Images/single-stream-recycling.jpg',
      linkText: 'Learn More',
      linkPath: '/solutions/single-stream-recycling'
    },
    {
      title: 'Bollegraaf Equipment',
      description: 'Industry-leading ballistic separators and optical sorting systems for maximum efficiency.',
      icon: Award,
      image: '/Images/bollegraaf-new-1.jpg',
      linkText: 'Learn More',
      linkPath: '/equipment/bollegraaf'
    },
    {
      title: 'Expert Consulting',
      description: 'Professional guidance and training to optimize your recycling operations and processes.',
      icon: Users,
      image: '/Images/van-dyk-logo-new.jpg',
      linkText: 'Learn More',
      linkPath: '/installation-process'
    },
    {
      title: 'Global Support',
      description: 'Worldwide service network with local support and 24/7 technical assistance.',
      icon: TrendingUp,
      image: '/Images/van-dyk-university.jpg',
      linkText: 'Learn More',
      linkPath: '/support'
    },
  ], []);


  return (
    <div className="min-h-screen smooth-scroll">
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden -mt-16 sm:-mt-20 pt-16 sm:pt-20">
        <img 
          src="/Images/image-1749759459073.png"
          alt="Van Dyk Recycling Solutions"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
          width="1920"
          height="1080"
          loading="eager"
          decoding="sync"
          onError={(e) => {
            if (process.env.NODE_ENV === 'development') {
              console.log('Hero image failed to load, using fallback');
            }
            e.currentTarget.src = '/Images/first.jpg';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40"></div>
        <div className="absolute inset-0 flex items-center pt-16 sm:pt-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="max-w-5xl text-white mt-8 sm:mt-12 lg:mt-20"
            >
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
              >
                We Consult and Sell
                <span className="block">Equipment to Help</span>
                <span className="block text-vd-orange">Recyclers and Waste</span>
                <span className="block text-vd-orange">Processors</span>
                <span className="block">Maximize Profits</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg sm:text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl"
              >
                Advanced recycling technology, expert consulting, and comprehensive support services to optimize your operations.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12 max-w-4xl"
              >
                {/* BOLLEGRAAF BALERS - Semi-transparent card */}
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    to="/equipment"
                    className="block bg-black/30 text-white px-4 sm:px-6 lg:px-8 py-4 sm:py-6 rounded-xl font-bold text-sm sm:text-base lg:text-lg transition-all duration-300 shadow-2xl hover:bg-black/50 flex items-center justify-center min-h-[60px] sm:min-h-[80px]"
                  >
                    BOLLEGRAAF BALERS
                  </Link>
                </motion.div>

                {/* IS YOUR PRODUCT RECYCLABLE? - Semi-transparent card */}
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    to="/contact"
                    className="block bg-black/30 border-2 border-white text-white px-4 sm:px-6 lg:px-8 py-4 sm:py-6 rounded-xl font-bold text-sm sm:text-base lg:text-lg transition-all duration-300 shadow-2xl hover:bg-black/50 flex items-center justify-center min-h-[60px] sm:min-h-[80px]"
                  >
                    IS YOUR PRODUCT RECYCLABLE?
                  </Link>
                </motion.div>

                {/* HIGH VOLUME FOOD DEPACKAGING - Semi-transparent card */}
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    to="/solutions"
                    className="block bg-black/30 text-white px-4 sm:px-6 lg:px-8 py-4 sm:py-6 rounded-xl font-bold text-sm sm:text-base lg:text-lg transition-all duration-300 shadow-2xl hover:bg-black/50 flex items-center justify-center min-h-[60px] sm:min-h-[80px]"
                  >
                    HIGH VOLUME FOOD DEPACKAGING
                  </Link>
                </motion.div>

                {/* GOT ODOR PROBLEMS? - Semi-transparent card */}
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    to="/solutions"
                    className="block bg-black/30 text-white px-4 sm:px-6 lg:px-8 py-4 sm:py-6 rounded-xl font-bold text-sm sm:text-base lg:text-lg transition-all duration-300 shadow-2xl hover:bg-black/50 flex items-center justify-center min-h-[60px] sm:min-h-[80px]"
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
                className="w-full py-8 border-y border-white/30 relative"
                style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)', width: '100vw' }}
              >
                {/* Blurred background */}
                <div 
                  className="absolute inset-0 bg-vd-blue-dark/60"
                  style={{
                    backgroundImage: 'url(/Images/mrf-systems.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'blur(8px)',
                    transform: 'scale(1.1)'
                  }}
                ></div>
                {/* Content */}
                <div className="relative z-10">
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto px-4">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                        className="text-center"
                      >
                        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-vd-orange mb-1 sm:mb-2">{stat.number}</div>
                        <div className="text-xs sm:text-sm md:text-base text-white font-medium">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-vd-blue mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Comprehensive recycling solutions tailored to your needs, from equipment to expert support
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative h-40 sm:h-48 overflow-hidden rounded-t-xl bg-gray-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className={`w-full h-full transform group-hover:scale-110 transition-transform duration-500 ${
                      service.title === 'Expert Consulting' || service.title === 'Global Support'
                        ? 'object-contain p-4'
                        : 'object-cover'
                    }`}
                    width="400"
                    height="192"
                    loading="lazy"
                    onError={(e) => {
                      console.log('Service image failed to load:', service.title);
                      e.currentTarget.src = '/Images/first.jpg';
                    }}
                  />
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                    <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-vd-orange bg-white/90 rounded-full p-1 sm:p-1.5" />
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-vd-blue mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">{service.description}</p>
                  <Link
                    to={service.linkPath}
                    className="text-vd-orange font-medium inline-flex items-center hover:text-vd-orange-alt transition-colors text-sm sm:text-base"
                  >
                    {service.linkText} →
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
                src="/Images/van-dyk-university.jpg"
                alt="Van Dyk University"
                className="w-48 h-auto mx-auto mb-6"
              />
              <h2 className="text-3xl font-bold text-vd-blue mb-3">Train Like the Best</h2>
              <p className="text-gray-600 mb-6">Training on the installation and repair of our products.</p>
              <Link
                to="/support"
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
                src="/Images/van-dyk-logo-new.jpg"
                alt="Van Dyk Direct Logo"
                className="w-48 h-auto mx-auto mb-6"
                onError={(e) => {
                  e.currentTarget.src = '/Images/image-1749759453479.png';
                  e.currentTarget.alt = 'Image not available';
                }}
              />
              <h2 className="text-3xl font-bold text-vd-blue mb-3">Order Parts</h2>
              <p className="text-gray-600 mb-6">Get a quote. Order parts. Find what you need here.</p>
              <a
                href="https://www.shopvandykdirect.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-vd-orange hover:bg-vd-orange-alt text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Place Your Order
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;