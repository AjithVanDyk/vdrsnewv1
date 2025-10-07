import React from 'react';
import SolutionPageTemplate from '../components/SolutionPageTemplate';

const BollegraafBalersSolutionPage: React.FC = () => {
  const solution = {
    id: 5,
    name: 'Bollegraaf Balers',
    image: '/Images/bollegraaf-new-1.jpg',
    description: 'Industry-leading Bollegraaf balers with proven performance in recycling operations. As the exclusive representative of Bollegraaf Recycling Solutions in North and Latin American markets, VAN DYK provides turnkey baler solutions with unmatched speed, productivity, and efficiency.',
    features: [
      'Single ram design uses 1/3 power of two-ram balers',
      'Operates automatically without dedicated operator',
      'Instant material switching capability',
      'Denser, uniform bales with pre-press flap',
      'Production speeds over 35 tph',
      '50% reduction in electricity costs',
      'Low maintenance robust design',
      'No-shear compression technology',
      'Flexible material processing',
      'Integrated tying system with 5 wires per bale',
      'Visual SCADA control system',
      'Ram on wheels technology'
    ],
    specifications: {
      'Production Speed': 'Over 35 tons per hour',
      'Power Efficiency': '50% reduction vs two-ram balers',
      'Bale Density': 'Superior compression with pre-press flap',
      'Operation': 'Fully automated',
      'Maintenance': 'Low maintenance robust design',
      'Material Switching': 'Instant capability',
      'Design': 'Single ram, no-shear',
      'Wire System': '5 wires per bale, every time',
      'Control System': 'Visual SCADA interface',
      'Warranty': '2-year comprehensive warranty'
    },
    applications: [
      'Material recovery facilities (MRF)',
      'Single stream recycling',
      'Cardboard processing',
      'Plastic container baling',
      'Steel container processing',
      'Aluminum container baling',
      'Fiber material processing',
      'Commercial recycling centers',
      'Industrial waste management',
      'Municipal recycling programs'
    ],
    gallery: [
      '/Images/bollegraaf-new-1.jpg',
      '/Images/bollegraaf-products.jpg',
      '/Images/bollegraaf-baler.jpg'
    ],
    testimonials: [
      {
        name: 'John Smith',
        company: 'Recycling Solutions Inc',
        quote: 'Bollegraaf balers have transformed our operations. The single ram design saves us 50% on electricity costs.',
        rating: 5
      },
      {
        name: 'Sarah Johnson',
        company: 'EcoMaterials Processing',
        quote: 'Outstanding productivity with over 35 tph production speed. The pre-press flap eliminates shearing completely.',
        rating: 5
      },
      {
        name: 'Mike Rodriguez',
        company: 'Green Valley Recycling',
        quote: 'Best baler investment we\'ve made. Automated operation with no dedicated operator needed.',
        rating: 5
      }
    ]
  };

  return <SolutionPageTemplate solution={solution} />;
};

export default BollegraafBalersSolutionPage;
