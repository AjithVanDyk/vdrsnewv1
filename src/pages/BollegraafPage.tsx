import React from 'react';
import EquipmentPageTemplate from '../components/EquipmentPageTemplate';

const BollegraafPage: React.FC = () => {
  const equipment = {
    id: 1,
    name: 'Bollegraaf Balers',
    image: '/Images/bollegraaf-new-1.jpg',
    description: 'Industry-leading single ram balers with no-shear design for maximum efficiency and density. Single ram uses 1/3 power of two-ram balers and operates automatically without dedicated operator.',
    features: [
      'Single ram uses 1/3 power of two-ram balers',
      'Operates automatically without dedicated operator',
      'Instant material switching capability',
      'Denser, uniform bales with pre-press flap',
      'Production speeds over 35 tph',
      '50% reduction in electricity costs',
      'Low maintenance robust design',
      'No-shear compression technology',
      'Flexible material processing (fiber, cardboard, plastic, steel, aluminum)',
      'Pre-press flap eliminates shearing'
    ],
    specifications: {
      'Production Speed': 'Over 35 tons per hour',
      'Power Efficiency': '50% reduction vs two-ram balers',
      'Bale Density': 'Superior compression with pre-press flap',
      'Operation': 'Fully automated',
      'Maintenance': 'Low maintenance robust design',
      'Material Switching': 'Instant capability',
      'Design': 'Single ram, no-shear',
      'Materials': 'Fiber, cardboard, plastic, steel, aluminum',
      'Bale Weight': 'Up to 2,200 lbs',
      'Warranty': 'Comprehensive 2-year warranty'
    },
    applications: [
      { name: 'High production balers', link: '/solutions/bollegraaf-balers' },
      { name: 'Single stream recycling', link: '/solutions/single-stream-recycling' },
      { name: 'Municipal solid waste', link: '/solutions/msw-processing' },
      { name: 'Commercial waste', link: '/solutions/commercial-waste' },
      { name: 'C&D recycling', link: '/solutions/cd-recycling' },
      { name: 'Plastics Recycling', link: '/solutions/plastics-recycling' },
      { name: 'Waste to Energy', link: '/solutions/waste-to-energy' }
    ],
    videos: [
      'https://youtu.be/zqbJbMABi-A', // Bollegraaf HBC 140 Baler at Yes Recycling Newark NJ
      'https://youtu.be/m4VQvwWW9yU'  // Single Ram Baler
    ],
    gallery: [
      '/Images/bollegraaf-new-1.jpg',
      '/Images/bollegraaf-products.jpg',
      '/Images/bollegraaf-baler.jpg'
    ],
    equipmentNews: [
      {
        id: 1,
        title: 'Yes Recycling Newark NJ Achieves 95% Recovery Rate with Bollegraaf Baler',
        description: 'Municipal recycling facility in New Jersey reports exceptional performance improvements after installing Van Dyk\'s Bollegraaf HBC 140 baler system.',
        date: '2024-12-20',
        image: '/Images/bollegraaf-products.jpg',
        link: 'https://vdrs.com/customers/yes-recycling-newark-success/',
        category: 'Success Story'
      },
      {
        id: 2,
        title: 'Bollegraaf Baler Technology Increases Efficiency by 35%',
        description: 'Latest generation balers feature advanced automation and improved material handling capabilities for enhanced productivity.',
        date: '2024-12-18',
        image: '/Images/bollegraaf-new-1.jpg',
        link: 'https://vdrs.com/news/bollegraaf-efficiency/',
        category: 'Product Updates'
      },
      {
        id: 3,
        title: 'Maximizing Baler Efficiency: 10 Essential Maintenance Tips',
        description: 'Learn the critical maintenance practices that keep your Bollegraaf balers running at peak performance and extend their operational life.',
        date: '2024-12-15',
        image: '/Images/bollegraaf-baler.jpg',
        link: 'https://vdrs.com/expert-tips/maximizing-baler-efficiency/',
        category: 'Expert Tips'
      }
    ]
  };

  return <EquipmentPageTemplate equipment={equipment} />;
};

export default BollegraafPage;
