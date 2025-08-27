import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, Mail, Users, Target, Cog, Building } from 'lucide-react';

const TestCenter: React.FC = () => {
	return (
		<div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
			{/* Hero Section */}
			<div className="relative bg-gradient-to-r from-vd-blue-dark to-vd-blue text-white py-20">
				<div className="absolute inset-0 bg-[url('/Images/test-center-hero.jpg')] bg-cover bg-center opacity-20" />
				<div className="container mx-auto px-4 relative">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="max-w-4xl mx-auto text-center"
					>
						<h1 className="text-4xl md:text-5xl font-bold mb-6">Material Testing Center</h1>
						<p className="text-xl text-gray-100 mb-8">
							The largest material test center in the recycling industry, fully capable of replicating in-plant operations with 36,000 square feet of testing space.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<a
								href="tel:203-967-1100"
								className="bg-vd-orange hover:bg-vd-orange-alt text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
							>
								<Phone className="w-5 h-5" />
								<span>Call 203-967-1100</span>
							</a>
							<a
								href="mailto:info@vdrs.com"
								className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
							>
								<Mail className="w-5 h-5" />
								<span>Email info@vdrs.com</span>
							</a>
						</div>
					</motion.div>
				</div>
			</div>

			<div className="container mx-auto px-4 py-16">
				{/* Why a Test Center Section */}
				<motion.section
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="mb-16"
				>
					<div className="max-w-4xl mx-auto">
						<h2 className="text-3xl font-bold text-vd-blue mb-6 text-center">Why a Test Center?</h2>
						<div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
							<p className="text-gray-700 text-lg leading-relaxed">
								This Test Center is our commitment to our customers and the environment. We know how important it is to continually research the sortability of materials and improve our collective process of achieving purity of recyclable grades. The Test Center allows our customers to experiment with new equipment and conceive of how to reach and improve their operating goals. It can also help educate and guide sustainability initiatives toward a greener solution or help those in the municipal sector familiarize themselves with how a sorting system works.
							</p>
						</div>
					</div>
				</motion.section>

				{/* Who Is It For Section */}
				<motion.section
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="mb-16"
				>
					<div className="max-w-6xl mx-auto">
						<h2 className="text-3xl font-bold text-vd-blue mb-8 text-center">Who Is It For?</h2>
						<p className="text-gray-700 text-lg mb-8 text-center max-w-4xl mx-auto">
							The Test Center is for anyone who needs to see the innerworkings of a Material Recovery Facility and how certain equipment can influence operations.
						</p>
						
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.1 }}
								className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center"
							>
								<div className="w-16 h-16 bg-vd-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
									<Cog className="w-8 h-8 text-vd-blue" />
								</div>
								<h3 className="text-xl font-semibold text-vd-blue mb-3">MRF Operators</h3>
								<p className="text-gray-600">
									Conduct tests on how to improve certain commodity purity levels and optimize operations.
								</p>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.2 }}
								className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center"
							>
								<div className="w-16 h-16 bg-vd-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
									<Target className="w-8 h-8 text-vd-orange" />
								</div>
								<h3 className="text-xl font-semibold text-vd-blue mb-3">Consultants</h3>
								<p className="text-gray-600">
									Conducting research on ideas to develop new sorting processes and methodologies.
								</p>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.3 }}
								className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center"
							>
								<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
									<Users className="w-8 h-8 text-green-600" />
								</div>
								<h3 className="text-xl font-semibold text-vd-blue mb-3">Sustainability Reps</h3>
								<p className="text-gray-600">
									Test sortability of new types of consumer packaging for sustainability initiatives.
								</p>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.4 }}
								className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center"
							>
								<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
									<Building className="w-8 h-8 text-blue-600" />
								</div>
								<h3 className="text-xl font-semibold text-vd-blue mb-3">Municipal Decision Makers</h3>
								<p className="text-gray-600">
									Study the system to set appropriate goals for their collection programs.
								</p>
							</motion.div>
						</div>
					</div>
				</motion.section>

				{/* How Does It Work Section */}
				<motion.section
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					className="mb-16"
				>
					<div className="max-w-4xl mx-auto">
						<h2 className="text-3xl font-bold text-vd-blue mb-6 text-center">How Does It Work?</h2>
						<div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
								<div>
									<p className="text-gray-700 text-lg leading-relaxed mb-6">
										Schedule your test by calling us at <strong className="text-vd-blue">203-967-1100</strong> or emailing us at <strong className="text-vd-blue">info@vdrs.com</strong>. We'll set a date for you to bring a sample of your material and run it on our continuous loop.
									</p>
									<p className="text-gray-700 text-lg leading-relaxed">
										We have two different line configurations that feature four different optical sorters, various screens, an elliptical separator, and an air system.
									</p>
								</div>
								<div className="bg-vd-blue/5 p-6 rounded-xl">
									<h3 className="text-xl font-semibold text-vd-blue mb-4">Facility Specifications</h3>
									<ul className="space-y-3 text-gray-700">
										<li className="flex items-center space-x-2">
											<div className="w-2 h-2 bg-vd-orange rounded-full"></div>
											<span>18,000 sq ft testing floor</span>
										</li>
										<li className="flex items-center space-x-2">
											<div className="w-2 h-2 bg-vd-orange rounded-full"></div>
											<span>18,000 sq ft material storage</span>
										</li>
										<li className="flex items-center space-x-2">
											<div className="w-2 h-2 bg-vd-orange rounded-full"></div>
											<span>4 different optical sorters</span>
										</li>
										<li className="flex items-center space-x-2">
											<div className="w-2 h-2 bg-vd-orange rounded-full"></div>
											<span>Various screens & separators</span>
										</li>
										<li className="flex items-center space-x-2">
											<div className="w-2 h-2 bg-vd-orange rounded-full"></div>
											<span>2 line configurations</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</motion.section>

				{/* Video Section */}
				<motion.section
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.6 }}
					className="mb-16"
				>
					<div className="max-w-4xl mx-auto">
						<h2 className="text-3xl font-bold text-vd-blue mb-8 text-center">See the Test Center in Operation</h2>
						<div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
							<h3 className="text-2xl font-semibold text-vd-blue mb-6 text-center">Plastic Flake Sorting with AUTOSORT FLAKE</h3>
							<div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
								<iframe
									className="absolute top-0 left-0 w-full h-full rounded-lg"
									src="https://www.youtube.com/embed/5We5bc_97lU"
									title="Plastic Flake Sorting – Now Testing with AUTOSORT FLAKE!"
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									referrerPolicy="strict-origin-when-cross-origin"
									allowFullScreen
								></iframe>
							</div>
							<p className="text-gray-600 text-center mt-4">
								Watch our AUTOSORT FLAKE technology in action, demonstrating advanced plastic flake sorting capabilities.
							</p>
						</div>
					</div>
				</motion.section>

				{/* Call to Action */}
				<motion.section
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.8 }}
					className="text-center"
				>
					<div className="bg-gradient-to-r from-vd-blue to-vd-blue-dark text-white rounded-2xl p-12 shadow-lg">
						<h2 className="text-3xl font-bold mb-4">Ready to Test Your Materials?</h2>
						<p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
							Schedule your visit to our Test Center and discover how our equipment can optimize your recycling operations.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<a
								href="tel:203-967-1100"
								className="bg-vd-orange hover:bg-vd-orange-alt text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 text-lg"
							>
								<Phone className="w-6 h-6" />
								<span>Call 203-967-1100</span>
							</a>
							<a
								href="mailto:info@vdrs.com"
								className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 text-lg"
							>
								<Mail className="w-6 h-6" />
								<span>Email info@vdrs.com</span>
							</a>
						</div>
					</div>
				</motion.section>
			</div>
		</div>
	);
};

export default TestCenter;