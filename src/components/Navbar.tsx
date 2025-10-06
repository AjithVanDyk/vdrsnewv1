import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, ChevronDown, Phone } from 'lucide-react';

interface NavItem {
  name: string;
  path: string;
  dropdown?: { name: string; path: string; }[];
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<{ title: string; keywords: string[]; path: string; description: string }[]>([]);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Close dropdowns on scroll
          setActiveDropdown(null);
          setSearchOpen(false);
          
          // Check if scrolled past hero section (approximately 100vh)
          const scrollPosition = window.scrollY;
          setIsScrolled(scrollPosition > window.innerHeight * 0.8);
          
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
        { name: 'Bollegraaf', path: '/equipment#bollegraaf-equipment' },
        { name: 'Lubo Screening', path: '/equipment#lubo-screening-equipment' },
        { name: 'TOMRA Optical Sorting', path: '/equipment#tomra-optical-sorting-equipment' },
        { name: 'Pellenc ST Optical Sorting', path: '/equipment#pellenc-st-optical-sorting-equipment' },
        { name: 'Walair Density Separation', path: '/equipment#walair-density-separation-equipment' },
        { name: 'Smicon Food Waste Depackagers', path: '/equipment#smicon-food-waste-depackagers' },
        { name: 'GÜNTHER Screens', path: '/equipment#gunther-screens' },
        { name: 'Centriair', path: '/equipment#centriair-equipment' },
        { name: 'Greyparrot AI', path: '/equipment#greyparrot-ai-equipment' },
        { name: 'Densimetric Table', path: '/equipment#densimetric-table-equipment' },
        { name: 'BeeFoam Dust Suppression System', path: '/equipment#beefoam-dust-suppression-system' },
        { name: 'Reckelberg Environmental Technologies', path: '/equipment#reckelberg-environmental-technologies' },
        { name: 'Certified Pre-Owned Equipment', path: '/equipment#certified-pre-owned-equipment' }
      ]
    },
    { 
      name: 'Solutions', 
      path: '/solutions',
      dropdown: [
        { name: 'View All Solutions', path: '/solutions' },
        { name: 'Single Stream Recycling', path: '/solutions#single-stream-recycling' },
        { name: 'E-Scrap Recycling', path: '/solutions#e-scrap-recycling' },
        { name: 'Battery Recycling Systems', path: '/solutions#battery-recycling-systems' },
        { name: 'Glass Cleanup Systems', path: '/solutions#glass-cleanup-systems' },
        { name: 'Composting & Densimetric Tables', path: '/solutions#composting-densimetric-tables' },
        { name: 'Bollegraaf Balers', path: '/solutions#bollegraaf-balers' },
        { name: 'AI-Based Waste Analytics', path: '/solutions#ai-based-waste-analytics' },
        { name: 'Multi-MRF™ Systems', path: '/solutions#multi-mrf-systems' },
        { name: 'MSW Processing', path: '/solutions#msw-processing' },
        { name: 'Commercial Waste Processing', path: '/solutions#commercial-waste-processing' },
        { name: 'C&D Recycling', path: '/solutions#cd-recycling' },
        { name: 'Organics Processing', path: '/solutions#organics-processing' },
        { name: 'Food Waste Depackaging', path: '/solutions#food-waste-depackaging' },
        { name: 'Plastics Recycling', path: '/solutions#plastics-recycling' },
        { name: 'Waste to Energy Recycling', path: '/solutions#waste-to-energy-recycling' }
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
    <nav className={`w-full z-50 backdrop-blur-md shadow-lg sticky top-0 border-b border-white/5 smooth-scroll transition-all duration-500 ${
      isScrolled ? 'bg-white/80 backdrop-blur-lg' : 'bg-black/10 backdrop-blur-md'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 z-10 group">
            <img
              src="/Images/van-dyk-logo-new.jpg"
              alt="Van Dyk Recycling Solutions Logo"
              className="h-14 transition-all duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              item.dropdown ? (
                <div key={item.name} className="relative dropdown-container">
                  <button 
                    onClick={() => toggleDropdown(item.name)}
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    aria-expanded={activeDropdown === item.name}
                    aria-haspopup="true"
                    aria-label={`${item.name} menu`}
                    className={`flex items-center px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm border ${
                      location.pathname.startsWith(item.path) || activeDropdown === item.name
                        ? isScrolled 
                          ? 'text-vd-blue bg-white/60 shadow-md border-white/40 backdrop-blur-md' 
                          : 'text-white bg-white/20 shadow-md border-white/30 backdrop-blur-md'
                        : isScrolled
                          ? 'text-vd-blue hover:text-vd-orange hover:bg-white/40 hover:shadow-sm border-white/20 backdrop-blur-sm'
                          : 'text-white hover:text-vd-orange hover:bg-white/15 hover:shadow-sm border-white/15 backdrop-blur-sm'
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
                  className={`px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm border ${
                    location.pathname === item.path
                      ? isScrolled
                        ? 'text-vd-blue bg-white/60 shadow-md border-white/40 backdrop-blur-md'
                        : 'text-white bg-white/20 shadow-md border-white/30 backdrop-blur-md'
                      : isScrolled
                        ? 'text-vd-blue hover:text-vd-orange hover:bg-white/40 hover:shadow-sm border-white/20 backdrop-blur-sm'
                        : 'text-white hover:text-vd-orange hover:bg-white/15 hover:shadow-sm border-white/15 backdrop-blur-sm'
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
                className={`transition-all duration-300 p-2.5 rounded-lg hover:scale-105 hover:shadow-sm backdrop-blur-sm border border-white/15 hover:border-white/25 ${
                  isScrolled 
                    ? 'text-vd-blue hover:text-vd-orange hover:bg-white/40'
                    : 'text-white hover:text-vd-orange hover:bg-white/15'
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
              className="ml-6 bg-vd-orange/90 hover:bg-vd-orange-alt text-white font-semibold px-6 py-2.5 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 flex items-center space-x-2 backdrop-blur-sm border border-white/20 hover:border-white/30"
            >
              <Phone className="w-5 h-5" />
              <span className="text-base">CALL NOW: (203) 967-1100</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            className="lg:hidden p-2.5 rounded-lg text-white hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-sm z-10 backdrop-blur-sm border border-white/15 hover:border-white/25"
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
            className="lg:hidden overflow-hidden glass-morphism-dark border-t border-white/30 backdrop-blur-2xl bg-vd-blue/85"
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
                          ? 'text-vd-orange bg-white/25 shadow-xl border border-white/30 backdrop-blur-md' 
                          : 'text-white hover:text-vd-orange hover:bg-white/20 hover:shadow-lg hover:border hover:border-white/25 backdrop-blur-sm'
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
                          className="block px-5 py-3 text-sm text-gray-200 hover:text-vd-orange hover:bg-white/10 rounded-lg transition-all duration-200 font-medium hover:translate-x-2"
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
                        ? 'text-vd-orange bg-white/25 shadow-xl border border-white/30'
                        : 'text-white hover:text-vd-orange hover:bg-white/20 hover:shadow-lg hover:border hover:border-white/25'
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
                  className="w-full bg-vd-orange/95 hover:bg-vd-orange-alt text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-3 backdrop-blur-sm border border-white/20 hover:border-white/30"
                >
                  <Phone className="w-5 h-5" />
                  <span className="text-base">CALL NOW: (203) 967-1100</span>
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