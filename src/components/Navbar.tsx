import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Close dropdowns on scroll
      setActiveDropdown(null);
      setSearchOpen(false);
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
    { title: 'Services & Support', keywords: ['service', 'training', 'installation', 'support', 'maintenance', 'pmi', 'preventive'], path: '/services', description: 'Our comprehensive services and support' },
    { title: 'Equipment', keywords: ['equipment', 'machinery', 'bollegraaf', 'tomra', 'pellenc', 'lubo'], path: '/equipment', description: 'Complete range of recycling equipment' },
    { title: 'Solutions', keywords: ['solution', 'recycling', 'single stream', 'plastic', 'waste', 'mrf'], path: '/solutions', description: 'Innovative recycling solutions' },
    { title: 'Bollegraaf Balers', keywords: ['baler', 'bollegraaf', 'compress', 'baling'], path: '/equipment#bollegraaf', description: 'High-performance horizontal balers' },
    { title: 'TOMRA Optical Sorting', keywords: ['tomra', 'optical', 'sorting', 'separator', 'nir'], path: '/equipment#tomra-optical-sorting', description: 'Advanced optical sorting technology' },
    { title: 'Pellenc ST Optical Sorting', keywords: ['pellenc', 'optical', 'ai', 'sorting'], path: '/equipment#pellenc-st-optical-sorting', description: 'AI-powered intelligent sorting' },
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
      window.location.href = searchResults[0].path;
      setSearchQuery('');
      setSearchOpen(false);
    }
  };

  const selectSearchResult = (result: { title: string; keywords: string[]; path: string; description: string }) => {
    window.location.href = result.path;
    setSearchQuery('');
    setSearchOpen(false);
  };

  const navItems: NavItem[] = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { 
      name: 'Equipment', 
      path: '/equipment',
      dropdown: [
        { name: 'View All Equipment', path: '/equipment' },
        { name: 'Bollegraaf', path: '/equipment#bollegraaf' },
        { name: 'Lubo Screening', path: '/equipment#lubo-screening' },
        { name: 'TOMRA Optical Sorting', path: '/equipment#tomra-optical-sorting' },
        { name: 'Pellenc ST Optical Sorting', path: '/equipment#pellenc-st-optical-sorting' },
        { name: 'Walair Density Separation', path: '/equipment#walair-density-separation' },
        { name: 'Smicon Food Waste Depackagers', path: '/equipment#smicon-food-waste-depackagers' },
        { name: 'GÜNTHER Screens', path: '/equipment#gunther-screens' },
        { name: 'Centriair', path: '/equipment#centriair' },
        { name: 'Greyparrot AI', path: '/equipment#greyparrot-ai' },
        { name: 'Densimetric Table', path: '/equipment#densimetric-table' },
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
        { name: 'Electronics Waste Recycling', path: '/solutions#electronics-waste-recycling' },
        { name: 'Battery Recycling Systems', path: '/solutions#battery-recycling-systems' },
        { name: 'Glass Cleanup Systems', path: '/solutions#glass-cleanup-systems' },
        { name: 'Composting & Densimetric Tables', path: '/solutions#composting-densimetric-tables' },
        { name: 'Bollegraaf Balers', path: '/solutions#bollegraaf-balers' },
        { name: 'AI Waste Analysis by Greyparrot', path: '/solutions#ai-waste-analysis' },
        { name: 'TOMRA Optical Sorting', path: '/solutions#tomra-optical-sorting' },
        { name: 'Pellenc ST Optical Sorting', path: '/solutions#pellenc-st-optical-sorting' },
        { name: 'Walair Density Separation', path: '/solutions#walair-density-separation' },
        { name: 'Centriair Odor Control', path: '/solutions#centriair-odor-control' }
      ]
    },
    { name: 'News & Media', path: '/news-media' },
    { 
      name: 'Contact Us', 
      path: '/contact',
      dropdown: [
        { name: 'Contact Us', path: '/contact' },
        { name: 'About Van Dyk', path: '/about' },
        { name: 'Careers', path: '/careers' }
      ]
    }
  ];

  const toggleDropdown = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  return (
    <nav className="w-full z-50 bg-vd-blue shadow-xl sticky top-0 backdrop-blur-sm border-b border-white/10 smooth-scroll">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 z-10">
            <img
              src="/Images/VDRS-lockup-mod-8-19-22-350.png"
              alt="Van Dyk Recycling Solutions Logo"
              className="h-12 transition-all duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              item.dropdown ? (
                <div key={item.name} className="relative dropdown-container">
                  <button 
                    onClick={() => toggleDropdown(item.name)}
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    className={`flex items-center px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 hover:scale-105 ${
                      location.pathname.startsWith(item.path) || activeDropdown === item.name
                        ? 'text-vd-orange bg-white/10 shadow-lg' 
                        : 'text-white hover:text-vd-orange hover:bg-white/10 hover:shadow-md'
                    }`}
                  >
                    {item.name}
                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${
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
                        <div className="max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-vd-orange scrollbar-track-gray-100 smooth-scroll">
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
                  className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 hover:scale-105 ${
                    location.pathname === item.path
                      ? 'text-vd-orange bg-white/10 shadow-lg' 
                      : 'text-white hover:text-vd-orange hover:bg-white/10 hover:shadow-md'
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}

            {/* Search */}
            <div className="relative search-container ml-4">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="text-white hover:text-vd-orange transition-all duration-300 p-2 rounded-lg hover:bg-white/10 hover:scale-110 hover:shadow-lg"
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
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Search equipment, solutions, services..."
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
              className="ml-6 bg-vd-orange hover:bg-vd-orange-alt text-white font-bold px-6 py-2.5 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 hover:scale-105 flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>CALL NOW: (203) 967-1100</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-white hover:bg-vd-blue-dark transition-all duration-300 hover:scale-110 hover:shadow-lg z-10"
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
            className="lg:hidden overflow-hidden glass-morphism-dark border-t border-white/10"
          >
            <div className="container mx-auto px-4 py-6 space-y-2">
              {/* Mobile Search */}
              <div className="mb-6">
                <form onSubmit={handleSearch} className="flex space-x-2">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search..."
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
                      className={`block w-full text-left px-4 py-3 rounded-lg font-bold transition-all duration-300 hover:scale-105 ${
                        location.pathname.startsWith(item.path)
                          ? 'text-vd-orange bg-white/10 shadow-lg' 
                          : 'text-white hover:text-vd-orange hover:bg-white/10 hover:shadow-md'
                      }`}
                    >
                      {item.name}
                    </Link>
                    <div className="pl-4 space-y-1 max-h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-vd-orange scrollbar-track-gray-800 smooth-scroll">
                      {item.dropdown.slice(1).map((dropdownItem) => (
                        <Link
                          key={dropdownItem.path}
                          to={dropdownItem.path}
                          onClick={() => setIsOpen(false)}
                          className="block px-4 py-2 text-sm text-gray-200 hover:text-vd-orange hover:bg-white/5 rounded-md transition-all duration-200 font-medium hover:translate-x-1"
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
                    className={`block px-4 py-3 rounded-lg font-bold transition-all duration-300 hover:scale-105 ${
                      location.pathname === item.path
                        ? 'text-vd-orange bg-white/10 shadow-lg'
                        : 'text-white hover:text-vd-orange hover:bg-white/10 hover:shadow-md'
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              ))}

              {/* Mobile Call Button */}
              <div className="pt-4 border-t border-white/10">
                <a
                  href="tel:+12039671100"
                  className="w-full bg-vd-orange hover:bg-vd-orange-alt text-white font-bold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>CALL NOW: (203) 967-1100</span>
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