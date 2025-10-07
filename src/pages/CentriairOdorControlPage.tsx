import React from 'react';
import EquipmentPageTemplate from '../components/EquipmentPageTemplate';

const CentriairOdorControlPage: React.FC = () => {
  const equipment = {
    id: 8,
    name: 'Centriair Odor Control',
    image: '/Images/centriair-new-1.jpg',
    description: 'Advanced odor control systems for waste processing facilities. Centriair technology effectively eliminates odors while maintaining operational efficiency.',
    features: [
      'Advanced odor elimination technology',
      'Multi-stage filtration system',
      'High-efficiency odor removal',
      'Automated operation',
      'Low maintenance requirements',
      'Energy efficient design',
      'Modular system configuration',
      'Easy installation and setup',
      'Durable construction materials',
      'Comprehensive odor control'
    ],
    specifications: {
      'Air Flow Capacity': 'Up to 50,000 CFM',
      'Odor Removal Efficiency': '99.9%+ elimination',
      'Filtration Stages': 'Multi-stage system',
      'Power Consumption': 'Energy efficient design',
      'Maintenance': 'Low maintenance requirements',
      'Construction': 'Modular design',
      'Materials': 'Corrosion-resistant construction',
      'Installation': 'Easy setup and installation',
      'Control': 'Automated operation',
      'Warranty': '2-year comprehensive warranty'
    },
    applications: [
      'Material recovery facilities (MRF)',
      'Composting facilities',
      'Food waste processing',
      'Municipal waste processing',
      'Industrial waste management',
      'Transfer stations',
      'Landfill operations',
      'Anaerobic digestion plants',
      'Waste-to-energy facilities',
      'Commercial waste processing'
    ],
    gallery: [
      '/Images/centriair-new-1.jpg',
      '/Images/centriair-equipment.jpg',
      '/Images/centriair-installation.jpg'
    ],
    testimonials: [
      {
        name: 'Jennifer Chen',
        company: 'Odor Solutions Inc',
        quote: 'Centriair odor control has transformed our facility operations. Exceptional odor elimination.',
        rating: 5
      },
      {
        name: 'Michael Torres',
        company: 'Clean Air Systems',
        quote: 'Outstanding odor control performance with minimal maintenance requirements.',
        rating: 5
      },
      {
        name: 'Lisa Anderson',
        company: 'EcoAir Technologies',
        quote: 'Excellent investment. The odor control system exceeds all expectations.',
        rating: 5
      }
    ]
  };

  return <EquipmentPageTemplate equipment={equipment} />;
};

export default CentriairOdorControlPage;
