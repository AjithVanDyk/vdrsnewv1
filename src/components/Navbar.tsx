import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Search } from 'lucide-react';

interface NavItem {
  name: string;
  path: string;
  dropdown?: { name: string; path: string; }[];
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    const handleClickOutside = (e: MouseEvent) => {
      if (searchOpen && !(e.target as Element).closest('.search-container')) {
        setSearchOpen(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [searchOpen]);

  // Enhanced search content database
  const searchDatabase = [
    { title: 'Services & Support', keywords: ['service', 'training', 'installation', 'support', 'maintenance', 'pmi', 'preventive'], path: '/services', description: 'Our comprehensive services and support' },
    { title: 'Bollegraaf Balers', keywords: ['baler', 'bollegraaf', 'compress', 'baling'], path: '/equipment', description: 'High-performance horizontal balers' },
    { title: 'TOMRA Optical Sorting', keywords: ['tomra', 'optical', 'sorting', 'separator'], path: '/equipment', description: 'Advanced optical sorting technology' },
    { title: 'Equipment', keywords: ['equipment', 'machinery', 'lubo', 'pellenc'], path: '/equipment', description: 'Complete range of recycling equipment' },
    { title: 'Single Stream Recycling', keywords: ['single stream', 'recycling', 'material recovery'], path: '/solutions', description: 'Complete recycling solutions' },
    { title: 'Solutions', keywords: ['solution', 'plastic', 'waste', 'mrf'], path: '/solutions', description: 'Innovative recycling solutions' },
    { title: 'News & Media', keywords: ['news', 'media', 'video', 'press', 'article'], path: '/news-media', description: 'Latest news and media coverage' },
    { title: 'Van Dyk Company', keywords: ['about', 'company', 'history', 'van dyk', 'founded'], path: '/about', description: 'Learn about Van Dyk Recycling Solutions' },
    { title: 'Careers', keywords: ['career', 'job', 'work', 'employment', 'technician', 'installer'], path: '/careers', description: 'Join our innovative team' },
    { title: 'Contact Information', keywords: ['contact', 'phone', 'email', 'address', 'location', 'norwalk'], path: '/contact', description: 'Get in touch with our team' }
  ];

  // Real-time search as user types
  useEffect(() => {
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      const results = searchDatabase.filter(item =>
        item.title.toLowerCase().includes(query) ||
        item.keywords.some(keyword => keyword.includes(query)) ||
        item.description.toLowerCase().includes(query)
      ).slice(0, 5); // Limit to 5 results
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchResults.length > 0) {
      window.location.href = searchResults[0].path;
      setSearchQuery('');
      setSearchOpen(false);
    }
  };

  const selectSearchResult = (result: any) => {
    window.location.href = result.path;
    setSearchQuery('');
    setSearchOpen(false);
  };

  const navItems: NavItem[] = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Equipment', path: '/equipment' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'News & Media', path: '/news-media' },
    { 
      name: 'Contact Us', 
      path: '/contact',
      dropdown: [
        { name: 'Contact Us', path: '/contact' },
        { name: 'Van Dyk Recycling Solutions', path: '/about' },
        { name: 'Careers', path: '/careers' }
      ]
    }
  ];

  return (
    <nav className={`w-full z-50 transition-all duration-300 bg-vd-blue shadow-lg`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/Images/VDRS-lockup-mod-8-19-22-350.png"
              alt="Van Dyk Recycling Solutions Logo"
              className="h-12 transition-all duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.dropdown ? (
                <div key={item.name} className="relative group">
                  <button 
                    className={`px-3 py-2 text-sm font-medium transition-colors cursor-pointer ${
                      location.pathname.startsWith(item.path) || 
                      location.pathname === '/contact' || 
                      location.pathname === '/about' ||
                      location.pathname === '/careers'
                        ? 'text-vd-orange font-semibold' 
                        : 'text-white hover:text-vd-orange'
                    }`}
                  >
                    {item.name}
                  </button>
                  <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 z-20 opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300 invisible origin-top transform scale-y-95 group-hover:scale-y-100">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.path}
                        to={dropdownItem.path}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-vd-orange"
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
                  className={`${
                    location.pathname === item.path
                      ? 'text-vd-orange font-semibold' 
                      : 'text-white hover:text-vd-orange'
                  } transition-colors duration-200`}
                >
                  {item.name}
                </Link>
              )
            ))}

            {/* Search */}
            <div className="relative search-container">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="text-white hover:text-vd-orange transition-colors p-2"
              >
                <Search className="w-5 h-5" />
              </button>
              
              {searchOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute right-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-200 z-20"
                >
                  <div className="p-4">
                    <form onSubmit={handleSearch} className="flex space-x-2 mb-4">
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search our site..."
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vd-orange focus:border-vd-orange text-gray-900"
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
                        <div className="text-xs text-gray-500 mb-2">Search Results:</div>
                        {searchResults.map((result, index) => (
                          <button
                            key={index}
                            onClick={() => selectSearchResult(result)}
                            className="w-full text-left p-3 hover:bg-gray-50 rounded-lg transition-colors border-b border-gray-100 last:border-b-0"
                          >
                            <div className="font-medium text-vd-blue">{result.title}</div>
                            <div className="text-sm text-gray-600">{result.description}</div>
                          </button>
                        ))}
                      </div>
                    )}
                    
                    {searchQuery && searchResults.length === 0 && (
                      <div className="border-t border-gray-200 pt-4">
                        <div className="text-sm text-gray-500 text-center">
                          No results found. Try searching for services, equipment, or solutions.
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </div>

            <a
              href="tel:+12039671100"
              className={`ml-4 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm px-4 py-2 rounded-lg font-semibold transition-colors duration-200`}
            >
              CALL NOW: (203) 967-1100
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg text-white hover:bg-vd-blue-dark transition-colors`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto" },
          closed: { opacity: 0, height: 0 }
        }}
        className="md:hidden overflow-hidden bg-gradient-to-b from-vd-blue-dark to-vd-blue"
      >
        <div className="container mx-auto px-4 py-4 space-y-4">
          {/* Mobile Search */}
          <div className="mb-4">
            <form onSubmit={handleSearch} className="flex space-x-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-gray-900"
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
                <button 
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-left px-4 py-2 text-vd-orange font-semibold"
                >
                  {item.name}
                </button>
                {item.dropdown.map((dropdownItem) => (
                  <Link
                    key={dropdownItem.path}
                    to={dropdownItem.path}
                    onClick={() => setIsOpen(false)}
                    className="block px-8 py-2 text-gray-200 hover:text-vd-orange transition-colors duration-200"
                  >
                    {dropdownItem.name}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block ${
                  location.pathname === item.path
                    ? 'text-vd-orange font-semibold'
                    : 'text-gray-200 hover:text-vd-orange'
                } transition-colors duration-200`}
              >
                {item.name}
              </Link>
            )
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;