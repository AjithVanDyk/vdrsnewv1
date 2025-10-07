import React from 'react';
import SolutionPageTemplate from '../components/SolutionPageTemplate';

const MultiMRFSystemsPage: React.FC = () => {
  const solution = {
    id: 4,
    name: 'Multi-MRF™ Systems',
    image: '/Images/mrf-systems.jpg',
    description: 'Advanced Multi-Material Recovery Facility (MRF) systems for comprehensive waste processing and material recovery. Our Multi-MRF™ technology provides integrated solutions for multiple waste streams with maximum efficiency and recovery rates.',
    features: [
      'Multi-material processing capability',
      'Integrated MRF technology',
      'High-efficiency material recovery',
      'Automated sorting systems',
      'Flexible waste stream handling',
      'Advanced control systems',
      'Modular system design',
      'Easy maintenance access',
      'Environmental compliance',
      'Comprehensive MRF solutions'
    ],
    specifications: {
      'Processing Capacity': 'Up to 200 tons per hour',
      'Material Recovery': '90%+ recovery rate',
      'Waste Streams': 'Multiple material types',
      'Processing Efficiency': '95%+ efficiency rate',
      'Technology': 'Advanced MRF systems',
      'Maintenance': 'Low maintenance requirements',
      'System Design': 'Modular and scalable',
      'Compliance': 'Environmental regulations',
      'Installation': 'Turnkey installation',
      'Warranty': '2-year comprehensive warranty'
    },
    applications: [
      'Municipal waste processing',
      'Regional recycling centers',
      'Large-scale MRF facilities',
      'Waste management companies',
      'Government facilities',
      'Industrial complexes',
      'Commercial districts',
      'Educational institutions',
      'Healthcare facilities',
      'Airport terminals'
    ],
    gallery: [
      '/Images/mrf-systems.jpg',
      '/Images/single-stream-recycling.jpg'
    ],
    testimonials: [
      {
        name: 'Amanda Foster',
        company: 'MRF Solutions Inc',
        quote: 'Multi-MRF™ systems have revolutionized our waste processing. Exceptional recovery rates.',
        rating: 5
      },
      {
        name: 'Thomas Anderson',
        company: 'EcoMRF Systems',
        quote: 'Outstanding MRF technology with excellent multi-material processing capabilities.',
        rating: 5
      },
      {
        name: 'Rachel Green',
        company: 'Green MRF Technologies',
        quote: 'Best MRF system we\'ve implemented. Highly efficient and reliable.',
        rating: 5
      }
    ]
  };

  return <SolutionPageTemplate solution={solution} />;
};

export default MultiMRFSystemsPage;
