import React from 'react';
import SolutionPageTemplate from '../components/SolutionPageTemplate';

const ElectronicsWasteRecyclingPage: React.FC = () => {
  const solution = {
    id: 1,
    name: 'Electronics Waste Recycling',
    image: '/Images/electronics-recycling.jpg',
    description: 'Complete electronics waste recycling solutions including e-waste processing, material recovery, and environmental compliance. Specialized equipment for handling computers, phones, and electronic components.',
    features: [
      'Complete e-waste processing systems',
      'Material recovery and separation',
      'Environmental compliance solutions',
      'Data destruction services',
      'Component disassembly',
      'Precious metal recovery',
      'Hazardous material handling',
      'Certified recycling processes',
      'Automated processing systems',
      'Comprehensive material recovery'
    ],
    specifications: {
      'Processing Capacity': 'Up to 10 tons per hour',
      'Material Recovery': '95%+ recovery rate',
      'Compliance': 'EPA and state regulations',
      'Certification': 'R2 and e-Stewards certified',
      'Data Security': 'NAID AAA certified destruction',
      'Technology': 'Automated disassembly systems',
      'Metal Recovery': 'Precious metal extraction',
      'Hazardous Handling': 'Safe disposal protocols',
      'Installation': 'Turnkey installation',
      'Warranty': '2-year comprehensive warranty'
    },
    applications: [
      'Corporate IT equipment',
      'Consumer electronics',
      'Medical devices',
      'Telecommunications equipment',
      'Industrial electronics',
      'Data centers',
      'Educational institutions',
      'Healthcare facilities',
      'Government agencies',
      'Financial institutions'
    ],
    gallery: [
      '/Images/electronics-recycling.jpg',
      '/Images/cd-recycling.jpg',
      '/Images/cdrecycle.jpg'
    ],
    testimonials: [
      {
        name: 'John Smith',
        company: 'TechRecycle Solutions',
        quote: 'Electronics waste recycling has transformed our e-waste management. Exceptional recovery rates.',
        rating: 5
      },
      {
        name: 'Sarah Johnson',
        company: 'EcoElectronics Inc',
        quote: 'Outstanding data security and material recovery capabilities.',
        rating: 5
      },
      {
        name: 'Mike Rodriguez',
        company: 'Green Tech Recycling',
        quote: 'Best e-waste processing system we\'ve implemented. Highly efficient and compliant.',
        rating: 5
      }
    ]
  };

  return <SolutionPageTemplate solution={solution} />;
};

export default ElectronicsWasteRecyclingPage;
