import React from 'react';
import EquipmentPageTemplate from '../components/EquipmentPageTemplate';

const GreyparrotAIPage: React.FC = () => {
  const equipment = {
    id: 9,
    name: 'Greyparrot AI',
    image: '/Images/greyparrot-ai-new.jpg',
    description: 'Advanced AI-powered waste analytics and material recognition technology. Greyparrot AI provides real-time insights and optimization for waste processing operations.',
    features: [
      'AI-powered material recognition',
      'Real-time waste analytics',
      'Advanced computer vision',
      'Automated material identification',
      'Performance optimization insights',
      'Data-driven decision making',
      'Cloud-based analytics platform',
      'Easy integration capabilities',
      'Scalable AI technology',
      'Comprehensive reporting'
    ],
    specifications: {
      'Recognition Accuracy': '99%+ material identification',
      'Processing Speed': 'Real-time analysis',
      'AI Technology': 'Advanced computer vision',
      'Data Analytics': 'Cloud-based platform',
      'Integration': 'Easy system integration',
      'Scalability': 'Scalable AI technology',
      'Reporting': 'Comprehensive analytics',
      'Maintenance': 'Minimal maintenance required',
      'Installation': 'Easy setup and installation',
      'Warranty': '2-year comprehensive warranty'
    },
    applications: [
      'Material recovery facilities (MRF)',
      'Single stream recycling',
      'Waste processing optimization',
      'Quality control systems',
      'Performance monitoring',
      'Data analytics platforms',
      'Process optimization',
      'Material identification',
      'Waste characterization',
      'Operational efficiency'
    ],
    gallery: [
      '/Images/greyparrot-ai-new.jpg',
      '/Images/greyparrot-ai-recognition.jpg',
      '/Images/greyparrot-ai.jpg'
    ],
    testimonials: [
      {
        name: 'Amanda Foster',
        company: 'AI Waste Solutions',
        quote: 'Greyparrot AI has revolutionized our waste analytics. Exceptional accuracy and insights.',
        rating: 5
      },
      {
        name: 'Thomas Anderson',
        company: 'Smart Waste Systems',
        quote: 'Outstanding AI technology with real-time analytics capabilities.',
        rating: 5
      },
      {
        name: 'Rachel Green',
        company: 'EcoAnalytics Corp',
        quote: 'Best AI waste analytics system we\'ve implemented. Highly accurate and reliable.',
        rating: 5
      }
    ]
  };

  return <EquipmentPageTemplate equipment={equipment} />;
};

export default GreyparrotAIPage;
