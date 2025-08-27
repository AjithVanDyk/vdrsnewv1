import React from 'react';
import { motion } from 'framer-motion';

const Beginnings = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-vd-blue-dark to-vd-blue text-white py-20">
        <div className="absolute inset-0 bg-[url('/Images/image-1749759459073.png')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Beginnings</h1>
            <p className="text-xl text-gray-100 mb-8">
              Bringing innovative solutions since 1984.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 border border-gray-100"
        >
          <h2 className="text-3xl font-bold text-vd-blue mb-6">A Legacy of Innovation</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            In 1984, brothers Pieter and Erik Eenkema van Dijk traveled from Holland to New York to establish the North American market for Bollegraaf balers. They traveled throughout North America to teach recyclers the advantage of horizontal balers.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Van Dyk Baler Corp. quickly founded a reputation of supplying a product that exceeded promised production and delivered the durability the recycling industry needed for consistent operation. As recycling in North America grew, the van Dijk brothers added recycling systems to their product line and built many of the first dual stream and single stream processing facilities.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            In 2012 we changed our name to VAN DYK Recycling Solutions to better reflect what we provide to our customers. We are committed to finding you the best possible solutions from your tipping floor to your baler. We serve customers across North America in the following markets:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
            <li>Single stream</li>
            <li>Commercial waste</li>
            <li>Construction and demolition</li>
            <li>Municipal solid waste</li>
            <li>Glass cleanup</li>
            <li>Waste to fuel</li>
            <li>Plastics</li>
            <li>E-scrap</li>
            <li>Composting</li>
            <li>Food depackaging</li>
            <li>And more</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Beginnings; 