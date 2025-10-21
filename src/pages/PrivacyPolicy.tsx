import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, Mail, Phone, MapPin } from 'lucide-react';
import SEO from '../components/SEO';
import { SEO_PAGES } from '../utils/seo';

const PrivacyPolicy = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
      <SEO data={SEO_PAGES.privacy} />
      <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-vd-blue-dark text-white py-16"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-vd-orange rounded-full mb-6"
            >
              <Shield className="w-8 h-8 text-white" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-200">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-gray-300 mt-4">
              Last updated: December 2024
            </p>
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        variants={staggerChildren}
        initial="initial"
        animate="animate"
        className="container mx-auto px-4 py-16"
      >
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <motion.section variants={fadeInUp} className="mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-vd-blue-dark mb-4">
                Introduction
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Van Dyk Recycling Solutions ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website vdrs.com or use our services.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By using our website, you consent to the data practices described in this policy.
              </p>
            </div>
          </motion.section>

          {/* Information We Collect */}
          <motion.section variants={fadeInUp} className="mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Database className="w-6 h-6 text-vd-orange mr-3" />
                <h2 className="text-2xl font-bold text-vd-blue-dark">
                  Information We Collect
                </h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-vd-blue-dark mb-3">
                    Personal Information
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Name and contact information (email, phone number)</li>
                    <li>Company name and job title</li>
                    <li>Mailing address and billing information</li>
                    <li>Information provided in forms, surveys, or communications</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-vd-blue-dark mb-3">
                    Technical Information
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>IP address and device information</li>
                    <li>Browser type and version</li>
                    <li>Operating system</li>
                    <li>Pages visited and time spent on our website</li>
                    <li>Referring website information</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-vd-blue-dark mb-3">
                    Cookies and Tracking Technologies
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    We use cookies, web beacons, and similar technologies to enhance your experience, analyze site usage, and personalize content. You can control cookie settings through your browser preferences.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* How We Use Information */}
          <motion.section variants={fadeInUp} className="mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Eye className="w-6 h-6 text-vd-orange mr-3" />
                <h2 className="text-2xl font-bold text-vd-blue-dark">
                  How We Use Your Information
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-vd-blue-dark mb-3">
                    Business Operations
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Process inquiries and provide customer support</li>
                    <li>Send product information and updates</li>
                    <li>Schedule training sessions and consultations</li>
                    <li>Process orders and manage accounts</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-vd-blue-dark mb-3">
                    Marketing & Communications
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Send newsletters and promotional materials</li>
                    <li>Conduct market research and surveys</li>
                    <li>Improve our products and services</li>
                    <li>Personalize website content</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Information Sharing */}
          <motion.section variants={fadeInUp} className="mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Lock className="w-6 h-6 text-vd-orange mr-3" />
                <h2 className="text-2xl font-bold text-vd-blue-dark">
                  Information Sharing and Disclosure
                </h2>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
              </p>
              
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li><strong>Service Providers:</strong> With trusted third-party vendors who assist in our operations</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
                <li><strong>Consent:</strong> When you have given explicit consent for specific sharing</li>
              </ul>
            </div>
          </motion.section>

          {/* Data Security */}
          <motion.section variants={fadeInUp} className="mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-vd-blue-dark mb-6">
                Data Security
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-vd-blue-dark mb-3">
                    Technical Safeguards
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>SSL encryption for data transmission</li>
                    <li>Secure servers and databases</li>
                    <li>Regular security updates and patches</li>
                    <li>Access controls and authentication</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-vd-blue-dark mb-3">
                    Administrative Safeguards
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Employee training on data protection</li>
                    <li>Confidentiality agreements</li>
                    <li>Regular security audits</li>
                    <li>Incident response procedures</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Your Rights */}
          <motion.section variants={fadeInUp} className="mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-vd-blue-dark mb-6">
                Your Privacy Rights
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-vd-blue-dark mb-3">
                    Access & Control
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Request access to your personal data</li>
                    <li>Correct inaccurate information</li>
                    <li>Delete your personal data</li>
                    <li>Restrict processing of your data</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-vd-blue-dark mb-3">
                    Communication Preferences
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Opt-out of marketing communications</li>
                    <li>Unsubscribe from newsletters</li>
                    <li>Manage cookie preferences</li>
                    <li>Withdraw consent at any time</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Contact Information */}
          <motion.section variants={fadeInUp} className="mb-12">
            <div className="bg-gradient-to-r from-vd-blue to-vd-blue-dark text-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">
                Contact Us
              </h2>
              
              <p className="text-gray-200 leading-relaxed mb-6">
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-vd-orange mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Email</h3>
                    <p className="text-gray-200">privacy@vdrs.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-vd-orange mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Phone</h3>
                    <p className="text-gray-200">203-967-1100</p>
                  </div>
                </div>
                
                <div className="flex items-start md:col-span-2">
                  <MapPin className="w-5 h-5 text-vd-orange mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Address</h3>
                    <p className="text-gray-200">
                      Van Dyk Recycling Solutions<br />
                      360 Dr. Martin Luther King Jr. Drive<br />
                      Norwalk, CT 06854
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Updates */}
          <motion.section variants={fadeInUp}>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-vd-blue-dark mb-4">
                Updates to This Policy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the updated policy on our website and updating the "Last updated" date. Your continued use of our website after such changes constitutes acceptance of the updated policy.
              </p>
            </div>
          </motion.section>
        </div>
      </motion.div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
