import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, Clock, Users, Settings, FileText, Shield, 
  ArrowRight, Download, Calendar, Phone, Mail,
  Wrench, AlertTriangle, TrendingUp, Award, Star, DollarSign
} from 'lucide-react';

const PMI = () => {

  const pmiProcess = [
    {
      step: 1,
      title: 'Initial Assessment & Scheduling',
      description: 'We schedule two comprehensive visits per year, with 8 hours allotted for each visit',
      icon: Calendar,
      duration: 'Pre-scheduled',
      details: [
        'Two visits per year scheduled in advance',
        '8 hours allotted for each visit',
        'Travel time and mileage included',
        'Flexible scheduling to minimize disruption'
      ]
    },
    {
      step: 2,
      title: 'Comprehensive Equipment Inspection',
      description: 'Thorough examination of Bollegraaf, Lubo, and TOMRA machinery components',
      icon: Settings,
      duration: '8 hours per visit',
      details: [
        'Complete mechanical component inspection',
        'Electrical system evaluation',
        'Hydraulic system assessment',
        'Control system verification',
        'Safety system testing'
      ]
    },
    {
      step: 3,
      title: 'On-Site Repairs & Adjustments',
      description: 'Immediate repairs and adjustments made during the visit window',
      icon: Wrench,
      duration: 'Within 8-hour window',
      details: [
        'Small repairs completed on-site',
        'Performance optimization adjustments',
        'Calibration and fine-tuning',
        'Immediate issue resolution',
        'Preventive part replacement'
      ]
    },
    {
      step: 4,
      title: 'Detailed Reporting & Documentation',
      description: 'Comprehensive report with recommendations and maintenance records',
      icon: FileText,
      duration: 'Post-visit',
      details: [
        'Detailed inspection report',
        'Performance recommendations',
        'Maintenance schedule updates',
        'Records kept on file at VAN DYK headquarters',
        'Follow-up recommendations'
      ]
    }
  ];

  const pmiBenefits = [
    {
      icon: Shield,
      title: 'Extended Equipment Life',
      description: 'Proactive maintenance extends equipment lifespan by 30-50%',
      stat: '30-50%'
    },
    {
      icon: AlertTriangle,
      title: 'Reduced Emergency Calls',
      description: 'Preventive maintenance reduces emergency service calls by up to 80%',
      stat: '80%'
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'Regular PMI improves equipment efficiency and throughput',
      stat: '15-25%'
    },
    {
      icon: Award,
      title: 'Cost Savings',
      description: 'Preventive maintenance saves 3-5x the cost of reactive repairs',
      stat: '3-5x'
    }
  ];

  const equipmentTypes = [
    {
      name: 'Bollegraaf Balers',
      image: '/Images/bollegraaf-new-1.jpg',
      description: 'Comprehensive baler inspection and optimization for maximum performance',
      features: ['Ram inspection and maintenance', 'Hydraulic system check', 'Control system verification', 'Safety system testing', 'Performance optimization']
    },
    {
      name: 'Lubo Screens',
      image: '/Images/lubo-screening-new.jpg',
      description: 'Screening system inspection and maintenance for optimal material separation',
      features: ['Screen deck inspection', 'Drive system check', 'Material flow optimization', 'Wear pattern analysis', 'Performance calibration']
    },
    {
      name: 'TOMRA Optical Sorters',
      image: '/Images/tomra-optical-sorting-new.jpg',
      description: 'Advanced optical sorting system maintenance and calibration',
      features: ['Sensor calibration', 'Camera system check', 'Software updates', 'Performance optimization', 'Recognition accuracy testing']
    }
  ];

  const testimonials = [
    {
      name: 'Kevin Hanner',
      company: 'Smurfit Westrock',
      role: 'Plant Manager',
      content: 'Todd presented the information in an easy to understand format and was very thorough in his explanations. The small class size gave us the ability to dive deep into technical details of classifier builds, geometry, and sensors.',
      rating: 5,
      image: '/Images/contact-team-photo.jpg'
    },
    {
      name: 'An Kruan',
      company: 'WM Germantown',
      role: 'Operations Director',
      content: 'OUTSTANDING. Well versed and personable. Much more in-depth than other training programs. Very beneficial for knowledgeable maintenance staff which is key to efficient operations.',
      rating: 5,
      image: '/Images/contact-team-photo.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-vd-blue-dark to-vd-blue text-white py-20 -mt-20 pt-20">
        <div className="absolute inset-0 bg-[url('/Images/image-1749759459073.png')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 relative pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Preventive Maintenance Inspection (PMI)
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Yearly plan with two expert checkups per year for Bollegraaf, Lubo, and TOMRA machinery
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-vd-orange hover:bg-vd-orange-alt text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center"
                onClick={() => document.getElementById('schedule-pmi')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Schedule PMI Service
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is PMI Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-vd-blue mb-6">
                  What is VAN DYK's PMI Plan?
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  VAN DYK's Preventive Maintenance Inspection (PMI) plan is a yearly service program for Bollegraaf, Lubo, and TOMRA machinery. 
                  The plan includes two equipment checkups per year to diagnose any unforeseen problems and detect potential issues before they occur, 
                  keeping your downtime to a minimum.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-vd-blue mb-1">Proactive Approach</h3>
                      <p className="text-gray-600">Identify and address issues before they cause downtime</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-vd-blue mb-1">Expert Technicians</h3>
                      <p className="text-gray-600">Factory-trained professionals with deep equipment knowledge</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-vd-blue mb-1">Comprehensive Reporting</h3>
                      <p className="text-gray-600">Detailed reports with actionable recommendations</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/Images/greyparrot-ai-new.jpg"
                  alt="PMI Inspection in Progress"
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Expert Inspection</h3>
                  <p className="text-sm opacity-90">Factory-trained technicians performing comprehensive PMI</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PMI Process Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-vd-blue mb-4">
                Our PMI Process
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A systematic approach to preventive maintenance that ensures comprehensive coverage and optimal results
              </p>
            </div>

            <div className="space-y-8">
              {pmiProcess.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className="flex-1">
                    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                      <div className="flex items-center mb-6">
                        <div className="bg-vd-orange text-white rounded-full p-3 mr-4">
                          <step.icon className="h-8 w-8" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-vd-blue">{step.title}</h3>
                          <div className="flex items-center text-sm text-gray-500 mt-1">
                            <Clock className="w-4 h-4 mr-1" />
                            <span>{step.duration}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {step.description}
                      </p>
                      <ul className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="bg-vd-blue text-white rounded-full w-24 h-24 flex items-center justify-center text-3xl font-bold">
                      {step.step}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* PMI Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-vd-blue mb-4">
                PMI Benefits
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Experience significant improvements in equipment performance, reliability, and cost efficiency
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pmiBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 group text-center border border-gray-100"
                >
                  <div className="bg-vd-orange/10 p-4 rounded-xl w-fit mx-auto mb-6 group-hover:bg-vd-orange/20 transition-colors">
                    <benefit.icon className="h-8 w-8 text-vd-orange" />
                  </div>
                  <div className="text-3xl font-bold text-vd-blue mb-2">{benefit.stat}</div>
                  <h3 className="text-xl font-bold text-vd-blue mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision-AR Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-vd-blue mb-4">
                Introducing: VAN DYK Vision-AR™
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Technology that brings the expert closer to you with augmented reality support
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold text-vd-blue mb-6">What is Vision-AR™?</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Van Dyk Vision-AR™ is a voice-activated computer that you wear as a headset. It includes a camera, headphones, 
                  microphones, and a 1-inch computer that displays to the eye as a 7-inch tablet. It allows you to communicate 
                  with our service desk more clearly than ever before by sharing screens.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-vd-blue mb-1">Real-Time Support</h4>
                      <p className="text-gray-600">Camera streaming and augmented reality for in-person service simulation</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-vd-blue mb-1">Visual Guidance</h4>
                      <p className="text-gray-600">Superimposed icons, arrows, and text boxes for clear directions</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-vd-blue mb-1">Hands-Free Operation</h4>
                      <p className="text-gray-600">100% hands-free design lets you follow directives without halting communication</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gray-900 rounded-2xl p-8 text-center">
                  <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center mb-6">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/h_CBQczJgxY"
                      title="Van Dyk Vision-AR™ Troubleshooting"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                      className="rounded-lg"
                    ></iframe>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">See Vision-AR™ in Action</h4>
                  <p className="text-gray-300">Watch our expert technicians troubleshoot in real time</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 text-center"
              >
                <div className="bg-vd-orange/10 p-4 rounded-xl w-fit mx-auto mb-6">
                  <Clock className="h-8 w-8 text-vd-orange" />
                </div>
                <h3 className="text-xl font-bold text-vd-blue mb-4">Immediate Solutions</h3>
                <p className="text-gray-600">Receive immediate solutions with clear communication and priority phone service</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 text-center"
              >
                <div className="bg-vd-orange/10 p-4 rounded-xl w-fit mx-auto mb-6">
                  <DollarSign className="h-8 w-8 text-vd-orange" />
                </div>
                <h3 className="text-xl font-bold text-vd-blue mb-4">Cost Savings</h3>
                <p className="text-gray-600">Eliminate service visits and associated costs while maintaining expert support</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 text-center"
              >
                <div className="bg-vd-orange/10 p-4 rounded-xl w-fit mx-auto mb-6">
                  <Shield className="h-8 w-8 text-vd-orange" />
                </div>
                <h3 className="text-xl font-bold text-vd-blue mb-4">Enhanced Safety</h3>
                <p className="text-gray-600">Our technicians monitor and advise on safe practices while looking in on your plant</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Equipment Types Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-vd-blue mb-4">
                Equipment We Service
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our PMI program covers all major recycling equipment types with specialized inspection protocols
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {equipmentTypes.map((equipment, index) => (
                <motion.div
                  key={equipment.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={equipment.image}
                      alt={equipment.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold">{equipment.name}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{equipment.description}</p>
                    <ul className="space-y-2">
                      {equipment.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-vd-blue mb-4">
                PMI Pricing & Plans
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                All PMI plans are priced at a custom rate. Contact our service department for a personalized quote.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-gradient-to-br from-vd-blue to-vd-blue-dark text-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">What's Included</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Two visits per year</h4>
                      <p className="text-blue-100 text-sm">Eight hours allotted for each visit</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Travel costs covered</h4>
                      <p className="text-blue-100 text-sm">Cost of flight or mileage, plus travel time</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Detailed reporting</h4>
                      <p className="text-blue-100 text-sm">Records kept on file at VAN DYK headquarters</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">On-site repairs</h4>
                      <p className="text-blue-100 text-sm">Small repairs made within the allotted time</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Overtime benefits</h4>
                      <p className="text-blue-100 text-sm">Overtime billed at regular rate (not overtime rate)</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-vd-blue mb-6">Important Notes</h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-vd-orange pl-4">
                    <h4 className="font-semibold text-vd-blue mb-2">Plan Expiration</h4>
                    <p className="text-gray-600 text-sm">Preventive maintenance visits must be taken within one year of entering the plan or they will expire.</p>
                  </div>
                  <div className="border-l-4 border-vd-orange pl-4">
                    <h4 className="font-semibold text-vd-blue mb-2">Auto-Renewal</h4>
                    <p className="text-gray-600 text-sm">Packages will be automatically renewed after one year unless canceled by the customer.</p>
                  </div>
                  <div className="border-l-4 border-vd-orange pl-4">
                    <h4 className="font-semibold text-vd-blue mb-2">Routine Maintenance</h4>
                    <p className="text-gray-600 text-sm">PMI packages are not a substitute for routine maintenance work. Customers should still perform regular maintenance.</p>
                  </div>
                  <div className="border-l-4 border-red-400 pl-4">
                    <h4 className="font-semibold text-red-600 mb-2">Not Included</h4>
                    <p className="text-gray-600 text-sm">Spare parts are excluded from the price of all packages.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="bg-vd-orange/10 rounded-2xl p-8 border border-vd-orange/20">
                <h3 className="text-xl font-bold text-vd-blue mb-4">Ready for a Custom Quote?</h3>
                <p className="text-gray-600 mb-6">Contact VAN DYK Service for more information or a custom quote tailored to your equipment needs.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+12039671100"
                    className="bg-vd-orange hover:bg-vd-orange-alt text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                  >
                    <Phone className="mr-2 w-5 h-5" />
                    Call (203) 967-1100
                  </a>
                  <a
                    href="mailto:service@vdrs.com"
                    className="border-2 border-vd-orange text-vd-orange hover:bg-vd-orange hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                  >
                    <Mail className="mr-2 w-5 h-5" />
                    Email service@vdrs.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-vd-blue mb-4">
                Customer Success Stories
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                See how PMI has helped our customers improve their operations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
                >
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-vd-blue">{testimonial.name}</h3>
                      <p className="text-gray-600">{testimonial.role}, {testimonial.company}</p>
                      <div className="flex items-center mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed italic">"{testimonial.content}"</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Schedule PMI Section */}
      <section id="schedule-pmi" className="py-20 bg-vd-blue text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Schedule Your PMI?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Contact our PMI specialists to schedule your preventive maintenance inspection and start maximizing your equipment performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:+12039671100"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-vd-orange hover:bg-vd-orange-alt text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call (203) 967-1100
              </motion.a>
              <motion.a
                href="mailto:info@vdrs.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white hover:bg-white hover:text-vd-blue px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
              >
                <Mail className="mr-2 w-5 h-5" />
                Email Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default PMI;
