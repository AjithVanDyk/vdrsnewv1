import React from 'react';
import EquipmentPageTemplate from '../components/EquipmentPageTemplate';

const PellencSTPage: React.FC = () => {
  const equipment = {
    id: 4,
    name: 'Pellenc ST Optical Sorting',
    image: '/Images/pellenc-optical-new.jpg',
    description: 'Advanced AI-powered optical sorting systems for precise material identification and separation. Pellenc ST technology delivers exceptional accuracy and efficiency in waste processing operations.',
    features: [
      'AI-powered material recognition technology',
      'High-speed sorting capabilities up to 15 tph',
      'Multi-material detection and separation',
      'Advanced near-infrared (NIR) spectroscopy',
      'Real-time quality control and monitoring',
      'Modular design for easy integration',
      'Low maintenance and energy efficient',
      'Precise ejection system for accurate sorting',
      'Compatible with various material streams',
      'Advanced data analytics and reporting'
    ],
    specifications: {
      'Sorting Speed': 'Up to 15 tons per hour',
      'Detection Accuracy': '99.5% material identification',
      'Technology': 'Near-infrared (NIR) spectroscopy',
      'Ejection Precision': '99.8% accuracy',
      'Power Consumption': 'Low energy efficient design',
      'Maintenance': 'Minimal maintenance required',
      'Integration': 'Modular design for easy installation',
      'Data Analytics': 'Real-time monitoring and reporting',
      'Material Types': 'Plastics, paper, cardboard, metals',
      'Operating Temperature': '-10°C to +50°C'
    },
    applications: [
      'Single stream recycling facilities',
      'Material recovery facilities (MRF)',
      'Plastic recycling operations',
      'Paper and cardboard sorting',
      'Mixed waste processing',
      'Industrial waste management',
      'Municipal solid waste sorting',
      'Commercial recycling centers',
      'Construction and demolition waste',
      'Electronic waste processing'
    ],
    videos: [
      'https://youtu.be/hyJnigC4Kbg',
      'https://youtu.be/_RQM1idOUMM',
      'https://youtu.be/_mE3uamgIVk'
    ],
    gallery: [
      '/Images/pellenc-optical-new.jpg'
    ],
    testimonials: [
      {
        name: 'John Smith',
        company: 'Green Valley Recycling',
        quote: 'The Pellenc ST system has revolutionized our sorting accuracy. We\'ve seen a 40% improvement in material recovery rates.',
        rating: 5
      },
      {
        name: 'Sarah Johnson',
        company: 'EcoTech Materials',
        quote: 'Outstanding technology with minimal maintenance. The AI recognition is incredibly precise and reliable.',
        rating: 5
      },
      {
        name: 'Mike Rodriguez',
        company: 'Sustainable Solutions Inc.',
        quote: 'Best investment we\'ve made. The sorting speed and accuracy have exceeded our expectations.',
        rating: 5
      }
    ]
  };

  return <EquipmentPageTemplate equipment={equipment} />;
};

export default PellencSTPage;
