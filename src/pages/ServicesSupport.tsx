import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, Wrench, GraduationCap, Package, Phone, Mail, 
  ArrowRight, ExternalLink, CheckCircle,
  Calendar, MapPin, Clock, Users, X,
  Settings, Eye
} from 'lucide-react';

const ServicesSupport = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const servicesCards = [
    {
      id: 1,
      title: 'Design & Consultation',
      description: 'Our engineering team partners with you from day one—concept, layouts, and performance modeling—to specify the right equipment and throughput for your material stream.',
      features: [
        '3D Layout Modeling',
        'Throughput Analysis', 
        'ROI Projections',
        'Test Center Validation'
      ],
      cta: 'Visit Our Test Center',
      ctaLink: '/test-center',
      image: '/Images/allgaire.jpg',
      imageAlt: 'Material Test Center loop line with optical sorters',
      icon: Search
    },
    {
      id: 2,
      title: 'Equipment Installation & Startup',
      description: 'Factory-trained crews manage rigging, electrical and controls integration, safety sign-off, and commissioning.',
      features: [
        'Factory-Trained Crews',
        'Safety Certification',
        'Performance Testing', 
        'Operator Training'
      ],
      cta: 'See Installation Process',
      ctaLink: '/services/installation',
      image: '/Images/image-1749759502636.png',
      imageAlt: 'Equipment installation and commissioning process',
      icon: Wrench
    },
    {
      id: 3,
      title: 'Training',
      description: 'Operator and maintenance training delivered at your site or at Van Dyk University. Courses cover balers, TOMRA AUTOSORT®, and system best practices.',
      features: [
        'On-site Training',
        'Van Dyk University',
        'Certification Programs',
        'Ongoing Support'
      ],
      secondaryNote: 'Upcoming sessions available; seats limited.',
      cta: 'View Training Schedule',
      ctaAction: () => setActiveModal('training'),
      image: '/Images/Van%20Dyk%20University.jpg',
      imageAlt: 'Van Dyk University training facility',
      icon: GraduationCap
    },
    {
      id: 4,
      title: 'Parts & Service (After-Sales)',
      description: 'We stock over $35 million in OEM parts in our Norwalk, CT warehouse for same-day pickup or shipment (M–F, orders before 5:30 PM).',
      features: [
        '$35M Inventory',
        'Same-Day Shipping',
        '98% Availability',
        '24×7×365 Support'
      ],
      cta: 'Shop Van Dyk Direct',
      ctaLink: 'https://www.shopvandykdirect.com/',
      ctaExternal: true,
      secondaryCta: 'Contact Service',
      secondaryCtaLink: 'mailto:service@vdrs.com',
      image: '/Images/image-1749759479881.png',
      imageAlt: 'Shelved OEM parts inventory in Norwalk, CT',
      icon: Package
    }
  ];

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
      image: '/Images/image-1749759495211.png',
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
      image: '/Images/image-1749759479881.png',
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
      ctaAction: () => setActiveModal('pmi'),
      image: '/Images/image-1749759487003.png',
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
      image: '/Images/image-1749759502636.png',
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
      image: '/Images/test-center-facility.jpg',
      imageAlt: 'Material Testing Center with recycling equipment',
      icon: Eye
    }
  ];

  const renderCard = (card: any, index: number) => (
    <motion.div
      key={card.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow group h-full flex flex-col"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={card.image}
          alt={card.imageAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-vd-blue-dark/80 to-transparent" />
        <div className="absolute top-4 left-4">
          <card.icon className="w-8 h-8 text-vd-orange" />
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-vd-blue mb-3">{card.title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed flex-grow">{card.description}</p>

        {card.cta && (
          card.ctaAction ? (
            <button
              onClick={card.ctaAction}
              className="text-vd-orange font-medium inline-flex items-center hover:text-vd-orange-alt transition-colors"
            >
              {card.cta}
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          ) : card.ctaExternal ? (
            <a
              href={card.ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-vd-orange font-medium inline-flex items-center hover:text-vd-orange-alt transition-colors"
            >
              {card.cta}
              <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          ) : (
            <Link
              to={card.ctaLink}
              className="text-vd-orange font-medium inline-flex items-center hover:text-vd-orange-alt transition-colors"
            >
              {card.cta}
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          )
        )}

        {card.secondaryCta && (
          <a
            href={card.secondaryCtaLink}
            className="block text-sm text-vd-blue hover:text-vd-orange transition-colors"
          >
            {card.secondaryCta}
          </a>
        )}
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="relative bg-gradient-to-r from-vd-blue-dark to-vd-blue text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/Images/image-1749759459073.png')] bg-center bg-no-repeat bg-cover opacity-20" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Services & Support</h1>
            <p className="text-xl text-gray-100 mb-8 leading-relaxed">
              Comprehensive recycling solutions from design and startup to training and 24×7 after-sales support
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-vd-orange hover:bg-vd-orange-alt text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <a
                href="tel:2039671100"
                className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center border border-white/20"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call: 203-967-1100
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-vd-blue mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            End-to-end solutions for your recycling operations
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesCards.map((card, index) => renderCard(card, index))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-vd-blue mb-4">Support</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to keep running—on call, online, and on site
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportCards.map((card, index) => renderCard(card, index))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {/* Example for modals, only render if active */}
        {activeModal === 'pmi' && <div>PMI Modal</div>}
        {activeModal === 'training' && <div>Training Modal</div>}
      </AnimatePresence>
    </div>
  );
};

export default ServicesSupport;
