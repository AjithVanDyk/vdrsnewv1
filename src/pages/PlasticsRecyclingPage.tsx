import React from 'react';
import SolutionPageTemplate from '../components/SolutionPageTemplate';

const PlasticsRecyclingPage: React.FC = () => {
  const solution = {
    id: 2,
    name: 'Plastics Recycling',
    image: '/Images/plastics-recycling.jpg',
    description: 'Advanced plastics recycling solutions for efficient processing and recovery of various plastic materials. Our technology maximizes plastic recovery while minimizing contamination.',
    features: [
      'Multi-plastic type processing',
      'Advanced optical sorting technology',
      'High-purity plastic recovery',
      'Automated sorting and baling',
      'Contamination reduction systems',
      'Flexible processing capabilities',
      'Energy efficient operation',
      'Modular system design',
      'Real-time quality monitoring',
      'Comprehensive plastic recovery'
    ],
    specifications: {
      'Processing Capacity': 'Up to 30 tons per hour',
      'Plastic Recovery': '98%+ recovery rate',
      'Contamination Level': '<2% contamination',
      'Sorting Accuracy': '99.5%+ material identification',
      'Plastic Types': 'PET, HDPE, PP, PS, PVC',
      'Power Consumption': 'Energy efficient design',
      'Maintenance': 'Low maintenance requirements',
      'System Design': 'Modular and scalable',
      'Installation': 'Turnkey installation',
      'Warranty': '2-year comprehensive warranty'
    },
    applications: [
      'Plastic recycling facilities',
      'Material recovery facilities (MRF)',
      'Manufacturing facilities',
      'Retail and commercial centers',
      'Educational institutions',
      'Healthcare facilities',
      'Food service operations',
      'Packaging facilities',
      'Distribution centers',
      'Industrial complexes'
    ],
    gallery: [
      '/Images/plastics-recycling.jpg',
      '/Images/7-Plastics-Recycling-c.jpg'
    ],
    testimonials: [
      {
        name: 'David Kim',
        company: 'Plastic Solutions Corp',
        quote: 'Exceptional plastic recovery rates with minimal contamination. Outstanding technology.',
        rating: 5
      },
      {
        name: 'Maria Garcia',
        company: 'EcoPlastics Inc',
        quote: 'The sorting accuracy is incredible. We\'ve achieved 99%+ purity rates.',
        rating: 5
      },
      {
        name: 'James Wilson',
        company: 'Green Materials LLC',
        quote: 'Best plastic recycling system we\'ve used. Highly efficient and reliable.',
        rating: 5
      }
    ]
  };

  return <SolutionPageTemplate solution={solution} />;
};

export default PlasticsRecyclingPage;
