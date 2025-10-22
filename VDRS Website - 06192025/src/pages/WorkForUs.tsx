import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Wrench, User, FileText } from 'lucide-react';

const WorkForUs = () => {
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
        {/* Tabs for sections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex justify-center space-x-4 flex-wrap gap-2"
        >
          <button
            onClick={() => setActiveTab('whoIsVanDyk')}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              activeTab === 'whoIsVanDyk'
                ? 'bg-vd-orange text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            Who is VAN DYK?
          </button>
          <button
            onClick={() => setActiveTab('whatWeDo')}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              activeTab === 'whatWeDo'
                ? 'bg-vd-orange text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            What We Do
          </button>
          <button
            onClick={() => setActiveTab('howWereDifferent')}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              activeTab === 'howWereDifferent'
                ? 'bg-vd-orange text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            How We're Different
          </button>
          {jobRoles.map(role => (
            <button
              key={role.id}
              onClick={() => setActiveTab(role.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                activeTab === role.id
                  ? 'bg-vd-orange text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {role.name}
            </button>
          ))}
        </motion.div>

        {/* Tab Content */}
        {activeTab === 'whoIsVanDyk' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-vd-blue mb-6">Who is VAN DYK?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Van Dyk Recycling Solutions is the leading provider of recycling sorting systems in the world.
              Van Dyk helps waste and recycling companies maximize their profits by supplying state of the art
              sorting systems and equipment to process recycled materials.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We provide solutions to the most complex waste and recycling sorting facilities in North America,
              including the following market segments: residential single stream sorting systems, commercial,
              construction & demolition, and plastics processing.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Founded in 1984 and based in Norwalk, Connecticut, we've had exceptional growth in the last several years.
              Our team consists of industry experts and we are looking to add to that by developing a workforce of
              innovative, service-driven leaders.
            </p>
            
            <h3 className="text-2xl font-semibold text-vd-orange mb-4">Our Headquarters in Norwalk, CT</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <img src="/Images/van-dyk-main-entrance.png" alt="Main entrance at Van Dyk Recycling Solutions" className="rounded-lg shadow-md" />
              <img src="/Images/van-dyk-lobby.png" alt="Lobby at Van Dyk Recycling Solutions" className="rounded-lg shadow-md" />
              <img src="/Images/van-dyk-living-wall.png" alt="Living wall at Van Dyk Recycling Solutions" className="rounded-lg shadow-md" />
              <img src="/Images/van-dyk-board-room.png" alt="Board room at Van Dyk Recycling Solutions" className="rounded-lg shadow-md" />
              <img src="/Images/van-dyk-gym.png" alt="Gym at Van Dyk Recycling Solutions" className="rounded-lg shadow-md" />
              <img src="/Images/van-dyk-cafe.png" alt="Café at Van Dyk Recycling Solutions" className="rounded-lg shadow-md" />
              <img src="/Images/van-dyk-conference-center.png" alt="Conference center lounge at Van Dyk Recycling Solutions" className="rounded-lg shadow-md" />
              <img src="/Images/van-dyk-warehouse.png" alt="Warehouse at Van Dyk Recycling Solutions" className="rounded-lg shadow-md" />
              <img src="/Images/van-dyk-baler-rebuild.png" alt="Baler rebuild at Van Dyk Recycling Solutions" className="rounded-lg shadow-md" />
            </div>
          </motion.div>
        )}

        {activeTab === 'whatWeDo' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-vd-blue mb-6">What We Do</h2>
            <p className="text-gray-700 leading-relaxed">
              We partner with our clients to improve their business performance through more reliable operations
              and innovative strategies that reduce their labor costs, mitigate risk of downtime, increase the
              quality of their end products, ensure safety of personnel, and optimize costs associated with
              operations, maintenance, and total asset spend.
            </p>
          </motion.div>
        )}

        {activeTab === 'howWereDifferent' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-vd-blue mb-6">How We're Different</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The innovative people of Van Dyk Recycling Solutions are the lifeline of the organization,
              filling the hallways with contagious energy and enthusiasm. Our team has the freedom and latitude
              to develop their own creativity within our stable organization. Van Dyk has a true family feel.
              It is still family owned and family operated and still small enough that you can make a difference
              and your voice will be heard.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We value our employees and offer an excellent benefits package with full health insurance for you
              and your dependents, including dental, and full life insurance.
            </p>
          </motion.div>
        )}

        {activeTab === 'fieldService' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-vd-blue mb-6">Field Service Technician</h2>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              Van Dyk Recycling Solutions has several vacancies across the United States, in Canada and in Mexico. Van Dyk is a rapidly growing company and we are constantly seeking additional service technicians for the installation and service of large industrial recycling equipment installations.
            </p>

            <h3 className="text-2xl font-semibold text-vd-orange mb-4">The Role</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li className="mb-2">You will be responsible for handling turn-key installation, service and maintenance of all machinery sold by Van Dyk. You will troubleshoot, repair and resolve any issues with the associated equipment. Installations and service can be electrical, hydraulic and/or mechanical in nature.</li>
              <li className="mb-2">You will maintain contact with the customer, as it pertains to the installation, training, or service of the customer's machines.</li>
              <li className="mb-2">Regularly you will have to perform preventive maintenance inspections on machines.</li>
              <li className="mb-2">Part of the job is also to train the customer on the safe operating procedures and standard preventative maintenance of all equipment.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              90% of jobs will require you to travel; 60% of that is within a designated territory (near your home). Deployment in Canada, Mexico and occasionally elsewhere in Central America is also possible.
            </p>

            <h3 className="text-2xl font-semibold text-vd-orange mb-4">Experience Needed</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li className="mb-2">Knowledge of electrical, mechanical, and/or hydraulic systems and schematics. Candidate should be able to read electrical and hydraulic diagrams, connection drawings and mechanical drawings. Specifically, on the electrical side candidate should be comfortable working with 480 volt electrical.</li>
              <li className="mb-2">Experience working with relevant large machinery is beneficial. Troubleshooting experience is extremely sought after – being able to diagnose the issue on site and find the optimal solution for the customer.</li>
              <li className="mb-2">Solid verbal communication skills in English (other languages such as Spanish, French, Dutch, German, or Polish are an advantage).</li>
              <li className="mb-2">Excellent customer relations skills. As a Field Service Engineer you are the ambassador of our company. Customer focus and customer friendliness are therefore absolute requirements.</li>
              <li className="mb-2">Willingness to work outside normal working hours and to spend nights on location if necessary.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-vd-orange mb-4">Benefits</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 ml-4">
              <li className="mb-2">Salaried position with paid overtime (travel and work) for anything beyond 8 hours per business day. Work and travel on Saturday and Sunday are considered overtime.</li>
              <li className="mb-2">20 paid vacation days and 8 paid holidays.</li>
              <li className="mb-2">Paid health insurance for you, your spouse, and dependent children.</li>
              <li className="mb-2">Paid dental insurance for you, your spouse, and dependent children.</li>
              <li className="mb-2">Paid $250,000.00 life insurance policy.</li>
              <li className="mb-2">Profit-sharing pension plan as well as an additional 401K plan offer.</li>
              <li className="mb-2">A varied and challenging position with a high degree of independence within an internationally active organization with strong growth ambitions. Plenty of opportunities for personal development.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-vd-orange mb-4">Apply</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              For more information about the position or to submit a resume and cover letter, please contact 
              <a href="mailto:gmarr@vdrs.com" className="text-vd-orange hover:underline font-semibold">
                Ginny Marr at gmarr@vdrs.com
              </a>.
            </p>
          </motion.div>
        )}

        {activeTab === 'mechanicalInstaller' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-vd-blue mb-6">Mechanical Installer</h2>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              Van Dyk Recycling Solutions has several vacancies across the United States, in Canada and in Mexico. Van Dyk is a family-owned, rapidly growing company, and we are constantly seeking additional mechanical installers for the installation of large industrial recycling equipment.
            </p>

            <h3 className="text-2xl font-semibold text-vd-orange mb-4">The Role</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li className="mb-2">You will be responsible for mechanical installation of all machinery sold by Van Dyk.</li>
              <li className="mb-2">Installations may be a single piece of equipment or a complete sorting system. Systems consist of conveyors, screens, balers and optical sorters.</li>
              <li className="mb-2">You will receive training in the form of hands-on experiential learning, during which you will travel to sites and shadow veteran mechanics on installations, working alongside them.</li>
              <li className="mb-2">You will maintain contact with the customer as it pertains to the installation.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              90% of jobs will require you to travel within the United States. Deployment in Canada, Mexico and other locations abroad is also possible.
            </p>

            <h3 className="text-2xl font-semibold text-vd-orange mb-4">Experience Needed</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li className="mb-2">Candidate should have experience erecting heavy equipment.</li>
              <li className="mb-2">Experience working with related large machinery is a plus.</li>
              <li className="mb-2">Strong work ethic and willingness to heed advice are a must. Candidate should be able to work diligently in an unsupervised setting.</li>
              <li className="mb-2">Solid verbal communication skills in English (other languages such as Spanish, French, Dutch, German, or Polish are an advantage).</li>
            </ul>

            <h3 className="text-2xl font-semibold text-vd-orange mb-4">Benefits</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 ml-4">
              <li className="mb-2">Salaried position with paid overtime (travel and work) for anything beyond 8 hours per business day. Work and travel on Saturday and Sunday are considered overtime.</li>
              <li className="mb-2">20 paid vacation days and 8 paid holidays.</li>
              <li className="mb-2">Fully funded health insurance for you, your spouse, and dependent children (including company-funded HSA to fully cover deductibles).</li>
              <li className="mb-2">Paid dental insurance for you, your spouse, and dependent children.</li>
              <li className="mb-2">Paid $250,000.00 life insurance policy.</li>
              <li className="mb-2">Profit-sharing pension plan where approx. 7-12% of your salary is put in to an account for your future pension.</li>
              <li className="mb-2">Additional 401K plan offer.</li>
              <li className="mb-2">A varied and challenging position with a high degree of independence within an internationally active organization with strong growth. Plenty of opportunities for personal development.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-vd-orange mb-4">Apply</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              For more information about the position or to submit a resume and cover letter, please contact 
              <a href="mailto:meenkemavandijk@vdrs.com" className="text-vd-orange hover:underline font-semibold">
                Maarten Eenkema van Dijk at meenkemavandijk@vdrs.com
              </a>.
            </p>
          </motion.div>
        )}

        {activeTab === 'interns' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-vd-blue mb-6">Internships</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Van Dyk Recycling Solutions offers challenging and rewarding internship opportunities across various technical disciplines, including electrical, mechanical, and hydraulic systems. As a rapidly growing company, we are committed to nurturing future talent by providing hands-on experience in the installation, service, and maintenance of large industrial recycling equipment.
            </p>

            <h3 className="text-2xl font-semibold text-vd-orange mb-4">The Internship Experience</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li className="mb-2">Gain practical experience in real-world projects, working alongside experienced technicians and installers.</li>
              <li className="mb-2">Learn about the intricacies of industrial recycling equipment, from single machines to complete sorting systems (conveyors, screens, balers, optical sorters).</li>
              <li className="mb-2">Develop skills in troubleshooting, repair, and preventive maintenance for electrical, hydraulic, and mechanical systems.</li>
              <li className="mb-2">Understand customer relations and communication in a professional environment.</li>
              <li className="mb-2">Opportunity for travel to project sites within the United States, and potentially Canada or Mexico, to observe and assist with installations and service calls.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-vd-orange mb-4">Who We're Looking For</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
              <li className="mb-2">Students or recent graduates with a strong interest in electrical, mechanical, or hydraulic systems.</li>
              <li className="mb-2">Eagerness to learn and a strong work ethic.</li>
              <li className="mb-2">Ability to work independently and as part of a team.</li>
              <li className="mb-2">Solid verbal communication skills in English are preferred.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-vd-orange mb-4">Benefits of Interning with Van Dyk</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 ml-4">
              <li className="mb-2">Opportunity to gain valuable industry experience and build a professional network.</li>
              <li className="mb-2">Mentorship from industry experts.</li>
              <li className="mb-2">A varied and challenging position within an internationally active organization with strong growth ambitions.</li>
              <li className="mb-2">Potential for future full-time employment.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-vd-orange mb-4">Apply</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              For more information about internship opportunities or to submit a resume and cover letter, please 
              <a href="/contact" className="text-vd-orange hover:underline font-semibold">
                contact us
              </a>.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default WorkForUs; 