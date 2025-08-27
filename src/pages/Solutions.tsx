import React from 'react';
import { motion } from 'framer-motion';
import { Recycle, TrendingUp, Shield, Zap, Users, BarChart3, CheckCircle } from 'lucide-react';

const Solutions = () => {
  const solutionTypes = [
    {
      title: 'Single Stream Recycling',
      description: 'Complete turnkey solutions for municipal and commercial single stream recycling facilities with proven Bollegraaf technology.',
      icon: Recycle,
      benefits: [
        'Increased material recovery rates up to 95%',
        'Reduced operational costs by 30-40%',
        'Improved contamination control',
        'Enhanced processing efficiency'
      ],
      features: [
        'Bollegraaf ballistic separators',
        'Advanced optical sorting systems',
        'Real-time monitoring and analytics',
        'Automated quality control systems'
      ],
      image: '/Images/image-1749759490576.png'
    },
    {
      title: 'Material Recovery Facilities (MRF)',
      description: 'Complete turnkey MRF solutions designed and installed by Van Dyk with comprehensive support and training.',
      icon: TrendingUp,
      benefits: [
        'Maximize material value recovery',
        'Streamline operations with automation',
        'Reduce labor costs significantly',
        'Improve workplace safety standards'
      ],
      features: [
        'Integrated conveyor systems',
        'Multi-material sorting capability',
        'Baling and compaction systems',
        'Comprehensive reporting and analytics'
      ],
      image: '/Images/image-1749759495211.png'
    },
    {
      title: 'Plastic Recovery Solutions',
      description: 'Specialized systems for plastic waste processing and recovery using advanced optical sorting technology.',
      icon: Shield,
      benefits: [
        'High-purity plastic recovery',
        'Multiple plastic type separation',
        'Contamination reduction to <2%',
        'Market-ready output quality'
      ],
      features: [
        'NIR optical sorting technology',
        'Density separation systems',
        'Washing and cleaning systems',
        'Quality assurance testing'
      ],
      image: '/Images/image-1749759499434.png'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Collection & Transport',
      description: 'Mixed recyclables arrive at the facility via collection trucks and are weighed and inspected for contamination.'
    },
    {
      step: '02',
      title: 'Pre-Sorting & Screening',
      description: 'Initial sorting removes large contaminants, oversized materials, and non-recyclable items using screens and manual sorting.'
    },
    {
      step: '03',
      title: 'Ballistic Separation',
      description: 'Bollegraaf ballistic separators efficiently separate 2D materials (paper, cardboard) from 3D materials (containers).'
    },
    {
      step: '04',
      title: 'Optical Sorting',
      description: 'Advanced NIR optical sorters identify and separate materials by type, color, and composition with 98%+ accuracy.'
    },
    {
      step: '05',
      title: 'Quality Control',
      description: 'Final inspection and quality control ensures materials meet strict market specifications and contamination standards.'
    },
    {
      step: '06',
      title: 'Baling & Shipping',
      description: 'Sorted materials are baled, weighed, and prepared for shipment to end markets and manufacturing facilities.'
    }
  ];

  const stats = [
    { number: '95%', label: 'Material Recovery Rate' },
    { number: '40%', label: 'Cost Reduction' },
    { number: '60%', label: 'Throughput Increase' },
    { number: '98%', label: 'Sorting Accuracy' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto py-12 px-4 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-vd-blue mb-4">Our Solutions</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive recycling solutions designed to maximize efficiency and sustainability
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {solutionTypes.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = '/Images/image-1749759453479.png';
                    e.currentTarget.alt = 'Image not available';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-vd-blue-dark/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <solution.icon className="w-8 h-8 text-vd-orange" />
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-vd-blue mb-3">{solution.title}</h2>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                
                {/* Benefits */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-vd-orange mb-3">Key Benefits</h3>
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-vd-orange mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-sm font-semibold text-vd-orange mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {solution.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-vd-orange mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Steps */}
        <div className="bg-gradient-to-b from-vd-blue to-vd-blue-dark rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <div className="text-vd-orange text-2xl font-bold mb-3">{step.step}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-200">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;