import React from 'react';
import SolutionPageTemplate from '../components/SolutionPageTemplate';

const FoodWasteDepackagingPage: React.FC = () => {
  const solution = {
    id: 1,
    name: 'Food Waste Depackaging',
    image: '/Images/smicon-food-depackaging.jpg',
    description: 'Advanced food waste depackaging solutions for efficient separation of organic materials from packaging. Our systems maximize organic recovery while minimizing contamination for optimal composting and anaerobic digestion.',
    features: [
      'Advanced depackaging technology',
      'High-efficiency organic separation',
      'Minimal contamination output',
      'Automated processing systems',
      'Flexible packaging handling',
      'Odor control integration',
      'Quality control monitoring',
      'Modular system design',
      'Easy maintenance access',
      'Comprehensive food waste processing'
    ],
    specifications: {
      'Processing Capacity': 'Up to 20 tons per hour',
      'Organic Recovery': '95%+ organic material recovery',
      'Contamination Level': '<5% contamination',
      'Packaging Types': 'Plastic, cardboard, metal containers',
      'Processing Efficiency': '90%+ efficiency rate',
      'Technology': 'Advanced depackaging systems',
      'Maintenance': 'Low maintenance requirements',
      'System Design': 'Modular and scalable',
      'Installation': 'Turnkey installation',
      'Warranty': '2-year comprehensive warranty'
    },
    applications: [
      'Food processing facilities',
      'Restaurant waste management',
      'Grocery store waste processing',
      'Commercial kitchens',
      'Food manufacturing plants',
      'Cafeteria operations',
      'Event catering waste',
      'Hospital food services',
      'School dining facilities',
      'Corporate dining centers'
    ],
    gallery: [
      '/Images/smicon-food-depackaging.jpg',
      '/Images/smicon-depackager.jpg'
    ],
    testimonials: [
      {
        name: 'Sarah Johnson',
        company: 'Food Processing Solutions',
        quote: 'Food waste depackaging has revolutionized our organic recovery. Exceptional separation efficiency.',
        rating: 5
      },
      {
        name: 'Michael Chen',
        company: 'EcoFood Systems',
        quote: 'Outstanding depackaging technology with minimal contamination and high organic recovery.',
        rating: 5
      },
      {
        name: 'Lisa Rodriguez',
        company: 'Green Kitchen Solutions',
        quote: 'Best food waste processing system we\'ve implemented. Highly efficient and reliable.',
        rating: 5
      }
    ]
  };

  return <SolutionPageTemplate solution={solution} />;
};

export default FoodWasteDepackagingPage;
