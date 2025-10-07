import React from 'react';
import EquipmentPageTemplate from '../components/EquipmentPageTemplate';

const LuboScreeningPage: React.FC = () => {
  const equipment = {
    id: 2,
    name: 'Lubo StarScreen® Technology',
    image: '/Images/lubo-screening-new.jpg',
    description: 'Advanced screening technology with StarScreen® design for efficient material separation and sizing. Lubo screens deliver superior performance in waste processing operations.',
    features: [
      'StarScreen® patented design',
      'High-efficiency material separation',
      'Multiple screen deck configurations',
      'Self-cleaning screen technology',
      'Low maintenance requirements',
      'Energy efficient operation',
      'Modular construction',
      'Easy installation and setup',
      'Durable construction materials',
      'Precise sizing capabilities'
    ],
    specifications: {
      'Screen Area': 'Up to 200 sq ft per deck',
      'Throughput': 'Up to 100 tons per hour',
      'Screen Decks': '1-4 deck configurations',
      'Aperture Size': '0.5mm to 200mm',
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
      '/Images/lubo-screening-new.jpg',
      '/Images/lubo-screening.jpg'
    ],
    testimonials: [
      {
        name: 'Robert Kim',
        company: 'Advanced Screening Solutions',
        quote: 'The Lubo StarScreen technology has revolutionized our screening efficiency. Outstanding performance.',
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

export default LuboScreeningPage;
