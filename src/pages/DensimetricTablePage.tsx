import React from 'react';
import EquipmentPageTemplate from '../components/EquipmentPageTemplate';

const DensimetricTablePage: React.FC = () => {
  const equipment = {
    id: 10,
    name: 'Densimetric Table',
    image: '/Images/densimetric-table-new.jpg',
    description: 'Advanced densimetric separation technology for efficient material sorting based on density differences. Our densimetric tables provide precise separation of materials with varying densities.',
    features: [
      'Density-based material separation',
      'High-precision sorting technology',
      'Multiple density separation stages',
      'Automated material handling',
      'Low maintenance design',
      'Energy efficient operation',
      'Modular construction',
      'Easy integration capabilities',
      'Precise density control',
      'Robust construction materials'
    ],
    specifications: {
      'Separation Accuracy': '99%+ density-based sorting',
      'Throughput': 'Up to 40 tons per hour',
      'Density Range': '0.1 to 6.0 g/cm³',
      'Separation Stages': '1-2 stage configurations',
      'Power Consumption': 'Low energy consumption',
      'Maintenance': 'Minimal maintenance required',
      'Construction': 'Modular design',
      'Integration': 'Easy system integration',
      'Control': 'Automated density control',
      'Warranty': '2-year comprehensive warranty'
    },
    applications: [
      { name: 'Compost refining', link: '/solutions/composting-densimetric-tables' },
      { name: 'Organics processing', link: '/solutions/organics-processing' }
    ],
    videos: [
      'https://youtu.be/5VvtScst8yI', // Compost Cleaning with an Allgaier Densimetric Table
      'https://youtu.be/uyoDglUAzWw'  // New Densimetric Table
    ],
    gallery: [
      '/Images/densimetric-table-new.jpg'
    ],
    testimonials: [
      {
        name: 'Jennifer Chen',
        company: 'Density Solutions Inc',
        quote: 'Densimetric table technology has transformed our material sorting accuracy.',
        rating: 5
      },
      {
        name: 'Michael Torres',
        company: 'Precision Recycling',
        quote: 'Outstanding density separation performance with minimal maintenance requirements.',
        rating: 5
      },
      {
        name: 'Lisa Anderson',
        company: 'EcoSort Technologies',
        quote: 'Excellent investment. The density separation accuracy exceeds all expectations.',
        rating: 5
      }
    ]
  };

  return <EquipmentPageTemplate equipment={equipment} />;
};

export default DensimetricTablePage;
