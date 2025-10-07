import React from 'react';
import EquipmentPageTemplate from '../components/EquipmentPageTemplate';

const BollegraafPage: React.FC = () => {
  const equipment = {
    id: 1,
    name: 'Bollegraaf Balers',
    image: '/Images/bollegraaf-new-1.jpg',
    description: 'Industry-leading single ram balers with no-shear design for maximum efficiency and density. Single ram uses 1/3 power of two-ram balers and operates automatically without dedicated operator.',
    features: [
      'Single ram uses 1/3 power of two-ram balers',
      'Operates automatically without dedicated operator',
      'Instant material switching capability',
      'Denser, uniform bales with pre-press flap',
      'Production speeds over 35 tph',
      '50% reduction in electricity costs',
      'Low maintenance robust design',
      'No-shear compression technology',
      'Flexible material processing (fiber, cardboard, plastic, steel, aluminum)',
      'Pre-press flap eliminates shearing'
    ],
    specifications: {
      'Production Speed': 'Over 35 tons per hour',
      'Power Efficiency': '50% reduction vs two-ram balers',
      'Bale Density': 'Superior compression with pre-press flap',
      'Operation': 'Fully automated',
      'Maintenance': 'Low maintenance robust design',
      'Material Switching': 'Instant capability',
      'Design': 'Single ram, no-shear',
      'Materials': 'Fiber, cardboard, plastic, steel, aluminum',
      'Bale Weight': 'Up to 2,200 lbs',
      'Warranty': 'Comprehensive 2-year warranty'
    },
    applications: [
      'Material recovery facilities (MRF)',
      'Single stream recycling',
      'Cardboard and paper processing',
      'Plastic baling operations',
      'Metal recycling facilities',
      'Industrial waste management',
      'Municipal recycling centers',
      'Commercial waste processing',
      'Construction waste management',
      'Agricultural waste processing'
    ],
    gallery: [
      '/Images/bollegraaf-new-1.jpg',
      '/Images/bollegraaf-products.jpg',
      '/Images/bollegraaf-baler.jpg'
    ],
    testimonials: [
      {
        name: 'Michael Brown',
        company: 'Metro Recycling Solutions',
        quote: 'The Bollegraaf baler has revolutionized our operation. The energy savings alone paid for the equipment in 18 months.',
        rating: 5
      },
      {
        name: 'Jennifer Davis',
        company: 'EcoMaterials Inc.',
        quote: 'Outstanding performance and reliability. The single ram design is incredibly efficient.',
        rating: 5
      },
      {
        name: 'Carlos Martinez',
        company: 'Green Valley Waste',
        quote: 'Best baler we\'ve ever used. Low maintenance and consistent performance.',
        rating: 5
      }
    ]
  };

  return <EquipmentPageTemplate equipment={equipment} />;
};

export default BollegraafPage;
