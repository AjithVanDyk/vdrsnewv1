import React from 'react';
import SolutionPageTemplate from '../components/SolutionPageTemplate';

const CommercialWastePage: React.FC = () => {
  const solution = {
    id: 2,
    name: 'Commercial Waste',
    image: '/Images/commercial-waste-processing.jpg',
    description: 'Comprehensive commercial waste processing solutions for businesses, offices, and commercial facilities. Our systems efficiently handle mixed commercial waste streams with maximum material recovery and minimal environmental impact.',
    features: [
      'Mixed commercial waste processing',
      'High-efficiency material recovery',
      'Automated sorting technology',
      'Flexible waste stream handling',
      'Odor control systems',
      'Quality control monitoring',
      'Modular processing systems',
      'Easy maintenance access',
      'Environmental compliance',
      'Comprehensive commercial solutions'
    ],
    specifications: {
      'Processing Capacity': 'Up to 50 tons per hour',
      'Material Recovery': '85%+ recovery rate',
      'Waste Streams': 'Mixed commercial waste',
      'Processing Efficiency': '90%+ efficiency rate',
      'Technology': 'Advanced sorting systems',
      'Maintenance': 'Low maintenance requirements',
      'System Design': 'Modular and scalable',
      'Compliance': 'Environmental regulations',
      'Installation': 'Turnkey installation',
      'Warranty': '2-year comprehensive warranty'
    },
    applications: [
      'Office buildings',
      'Shopping centers',
      'Restaurants and cafes',
      'Hotels and hospitality',
      'Retail stores',
      'Corporate headquarters',
      'Medical facilities',
      'Educational institutions',
      'Government buildings',
      'Commercial complexes'
    ],
    gallery: [
      '/Images/commercial-waste-processing.jpg',
      '/Images/mrf-systems.jpg'
    ],
    testimonials: [
      {
        name: 'David Kim',
        company: 'Commercial Waste Solutions',
        quote: 'Commercial waste processing has transformed our operations. Exceptional recovery rates.',
        rating: 5
      },
      {
        name: 'Maria Garcia',
        company: 'EcoCommercial Systems',
        quote: 'Outstanding processing technology with excellent material recovery capabilities.',
        rating: 5
      },
      {
        name: 'James Wilson',
        company: 'Green Business Solutions',
        quote: 'Best commercial waste system we\'ve used. Highly efficient and reliable.',
        rating: 5
      }
    ]
  };

  return <SolutionPageTemplate solution={solution} />;
};

export default CommercialWastePage;
