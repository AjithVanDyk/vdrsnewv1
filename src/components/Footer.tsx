import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

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
  const footerSections: FooterSection[] = [
    {
      title: 'Services',
      links: [
        { to: '/services', label: 'Design & Consultation' },
        { to: '/services', label: 'Equipment Installation' },
        { to: '/services', label: 'Training Programs' },
        { to: '/services', label: 'Parts & Service' }
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
      title: 'Company',
      links: [
        { to: '/about', label: 'Van Dyk Recycling Solutions' },
        { to: '/careers', label: 'Careers' },
        { to: '/news-media', label: 'News & Media' },
        { to: '/contact', label: 'Contact Us' }
      ]
    }
  ];

  // Social media links with Facebook added
  const socialLinks = [
    {
      icon: Facebook,
      href: 'https://www.facebook.com/vandykrecycling/',
      label: 'Facebook'
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
      href: 'https://youtube.com/c/vandykrecycling',
      label: 'YouTube'
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-vd-blue-dark to-vd-blue text-white" role="contentinfo">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
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
              src="/Images/VDRS-lockup-mod-8-19-22-350.png" 
              alt="Van Dyk Recycling Solutions Logo" 
              className="h-12 w-auto mb-4" 
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }} 
            />
            <p className="text-gray-200 mb-6 leading-relaxed">
              Leading provider of recycling equipment and solutions since 1984. Innovative technology and expert support for sustainable operations.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-vd-orange mr-3" />
                <a href="tel:+12039671100" className="text-gray-200 hover:text-vd-orange transition-colors">
                  (203) 967-1100
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 text-vd-orange mr-3" />
                <a href="mailto:info@vdrs.com" className="text-gray-200 hover:text-vd-orange transition-colors">
                  info@vdrs.com
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 text-vd-orange mr-3 mt-0.5" />
                <address className="text-gray-200 not-italic text-sm">
                  360 Dr. Martin Luther King Jr. Drive<br />
                  Norwalk, CT 06854
                </address>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3 text-vd-orange">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-vd-orange transition-colors duration-200 p-2 rounded-lg hover:bg-white/10"
                    aria-label={`Follow us on ${label} (opens in new tab)`}
                  >
                    <Icon className="w-5 h-5" />
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
              <h3 className="text-lg font-semibold mb-4 text-vd-orange">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {link.isExternal ? (
                      <a 
                        href={link.to}
                        className="text-gray-200 hover:text-vd-orange transition-colors duration-200 text-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${link.label} (opens in new tab)`}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link 
                        to={link.to}
                        className="text-gray-200 hover:text-vd-orange transition-colors duration-200 text-sm"
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

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Van Dyk Recycling Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;