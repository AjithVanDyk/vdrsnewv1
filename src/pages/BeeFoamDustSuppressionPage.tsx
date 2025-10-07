import React from 'react';
import EquipmentPageTemplate from '../components/EquipmentPageTemplate';

const BeeFoamDustSuppressionPage: React.FC = () => {
  const equipment = {
    id: 11,
    name: 'BeeFoam Dust Suppression',
    image: '/Images/beefoam-after-new.jpg',
    description: 'Advanced dust suppression technology using BeeFoam technology for effective dust control in waste processing operations. Our systems provide superior dust suppression while maintaining operational efficiency.',
    features: [
      'BeeFoam dust suppression technology',
      'High-efficiency dust control',
      'Automated foam application',
      'Low water consumption',
      'Environmentally friendly solution',
      'Easy operation and maintenance',
      'Modular system design',
      'Flexible application methods',
      'Durable construction materials',
      'Comprehensive dust control'
    ],
    specifications: {
      'Dust Suppression Efficiency': '99%+ dust control',
      'Water Consumption': 'Low water usage',
      'Foam Application': 'Automated system',
      'Coverage Area': 'Up to 500 sq ft',
      'Power Consumption': 'Energy efficient design',
      'Maintenance': 'Low maintenance requirements',
      'Construction': 'Modular design',
      'Materials': 'Corrosion-resistant construction',
      'Installation': 'Easy setup and installation',
      'Warranty': '2-year comprehensive warranty'
    },
    applications: [
      'Material recovery facilities (MRF)',
      'Waste processing operations',
      'Transfer stations',
      'Landfill operations',
      'Construction sites',
      'Mining operations',
      'Industrial facilities',
      'Demolition sites',
      'Agricultural operations',
      'Commercial waste processing'
    ],
    gallery: [
      '/Images/beefoam-after-new.jpg',
      '/Images/beefoam-after.jpg'
    ],
    testimonials: [
      {
        name: 'David Kim',
        company: 'Dust Control Solutions',
        quote: 'BeeFoam dust suppression has transformed our operations. Exceptional dust control.',
        rating: 5
      },
      {
        name: 'Maria Garcia',
        company: 'Clean Air Systems',
        quote: 'Outstanding dust suppression performance with minimal water usage.',
        rating: 5
      },
      {
        name: 'James Wilson',
        company: 'EcoDust Technologies',
        quote: 'Best dust suppression system we\'ve used. Highly efficient and reliable.',
        rating: 5
      }
    ]
  };

  return <EquipmentPageTemplate equipment={equipment} />;
};

export default BeeFoamDustSuppressionPage;
