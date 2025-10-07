import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Search, Wrench, GraduationCap, Package, Phone, Mail, 
  ArrowRight, ExternalLink, CheckCircle,
  Calendar, MapPin, Clock, Users, X,
  Settings, Eye, Star, TrendingUp, Shield, Award
} from 'lucide-react';

const ServicesSupport = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [statsVisible, setStatsVisible] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Statistics data
  const stats = [
    { number: '50+', label: 'Field Service Technicians', icon: Users },
    { number: '$35M', label: 'Parts Inventory Value', icon: Package },
    { number: '24/7', label: 'Technical Support', icon: Clock },
    { number: '40+', label: 'Years of Experience', icon: Award }
  ];

  // Testimonials data
  const testimonials = [
    {
      quote: "Van Dyk's 24/7 support saved us from a major production shutdown. Their response time and expertise are unmatched.",
      author: "Mike Johnson",
      company: "Metro Recycling Solutions",
      rating: 5
    },
    {
      quote: "The PMI program has extended our equipment life by 30% and reduced emergency repairs by 60%. Highly recommended.",
      author: "Sarah Chen",
      company: "Green Valley Processing",
      rating: 5
    },
    {
      quote: "Van Dyk University training transformed our team's efficiency. The hands-on approach made all the difference.",
      author: "Robert Martinez",
      company: "EcoTech Materials",
      rating: 5
    }
  ];

  // Intersection Observer for stats animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStatsVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    const statsElement = document.getElementById('stats-section');
    if (statsElement) {
      observer.observe(statsElement);
    }

    return () => observer.disconnect();
  }, []);

  // Handle hash fragments to auto-expand cards
  useEffect(() => {
    const hash = location.hash.substring(1); // Remove the # symbol
    if (hash) {
      // Map hash fragments to card IDs
      const hashToCardMap: { [key: string]: string } = {
        // Solutions
        'electronics-waste-recycling': 'electronics',
        'battery-recycling-systems': 'battery',
        'glass-cleanup-systems': 'glass',
        'composting-densimetric-tables': 'composting',
        'bollegraaf-balers': 'bollegraaf',
        'ai-waste-analysis': 'ai-analysis',
        'tomra-optical-sorting': 'tomra',
        'pellenc-st-optical-sorting': 'pellenc',
        'walair-density-separation': 'walair',
        'centriair-odor-control': 'centriair',
        // Equipment
        'bollegraaf-equipment': 'bollegraaf-equipment',
        'lubo-screening-equipment': 'lubo-screening-equipment',
        'tomra-optical-sorting-equipment': 'tomra-equipment',
        'pellenc-st-optical-sorting-equipment': 'pellenc-equipment',
        'walair-density-separation-equipment': 'walair-equipment',
        'smicon-food-waste-depackagers': 'smicon-food-waste-depackagers',
        'gunther-screens': 'gunther-screens',
        'centriair-equipment': 'centriair-equipment',
        'greyparrot-ai-equipment': 'greyparrot-ai-equipment',
        'densimetric-table-equipment': 'densimetric-table-equipment',
        'beefoam-dust-suppression-system': 'beefoam-dust-suppression-system',
        'reckelberg-environmental-technologies': 'reckelberg-environmental-technologies',
        'certified-pre-owned-equipment': 'certified-pre-owned-equipment'
      };
      
      const cardId = hashToCardMap[hash];
      if (cardId) {
        // Open the modal immediately for ALL equipment and solution cards
        setActiveModal(cardId);
        // Scroll to the top of the page to show the modal
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.hash]);

  const supportCards = [
    {
      id: 1,
      title: '24×7 Technical Support',
      description: 'Round-the-clock assistance for critical issues and emergency support. Our exceptional Van Dyk service technicians are always available.',
      features: [
        'Immediate Response',
        'Remote Diagnostics',
        'Emergency Dispatch',
        'System Monitoring'
      ],
      contact: '203-967-1100 • service@vdrs.com',
      image: '/Images/commercial-waste-processing.jpg',
      imageAlt: '24/7 technical support center',
      icon: Phone
    },
    {
      id: 2,
      title: 'Spare Parts – $35M Inventory',
      description: 'Multi-quantity stock for most components; same-day ship on weekday orders before 5:30 PM.',
      features: [
        'Multi-quantity Stock',
        'Same-day Shipping',
        '98% Parts Availability',
        'Express Delivery'
      ],
      cta: 'Order Parts',
      ctaLink: 'https://www.shopvandykdirect.com/',
      ctaExternal: true,
      image: '/Images/mrf-systems.jpg',
      imageAlt: 'Parts warehouse with $35 million inventory',
      icon: Package
    },
    {
      id: 3,
      title: 'Preventive Maintenance (PMI)',
      description: 'Two expert checkups per year with full inspection, report, and small fixes within the visit window.',
      features: [
        'Asset Life Extension',
        'Reduced Emergency Calls',
        'Performance Optimization',
        'Detailed Reporting'
      ],
      cta: 'Learn About PMI',
      ctaAction: () => navigate('/pmi'),
      image: '/Images/electronics-recycling.jpg',
      imageAlt: 'Preventive maintenance inspection',
      icon: Settings
    },
    {
      id: 4,
      title: '50+ Field Service Technicians',
      description: 'Nationwide coverage for repairs, retrofits, and upgrades. Factory-trained technicians available 24-48 hours response time.',
      features: [
        'Nationwide Coverage',
        'Factory-Trained Staff',
        '24-48 Hour Response',
        'On-Call Support'
      ],
      contact: 'Available for emergency calls and scheduled service',
      image: '/Images/plastics-recycling.jpg',
      imageAlt: 'Field service technicians at work',
      icon: Users
    },
    {
      id: 5,
      title: 'Van Dyk University',
      description: 'Hands-on classroom and line-side training for operators and maintenance teams with certification programs.',
      features: [
        'Classroom Training',
        'Hands-on Experience',
        'Certification Programs',
        'Ongoing Education'
      ],
      cta: 'View Courses',
      ctaAction: () => setActiveModal('training'),
      image: '/Images/Van%20Dyk%20University.jpg',
      imageAlt: 'Van Dyk University training facility',
      icon: GraduationCap
    },
    {
      id: 6,
      title: 'Material Testing Center',
      description: 'The largest material test center in the recycling industry with 36,000 square feet of testing space and full-scale equipment replication.',
      features: [
        '4 Optical Sorters',
        'Various Screens',
        'Elliptical Separator',
        'Air Systems'
      ],
      cta: 'Visit Test Center',
      ctaLink: '/test-center',
      image: '/Images/waste-to-energy.jpg',
      imageAlt: 'Material Testing Center with recycling equipment',
      icon: Eye
    }
  ];

  const renderCard = (card: any, index: number) => (
    <motion.div
      key={card.id}
      id={card.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
      className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 group h-full flex flex-col"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={card.image}
          alt={card.imageAlt}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute top-4 left-4">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.2 }}
          >
            <card.icon className="w-8 h-8 text-vd-orange drop-shadow-lg" />
          </motion.div>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white mb-2 drop-shadow-lg">{card.title}</h3>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-gray-600 mb-4 leading-relaxed flex-grow">{card.description}</p>

        {card.features && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {card.features.slice(0, 3).map((feature: string, idx: number) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  className="bg-vd-orange/10 text-vd-orange text-xs px-2 py-1 rounded-full font-medium"
                >
                  {feature}
                </motion.span>
              ))}
            </div>
          </div>
        )}

        {card.cta && (
          card.ctaAction ? (
            <motion.button
              onClick={card.ctaAction}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-vd-orange font-semibold inline-flex items-center hover:text-vd-orange-alt transition-colors group/btn"
            >
              {card.cta}
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="ml-1"
              >
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </motion.button>
          ) : card.ctaExternal ? (
            <a
              href={card.ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-vd-orange font-semibold inline-flex items-center hover:text-vd-orange-alt transition-colors group/btn"
            >
              {card.cta}
              <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          ) : (
            <Link
              to={card.ctaLink}
              className="text-vd-orange font-semibold inline-flex items-center hover:text-vd-orange-alt transition-colors group/btn"
            >
              {card.cta}
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          )
        )}

        {card.secondaryCta && (
          <a
            href={card.secondaryCtaLink}
            className="block text-sm text-vd-blue hover:text-vd-orange transition-colors mt-2"
          >
            {card.secondaryCta}
          </a>
        )}

        {card.contact && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <p className="text-sm text-gray-500 font-medium">{card.contact}</p>
          </div>
        )}
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="relative bg-gradient-to-r from-vd-blue-dark to-vd-blue text-white py-20 overflow-hidden">
        {/* Main hero background image */}
        <div className="absolute inset-0 bg-[url('/Images/contact-team-photo.jpg')] bg-center bg-no-repeat bg-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-vd-blue-dark/85 to-vd-blue/85" />
        {/* Additional overlay pattern for depth */}
        <div className="absolute inset-0 bg-[url('/Images/commercial-waste-processing.jpg')] bg-center bg-no-repeat bg-cover opacity-15 mix-blend-overlay" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Services & Support
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-100 mb-8 leading-relaxed"
            >
              Comprehensive recycling solutions from design and startup to training and 24×7 after-sales support
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="bg-vd-orange hover:bg-vd-orange-alt text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center shadow-lg hover:shadow-xl"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="tel:2039671100"
                  className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center border border-white/20 hover:border-white/40"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 203-967-1100
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Statistics Section */}
      <section id="stats-section" className="py-20 bg-gradient-to-br from-gray-900 via-vd-blue-dark to-gray-900 text-white relative overflow-hidden">
        {/* Enhanced animated background pattern */}
        <div className="absolute inset-0 bg-[url('/Images/commercial-waste-processing.jpg')] bg-center bg-no-repeat bg-cover opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-vd-blue-dark/95 via-vd-blue/90 to-vd-blue-dark/95" />
        
        {/* Enhanced floating geometric shapes with blending */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-20 h-20 border border-vd-orange/30 rotate-45 animate-pulse bg-vd-orange/5 backdrop-blur-sm"></div>
          <div className="absolute top-32 right-20 w-16 h-16 border border-white/20 rounded-full animate-bounce bg-white/5 backdrop-blur-sm"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 border border-vd-orange/40 rotate-12 animate-pulse bg-vd-orange/5 backdrop-blur-sm"></div>
          <div className="absolute bottom-32 right-1/3 w-24 h-24 border border-white/15 rounded-full animate-bounce bg-white/5 backdrop-blur-sm"></div>
          
          {/* Additional subtle pattern overlays */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `radial-gradient(circle at 20% 20%, rgba(255,165,0,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.05) 0%, transparent 50%)`,
            backgroundSize: '200px 200px, 150px 150px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-vd-orange bg-clip-text text-transparent">
              Why Choose Van Dyk?
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Numbers that speak for our commitment to excellence and innovation in waste processing
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-white/20 hover:border-vd-orange/50 transition-all duration-300 hover:bg-white/15 hover:scale-105 relative overflow-hidden group">
                  {/* Enhanced background blending */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-vd-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-vd-blue/20 via-transparent to-transparent"></div>
                  {/* Subtle pattern overlay */}
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,165,0,0.1) 0%, transparent 50%)`,
                    backgroundSize: '100px 100px, 80px 80px'
                  }}></div>
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-vd-orange to-orange-600 rounded-full mb-6 group-hover:shadow-lg group-hover:shadow-vd-orange/50 relative z-10"
                    >
                      <stat.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <div className="text-5xl md:text-6xl font-bold text-vd-orange mb-4 group-hover:scale-110 transition-transform duration-300 relative z-10">
                      {stat.number}
                    </div>
                    <div className="text-lg text-white font-semibold group-hover:text-vd-orange transition-colors duration-300 relative z-10">
                      {stat.label}
                    </div>
                    {/* Enhanced decorative line with blending */}
                    <div className="w-16 h-1 bg-gradient-to-r from-vd-orange via-vd-orange/80 to-transparent mx-auto mt-4 group-hover:w-24 transition-all duration-300 relative z-10 shadow-lg shadow-vd-orange/30"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional engagement elements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-16"
          >
            <div className="inline-flex items-center space-x-4 bg-white/10 backdrop-blur-md rounded-full px-8 py-4 border border-white/20 relative overflow-hidden group hover:bg-white/15 transition-all duration-300">
              {/* Enhanced background blending */}
              <div className="absolute inset-0 bg-gradient-to-r from-vd-orange/10 via-transparent to-vd-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
              {/* Subtle pattern */}
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255,165,0,0.2) 0%, transparent 70%)`,
                backgroundSize: '60px 60px'
              }}></div>
              <div className="w-3 h-3 bg-vd-orange rounded-full animate-pulse relative z-10"></div>
              <span className="text-white font-medium relative z-10">Trusted by industry leaders worldwide</span>
              <div className="w-3 h-3 bg-vd-orange rounded-full animate-pulse relative z-10"></div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-16 relative overflow-hidden">
        {/* Subtle background pattern for white section */}
        <div className="absolute inset-0 opacity-3" style={{
          backgroundImage: `radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.02) 0%, transparent 50%), radial-gradient(circle at 90% 80%, rgba(255, 165, 0, 0.02) 0%, transparent 50%)`,
          backgroundSize: '300px 300px, 250px 250px'
        }}></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-vd-blue mb-4">Support</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to keep running—on call, online, and on site
            </p>
          </div>
          
          {/* Equipment & Solutions Redirect Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="bg-gradient-to-br from-vd-blue to-vd-blue-dark rounded-2xl shadow-lg overflow-hidden group cursor-pointer relative"
              onClick={() => navigate('/equipment')}
            >
              <div className="p-8 text-white text-center relative">
                {/* Enhanced background blending layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-vd-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-vd-orange/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Subtle pattern overlay */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300" style={{
                  backgroundImage: `radial-gradient(circle at 30% 70%, rgba(255,165,0,0.3) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
                  backgroundSize: '120px 120px, 80px 80px'
                }}></div>
                {/* Animated background elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-vd-orange/5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-150"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 group-hover:scale-125"></div>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10"
                >
                  <Package className="w-16 h-16 mx-auto mb-4 text-vd-orange drop-shadow-lg" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 relative z-10">Equipment</h3>
                <p className="text-gray-100 mb-6 leading-relaxed relative z-10">
                  Explore our comprehensive range of recycling equipment including balers, screens, sorters, and more.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative z-10"
                >
                  <div className="bg-vd-orange hover:bg-vd-orange-alt text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center shadow-lg">
                    View Equipment
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="ml-2"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="bg-gradient-to-br from-vd-orange to-orange-600 rounded-2xl shadow-lg overflow-hidden group cursor-pointer relative"
              onClick={() => navigate('/solutions')}
            >
              <div className="p-8 text-white text-center relative">
                {/* Enhanced background blending layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-vd-orange/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Subtle pattern overlay */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300" style={{
                  backgroundImage: `radial-gradient(circle at 70% 30%, rgba(255,255,255,0.2) 0%, transparent 50%), radial-gradient(circle at 30% 70%, rgba(0,0,0,0.1) 0%, transparent 50%)`,
                  backgroundSize: '100px 100px, 90px 90px'
                }}></div>
                {/* Animated background elements */}
                <div className="absolute top-4 left-4 w-18 h-18 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-600 group-hover:scale-140"></div>
                <div className="absolute bottom-4 right-4 w-14 h-14 bg-black/5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-400 delay-200 group-hover:scale-130"></div>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10"
                >
                  <Settings className="w-16 h-16 mx-auto mb-4 text-white drop-shadow-lg" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 relative z-10">Solutions</h3>
                <p className="text-gray-100 mb-6 leading-relaxed relative z-10">
                  Discover our complete recycling solutions tailored for different materials and applications.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative z-10"
                >
                  <div className="bg-white hover:bg-gray-100 text-vd-orange px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center shadow-lg">
                    View Solutions
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="ml-2"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportCards.map((card, index) => renderCard(card, index))}
          </div>
        </div>
      </section>

      {/* Floating Elements Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-vd-blue mb-4">Industry Leadership</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Trusted by leading recycling facilities across North America
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { image: '/Images/bollegraaf-products.jpg', title: 'Bollegraaf Partnership', description: 'Exclusive North American distributor' },
              { image: '/Images/tomra-optical-sorting.jpg', title: 'TOMRA Technology', description: 'Advanced optical sorting solutions' },
              { image: '/Images/pellenc-optical-new.jpg', title: 'Pellenc ST', description: 'AI-powered sorting systems' },
              { image: '/Images/greyparrot-ai.jpg', title: 'Greyparrot AI', description: 'Intelligent waste analytics' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="text-center group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-xl mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="font-semibold text-vd-blue mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[url('/Images/organics-processing.jpg')] bg-center bg-no-repeat bg-cover opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-vd-blue mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real feedback from satisfied customers who trust Van Dyk for their recycling needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                    >
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    </motion.div>
                  ))}
                </div>
                <blockquote className="text-gray-600 mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-semibold text-vd-blue">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {/* Example for modals, only render if active */}
        {activeModal === 'training' && <div>Training Modal</div>}
      </AnimatePresence>
    </div>
  );
};

export default ServicesSupport;
