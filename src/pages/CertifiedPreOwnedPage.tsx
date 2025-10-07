import React from 'react';
import EquipmentPageTemplate from '../components/EquipmentPageTemplate';

const CertifiedPreOwnedPage: React.FC = () => {
  const equipment = {
    id: 13,
    name: 'Certified Pre-Owned Equipment',
    image: '/Images/certified-pre-owned.jpg',
    description: 'High-quality certified pre-owned recycling equipment that has been thoroughly inspected, refurbished, and certified to meet original manufacturer standards. Get premium equipment at reduced costs.',
    features: [
      'Thoroughly inspected equipment',
      'Factory-certified refurbishment',
      'Original manufacturer standards',
      'Comprehensive warranty coverage',
      'Cost-effective solutions',
      'Quality assurance program',
      'Professional installation support',
      'Maintenance and service support',
      'Equipment history documentation',
      'Performance guarantees'
    ],
    specifications: {
      'Inspection Process': 'Comprehensive multi-point inspection',
      'Refurbishment': 'Factory-certified restoration',
      'Warranty Coverage': 'Full warranty included',
      'Quality Standards': 'Original manufacturer specifications',
      'Documentation': 'Complete equipment history',
      'Support': 'Full installation and service support',
      'Performance': 'Performance guarantees included',
      'Maintenance': 'Maintenance support available',
      'Installation': 'Professional installation included',
      'Warranty': 'Comprehensive warranty coverage'
    },
    applications: [
      'Material recovery facilities (MRF)',
      'Single stream recycling',
      'Waste processing operations',
      'Municipal recycling programs',
      'Commercial recycling centers',
      'Industrial waste management',
      'Transfer stations',
      'Landfill operations',
      'Construction waste processing',
      'Agricultural waste management'
    ],
    gallery: [
      '/Images/certified-pre-owned.jpg'
    ],
    testimonials: [
      {
        name: 'Sarah Johnson',
        company: 'EcoRecycling Solutions',
        quote: 'Certified pre-owned equipment has been a game-changer for our budget. Excellent quality.',
        rating: 5
      },
      {
        name: 'Michael Chen',
        company: 'Green Valley Materials',
        quote: 'Outstanding value with factory-certified quality. Highly recommended.',
        rating: 5
      },
      {
        name: 'Lisa Rodriguez',
        company: 'Sustainable Recycling Inc',
        quote: 'Best investment we\'ve made. Premium equipment at affordable prices.',
        rating: 5
      }
    ]
  };

  return <EquipmentPageTemplate equipment={equipment} />;
};

export default CertifiedPreOwnedPage;
