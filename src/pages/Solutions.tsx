import React from 'react';
import { motion } from 'framer-motion';
import { Recycle, TrendingUp, Shield, Zap, Users, BarChart3, CheckCircle, Cpu, Eye, Sparkles, Battery } from 'lucide-react';

const Solutions = () => {
  const solutionTypes = [
    {
      title: 'Electronics Waste Recycling',
      description: 'High-precision TOMRA AUTOSORT Fines optical sorter for e-scrap processing with 1-2mm sorting accuracy.',
      icon: Cpu,
      benefits: [
        'Precise precious metal recovery in 1-2mm range',
        'Clean mixed metals fraction at high capacity',
        'Captures clean circuit boards and wire',
        'Plastic sorting including black plastics recognition'
      ],
      features: [
        'Ultra-High Resolution NIR spectrometer',
        'Camera detection and metal sensors',
        'Deep LAIser object detection with AI',
        '4 sizes available (1000-2800mm widths)'
      ],
      applications: [
        'Clean metals fraction production',
        'Circuit board capture and recovery',
        'Aluminum fraction cleanup',
        'Copper and stainless steel concentrates'
      ],
      image: '/Images/image-1749759490576.png'
    },
    {
      title: 'Battery Recycling Systems',
      description: 'Advanced Reckelberg Environmental Technologies for lithium-ion battery discharge, drying, and material recovery.',
      icon: Battery,
      benefits: [
        'Safe discharge down to 0 volts',
        'Efficient energy recovery to grid',
        'Highest quality black mass production',
        'Maximum yield of valuable metals'
      ],
      features: [
        'High-voltage discharge systems up to 1,000V',
        'Vacuum drying with electrolyte recovery',
        'RET Impact Reactor technology',
        'Integrated hazardous substance separation'
      ],
      applications: [
        'EV and stationary battery processing',
        'Low-emission electrolyte recovery',
        'Fire risk minimization',
        'Superior black mass quality'
      ],
      image: '/Images/image-1749759495211.png'
    },
    {
      title: 'Glass Cleanup Systems',
      description: 'Multiple glass processing models achieving less than 5% non-glass residue for single stream glass recovery.',
      icon: Shield,
      benefits: [
        'Under 10% non-glass residue contamination',
        'Removes 99% of undersized fraction',
        'Clean fiber product for mixed paper',
        'Processes 2-15 tph per single unit'
      ],
      features: [
        'Four-fraction separation system',
        'Glass breaker screen technology',
        'Automated contamination removal',
        'Scalable from 10 tph to 50+ tph'
      ],
      applications: [
        'Single stream glass processing',
        'Mixed broken glass separation',
        'Recyclables recovery from oversized',
        'Road base fines production'
      ],
      image: '/Images/image-1749759499434.png'
    },
    {
      title: 'Composting & Densimetric Tables',
      description: 'Advanced densimetric separation technology for compost purification and contamination removal.',
      icon: Recycle,
      benefits: [
        'Removes glass, stone, metal contaminants',
        'Processes up to 30 tph per unit',
        'Higher value compost production',
        'Proven European technology'
      ],
      features: [
        'Vibratory motion with air separation',
        'Two models: FM and M configurations',
        'Multiple width options (0.7-2.4 meters)',
        'Handles materials up to 80mm grain size'
      ],
      applications: [
        'Contaminated compost cleanup',
        'Agricultural grade compost production',
        'Plastic sticker and debris removal',
        'Stone and glass separation'
      ],
      image: '/Images/image-1749759453479.png'
    },
    {
      title: 'Bollegraaf Balers',
      description: 'Industry-leading single ram balers with no-shear design for maximum efficiency and density.',
      icon: TrendingUp,
      benefits: [
        'Single ram uses 1/3 power of two-ram balers',
        'Operates automatically without dedicated operator',
        'Instant material switching capability',
        'Denser, uniform bales with pre-press flap'
      ],
      features: [
        'No-shear pre-press flap technology',
        'Production speeds over 35 tph',
        '50% reduction in electricity costs',
        'Low maintenance robust design'
      ],
      applications: [
        'Fiber and cardboard baling',
        'Plastic container processing',
        'Steel and aluminum container baling',
        'Difficult grades like phone books'
      ],
      image: '/Images/image-1749759453479.png'
    },
    {
      title: 'AI Waste Analysis by Greyparrot',
      description: 'Real-time waste intelligence platform using AI to track and analyze materials with 98% accuracy.',
      icon: Eye,
      benefits: [
        '98% count accuracy at speeds up to 3m/s',
        '95% mass composition analysis accuracy',
        'Identifies 89 waste categories',
        'Brand, SKU, and size identification'
      ],
      features: [
        'Easily mounted camera systems',
        'Live dashboard with customizable alerts',
        'Automated compliance reporting',
        'Real-time performance optimization'
      ],
      applications: [
        'Inbound stream auditing (99% visibility)',
        'Residue line valuable material tracking',
        'Final QC line quality control',
        'Retrofit planning optimization'
      ],
      image: '/Images/image-1749759453479.png'
    }
  ];

  const specializedSystems = [
    {
      title: 'TOMRA Optical Sorting',
      description: 'Advanced sensor-based sorting with multiple detection technologies for maximum material recovery.',
      icon: Sparkles,
      capabilities: [
        'Near-infrared spectrometry',
        'Visual spectrum analysis',
        'X-ray transmission',
        'Electromagnetic induction'
      ]
    },
    {
      title: 'Pellenc ST Optical Sorting',
      description: 'High-performance optical sorting solutions for plastics and mixed material applications.',
      icon: Users,
      capabilities: [
        'Multi-criteria detection',
        'High-speed ejection systems',
        'Color and polymer identification',
        'Contamination removal'
      ]
    },
    {
      title: 'Walair Density Separation',
      description: '3-D trommel and air separation technology for material classification by density.',
      icon: BarChart3,
      capabilities: [
        'Heavy/light fraction separation',
        'Dust removal systems',
        'Material flow optimization',
        'High uptime reliability'
      ]
    },
    {
      title: 'Centriair Odor Control',
      description: 'Swedish industrial odor treatment achieving up to 99% odor reduction rates.',
      icon: Shield,
      capabilities: [
        'Advanced particle separation',
        'Harmful gas neutralization',
        'Real-time control systems',
        'Energy-efficient operation'
      ]
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Material Input & Analysis',
      description: 'Advanced AI and sensor systems analyze incoming waste streams in real-time for optimal processing decisions.'
    },
    {
      step: '02',
      title: 'Primary Separation',
      description: 'Density separation and screening remove oversized materials and perform initial material classification.'
    },
    {
      step: '03',
      title: 'Optical Sorting',
      description: 'TOMRA and Pellenc optical sorters identify and separate materials with 98%+ accuracy using multiple sensor technologies.'
    },
    {
      step: '04',
      title: 'Specialized Processing',
      description: 'Material-specific processing including battery discharge, glass cleanup, or e-waste precious metal recovery.'
    },
    {
      step: '05',
      title: 'Quality Control',
      description: 'Greyparrot AI monitors final product quality with real-time feedback and automated compliance reporting.'
    },
    {
      step: '06',
      title: 'Baling & Preparation',
      description: 'Bollegraaf balers create dense, uniform bales ready for market with minimal energy consumption.'
    }
  ];

  const stats = [
    { number: '98%', label: 'AI Sorting Accuracy' },
    { number: '99%', label: 'Odor Reduction Rate' },
    { number: '35+', label: 'TPH Baling Speed' },
    { number: '1-2mm', label: 'E-Waste Sorting Precision' },
    { number: '30', label: 'TPH Compost Processing' },
    { number: '89', label: 'AI Waste Categories' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white smooth-scroll">
      <div className="container mx-auto py-12 px-4 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-vd-blue mb-4">Advanced Recycling Solutions</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            State-of-the-art equipment and technologies for comprehensive waste processing and material recovery
          </p>
        </motion.div>

        {/* Main Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
                <div className="mb-6">
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

                {/* Applications */}
                <div>
                  <h3 className="text-sm font-semibold text-vd-orange mb-3">Applications</h3>
                  <ul className="space-y-2">
                    {solution.applications.map((application, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-vd-orange mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-gray-600">{application}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Specialized Systems Section */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-vd-blue mb-4">Supporting Technologies</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Comprehensive equipment lineup for complete material recovery facility solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializedSystems.map((system, index) => (
              <motion.div
                key={system.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <system.icon className="w-6 h-6 text-vd-orange mr-3" />
                  <h3 className="text-lg font-semibold text-vd-blue">{system.title}</h3>
                </div>
                <p className="text-gray-600 mb-4 text-sm">{system.description}</p>
                <ul className="space-y-1">
                  {system.capabilities.map((capability, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-start">
                      <span className="w-1.5 h-1.5 bg-vd-orange rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      {capability}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Steps */}
        <div className="bg-gradient-to-b from-vd-blue to-vd-blue-dark rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Integrated Processing Workflow</h2>
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

        {/* Technology Highlights */}
        <div className="bg-gradient-to-b from-gray-50 to-white rounded-2xl p-8 md:p-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-vd-blue mb-4">Technology Highlights</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Exclusive partnerships bringing world-class technologies to North American markets
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
            >
              <h3 className="text-2xl font-semibold text-vd-blue mb-4">Reckelberg Partnership</h3>
              <p className="text-gray-600 mb-4">
                Exclusive North American partner for advanced battery recycling technologies, including:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-vd-orange mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">High-voltage battery discharge systems</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-vd-orange mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Vacuum drying with electrolyte recovery</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-vd-orange mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">RET Impact Reactor for black mass production</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
            >
              <h3 className="text-2xl font-semibold text-vd-blue mb-4">Test Center Capabilities</h3>
              <p className="text-gray-600 mb-4">
                Our Norwalk, CT Test Center offers material testing for:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-vd-orange mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">E-scrap separation feasibility</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-vd-orange mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Optical sorting optimization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-vd-orange mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Custom application development</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Performance Statistics */}
        <div className="bg-gradient-to-r from-vd-blue to-vd-blue-dark rounded-2xl p-8 md:p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Performance Specifications</h2>
            <p className="text-gray-200 max-w-2xl mx-auto">
              Precision engineering delivering measurable results across all technology platforms
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-vd-orange mb-2">{stat.number}</div>
                <div className="text-gray-200 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;