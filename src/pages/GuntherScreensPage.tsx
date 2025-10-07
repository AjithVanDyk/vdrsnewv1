import React from 'react';
import EquipmentPageTemplate from '../components/EquipmentPageTemplate';

const GuntherScreensPage: React.FC = () => {
  const equipment = {
    id: 7,
    name: 'GÜNTHER Screens',
    image: '/Images/gunther-screens-new.jpg',
    description: 'Advanced screening technology with innovative design for efficient material separation and sizing. GÜNTHER screens deliver superior performance in waste processing operations.',
    features: [
      'Innovative screening technology',
      'High-efficiency material separation',
      'Multiple screen configurations',
      'Self-cleaning screen design',
      'Low maintenance requirements',
      'Energy efficient operation',
      'Modular construction',
      'Easy installation and setup',
      'Durable construction materials',
      'Precise sizing capabilities'
    ],
    specifications: {
      'Screen Area': 'Up to 150 sq ft per deck',
      'Throughput': 'Up to 80 tons per hour',
      'Screen Decks': '1-3 deck configurations',
      'Aperture Size': '1mm to 150mm',
      'Power Consumption': 'Energy efficient design',
      'Maintenance': 'Low maintenance requirements',
      'Construction': 'Modular design',
      'Materials': 'High-grade steel construction',
      'Installation': 'Easy setup and installation',
      'Warranty': '2-year comprehensive warranty'
    },
    applications: [
      'Material recovery facilities (MRF)',
      'Single stream recycling',
      'Construction and demolition waste',
      'Municipal solid waste processing',
      'Industrial waste management',
      'Aggregate processing',
      'Compost screening',
      'Biomass processing',
      'Mining operations',
      'Agricultural waste processing'
    ],
    gallery: [
      '/Images/gunther-screens-new.jpg',
      '/Images/gunther-splitter.jpg'
    ],
    testimonials: [
      {
        name: 'Robert Kim',
        company: 'Advanced Screening Solutions',
        quote: 'GÜNTHER screens have revolutionized our screening efficiency. Outstanding performance.',
        rating: 5
      },
      {
        name: 'Susan Lee',
        company: 'EcoMaterials Processing',
        quote: 'Excellent screening technology with minimal maintenance. Highly recommended.',
        rating: 5
      },
      {
        name: 'David Park',
        company: 'Green Valley Recycling',
        quote: 'Superior material separation and sizing capabilities. Best investment we\'ve made.',
        rating: 5
      }
    ]
  };

  return <EquipmentPageTemplate equipment={equipment} />;
};

export default GuntherScreensPage;
