import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, CheckCircle, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import QuoteForm from '../components/QuoteForm';

interface Solution {
	id?: number;
	name: string;
	image: string;
	description?: string;
	features?: string[];
	specifications?: { [key: string]: string | undefined };
	applications?: string[];
	benefits?: string[];
}

interface SolutionModalProps {
	solution: Solution | null;
	isOpen: boolean;
	onClose: () => void;
}

// Comprehensive solutions from original website
const solutionItems = [
	{
		id: 1,
		name: 'Electronics Waste Recycling',
		image: '/Images/electronics-recycling.jpg',
		description: 'Complete electronics waste recycling solutions including e-waste processing, material recovery, and environmental compliance. Specialized equipment for handling computers, phones, and electronic components.',
		features: [
			'Complete e-waste processing systems',
			'Material recovery and separation',
			'Environmental compliance solutions',
			'Data destruction services',
			'Component disassembly',
			'Precious metal recovery',
			'Hazardous material handling',
			'Certified recycling processes'
		],
		specifications: {
			'Processing Capacity': 'Up to 10 tons per hour',
			'Material Recovery': '95%+ recovery rate',
			'Compliance': 'EPA and state regulations',
			'Certification': 'R2 and e-Stewards certified',
			'Data Security': 'NAID AAA certified destruction',
			'Technology': 'Automated disassembly systems'
		},
		applications: [
			'Corporate IT equipment',
			'Consumer electronics',
			'Medical devices',
			'Telecommunications equipment',
			'Industrial electronics'
		],
		benefits: [
			'Environmental compliance',
			'Data security assurance',
			'Cost-effective disposal',
			'Resource recovery',
			'Regulatory compliance'
		]
	},
	{
		id: 2,
		name: 'Battery Recycling Systems',
		image: '/Images/battery-recycling.jpg',
		description: 'Advanced battery recycling solutions for lithium-ion, lead-acid, and other battery types. Safe handling and processing of batteries with maximum material recovery.',
		features: [
			'Lithium-ion battery processing',
			'Lead-acid battery recycling',
			'Safe handling protocols',
			'Material recovery systems',
			'Environmental compliance',
			'Automated sorting technology',
			'Hazardous material management',
			'Resource optimization'
		],
		specifications: {
			'Battery Types': 'Li-ion, Lead-acid, NiMH, NiCd',
			'Processing Capacity': 'Up to 5 tons per hour',
			'Recovery Rate': '90%+ material recovery',
			'Safety': 'DOT and EPA compliant',
			'Technology': 'Automated sorting and processing',
			'Certification': 'ISO 14001 certified'
		},
		applications: [
			'Electric vehicle batteries',
			'Consumer electronics batteries',
			'Industrial battery systems',
			'Energy storage systems',
			'Portable device batteries'
		],
		benefits: [
			'Safe battery disposal',
			'Maximum material recovery',
			'Environmental protection',
			'Regulatory compliance',
			'Cost-effective processing'
		]
	},
	{
		id: 3,
		name: 'Glass Cleanup Systems',
		image: '/Images/glass-cleanup.jpg',
		description: 'Specialized glass cleanup and processing systems for contaminated glass streams. Advanced technology for glass purification and market preparation.',
		features: [
			'Contaminated glass processing',
			'Advanced cleaning technology',
			'Market-ready glass production',
			'Contamination removal',
			'Quality control systems',
			'Automated sorting',
			'Color separation',
			'Size classification'
		],
		specifications: {
			'Processing Capacity': 'Up to 20 tons per hour',
			'Contamination Removal': '99%+ effectiveness',
			'Glass Quality': 'Market-ready specifications',
			'Technology': 'Advanced cleaning systems',
			'Sorting': 'Automated color and size separation',
			'Quality': 'Consistent output quality'
		},
		applications: [
			'Single stream MRFs',
			'Glass recycling facilities',
			'Municipal recycling programs',
			'Commercial glass processing',
			'Industrial glass recovery'
		],
		benefits: [
			'High-quality glass output',
			'Reduced contamination',
			'Market-ready products',
			'Increased revenue',
			'Environmental compliance'
		]
	},
	{
		id: 4,
		name: 'Composting Densimetric Tables',
		image: '/Images/composting.jpg',
		description: 'Advanced composting solutions with densimetric table technology for organic waste processing. Efficient separation and processing of organic materials.',
		features: [
			'Densimetric table technology',
			'Organic waste processing',
			'Compost quality optimization',
			'Contamination removal',
			'Automated sorting systems',
			'Odor control integration',
			'Moisture management',
			'Temperature monitoring'
		],
		specifications: {
			'Processing Capacity': 'Up to 15 tons per hour',
			'Compost Quality': 'Grade A compost production',
			'Contamination Removal': '95%+ effectiveness',
			'Technology': 'Densimetric separation',
			'Odor Control': 'Integrated systems',
			'Certification': 'USCC certified processes'
		},
		applications: [
			'Municipal composting',
			'Food waste processing',
			'Yard waste recycling',
			'Agricultural waste',
			'Commercial organics'
		],
		benefits: [
			'High-quality compost',
			'Reduced contamination',
			'Odor control',
			'Process optimization',
			'Market-ready products'
		]
	},
	{
		id: 5,
		name: 'Bollegraaf Balers',
		image: '/Images/bollegraaf-baler.jpg',
		description: 'Industry-leading Bollegraaf balers with single ram technology for maximum efficiency and density. No-shear design for superior bale quality.',
		features: [
			'Single ram technology',
			'No-shear compression',
			'Automatic operation',
			'High-density bales',
			'Energy efficient',
			'Low maintenance',
			'Flexible material processing',
			'Pre-press flap technology'
		],
		specifications: {
			'Production Speed': 'Over 35 tons per hour',
			'Power Efficiency': '50% reduction vs two-ram',
			'Bale Density': 'Superior compression',
			'Operation': 'Fully automated',
			'Maintenance': 'Low maintenance design',
			'Technology': 'Single ram, no-shear'
		},
		applications: [
			'Single stream MRFs',
			'Cardboard processing',
			'Plastic baling',
			'Metal processing',
			'Mixed waste baling'
		],
		benefits: [
			'Energy efficiency',
			'High production rates',
			'Superior bale quality',
			'Low operating costs',
			'Automated operation'
		]
	},
	{
		id: 6,
		name: 'AI Waste Analysis',
		image: '/Images/greyparrot-ai-recognition.jpg',
		description: 'Advanced AI-powered waste analysis systems for real-time material identification and quality control. Machine learning technology for optimal sorting decisions.',
		features: [
			'Real-time material identification',
			'AI-powered quality control',
			'Machine learning algorithms',
			'Performance optimization',
			'Data analytics',
			'Predictive maintenance',
			'Automated reporting',
			'Continuous learning'
		],
		specifications: {
			'Identification Accuracy': '95%+ material recognition',
			'Processing Speed': 'Real-time analysis',
			'Technology': 'AI and machine learning',
			'Data Processing': 'Continuous learning',
			'Integration': 'Seamless system integration',
			'Reporting': 'Automated analytics'
		},
		applications: [
			'Material recovery facilities',
			'Quality control systems',
			'Sorting optimization',
			'Performance monitoring',
			'Process improvement'
		],
		benefits: [
			'Improved sorting accuracy',
			'Real-time optimization',
			'Data-driven decisions',
			'Reduced contamination',
			'Performance insights'
		]
	},
	{
		id: 7,
		name: 'TOMRA Optical Sorting',
		image: '/Images/tomra-optical-sorting.jpg',
		description: 'Worldwide leader in optical sorting with industry-highest NIR resolution and patented FLYING BEAM® illumination technology.',
		features: [
			'Industry-highest NIR resolution',
			'FLYING BEAM® illumination',
			'SHARP EYE™ ultra-high resolution',
			'DEEP LAISER™ laser sensor',
			'GAINnext™ Artificial Intelligence',
			'High-resolution metal detection',
			'AUTOSORT FLAKE technology',
			'Scanner placement up to 5 feet'
		],
		specifications: {
			'Scanner Height': 'Up to 5 feet above conveyors',
			'NIR Resolution': 'Highest in industry',
			'Purity Rates': '95%+ maintained',
			'Technology': 'FLYING BEAM® illumination',
			'AI Integration': 'GAINnext™ technology',
			'Performance': 'Proven 60% PET recovery increase'
		},
		applications: [
			'Single stream processing',
			'Plastics sorting',
			'Mixed waste separation',
			'Quality control',
			'Material recovery'
		],
		benefits: [
			'Superior sorting accuracy',
			'High purity rates',
			'Proven performance',
			'Advanced technology',
			'Industry leadership'
		]
	},
	{
		id: 8,
		name: 'Pellenc ST Optical Sorting',
		image: '/Images/msw-processing.jpg',
		description: 'AI-powered optical sorting with intelligent material recognition and high-speed processing capabilities.',
		features: [
			'AI-powered material recognition',
			'High-speed processing',
			'Intelligent sorting algorithms',
			'Superior material identification',
			'Advanced separation technology',
			'Real-time learning',
			'High accuracy rates',
			'Flexible material processing'
		],
		specifications: {
			'Processing Speed': 'High-speed continuous',
			'Accuracy': 'Superior identification',
			'Technology': 'AI-powered optical sorting',
			'Learning': 'Real-time adaptation',
			'Applications': 'Mixed waste processing',
			'Performance': 'High accuracy rates'
		},
		applications: [
			'Mixed waste sorting',
			'Plastics separation',
			'Recyclables processing',
			'Quality control',
			'Material recovery'
		],
		benefits: [
			'AI-powered accuracy',
			'High-speed processing',
			'Intelligent recognition',
			'Real-time learning',
			'Superior performance'
		]
	},
	{
		id: 9,
		name: 'Walair Density Separation',
		image: '/Images/walair-density-separation.jpg',
		description: 'Advanced density separation technology for efficient material recovery and processing.',
		features: [
			'Density-based separation',
			'High recovery rates',
			'Efficient material processing',
			'Low energy consumption',
			'Robust construction',
			'Flexible applications',
			'Automated operation',
			'Consistent performance'
		],
		specifications: {
			'Separation': 'Density-based processing',
			'Efficiency': 'High recovery rates',
			'Energy': 'Low consumption',
			'Technology': 'Advanced density separation',
			'Operation': 'Automated systems',
			'Applications': 'Material recovery'
		},
		applications: [
			'Material recovery facilities',
			'Waste processing plants',
			'Recycling operations',
			'Quality control',
			'Process optimization'
		],
		benefits: [
			'Efficient separation',
			'High recovery rates',
			'Low energy usage',
			'Automated operation',
			'Consistent results'
		]
	},
	{
		id: 10,
		name: 'Centriair Odor Control',
		image: '/Images/centriair-equipment.jpg',
		description: 'Advanced odor control systems for waste processing facilities with effective air treatment solutions.',
		features: [
			'Effective odor control',
			'Air quality improvement',
			'Energy efficient operation',
			'Low maintenance requirements',
			'Customizable solutions',
			'Environmental compliance',
			'Automated systems',
			'Performance monitoring'
		],
		specifications: {
			'Efficiency': 'High odor removal',
			'Technology': 'Advanced air treatment',
			'Energy': 'Efficient operation',
			'Maintenance': 'Low requirements',
			'Compliance': 'Environmental standards',
			'Applications': 'Waste processing facilities'
		},
		applications: [
			'Material recovery facilities',
			'Waste processing plants',
			'Composting operations',
			'Transfer stations',
			'Processing facilities'
		],
		benefits: [
			'Effective odor control',
			'Improved air quality',
			'Energy efficiency',
			'Low maintenance',
			'Environmental compliance'
		]
	}
];

// Solution Modal Component
const SolutionModal: React.FC<SolutionModalProps> = ({ solution, isOpen, onClose }) => {
	if (!solution) return null;

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
					onClick={onClose}
				>
					<motion.div
						initial={{ opacity: 0, scale: 0.9, y: 20 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						exit={{ opacity: 0, scale: 0.9, y: 20 }}
						className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
						onClick={(e) => e.stopPropagation()}
					>
						{/* Header */}
						<div className="relative h-64 bg-gradient-to-r from-vd-blue-dark to-vd-blue">
							<img
								src={solution.image}
								alt={solution.name}
								className="w-full h-full object-cover opacity-80"
								width="800"
								height="256"
								loading="lazy"
								onError={(e) => {
									e.currentTarget.src = '/Images/image-1749759453479.png';
								}}
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
							<div className="absolute bottom-6 left-6 text-white">
								<h2 className="text-4xl font-bold text-white mb-2 leading-tight">{solution.name}</h2>
								{solution.description && (
									<p className="text-lg opacity-90">{solution.description}</p>
								)}
							</div>
							<button
								onClick={onClose}
								aria-label="Close modal"
								className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
							>
								<X className="w-6 h-6" />
							</button>
						</div>

						{/* Content */}
						<div className="p-8 overflow-y-auto max-h-[calc(90vh-16rem)]">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								{/* Features */}
								{solution.features && solution.features.length > 0 && (
									<motion.div
										initial={{ opacity: 0, x: -20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: 0.2 }}
									>
										<h3 className="text-xl font-semibold text-vd-blue mb-4">
											Key Features
										</h3>
										<ul className="space-y-3">
											{solution.features.map((feature: string, index: number) => (
												<motion.li
													key={feature}
													initial={{ opacity: 0, x: -10 }}
													animate={{ opacity: 1, x: 0 }}
													transition={{ delay: 0.3 + index * 0.1 }}
													className="flex items-start gap-3"
												>
													<CheckCircle className="w-5 h-5 text-vd-orange mt-0.5 flex-shrink-0" />
													<span className="text-vd-blue/80">
														{feature}
													</span>
												</motion.li>
											))}
										</ul>
									</motion.div>
								)}

								{/* Specifications */}
								{solution.specifications && Object.keys(solution.specifications).length > 0 && (
									<motion.div
										initial={{ opacity: 0, x: 20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: 0.4 }}
									>
										<h3 className="text-xl font-semibold text-vd-blue mb-4">
											Specifications
										</h3>
										<div className="space-y-3">
											{Object.entries(solution.specifications).map(([key, value], index) => (
												<motion.div
													key={key}
													initial={{ opacity: 0, x: 10 }}
													animate={{ opacity: 1, x: 0 }}
													transition={{ delay: 0.5 + index * 0.1 }}
													className="flex justify-between items-center py-2 border-b border-gray-100"
												>
													<span className="font-medium text-gray-700">{key}:</span>
													<span className="text-vd-blue font-semibold">{value || 'N/A'}</span>
												</motion.div>
											))}
										</div>
									</motion.div>
								)}
							</div>

							{/* Applications */}
							{solution.applications && solution.applications.length > 0 && (
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.6 }}
									className="mt-8"
								>
									<h3 className="text-xl font-semibold text-vd-blue mb-4">
										Applications
									</h3>
									<div className="flex flex-wrap gap-2">
										{solution.applications.map((application: string, index: number) => (
											<motion.span
												key={application}
												initial={{ opacity: 0, scale: 0.8 }}
												animate={{ opacity: 1, scale: 1 }}
												transition={{ delay: 0.7 + index * 0.1 }}
												className="bg-vd-orange/10 text-vd-orange px-3 py-1 rounded-full text-sm font-medium"
											>
												{application}
											</motion.span>
										))}
									</div>
								</motion.div>
							)}

							{/* Benefits */}
							{solution.benefits && solution.benefits.length > 0 && (
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.8 }}
									className="mt-8"
								>
									<h3 className="text-xl font-semibold text-vd-blue mb-4">
										Benefits
									</h3>
									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
										{solution.benefits.map((benefit: string, index: number) => (
											<motion.div
												key={benefit}
												initial={{ opacity: 0, x: -10 }}
												animate={{ opacity: 1, x: 0 }}
												transition={{ delay: 0.9 + index * 0.1 }}
												className="flex items-center gap-3 bg-vd-blue/5 p-3 rounded-lg"
											>
												<CheckCircle className="w-5 h-5 text-vd-orange flex-shrink-0" />
												<span className="text-vd-blue font-medium">{benefit}</span>
											</motion.div>
										))}
									</div>
								</motion.div>
							)}

							{/* CTA */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 1.0 }}
								className="mt-8 pt-6 border-t border-gray-200"
							>
								<div className="flex flex-col sm:flex-row gap-4">
									<button
										onClick={() => {
											onClose();
											// Open quote form
											const quoteForm = document.querySelector('[data-quote-form]');
											if (quoteForm) {
												quoteForm.scrollIntoView({ behavior: 'smooth' });
											}
										}}
										className="flex-1 bg-vd-orange hover:bg-vd-orange-alt text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
									>
										<Quote className="w-5 h-5 mr-2" />
										Get Quote
									</button>
									<button
										onClick={onClose}
										className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
									>
										<ArrowRight className="w-5 h-5 mr-2" />
										Close
									</button>
								</div>
							</motion.div>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

const Solutions = () => {
	const [selectedSolution, setSelectedSolution] = useState<Solution | null>(null);
	const [showSolutionModal, setShowSolutionModal] = useState(false);
	const [showQuoteForm, setShowQuoteForm] = useState(false);

	const handleLearnMore = (solution: Solution) => {
		setSelectedSolution(solution);
		setShowSolutionModal(true);
	};

	const handleGetQuoteFromCard = (solution: Solution) => {
		setSelectedSolution(solution);
		setShowQuoteForm(true);
	};

	const closeSolutionModal = () => {
		setShowSolutionModal(false);
		setSelectedSolution(null);
	};

	return (
		<div className="min-h-screen bg-gray-50">
			{/* Hero Section */}
			<div className="relative bg-gradient-to-r from-vd-blue-dark to-vd-blue text-white py-20 -mt-20 pt-20">
				<div className="absolute inset-0 bg-[url('/Images/image-1749759459073.png')] bg-cover bg-center opacity-20 scale-110" />
				<div className="container mx-auto px-4 relative pt-20">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
							className="max-w-3xl"
						>
							<h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
								Comprehensive Recycling Solutions
							</h1>
							<p className="text-xl text-blue-100 mb-8 leading-relaxed">
								From electronics waste to battery recycling, our comprehensive solutions cover every aspect of modern recycling operations. Advanced technology meets environmental responsibility.
							</p>
							<div className="flex flex-col sm:flex-row gap-4">
								<Link
									to="/equipment"
									className="bg-vd-orange hover:bg-vd-orange-alt text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 hover:scale-105 flex items-center justify-center"
								>
									View Equipment
									<ArrowRight className="w-5 h-5 ml-2" />
								</Link>
								<button
									onClick={() => setShowQuoteForm(true)}
									className="bg-white/20 hover:bg-white/30 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 backdrop-blur-md border border-white/30 hover:border-white/50 flex items-center justify-center"
								>
									<Quote className="w-5 h-5 mr-2" />
									Get Quote
								</button>
							</div>
						</motion.div>
						
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="mt-8 md:mt-0"
						>
							<div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
								<h3 className="text-xl font-semibold mb-4">Why Choose Our Solutions?</h3>
								<ul className="space-y-3 text-blue-100">
									<li className="flex items-center">
										<div className="w-2 h-2 bg-vd-orange rounded-full mr-3"></div>
										Comprehensive technology integration
									</li>
									<li className="flex items-center">
										<div className="w-2 h-2 bg-vd-orange rounded-full mr-3"></div>
										Environmental compliance assurance
									</li>
									<li className="flex items-center">
										<div className="w-2 h-2 bg-vd-orange rounded-full mr-3"></div>
										Maximum material recovery rates
									</li>
									<li className="flex items-center">
										<div className="w-2 h-2 bg-vd-orange rounded-full mr-3"></div>
										Proven performance results
									</li>
								</ul>
							</div>
						</motion.div>
					</div>
				</div>
			</div>

			{/* Solutions Grid */}
			<div className="container mx-auto px-4 py-16">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold text-vd-blue mb-6">Our Solution Portfolio</h2>
					<p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
						Comprehensive recycling solutions designed to maximize efficiency, ensure compliance, and deliver superior results across all waste streams.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{solutionItems.map((solution) => (
						<motion.div
							key={solution.id}
							id={solution.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
						>
							<div className="relative h-48 overflow-hidden">
								<img
									src={solution.image}
									alt={solution.name}
									className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
									width="400"
									height="192"
									loading="lazy"
									onError={(e) => {
										e.currentTarget.src = '/Images/image-1749759453479.png';
									}}
								/>
							</div>
							
							<div className="p-6">
								<h3 className="text-xl font-bold text-vd-blue mb-3 leading-tight group-hover:text-vd-orange transition-colors">
									{solution.name}
								</h3>
								
								{solution.description && (
									<p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
										{solution.description}
									</p>
								)}
								
								{solution.features && solution.features.length > 0 && (
									<div className="mb-4">
										<h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
										<ul className="text-xs text-gray-600 space-y-1">
											{solution.features.slice(0, 3).map((feature, index) => (
												<li key={index} className="flex items-start">
													<span className="text-vd-orange mr-2">•</span>
													<span>{feature}</span>
												</li>
											))}
											{solution.features.length > 3 && (
												<li className="text-vd-orange font-medium">
													+{solution.features.length - 3} more features
												</li>
											)}
										</ul>
									</div>
								)}
								
								<div className="flex space-x-3">
									<button
										onClick={() => handleLearnMore(solution)}
										className="flex-1 bg-vd-blue hover:bg-vd-blue-dark text-white font-semibold py-2 px-4 rounded-lg transition-colors flex items-center justify-center"
									>
										Learn More
										<ArrowRight className="w-4 h-4 ml-2" />
									</button>
									<button
										onClick={() => handleGetQuoteFromCard(solution)}
										className="bg-vd-orange hover:bg-vd-orange-alt text-white font-semibold py-2 px-4 rounded-lg transition-colors flex items-center justify-center"
									>
										<Quote className="w-4 h-4" />
									</button>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>

			{/* CTA Section */}
			<div className="bg-gradient-to-r from-vd-blue-dark to-vd-blue text-white py-16">
				<div className="container mx-auto px-4 text-center">
					<h2 className="text-3xl font-bold text-vd-blue mb-6">Ready to Implement Our Solutions?</h2>
					<p className="text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
						Contact our experts to discuss your specific needs and discover how our solutions can optimize your recycling operations.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<button
							onClick={() => setShowQuoteForm(true)}
							className="bg-vd-orange hover:bg-vd-orange-alt text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 hover:scale-105 flex items-center justify-center"
						>
							<Quote className="w-5 h-5 mr-2" />
							Request Quote
						</button>
						<Link
							to="/contact"
							className="bg-white/20 hover:bg-white/30 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 backdrop-blur-md border border-white/30 hover:border-white/50 flex items-center justify-center"
						>
							Contact Us
						</Link>
					</div>
				</div>
			</div>

			{/* Solution Modal */}
			<SolutionModal
				solution={selectedSolution}
				isOpen={showSolutionModal}
				onClose={closeSolutionModal}
			/>

			{/* Quote Form Modal */}
			{showQuoteForm && (
				<QuoteForm />
			)}
		</div>
	);
};

export default Solutions;
