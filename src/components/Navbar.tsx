import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, ChevronDown, Phone } from 'lucide-react';

interface NavItem {
  name: string;
  path: string;
  dropdown?: { name: string; path: string; }[];
}

// Pages that have hero images/backgrounds (should have transparent navbar)
const heroPages = ['/', '/equipment', '/solutions', '/about', '/news-media', '/contact', '/careers', '/pmi', '/test-center', '/installation-process', '/training-schedule'];

// Pages with dark hero backgrounds (should have opaque navbar with dark text)
const darkHeroPages = ['/support'];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<{ title: string; keywords: string[]; path: string; description: string }[]>([]);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasHeroImage, setHasHeroImage] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
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
    if (process.env.NODE_ENV === 'development') {
      console.log('Navbar Debug:', { 
        currentPath, 
        isHeroPage, 
        isDarkHeroPage,
        isScrolled, 
        hasHeroImage: isDarkHeroPage ? false : isHeroPage 
      });
    }
  }, [location.pathname, isScrolled]);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Close dropdowns on scroll
          setActiveDropdown(null);
          setSearchOpen(false);
          
          // Check if scrolled past hero section (more sensitive detection)
          const scrollPosition = window.scrollY;
          setIsScrolled(scrollPosition > 50); // Much more sensitive - triggers after 50px scroll
          
          ticking = false;
        });
        ticking = true;
      }
    };
    
    const handleClickOutside = (e: MouseEvent) => {
      if (searchOpen && !(e.target as Element).closest('.search-container')) {
        setSearchOpen(false);
      }
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
  }, [searchOpen, activeDropdown]);

  // Enhanced search content database
  const searchDatabase = React.useMemo(() => [
    { title: 'Services & Support', keywords: ['service', 'training', 'installation', 'support', 'maintenance', 'pmi', 'preventive'], path: '/support', description: 'Our comprehensive services and support' },
    { title: 'Equipment', keywords: ['equipment', 'machinery', 'bollegraaf', 'tomra', 'pellenc', 'lubo'], path: '/equipment', description: 'Complete range of recycling equipment' },
    { title: 'Solutions', keywords: ['solution', 'recycling', 'single stream', 'plastic', 'waste', 'mrf'], path: '/solutions', description: 'Innovative recycling solutions' },
    { title: 'Bollegraaf Balers', keywords: ['baler', 'bollegraaf', 'compress', 'baling'], path: '/equipment#bollegraaf-equipment', description: 'High-performance horizontal balers' },
    { title: 'TOMRA Optical Sorting', keywords: ['tomra', 'optical', 'sorting', 'separator', 'nir'], path: '/equipment#tomra-optical-sorting-equipment', description: 'Advanced optical sorting technology' },
    { title: 'Pellenc ST Optical Sorting', keywords: ['pellenc', 'optical', 'ai', 'sorting'], path: '/equipment#pellenc-st-optical-sorting-equipment', description: 'AI-powered intelligent sorting' },
    { title: 'Single Stream Recycling', keywords: ['single stream', 'recycling', 'material recovery'], path: '/solutions#single-stream-recycling', description: 'Complete recycling solutions' },
    { title: 'News & Media', keywords: ['news', 'media', 'video', 'press', 'article'], path: '/news-media', description: 'Latest news and media coverage' },
    { title: 'Van Dyk Company', keywords: ['about', 'company', 'history', 'van dyk', 'founded'], path: '/about', description: 'Learn about Van Dyk Recycling Solutions' },
    { title: 'Careers', keywords: ['career', 'job', 'work', 'employment', 'technician', 'installer'], path: '/careers', description: 'Join our innovative team' },
    { title: 'Contact Information', keywords: ['contact', 'phone', 'email', 'address', 'location', 'norwalk'], path: '/contact', description: 'Get in touch with our team' }
  ], []);

  // Real-time search as user types
  useEffect(() => {
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      const results = searchDatabase.filter(item =>
        item.title.toLowerCase().includes(query) ||
        item.keywords.some(keyword => keyword.includes(query)) ||
        item.description.toLowerCase().includes(query)
      ).slice(0, 5);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery, searchDatabase]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchResults.length > 0) {
      navigate(searchResults[0].path);
      setSearchQuery('');
      setSearchOpen(false);
    }
  };

  const selectSearchResult = (result: { title: string; keywords: string[]; path: string; description: string }) => {
    navigate(result.path);
    setSearchQuery('');
    setSearchOpen(false);
  };

  const navItems: NavItem[] = [
    { name: 'Home', path: '/' },
    { 
      name: 'Equipment', 
      path: '/equipment',
      dropdown: [
        { name: 'View All Equipment', path: '/equipment' },
        { name: 'Bollegraaf', path: '/equipment/bollegraaf' },
        { name: 'Lubo Screening', path: '/equipment/lubo-screening' },
        { name: 'TOMRA Optical Sorting', path: '/equipment/tomra' },
        { name: 'Pellenc ST Optical Sorting', path: '/equipment/pellenc-st' },
        { name: 'Walair Density Separation', path: '/equipment/walair-density-separation' },
        { name: 'Smicon Food Waste Depackagers', path: '/equipment/smicon-depackager' },
        { name: 'GÜNTHER Screens', path: '/equipment/gunther-screens' },
        { name: 'Centriair', path: '/equipment/centriair-odor-control' },
        { name: 'Greyparrot AI', path: '/equipment/greyparrot-ai' },
        { name: 'Densimetric Table', path: '/equipment/densimetric-table' },
        { name: 'BeeFoam Dust Suppression System', path: '/equipment/beefoam-dust-suppression' },
        { name: 'Reckelberg Environmental Technologies', path: '/equipment/reckelberg-environmental' },
        { name: 'Certified Pre-Owned Equipment', path: '/equipment/certified-pre-owned' }
      ]
    },
    { 
      name: 'Solutions', 
      path: '/solutions',
      dropdown: [
        { name: 'View All Solutions', path: '/solutions' },
        { name: 'Single Stream Recycling', path: '/solutions/single-stream-recycling' },
        { name: 'E-Scrap Recycling', path: '/solutions/electronics-waste-recycling' },
        { name: 'Battery Recycling Systems', path: '/solutions/battery-recycling-systems' },
        { name: 'Glass Cleanup Systems', path: '/solutions/glass-cleanup' },
        { name: 'Composting & Densimetric Tables', path: '/solutions/composting-densimetric-tables' },
        { name: 'Bollegraaf Balers', path: '/solutions/bollegraaf-balers' },
        { name: 'AI-Based Waste Analytics', path: '/solutions/ai-waste-analysis' },
        { name: 'Multi-MRF™ Systems', path: '/solutions/multi-mrf-systems' },
        { name: 'MSW Processing', path: '/solutions/msw-processing' },
        { name: 'Commercial Waste Processing', path: '/solutions/commercial-waste' },
        { name: 'C&D Recycling', path: '/solutions/cd-recycling' },
        { name: 'Organics Processing', path: '/solutions/organics-processing' },
        { name: 'Food Waste Depackaging', path: '/solutions/food-waste-depackaging' },
        { name: 'Plastics Recycling', path: '/solutions/plastics-recycling' },
        { name: 'Waste to Energy Recycling', path: '/solutions/waste-to-energy' }
      ]
    },
    { 
      name: 'Services', 
      path: '/support',
      dropdown: [
        { name: 'Support & Training', path: '/support' },
        { name: 'PMI Services', path: '/pmi' },
        { name: 'Get Quote', path: '/quote' },
        { name: 'Test Center', path: '/test-center' },
        { name: 'Installation Process', path: '/installation-process' },
        { name: 'Training Schedule', path: '/training-schedule' }
      ]
    },
    { name: 'News & Media', path: '/news-media' },
    { 
      name: 'About Us', 
      path: '/contact',
      dropdown: [
        { name: 'Contact Us', path: '/contact' },
        { name: 'Overview', path: '/about' },
        { name: 'Careers', path: '/careers' }
      ]
    }
  ];

  const toggleDropdown = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  return (
    <nav className={`w-full z-50 sticky top-0 smooth-scroll-enhanced transition-all duration-500 ${
      hasHeroImage 
        ? isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-xl border-b border-gray-200/50' 
          : 'bg-transparent backdrop-blur-sm border-b border-white/10'
        : 'bg-white/98 backdrop-blur-xl shadow-xl border-b border-gray-200/50'
    }`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16 sm:h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 z-10 group">
            <div className="relative">
              {/* Logo with elegant background blending */}
              <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-white/90 to-gray-50/90 backdrop-blur-sm border border-white/20 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <img
                  src="/Images/van-dyk-logo-new.jpg"
                  alt="Van Dyk Recycling Solutions Logo"
                  className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto object-contain p-1 sm:p-2 transition-all duration-300"
                />
                {/* Subtle overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/5 pointer-events-none" />
              </div>
              {/* Floating accent dot */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-vd-orange rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse" />
            </div>
          </Link>

          {/* Tablet Navigation - Simplified */}
          <div className="hidden lg:flex xl:hidden items-center space-x-1">
            {navItems.slice(0, 4).map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 text-xs font-semibold rounded-lg transition-all duration-300 hover:scale-105 backdrop-blur-md border ${
                  location.pathname.startsWith(item.path)
                    ? isScrolled 
                      ? 'text-vd-blue bg-white/70 shadow-lg border-white/50 backdrop-blur-lg' 
                      : hasHeroImage
                        ? 'text-white bg-white/25 shadow-lg border-white/40 backdrop-blur-lg'
                        : 'text-vd-blue bg-white/25 shadow-lg border-white/40 backdrop-blur-lg'
                    : isScrolled
                      ? 'text-vd-blue hover:text-vd-orange hover:bg-white/50 hover:shadow-md border-white/30 backdrop-blur-md'
                      : hasHeroImage
                        ? 'text-white hover:text-vd-orange hover:bg-white/20 hover:shadow-md border-white/25 backdrop-blur-md'
                        : 'text-vd-blue hover:text-vd-orange hover:bg-white/20 hover:shadow-md border-white/25 backdrop-blur-md'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-1 2xl:space-x-2">
            {navItems.map((item) => (
              item.dropdown ? (
                <div key={item.name} className="relative dropdown-container">
                  <button 
                    onClick={() => toggleDropdown(item.name)}
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    aria-expanded={activeDropdown === item.name}
                    aria-haspopup="true"
                    aria-label={`${item.name} menu`}
                    className={`flex items-center px-3 xl:px-4 2xl:px-5 py-2 xl:py-2.5 2xl:py-3 text-xs xl:text-sm font-semibold rounded-xl transition-all duration-300 hover:scale-105 backdrop-blur-md border-2 ${
                      location.pathname.startsWith(item.path) || activeDropdown === item.name
                        ? isScrolled 
                          ? 'text-vd-blue bg-gradient-to-r from-white/80 to-gray-50/80 shadow-xl border-vd-orange/30 backdrop-blur-lg' 
                          : hasHeroImage
                            ? 'text-white bg-gradient-to-r from-white/30 to-white/20 shadow-xl border-white/50 backdrop-blur-lg'
                            : 'text-vd-blue bg-gradient-to-r from-white/30 to-white/20 shadow-xl border-white/50 backdrop-blur-lg'
                        : isScrolled
                          ? 'text-vd-blue hover:text-vd-orange hover:bg-gradient-to-r hover:from-white/60 hover:to-gray-50/60 hover:shadow-lg border-white/40 backdrop-blur-md hover:border-vd-orange/20'
                          : hasHeroImage
                            ? 'text-white hover:text-vd-orange hover:bg-gradient-to-r hover:from-white/25 hover:to-white/15 hover:shadow-lg border-white/30 backdrop-blur-md hover:border-vd-orange/30'
                            : 'text-vd-blue hover:text-vd-orange hover:bg-gradient-to-r hover:from-white/25 hover:to-white/15 hover:shadow-lg border-white/30 backdrop-blur-md hover:border-vd-orange/30'
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
                        className="absolute left-0 top-full mt-2 w-80 dropdown-glass rounded-xl py-2 z-50"
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <div className="max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-vd-orange scrollbar-track-gray-100 smooth-scroll">
                          {item.dropdown.map((dropdownItem, index) => (
                            <Link
                              key={dropdownItem.path}
                              to={dropdownItem.path}
                              onClick={() => setActiveDropdown(null)}
                              className={`block px-4 py-3 text-sm transition-all duration-200 border-l-3 border-transparent hover:border-vd-orange hover:bg-vd-orange/5 hover:translate-x-1 ${
                                index === 0 
                                  ? 'font-bold text-vd-blue border-b border-gray-100 mb-1 bg-gradient-to-r from-gray-50 to-white' 
                                  : 'text-gray-700 hover:text-vd-orange font-medium'
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
                  className={`px-4 py-2.5 text-sm font-semibold rounded-lg transition-all duration-300 hover:scale-105 backdrop-blur-md border ${
                    location.pathname === item.path
                      ? isScrolled
                        ? 'text-vd-blue bg-white/70 shadow-lg border-white/50 backdrop-blur-lg'
                        : hasHeroImage
                          ? 'text-white bg-white/25 shadow-lg border-white/40 backdrop-blur-lg'
                          : 'text-vd-blue bg-white/25 shadow-lg border-white/40 backdrop-blur-lg'
                      : isScrolled
                        ? 'text-vd-blue hover:text-vd-orange hover:bg-white/50 hover:shadow-md border-white/30 backdrop-blur-md'
                        : hasHeroImage
                          ? 'text-white hover:text-vd-orange hover:bg-white/20 hover:shadow-md border-white/25 backdrop-blur-md'
                          : 'text-vd-blue hover:text-vd-orange hover:bg-white/20 hover:shadow-md border-white/25 backdrop-blur-md'
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}

            {/* Search */}
            <div className="relative search-container ml-6">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                aria-expanded={searchOpen}
                aria-label="Open search"
                className={`transition-all duration-300 p-2.5 rounded-lg hover:scale-105 hover:shadow-md backdrop-blur-md border ${
                  isScrolled 
                    ? 'text-vd-blue hover:text-vd-orange hover:bg-white/50 border-white/30'
                    : hasHeroImage
                      ? 'text-white hover:text-vd-orange hover:bg-white/20 border-white/25'
                      : 'text-vd-blue hover:text-vd-orange hover:bg-white/20 border-white/25'
                }`}
              >
                <Search className="w-5 h-5" />
              </button>
              
              <AnimatePresence>
                {searchOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 top-full mt-2 w-96 dropdown-glass rounded-xl z-50"
                  >
                    <div className="p-6">
                      <form onSubmit={handleSearch} className="flex space-x-2 mb-4">
                        <input
                          type="text"
                          autoComplete="off"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Search equipment, solutions, services..."
                          aria-label="Search website"
                          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vd-orange focus:border-vd-orange text-gray-900 text-sm font-medium"
                          autoFocus
                        />
                        <button
                          type="submit"
                          className="bg-vd-orange hover:bg-vd-orange-alt text-white px-4 py-2 rounded-lg transition-colors"
                        >
                          <Search className="w-4 h-4" />
                        </button>
                      </form>
                      
                      {/* Search Results */}
                      {searchResults.length > 0 && (
                        <div className="border-t border-gray-200 pt-4">
                          <div className="text-xs text-gray-500 mb-3 font-semibold uppercase tracking-wide">Search Results:</div>
                          <div className="space-y-1">
                            {searchResults.map((result, index) => (
                              <button
                                key={index}
                                onClick={() => selectSearchResult(result)}
                                className="w-full text-left p-3 hover:bg-gray-50 rounded-lg transition-colors border border-transparent hover:border-gray-200"
                              >
                                <div className="font-semibold text-vd-blue text-sm">{result.title}</div>
                                <div className="text-xs text-gray-600 mt-1">{result.description}</div>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {searchQuery && searchResults.length === 0 && (
                        <div className="border-t border-gray-200 pt-4">
                          <div className="text-sm text-gray-500 text-center py-4">
                            No results found. Try searching for equipment, solutions, or services.
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Call Button */}
            <a
              href="tel:+12039671100"
              className="ml-2 sm:ml-4 lg:ml-6 bg-gradient-to-r from-vd-orange to-orange-600 hover:from-orange-600 hover:to-vd-orange-alt text-white font-bold px-3 sm:px-4 lg:px-6 xl:px-8 py-2 sm:py-2.5 lg:py-3 rounded-lg sm:rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center space-x-1 sm:space-x-2 lg:space-x-3 backdrop-blur-md border-2 border-white/40 hover:border-white/60 relative overflow-hidden group"
            >
              {/* Animated background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" />
              <span className="text-xs sm:text-sm lg:text-base relative z-10 hidden sm:inline">CALL NOW:</span>
              <span className="text-xs sm:text-sm lg:text-base relative z-10">(203) 967-1100</span>
              {/* Pulse effect */}
              <div className="absolute inset-0 bg-vd-orange rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-20 animate-ping" />
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
              {/* Mobile Search */}
              <div className="mb-6">
                <form onSubmit={handleSearch} className="flex space-x-2">
                  <input
                    type="text"
                    autoComplete="off"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search..."
                    aria-label="Search website"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-900 font-medium"
                  />
                  <button
                    type="submit"
                    className="bg-vd-orange hover:bg-vd-orange-alt text-white px-4 py-2 rounded-lg"
                  >
                    <Search className="w-4 h-4" />
                  </button>
                </form>
              </div>

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
                  className="w-full bg-gradient-to-r from-vd-orange to-orange-600 hover:from-orange-600 hover:to-vd-orange-alt text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-3 backdrop-blur-md border-2 border-white/40 hover:border-white/60 relative overflow-hidden group"
                >
                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Phone className="w-5 h-5 relative z-10" />
                  <span className="text-base relative z-10">CALL NOW: (203) 967-1100</span>
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