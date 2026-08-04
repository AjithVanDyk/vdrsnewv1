import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Wrench, Zap, Shield, Users, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const InstallationProcess: React.FC = () => {
  const installationSteps = [
    {
      step: 1,
      title: "Pre-Installation Planning",
      description: "Our engineering team conducts a comprehensive site assessment and develops a detailed installation plan tailored to your facility's specific requirements.",
      icon: <Users className="w-8 h-8" />,
      details: [
        "Site survey and measurements",
        "Equipment layout optimization",
        "Utility connection planning",
        "Safety protocol development",
        "Timeline and resource allocation"
      ]
    },
    {
      step: 2,
      title: "Rigging & Equipment Delivery",
      description: "Factory-trained crews manage the safe delivery and positioning of all equipment components using specialized rigging techniques.",
      icon: <Wrench className="w-8 h-8" />,
      details: [
        "Professional rigging services",
        "Equipment positioning and alignment",
        "Foundation preparation",
        "Crane and lifting operations",
        "Component inventory verification"
      ]
    },
    {
      step: 3,
      title: "Electrical & Controls Integration",
      description: "Certified electricians handle all electrical connections, control system integration, and automation setup for seamless operation.",
      icon: <Zap className="w-8 h-8" />,
      details: [
        "Electrical panel installation",
        "Control system programming",
        "Sensor calibration and testing",
        "Network connectivity setup",
        "Safety system integration"
      ]
    },
    {
      step: 4,
      title: "Safety Sign-Off & Testing",
      description: "Comprehensive safety inspections and system testing ensure all equipment meets industry standards and operates safely.",
      icon: <Shield className="w-8 h-8" />,
      details: [
        "Safety system verification",
        "Emergency stop testing",
        "Lockout/tagout procedures",
        "OSHA compliance inspection",
        "Performance testing and validation"
      ]
    },
    {
      step: 5,
      title: "Commissioning & Training",
      description: "Final system commissioning, operator training, and documentation handover to ensure smooth facility operation.",
      icon: <CheckCircle className="w-8 h-8" />,
      details: [
        "System commissioning and optimization",
        "Operator training and certification",
        "Maintenance procedure training",
        "Documentation and manual handover",
        "Ongoing support planning"
      ]
    }
  ];

  const benefits = [
    "Factory-trained installation crews",
    "Complete turnkey project management",
    "OSHA-compliant safety protocols",
    "Minimized facility downtime",
    "Comprehensive testing and validation",
    "Operator training and certification",
    "Ongoing technical support",
    "Warranty coverage and service agreements"
  ];

  const timeline = [
    { phase: "Planning & Preparation", description: "Site assessment, engineering design, permits, and preparation" },
    { phase: "Equipment Delivery", description: "Rigging, equipment positioning, and component verification" },
    { phase: "Installation & Integration", description: "Electrical, controls, mechanical installation, and system integration" },
    { phase: "Testing & Commissioning", description: "Safety testing, system commissioning, and performance validation" },
    { phase: "Handover & Support", description: "Documentation, operator training, and ongoing technical support" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white smooth-scroll">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-vd-blue-dark to-vd-blue text-white py-20 -mt-20 pt-20">
        <div className="absolute inset-0 bg-[url('/Images/image-1749759459073.png')] bg-cover bg-center opacity-20 scale-110" />
        <div className="container mx-auto px-4 relative pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Equipment Installation & Startup
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Factory-trained crews manage rigging, electrical and controls integration, safety sign-off, and commissioning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-vd-orange hover:bg-vd-orange-alt text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Get Installation Quote</span>
              </Link>
              <Link
                to="/equipment"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-vd-blue px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <ArrowRight className="w-5 h-5" />
                <span>View Equipment</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Installation Process Steps */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-vd-blue mb-6">
            Our Installation Process
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide you with a complete turnkey experience, including design, installation, training and unmatched lifetime service and support.
          </p>
        </motion.div>

        <div className="space-y-12">
          {installationSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="flex-1">
                <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="bg-vd-orange text-white rounded-full p-3 mr-4">
                      {step.icon}
                    </div>
                    <div>
                      <div className="text-sm text-vd-orange font-semibold mb-1">
                        STEP {step.step}
                      </div>
                      <h3 className="text-2xl font-bold text-vd-blue">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 text-lg">
                    {step.description}
                  </p>
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex-1">
                <div className="bg-gradient-to-br from-vd-blue to-vd-blue-dark rounded-xl p-8 text-white">
                  <div className="text-center">
                    <div className="text-6xl font-bold mb-4">{step.step}</div>
                    <div className="text-xl font-semibold mb-2">{step.title}</div>
                    <div className="w-16 h-1 bg-vd-orange mx-auto mb-4"></div>
                    <p className="text-blue-100">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-vd-blue mb-6">
              Why Choose Our Installation Services?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our experienced team ensures your equipment is installed correctly, safely, and efficiently.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-100"
              >
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-vd-blue mb-2">
                  {benefit}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-vd-blue mb-6">
            Installation Timeline
          </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Installation timelines vary significantly based on project complexity, equipment type, facility requirements, and regulatory approvals.
            </p>
        </motion.div>

        <div className="space-y-6">
          {timeline.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-center bg-white rounded-xl shadow-lg p-6 border border-gray-100"
            >
              <div className="bg-vd-orange text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mr-6 flex-shrink-0">
                {index + 1}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-vd-blue mb-2">
                  {phase.phase}
                </h3>
                <p className="text-gray-600 mt-2">
                  {phase.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline Factors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-12 bg-blue-50 rounded-xl p-8 border border-blue-200"
        >
          <h3 className="text-xl font-semibold text-vd-blue mb-4 text-center">
            Timeline Factors
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Project Complexity:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Single equipment vs. complete system</li>
                <li>• New facility vs. retrofit installation</li>
                <li>• Custom modifications required</li>
                <li>• Integration with existing systems</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">External Factors:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Permit and regulatory approval time</li>
                <li>• Weather and seasonal considerations</li>
                <li>• Facility access and logistics</li>
                <li>• Utility connection requirements</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-vd-blue-dark to-vd-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Contact our installation team to discuss your project requirements and get a detailed installation plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-vd-orange hover:bg-vd-orange-alt text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Contact Installation Team</span>
              </Link>
              <Link
                to="/quote"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-vd-blue px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Get Installation Quote</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default InstallationProcess;
