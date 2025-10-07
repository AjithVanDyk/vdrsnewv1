import React from 'react';
import EquipmentPageTemplate from '../components/EquipmentPageTemplate';

const TOMRAPage: React.FC = () => {
  const equipment = {
    id: 3,
    name: 'TOMRA Optical Sorting',
    image: '/Images/tomra-optical-sorting-new.jpg',
    description: 'Advanced optical sorting technology using near-infrared spectroscopy and artificial intelligence for precise material identification and separation. TOMRA systems deliver exceptional accuracy and efficiency.',
    features: [
      'Near-infrared (NIR) spectroscopy technology',
      'AI-powered material recognition',
      'High-speed sorting up to 20 tph',
      'Multi-material detection capabilities',
      'Precise ejection system',
      'Real-time quality monitoring',
      'Low maintenance design',
      'Energy efficient operation',
      'Modular installation options',
      'Advanced data analytics'
    ],
    specifications: {
      'Sorting Speed': 'Up to 20 tons per hour',
      'Detection Accuracy': '99.7% material identification',
      'Technology': 'Near-infrared spectroscopy',
      'Ejection Precision': '99.9% accuracy',
      'Power Consumption': 'Energy efficient design',
      'Maintenance': 'Minimal maintenance required',
      'Installation': 'Modular design',
      'Data Analytics': 'Real-time monitoring',
      'Material Types': 'Plastics, paper, metals, glass',
      'Operating Range': '-20°C to +60°C'
    },
    applications: [
      'Material recovery facilities (MRF)',
      'Single stream recycling',
      'Plastic recycling operations',
      'Paper and cardboard sorting',
      'Metal recovery facilities',
      'Glass processing plants',
      'Mixed waste sorting',
      'Industrial waste management',
      'Municipal recycling centers',
      'Commercial waste processing'
    ],
    gallery: [
      '/Images/tomra-optical-sorting-new.jpg',
      '/Images/tomra-optical-sorting.jpg'
    ],
    testimonials: [
      {
        name: 'Amanda Foster',
        company: 'Precision Recycling Corp',
        quote: 'TOMRA technology has transformed our sorting accuracy. We\'ve achieved 99%+ purity rates.',
        rating: 5
      },
      {
        name: 'James Patterson',
        company: 'Advanced Materials LLC',
        quote: 'Exceptional performance and reliability. The AI recognition is incredibly accurate.',
        rating: 5
      },
      {
        name: 'Maria Garcia',
        company: 'EcoSort Solutions',
        quote: 'Outstanding investment. The sorting speed and accuracy exceed all expectations.',
        rating: 5
      }
    ]
  };

  return <EquipmentPageTemplate equipment={equipment} />;
};

export default TOMRAPage;
