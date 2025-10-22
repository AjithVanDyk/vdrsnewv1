import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, CheckCircle, Quote, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Equipment {
	name: string;
	image: string;
	description?: string;
	features?: string[];
	specifications?: { [key: string]: string };
	applications?: string[];
}

interface EquipmentModalProps {
	equipment: Equipment | null;
	isOpen: boolean;
	onClose: () => void;
}

// Equipment data as per the modal details
const equipmentData: Equipment[] = [
	{
		name: 'Bollegraaf Balers',
		image: '/Images/bollegraaf-balers.png',
		description:
			'High-performance horizontal balers designed for maximum efficiency and reliability in recycling operations.',
		features: [
			'Advanced hydraulic system for consistent bale density',
			'Automatic wire tying system',
			'User-friendly PLC control system',
			'Heavy-duty construction for 24/7 operation',
			'Energy-efficient design',
			'Remote monitoring capabilities',
		],
		specifications: {
			'Bale Size': '1100 x 800 mm',
			'Bale Weight': 'Up to 600 kg',
			'Press Force': '60-100 tons',
			Throughput: '5-15 tons/hour',
			Power: '37-75 kW',
			Dimensions: '12m x 3m x 4m',
		},
		applications: [
			'Single Stream Recycling',
			'Commercial Waste Processing',
			'Industrial Waste Management',
			'Paper & Cardboard Recovery',
		],
	},
	{
		name: 'TOMRA Optical Sorting',
		image: '/Images/tomra-optical-sorting.png',
		description:
			'Advanced optical sorting technology using AI and sensor fusion for precise material separation.',
		features: [
			'Multi-sensor technology (NIR, VIS, SWIR)',
			'AI-powered object recognition',
			'High-speed pneumatic ejection',
			'Real-time quality monitoring',
			'Cloud-based analytics',
			'Self-learning algorithms',
		],
		specifications: {
			'Sorting Width': '1000-4000 mm',
			Throughput: '1-35 tons/hour',
			'Particle Size': '5-300 mm',
			Purity: 'Up to 99%+',
			'Air Consumption': '6-8 bar',
			Power: '15-45 kW',
		},
		applications: [
			'Plastic Sorting',
			'Metal Recovery',
			'Glass Cleanup',
			'Paper Quality Control',
		],
	},
	{
		name: 'Lubo Screens',
		image: '/Images/lubo-screens.png',
		description:
			'Non-wrapping disc screens designed for efficient separation of materials by size.',
		features: [
			'Non-wrapping disc design',
			'Self-cleaning mechanism',
			'Variable speed control',
			'Heavy-duty construction',
			'Low maintenance requirements',
			'Flexible screening configurations',
		],
		specifications: {
			'Screen Width': '2000-4000 mm',
			'Screen Length': '4000-8000 mm',
			Throughput: '20-100 tons/hour',
			'Disc Size': '200-400 mm',
			Power: '7.5-30 kW',
			Inclination: '0-15 degrees',
		},
		applications: [
			'MSW Pre-processing',
			'C&D Waste Screening',
			'Compost Screening',
			'Glass Recovery',
		],
	},
];

const equipmentItems = [
	{
		id: 1,
		name: 'Bollegraaf',
		image: '/Images/bollegraaf.jpg',
		description: 'Leading manufacturer of recycling equipment and waste processing systems.',
		features: [
			'Complete waste processing solutions',
			'Advanced sorting technology',
			'Customizable systems',
			'High efficiency and reliability'
		],
		specifications: {
			capacity: 'Up to 50 tons per hour',
			power: 'Variable based on system',
			automation: 'Fully automated sorting',
			maintenance: 'Low maintenance design'
		}
	},
	{
		id: 2,
		name: 'Lubo',
		image: '/Images/lubo.jpg',
		description: 'Specialized in air separation and sorting technology for recycling.',
		features: [
			'Air separation systems',
			'Material recovery solutions',
			'Energy efficient design',
			'Easy maintenance'
		],
		specifications: {
			capacity: 'Up to 30 tons per hour',
			power: 'Energy efficient motors',
			automation: 'Semi-automated',
			maintenance: 'Regular maintenance required'
		}
	},
	{
		id: 3,
		name: 'TOMRA',
		image: '/Images/tomra.jpg',
		description: 'Advanced sensor-based sorting solutions for recycling.',
		features: [
			'Optical sorting technology',
			'AI-powered recognition',
			'High purity sorting',
			'Real-time monitoring'
		],
		specifications: {
			capacity: 'Up to 12 tons per hour',
			power: 'Advanced sensor systems',
			automation: 'Fully automated',
			maintenance: 'Remote monitoring available'
		}
	},
	{
		id: 4,
		name: 'Allgaier',
		image: '/Images/allgaire.jpg',
		description: 'Specialized in screening and separation technology.',
		features: [
			'Vibrating screens',
			'Trommel screens',
			'Custom screening solutions',
			'Durable construction'
		],
		specifications: {
			capacity: 'Up to 100 tons per hour',
			power: 'Heavy-duty motors',
			automation: 'Semi-automated',
			maintenance: 'Easy access for maintenance'
		}
	},
	{
		id: 5,
		name: 'CP Manufacturing',
		image: '/Images/cp.jpg',
		description: 'Complete recycling system solutions and equipment.',
		features: [
			'Complete system integration',
			'Custom solutions',
			'High throughput',
			'Durable construction'
		],
		specifications: {
			capacity: 'Up to 60 tons per hour',
			power: 'Variable based on system',
			automation: 'Fully automated',
			maintenance: 'Comprehensive maintenance program'
		}
	},
	{
		id: 6,
		name: 'Machinex',
		image: '/Images/machinex.jpg',
		description: 'Innovative recycling and sorting equipment solutions.',
		features: [
			'Advanced sorting technology',
			'Custom system design',
			'High efficiency',
			'Smart control systems'
		],
		specifications: {
			capacity: 'Up to 45 tons per hour',
			power: 'Energy efficient',
			automation: 'Fully automated',
			maintenance: 'Remote diagnostics available'
		}
	},
	{
		id: 7,
		name: 'SSI Shredding Systems',
		image: '/Images/ssi.jpg',
		description: 'Industrial shredding solutions for various materials.',
		features: [
			'Heavy-duty shredders',
			'Custom shredding solutions',
			'High throughput',
			'Durable construction'
		],
		specifications: {
			capacity: 'Up to 40 tons per hour',
			power: 'High horsepower motors',
			automation: 'Semi-automated',
			maintenance: 'Regular maintenance required'
		}
	},
	{
		id: 8,
		name: 'BHS Sonthofen',
		image: '/Images/bhs.jpg',
		description: 'Advanced processing and recycling technology.',
		features: [
			'Processing systems',
			'Mixing technology',
			'Custom solutions',
			'High efficiency'
		],
		specifications: {
			capacity: 'Up to 35 tons per hour',
			power: 'Variable based on system',
			automation: 'Fully automated',
			maintenance: 'Comprehensive service available'
		}
	},
	{
		id: 9,
		name: 'Vecoplan',
		image: '/Images/vecoplan.jpg',
		description: 'Complete solutions for waste processing and recycling.',
		features: [
			'Shredding systems',
			'Conveying technology',
			'Storage systems',
			'Custom solutions'
		],
		specifications: {
			capacity: 'Up to 25 tons per hour',
			power: 'Energy efficient',
			automation: 'Fully automated',
			maintenance: 'Easy maintenance access'
		}
	},
	{
		id: 10,
		name: 'Eriez',
		image: '/Images/eriez.jpg',
		description: 'Magnetic separation and material handling equipment.',
		features: [
			'Magnetic separators',
			'Metal detection',
			'Material handling',
			'Custom solutions'
		],
		specifications: {
			capacity: 'Up to 20 tons per hour',
			power: 'Variable based on system',
			automation: 'Semi-automated',
			maintenance: 'Low maintenance design'
		}
	},
	{
		id: 11,
		name: 'Steinert',
		image: '/Images/steinert.jpg',
		description: 'Advanced sorting and separation technology.',
		features: [
			'Sensor-based sorting',
			'Magnetic separation',
			'Custom solutions',
			'High efficiency'
		],
		specifications: {
			capacity: 'Up to 15 tons per hour',
			power: 'Advanced sensor systems',
			automation: 'Fully automated',
			maintenance: 'Remote monitoring available'
		}
	},
	{
		id: 12,
		name: 'MSS Optical Sorters',
		image: '/Images/mss.jpg',
		description: 'Optical sorting solutions for recycling.',
		features: [
			'Optical sorting technology',
			'High accuracy sorting',
			'Custom solutions',
			'Real-time monitoring'
		],
		specifications: {
			capacity: 'Up to 10 tons per hour',
			power: 'Advanced sensor systems',
			automation: 'Fully automated',
			maintenance: 'Regular maintenance required'
		}
	}
];

const EquipmentModal: React.FC<EquipmentModalProps> = ({ equipment, isOpen, onClose }) => {
	if (!equipment) return null;
	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
					onClick={onClose}
				>
					<motion.div
						initial={{ scale: 0.95, opacity: 0, y: 20 }}
						animate={{ scale: 1, opacity: 1, y: 0 }}
						exit={{ scale: 0.95, opacity: 0, y: 20 }}
						transition={{ type: 'spring', duration: 0.5 }}
						className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
						onClick={(e) => e.stopPropagation()}
					>
						{/* Header */}
						<div className="relative">
							<img
								src={equipment.image}
								alt={equipment.name}
								className="w-full h-64 object-cover"
							/>
							<button
								onClick={onClose}
								className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full transition-colors"
							>
								<X className="w-5 h-5" />
							</button>
							<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
								<h2 className="text-3xl font-bold text-white mb-2">
									{equipment.name}
								</h2>
							</div>
						</div>
						{/* Content */}
						<div className="p-6 overflow-y-auto max-h-[60vh]">
							{equipment.description && (
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.1 }}
									className="mb-6"
								>
									<p className="text-vd-blue/80 text-lg leading-relaxed">
										{equipment.description}
									</p>
								</motion.div>
							)}
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
								{/* Features */}
								{equipment.features && (
									<motion.div
										initial={{ opacity: 0, x: -20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: 0.2 }}
									>
										<h3 className="text-xl font-semibold text-vd-blue mb-4">
											Key Features
										</h3>
										<ul className="space-y-3">
											{equipment.features.map((feature: string, index: number) => (
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
								{equipment.specifications && (
									<motion.div
										initial={{ opacity: 0, x: 20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: 0.2 }}
									>
										<h3 className="text-xl font-semibold text-vd-blue mb-4">
											Specifications
										</h3>
										<div className="space-y-3">
											{Object.entries(equipment.specifications).map(
												([key, value]: [string, string], index: number) => (
													<motion.div
														key={key}
														initial={{ opacity: 0, y: 10 }}
														animate={{ opacity: 1, y: 0 }}
														transition={{ delay: 0.3 + index * 0.1 }}
														className="flex justify-between items-center py-2 border-b border-gray-100"
													>
														<span className="font-medium text-vd-blue">
															{key}
														</span>
														<span className="text-vd-blue/80">
															{value}
														</span>
													</motion.div>
												)
											)}
										</div>
									</motion.div>
								)}
							</div>
							{/* Applications */}
							{equipment.applications && (
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.4 }}
									className="mt-6"
								>
									<h3 className="text-xl font-semibold text-vd-blue mb-4">
										Applications
									</h3>
									<div className="flex flex-wrap gap-2">
										{equipment.applications.map((app: string, index: number) => (
											<motion.span
												key={app}
												initial={{ opacity: 0, scale: 0.8 }}
												animate={{ opacity: 1, scale: 1 }}
												transition={{ delay: 0.5 + index * 0.1 }}
												className="bg-vd-orange/10 text-vd-orange px-3 py-1 rounded-full text-sm font-medium"
											>
												{app}
											</motion.span>
										))}
									</div>
								</motion.div>
							)}
							{/* CTA */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.6 }}
								className="mt-8 text-center"
							>
								<a
									href="https://vdrs.com/equipment"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center bg-vd-orange hover:bg-vd-orange-alt text-white font-semibold px-6 py-3 rounded-lg transition-colors"
								>
									Learn More on Van Dyk Website
									<ArrowRight className="w-5 h-5 ml-2" />
								</a>
							</motion.div>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

const QuoteForm: React.FC = () => {
	const [selectedEquipment, setSelectedEquipment] = useState<number[]>([]);
	const [formData, setFormData] = useState({
		name: '',
		country: '',
		email: '',
		telephone: '',
		company: '',
		city: '',
		state: '',
		additionalDetails: ''
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission
		console.log('Form submitted:', { selectedEquipment, formData });
	};

	return (
		<div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
			<h2 className="text-2xl font-bold text-vd-blue mb-6">Request a Quote</h2>
			<form onSubmit={handleSubmit} className="space-y-6">
				{/* Equipment Selection */}
				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2">
						Select Equipment
					</label>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-60 overflow-y-auto p-2">
						{equipmentItems.map((item) => (
							<div
								key={item.id}
								className={`relative border rounded-lg p-4 cursor-pointer transition-colors ${
									selectedEquipment.includes(item.id)
										? 'border-vd-orange bg-vd-orange/5'
										: 'border-gray-200 hover:border-vd-orange'
								}`}
								onClick={() => {
									setSelectedEquipment(prev =>
										prev.includes(item.id)
											? prev.filter(id => id !== item.id)
											: [...prev, item.id]
									);
								}}
							>
								<div className="flex items-start space-x-3">
									<input
										type="checkbox"
										checked={selectedEquipment.includes(item.id)}
										onChange={() => {}}
										className="mt-1"
									/>
									<div>
										<h3 className="font-medium text-gray-900">{item.name}</h3>
										<p className="text-sm text-gray-500">{item.description}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Contact Information */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
							Full Name *
						</label>
						<input
							type="text"
							id="name"
							required
							className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vd-orange focus:border-vd-orange"
							value={formData.name}
							onChange={(e) => setFormData({ ...formData, name: e.target.value })}
						/>
					</div>
					<div>
						<label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
							Country *
						</label>
						<input
							type="text"
							id="country"
							required
							className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vd-orange focus:border-vd-orange"
							value={formData.country}
							onChange={(e) => setFormData({ ...formData, country: e.target.value })}
						/>
					</div>
					<div>
						<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
							Email Address *
						</label>
						<input
							type="email"
							id="email"
							required
							className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vd-orange focus:border-vd-orange"
							value={formData.email}
							onChange={(e) => setFormData({ ...formData, email: e.target.value })}
						/>
					</div>
					<div>
						<label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-2">
							Telephone *
						</label>
						<input
							type="tel"
							id="telephone"
							required
							className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vd-orange focus:border-vd-orange"
							value={formData.telephone}
							onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
						/>
					</div>
					<div>
						<label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
							Company Name *
						</label>
						<input
							type="text"
							id="company"
							required
							className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vd-orange focus:border-vd-orange"
							value={formData.company}
							onChange={(e) => setFormData({ ...formData, company: e.target.value })}
						/>
					</div>
					<div>
						<label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
							City *
						</label>
						<input
							type="text"
							id="city"
							required
							className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vd-orange focus:border-vd-orange"
							value={formData.city}
							onChange={(e) => setFormData({ ...formData, city: e.target.value })}
						/>
					</div>
					<div>
						<label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
							State/Province *
						</label>
						<input
							type="text"
							id="state"
							required
							className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vd-orange focus:border-vd-orange"
							value={formData.state}
							onChange={(e) => setFormData({ ...formData, state: e.target.value })}
						/>
					</div>
				</div>

				{/* Additional Details */}
				<div>
					<label htmlFor="additionalDetails" className="block text-sm font-medium text-gray-700 mb-2">
						Additional Details
					</label>
					<textarea
						id="additionalDetails"
						rows={4}
						className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vd-orange focus:border-vd-orange"
						value={formData.additionalDetails}
						onChange={(e) => setFormData({ ...formData, additionalDetails: e.target.value })}
						placeholder="Please provide any additional information about your requirements..."
					/>
				</div>

				<button
					type="submit"
					className="w-full bg-vd-orange hover:bg-vd-orange-alt text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
				>
					<Quote className="w-5 h-5" />
					<span>Request Quote</span>
				</button>
			</form>
		</div>
	);
};

const Equipment: React.FC = () => {
	const [selectedEquipment, setSelectedEquipment] = useState<Equipment | null>(null);
	const [showQuoteForm, setShowQuoteForm] = useState(false);

	return (
		<div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
			{/* Hero Section */}
			<div className="relative bg-gradient-to-r from-vd-blue-dark to-vd-blue text-white py-20">
				<div className="absolute inset-0 bg-[url('/Images/image-1749759459073.png')] bg-cover bg-center opacity-20" />
				<div className="container mx-auto px-4 relative">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
							className="max-w-3xl"
						>
							<h1 className="text-4xl md:text-5xl font-bold mb-6">Equipment</h1>
							<p className="text-xl text-gray-100 mb-8">
								Discover our comprehensive range of recycling equipment, from sorting systems to complete turnkey solutions.
							</p>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
						>
							<button
								onClick={() => setShowQuoteForm(!showQuoteForm)}
								className="bg-vd-orange hover:bg-vd-orange-alt text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2"
							>
								<Quote className="w-5 h-5" />
								<span>{showQuoteForm ? 'Hide Quote Form' : 'Get a Quote'}</span>
							</button>
						</motion.div>
					</div>
				</div>
			</div>

			<div className="container mx-auto px-4 py-16">
				{showQuoteForm && (
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="mb-16"
					>
						<QuoteForm />
					</motion.div>
				)}

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
					{equipmentItems.map((item) => (
						<motion.div
							key={item.id}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
						>
							<div className="relative h-48">
								<img
									src={item.image}
									alt={item.name}
									className="w-full h-full object-cover"
									onError={(e) => {
										e.currentTarget.src = '/Images/image-1749759453479.png';
										e.currentTarget.alt = 'Image not available';
									}}
								/>
							</div>
							<div className="p-6">
								<h3 className="text-xl font-bold text-vd-blue mb-2">{item.name}</h3>
								<p className="text-gray-600 mb-4">{item.description}</p>
								<div className="flex flex-wrap gap-2 mb-4">
									{item.features?.slice(0, 2).map((feature, index) => (
										<span
											key={index}
											className="bg-vd-blue/10 text-vd-blue text-sm px-3 py-1 rounded-full"
										>
											{feature}
										</span>
									))}
								</div>
								<div className="flex justify-between items-center">
									<button
										onClick={() => setSelectedEquipment(item)}
										className="text-vd-orange hover:text-vd-orange-alt font-semibold flex items-center space-x-1"
									>
										<Info className="w-4 h-4" />
										<span>Learn More</span>
									</button>
									<button
										onClick={() => {
											setShowQuoteForm(true);
											// Scroll to quote form
											document.querySelector('.quote-form')?.scrollIntoView({ behavior: 'smooth' });
										}}
										className="text-vd-orange hover:text-vd-orange-alt font-semibold flex items-center space-x-1"
									>
										<Quote className="w-4 h-4" />
										<span>Get Quote</span>
									</button>
								</div>
							</div>
						</motion.div>
					))}
				</div>

				{/* Call to Action */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="text-center"
				>
					<h2 className="text-2xl font-bold text-vd-blue mb-4">Need a Custom Solution?</h2>
					<p className="text-gray-600 mb-6">
						Contact our team to discuss your specific requirements and discover how we can help optimize your recycling operations.
					</p>
					<Link
						to="/contact"
						className="inline-block bg-vd-orange hover:bg-vd-orange-alt text-white px-8 py-3 rounded-lg font-semibold transition-colors"
					>
						Contact Our Team
					</Link>
				</motion.div>
			</div>

			{selectedEquipment && (
				<EquipmentModal
					equipment={selectedEquipment}
					isOpen={!!selectedEquipment}
					onClose={() => setSelectedEquipment(null)}
				/>
			)}
		</div>
	);
};

export default Equipment;