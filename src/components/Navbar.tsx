import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';

interface NavItem {
  name: string;
  path: string;
  dropdown?: { name: string; path: string; }[];
}

// Pages that have hero images/backgrounds (should have transparent navbar)
const heroPages = ['/', '/equipment', '/solutions', '/about', '/news-media', '/contact', '/careers', '/pmi', '/test-center'];

// Pages with dark hero backgrounds (should have opaque navbar with dark text)
const darkHeroPages = ['/support'];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasHeroImage, setHasHeroImage] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  
  useEffect(() => {
    // Check if current page has hero image - more comprehensive detection
    const currentPath = location.pathname;
    const isHeroPage = heroPages.includes(currentPath) || 
                      currentPath.startsWith('/equipment/') || 
                      currentPath.startsWith('/solutions/');
    const isDarkHeroPage = darkHeroPages.includes(currentPath);
    
    // For dark hero pages, always show opaque navbar
    if (isDarkHeroPage) {
      setHasHeroImage(false);
    } else {
      setHasHeroImage(isHeroPage);
    }
    
    // Debug logging (development only)
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      console.log('Navbar Debug:', { 
        currentPath, 
        isHeroPage, 
        isDarkHeroPage,
        isScrolled, 
        hasHeroImage: isDarkHeroPage ? false : isHeroPage 
      });
    }
  }, [location.pathname, isScrolled]);

  const toggleDropdown = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Close dropdowns on scroll
          setActiveDropdown(null);
          
          // Check if scrolled past hero section (more sensitive detection)
          const scrollPosition = window.scrollY;
          setIsScrolled(scrollPosition > 50); // Much more sensitive - triggers after 50px scroll
          
          ticking = false;
        });
        ticking = true;
      }
    };
    
    const handleClickOutside = (e: MouseEvent) => {
      if (activeDropdown && !(e.target as Element).closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [activeDropdown]);


  const navItems: NavItem[] = [
    { 
      name: 'Home', 
      path: '/'
    },
    { 
      name: 'Equipment', 
      path: '/equipment',
      dropdown: [
        { name: 'All Equipment', path: '/equipment' },
        { name: 'Bollegraaf Balers', path: '/equipment/bollegraaf' },
        { name: 'TOMRA Optical Sorting', path: '/equipment/tomra' },
        { name: 'Pellenc ST Optical', path: '/equipment/pellenc-st' },
        { name: 'Lubo Screening', path: '/equipment/lubo-screening' },
        { name: 'Smicon Depackager', path: '/equipment/smicon-depackager' },
        { name: 'Greyparrot AI', path: '/equipment/greyparrot-ai' },
        { name: 'Centriair Odor Control', path: '/equipment/centriair-odor-control' },
        { name: 'Certified Pre-Owned', path: '/equipment/certified-pre-owned' }
      ]
    },
    { 
      name: 'Solutions', 
      path: '/solutions',
      dropdown: [
        { name: 'All Solutions', path: '/solutions' },
        { name: 'Single Stream Recycling', path: '/solutions/single-stream-recycling' },
        { name: 'Plastics Recycling', path: '/solutions/plastics-recycling' },
        { name: 'Organics Processing', path: '/solutions/organics-processing' },
        { name: 'Food Waste Depackaging', path: '/solutions/food-waste-depackaging' },
        { name: 'MSW Processing', path: '/solutions/msw-processing' },
        { name: 'Commercial Waste', path: '/solutions/commercial-waste' },
        { name: 'C&D Recycling', path: '/solutions/cd-recycling' },
        { name: 'Glass Cleanup', path: '/solutions/glass-cleanup' },
        { name: 'Waste to Energy', path: '/solutions/waste-to-energy' }
      ]
    },
    { 
      name: 'Services', 
      path: '/support',
      dropdown: [
        { name: 'All Services', path: '/support' },
        { name: 'PMI Services', path: '/pmi' },
        { name: 'Van Dyk University', path: '/van-dyk-university' },
        { name: 'Parts in Stock', path: '/parts-in-stock' },
        { name: 'Remote Troubleshooting', path: '/remote-troubleshooting' },
        { name: 'Get Quote', path: '/quote' },
        { name: 'Test Center', path: '/test-center' }
      ]
    },
    { 
      name: 'News and Media', 
      path: '/news-media',
      dropdown: [
        { name: 'All News', path: '/news-media' },
        { name: 'Videos', path: '/videos' },
        { name: 'Expert Tips', path: '/expert-tips' },
        { name: 'Our Customers in the News', path: '/our-customers-in-the-news' }
      ]
    },
    { 
      name: 'About Us', 
      path: '/about',
      dropdown: [
        { name: 'Our Story', path: '/about' },
        { name: 'Careers', path: '/careers' },
        { name: 'Contact Us', path: '/contact' }
      ]
    }
  ];


  return (
    <nav className={`w-full z-50 sticky top-0 smooth-scroll-enhanced transition-all duration-500 backdrop-blur-md`} style={{
      background: 'linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.9) 15%, rgba(21,72,125,0.4) 100%)'
    }}>
      <div className="container mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center h-14 sm:h-16 lg:h-18">
          {/* Logo - Far Left */}
          <Link to="/" className="flex items-center z-10 group">
            <div className="relative">
              {/* Logo */}
              <div className="relative">
                <img
                  src="/Images/van-dyk-logo-cmyk-no-r.png"
                  alt="Van Dyk Recycling Solutions Logo"
                  className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto object-contain transition-all duration-300"
                />
              </div>
            </div>
          </Link>

          {/* Navigation Links with Dropdowns */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              item.dropdown ? (
                <div key={item.name} className="relative dropdown-container">
                  <button 
                    onClick={() => toggleDropdown(item.name)}
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    aria-expanded={activeDropdown === item.name}
                    aria-haspopup="true"
                    aria-label={`${item.name} menu`}
                    className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:scale-105 ${
                      location.pathname.startsWith(item.path) || activeDropdown === item.name
                        ? 'text-vd-blue bg-white/30 shadow-md'
                        : 'text-vd-blue hover:text-vd-orange hover:bg-white/20'
                    }`}
                  >
                    {item.name}
                    <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-200 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  </button>
                  
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 top-full mt-2 w-64 bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-white/30 py-2 z-50"
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <div className="max-h-[400px] overflow-y-auto">
                          {item.dropdown.map((dropdownItem, index) => (
                            <Link
                              key={dropdownItem.path}
                              to={dropdownItem.path}
                              onClick={() => setActiveDropdown(null)}
                              className={`block px-4 py-3 text-sm transition-all duration-200 hover:bg-vd-orange/10 hover:text-vd-orange ${
                                index === 0 
                                  ? 'font-bold text-vd-blue border-b border-gray-200 mb-1' 
                                  : 'text-gray-700 hover:text-vd-orange'
                              }`}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:scale-105 ${
                    location.pathname === item.path
                      ? 'text-vd-orange bg-white/20'
                      : 'text-white hover:text-vd-orange hover:bg-white/10'
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>

          {/* Call Button - Much Bigger and More Prominent */}
          <div className="hidden lg:flex items-center">
            <a
              href="tel:203-967-1100"
              className="bg-vd-orange hover:bg-vd-orange-alt text-white px-4 py-2 rounded-xl font-bold text-sm transition-all duration-300 hover:shadow-xl flex items-center space-x-2 shadow-lg"
            >
              <Phone className="h-5 w-5 lg:h-6 lg:w-6" />
              <span>CALL NOW: (203) 967-1100</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            className={`lg:hidden p-2.5 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-md z-10 backdrop-blur-md border hover:border-white/35 ${
              hasHeroImage && !isScrolled
                ? 'text-white hover:bg-white/20 border-white/25'
                : 'text-vd-blue hover:bg-white/20 border-white/25'
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden backdrop-blur-2xl bg-white/95 border-t border-white/30"
          >
            <div className="container mx-auto px-6 py-8 space-y-3">
              {navItems.map((item) => (
                item.dropdown ? (
                  <div key={item.name} className="space-y-2">
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`block w-full text-left px-5 py-4 rounded-xl font-semibold text-base transition-all duration-300 hover:scale-105 backdrop-blur-md ${
                        location.pathname.startsWith(item.path)
                          ? 'text-vd-blue bg-white/30 shadow-xl border border-white/40 backdrop-blur-lg' 
                          : 'text-gray-800 hover:text-vd-orange hover:bg-white/40 hover:shadow-lg hover:border hover:border-white/50 backdrop-blur-md'
                      }`}
                    >
                      {item.name}
                    </Link>
                    <div className="pl-6 space-y-2 max-h-48 overflow-hidden">
                      {item.dropdown.slice(1).map((dropdownItem) => (
                        <Link
                          key={dropdownItem.path}
                          to={dropdownItem.path}
                          onClick={() => setIsOpen(false)}
                          className="block px-5 py-3 text-sm text-gray-700 hover:text-vd-orange hover:bg-white/30 rounded-lg transition-all duration-200 font-medium hover:translate-x-2 backdrop-blur-sm"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-5 py-4 rounded-xl font-semibold text-base transition-all duration-300 hover:scale-105 backdrop-blur-md ${
                      location.pathname === item.path
                        ? 'text-vd-blue bg-white/30 shadow-xl border border-white/40 backdrop-blur-lg'
                        : 'text-gray-800 hover:text-vd-orange hover:bg-white/40 hover:shadow-lg hover:border hover:border-white/50 backdrop-blur-md'
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              ))}

              {/* Mobile Call Button */}
              <div className="pt-6 border-t border-white/20">
                <a
                  href="tel:+12039671100"
                  className="w-full bg-gradient-to-r from-vd-orange to-orange-600 hover:from-orange-600 hover:to-vd-orange-alt text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2 backdrop-blur-md border-2 border-white/40 hover:border-white/60 relative overflow-hidden group"
                >
                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Phone className="w-5 h-5 relative z-10" />
                  <span className="text-sm relative z-10">CALL NOW: (203) 967-1100</span>
                  {/* Pulse effect */}
                  <div className="absolute inset-0 bg-vd-orange rounded-xl opacity-0 group-hover:opacity-20 animate-ping" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;