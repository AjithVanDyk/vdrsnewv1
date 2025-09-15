import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Wrench, User, FileText, ExternalLink } from 'lucide-react';

const Careers = () => {
  const [activeTab, setActiveTab] = useState('whoIsVanDyk');

  const jobRoles = [
    { id: 'fieldService', name: 'Field Service Technician', icon: Wrench },
    { id: 'mechanicalInstaller', name: 'Mechanical Installer', icon: Briefcase },
    { id: 'interns', name: 'Internships', icon: User },
  ];

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Work for Us</h1>
            <p className="text-xl text-gray-100 mb-8">
              Join a team that drives innovation in recycling solutions.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Job Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {jobRoles.map((role, index) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <role.icon className="h-12 w-12 text-vd-orange mr-4" />
                  <h3 className="text-2xl font-bold text-vd-blue">{role.name}</h3>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  {role.id === 'fieldService' && 
                    "Join our team as a Field Service Technician and work with cutting-edge recycling equipment across North America. Travel to customer sites, install and maintain machinery, and provide expert technical support."
                  }
                  {role.id === 'mechanicalInstaller' && 
                    "Become a Mechanical Installer and help build the future of recycling. Work with conveyors, screens, balers, and optical sorters while gaining hands-on experience with industry-leading technology."
                  }
                  {role.id === 'interns' && 
                    "Start your career with our internship program. Gain valuable hands-on experience in electrical, mechanical, and hydraulic systems while working alongside industry experts."
                  }
                </p>

                <div className="space-y-3">
                  <button
                    onClick={() => setActiveTab(role.id)}
                    className="w-full bg-vd-orange hover:bg-vd-orange-alt text-white font-bold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    View Details
                  </button>
                  
                  <a
                    href="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=7YKQMSwus0K6eGyqSyijxbLJzBecdydNjMz8TRHTYd1UQVNMVFpNMFFGMFpGNVRFMEdVWlZNOVFIQi4u&embed=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-vd-blue hover:bg-vd-blue-dark text-white font-bold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center"
                  >
                    <FileText className="h-5 w-5 mr-2" />
                    Apply Now
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Job Position Details Modal */}
        {activeTab === 'fieldService' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 max-w-4xl mx-auto"
          >
            <div className="flex items-center mb-6">
              <Wrench className="h-8 w-8 text-vd-orange mr-4" />
              <h2 className="text-3xl font-bold text-vd-blue">Field Service Technician</h2>
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Van Dyk Recycling Solutions has several vacancies across the United States, in Canada and in Mexico. 
              We are constantly seeking additional service technicians for the installation and service of large 
              industrial recycling equipment installations.
            </p>

            <div className="bg-vd-orange/10 border border-vd-orange/20 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-vd-orange mb-4">Key Responsibilities</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Turn-key installation, service and maintenance of all machinery sold by Van Dyk</li>
                <li>Troubleshoot, repair and resolve equipment issues (electrical, hydraulic, mechanical)</li>
                <li>Maintain customer contact for installation, training, and service</li>
                <li>Perform preventive maintenance inspections</li>
                <li>Train customers on safe operating procedures and maintenance</li>
              </ul>
            </div>

            <div className="bg-vd-blue/10 border border-vd-blue/20 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-vd-blue mb-4">Requirements</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Knowledge of electrical, mechanical, and/or hydraulic systems</li>
                <li>Experience with large machinery and troubleshooting</li>
                <li>Excellent customer relations skills</li>
                <li>Willingness to travel (90% of jobs require travel)</li>
                <li>Solid verbal communication skills in English</li>
              </ul>
            </div>

            <div className="text-center">
              <a
                href="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=7YKQMSwus0K6eGyqSyijxbLJzBecdydNjMz8TRHTYd1UQVNMVFpNMFFGMFpGNVRFMEdVWlZNOVFIQi4u&embed=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-vd-orange hover:bg-vd-orange-alt text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <FileText className="h-5 w-5 mr-2" />
                Apply Now
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </div>
          </motion.div>
        )}

        {activeTab === 'mechanicalInstaller' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 max-w-4xl mx-auto"
          >
            <div className="flex items-center mb-6">
              <Briefcase className="h-8 w-8 text-vd-orange mr-4" />
              <h2 className="text-3xl font-bold text-vd-blue">Mechanical Installer</h2>
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Van Dyk is a family-owned, rapidly growing company seeking additional mechanical installers 
              for the installation of large industrial recycling equipment across the United States, Canada and Mexico.
            </p>

            <div className="bg-vd-orange/10 border border-vd-orange/20 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-vd-orange mb-4">Key Responsibilities</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Mechanical installation of all machinery sold by Van Dyk</li>
                <li>Install single equipment or complete sorting systems</li>
                <li>Work with conveyors, screens, balers and optical sorters</li>
                <li>Hands-on training with veteran mechanics</li>
                <li>Maintain customer contact during installation</li>
              </ul>
            </div>

            <div className="bg-vd-blue/10 border border-vd-blue/20 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-vd-blue mb-4">Requirements</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Experience erecting heavy equipment</li>
                <li>Experience with large machinery preferred</li>
                <li>Strong work ethic and ability to work unsupervised</li>
                <li>Solid verbal communication skills in English</li>
                <li>Willingness to travel (90% of jobs require travel)</li>
              </ul>
            </div>

            <div className="text-center">
              <a
                href="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=7YKQMSwus0K6eGyqSyijxbLJzBecdydNjMz8TRHTYd1UQVNMVFpNMFFGMFpGNVRFMEdVWlZNOVFIQi4u&embed=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-vd-orange hover:bg-vd-orange-alt text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <FileText className="h-5 w-5 mr-2" />
                Apply Now
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </div>
          </motion.div>
        )}

        {activeTab === 'interns' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 max-w-4xl mx-auto"
          >
            <div className="flex items-center mb-6">
              <User className="h-8 w-8 text-vd-orange mr-4" />
              <h2 className="text-3xl font-bold text-vd-blue">Internships</h2>
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Van Dyk Recycling Solutions offers challenging and rewarding internship opportunities across 
              various technical disciplines, including electrical, mechanical, and hydraulic systems. 
              We provide hands-on experience in the installation, service, and maintenance of large 
              industrial recycling equipment.
            </p>

            <div className="bg-vd-orange/10 border border-vd-orange/20 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-vd-orange mb-4">Internship Experience</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Gain practical experience in real-world projects</li>
                <li>Work alongside experienced technicians and installers</li>
                <li>Learn about industrial recycling equipment and sorting systems</li>
                <li>Develop troubleshooting and maintenance skills</li>
                <li>Opportunity for travel to project sites</li>
              </ul>
            </div>

            <div className="bg-vd-blue/10 border border-vd-blue/20 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-vd-blue mb-4">Who We're Looking For</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Students or recent graduates with technical interest</li>
                <li>Eagerness to learn and strong work ethic</li>
                <li>Ability to work independently and as part of a team</li>
                <li>Solid verbal communication skills in English</li>
              </ul>
            </div>

            <div className="text-center">
              <a
                href="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=7YKQMSwus0K6eGyqSyijxbLJzBecdydNjMz8TRHTYd1UQVNMVFpNMFFGMFpGNVRFMEdVWlZNOVFIQi4u&embed=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-vd-orange hover:bg-vd-orange-alt text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <FileText className="h-5 w-5 mr-2" />
                Apply Now
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Careers;
