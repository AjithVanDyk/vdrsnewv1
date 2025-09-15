import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, CheckCircle, Quote, Info } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface Equipment {
	id?: number;
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

// Only the 13 specified equipment items - NO OTHERS
const equipmentItems = [
	{
		id: 1,
		name: 'Bollegraaf',
		image: '/Images/bollegraaf-balers.jpg',
		description: 'Leading manufacturer of recycling equipment and waste processing systems with advanced baling technology.',
		features: [
			'High-performance horizontal balers',
			'Automatic wire tying system',
			'24/7 continuous operation',
			'Energy-efficient design'
		],
		specifications: {
			capacity: 'Up to 50 tons per hour',
			power: '37-75 kW',
			automation: 'Fully automated',
			maintenance: 'Low maintenance design'
		}
	},
	{
		id: 2,
		name: 'Lubo Screening',
		image: '/Images/lubo-starscreen.jpg',
		description: 'Patented StarScreen® technology for superior material separation with non-wrapping screens.',
		features: [
			'Patented StarScreen® technology',
			'Non-wrapping ONP screens',
			'Elliptical Separator ballistic separation',
			'95% fines diversion'
		],
		specifications: {
			capacity: 'Up to 50 tons per hour',
			power: 'Energy efficient motors',
			automation: 'Semi-automated',
			maintenance: 'Minutes to clean'
		}
	},
	{
		id: 3,
		name: 'TOMRA Optical Sorting',
		image: '/Images/tomra-optical-sorter.jpg',
		description: 'Worldwide leader in optical sorting with superior NIR technology and FLYING BEAM® illumination.',
		features: [
			'Industry-highest NIR resolution',
			'FLYING BEAM® technology',
			'GAINnext™ AI recognition',
			'5x distance scanner placement'
		],
		specifications: {
			capacity: 'Up to 35 tons per hour',
			power: 'Advanced sensor systems',
			automation: 'Fully automated',
			maintenance: '95%+ purity rates'
		}
	},
	{
		id: 4,
		name: 'Pellenc ST Optical Sorting',
		image: '/Images/pellenc-st-sorter.jpg',
		description: 'AI-powered intelligent sorting solutions with CNS BRAIN technology and multi-sensor fusion.',
		features: [
			'CNS BRAIN Artificial Intelligence',
			'AISORT multi-sensor fusion',
			'Food/Non-food separation',
			'99% UBC aluminum purity'
		],
		specifications: {
			capacity: 'Variable based on application',
			power: 'Energy-efficient AI systems',
			automation: 'Fully automated with AI',
			maintenance: '96%+ paper purity'
		}
	},
	{
		id: 5,
		name: 'Walair Density Separation',
		image: '/Images/walair-air-separator.jpg',
		description: 'Advanced air technology systems for density-based material separation with drum air separators.',
		features: [
			'2-way, 3-way, 4-way separators',
			'Drum air separation technology',
			'Over belt suction systems',
			'No duct line blockages'
		],
		specifications: {
			capacity: 'Large volume processing',
			power: 'High air transport efficiency',
			automation: 'Semi-automated operation',
			maintenance: 'Low maintenance costs'
		}
	},
	{
		id: 6,
		name: 'Smicon Food Waste Depackagers',
		image: '/Images/smicon-depackager.jpg',
		description: 'Specialized depackaging machines for food waste recycling from commercial and industrial sources.',
		features: [
			'Commercial packaging opening',
			'Food waste liberation',
			'Organic flow processing',
			'Packaging remnant removal'
		],
		specifications: {
			capacity: 'Variable based on application',
			power: 'Efficient grinding systems',
			automation: 'Semi-automated operation',
			maintenance: 'Regular cleaning required'
		}
	},
	{
		id: 7,
		name: 'GÜNTHER Screens',
		image: '/Images/gunther-spiral-screen.jpg',
		description: 'Original spiral shaft screening technology with interlocking screws for three-directional separation.',
		features: [
			'Original spiral shaft design',
			'Three-directional separation',
			'Non-wrapping self-cleaning',
			'Adjustable gap configurations'
		],
		specifications: {
			capacity: 'Variable configurations',
			power: 'Heavy duty steel spirals',
			automation: 'Semi-automated operation',
			maintenance: 'Self-cleaning technology'
		}
	},
	{
		id: 8,
		name: 'Centriair',
		image: '/Images/centriair-classifier.jpg',
		description: 'Advanced air classification systems for precise material separation and density sorting.',
		features: [
			'Centrifugal air classification',
			'Precise density separation',
			'High throughput processing',
			'Adjustable separation parameters'
		],
		specifications: {
			capacity: 'High volume processing',
			power: 'Efficient air systems',
			automation: 'Automated operation',
			maintenance: 'Minimal maintenance'
		}
	},
	{
		id: 9,
		name: 'Greyparrot AI',
		image: '/Images/greyparrot-ai-camera.jpg',
		description: 'Revolutionary AI-powered waste intelligence platform with 98% count accuracy for real-time monitoring.',
		features: [
			'89 waste category identification',
			'98% count accuracy at 3m/s',
			'Brand and SKU recognition',
			'Real-time dashboard analytics'
		],
		specifications: {
			capacity: 'Real-time up to 3m/s',
			power: 'AI billions of data points',
			automation: 'Fully automated monitoring',
			maintenance: 'Camera-based system'
		}
	},
	{
		id: 10,
		name: 'Densimetric Table',
		image: '/Images/densimetric-separation-table.jpg',
		description: 'Density separation technology using vibration and fluidized bed principles for material sorting.',
		features: [
			'Vibratory motion separation',
			'Fluidized bed technology',
			'Inclined table design',
			'FM and M model options'
		],
		specifications: {
			capacity: 'Up to 80mm grain size',
			power: 'Variable vibration systems',
			automation: 'Semi-automated operation',
			maintenance: 'Robust minimal wear'
		}
	},
	{
		id: 11,
		name: 'BeeFoam Dust Suppression System',
		image: '/Images/beefoam-dust-suppression.jpg',
		description: 'Advanced dust suppression system using foam technology lasting up to 12 days.',
		features: [
			'Foam-based dust binding',
			'12-day lasting effectiveness',
			'Minimal water usage',
			'Equipment protection'
		],
		specifications: {
			capacity: 'Various material streams',
			power: 'Low energy foam generation',
			automation: 'Easy installation',
			maintenance: 'Long-lasting system'
		}
	},
	{
		id: 12,
		name: 'Reckelberg Environmental Technologies',
		image: '/Images/reckelberg-battery-recycling.jpg',
		description: 'Advanced battery recycling technologies for EV and stationary applications with Impact Reactor systems.',
		features: [
			'Battery discharge systems',
			'Vacuum drying technology',
			'Impact Reactor black mass',
			'Energy recovery capabilities'
		],
		specifications: {
			capacity: 'Up to 1,000V discharge',
			power: 'Bidirectional energy recovery',
			automation: 'Fully automated processing',
			maintenance: 'Low-emission operation'
		}
	},
	{
		id: 13,
		name: 'Certified Pre-Owned Equipment',
		image: '/Images/certified-preowned-equipment.jpg',
		description: 'Factory-inspected recycling equipment at reduced prices with lifetime phone support.',
		features: [
			'Factory-trained inspection',
			'Lifetime phone support',
			'Various baler models',
			'Fully reconditioned systems'
		],
		specifications: {
			capacity: 'Various models available',
			power: 'Original specifications',
			automation: 'Model dependent',
			maintenance: 'Fully reconditioned'
		}
	}
];

// Detailed equipment data for modals - only the same 13 items
const equipmentData: Equipment[] = [
	{
		id: 1,
		name: 'Bollegraaf Balers - Premium Recycling Equipment Solutions',
		image: '/Images/bollegraaf-balers.png',
		description: 'High-performance horizontal balers designed for maximum efficiency and reliability in recycling operations. Industry-leading waste processing technology for sustainable material recovery with advanced hydraulic systems and automatic wire tying.',
		features: [
			'Advanced hydraulic baling system for consistent bale density and superior compression',
			'Automatic wire tying system with precision control for secure bale packaging',
			'User-friendly PLC control system with touchscreen interface and remote diagnostics',
			'Heavy-duty construction designed for 24/7 continuous operation in demanding environments',
			'Energy-efficient design reducing operational costs and environmental impact',
			'Remote monitoring capabilities for predictive maintenance and operational optimization',
			'Integrated safety systems meeting international recycling equipment standards',
			'Modular design allowing for customization and system expansion'
		],
		specifications: {
			'Bale Size': '1100 x 800 mm (customizable dimensions available)',
			'Bale Weight': 'Up to 600 kg (variable density control)',
			'Press Force': '60-100 tons (hydraulic compression system)',
			'Throughput': '5-15 tons/hour (material-dependent processing capacity)',
			'Power Requirements': '37-75 kW (energy-efficient motor systems)',
			'Overall Dimensions': '12m x 3m x 4m (compact footprint design)',
			'Baling Materials': 'Cardboard, paper, plastic, textiles, aluminum',
			'Control System': 'Siemens PLC with HMI touchscreen interface'
		},
		applications: [
			'Single Stream Recycling Facilities',
			'Commercial Waste Processing Centers',
			'Industrial Waste Management Operations',
			'Paper & Cardboard Recovery Plants',
			'Municipal Solid Waste (MSW) Processing',
			'Material Recovery Facilities (MRF)',
			'Waste-to-Energy Preprocessing',
			'Circular Economy Integration'
		],
	},
	{
		id: 2,
		name: 'Lubo Screening - StarScreen® Technology and Ballistic Separators',
		image: '/Images/lubo-screens.png',
		description: 'Advanced screening and recycling systems with patented StarScreen® technology. Features non-wrapping ONP screens, elliptical separators, and high-capacity 880 screens with proven efficiency in material separation and minimal maintenance requirements.',
		features: [
			'Patented StarScreen® technology with various star sizes and materials',
			'Non-wrapping ONP screens that resist wrapping for entire shifts - minutes to clean',
			'Elliptical Separator with ballistic separation for accurate 2D/3D material sorting',
			'880 Screen processing up to 50 tons per hour with 95% fines diversion',
			'OCC Screen with adjustable star/disk spacing for optimal quality balance',
			'Specially designed stars prevent loading with film and stringy materials',
			'True 2-inch holes in striding paddles for glass fines separation',
			'Large diameter stars with virtually no wrapping or cleaning needs'
		],
		specifications: {
			'Screen Types': 'ONP, Elliptical, 880, OCC models available',
			'Processing Capacity': '20-50 tons/hour (model-dependent throughput)',
			'Fines Diversion': '95% of materials under 2 inches',
			'Star Diameter': '200-400 mm (large diameter for minimal wrapping)',
			'Screen Width': '2000-4000 mm (customizable configurations)',
			'Maintenance': 'Minutes to clean, no daily maintenance required',
			'Integration': 'Compatible with Bollegraaf single stream systems worldwide',
			'Applications': 'Single stream, C&D, MSW, green waste processing'
		},
		applications: [
			'Single Stream Recycling Systems Integration',
			'Construction & Demolition (C&D) Waste Processing',
			'Municipal Solid Waste (MSW) Screening and Preparation',
			'Material Recovery Facilities (MRF) Primary Separation',
			'Green Waste and Compost Screening Operations',
			'Mixed Waste Processing and Preparation',
			'2D/3D Material Ballistic Separation',
			'Container Line Preparation for Optical Sorting'
		],
	},
	{
		id: 3,
		name: 'TOMRA Optical Sorting - World Leader in NIR Technology',
		image: '/Images/tomra-optical-sorting.png',
		description: 'Worldwide leader in optical sorting with superior Near Infrared (NIR) recognition and patented FLYING BEAM® illumination. Industry-highest NIR resolution enables scanner placement up to 5 feet above conveyors while maintaining 95%+ purity rates. Proven 60% increase in PET recovery.',
		features: [
			'Industry-highest NIR resolution BY FAR - 5x distance capability vs competitors',
			'FLYING BEAM® illumination with rotating polygon mirror technology',
			'SHARP EYE™ ultra-high NIR resolution for difficult material recognition (PET bottle vs PET tray)',
			'DEEP LAISER™ laser sensor for black plastics, glass, and NIR-invisible materials',
			'GAINnext™ Artificial Intelligence with deep-learning capabilities for continuous adaptation',
			'High-resolution metal detection combined with NIR for paper/aluminum differentiation',
			'Scanner placement up to 5 feet above conveyors keeps lens clean for weeks',
			'AUTOSORT FLAKE technology for simultaneous color/material/metal detection in flakes'
		],
		specifications: {
			'Scanner Height': 'Up to 5 feet above conveyors (5x competition distance)',
			'NIR Resolution': 'Highest available in optical sorting industry',
			'Purity Rates': '95%+ maintained in dirty MRF environments',
			'Material Recognition': 'PE, PP, PET, HDPE, PS, PVC, mixed plastics 3-7, black plastics, glass',
			'Performance Proven': '60% increase PET recovery, 15% increase HDPE recovery',
			'Flake Sorting': 'AUTOSORT FLAKE with simultaneous detection capabilities',
			'Contamination Detection': 'Removes flattened black food trays from mixed paper streams',
			'Continuous Operation': 'Stable sorting performance over long periods'
		},
		applications: [
			'Paper and Fiber Separation with contamination removal',
			'Plastic Sorting (PE, PP, PET, HDPE, PS, PVC) with high purity',
			'Mixed Plastics 3-7 Classification and recovery',
			'Construction & Demolition Wood Scrap Sorting',
			'Material Recovery Facilities (MRF) optimization',
			'Black Plastic and Glass Recovery from mixed streams',
			'Single Stream Recycling enhancement',
			'Flake Sorting with AUTOSORT FLAKE Technology'
		],
	},
	{
		id: 4,
		name: 'Pellenc ST Optical Sorting - AI-Powered Industry 4.0 Solutions',
		image: '/Images/pellenc-st.png',
		description: 'Over 20 years experience with 3,000+ machines installed in 40+ countries. AI-powered sorting with CNS BRAIN technology achieving 90%+ efficiency, 96%+ paper purity, and 99% aluminum UBC purity. Energy-efficient AI requires no additional hardware.',
		features: [
			'CNS BRAIN Artificial Intelligence with deep learning and NIR/VIS fusion technology',
			'AISORT option with additional camera and multi-sensor fusion capabilities',
			'Food/Non-Food separation for food-grade plastic recovery applications',
			'Used Beverage Can (UBC) sorting achieving up to 99% aluminum purity',
			'Short detection-to-ejection distance for extremely precise ejection (halves good product loss)',
			'Energy-efficient AI requiring no additional hardware or storage servers',
			'Hardware and software AI modules available as upgrades on existing machines',
			'Infrared, visible spectroscopy, induction, and X-ray technologies integrated'
		],
		specifications: {
			'Global Experience': '3,000+ machines installed in 40+ countries',
			'Paper Sorting Efficiency': '90%+ efficiency with losses under 2%',
			'Paper Purity': '96%+ purity without compromising overall efficiency',
			'Aluminum UBC Purity': 'Up to 99% purity removing non-UBC contaminants',
			'Material Differentiation': 'Magazines from coated cardboard, white cardboard from office paper',
			'AI Implementation': 'Quick to implement, no extra energy consumption',
			'Waste Sectors': 'MRF, MSW, WEEE, ASR, C&I, C&D, textiles',
			'Equipment Ranges': 'Mistral+ CONNECT and COMPACT+ with AI upgrade options'
		},
		applications: [
			'Material Recovery Facilities (MRF) modernization to Industry 4.0',
			'Municipal Solid Waste (MSW) processing and separation',
			'Waste Electrical and Electronic Equipment (WEEE) recovery',
			'Automotive Shredder Residue (ASR) sorting and processing',
			'Commercial & Industrial (C&I) waste processing operations',
			'Construction & Demolition (C&D) material recovery',
			'Textile Waste Sorting and Recovery operations',
			'Food-Grade Plastic Separation for recycling industry challenges'
		],
	},
	{
		id: 5,
		name: 'Walair Density Separation - Advanced Air Technology Systems',
		image: '/Images/walair-air-separation.png',
		description: 'Specialized air technology for separating material fractions by density with 2-way, 3-way, and 4-way density separators. High-capacity processing with no duct line blockages, maximum adjustability, and low maintenance costs for diverse applications.',
		features: [
			'Drum air separators with 2-4 density/shape fraction capabilities',
			'Wind shifters combined with rotary material separators for enhanced separation',
			'Over belt suction sort systems for light fraction sorting (film sorting)',
			'Dust extraction systems for improved air quality in working environments',
			'Vacuum suction separation systems for precise material handling',
			'No material transport through duct lines eliminating blockages and wear',
			'High accuracy density separation with maximum adjustability of separating airstream',
			'Large volume capacity due to high air transport speeds'
		],
		specifications: {
			'Separator Types': '2-way, 3-way, and 4-way density configurations',
			'Processing Capacity': 'Large volume capacity with high air transport speeds',
			'Separation Accuracy': 'High accuracy with maximum adjustability',
			'Material Handling': 'Large variety of materials with no duct line transport',
			'Maintenance Costs': 'Low maintenance with robust design',
			'Integration': 'Compatible with mechanical sorting units (PaperMagnet®, ONP screens)',
			'Air Quality': 'Dust extraction capabilities for improved working environment',
			'Applications': 'MSW, RDF, C&I, C&D, comingled, car shredding systems'
		},
		applications: [
			'Municipal Solid Waste (MSW) density separation',
			'Refuse-Derived Fuel (RDF) processing and preparation',
			'Commercial & Industrial (C&I) waste sorting operations',
			'Construction & Demolition (C&D) material preparation',
			'Car Shredding System integration and processing',
			'Aggregate & Glass Cleanup Systems',
			'Biomass and Compost Cleanup Operations',
			'Incinerator Slag Recovery Systems'
		],
	},
	{
		id: 6,
		name: 'Smicon Food Waste Depackagers - Commercial Food Recycling',
		image: '/Images/smicon-depackaging.png',
		description: 'Specialized depackaging machines for recycling food waste from supermarkets, restaurants, caterers, and food industry. Opens commercial packaging, liberates contents, and grinds food waste into organic flow for animal feed, compost, or energy production.',
		features: [
			'Commercial packaging opening systems for various package types',
			'Food waste liberation technology separating contents from packaging',
			'Organic flow processing creating packaging-free food waste streams',
			'Packaging remnant removal ensuring clean organic output',
			'Grinding systems producing consistent organic flow particle size',
			'Suitable for supermarket, restaurant, catering, and food industry waste',
			'Output suitable for animal feed production applications',
			'Energy production ready organic waste stream generation'
		],
		specifications: {
			'Package Types': 'Various commercial food packaging formats',
			'Processing Capacity': 'Variable based on specific application requirements',
			'Output Quality': 'Clean organic flow free of packaging remnants',
			'Particle Size': 'Consistent grinding for downstream processing',
			'Applications': 'Animal feed, compost, reusable energy production',
			'Industries Served': 'Supermarkets, restaurants, caterers, food processing',
			'Automation Level': 'Semi-automated operation with manual loading',
			'Maintenance': 'Regular cleaning and maintenance required'
		},
		applications: [
			'Supermarket Food Waste Processing and Recovery',
			'Restaurant and Catering Waste Management',
			'Food Industry Surplus Processing Operations',
			'Animal Feed Production from Food Waste',
			'Commercial Composting Operations',
			'Biogas and Energy Production Preprocessing',
			'Organic Waste Diversion from Landfills',
			'Circular Economy Food Waste Solutions'
		],
	},
	{
		id: 7,
		name: 'GÜNTHER Screens - Original Spiral Shaft Technology',
		image: '/Images/gunther-screens.png',
		description: 'Revolutionary spiral shaft screening technology for front-end MRF operations. Original designer of spiral shaft with world-class manufacturing. SPLITTER Screen features interlocking screws for three-directional material separation with gentle, non-wrapping operation.',
		features: [
			'Interlocking screws separate materials in three directions (forward, lateral, throughs)',
			'Adjustable gaps for customized sizing requirements and flexible operations',
			'Heavy duty steel spirals designed for minimal wear in demanding applications',
			'Non-wrapping, self-cleaning technology with low maintenance requirements',
			'Gentle operation preventing glass breaking during material processing',
			'Original, Wave, and Twin Wave screen design configurations available',
			'Spiral shaft technology proven over decades of reliable operation',
			'Modular design allowing for various capacity and configuration requirements'
		],
		specifications: {
			'Separation Method': 'Three-directional (forward, lateral, and throughs)',
			'Gap Adjustment': 'Adjustable gaps for customizable sizing needs',
			'Construction': 'Heavy duty steel spirals with minimal wear characteristics',
			'Maintenance': 'Self-cleaning, non-wrapping, low maintenance operation',
			'Material Handling': 'Gentle operation suitable for glass-containing streams',
			'Design Options': 'Original, Wave, and Twin Wave configurations',
			'Capacity Range': 'Scalable based on screen design and configuration',
			'Manufacturing': 'World-class manufacturing quality standards'
		},
		applications: [
			'Single Stream Recycling Preprocessing and front-end operations',
			'Commercial Waste Processing Operations',
			'Municipal Solid Waste (MSW) screening and preparation',
			'Construction & Demolition (C&D) material separation',
			'Source Separated Organics Cleanup operations',
			'Organics Processing and preparation systems',
			'Soil Screening and remediation applications',
			'Material Recovery Facility (MRF) front-end automation'
		],
	},
	{
		id: 8,
		name: 'Centriair - Advanced Air Classification Systems',
		image: '/Images/centriair.png',
		description: 'Advanced centrifugal air classification systems for precise material separation based on density and aerodynamic properties. High-throughput processing with adjustable separation parameters for various recycling applications.',
		features: [
			'Centrifugal air classification technology for precise density separation',
			'Adjustable separation parameters for different material characteristics',
			'High throughput processing capabilities for large-scale operations',
			'Efficient air systems with optimized energy consumption',
			'Precise material separation based on aerodynamic properties',
			'Automated operation with minimal manual intervention requirements',
			'Robust construction suitable for continuous industrial operation',
			'Integration capabilities with existing material processing systems'
		],
		specifications: {
			'Classification Method': 'Centrifugal air classification technology',
			'Separation Precision': 'High precision based on density and aerodynamic properties',
			'Processing Capacity': 'High volume processing for industrial applications',
			'Energy Efficiency': 'Optimized air systems for reduced energy consumption',
			'Automation Level': 'Automated operation with parameter adjustment',
			'Construction': 'Industrial-grade robust design for continuous operation',
			'Integration': 'Compatible with existing material processing systems',
			'Maintenance': 'Minimal maintenance requirements with accessible components'
		},
		applications: [
			'Mixed Material Density Separation',
			'Lightweight Material Recovery from mixed streams',
			'Paper and Cardboard processing enhancement',
			'Plastic Sorting preparation and cleanup',
			'Construction & Demolition waste preprocessing',
			'Municipal Solid Waste density classification',
			'Material Recovery Facility processing optimization',
			'Industrial Waste Processing and separation'
		],
	},
	{
		id: 9,
		name: 'Greyparrot AI - Waste Intelligence Platform',
		image: '/Images/greyparrot-ai-analytics.png',
		description: 'Revolutionary AI-powered waste intelligence platform providing unprecedented access to plant performance data. 98% count accuracy identifying 89 waste categories at speeds up to 3m/s with live dashboard analytics and customizable alerts.',
		features: [
			'AI software trained on billions of data points for superior material recognition',
			'98% count accuracy for material identification at conveyor speeds up to 3m/s',
			'89 different municipal waste category characterization and tracking',
			'95% average accuracy for waste stream composition analysis by mass',
			'Brand, SKU, and package size identification capabilities for detailed analytics',
			'Food vs. non-food grade material differentiation for quality control',
			'Live dashboard with customizable alerts and real-time monitoring capabilities',
			'Automated sampling and compliance reporting meeting policy requirements'
		],
		specifications: {
			'Material Categories': '89 different types of municipal waste identification',
			'Count Accuracy': '98% accuracy at conveyor speeds up to 3 meters per second',
			'Mass Analysis': '95% average accuracy for waste stream composition',
			'Processing Speed': 'Real-time analysis with instant data reporting capabilities',
			'Recognition Types': 'Material, function, food grade, financial value, brand identification',
			'Installation': 'Easily mounted cameras over existing conveyor systems',
			'Data Processing': 'Live images processed instantly by AI software',
			'Dashboard Features': 'Live monitoring, customizable alerts, compliance reporting'
		},
		applications: [
			'Inbound Stream Auditing for 99% greater visibility into tipping floor materials',
			'Residue Line Monitoring to identify valuable materials lost to residue',
			'Final Quality Control Line Analysis for product stream optimization',
			'Retrofit Planning for understanding material flows before system improvements',
			'Plant Performance Monitoring and analytics for operational optimization',
			'Compliance Reporting and documentation for regulatory requirements',
			'Material Recovery Optimization and efficiency improvements',
			'Staff Safety Enhancement through reduced direct waste contact'
		],
	},
	{
		id: 10,
		name: 'Densimetric Table - Vibratory Density Separation',
		image: '/Images/densimetric-table.png',
		description: 'World-leading densimetric tables using vibration and fluidized bed principles for separating dry materials with different densities. FM model for low density materials, M model for high density materials up to 80mm grain size.',
		features: [
			'Vibratory motion separation using inclined table design with rising air current',
			'Fluidized bed technology causing less dense particles to float and slide down',
			'Dense products pushed up incline due to vibration contact with table bottom',
			'FM model for materials with low density and medium grain size applications',
			'M model for materials with high density and grain sizes up to 80 mm',
			'Robust design with wear and tear parts for severe operating conditions',
			'Available in multiple widths: 0.7, 1, 1.5, and 2.4 meters (FM model)',
			'M model available in three widths: 0.7, 1, and 1.5 meters'
		],
		specifications: {
			'Separation Principle': 'Vibration and fluidized bed with inclined table design',
			'FM Model Applications': 'Low density materials with medium grain size',
			'M Model Applications': 'High density materials with grain sizes up to 80 mm',
			'Available Widths FM': '0.7, 1, 1.5, and 2.4 meters',
			'Available Widths M': '0.7, 1, and 1.5 meters',
			'Construction': 'Robust design for severe operating conditions',
			'Material Types': 'Composting, green waste, C&D debris, tires, metals, wood',
			'Maintenance': 'Wear and tear parts designed for easy replacement'
		},
		applications: [
			'Composting Operations and organic material separation',
			'Green Waste Processing and cleanup operations',
			'Construction & Demolition (C&D) debris sorting',
			'Tire Processing and rubber material separation',
			'Metal Recovery and separation from mixed materials',
			'Wood Processing and cleanup operations',
			'Mixed Material Density Separation applications',
			'Industrial Waste Processing requiring density classification'
		],
	},
	{
		id: 11,
		name: 'BeeFoam Dust Suppression System - Advanced Foam Technology',
		image: '/Images/beefoam-dust.png',
		description: 'Advanced dust suppression system using minimal water mixed with air to create foam that binds to dust and weighs it down for up to 12 days. Allows proper material separation while greatly reducing dust and health risks.',
		features: [
			'Foam-based dust binding technology lasting up to 12 days effectiveness',
			'Minimal water usage preventing material over-wetting and equipment damage',
			'Air and water mixture creating lightweight foam for dust suppression',
			'Equipment protection preventing water damage to sensitive machinery',
			'Easy and quick installation with immediate dust control results',
			'Improved material separation capabilities even for fine materials',
			'Increased visibility and safety for workers in dusty environments',
			'Long-lasting effectiveness reducing frequent reapplication needs'
		],
		specifications: {
			'Effectiveness Duration': 'Up to 12 days of continuous dust suppression',
			'Water Usage': 'Minimal water consumption preventing over-wetting',
			'Application Method': 'Air and water mixture creating binding foam',
			'Installation': 'Easy and quick setup with immediate results',
			'Material Compatibility': 'Suitable for various material streams including fines',
			'Equipment Protection': 'Prevents water damage to processing equipment',
			'Environmental Impact': 'Reduced health risks and improved air quality',
			'Maintenance': 'Long-lasting system with minimal maintenance requirements'
		},
		applications: [
			'Construction & Demolition (C&D) site dust control',
			'Material Sorting Lines dust suppression',
			'Electronic Recycling facility dust management',
			'Metal Recycling operations dust control',
			'Plastics Recycling processing dust suppression',
			'Wood Shredding operations dust management',
			'Stone Crushing and aggregate processing',
			'Compost Operations dust control and Coal and Cement processing'
		],
	},
	{
		id: 12,
		name: 'Reckelberg Environmental Technologies - Battery Recycling Innovation',
		image: '/Images/reckelberg-battery-recycling.png',
		description: 'Advanced battery recycling technologies as exclusive North American partner. Features battery discharge systems, vacuum drying, and Impact Reactor for highest quality black mass recovery with maximum safety and bidirectional energy recovery.',
		features: [
			'Advanced battery discharge systems with safety through deep discharge to 0 volts',
			'Bidirectional design enabling efficient energy recovery to local electrical grid',
			'Vacuum drying technology for low-emission electrolyte recovery and safety',
			'Impact Reactor delivering highest purity and quality black mass recovery',
			'Customizable discharge capacity for batteries from EVs and stationary applications',
			'Fire risk minimization through controlled low-temperature drying processes',
			'Parallel redundant drying capabilities for increased efficiency and material recovery',
			'Integrated separation of hazardous substances in powder form with robust design'
		],
		specifications: {
			'Discharge Capability': 'Up to 1,000 V with freely selectable discharge depth',
			'Battery Applications': 'Electric vehicle and stationary lithium-ion applications',
			'Energy Recovery': 'Bidirectional design with high-efficiency grid energy return',
			'Safety Features': 'Deep discharge to 0V, low-temperature processing, hazard separation',
			'Black Mass Quality': 'Highest purity and quality recovery rates in industry',
			'Processing Types': 'Battery storage units, modules, and individual cells',
			'Environmental Benefits': 'Low-emission recovery with sustainable processing methods',
			'Operational Safety': 'Drastically reduced fire risk in treatment processes'
		},
		applications: [
			'Electric Vehicle (EV) Battery Recycling and processing',
			'Stationary Battery Storage System processing and recovery',
			'Lithium-Ion Battery Module and Cell recovery operations',
			'Black Mass Production for downstream material recovery',
			'Electrolyte Recovery and safe processing operations',
			'Hazardous Material Safe Handling and separation processes',
			'Grid Energy Recovery and operational efficiency optimization',
			'Sustainable Battery Lifecycle Management and circular economy'
		],
	},
	{
		id: 13,
		name: 'Certified Pre-Owned Equipment - Factory-Inspected Systems',
		image: '/Images/certified-preowned.png',
		description: 'World-class recycling equipment at reduced prices including Bollegraaf HBC balers, TOMRA/TITECH optical sorters, and Lubo screens. All equipment factory-inspected by trained technicians with lifetime phone support. Updated inventory as of 4/15/2020.',
		features: [
			'Factory-trained technician inspection ensuring equipment quality and performance',
			'Lifetime phone support providing ongoing technical assistance and troubleshooting',
			'Bollegraaf HBC baler models: HBC-50, HBC-80, HBC-100A/F, HBC-110K/KF, HBC-120, HBC-140F/K, HBC-180MR',
			'TOMRA/TITECH optical sorting: AS-3 NIR1 systems, PolySort units, metal detection options',
			'Lubo screening equipment: Neptunus SDL-7400, glass breaker screens, size separation screens',
			'BRM support equipment: baler feed conveyors, storage conveyors, sliding belts, magnets',
			'Multiple reconditioning levels: fully reconditioned, partially reconditioned, as-is condition',
			'Complete documentation and operational history provided with each unit'
		],
		specifications: {
			'HBC Baler Range': 'HBC-50 (1985) to HBC-180MR (2005) - various sizes and capacities',
			'Optical Sorting': 'AS-3 NIR1 systems 700mm-2000mm widths, reconditioned with new components',
			'Lubo Equipment': 'Neptunus SDL-7400 with 165-330 stars, glass breaker screens 1240x5330-6500',
			'Conveyor Systems': 'Storage conveyors 1500-2000mm wide x 14940mm long, various heights',
			'Support Equipment': 'Magnets 24" wide, eddy currents 1500mm wide, sliding belts various sizes',
			'Condition Levels': 'Fully reconditioned, partially reconditioned, as-is where is',
			'Shipping Terms': 'EXW Norwalk CT, FOB Norwalk CT, contract arrangements available',
			'Contact Information': '203-967-1100 for pricing, delivery, terms and conditions'
		},
		applications: [
			'Cost-Effective MRF Equipment Upgrades - proven systems at reduced investment',
			'Startup Recycling Operations - complete systems available for immediate installation',
			'Equipment Replacement - specific model matches for aging system components',
			'Capacity Expansion Projects - additional units to increase processing throughput',
			'International Recycling Projects - EXW shipping arrangements for global delivery',
			'Testing and Pilot Programs - evaluate equipment performance before new purchases',
			'Backup Equipment Systems - critical spare units for operational continuity',
			'Refurbishment Projects - restoration of existing facilities with matched equipment'
		],
	},
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
								onError={(e) => {
									// Set fallback image based on equipment type
									if (equipment.name.includes('Pellenc')) {
										e.currentTarget.src = '/Images/image-1749759453479.png';
									} else {
										e.currentTarget.src = '/Images/image-1749759453479.png';
									}
									e.currentTarget.alt = 'Equipment image not available';
								}}
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

const Equipment: React.FC = () => {
	const [selectedEquipment, setSelectedEquipment] = useState<Equipment | null>(null);
	const [showQuoteForm, setShowQuoteForm] = useState(false);
	const navigate = useNavigate();

	// Function to get detailed equipment data based on ID
	const getDetailedEquipmentData = (id: number): Equipment | null => {
		return equipmentData.find(eq => eq.id === id) || null;
	};

	const handleLearnMore = (item: any) => {
		const detailedData = getDetailedEquipmentData(item.id);
		if (detailedData) {
			setSelectedEquipment(detailedData);
		} else {
			// Fallback to using the basic item data
			setSelectedEquipment({
				id: item.id,
				name: item.name,
				image: item.image,
				description: item.description,
				features: item.features,
				specifications: item.specifications
			});
		}
	};

	const handleGetQuote = (equipmentData?: any) => {
		// Navigate to quote page with specific equipment data
		navigate('/quote', { 
			state: { 
				selectedEquipment: equipmentData ? [equipmentData] : [],
				equipmentName: equipmentData?.name || 'General Equipment Inquiry'
			} 
		});
	};

	const handleGetQuoteFromCard = (item: any) => {
		navigate('/quote', { 
			state: { 
				selectedEquipment: [item],
				equipmentName: item.name,
				equipmentId: item.id
			} 
		});
	};

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white smooth-scroll">
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
							<h1 className="text-4xl md:text-5xl font-bold mb-6">Recycling Equipment Solutions</h1>
							<p className="text-xl text-gray-100 mb-8">
								Discover our comprehensive range of advanced recycling equipment: Bollegraaf balers for superior material compression, Lubo StarScreen® non-wrapping screening technology, TOMRA world-leading optical sorting with NIR technology, and Pellenc ST AI-powered intelligent sorting solutions. Complete turnkey systems for sustainable waste processing and material recovery.
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
									alt={`${item.name} recycling equipment`}
									className="w-full h-full object-cover"
									onError={(e) => {
										e.currentTarget.src = '/Images/image-1749759453479.png';
										e.currentTarget.alt = 'Recycling equipment image not available';
									}}
								/>
							</div>
							<div className="p-6">
								<h3 className="text-2xl font-bold text-vd-blue mb-3 leading-tight">{item.name}</h3>
								<p className="text-gray-700 mb-5 leading-relaxed text-base">{item.description}</p>
								<div className="flex flex-wrap gap-2 mb-6">
									{item.features?.slice(0, 2).map((feature, index) => (
										<span
											key={index}
											className="bg-vd-blue/10 text-vd-blue text-sm font-medium px-3 py-2 rounded-full"
										>
											{feature}
										</span>
									))}
								</div>
								<div className="flex justify-between items-center">
									<button
										onClick={() => handleLearnMore(item)}
										className="text-vd-orange hover:text-vd-orange-alt font-semibold text-base flex items-center space-x-2 transition-colors duration-200"
									>
										<Info className="w-5 h-5" />
										<span>Learn More</span>
									</button>
									<button
										onClick={() => handleGetQuoteFromCard(item)}
										className="text-vd-orange hover:text-vd-orange-alt font-semibold text-base flex items-center space-x-2 transition-colors duration-200"
									>
										<Quote className="w-5 h-5" />
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
					<h2 className="text-2xl font-bold text-vd-blue mb-4">Need a Custom Recycling Solution?</h2>
					<p className="text-gray-600 mb-6">
						Contact our team to discuss your specific requirements and discover how we can help optimize your recycling operations with advanced waste processing technology.
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