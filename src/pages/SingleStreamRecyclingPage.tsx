import React from 'react';
import SolutionPageTemplate from '../components/SolutionPageTemplate';

const SingleStreamRecyclingPage: React.FC = () => {
  const solution = {
    id: 1,
    name: 'Single Stream Recycling',
    image: '/Images/single-stream-recycling.jpg',
    description: 'Comprehensive single stream recycling solutions that process mixed recyclables efficiently. Our advanced technology separates paper, plastic, metal, and glass in one streamlined process.',
    features: [
      'Mixed recyclable processing in one stream',
      'Advanced optical sorting technology',
      'High-efficiency material separation',
      'Automated sorting and baling systems',
      'Real-time quality monitoring',
      'Flexible processing capabilities',
      'Low contamination rates',
      'Energy efficient operation',
      'Modular system design',
      'Comprehensive material recovery'
    ],
    specifications: {
      'Processing Capacity': 'Up to 50 tons per hour',
      'Material Recovery': '95%+ recovery rate',
      'Contamination Level': '<5% contamination',
      'Sorting Accuracy': '99%+ material identification',
      'Power Consumption': 'Energy efficient design',
      'Maintenance': 'Low maintenance requirements',
      'System Design': 'Modular and scalable',
      'Material Types': 'Paper, plastic, metal, glass',
      'Installation': 'Turnkey installation',
      'Warranty': '2-year comprehensive warranty'
    },
    applications: [
      'Municipal recycling programs',
      'Material recovery facilities (MRF)',
      'Commercial recycling centers',
      'Residential waste processing',
      'Multi-family housing complexes',
      'Office buildings and complexes',
      'Educational institutions',
      'Healthcare facilities',
      'Retail and shopping centers',
      'Industrial facilities'
    ],
    videos: [
      'https://youtu.be/QYaqrF9vNbU',
      'https://youtu.be/M5nmNKVNCBw',
      'https://youtu.be/Qerp8XcGDw0'
    ],
    gallery: [
      '/Images/single-stream-recycling.jpg',
      '/Images/mrf-systems.jpg'
    ],
    testimonials: [
      {
        name: 'Sarah Johnson',
        company: 'Metro Recycling Authority',
        quote: 'Single stream recycling has revolutionized our operations. Recovery rates have increased by 40%.',
        rating: 5
      },
      {
        name: 'Michael Chen',
        company: 'Green Valley Materials',
        quote: 'Outstanding technology with exceptional sorting accuracy. Highly recommended.',
        rating: 5
      },
      {
        name: 'Lisa Rodriguez',
        company: 'EcoSolutions Inc',
        quote: 'Best investment we\'ve made. The system handles everything efficiently.',
        rating: 5
      }
    ]
  };

  return <SolutionPageTemplate solution={solution} />;
};

export default SingleStreamRecyclingPage;
