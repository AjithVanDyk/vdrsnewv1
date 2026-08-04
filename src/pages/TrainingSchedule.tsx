import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Users, Phone, Mail, CheckCircle, BookOpen, Wrench, Zap, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const TrainingSchedule: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState('2025');

  const trainingPrograms = [
    {
      id: 1,
      name: 'BALER Training',
      description: 'Comprehensive training on Bollegraaf baler operation, maintenance, and troubleshooting.',
      image: '/Images/1.jpg',
      topics: [
        'Baler operation and controls',
        'Maintenance procedures',
        'Safety protocols',
        'Troubleshooting techniques',
        'Performance optimization'
      ],
      prerequisites: 'Basic mechanical knowledge recommended',
      certification: 'Van Dyk University Certificate'
    },
    {
      id: 2,
      name: 'TITECH/TOMRA Autosort Training',
      description: 'Advanced training on optical sorting systems, calibration, and maintenance.',
      image: '/Images/3.jpg',
      topics: [
        'Optical sorting principles',
        'System calibration',
        'Sensor maintenance',
        'Software operation',
        'Performance analysis'
      ],
      prerequisites: 'Basic electronics knowledge recommended',
      certification: 'TOMRA Certified Operator Certificate'
    },
    {
      id: 3,
      name: 'PELLENC ST Training',
      description: 'Specialized training on Pellenc ST optical sorting technology and applications.',
      image: '/Images/4.jpg',
      topics: [
        'Pellenc ST technology overview',
        'System configuration',
        'Maintenance procedures',
        'Application optimization',
        'Troubleshooting methods'
      ],
      prerequisites: 'Basic technical knowledge recommended',
      certification: 'Pellenc ST Certified Technician'
    }
  ];

  const schedule2025 = [
    { training: 'BALER', dates: 'March 17-21', status: 'Closed', seats: 0 },
    { training: 'TITECH/TOMRA Autosort', dates: 'March 31-April 4', status: 'Closed', seats: 0 },
    { training: 'TITECH/TOMRA Autosort', dates: 'April 28-May 2', status: 'Closed', seats: 0 },
    { training: 'BALER', dates: 'May 5-9', status: 'Closed', seats: 0 },
    { training: 'PELLENC ST', dates: 'May 5-9', status: 'Closed', seats: 0 },
    { training: 'TITECH/TOMRA Autosort', dates: 'May 19-23', status: 'Closed', seats: 0 },
    { training: 'PELLENC ST', dates: 'June 2-6', status: 'Closed', seats: 0 },
    { training: 'TITECH/TOMRA Autosort', dates: 'June 16-20', status: 'Closed', seats: 0 },
    { training: 'BALER', dates: 'June 23-27', status: 'Closed', seats: 0 },
    { training: 'TITECH/TOMRA Autosort', dates: 'July 14-18', status: 'Closed', seats: 0 },
    { training: 'TITECH/TOMRA Autosort', dates: 'August 11-15', status: 'Closed', seats: 0 },
    { training: 'BALER', dates: 'August 18-22', status: 'Closed', seats: 0 },
    { training: 'BALER', dates: 'September 8-12', status: 'Closed', seats: 0 },
    { training: 'TITECH/TOMRA Autosort', dates: 'September 15-19', status: 'Open', seats: 8 },
    { training: 'BALER', dates: 'October TBD', status: 'Open', seats: 12 },
    { training: 'TITECH/TOMRA Autosort', dates: 'October 13-17', status: 'Open', seats: 6 }
  ];

  const schedule2026 = [
    { training: 'BALER', dates: 'January 6-10', status: 'Open', seats: 15 },
    { training: 'TITECH/TOMRA Autosort', dates: 'January 20-24', status: 'Open', seats: 12 },
    { training: 'PELLENC ST', dates: 'February 3-7', status: 'Open', seats: 10 },
    { training: 'BALER', dates: 'February 17-21', status: 'Open', seats: 15 },
    { training: 'TITECH/TOMRA Autosort', dates: 'March 3-7', status: 'Open', seats: 12 },
    { training: 'PELLENC ST', dates: 'March 17-21', status: 'Open', seats: 10 },
    { training: 'BALER', dates: 'April 7-11', status: 'Open', seats: 15 },
    { training: 'TITECH/TOMRA Autosort', dates: 'April 21-25', status: 'Open', seats: 12 }
  ];

  const benefits = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Comprehensive Curriculum',
      description: 'Hands-on training covering all aspects of equipment operation and maintenance'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Expert Instructors',
      description: 'Learn from factory-trained professionals with years of industry experience'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Industry Certification',
      description: 'Receive recognized certificates upon successful completion of training programs'
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Hands-On Experience',
      description: 'Practical training on actual equipment in our state-of-the-art facility'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Flexible Scheduling',
      description: 'Multiple training sessions throughout the year to fit your schedule'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Ongoing Support',
      description: 'Access to technical support and refresher training opportunities'
    }
  ];

  const currentSchedule = selectedYear === '2025' ? schedule2025 : schedule2026;

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
              Van Dyk University Training
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Operator and maintenance training delivered at your site or at Van Dyk University. Courses cover balers, TOMRA AUTOSORT®, and system best practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-vd-orange hover:bg-vd-orange-alt text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Register for Training</span>
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

      {/* Training Programs */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-vd-blue mb-6">
            Training Programs
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive training programs designed to maximize equipment performance and operator safety.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {trainingPrograms.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
            >
              <div className="relative h-48 w-full">
                <img
                  src={program.image}
                  alt={`${program.name} training`}
                  className="w-full h-full object-cover"
                  width="400"
                  height="192"
                  loading="lazy"
                  onError={(e) => { e.currentTarget.src = '/Images/van-dyk-university.jpg'; }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-vd-blue mb-3">
                  {program.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {program.description}
                </p>
                <div className="space-y-2 mb-4">
                  <h4 className="font-semibold text-gray-800">Key Topics:</h4>
                  <ul className="text-sm text-gray-600">
                    {program.topics.slice(0, 3).map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {topic}
                      </li>
                    ))}
                    {program.topics.length > 3 && (
                      <li className="text-vd-orange font-medium">
                        +{program.topics.length - 3} more topics
                      </li>
                    )}
                  </ul>
                </div>
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                    <span>Prerequisites:</span>
                    <span className="text-right">{program.prerequisites}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>Certificate:</span>
                    <span className="text-right font-medium text-vd-blue">{program.certification}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Training Schedule */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-vd-blue mb-6">
              Training Schedule
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              View our upcoming training sessions and register for the program that fits your schedule.
            </p>
            
            {/* Year Selector */}
            <div className="flex justify-center mb-8">
              <div className="bg-white rounded-lg p-1 shadow-lg">
                <button
                  onClick={() => setSelectedYear('2025')}
                  className={`px-6 py-2 rounded-md font-semibold transition-colors ${
                    selectedYear === '2025'
                      ? 'bg-vd-orange text-white'
                      : 'text-gray-600 hover:text-vd-blue'
                  }`}
                >
                  2025
                </button>
                <button
                  onClick={() => setSelectedYear('2026')}
                  className={`px-6 py-2 rounded-md font-semibold transition-colors ${
                    selectedYear === '2026'
                      ? 'bg-vd-orange text-white'
                      : 'text-gray-600 hover:text-vd-blue'
                  }`}
                >
                  2026
                </button>
              </div>
            </div>
          </motion.div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-vd-blue text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Training</th>
                    <th className="px-6 py-4 text-left font-semibold">Dates</th>
                    <th className="px-6 py-4 text-left font-semibold">Status</th>
                    <th className="px-6 py-4 text-left font-semibold">Available Seats</th>
                    <th className="px-6 py-4 text-left font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {currentSchedule.map((session, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.05 }}
                      className="border-b border-gray-100 hover:bg-gray-50"
                    >
                      <td className="px-6 py-4 font-medium text-vd-blue">
                        {session.training}
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        {session.dates}
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          session.status === 'Open'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {session.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        {session.seats > 0 ? `${session.seats} seats` : 'Full'}
                      </td>
                      <td className="px-6 py-4">
                        {session.status === 'Open' && session.seats > 0 ? (
                          <Link
                            to="/contact"
                            className="bg-vd-orange hover:bg-vd-orange-alt text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                          >
                            Register
                          </Link>
                        ) : (
                          <span className="text-gray-400 text-sm">Closed</span>
                        )}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-vd-blue mb-6">
            Why Choose Van Dyk University?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our training programs are designed to maximize your equipment performance and ensure operator safety.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-100"
            >
              <div className="bg-vd-orange text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-vd-blue mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Registration Info */}
      <div className="bg-gradient-to-r from-vd-blue-dark to-vd-blue text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Register?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Contact us at <a href="mailto:training@vdrs.com" className="text-vd-orange hover:underline">training@vdrs.com</a> or (203) 967-1100 for registration information and course details.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-vd-orange hover:bg-vd-orange-alt text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Contact Training Team</span>
              </Link>
              <a
                href="mailto:training@vdrs.com"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-vd-blue px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Email Training Team</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TrainingSchedule;
