import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Recycle, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

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
  // Handle smooth scroll behavior
  useEffect(() => {
    const originalStyle = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = originalStyle;
    };
  }, []);

  // Define footer sections with proper typing
  const footerSections: FooterSection[] = [
    {
      title: 'Equipment',
      links: [
        { to: '/equipment', label: 'Bollegraaf' },
        { to: '/equipment', label: 'Lubo Screening' },
        { to: '/equipment', label: 'TOMRA Optical Sorting' },
        { to: '/equipment', label: 'Pellenc ST Optical Sorting' },
        { to: '/equipment', label: 'Walair Density Separation' },
        { to: '/equipment', label: 'Smicon Food Waste Depackagers' },
        { to: '/equipment', label: 'GUNTHER Screens' },
        { to: '/equipment', label: 'Centriair' },
        { to: '/equipment', label: 'Greyparrot AI' },
        { to: '/equipment', label: 'Densimetric Table' },
        { to: '/equipment', label: 'BeeFoam Dust Suppression System' },
        { to: '/equipment', label: 'Reckelberg Environmental Technologies' },
        { to: '/equipment', label: 'Certified Pre-Owned Equipment' }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { to: '/solutions', label: 'Single Stream Recycling' },
        { to: '/solutions', label: 'Plastics Recycling' },
        { to: '/solutions', label: 'Organics Processing' },
        { to: '/solutions', label: 'Food Waste Depackaging' },
        { to: '/solutions', label: 'MSW Processing' },
        { to: '/solutions', label: 'Commercial Waste' },
        { to: '/solutions', label: 'C&D Recycling' },
        { to: '/solutions', label: 'Multi-MRF Systems' },
        { to: '/solutions', label: 'Waste to Energy Recycling' },
        { to: '/solutions', label: 'E-Scrap Recycling' },
        { to: '/solutions', label: 'Glass Cleanup' },
        { to: '/solutions', label: 'Composting' },
        { to: '/solutions', label: 'Bollegraaf Balers' },
        { to: '/solutions', label: 'AI-Based Waste Analytics' },
        { to: '/solutions', label: 'Odor Control' },
        { to: '/solutions', label: 'EV Battery Recycling' }
      ]
    },
    {
      title: 'Support',
      links: [
        { to: '/support', label: 'Support' },
        { to: '/support', label: 'Parts' },
        { to: '/support', label: 'Preventive Maintenance' },
        { to: '/support', label: 'Remote Maintenance and Troubleshooting' },
        { to: '/support', label: 'Training' },
        { to: '/support', label: 'VAN DYK Technology & Material Test Center' },
        { to: '/support', label: 'Van Dyk Direct' }
      ]
    },
    {
      title: 'Services',
      links: [
        { to: '/services', label: 'Turnkey Design' },
        { to: '/services', label: 'Retrofits' }
      ]
    },
    {
      title: 'About Us',
      links: [
        { to: '/about', label: 'About Us' },
        { to: '/about/beginnings', label: 'Beginnings' },
        { to: '/about/work-for-us', label: 'Work For Us' }
      ]
    },
    {
      title: 'News & Media',
      links: [
        { to: '/news-media', label: 'Van Dyk in the News' },
        { to: '/news-media/videos', label: 'Videos' },
        { to: '/news-media/expert-tips', label: 'Expert Tips' },
        { to: '/news-media/customers', label: 'Our Customers in the News' }
      ]
    }
  ];

  // Social media links with proper typing
  const socialLinks = [
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            role="region"
            aria-label="Company Information"
          >
            <h3 className="text-lg font-semibold mb-4 text-vd-orange">Company Info</h3>
            <p className="text-gray-200 mb-4">
              Leading provider of recycling equipment and solutions since 1984. We help businesses and municipalities achieve their sustainability goals through innovative technology and expert support.
            </p>
            <div className="flex flex-col space-y-4 mt-4">
              <img 
                src="/Images/VDRS-lockup-mod-8-19-22-350.png" 
                alt="Van Dyk Recycling Solutions Logo" 
                className="h-12 w-auto" 
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }} 
              />
              <img 
                src="/Images/image-1749759453479.png" 
                alt="ISO Certification" 
                className="h-16 w-auto" 
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }} 
              />
            </div>
          </motion.div>

          {/* Footer Sections */}
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
                        className="text-gray-200 hover:text-vd-orange transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${link.label} (opens in new tab)`}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link 
                        to={link.to}
                        className="text-gray-200 hover:text-vd-orange transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            role="region"
            aria-label="Contact Information"
          >
            <h3 className="text-lg font-semibold mb-4 text-vd-orange">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-vd-orange mt-0.5 mr-2 flex-shrink-0" aria-hidden="true" />
                <address className="text-gray-200 not-italic">
                  360 Dr. Martin Luther King Jr. Drive<br />
                  Norwalk, CT 06854<br />
                  United States
                </address>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-vd-orange mt-0.5 mr-2 flex-shrink-0" aria-hidden="true" />
                <a 
                  href="tel:+12039671100" 
                  className="text-gray-200 hover:text-vd-orange transition-colors duration-200"
                  aria-label="Call us at +1 (203) 967-1100"
                >
                  +1 (203) 967-1100
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-vd-orange mt-0.5 mr-2 flex-shrink-0" aria-hidden="true" />
                <a 
                  href="mailto:info@vdrs.com" 
                  className="text-gray-200 hover:text-vd-orange transition-colors duration-200"
                  aria-label="Email us at info@vdrs.com"
                >
                  info@vdrs.com
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-vd-orange mt-0.5 mr-2 flex-shrink-0" aria-hidden="true" />
                <span className="text-gray-200">shipping@vdrs.com (Warehouse)</span>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-vd-orange mt-0.5 mr-2 flex-shrink-0" aria-hidden="true" />
                <span className="text-gray-200">service@vdrs.com (Technical Support & Parts)</span>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2 text-vd-orange">Follow Us</h4>
              <div className="flex space-x-4" role="navigation" aria-label="Social media links">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-vd-orange transition-colors duration-200"
                    aria-label={`Follow us on ${label} (opens in new tab)`}
                  >
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Van Dyk Recycling Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;