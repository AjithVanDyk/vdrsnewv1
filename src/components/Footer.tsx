import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';

// Define types for the component
interface FooterLink {
  to: string;
  label: string;
  isExternal?: boolean;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const Footer: React.FC = () => {
  // Define footer sections mirroring navigation structure
  const footerSections: FooterSection[] = useMemo(() => [
    {
      title: 'Support',
      links: [
        { to: '/support', label: 'Design & Consultation' },
        { to: '/support', label: 'Equipment Installation' },
        { to: '/support', label: 'Training Programs' },
        { to: '/support', label: 'Parts & Service' }
      ]
    },
    {
      title: 'Equipment',
      links: [
        { to: '/equipment', label: 'Bollegraaf Balers' },
        { to: '/equipment', label: 'TOMRA Optical Sorting' },
        { to: '/equipment', label: 'Lubo Screens' },
        { to: '/equipment', label: 'All Equipment' }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { to: '/solutions', label: 'Single Stream Recycling' },
        { to: '/solutions', label: 'Plastics Recycling' },
        { to: '/solutions', label: 'Material Recovery' },
        { to: '/solutions', label: 'All Solutions' }
      ]
    },
    {
      title: 'Services',
      links: [
        { to: '/support', label: 'Support & Training' },
        { to: '/pmi', label: 'PMI Services' },
        { to: '/quote', label: 'Get Quote' },
        { to: '/test-center', label: 'Test Center' },
        { to: '/training-schedule', label: 'Training Schedule' }
      ]
    }
  ], []);

  // Social media links with Facebook added
  const socialLinks = useMemo(() => [
    {
      icon: Facebook,
      href: 'https://www.facebook.com/vandykrecycling/',
      label: 'Facebook'
    },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/vandykrecyclingsolutions/',
      label: 'Instagram'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/company/van-dyk-recycling-solutions',
      label: 'LinkedIn'
    },
    {
      icon: Twitter,
      href: 'https://twitter.com/vandykrecycling',
      label: 'Twitter'
    },
    {
      icon: Youtube,
      href: 'https://www.youtube.com/@VanDykRecyclingSolns',
      label: 'YouTube'
    }
  ], []);

  return (
    <footer className="bg-gradient-to-b from-vd-blue to-vd-blue-dark text-white" role="contentinfo">
      <div className="container mx-auto py-6 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
            role="region"
            aria-label="Company Information"
          >
            <img 
              src="/Images/van-dyk-logo-white.svg" 
              alt="Van Dyk Recycling Solutions Logo" 
              className="h-60 w-auto mb-3" 
              loading="lazy"
              decoding="async"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                // Try fallback to PNG if SVG fails
                if (target.src.includes('.svg')) {
                  target.src = '/Images/van-dyk-logo-white.png';
                } else {
                  target.style.display = 'none';
                }
              }} 
            />
            <p className="text-white mb-3 text-sm leading-relaxed">
              Leading provider of recycling equipment and solutions since 1984. Innovative technology and expert support for sustainable operations.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-1 mb-3">
              <div className="flex items-center">
                <Phone className="w-3 h-3 text-vd-orange mr-2" />
                <a href="tel:+12039671100" className="text-white hover:text-vd-orange transition-colors text-sm">
                  (203) 967-1100
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-3 h-3 text-vd-orange mr-2" />
                <a href="mailto:info@vdrs.com" className="text-white hover:text-vd-orange transition-colors text-sm">
                  info@vdrs.com
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="w-3 h-3 text-vd-orange mr-2 mt-0.5" />
                <address className="text-white not-italic text-xs">
                  360 Dr. Martin Luther King Jr. Drive<br />
                  Norwalk, CT 06854
                </address>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xs font-semibold mb-1 text-vd-orange">Follow Us</h4>
              <div className="flex space-x-2">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-vd-orange transition-colors duration-200 p-1 rounded hover:bg-white/10"
                    aria-label={`Follow us on ${label} (opens in new tab)`}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Footer Navigation Sections */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              role="region"
              aria-label={`${section.title} links`}
            >
              <h3 className="text-sm font-semibold mb-2 text-vd-orange">{section.title}</h3>
              <ul className="space-y-0.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {link.isExternal ? (
                      <a 
                        href={link.to}
                        className="text-white hover:text-vd-orange transition-colors duration-200 text-xs"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${link.label} (opens in new tab)`}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link 
                        to={link.to}
                        className="text-white hover:text-vd-orange transition-colors duration-200 text-xs"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* About Us Horizontal Section */}
        <div className="border-t border-white/10 mt-4 pt-4">
          <h3 className="text-sm font-semibold mb-3 text-vd-orange text-center">About Us</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="text-white hover:text-vd-orange transition-colors duration-200 text-xs">
              Contact Us
            </Link>
            <Link to="/about" className="text-white hover:text-vd-orange transition-colors duration-200 text-xs">
              Overview
            </Link>
            <Link to="/careers" className="text-white hover:text-vd-orange transition-colors duration-200 text-xs">
              Careers
            </Link>
          <Link to="/news-media" className="text-white hover:text-vd-orange transition-colors duration-200 text-xs">
            News & Media
          </Link>
          <Link to="/privacy-policy" className="text-white hover:text-vd-orange transition-colors duration-200 text-xs">
            Privacy Policy
          </Link>
          <Link to="/sitemap" className="text-white hover:text-vd-orange transition-colors duration-200 text-xs">
            Site Map
          </Link>
          </div>
        </div>

        <div className="border-t border-white/10 mt-4 pt-3 text-center text-white">
          <p className="text-xs">&copy; {new Date().getFullYear()} Van Dyk Recycling Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;