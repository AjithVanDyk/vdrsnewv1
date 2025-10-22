import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Recycle } from 'lucide-react';

interface NavItem {
  name: string;
  path: string;
  dropdown?: { name: string; path: string; }[];
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { name: 'Home', path: '/' },
    { 
      name: 'About', 
      path: '/about',
      dropdown: [
        { name: 'About Us', path: '/about' },
        { name: 'Beginnings', path: '/about/beginnings' },
        { name: 'Work for Us', path: '/about/work-for-us' },
      ]
    },
    { name: 'Services', path: '/services' },
    { name: 'Equipment', path: '/equipment' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'News & Media', path: '/news-media' },
    { name: 'Support', path: '/support' },
    { name: 'Contact', path: '/contact' }
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
                      location.pathname.startsWith(item.path)
                        ? 'text-vd-orange font-semibold' 
                        : 'text-white hover:text-vd-orange'
                    }`}
                  >
                    {item.name}
                  </button>
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20 opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300 invisible origin-top transform scale-y-95 group-hover:scale-y-100">
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
          {navItems.map((item) => (
            item.dropdown ? (
              <div key={item.name} className="space-y-2">
                <button 
                  onClick={() => setIsOpen(false)} // Close mobile menu when clicking parent
                  className="block w-full text-left px-4 py-2 text-vd-orange font-semibold"
                >
                  {item.name}
                </button>
                {
                  item.dropdown.map((dropdownItem) => (
                    <Link
                      key={dropdownItem.path}
                      to={dropdownItem.path}
                      onClick={() => setIsOpen(false)}
                      className="block px-8 py-2 text-gray-200 hover:text-vd-orange transition-colors duration-200"
                    >
                      {dropdownItem.name}
                    </Link>
                  ))
                }
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
          {/* Removed direct Contact Us link as it's part of navItems now */}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;