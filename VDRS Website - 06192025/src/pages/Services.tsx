import React from 'react';
import { motion } from 'framer-motion';
import { Recycle, Settings, Users, BarChart3, Wrench, Shield, Clock, Globe } from 'lucide-react';

const Services = () => {
  const mainServices = [
    {
      title: 'Single Stream Recycling Systems',
      description: 'Complete turnkey solutions for single stream recycling facilities with advanced optical sorting technology.',
      icon: Recycle,
      features: ['Optical sorting technology', 'Material recovery systems', 'Quality control systems', 'Process optimization'],
    },
    {
      title: 'Equipment Installation & Setup',
      description: 'Professional installation and commissioning services for all recycling equipment.',
      icon: Settings,
      features: ['Site preparation', 'Equipment installation', 'System commissioning', 'Performance testing'],
    },
    {
      title: 'Training & Consulting',
      description: 'Comprehensive training programs and expert consulting to maximize operational efficiency.',
      icon: Users,
      features: ['Operator training', 'Process consulting', 'Efficiency optimization', 'Best practices guidance'],
    },
    {
      title: 'Performance Analytics',
      description: 'Advanced analytics and reporting to monitor and optimize your recycling operations.',
      icon: BarChart3,
      features: ['Real-time monitoring', 'Performance metrics', 'Predictive maintenance', 'ROI analysis'],
    },
  ];

  const supportServices = [
    {
      title: '24/7 Technical Support',
      description: 'Round-the-clock technical support for all our equipment and systems.',
      icon: Clock,
    },
    {
      title: 'Preventive Maintenance',
      description: 'Scheduled maintenance programs to ensure optimal equipment performance.',
      icon: Wrench,
    },
    {
      title: 'Warranty & Service',
      description: 'Comprehensive warranty coverage and ongoing service support.',
      icon: Shield,
    },
    {
      title: 'Global Network',
      description: 'Worldwide service network for local support wherever you operate.',
      icon: Globe,
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Assessment',
      description: 'Comprehensive analysis of your current operations and requirements',
    },
    {
      step: '02',
      title: 'Design',
      description: 'Custom solution design tailored to your specific needs and goals',
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Professional installation, training, and ongoing support',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Our Services */}
      <div className="bg-white text-vd-blue py-20 text-center">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto"
          >
            Comprehensive recycling solutions from consultation to implementation and
            ongoing support
          </motion.p>
        </div>
      </div>

      {/* Core Services Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-vd-blue text-center mb-4"
          >
            Core Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-600 text-center max-w-2xl mx-auto mb-12"
          >
            End-to-end solutions for your recycling operations
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6 flex flex-col items-start border border-gray-100"
              >
                <service.icon className="w-10 h-10 text-vd-green mb-4" />
                <h3 className="text-xl font-semibold text-vd-blue mb-2">{service.title}</h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <ul className="list-none space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <span className="inline-block w-2 h-2 rounded-full bg-vd-green mr-3 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Support Services Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-vd-blue text-center mb-4"
          >
            Support Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-600 text-center max-w-2xl mx-auto mb-12"
          >
            Ongoing support to ensure your operations run smoothly
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center border border-gray-100"
              >
                <service.icon className="w-10 h-10 text-vd-green mb-4" />
                <h3 className="text-xl font-semibold text-vd-blue mb-2">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Process Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-vd-blue text-center mb-4"
          >
            Our Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-600 text-center max-w-2xl mx-auto mb-12"
          >
            A systematic approach to delivering exceptional results
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center border border-gray-100"
              >
                <div className="text-5xl font-bold text-vd-blue mb-4">{step.step}</div>
                <h3 className="text-xl font-semibold text-vd-blue mb-2">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-vd-green-dark to-vd-green text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-100 max-w-3xl mx-auto mb-8"
          >
            Contact our team today to discuss your recycling needs and discover how we can help
            optimize your operations.
          </motion.p>
          <motion.a
            href="/contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block bg-white text-vd-green hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg"
          >
            Contact Our Team
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Services;