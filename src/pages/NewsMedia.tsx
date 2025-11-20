import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { 
  Calendar, ArrowRight, ExternalLink, 
  Grid, List, X, Clock, Eye, Quote
} from 'lucide-react';
import QuoteForm from '../components/QuoteForm';
import { IMAGE_ASSIGNMENTS } from '../config/images';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
  link: string;
  type: 'html' | 'pdf';
  views: string;
  trending?: boolean;
  fullContent?: string;
}

const NewsMedia = () => {
  const location = useLocation();
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeView, setActiveView] = useState<'grid' | 'list'>('grid');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [showArticleModal, setShowArticleModal] = useState(false);
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  // Sidebar navigation items - Updated
  const sidebarItems = [
    { name: 'Latest News', path: '/news-media', isActive: location.pathname === '/news-media' },
    { name: 'Videos', path: '/videos', isActive: location.pathname === '/videos' },
    { name: 'Expert Tips', path: '/expert-tips', isActive: location.pathname === '/expert-tips' }
  ];

  // Comprehensive news data
  const newsData: Article[] = [
    {
      id: 1,
      title: 'NWRA Announces 2025 Recycling Awards Recipients - Van Dyk Recycling Solutions Wins Recycling Innovator of the Year Award 2025',
      excerpt: 'The National Waste & Recycling Association (NWRA) honors six recycling projects and programs, including Van Dyk Recycling Solutions and Greyparrot AI as Recycling Equipment Innovator of the Year.',
      category: 'Awards',
      date: '2025-01-21',
      readTime: '12 min read',
      image: '/Images/first.jpg',
      featured: true,
      link: 'https://www.wasterecycling.org/',
      type: 'html',
      views: '3.5k',
      trending: true,
      fullContent: `<p><strong>Arlington, VA</strong> – The National Waste & Recycling Association (NWRA) is excited to announce that it will honor six recycling projects and programs during the NWRA Industry Conference this coming January 21 in a ceremony held on the USS Midway.</p>

<p>This year's award winners are being recognized for work that meets local needs in innovative ways, demonstrates high standards of effective operations, expands public outreach into new areas, and implements leading-edge technology. A panel of professionals from the waste and recycling industry selected the winners from 37 applications.</p>

<p>"Each year, NWRA honors those projects and programs across the waste and recycling industry that exemplify our shared dedication to innovation and the implementation of technology in support of efforts to successfully capture, reduce, and reuse materials from the waste stream," said NWRA President and CEO Michael E. Hoffman. "With continued skepticism around how the industry functions, the awards give us real-world examples to help tell the story to elected officials and the public that recycling is real and effective, particularly when supported by behavior change, sound policies based on solid research, and investment in innovation. The 2025 Recycling Award winners are a great example of embracing innovation and creating confidence in the tireless work done by the waste and recycling industry."</p>

<h3>NWRA 2025 Recycling Awards Recipients:</h3>

<h4>Game Changer/Sustainability Partnership: WM – Major League Baseball</h4>
<p>Major League Baseball (MLB) and WM forged a multi-year partnership to elevate sustainability-related efforts across all MLB operations, during flagship events (e.g., All Stars, postseason), and with individual Clubs and ballparks across the U.S. and Canada. In the partnership, MLB works with WM to identify League-wide initiatives ranging across waste, energy, and water management, procurement, travel, community impact, and fan engagement. MLB also provides financial support for WM's customized advisory services to individual clubs, including developing strategic and operations plans, optimizing recycling programs, and helping implement new waste reduction and diversion systems. The partnership standardizes tracking and reporting of environmental impact metrics and reporting through the use of a shared digital platform accessible to the League and all 30 clubs.</p>

<p>The partnership exemplifies how sports sponsorship can drive environmental progress and social impact.</p>

<h4>Recycling Facility of the Year: Rumpke Recycling & Resource Center in Columbus, OH</h4>
<p>Rumpke Waste & Recycling's $106 million material recovery facility (MRF), launched in August 2024, with long-term goals to meet growing regional recycling needs, expand recycling capabilities, increase recycling efficiency, and drive the circular economy, while providing transparent metrics. The Recycling & Resource Center processes 11 types of recyclables and achieved impressive milestones in its first year, with almost 175,000 tons processed; a processing rate of more than 65 tons per hour, 90 percent operational runtime; and a recycling recovery rate of more than 98 percent, significantly reducing residue sent to disposal. More than 80 percent of the processed material is delivered to Ohio-based manufacturers, boosting local jobs and the Ohio economy.</p>

<p>To support its goals, the facility also accommodates space for on-site AI research in conjunction with The Ohio State University, as well as a 3,000 square foot Education Center and 150-foot tour platform for hosting tours and guests. During its first 12 months of operation, Rumpke hosted more than 100 tours for 2,000 guests.</p>

<h4>Organics Management Facility of the Year: Generate Upcycle – Cayuga Digester and Biogas Plant</h4>
<p>Generate Upcycle revitalized an abandoned, inoperable manure digester in Auburn, NY, transforming it into North America's only organics facility with a custom-built food waste depackaging system. The Cayuga Digester and Biogas Plant converts 90,000 tons of organic waste per year into 150,000 million Btu of renewable natural gas and 20 million gallons of nitrogen-rich organic fertilizer. With this recovery, the facility avoids the release of more than 57,000 metric tons of CO2 emissions. The MRF receives and depackages 45,000 tons per year of packaged food waste and highly contaminated source-separated organics. In addition to separating the organic content for processing, the MRF recovers 8,100 TPY of cardboard, plastics, and metals for recycling.</p>

<h4>Construction & Demolition Recycling Facility of the Year: WM-Nashville C&D Recycling Facility</h4>
<p>In 2023, almost 267,000 tons of construction and demolition (C&D) debris per year – about 97 percent of the total C&D debris generated in Davidson County, TN – was landfilled, according to the City of Nashville. Landfills serving the region were nearing capacity, finding it increasingly difficult to permit expansions. The WM-operated hand-sort C&D recycling program had limited capacity and was accepting material only from projects seeking LEED certification. It became a priority to find a solution to increase recovery, cost-effectiveness, and participation in C&D recycling programs. WM invested $18 million to build the first automated C&D debris recycling facility in the state. The 52,000 square foot, automated recycling facility is designed to handle 1,200 tons per day of mixed loads of C&D debris including metal, concrete, wood, and C&D fines. The facility completed scale-up in the first quarter of 2024. In the remaining months of 2024, it processed more than 100,000 tons of material, of which nearly 50 percent was recovered for reuse.</p>

<p>WM also entered into a three-year commitment with Tennessee State University to provide research grant funding and scholarships to students to explore alternative uses for difficult-to-recycle C&D fines.</p>

<h4>Excellence in Recycling Public Education: OCWR's EcoChallenge Curriculum: Enhancing Sustainability and Benefitting Youth</h4>
<p>With changes in California law related to organic waste recycling, Orange County, CA, Waste & Recycling (OCWR), and the Orange County Department of Education identified a need to teach the "why" and "how" of organics recycling through the schools. The partnership developed the EcoChallenge program in 2022 to translate the state recycling mandates into age-appropriate K-12 lessons and actions. EcoChallenge lessons (offered in English, Spanish, and Vietnamese to align with county demographics) increase in complexity as students age – beginning with an Allison Apple compost adventure for kindergarteners to analysis of climate science and designing food recovery programs by high school. Student participation has increased each of the first two full years: from 7,500 students in 2023 to 12,247 students in 2024. The next phase of the EcoChallenge program begins in 2026 and will include an option for field trips to OCWR's landfills and recycling facilities, exposure to industry career paths, and new curriculum topics like renewable energy from landfills and zero-waste lifestyles.</p>

<h4>Recycling Equipment Innovator of the Year: Van Dyk Recycling Solutions and Greyparrot AI</h4>
<p>The Greyparrot Analyzer system uses AI to identify more than 111 waste/recycling categories in U.S. and European material streams. By mounting Greyparrot camera units on material recovery facility (MRF) conveyor belts and capturing images of the passing recyclables, MRF owners and operators gain real-time data analyzing 99 percent of the materials processed, including each object's material, mass, value, and potential emissions. The collected insights contribute to enhanced recovery, greater purity, more cost effectiveness, and increased revenues. Van Dyk Recycling Solutions has mounted Greyparrot AI systems in seven U.S. MRFs to date, including NWRA's 2023 Recycling Facility of the Year Murphy Road Recycling (a USA Hauling subsidiary) in Enfield, CT. Greyparrot has a global customer base including 70 percent of the market share for the European waste sector. In 2024, Greyparrot Analyzer units helped divert more than 125,000 tons of recyclable materials back into the circular economy. Most recently, Greyparrot partnered with Closed Loop Partners to assess the availability of food-grade polypropylene (PP) in U.S. MRFs.</p>

<p>The 2025 NWRA Recycling Awards recipients will be recognized at a January 21 Awards Dinner on the USS Midway, held as part of NWRA's 2026 Industry Conference January 19-21, in San Diego, California.</p>`
    },
    {
      id: 2,
      title: 'A Look at the Equipment Add-ons Helping Recycling Facilities Boost Consistency and Reduce Missorts',
      excerpt: 'VAN DYK Recycling Solutions and its partners are integrating AI, advanced detection systems, and presort innovations to improve purity and performance.',
      category: 'Technology',
      date: '2025-10-20',
      readTime: '10 min read',
      image: '/Images/greyparrot-ai-recognition.jpg',
      featured: true,
      link: 'https://www.recyclingproductnews.com/digital-edition',
      type: 'html',
      views: '2.8k',
      trending: true,
      fullContent: `<p><em>By Recycling Product News Staff</em></p>

<p><strong>October 20, 2025</strong> — Recycling facilities are turning to technology to keep pace with complex materials and stricter quality demands.</p>

<p>Recycling facilities are adapting to rising material complexity, evolving packaging streams, and heightened quality demands. Technology is playing a growing role in addressing these pressures, and VAN DYK Recycling Solutions has been working with operators to implement equipment and system designs that respond to these changing demands.</p>

<h3>Optical sorting: Smarter decisions with AI</h3>

<p>Optical sorting has long been the backbone of modern MRFs and plastics recovery facilities. VAN DYK's optical sorting partners are building on this foundation with systems that combine AI-powered add-ons and integrate with proven NIR detection to address sorting challenges that have traditionally been difficult for the industry to resolve.</p>

<p>To identify and eject black plastics, TOMRA uses a laser technology called DEEP LAISER, and Pellenc ST uses Profile Detection for the same task. On the AI front, TOMRA's GAINnext introduces a series of capabilities not available with traditional NIR to clean up paper, plastic, and used beverage cans (UBCs). Pellenc ST has a similar lineup that includes AISORT and CNS BRAIN.</p>

<p>These AI technologies analyze images of incoming material to intelligently detect common contamination like non-foodgrade resins, non-UBC aluminum, and white or coated cardboard, leading to higher purity levels in the fiber and container line output. Both companies continue to push development further at their respective material and technology test centers, where AI models are trained on real-world materials to refine accuracy over time.</p>

<h3>Enhanced performance with system add-ons</h3>

<p>VAN DYK works with operators to enhance the performance of optical sorters through equipment add-ons designed to improve consistency and accuracy. Disc spreaders ensure material is evenly distributed across the belt for maximum visibility and enhanced sorting performance. Optical acceleration belts can be outfitted with air assist technology to prevent light materials from floating around, improving ejection accuracy and reducing missorts. These enhancements translate directly into cleaner commodities and stronger plant economics.</p>

<h3>Data intelligence in real time</h3>

<p>VAN DYK's exclusive partnership with Greyparrot brings a high-resolution, AI-powered analytics platform to MRFs. By providing minute-to-minute insights into inbound and outbound material streams, Greyparrot analyzers monitor sorting performance on each commodity. Greyparrot flags inefficiencies instantly so operators can take action before valuable materials — and profits — are lost. Greyparrot's AI has been trained to identify 111 waste categories and is continually learning more. This technology is poised to transform how facilities track, analyze, and optimize performance in real time.</p>

<h3>Rethinking the presort with splitter technology</h3>

<p>Upstream, the Günther SPLITTER is a non-wrapping, maintenance-free spiral shaft screen for front-end sizing in a MRF. Ideal for size separation in this setting, the SPLITTER is customizable and can be built with six different axle distances and 11 different auger sizes. This means the SPLITTER screen can be built 33 different ways to properly size and separate materials. Its original shaft technology screens out hazards, boosts safety, and eliminates the need for manual sorters in hazardous areas of the plant. By removing problematic items early, downstream equipment performs more efficiently and sustains less wear.</p>

<p><em>This article originally appeared in the 2025 Technology Special Issue of <a href="https://www.recyclingproductnews.com/digital-edition" target="_blank" rel="noopener noreferrer">Recycling Product News</a>.</em></p>`
    },
    {
      id: 3,
      title: '2024 Marks Strong Year for Van Dyk',
      excerpt: 'New installations, deals and partnerships mark strong year for Van Dyk Recycling Solutions with major projects including NOVA Circular Solutions, Freepoint Eco-Systems, Waste Connections, and more.',
      category: 'Company News',
      date: '2024-12-31',
      readTime: '15 min read',
      image: '/Images/first.jpg',
      featured: true,
      link: 'https://vdrs.com/news-media/2024-marks-strong-year-for-van-dyk/',
      type: 'html',
      views: '4.2k',
      trending: true,
      fullContent: `<h3>New installations, deals and partnerships mark strong year for Van Dyk Recycling Solutions</h3>

<h4>NOVA Circular Solutions to Open Film Recycling Plant</h4>
<p>Van Dyk's front-end processing system for NOVA Circular Solutions' first mechanical recycling facility will be starting up in January 2025. The site will convert post-consumer plastic films into recycled polyethylene with a capacity of over 100 million pounds per year.</p>

<h4>Freepoint Eco-Systems LLC Begins Chemical Recycling of Plastics</h4>
<p>Freepoint Eco-Systems LLC is opening its first plastic recycling facility in Hebron, OH with equipment from Van Dyk to sort and purify a variety of polyolefins, otherwise destined for the landfill, which will be further converted into oil.</p>

<h4>Waste Connections Opens Facility with Advanced Fire Prevention</h4>
<p>Waste Connections opened their latest single stream facility in Plainfield, IL in the spring of 2024. The plant is equipped with 5 levels of fire safety and prevention to combat one of the most pervasive issues in MRFs today. The highly automated system processes 37 tph, with only 4 manual sorters, while maintaining Waste Connections' #1 value- employee safety.</p>

<h4>Atlantic Coast Recycling Opens Redeveloped MRF</h4>
<p>Atlantic Coast Recycling of Passaic, NJ opened a combined single stream and dual stream system in the spring of 2024, after a year-long redevelopment project. The system features eight TOMRA autosort equipped with artificial intelligence to recover paper and plastics from residential and commercial material, and processes over 16,000 tons monthly. The system's advancements have allowed the MRF to substantially reduce sorting labor costs.</p>

<h4>FCC Environmental Services Opens C&D System</h4>
<p>FCC Environmental Services has finished and commissioned its 60 tph C&D system in Roseville, CA to process construction and demolition waste. The next phase of FCC's deal with the Western Placer Waste Management Authority is completion of a 110 tph MSW line to process the county's solid waste, which is underway and expected to be operational in late 2025.</p>

<h4>Mazza Recycling Services to Build New C&D Facility</h4>
<p>Mazza Recycling Services has selected Van Dyk to build their newest C&D plant in Tinton Falls, New Jersey. The system will feature shredders, magnets, Lubo screens and optical sorters to recover wood from mixed construction and demolition waste. The TOMRA optical sorters will be equipped with GAINnext artificial intelligence and Deep Laiser recognition for optimal sortation of wood.</p>

<h4>Ontario Selects Processors for EPR Rollout</h4>
<p>Circular Materials is the not-for-profit producer responsibility organization that is helping producers meet their commitments under the new EPR policy for packaging and paper products in Ontario. To support this initiative, Circular Materials has awarded WM the contract to construct two state-of-the-art recycling facilities strategically located in the Region of Waterloo and Greater Napanee. Scheduled for completion in 2026, these highly automated facilities will support the efficient and effective recycling of material in the province.</p>

<p>Circular Materials has also awarded a contract to GFL to build and operate a plant in Toronto, which will recover a wide range of packaging. Van Dyk Recycling Solutions will design and build a brand-new front-end processing system with a building extension to house the new equipment. Startup is expected in 2026.</p>

<h4>GFL to Open Edmonton Single Stream MRF</h4>
<p>GFL is rebuilding its Edmonton, Alberta site with a 20tph single stream system to handle tons from the metro area, filling a void in the region. Van Dyk is currently installing this system, which is slated for startup in Q1 2025.</p>

<h4>Greyparrot Analyzer – Try Before You Buy!</h4>
<p>Van Dyk will install analyzer units from new partner Greyparrot in its Norwalk, CT material test center in spring of 2025. Customers can demo the AI monitoring software and see how its dashboard works to present actionable data to improve MRF operations.</p>

<h4>Murphy Road Recycling LLC Invests in AI Software</h4>
<p>Murphy Road Recycling becomes one of the first MRF operators to invest in Greyparrot analyzer technology, installing 15 units on all final commodity lines and infeed lines. The company says the data provided by the analyzers provides faster insight on their plant performance than traditional monitoring methods, making them more proactive in their plant management.</p>

<h4>Murphy Road Recycling LLC Upgrades Fiber Line</h4>
<p>Murphy Road Recycling has also retrofitted their system with three new optical sorters to further enhance the capture and purity rates of fiber.</p>

<h4>Balcones Sees Measurable Improvement with Optical Upgrade</h4>
<p>A three-day installation took Balcones' Austin, TX plant to new heights by replacing two underperforming optical sorters with two Pellenc ST Mistral+. The operation saw an immediate 12-15% recovery and purity improvement with almost no downtime.</p>

<h4>USA Pellenc ST sells 300th Machine in USA</h4>
<p>Pellenc ST celebrated their 300th machine sold in the USA during the installation of the Waste Connections system in Plainfield, IL. Waste Connections chose Pellenc optical sorters for their reliable sorting performance and their thoughtful design for maintenance access that makes cleaning safe and easy.</p>

<h4>Sunnyvale, CA Improves Organics System with Smicon Equipment</h4>
<p>The city of Sunnyvale, CA revamped their organics recovery operations by installing a SMIMO120 food depackager and a SMIMO15 grinder from manufacturer Smicon. The depackager liberates and recovers food waste from its packaging, and the grinder prepares the organics for co-digestion at the wastewater treatment plants. Sunnyvale has experienced a 60% increase in storage capacity thanks to the new system and is achieving close to 90% organic recovery.</p>

<h4>Bollegraaf – Built to Last</h4>
<p>Two recycling operators have honorably retired and replaced their Bollegraaf balers after decades in operation. Commissioned in 2005, Gordon Recycling's baler provided nearly twenty years of reliable performance, producing close to 1M bales. When it finally came time for a replacement, the decision was easy – they bought a brand new Bollegraaf.</p>

<p>Operating since the mid-nineties, UPak's baler ran strong for almost 30 years. Their recent upgrade to a new Bollegraaf baler continues Bollegraaf's legacy of being the cornerstone of many recycling operations.</p>

<h4>Republic Services Upgrades Las Vegas Site Baler</h4>
<p>Republic Services has upgraded their Las Vegas facility with a new Bollegraaf baler for high-volume baling of fiber. They chose this after operating a Bollegraaf baler at a nearby site and seeing it excel under high-throughput conditions. The plant has also added a glass cleanup system from Van Dyk to recover recyclable glass heavies.</p>

<h4>Van Dyk Hires Plastics Expert to Expand Offerings</h4>
<p>Van Dyk welcomes Enrico Siewert in the role of Head of Business Development – Plastics. With 20 years' experience in the plastics industry, Siewert is uniquely positioned to help develop domestic, vertically integrated processing solutions for plastics and expand Van Dyk's offerings of cutting-edge PRFs (Plastic Recycling Facilities).</p>

<h4>Van Dyk Partners with Battery Recycler</h4>
<p>Van Dyk partners with Reckelberg Environmental Technologies (RET) to recycle lithium-ion batteries. RET has a unique sorting process for recovering the valuable black mass present in these batteries.</p>`
    },
    {
      id: 4,
      title: 'Van Dyk Partners with Reckelberg Environmental Technologies to Enable North American Customers to Recycle EV Batteries',
      excerpt: 'Van Dyk Recycling Solutions has signed a contract to sell equipment from Reckelberg Environmental Technologies (RET) to recycle lithium-ion batteries of all kinds and scrap fractions from battery production.',
      category: 'Partnerships',
      date: '2024-12-13',
      readTime: '8 min read',
      image: '/Images/first.jpg',
      featured: true,
      link: 'https://vdrs.com/news-media/van-dyk-partners-with-reckelberg-environmental-technologies-to-enable-north-american-customers-to-recycle-ev-batteries/',
      type: 'html',
      views: '2.9k',
      trending: true,
      fullContent: `<p><strong>December 13, 2024</strong> — Van Dyk Recycling Solutions has signed a contract to sell equipment from Reckelberg Environmental Technologies (RET) to recycle lithium-ion batteries of all kinds and scrap fractions from the battery production. Batteries and rechargeable batteries from the EV sector in particular contain rare and valuable raw materials, and backed by their knowledge from many years in operative battery recycling, Germany-based RET has developed a revolutionary process for safely recovering the valuable materials in batteries with the highest yield and purities.</p>

<p>Following increased production and popularity of the devices and cars using these rechargeable batteries, RET expects the number of used batteries, especially EV batteries, for recycling to increase over the next 5 to 10 years. "RET's mission is to further develop and supply market leading technologies and solutions for battery recycling to enable its customers to tackle one of the biggest problems of the upcoming years in regards to recycling," says Claas Reckelberg, CEO of RET. Nico Klemencic, CFO of RET, adds: "With our innovative components and solutions our customers will be able to create the cornerstone of a circular economy for the valuable raw materials from batteries. Together we will close the loop!"</p>

<p>"RET is at the forefront of battery recycling in Europe," says Brian Schellati, director of business development for Van Dyk Recycling Solutions. "As electric vehicles become more popular in North America, we will need effective solutions for recycling their batteries. The materials we can separate in these large car batteries has very high value, meaning potentially great ROI for these operations. Van Dyk will be well positioned to provide sortation strategies to this market as RET has the highest recovery of the valuable black mass that we have seen."</p>

<p>RET is specialized in battery recycling and has core components for all major process steps: electrical discharging, vacuum drying and mechanical separation. What makes the system unique is the key component for the mechanical treatment, what RET calls the Impact Reactor. It allows a direct recovery of highest quality black mass at one central point after the vacuum drying. A completely capsuled system with extensive exhaust-gas treatment and filter-systems guarantees the fulfillment of all effective and upcoming health, safety, and emission requirements. To create turnkey solutions, Van Dyk will turn to its other trusted equipment suppliers for conveyors, air separation tables, zig-zag sifters, screens, and magnets.</p>

<h3>About Van Dyk Recycling Solutions</h3>
<p>VAN DYK Recycling Solutions is a leading supplier of world-class recycling systems for the North American waste processor and recycler. Celebrating 40 years in business, Van Dyk designs, installs and services complete systems across multiple recycling markets with an expert in-house team. Van Dyk also offers extensive hands-on training and a customer support program that is unmatched in the industry.</p>`
    },
    {
      id: 5,
      title: 'Equipment Enhancements Help Sunnyvale\'s Organics Operations Achieve Close to 90% Organic Recovery',
      excerpt: 'The city of Sunnyvale, CA revamped their organics recovery operations with Smicon equipment, achieving close to 90% organic recovery and a 60% increase in storage capacity.',
      category: 'Case Studies',
      date: '2024-12-10',
      readTime: '6 min read',
      image: '/Images/first.jpg',
      featured: false,
      link: 'https://vdrs.com/news-media/equipment-enhancements-help-sunnyvales-organics-operations-achieve-close-to-90-organic-recovery/',
      type: 'html',
      views: '1.8k'
    },
    {
      id: 6,
      title: 'Van Dyk Recycling Solutions Hires Enrico Siewert as Director of Business Development - Plastics',
      excerpt: 'Van Dyk welcomes Enrico Siewert with 20 years of experience in the plastics industry to help develop domestic, vertically integrated processing solutions for plastics.',
      category: 'Company News',
      date: '2024-12-08',
      readTime: '5 min read',
      image: '/Images/first.jpg',
      featured: false,
      link: 'https://vdrs.com/news-media/van-dyk-recycling-solutions-hires-enrico-siewert-as-director-of-business-development-plastics/',
      type: 'html',
      views: '1.5k'
    },
    {
      id: 7,
      title: 'Greyparrot and Van Dyk Partner to Revolutionize U.S. Waste Sorting and Processing with AI',
      excerpt: 'Van Dyk partners with Greyparrot to bring AI-powered analytics platform to MRFs, providing real-time insights into material streams and sorting performance.',
      category: 'Partnerships',
      date: '2024-12-05',
      readTime: '7 min read',
      image: '/Images/greyparrot-ai-recognition.jpg',
      featured: true,
      link: 'https://vdrs.com/news-media/greyparrot-and-van-dyk-partner-to-revolutionize-u-s-waste-sorting-and-processing-with-ai/',
      type: 'html',
      views: '2.4k',
      trending: true
    },
    {
      id: 8,
      title: 'Freepoint Eco-Systems Works with Van Dyk to Open Advanced Plastic Recycling Facility in U.S.',
      excerpt: 'Freepoint Eco-Systems LLC opens its first plastic recycling facility in Hebron, OH with equipment from Van Dyk to sort and purify polyolefins for chemical recycling.',
      category: 'Company News',
      date: '2024-11-20',
      readTime: '6 min read',
      image: '/Images/first.jpg',
      featured: false,
      link: 'https://vdrs.com/news-media/freepoint-eco-systems-works-with-van-dyk-to-open-advanced-plastic-recycling-facility-in-u-s/',
      type: 'html',
      views: '1.9k'
    },
    {
      id: 9,
      title: 'Van Dyk Recycling Solutions Introduces Günther SPLITTER Screen to its Line of MRF Equipment',
      excerpt: 'Van Dyk adds the Günther SPLITTER, a non-wrapping, maintenance-free spiral shaft screen for front-end sizing in MRFs, with customizable configurations.',
      category: 'Product Updates',
      date: '2024-11-15',
      readTime: '5 min read',
      image: '/Images/first.jpg',
      featured: false,
      link: 'https://vdrs.com/news-media/van-dyk-recycling-solutions-introduces-gunther-splitter-screen-to-its-line-of-mrf-equipment-2/',
      type: 'html',
      views: '1.6k'
    },
    {
      id: 10,
      title: 'Van Dyk in 2023: Major Projects and Expansions',
      excerpt: 'A comprehensive look at Van Dyk\'s major projects, installations, and expansions throughout 2023.',
      category: 'Company News',
      date: '2023-12-31',
      readTime: '12 min read',
      image: '/Images/first.jpg',
      featured: false,
      link: 'https://vdrs.com/news-media/van-dyk-in-2023-major-projects-and-expansions/',
      type: 'html',
      views: '2.1k'
    },
    {
      id: 11,
      title: 'Van Dyk Recycling Solutions Celebrates 40 Years of Innovation in Waste Processing Technology',
      excerpt: 'Four decades of pioneering recycling solutions, from humble origins to industry leadership in advanced waste processing and material recovery systems.',
      category: 'Company News',
      date: '2024-12-20',
      readTime: '8 min read',
      image: '/Images/first.jpg',
      featured: true,
      link: 'https://example.com/news/40-years-innovation',
      type: 'html',
      views: '2.3k',
      trending: true,
      fullContent: '<p>Van Dyk Recycling Solutions marks a significant milestone as we celebrate 40 years of innovation in waste processing technology...</p>'
    },
    {
      id: 12,
      title: '2017 Banner Year for Bollegraaf Baler Sales',
      excerpt: 'January 2018 – 2017 has been a busy year for Van Dyk, supplying single-ram, no-shear Bollegraaf Balers to the following customers: WMRA Davis St (San Leandro, CA) HBC-80 WMRA Kansas City (Kansas City, KS) HBC-80 Recuperaction Centre due Quebec HBC-120 RecycleSource (Pittsburgh, PA) HBC-120 Anonymous customer (Northeast USA) HBC-120 Anonymous customer (Southeast USA) HBC-120 Great Northern...',
      category: 'Product Updates',
      date: '2018-03-29',
      readTime: '3 min read',
      image: '/wp-content/uploads/2018/03/2017_balers215.jpg',
      featured: false,
      link: 'https://vdrs.com/news-media/2017-banner-year-bollegraaf-baler-sales/',
      type: 'html',
      views: '1.2k',
      fullContent: `<p><img fetchpriority="high" decoding="async" class="aligncenter size-full wp-image-5160" style="padding-top: 12px; padding-bottom: 18px;" src="/wp-content/uploads/2018/03/2017_balers700.jpg" alt="Van Dyk banner year in 2017 for Bollegraaf sales" width="700" height="467" /></p>
<p>January 2018 – 2017 has been a busy year for Van Dyk, supplying single-ram, no-shear&nbsp;Bollegraaf Balers to the following customers:</p>
<div style="margin: 0 100px 0 100px;">
<table style="height: 292px;" width="625">
<tbody>
<tr>
<td>WMRA Davis St (San Leandro, CA)</td>
<td>HBC-80</td>
</tr>
<tr>
<td>WMRA Kansas City (Kansas City, KS)</td>
<td>HBC-80</td>
</tr>
<tr>
<td>Recuperaction Centre due Quebec</td>
<td>HBC-120</td>
</tr>
<tr>
<td>RecycleSource (Pittsburgh, PA)</td>
<td>HBC-120</td>
</tr>
<tr>
<td>Anonymous customer (Northeast USA)</td>
<td>HBC-120</td>
</tr>
<tr>
<td>Anonymous customer (Southeast USA)</td>
<td>HBC-120</td>
</tr>
<tr>
<td>Great Northern Fibers (West Babylon, NY)</td>
<td>HBC-120S</td>
</tr>
<tr>
<td>SANCO (Escondido, CA)</td>
<td>HBC-120S</td>
</tr>
<tr>
<td>Homewood Disposal (East Hazel Crest, IL)</td>
<td>HBC-120S</td>
</tr>
<tr>
<td>Save that Stuff&nbsp;(Boston, MA)</td>
<td>HBC-120S</td>
</tr>
<tr>
<td>Waste Management CID (Chicago, IL)</td>
<td>HBC-120S</td>
</tr>
<tr>
<td>Willimantic Waste Paper (Willimantic, CT)</td>
<td>HBC-120S</td>
</tr>
<tr>
<td>Potential Industries (Wilmington, CA)</td>
<td>HBC-120S</td>
</tr>
<tr>
<td>City Fibers (North Hills, CA)</td>
<td>HBC-120S</td>
</tr>
<tr>
<td>WMRA Sun Valley (Sun Valley, CA)</td>
<td>HBC-120S</td>
</tr>
<tr>
<td>Anonymous customer (Midwest USA)</td>
<td>HBC-120S</td>
</tr>
<tr>
<td>Anonymous customer (Midwest USA)</td>
<td>HBC-120S</td>
</tr>
<tr>
<td>Anonymous customer (Northeast USA)</td>
<td>HBC-120S</td>
</tr>
<tr>
<td>Anonymous customer (Southwest USA)</td>
<td>HBC-120S</td>
</tr>
<tr>
<td>Quincy Recycle (New Haven, IN)</td>
<td>HBC-120MR</td>
</tr>
<tr>
<td>WMRA Newark (Newark, NJ)</td>
<td>HBC-140</td>
</tr>
<tr>
<td>Penn Waste&nbsp;(York, PA)</td>
<td>HBC-140</td>
</tr>
<tr>
<td>Cellmark Recycling (Bronx, NY)</td>
<td>HBC-140</td>
</tr>
<tr>
<td>Environmental Fibers International (Portland, OR)</td>
<td>HBC-140</td>
</tr>
</tbody>
</table>
</div>
<p>For high-volume MRFs and facilities that process 2,000+ tons per month… Bollegraaf is&nbsp;THE #1 choice. For more information on the HBC series, contact a Van Dyk salesman at&nbsp;203-967-1100 or <a href="mailto:info@vdrs.com">info@vdrs.com</a>.</p>`
    },
    {
      id: 13,
      title: 'A Construction and Demolition Facility with Zero-Waste Goals',
      excerpt: 'EDCO makes updates to its Lemon Grove, CA C&D facility to assist local jurisdictions in diverting more waste from landfills and achieving long-term zero-waste goals. The facility has been operating since 2006, processing 1,000 tons per day of construction debris and achieving landfill diversion rates of 72%. New equipment was added in early 2019 to...',
      category: 'Case Studies',
      date: '2019-10-23',
      readTime: '4 min read',
      image: '/wp-content/uploads/2019/10/EDCO-air-unit-215x115.jpg',
      featured: false,
      link: 'https://vdrs.com/news-media/a-construction-and-demolition-facility-with-zero-waste-goals/',
      type: 'html',
      views: '1.5k',
      fullContent: `<p><img decoding="async" class="aligncenter size-full wp-image-11622" src="/wp-content/uploads/2019/10/EDCO-air-unit-700x465.jpg" alt="EDCO-air-unit" width="700" /><br />
EDCO makes updates to its Lemon Grove, CA C&amp;D facility to assist local jurisdictions in diverting more waste from landfills and achieving long-term zero-waste goals. The facility has been operating since 2006, processing 1,000 tons per day of construction debris and achieving landfill diversion rates of 72%. New equipment was added in early 2019 to help boost diversion rates to 78% by 2020, in accordance with new California state mandates.</p>
<p>The existing system and facility upgrades were supplied by Van Dyk Recycling Solutions of Norwalk, CT, and include several C&amp;D screens to sort by size and three air density separators. The three air density separators automatically sort the material into various fractions, and an optical sorter identifies and ejects wood from the stream. New equipment also includes a size reducer to grind bulky debris and prepare it for sorting, and multiple magnets to remove nails and other ferrous metals. The upgrades are projected to increase efficiency and overall diversion quality.</p>
<p>The upgrade accomplished various targets such as increasing the plant's capacity from 30 tph to 70 tph. The size reducer creates a more homogeneous material (smaller than 3 ft) that will be easier and safer to sort manually and automatically. Size reduction also liberates materials and thereby enables much easier separation downstream.</p>
<p>Size separation captures 0-3/8", 3/8-2", 2-12" and 12" and over. Only light materials larger than 12" will be sorted manually. Air density separation enables automated separation of inerts, wood, ADC and light fuel feed stock materials. Additional fine screening and air separation allow for a more effective separation of clean dirt and fines.</p>
<p>To improve cleanliness and visibility on the plant grounds, EDCO also purchased a new product from Van Dyk called BeeFoam. BeeFoam is a dust suppression system whose formula binds to materials to weigh down dust, without making particles too wet. Material (even fines) can be properly separated for almost 2 weeks after a single application. EDCO estimates a 50% reduction in onsite dust since installing BeeFoam. In addition to the BeeFoam solution, EDCO has installed a network of dust suction pickup points that recirculates air through three independent dust collection filters and captures airborne particles in enclosed bag houses with clean air exhausts.</p>`
    },
    {
      id: 14,
      title: 'Adam Lovewell Joins Van Dyk As Midwest Sales Engineer',
      excerpt: 'January 2016– Van Dyk Recycling Solutions welcomes Adam Lovewell as their new Midwest Sales Engineer. Adam has an engineering degree from Virginia Tech and he comes to Van Dyk from RRT Design and Construction. He spent 4 years at RRT as a processing engineer and project manager for multiple recycling sorting system projects.',
      category: 'Company News',
      date: '2018-03-21',
      readTime: '2 min read',
      image: '/wp-content/uploads/2016/01/30-AdamLovewell215.jpg',
      featured: false,
      link: 'https://vdrs.com/news-media/adam-lovewell-joins-van-dyk-recycling-solutions-as-midwest-sales-engineer/',
      type: 'html',
      views: '1.1k',
      fullContent: `<div><img fetchpriority="high" decoding="async" class="img-left aligncenter wp-image-851 size-full" style="padding-top: 12px; padding-bottom: 18px;" src="/wp-content/uploads/2016/01/30-AdamLovewell700.jpg" alt="Adam Lovewell Joins Van Dyk Recycling Solutions As Midwest Sales Engineer" width="700" height="319">&nbsp;</p>
<p>January 2016– Van Dyk Recycling Solutions welcomes Adam Lovewell as their new Midwest Sales Engineer. Adam has an engineering degree from Virginia Tech and he comes to Van Dyk from RRT Design and Construction. He spent 4 years at RRT as a processing engineer and project manager for multiple recycling sorting system projects.</p>
<p>Please feel free to contact Adam immediately for all of your recycling equipment needs. Adam can be reached at (312) 543-6998 or <a href="mailto:adam@vdrs.com">adam@vdrs.com</a>.</p>
<p>VAN DYK Recycling Solutions is North America's leading designer and system supplier of world-class recycling and recovery technology, and the exclusive distributor of Bollegraaf, Lubo, and TITECH machinery. They specialize in proven technology in the fields of sizing, sorting, recovery, and baling of recyclables. Their systems provide solutions for single stream, commercial waste, C&amp;D, MSW, waste-to-energy/fuel, presorted plastics, and e-waste markets. Technologies in their arsenal include high-capacity pre-press flap balers, sensor based sorters, PaperMagnets®, StarScreens®, PaperSpikes®, density separators, air systems, trommel screens, and more. Boasting 2,400 profitable plants, their turnkey service fully equips with design, installation, training, and superior, lifelong support.</p>
<p>&nbsp;</p>
</div>`
    },
    {
      id: 15,
      title: 'Alan Josephsen Co. Ends Downtime with Bollegraaf Baler',
      excerpt: 'After suffering shutdowns for many years due to a two-ram baler, Alan Josephsen Co. installed a Bollegraaf baler. Now, the the baler is always hungry for more.',
      category: 'Case Studies',
      date: '2018-03-12',
      readTime: '3 min read',
      image: '/wp-content/uploads/2013/06/21AJ-Baler215.jpg',
      featured: false,
      link: 'https://vdrs.com/news-media/alan-josephsen-co-ends-downtime-with-bollegraaf-hbc-100f-baler-installation/',
      type: 'html',
      views: '1.3k',
      fullContent: `<div>
<div style="display: none;">Alan Josephsen Co. Ends Downtime with Bollegraaf HBC 100F Baler Installation</div>
<p><img fetchpriority="high" decoding="async" class="aligncenter size-full wp-image-1225" src="/wp-content/uploads/2013/06/21AJ-Baler700.jpg" alt="21AJ Baler700" width="640" height="432" /></p>
<p>July 2014 &#8211; After suffering shut downs for many years due to an old two-ram baler, Alan Josephsen, owner of Alan Josephsen Co. Inc., finally decided to upgrade to a Bollegraaf single ram baler. After seeing a Bollegraaf HBC-120 operating in a nearby plant, he bought a fully rebuilt HBC-100F from supplier VAN DYK Recycling Solutions. The HBC-100F was refurbished at VAN DYK's new equipment facility and show room in Norwalk, CT.</p>
<p>The HBC-100F was installed on June 20, 2014 and baled 187 bales on its first shift. Josephsen says, "We were amazed with the fit and finish and the quality of construction, but the most amazing aspect was watching bale after bale come out of the business end of the baler. To say we are pleased is an understatement."</p>
<p>The baler processes all the material from Josephsen's plant (shredded included), with OCC at 18 tph and mixed fiber and high grades at 35 tph. It has drastically reduced baling time, eliminated the downtime caused by the old two ram, eliminated the need for a baler operator, and lowered electrical costs.</p>
<p>"The only problem with the HBC-100," Josephsen says, "is that it is constantly hungry for more."</p>
<p>VAN DYK Recycling Solutions is North America's leading designer and system supplier of world-class recycling and recovery technology, and the exclusive distributor of Bollegraaf, Lubo, and TOMRA machinery. They specialize in proven technology in the fields of sizing, sorting, recovery, and baling of recyclables. Their systems provide solutions for single stream, commercial waste, C&amp;D, MSW, waste-to-energy/fuel, presorted plastics, and e-waste markets. Technologies in their arsenal include high-capacity pre-press flap balers, sensor based sorters, PaperMagnets®, StarScreens®, PaperSpikes®, density separators, air systems, trommel screens, and more. Boasting 2,400 profitable plants, their turnkey service fully equips with design, installation, training, and superior, lifelong support.</p>
</div>`
    },
    {
      id: 16,
      title: 'Bollegraaf Introduces RoBB–the World\'s First Automated QC Sorter',
      excerpt: 'Introducing RoBB – Robotics by Bollegraaf. This fully automated robot is able to pick multiple kinds of plastics, such as PET, PE, and PS, as well as paper and OCC. It delivers high levels of purity and separation quality during the final stages of quality control, resulting in a significantly higher value of output.',
      category: 'Product Updates',
      date: '2018-02-26',
      readTime: '2 min read',
      image: '/wp-content/uploads/2013/10/4RoBB-s.jpg',
      featured: false,
      link: 'https://vdrs.com/news-media/bollegraaf-introduces-robb-the-worlds-first-automated-qc-sorter/',
      type: 'html',
      views: '1.4k',
      fullContent: `<p>Introducing RoBB – Robotics by Bollegraaf.</p>
<p><img fetchpriority="high" decoding="async" class="alignnone size-full wp-image-903 aligncenter" src="/wp-content/uploads/2014/04/4RoBB-H.jpg" alt="RoBB" width="700" height="437" /></p>
<p>This fully automated robot is able to pick multiple kinds of plastics, such as PET, PE, and PS, as well as paper and OCC. It delivers high levels of purity and separation quality during the final stages of quality control, resulting in a significantly higher value of output.</p>
<p>RoBB's new, laser-guided system detects the height of waste products. Together, the NIR (near-infrared) and height cameras enable precision sorting of recyclables by both material recognition and 3D detection. Achieve higher rates of purity and better separation quality than ever before.</p>
<p>VAN DYK Recycling Solutions is North America's leading designer and system supplier of world-class recycling and recovery technology, and the exclusive distributor of Bollegraaf, Lubo, and TOMRA machinery. They specialize in proven technology in the fields of sizing, sorting, recovery, and baling of recyclables. Their systems provide solutions for single stream, commercial waste, C&amp;D, MSW, waste-to-energy/fuel, presorted plastics, and e-waste markets. Technologies in their arsenal include high-capacity pre-press flap balers, sensor based sorters, PaperMagnets®, StarScreens®, PaperSpikes®, density separators, air systems, trommel screens, and more. Boasting 2,400 profitable plants, their turnkey service fully equips with design, installation, training, and superior, lifelong support.</p>`
    },
    {
      id: 17,
      title: 'Bollegraaf Single Stream System Started Up at City Carting',
      excerpt: 'City Carting & Recycling, Stamford, CT, installed a 25-30 tph Bollegraaf single stream system. It sorts PET, PP & PE automatically. Residue rates are under 5%.',
      category: 'Case Studies',
      date: '2018-03-08',
      readTime: '3 min read',
      image: '/wp-content/uploads/2013/06/15CityCartingMar14-s.jpg',
      featured: false,
      link: 'https://vdrs.com/news-media/bollegraaf-single-stream-system-started-up-at-city-carting/',
      type: 'html',
      views: '1.3k',
      fullContent: `<div>
<h2 style="color: #184d8f;">After careful research, Stamford based City Carting bought a Bollegraaf single stream system from VAN DYK Recycling Solutions. The state-of-the-art system is engineered with the latest technology by Bollegraaf.</h2>
<p><img fetchpriority="high" decoding="async" class="aligncenter size-full wp-image-851" style="padding-top: 12px; padding-bottom: 18px;" src="/wp-content/uploads/2014/04/15CityCartingH.jpg" alt="Bollegraaf Single Stream System Started Up at City Carting" width="700" height="319" /></p>
<p>March 2014 &#8211; City Carting and Recycling of Stamford, CT started up their Bollegraaf single stream system at the end of February, 2014. This 25-30 tph Bollegraaf system, supplied by VAN DYK Recycling Solutions, operates with just sixteen manual sorters. The 14,000 square foot tipping floor has ample room for residential single stream loads and commercial material. The system incorporates Lubo StarScreens® and four TOMRA AUTOSORT 4s, TOMRA's newest autosort model, which features the latest FLYING BEAM® technology, faster valves, and no external lamps. It also includes a Lubo glass clean up system and a Bollegraaf HBC 120S baler. PET, PP, and PE are all automatically sorted. Residue rates are under five percent.</p>
<p>Joe Fiorello, owner of City Carting, said of his new system, &#8220;The craftsmanship and quality of the equipment was beyond my expectations. It was operational on day one and performed to the manufacturer's promise.&#8221;</p>
<p>VAN DYK Recycling Solutions is North America's leading designer and system supplier of world-class recycling and recovery technology, and the exclusive distributor of Bollegraaf, Lubo, and TOMRA machinery. They specialize in proven technology in the fields of sizing, sorting, recovery, and baling of recyclables. Their systems provide solutions for single stream, commercial waste, C&amp;D, MSW, waste-to-energy/fuel, presorted plastics, and e-waste markets. Technologies in their arsenal include high-capacity pre-press flap balers, sensor based sorters, PaperMagnets®, StarScreens®, PaperSpikes®, density separators, air systems, trommel screens, and more. Boasting 2,400 profitable plants, their turnkey service fully equips with design, installation, training, and superior, lifelong support.</p>
<p>&nbsp;</p>
</div>`
    },
    {
      id: 18,
      title: 'BURRTEC Expands Fontana MRF and Transfer Station with Lubo\'s C&D Line',
      excerpt: 'October 2015 – BURRTEC, a large private waste hauler and recycler in Los Angeles, Riverside, and Orange County, will soon be installing additional processing equipment to better serve their customers. The new sorting line will be equipped to handle construction and dry commercial waste loads...',
      category: 'Case Studies',
      date: '2018-03-22',
      readTime: '2 min read',
      image: '/wp-content/uploads/2015/11/29Lubo-AWS-StarScreen215.jpg',
      featured: false,
      link: 'https://vdrs.com/news-media/burrtec-expands-fontana-material-recovery-facility-and-transfer-station-with-lubo-cd-processing-line/',
      type: 'html',
      views: '1.2k',
      fullContent: `<div><img fetchpriority="high" decoding="async" class="wp-image-1210 size-full aligncenter" src="/wp-content/uploads/2015/11/29Lubo-AWS-StarScreen700.jpg" alt="BURRTEC Expands Fontana Material Recovery Facility and Transfer Station with Lubo C&amp;D Processing Line" width="700" height="438"></div>
<p>October 2015 – BURRTEC, a large private waste hauler and recycler in Los Angeles, Riverside, and Orange County, will soon be installing additional processing equipment to better serve their customers. The new sorting line will be equipped to handle construction and dry commercial waste loads, and can also be used to clean up source segregated organics before composting. The line will be capable of processing 20-30 tph and includes the latest AWS screening technology from VAN DYK Recycling Solutions and Lubo. Lubo's patented AWS screen enables effective screening of challenging loads without the typical wrapping and maintenance of conventional screening alternatives. Multiple AWS screens have been installed and have proven to be an affordable alternative to more expensive trommels and slower shaking screens.</p>
<div>
<p>VAN DYK Recycling Solutions is North America's leading designer and system supplier of world-class recycling and recovery technology, and the exclusive distributor of Bollegraaf, Lubo, and TOMRA machinery. They specialize in proven technology in the fields of sizing, sorting, recovery, and baling of recyclables. Their systems provide solutions for single stream, commercial waste, C&amp;D, MSW, waste-to-energy/fuel, presorted plastics, and e-waste markets. Technologies in their arsenal include high-capacity pre-press flap balers, sensor based sorters, PaperMagnets®, StarScreens®, PaperSpikes®, density separators, air systems, trommel screens, and more. Boasting 2,400 profitable plants, their turnkey service fully equips with design, installation, training, and superior, lifelong support.</p>
<p>&nbsp;</p>
</div>`
    },
    {
      id: 19,
      title: 'Canada Fibers MRF Uses Bollegraaf Equipment from VAN DYK',
      excerpt: 'Canada Fibers\' single stream MRF, largest in North America, is projected to process 350,000 tonnes per year with an industry-leading recovery rate of 95 percent.',
      category: 'Case Studies',
      date: '2018-03-10',
      readTime: '5 min read',
      image: '/wp-content/uploads/2013/06/17CFL-s.jpg',
      featured: true,
      link: 'https://vdrs.com/news-media/canada-fibers-mrf-largest-in-north-america-uses-bollegraaf-equipment-from-van-dyk/',
      type: 'html',
      views: '2.1k',
      trending: true,
      fullContent: `<div><img fetchpriority="high" decoding="async" class="aligncenter size-full wp-image-938" style="padding-top: 12px; padding-bottom: 18px; float: none;" src="/wp-content/uploads/2014/05/17CFL-H.jpg" alt="Canada Fibers MRF, largest in North America, uses Bollegraaf equipment from VAN DYK" width="700" height="487" />APRIL/MAY 2014 – When Canada Fibers built North America&#8217;s largest and most technologically advanced single-stream material recovery facility (MRF) in Toronto, Ontario, it used Bollegraaf equipment supplied by Van Dyk Recycling Solutions. The plant owners say the new facility has the highest recovery rate in the industry, and is projected to process 350,000 tonnes per year. The goal is nothing less than a 95 per cent recovery rate of all commodities.With double input lines, bag breaking technology, and multiple StarScreens® with unique new screening technology, Canada Fibers strives for high throughput and the highest possible recovery and purity of output, while reducing operational costs. Specialized sorting equipment including ten TOMRA optical sorting units, 22 vacuum hoods (for the high film content in Toronto&#8217;s material), a Lubo PaperMagnet®, two PaperSpikes® (to sort OCC and boxboard), and glass breaker screens.&nbsp;</p>
<p>The facility&#8217;s throughput has been measured as high as 60 tonnes per hour, with TOMRA recovery units at the end of the system making sure that all commodities are recovered.</p>
<p>At the end of the system a Bollegraaf HBC 140F baler bales the paper grades, and a Bollegraaf HBC 120 compacts all containers into homogenous bales. Their pre-press flap, no-shear design allows less loading cycles and distributes the material evenly, resulting in denser bales.</p>
<div class="row">
<div class="col-md-6">
<div class="col-wrapper"><img decoding="async" class="size-full wp-image-941 img-responsive" style="padding: 0;" src="/wp-content/uploads/2014/05/17-T-autosort4.jpg" alt="TOMRA autosort 4" width="400" /></div>
</div>
</div>`
    },
    {
      id: 20,
      title: 'City Carting Buys Bollegraaf Single Stream System',
      excerpt: '25-tph system includes Lubo screens, large hoods for film removal, 4 TOMRA autosort 4 optical sorters, a glass clean up system & a Bollegraaf HCB 120 baler.',
      category: 'Case Studies',
      date: '2018-03-03',
      readTime: '2 min read',
      image: '/wp-content/uploads/2013/10/10CityCarting-s.jpg',
      featured: false,
      link: 'https://vdrs.com/news-media/city-carting-buys-bollegraaf-single-stream-system/',
      type: 'html',
      views: '1.2k',
      fullContent: `<div>
<h2 class="h2_org" style="color: #184d8f;">After careful research, Stamford based City Carting bought a Bollegraaf single stream system from VAN DYK Recycling Solutions. The state-of-the-art system is engineered with the latest technology by Bollegraaf.</h2>
<p><img fetchpriority="high" decoding="async" class="aligncenter size-full wp-image-870" style="padding-top: 12px; padding-bottom: 18px;" src="/wp-content/uploads/2014/04/10City-CartingH.jpg" alt="Single stream system City Carting VAN DYK Recycling Solutions" width="700" height="467" /></p>
<p>September 2013 – It will include Lubo renowned screening technology, large hoods for removal of film, four TOMRA AUTOSORT 4 optical sorters (TOMRA&#8217;s newest model), a glass clean up system, and a Bollegraaf HCB 120 baler. It currently runs at 25 tons per hour.</p>
<p>The system is also prepared to sort SOP out of commercial loads in the future. Installation of the system in a brand new facility will begin in the fall of 2013. The system will start up in the beginning of 2014.</p>
<p>VAN DYK Recycling Solutions is North America's leading designer and system supplier of world-class recycling and recovery technology, and the exclusive distributor of Bollegraaf, Lubo, and TOMRA machinery. We specialize in proven technology in the fields of sizing, sorting, recovery, and baling of recyclables. Our systems provide solutions for single stream, commercial waste, C&amp;D, MSW, waste-to-energy/fuel, presorted plastics, and e-waste markets. Technologies in our arsenal include high-capacity pre-press flap balers, sensor based sorters, PaperMagnets®, StarScreens®, PaperSpikes®, density separators, air systems, trommel screens, and more. Boasting 2,400 profitable plants, our turnkey service fully equips with design, installation, training, and superior, lifelong support.</p>
<p>&nbsp;</p>
</div>`
    },
    {
      id: 21,
      title: 'City Carting of Stamford Plans Retrofit to Stay Competitive',
      excerpt: 'November 2017 – City Carting has two retrofit projects in the works with CT based Van Dyk Recycling Solutions. The projects are meant to make the facility adaptable andcompetitive in today\'s ever-changing market.',
      category: 'Case Studies',
      date: '2018-03-27',
      readTime: '4 min read',
      image: '/wp-content/uploads/2018/03/Signature_logo_wt_bg215x115-b.png',
      featured: false,
      link: 'https://vdrs.com/news-media/city-carting-stamford-plans-retrofit-stay-competitive/',
      type: 'html',
      views: '1.4k',
      fullContent: `<p>November 2017 – City Carting has two retrofit projects in the works with CT based Van Dyk Recycling Solutions. The projects are meant to make the facility adaptable andcompetitive in today's ever-changing market. One aims at cleaning up their glass to make their product more sellable and the other is on paper, which will update their screens to make operations easier and produce a higher quality paper.</p>
<p>They are installing a new glass clean up system that aims to produce clean, sellable glass with less than 5% non-glass residue. Glass contamination is a huge issue among single stream MRF owners. Many different solutions have been tried and failed. Designing a solution that is high performing and consistent has been the challenge, but VAN DYK seems to have risen to the task. City Carting will be the fourth plant in North America to adopt this system (the first three being Greenworks, City of Guelph, and Canada Fibers Ltd.). The key to the system's success is that the separation (removal of non-glass residue contaminants) is not affected by moisture. Soaking wet material can be removed as easily as dry material. NGR levels can easily reach numbers lower than 5%. The system removes unwanted fine glass and can even recover lost recyclables such as small fiber. This simple operation is easy to retrofit into existing systems, and return on investment can be less than one year. City Carting's GCU system is expected to be completed in January, 2018.</p>
<p>City Carting's second retrofit involves VAN DYK's new anti-wrapping screen technology. They are replacing two ONP screens with two new Non-Wrapping 440 screens. The 440 screen aims to eliminate film wrapping, allowing the screen to maintain its performance in sorting other materials. This results in a higher quality container stream and, as City Carting requires most, a much cleaner paper grade. With tighter quality specs expected of China's National Sword in 2018, this upgrade will help City Carting produce quality paper without having to reduce throughput. The 440 screen can also reduce cleaning and maintenance time by 90%. Current customers report cleaning times as short as ten minutes per shift. The 440 screens are also easily retrofitted into existing systems. City Carting's screens are expected to be installed by February, 2018.</p>
<p>For more information on these installations, contact VAN DYK at 203-967-1100 or <a href="mailto:info@vdrs.com">info@vdrs.com</a>.</p>`
    },
    {
      id: 22,
      title: 'City of Phoenix Reimagines Recycling Plant to Reach Diversion Goals',
      excerpt: 'Like many cities, Phoenix, AZ and its surrounding communities were hit hard by China\'s 2018 ban on many previously recycled goods. With an aging system at its North Gateway Material Recovery Facility (MRF), the city set out to improve its plant\'s technology with a retrofit project...',
      category: 'Case Studies',
      date: '2020-10-30',
      readTime: '5 min read',
      image: '/wp-content/uploads/2018/03/Signature_logo_wt_bg215x115-b.png',
      featured: false,
      link: 'https://vdrs.com/news-media/city-of-phoenix-reimagines-recycling-plant-to-reach-diversion-goals/',
      type: 'html',
      views: '1.6k',
      fullContent: `<p>Like many cities, Phoenix, AZ and its surrounding communities were hit hard by China's 2018 ban on many previously recycled goods. With an aging system at its North Gateway Material Recovery Facility (MRF), the city set out to improve its plant's technology with a retrofit project to better handle the changing material stream and improve the quality of its recycled materials.</p>
<p>With a goal to achieve a 40% waste diversion rate by the end of 2020, and become a zero-waste city by 2050, Phoenix believed that a retrofit project for its MRF was one of the essential components needed to reach these diversion goals. It's the kind of investment that would increase the recovery rate of valuable, quality recyclable materials, and create a more efficient sorting system.</p>
<p>The North Gateway MRF, operated by Republic Services, was seeing problems with its traditional screening package. Its ONP screens were prone to getting wrapped up with stringy materials (namely plastic film bags, which have become a bane to sorting facilities nation-wide). Such materials wind their way around these screen shafts until the entire function of the screen is compromised. Containers that are supposed to bounce backward off the screen end up riding over it along with the fiber material they are meant to be separated from.</p>
<p>To combat this issue, the city and Republic took the initiative to upgrade the facility and replaced three of these old-styled ONP screens with two newer Non-Wrapping ONP screens. The non-wrapping screens have specially designed stars and shafts that do not allow problematic materials to wrap around them. As a result, separation performance stays high over many shifts and the plant does not waste production time stopping the screens and hand-cutting the contamination like film, rope and other wrappables from the shafts.</p>
<p>With the overs of the ONP screens being primarily 2D materials of mid to larger sized ONP, OCC, Mix and some Film, head count was reduced with a much improved fiber quality. To better process the remaining 3D stream of containers and smaller paper fraction, the site added an extra wide TOMRA optical sorter to detect and positively eject the good SOP and mixed paper fraction out of this stream. Sorting out paper in a positive sort, assures only high quality fiber to be recovered and to unload the burden to the ballistic separator for effective 3D container cleanup.</p>
<p>The facility also replaced a polishing screen with a new elliptical screen (or ballistic separator). Paddles rotating in an elliptical motion scalp off the last bit of 2D film, textiles and dirty fiber from the container stream. Because of its unique design, the elliptical screen is very low maintenance. It also is wrap-resistant and does not require frequent replacement of wear parts.</p>
<p>A second extra wide optical sorter was added to effectively recover the increased PET volume prior to the existing container line—it is much more efficient and was able to recover double the amount of PET compared to the older model it replaced.</p>
<p>All screens and optical sorters were supplied by Van Dyk Recycling Solutions of Norwalk, CT and are manufactured by screening specialists Lubo Systems and TOMRA Sorting Solutions, worldwide leader in optical sorting.</p>
<p>Rick Peters, Phoenix Public Works deputy director over the Diversion and Disposal Division, was more than satisfied with the results, "Not only is the expansion living up to our expectations, but the timeframe in which it was completed was remarkably quick. Working closely with Republic and VDRS enabled us to upgrade the facility with less than 3 months of downtime and all was operational just ahead of the Christmas season. Republic's and Van Dyk's team, designed, constructed and installed all in less than 9 months".</p>
<p>In all, the system improvements enabled a processing of more material with fewer hand-sorters, improving recovery of fiber and containers. System throughput has increased from 18-20 tons/hour to 28-30 tons/hour, allowing the operating hours to go down to a single shift and opening the possibility of trucking in loads from other Phoenix locations.</p>`
    },
    {
      id: 23,
      title: 'Covid-19 Safety Measures Inspire New Approach to Customer Service for MRF Operators',
      excerpt: 'Van Dyk Recycling Solutions has accelerated the rollout of a new product to help their customers get faster, safer, and more effective service assistance during the Covid-19 crisis. Called Van Dyk Vision-ARTM (the AR stands for augmented reality), the device is a communication headset...',
      category: 'Technology',
      date: '2020-10-30',
      readTime: '4 min read',
      image: '/wp-content/uploads/2020/10/4-Van-Dyk-Vision-215.jpg',
      featured: true,
      link: 'https://vdrs.com/news-media/covid-19-safety-measures-inspire-new-approach-to-customer-service-for-mrf-operators/',
      type: 'html',
      views: '2.2k',
      trending: true,
      fullContent: `<p><img fetchpriority="high" decoding="async" class="primg aligncenter wp-image-13284 size-full" src="/wp-content/uploads/2020/10/4-Van-Dyk-Vision-700.jpg" alt="Covid-19 Safety Measures Inspire New Approach to Customer Service for MRF Operators" width="700" height="394" /></p>
<p>Van Dyk Recycling Solutions has <a href="/support">accelerated the rollout of a new product</a> to help their customers get faster, safer, and more effective service assistance during the Covid-19 crisis. Called Van Dyk Vision-AR<sup>TM</sup> (the AR stands for augmented reality), the device is a communication headset that allows the customer to receive guidance from the Van Dyk service desk like never before.</p>
<p>While wearing the headset, the customer has the ability to call the Van Dyk service desk and speak to an expert technician. The headset is equipped with a small camera and a flashlight, which highlights what the customer is looking at and records their field of vision. The camera streams this footage to a computer at the Van Dyk desk in real time, so an expert technician can see exactly what the customer sees. This "I see what you see" approach is a game-changer in MRF troubleshooting. Van Dyk Vision-AR<sup>TM </sup>conversations get to a diagnosis quickly and without confusion.</p>
<p>In addition to seeing the customer's field of vision, the Van Dyk technician can use augmented reality technology to give the customer clear directives for problem solving. The Van Dyk technician can superimpose arrows, circles, and other digital elements onto the customer's display pod (a small computer positioned in front of the wearer's eye, which appears as a 7-inch tablet screen). The computer screen alternates between a desktop display and the camera stream. When digital elements are superimposed over the camera stream, the customer can clearly understand where to go and what to do to fix issues from the most simple and common to the more complex.</p>
<p>&#8220;At Van Dyk, our customer support efforts are conducted primarily over the phone,&#8221; says Christopher Bova, Director of Operations. &#8220;With Van Dyk Vision-AR<sup>TM</sup>, we can leverage that experience by now working more directly with the customer, seeing exactly what they're seeing, when they're seeing it. This will allow us to pinpoint their issue and guide them toward a quicker resolution.&#8221;</p>
<p>With Van Dyk Vision-AR<sup>TM</sup>, customers receive technical assistance equal to that of a scheduled, in-person service visit. In fact, it's better. An expert technician can be at your plant instantly, expense-free. It also increases safety in several ways. Van Dyk Vision-AR<sup>TM</sup> is 100% hands free, allowing your mechanic full dexterity to handle heavy machinery. It comes with noise canceling headphones, which block out loud MRF noise and allow your mechanic to clearly hear directions. And, it allows MRFs to uphold their much needed social-distancing protocols during the Covid-19 crisis.</p>
<p>Van Dyk Vision-AR<sup>TM</sup> is not just for trouble-shooting issues. Van Dyk can conduct new employee training, new machinery training, and preventive maintenance refreshers using the technology. Van Dyk can also upload helpful information like equipment manuals and schematics to the user's display pod, so on-site mechanics can refer to them while working on that machine and for future reference.</p>
<p>As coronavirus-related safety measures are likely to continue for the foreseeable future, reducing person-to-person contact is critical. Technology such as Van Dyk Vision-AR<sup>TM</sup> will be the new face of communication between operator and supplier.</p>`
    },
    {
      id: 24,
      title: 'Diversified Recycling Adds Six New Screens From VAN DYK',
      excerpt: 'October 2017 – Diversified Recycling of Homewood, IL is set to upgrade their traditional paper screens with four new Non-Wrapping 440 screens from VAN DYK Recycling Solutions. The 440 screen is VAN DYK\'s latest offering to drastically reduce film wrapping in starscreens.',
      category: 'Case Studies',
      date: '2018-03-26',
      readTime: '2 min read',
      image: '/wp-content/uploads/2018/03/Diversified_screen215.jpg',
      featured: false,
      link: 'https://vdrs.com/news-media/diversified-recycling-adds-six-new-screens-van-dyk/',
      type: 'html',
      views: '1.2k',
      fullContent: `<p><img fetchpriority="high" decoding="async" class="aligncenter size-full wp-image-5145" style="padding-top: 12px; padding-bottom: 18px;" src="/wp-content/uploads/2018/03/Diversified_screen700.jpg" alt="Diversified Recycling - screens from Van Dyk" width="700" height="375" /></p>
<p>October 2017 – Diversified Recycling of Homewood, IL is set to upgrade their traditional&nbsp;paper screens with four new Non-Wrapping 440 screens from VAN DYK Recycling&nbsp;Solutions. The 440 screen is VAN DYK's latest offering to drastically reduce film&nbsp;wrapping in starscreens.&nbsp;</p>
<p>Diversified takes in about 2% film in their stream. Even with a presort station that removes film there is still significant wrapping occurring around their screens. When a&nbsp;screen incurs wrapping, it loses its ability to sort properly. Materials are unable to fall&nbsp;through and are "conveyed" over the screen. The Non-Wrapping 440 screen maintains&nbsp;its screening performance throughout an entire shift, reducing containers in the overs&nbsp;by up to 80% and resulting in higher quality paper and container streams heading to the&nbsp;commingled line.&nbsp;</p>
<p>Diversified also hopes the new 440 screens will cut down on maintenance and cleaning&nbsp;efforts. Other installations with the 440 screens have reported cleaning and&nbsp;maintenance times per shift plummeting from over an hour per shift to a mere ten&nbsp;minutes.&nbsp;</p>
<p>They are also replacing their commingled screens with two of VAN DYK's elliptical&nbsp;separators. With fewer wearable parts, the elliptical will bring down their costs&nbsp;associated with replacement parts. At 3.3 meters (nearly 11 feet) wide, the elliptical&nbsp;screens will be the widest ever installed in the U.S.&nbsp;</p>
<p>For more information on this installation and its components, contact VAN DYK at 203-967-1100 or <a href="mailto:info@vdrs.com">info@vdrs.com</a>.</p>`
    },
    {
      id: 25,
      title: 'Equipment Containers Arrive for VAN DYK Test Facility',
      excerpt: 'December 2017 – Equipment is arriving for Van Dyk\'s new test facility located in their Norwalk, CT campus. The site is currently home to their extensive spare parts warehouse (which holds over 13,000 different parts) and baler rebuild center...',
      category: 'Company News',
      date: '2018-03-28',
      readTime: '3 min read',
      image: '/wp-content/uploads/2018/03/Signature_logo_wt_bg215x115-b.png',
      featured: false,
      link: 'https://vdrs.com/news-media/equipment-containers-arrive-van-dyk-test-facility/',
      type: 'html',
      views: '1.3k',
      fullContent: `<p>December 2017 – Equipment is arriving for Van Dyk's new test facility located in their&nbsp;Norwalk, CT campus. The site is currently home to their extensive spare parts&nbsp;warehouse (which holds over 13,000 different parts) and baler rebuild center (which&nbsp;fully reconditions balers for resale), and is their future headquarters intended to house their main offices and training classrooms.&nbsp;The test facility will feature world-class equipment from TOMRA, Lubo, and Spaleck.&nbsp;The equipment will be installed in loop configurations that send material around in an&nbsp;infinite run. Customers can test their own material, recalibrating the machines until&nbsp;they achieve the desired result.&nbsp;</p>
<p>Four types of TOMRA optical sorters will be installed:</p>
<ul>
<li>Autosort: uses NIR (near infrared) spectrum to detect and eject materials.&nbsp;Common unit found in recycling plants.</li>
<li>Laser: a new development out of TOMRA to be released in North America in&nbsp;2018. Applications include glass and black plastics sorting.</li>
<li>Finder: NIR technology with ultra-precise metal detection. Applications include&nbsp;e-scrap, ash recycling, and wood.</li>
<li>X-tract: Specialized piece of equipment that uses X-ray transmission (XRT) for&nbsp;sorting in unique scenarios. Popular in organics, e-scrap, mining, and ash&nbsp;recycling.</li>
</ul>
<p>In addition to these, the facility will include a Spaleck Combi screen and a Lubo Elliptical&nbsp;for additional screening of materials.&nbsp;</p>
<p>Says Mark Neitzey, Van Dyk Director of Sales, "This test facility is going to be an asset to&nbsp;our current and future customers. For customers unsure of the technology, we invite&nbsp;them to test and see how our equipment sorts their material. It's one thing to see someone else's MRF running, but it's another to see your own material being sorted.&nbsp;We also see this facility as an opportunity to branch into new industries where optical&nbsp;sorting isn't as widespread and companies are willing to experiment with these&nbsp;technologies. Needless to say, we are excited to offer this tool to our customers very&nbsp;soon."</p>`
    },
    {
      id: 26,
      title: 'FCC Revitalizes Houston Neighborhood as It Cleans Up Contaminated Stream',
      excerpt: 'Running since March 2019, FCC Environmental Services has opened up a new single stream plant in Houston, TX. The plant will accept residential single stream material from throughout Houston for a minimum of 15 years.',
      category: 'Case Studies',
      date: '2019-10-23',
      readTime: '3 min read',
      image: '/wp-content/uploads/2019/10/Houston-215x115.jpg',
      featured: false,
      link: 'https://vdrs.com/news-media/fcc-revitalizes-houston-neighborhood-as-it-cleans-up-contaminated-stream/',
      type: 'html',
      views: '1.5k',
      fullContent: `<p><img decoding="async" class="aligncenter size-full wp-image-11628 primg" src="/wp-content/uploads/2019/10/Houston-700x465.jpg" alt="FCC Environmental Services Houston Single Stream" width="700" /></p>
<p>Running since March 2019, FCC Environmental Services has opened up a new single stream plant in Houston, TX. The plant will accept residential single stream material from throughout Houston for a minimum of 15 years. FCC has also made the city the new home of their U.S. corporate headquarters, settling into the East Houston community. The district has embraced the recycling facility as a welcome investment in an underdeveloped part of town. FCC has employed many local citizens at the site, including some from a second-chance labor provider, to really make themselves part of the local landscape.</p>
<p>FCC won the bid in 2018 for the City of Houston after besting several proposals from competing companies. FCC&#8217;s contract saves taxpayers millions of dollars in recycling costs by coming to an agreement that ensures the city will never have to pay FCC processing costs in excess of the cost per ton of landfill disposal, even if market value of recyclables dips. FCC will also split profits with the city 50/50. The deal also expands the types of materials accepted by reinstating glass into the program after a three-year suspension on the material under the city's previous contract. Residents can throw glass into their collection bins once again, and with a state-of-the-art glass cleanup system, FCC is able to make recycled glass clean and sellable to two local glass end markets.</p>
<p>FCC purchased their 35 tph system (including the glass cleanup system) from supplier Van Dyk Recycling Solutions, of Norwalk, CT. The system uses a combination of non-wrapping screens and 5 optical sorters to separate residential news and fiber, OCC, PET, HDPE natural, HDPE color, PP, aluminum UBC, ferrous cans, and mixed rigid plastics. All materials are baled in a Bollegraaf HBC-120S baler. The system has a 145,000 ton/year capacity, which is more than double the city's current needs.</p>
<p>FCC had previously worked with Van Dyk on a 2016 single stream system for the city of Dallas. That system won the NWRA's Recycling Facility of the Year Award in 2017. Houston's system is a similar concept, with some added technology such as an extra optical sorter for removing containers, trash and film from the fiber stream, and an automatic film recovery system consisting of a suction hood integrated into the TOMRA material separation housing. Houston also adds an elliptical (ballistic) separator as a final clean up device to properly prepare the container stream for the optical sorters.</p>`
    },
    {
      id: 27,
      title: 'Five Bollegraaf HBC 120S balers sold by VAN DYK Recycling Solutions',
      excerpt: 'Four customers recently bought five new Bollegraaf HBC 120S balers from VAN DYK Recycling Solutions for new installations or upgrades.',
      category: 'Product Updates',
      date: '2018-03-07',
      readTime: '2 min read',
      image: '/wp-content/uploads/2013/06/14HBC-120S-Baler-s.jpg',
      featured: false,
      link: 'https://vdrs.com/news-media/five-bollegraaf-hbc-120s-balers-sold-by-van-dyk-recycling-solutions/',
      type: 'html',
      views: '1.2k',
      fullContent: `<div>
<h2 class="h2_org" style="color: #184d8f;">VAN DYK Recycling Solutions of Stamford, CT has recently sold five Bollegraaf HBC 120S balers to four different companies.</h2>
<p><img fetchpriority="high" decoding="async" class="aligncenter size-full wp-image-854" style="padding-top: 12px; padding-bottom: 18px;" src="/wp-content/uploads/2014/04/14HBC-120S-BalerH.jpg" alt="Bollegraaf HBC 120S Baler" width="700" height="422" /></p>
<p>ReCommunity purchased two HBC 120s, one each for two of their locations. One baler is already operating in ReCommunity's Wilmington, DE plant. The other will be installed in their new plant in San Antonio. Additionally, North Star Pulp &amp; Paper bought an HBC 120S for their Springfield, MA plant. Waste Management Monroe County of Rochester, NY purchased an HBC 120S to replace their HBC 110 baler, which has baled all their paper grades since 1990. On the west coast, Angelus Western of Los Angeles, CA bought an HBC 120S to replace a Bollegraaf HBC 100 baler.</p>
<p>VAN DYK Recycling Solutions is North America's leading designer and system supplier of world-class recycling and recovery technology, and the exclusive distributor of Bollegraaf, Lubo, and TOMRA machinery. They specialize in proven technology in the fields of sizing, sorting, recovery, and baling of recyclables. Their systems provide solutions for single stream, commercial waste, C&amp;D, MSW, waste-to-energy/fuel, presorted plastics, and e-waste markets. Technologies in their arsenal include high-capacity pre-press flap balers, sensor based sorters, PaperMagnets®, StarScreens®, PaperSpikes®, density separators, air systems, trommel screens, and more. Boasting 2,400 profitable plants, their turnkey service fully equips with design, installation, training, and superior, lifelong support.</p>
<p>&nbsp;</p>
</div>`
    },
    {
      id: 28,
      title: 'Fulcrum BioEnergy – A First in Turning Trash Into Fuel',
      excerpt: 'Van Dyk Recycling Solutions is pleased to announce that it has completed the installation of waste processing equipment and systems for Fulcrum BioEnergy, which will support the company\'s innovative process which takes a bottomless resource – household garbage – and turns it into low-carbon transportation fuels such as jet fuel and diesel.',
      category: 'Innovation',
      date: '2020-10-29',
      readTime: '2 min read',
      image: '/wp-content/uploads/2020/10/1-Fulcrum-215.jpg',
      featured: false,
      link: 'https://vdrs.com/news-media/fulcrum-bioenergy-a-first-in-turning-trash-into-fuel/',
      type: 'html',
      views: '1.4k',
      fullContent: `<p><img fetchpriority="high" decoding="async" class="primg aligncenter wp-image-13267 size-full" src="/wp-content/uploads/2020/10/1-Fulcrum-700.jpg" alt="Fulcrum Bioenergy" width="700" height="462" /></p>
<p>Van Dyk Recycling Solutions is pleased to announce that it has completed the installation of waste processing equipment and systems for Fulcrum BioEnergy, which will support the company's innovative process which takes a bottomless resource – household garbage – and turns it into low-carbon transportation fuels such as jet fuel and diesel. Construction is nearing completion of Fulcrum's Sierra BioFuels Plant located outside of Reno, Nevada, the nation's first commercial-scale plant of its kind, which includes a Feedstock Processing Facility and a Biorefinery.</p>
<p>Fulcrum's Feedstock Processing Facility is conveniently located adjacent to the Lockwood Landfill where it accepts municipal solid waste (MSW), or household garbage, from which it separates and recovers the organic material from the waste. &nbsp;The processing facility creates a feedstock that will be trucked to Fulcrum's Biorefinery where it will undergo Fulcrum's process of gasification and conversion into liquid fuel. The Biorefinery will convert approximately 175,000 tons of MSW into 10.5 million gallons of fuel each year.</p>
<p>The Fulcrum Feedstock Processing Facility has been in operation for 16 months and recently completed a facility expansion utilizing equipment and systems provided by Van Dyk Recycling Solutions to increase capacity, improve system efficiency, yield and recovered feedstock.</p>`
    },
    {
      id: 29,
      title: 'Greyparrot and Van Dyk Partner to Revolutionize U.S. Waste Sorting and Processing with AI',
      excerpt: 'Bollegraaf\'s exclusive distributor in the U.S. will deploy AI waste analytics from Greyparrot Analyzers LAS VEGAS, May 2, 2024 — Greyparrot, the global leader in AI waste analytics, is proud to announce an exclusive partnership with Van Dyk Recycling Solutions...',
      category: 'Partnerships',
      date: '2024-05-28',
      readTime: '5 min read',
      image: '/wp-content/uploads/2024/05/van-dyk-recycling-solutions-greyparrot-ai-Press-image-tn.jpg',
      featured: true,
      link: 'https://vdrs.com/news-media/greyparrot-and-van-dyk-partner-to-revolutionize-u-s-waste-sorting-and-processing-with-ai/',
      type: 'html',
      views: '2.5k',
      trending: true,
      fullContent: `<h3 style="text-align: center; font-size: 170%;">Bollegraaf&#8217;s exclusive distributor in the U.S. will deploy AI waste analytics from Greyparrot Analyzers</h3>
<p><img fetchpriority="high" decoding="async" class="primg aligncenter wp-image-15235 size-full" src="/wp-content/uploads/2024/05/van-dyk-recycling-solutions-greyparrot-ai-Press-image-450h.jpg" alt="van dyk recycling solutions greyparrot ai Press image" width="305" height="450" /></p>
<div style="float: right; margin-left: 15px;"></div>
<p>LAS VEGAS, May 2, 2024 — Greyparrot, the global leader in AI waste analytics, is proud to announce an exclusive partnership with Van Dyk Recycling Solutions, North America&#8217;s leading provider of recycling and waste sorting systems, ahead of WasteExpo 2024 next week. The strategic alliance has been formalized on the heels of Greyparrot and Bollegraaf making worldwide news in February by announcing the industry's largest planned rollout of AI into global recycling plants.</p>
<p>Van Dyk, which services over 50% of the U.S. waste management market, will serve as the sole distributor of the Greyparrot Analyzer across all 50 states, leveraging its longstanding relationship with Bollegraaf and expertise in municipal and single-stream recycling across the country. With Van Dyk leading the North American recycling market in serving over 340 MRFs, and having installed 2,400 installations to date, it is well-positioned to provide the physical recycling infrastructure, while Greyparrot's proven ability to embed AI waste analytics into software and hardware systems adds the essential digital layer.</p>
<p>Together, the companies plan to retrofit large Materials Recovery Facilities (MRFs) across the U.S. with advanced AI sorting capabilities to significantly boost recycling rates, maximize material purity, and digitally quantify emissions.</p>
<p>&#8220;We&#8217;re excited to partner with Van Dyk as the U.S. market represents a huge opportunity for deploying AI waste analytics,&#8221; said Mikela Druckman, CEO of Greyparrot. &#8220;Our strategic alliance will meet the growing demand from the largest U.S. waste facilities to digitize and automate the sorting of recyclables in order to process a massive amount of waste and unlock its full financial value.&#8221;</p>
<p>&#8220;We are thrilled to partner and become the exclusive distributor of Greyparrot Analyzers in the U.S. market,&#8221; shared Pieter Eenkema van Dijk, President &amp; CEO of Van Dyk Recycling Solutions. &#8220;Having Greyparrot's AI waste analytics platform as part of our offering will help our customers optimize their recycling operations and increase recovery and profits.&#8221;</p>
<p>Two large recyclers of post-consumer materials in the U.S. have signed on as waste facility owners and operators to pilot Greyparrot's AI waste analytics in America. Greyparrot's Analyzer uses AI camera systems to provide 100% visibility into waste streams at recycling plants across 20+ countries. In 2023, it helped facilities analyze more than 25 billion waste objects, characterizing them into 89+ categories in real time to reveal seven layers of data, including material type, mass, financial value, brand, and GHG emissions.</p>
<p>By 2060, the world will generate three times the waste it produces today, and there is a critical need to build next-generation plants and retrofit older ones with new technologies – such as AI – to speed up processing times, unlock the financial value of waste, and direct materials back into the circular economy.</p>
<p>To see a live demo of Greyparrot Analyzer and how AI waste analytics is revolutionizing the sorting and processing of waste materials, visit Van Dyk at booth #2943 at WasteExpo 2024.</p>
<h4>About Greyparrot</h4>
<p><a href="https://www.greyparrot.ai/" target="_blank" rel="noopener">Greyparrot</a> (greyparrot.ai), the leader in AI waste analytics, is applying AI to globally scale recycling and save millions of tons of waste from landfills and incinerators. By providing deeper, more intelligent insights about waste stream composition and value, Greyparrot is helping the waste sector recover more value from waste processing lines and reduce the environmental impact of waste.</p>
<p>The company's waste intelligence platform, including Greyparrot Analyzer and Greyparrot Sync (API), reveals real-time insights on over 89+ waste categories across seven layers of data, including financial value, brand, and GHG emissions, captured at multiple locations across a recycling facility. In 2023, Greyparrot analyzed over 25 billion waste objects helping drive efficiency to save hundreds of thousands, to millions, of dollars per facility – while diverting millions of tons of waste away from landfills, oceans, and incinerators.<br />
Using Greyparrot insights, recycling professionals, plant builders, packaging producers, and FMCG brands can make decisions to help them increase recycling efficiency, comply with recycling regulations, and improve recyclable packaging design.</p>
<h4>About Van Dyk Recycling Solutions</h4>
<p><a href="/">Van Dyk Recycling Solutions</a> leads the North American recycling market, serving over 340 MRFs with 2,400 installations to date. It is a turnkey systems supplier that works with recycling facility owners and operators to offer innovative and profitable recycling solutions. Whether designing a new system or looking for retrofit options to improve recycling operations, Van Dyk is committed to finding a solution that fits the needs and goals of customers. It has long-standing relationships with manufacturers of the best technology the recycling world has to offer. For more information, visit <a href="/">https://vdrs.com</a>.</p>
<h4>Press Contacts</h4>
<p><strong>Kyle Austin for Greyparrot, N. America</strong><br />
<a href="mailto:kyle@greyparrot.ai">kyle@greyparrot.ai</a><br />
+1 (917) 575-8725</p>
<p><strong>Van Dyk Recycling Solutions</strong><br />
<a href="mailto:info@vdrs.com">info@vdrs.com</a><br />
(203) 967-1100</p>`
    },
    {
      id: 30,
      title: 'Innovative Multi-Material MRF opened at Grand Central Recycling and Transfer',
      excerpt: 'Grand Central Recycling installed a new Bollegraaf MRF that uses one processing line to sort residential single stream, dirty & dry commercial waste, and multi-family.',
      category: 'Case Studies',
      date: '2015-02-25',
      readTime: '5 min read',
      image: '/wp-content/uploads/2013/10/3Grand-Central-s.jpg',
      featured: false,
      link: 'https://vdrs.com/news-media/innovative-multi-material-mrf-opened-at-grand-central-recycling-and-transfer/',
      type: 'html',
      views: '1.5k',
      fullContent: `<div>
<h2 class="h2_org" style="color: #184d8f;">Grand Central Recycling and Transfer placed into service a new Bollegraaf MRF that uses a single processing line to sort a variety of material streams.</h2>
<p><img fetchpriority="high" decoding="async" class="aligncenter size-full wp-image-893" style="padding-top: 12px; padding-bottom: 18px;" src="/wp-content/uploads/2014/04/3Grand-CentralH.jpg" alt="Innovative Multi-Material MRF opened at Grand Central Recycling and Transfer" width="700" height="394" /></p>
<p>Distributor VAN DYK Recycling Solutions utilized cutting-edge technology to allow the same line to switch between different waste streams. This innovative plant can process and sort residential single stream, dirty and dry commercial waste, and multi-family MSW all over a single processing line. "It is a scalable alternative for the recyclers who do not have the capital, volume, or needs for a multiple line Mega MRF," states Wilfred Poiesz, Western Vice President of VAN DYK Recycling Solutions.</p>
<p>Grand Central CEO Dave Perez adds, "For a growing private hauling company like us, this unique multi-material system provides great opportunities. We now can process most waste streams that we currently collect on our trucks and become less dependent on the rising cost of landfill disposal fees."</p>
<p>Grand Central's goal in building this new MRF is to maximize diversion by designing a system that could replace the existing manual sorting operation, increase throughput, and act as an extension to GCR's existing transfer station. The new plant uses additional automation to allow the processing of higher volumes of materials without increasing labor costs. In addition, the new MRF is designed to start digging deeper into Grand Central's incoming waste streams and reduce disposal costs.</p>
<p>After a competitive RFP process, VAN DYK Recycling Solutions was selected as the vendor that responded with the most creative design, and who was flexible enough to handle multiple material types. Incorporating a nice balance between conventional low maintenance technology and a highly automated sorting system, the VAN DYK system is capable of effectively processing 600–700 tons per day of any type of incoming material all on the same processing line. "The fact that VAN DYK Recycling Solutions could think outside the box allowed them to formulate the most competitively priced proposal as well as the best use of space and people," states Pete Perez, General Manager of Grand Central Recycling.</p>
<p>Grand Central's MRF utilizes air based technology from Bollegraaf and Walair in addition to sensor based sorting technology from TOMRA. "The use and flexibility of sensor and air based sorting technologies allows Grand Central to immediately adjust and reset the line for different material streams. The air and optical sensor technology also limits maintenance and cleaning associated with traditional MRFs," says Jeff Duhamel, Consultant at Waste Systems Technology, Inc.</p>
<p>He continues, "It was clear that conventional technology would be problematic for this material. Bollegraaf came up with a solution that works without extensive maintenance and cleaning requirements. Their advanced process enables GCR to significantly enhance the depth of diversion, raise recovery rates, and minimize O&amp;M costs."</p>
<p>Grand Central built the system to increase waste diversion as a direct response to the anticipated closure of the Puente Hills landfill in the fall of 2013. California's laws have also changed and require higher diversion goals for commercial and residential customers. Grand Central's new facility assures that their customers will meet these new recycling requirements.</p>
<p>Pete Perez adds, "Everybody can process clean recyclables. It is of great value to be able to dig deeper into our mixed commercial and MSW waste stream. Our new system enables us to reclaim considerable amounts of previously untouched recyclables, while the size reduction and mechanical separation components help to prepare and protect our sorting staff. TOMRA sensor based sorting technology enables us to adjust and monitor our output quality to meet the strict 'Green Fence' imposed quality standards."</p>
<p>The new MRF initially sorts material by size and density into separate streams:</p>
<ul>
<li>Large items for manual sorting of wood, metals, cardboard, and film</li>
<li>High density products such as glass, metals, e-waste, phonebooks, large organics, wood, and other inerts</li>
<li>Low density products such as paper, cardboard, film, and plastics</li>
</ul>`
    },
    {
      id: 31,
      title: 'Economical Sorting of Fines for C&D Recycling - Lubo AWS',
      excerpt: 'Lubo has brought AWS technology to the C&D market. The AWS has proven to be a highly effective method of removing the fines that make sorting almost impossible.',
      category: 'Product Updates',
      date: '2018-03-13',
      readTime: '2 min read',
      image: '/wp-content/uploads/2015/01/22LuboCDecosystem215.jpg',
      featured: false,
      link: 'https://vdrs.com/news-media/lubo-introduces-line-of-economical-sorting-systems-for-cd-industry/',
      type: 'html',
      views: '1.2k',
      fullContent: `<div>
<h2 style="color: #184d8f;">In response to the needs of the growing C&amp;D recycling market in North America, Lubo has introduced a line of economical sorting systems featuring their patented Anti Wrapping (AWS) Screen.</h2>
<p><img decoding="async" class="aligncenter size-full wp-image-1210" src="/wp-content/uploads/2015/01/22LuboCDecosystem700.jpg" alt="Lubo Introduces Line of Economical Sorting Systems for C&amp;D Industry" width="700"></p>
<p>JANUARY 2015 – Known for their comprehensive and pioneering line of C&amp;D sorting equipment, including Lubo screens, Wal-air density separators, TOMRA optical sorters and more, Lubo is now incorporating their highly successful AWS screens into their systems.</p>
<p>The AWS has already proven itself in the MSW/RDF market as a highly effective method of removing the fines that make sorting difficult, if not impossible. Through the utilization of the AWS with C&amp;D, Lubo is able to provide economical and expandable solutions to this market as well.</p>
<p><img decoding="async" class="size-full wp-image-1210 aligncenter" src="/wp-content/uploads/2015/01/Economical-Sorting-Systems.jpg" alt="Lubo Introduces Line of Economical Sorting Systems for C&amp;D Industry" width="400">According to Pieter Eenkema van Dijk, President of Lubo, USA LLC, "Lubo has always been known for their quality and their ability to provide systems that recover high percentages of clean construction and demolition materials. With the addition of the AWS screen, we are now able to offer simplified but effective sorting lines for the North American market. We are excited and confident that these new sort lines will provide U.S. customers with a viable and economical solution to their C&amp;D sorting requirements."</p>
<p>For more information on the AWS screen or the new, economical sorting systems from Lubo, please call your local sales manager or contact us at (203) 967-1100 / <a href="mailto:info@vdrs.com">info@vdrs.com</a>. Visit our website at vdrs.com.</p>
<p>Lubo, USA, sister company to VAN DYK Recycling Solutions, is the exclusive distributor of Lubo machinery. Lubo is the worldwide leader in screening technology and the inventor of the StarScreen®. For the past twenty years they have been a pioneer in the design, development, and supply of innovative, reliable, and profitable sorting.</p>
<p>&nbsp;</p>
</div>`
    },
    {
      id: 32,
      title: 'Millennium Recycling Sees Big Change with Big Baler from Bollegraaf',
      excerpt: 'With their rare refurbished Bollegraaf HBC-140 single ram baler, Millennium Recycling can bale at remarkable rates, including OCC at 45 tph and ONP at 78 tph.',
      category: 'Case Studies',
      date: '2018-03-04',
      readTime: '2 min read',
      image: '/wp-content/uploads/2013/10/11Millennium-HBC-140-s.jpg',
      featured: false,
      link: 'https://vdrs.com/news-media/millennium-recycling-sees-big-change-with-big-baler-from-bollegraaf/',
      type: 'html',
      views: '1.2k',
      fullContent: `<div>
<h2 class="h2_org" style="color: #184d8f;">Millennium Recycling in Sioux Falls, SD, bought a refurbished Bollegraaf HBC-140 baler from distributor VAN DYK Recycling Solutions to handle commercial OCC and fiber from a residential single stream system.</h2>
<p><img fetchpriority="high" decoding="async" class="aligncenter size-full wp-image-866" style="padding-top: 12px; padding-bottom: 18px;" src="/wp-content/uploads/2014/04/11.Millennium-HBC140-H.jpg" alt="Bollegraaf HBC140 single ram baler" width="700" height="466" /></p>
<p>October 2013 – Because large used Bollegraafs very rarely come on the market, Jake Anderson, owner and president of Millennium, jumped at the chance. As Scott Jable, Midwest Regional Manager for VAN DYK, says, &#8220;most used Bollegraafs are smaller models, having been traded in for upgrades to larger machines.&#8221;</p>
<p>Millennium is seeing success with the new machine. Anderson says, &#8220;We've already seen an increase in production.&#8221;</p>
<p>With the Bollegraaf HBC-140, Millennium can produce bales at the following speeds:</p>
<ul>
<li>OCC— 1 every 85 seconds (2100-2200 lbs, 60")</li>
<li>ONP— 1 every 60 seconds (2600 lbs, 60")</li>
<li>Magazines— 1 every 70 seconds (2600-3000 lbs, 54-60")</li>
</ul>`
    },
    {
      id: 33,
      title: 'Murphy Road Recycling Announces $30 Million State of the Art All American Recycling Facility in Town of Berlin',
      excerpt: 'Facility designed and supplied by Van Dyk Recycling Solutions of Norwalk, CT Groundbreaking project will see two Connecticut-based companies partner to build one of North America\'s largest and most technologically advanced recycling systems',
      category: 'Case Studies',
      date: '2020-10-30',
      readTime: '7 min read',
      image: '/wp-content/uploads/2021/03/Murphy-Road-Recycling-215.jpg',
      featured: true,
      link: 'https://vdrs.com/news-media/murphy-road-recycling-announces-30-million-state-of-the-art-all-american-recycling-facility-in-town-of-berlin/',
      type: 'html',
      views: '2.8k',
      trending: true,
      fullContent: `<p><img fetchpriority="high" decoding="async" class="primg wp-image-13705 size-full aligncenter" src="/wp-content/uploads/2021/03/Murphy-Road-Recycling-700.jpg" alt="" width="700" height="227" /></p>
<p>&nbsp;</p>
<h3 style="text-align: center;">Facility designed and supplied by Van Dyk Recycling Solutions of Norwalk, CT</h3>
<h3 style="text-align: center;">Groundbreaking project will see two Connecticut-based companies partner to build one of North America's largest and most technologically advanced recycling systems</h3>
<p>&nbsp;</p>
<p>Berlin, CT – Two Connecticut companies today announced a groundbreaking $30 million investment to build one of North America's largest and most technologically advanced recycling facilities – the All American Material Recovery Facility (MRF) &#8211; in the Town of Berlin. The All American MRF's capabilities will set a new standard for recycling facilities throughout the country.</p>
<p>The All American MRF will be owned and operated by Connecticut-based Murphy Road Recycling. The design of the facility and the supply of the system's equipment will be provided by Norwalk-based Van Dyk Recycling Solutions. The system will be operational by early 2022 and will employ 200 people during the construction phase and another 50 people when fully operational. Once online, it will be capable of processing 50+ tons of recyclable material per hour, with a projected annual capacity of at least 200,000 tons, providing the State a critical resource to reach its 60% waste disposal diversion goal.</p>
<p>"Murphy Road Recycling and Van Dyk Recycling Solutions are proud of their deep roots in Connecticut, and we are excited to leverage our local knowledge and industry-leading expertise to modernize and transform recycling in our home state," said Frank Antonacci of Murphy Road Recycling.</p>
<p>Murphy Road Recycling approached Van Dyk Recycling Solutions over a year ago to help it deliver on its vision for a new MRF that would accomplish three primary goals: 1) increase the quantity, quality, and purity of recyclables; 2) provide an innovative and safe working environment; and 3) have the flexibility to adapt to ever-evolving consumer habits and recycling market conditions. Murphy Road Recycling and Van Dyk believe the All American MRF will accomplish all three.</p>
<p>"We are pleased that Murphy Road Recycling has decided to expand their operations here in Berlin. They have been a great asset in town and we are thrilled that they are making such a large investment in Berlin including the creation of additional jobs,&#8221; stated Berlin Mayor Mark Kaczynski.</p>
<p>Van Dyk is the leading supplier of recycling equipment to MRFs in North America. To guarantee customers such as Murphy Road Recycling as much uptime as possible, Van Dyk keeps a large inventory of critical spare parts for its machinery readily available at its Norwalk headquarters. Additionally, they have on location the largest R&amp;D center in the world for testing the separation of recyclables.</p>
<p>"This state of the art facility, that will set the standard for recycling facilities, is a win for the town of Berlin, the state of Connecticut, and the nation. I want to thank Murphy Road Recycling and Van Dyk Recycling Solutions for working to make this exciting announcement a reality. It is important now more than ever to invest in green technologies and this project is big step forward the battle against climate change," said Congressman John B. Larson.</p>
<p>Murphy Road Recycling strives to increase the quality and purity of recycled materials in Connecticut and find real and sustainable end markets for these materials. Getting curbside material to a saleable quality takes considerable investment by a MRF. With curbside recycling participation at an all-time high and commodity prices still rebounding from the implementation of China's National Sword, MRFs need to improve technology to process large amounts of materials and produce high, pure-quality recovered products.</p>
<p>"Today's curbside material isn't what it was 10-15 years ago," explained Jonathan Murray, Director of Operations for Murphy Road Recycling. "It was heavy on newspaper and relatively clean. Today, everyone reads news online and orders everything from the internet. Today's stream is full of small cardboard boxes and shipping envelopes, and requires that we, as recyclers, innovate and change our thinking around the sorting of recyclables."</p>
<p>This type of change in material stream is so widely experienced by players across the recycling industry that there is an insider term for it: the "Amazon Effect."</p>
<p>"We want to ensure that the recyclables Connecticut residents put out to the curb will make it to an end market for reuse," continued Antonacci.</p>
<p>The All American MRF will feature the latest technology available from world-renowned manufacturers in recycling equipment. The fully integrated system, replete with artificial intelligence, will be dedicated to the maximum recovery of all recyclable material, with several second chance mechanisms in place to make sure valuable material does not slip through the cracks. The design includes state of the art equipment to target paper, cardboard, boxboard, glass, and five types of plastic.</p>
<p>"This facility will include cutting-edge technology and safety measures that will be the new industry gold standard; not just in Connecticut but across the country," explained Pieter Van Dijk, CEO of Van Dyk Recycling Solutions.</p>
<p>Not only will this new technology produce higher quality recyclables, it will also help keep Murphy Road Recycling's employees safer. The All American MRF's "mono-level structure" and heightened focus on automation will create the innovative and safe working environment that Murphy Road Recycling was seeking.</p>
<p>"The health and safety of our employees is our number one concern at Murphy Road Recycling," said Antonacci. "That is why we invested heavily in automation to further increase the safety and productivity of the facility. We are retraining employees for positions to operate and maintain the optical sorter and other equipment, which are higher-skilled, higher-wage positions."</p>`
    },
    {
      id: 34,
      title: 'Freepoint Eco-Systems Works with Van Dyk to Open Advanced Plastic Recycling Facility in U.S.',
      excerpt: 'Norwalk, CT, May 6, 2022 – Freepoint Eco-Systems LLC is committed to helping develop the circular plastic economy. To realize this mission of turning waste plastic, that would otherwise be landfilled or incinerated, into recycled materials, Freepoint Eco-Systems has announced the construction of an advanced recycling facility in Hebron, Ohio.',
      category: 'Partnerships',
      date: '2022-11-18',
      readTime: '3 min read',
      image: '/wp-content/uploads/2022/06/freepoint-eco-systems-215-115.jpg',
      featured: false,
      link: 'https://vdrs.com/news-media/freepoint-eco-systems-works-with-van-dyk-to-open-advanced-plastic-recycling-facility-in-u-s/',
      type: 'html',
      views: '1.6k',
      fullContent: `<p><img fetchpriority="high" decoding="async" class="primg aligncenter wp-image-14613 size-full" src="/wp-content/uploads/2022/06/freepoint-eco-systems-700.jpg" alt="freepoint eco-systems Van Dyk Recycling Solutions" width="700" height="467" /> Norwalk, CT, May 6, 2022 – Freepoint Eco-Systems LLC (&#8220;Freepoint Eco-Systems&#8221;) is committed to helping develop the circular plastic economy. To realize this mission of turning waste plastic, that would otherwise be landfilled or incinerated, into recycled materials, Freepoint Eco-Systems has announced the construction of an advanced recycling facility in Hebron, Ohio. In connection with this project, Freepoint Eco-Systems is partnering with Van Dyk Recycling Solutions (&#8220;Van Dyk&#8221;) to build a front-end sorting system that will prepare post-sorted plastics for advanced recycling.</p>
<p>Brian Schellati, Director of Business Development for Van Dyk spoke about the design process: "Joining our experience in system design with Freepoint Eco-Systems' dedication to finding renewable avenues for plastics led to a project that we believe is going to be very successful. The facility will accept post-sorted plastics from material recovery facilities. Those materials will pass through an advanced sortation system and then ultimately become pelletized."</p>
<p>"Freepoint Eco-Systems is excited to be working with Van Dyk, a leader in North America for the installation of recycling and sorting systems, in connection with this project. We understand the importance of developing a system that is based on innovative, cutting-edge technology and state-of-the-art equipment. We believe that partnering with Van Dyk is the right decision, as we develop one of the largest commercial-scale advanced recycling facilities in the United States," said Bilal Khan, Director of Engineering and Operations for Freepoint Eco-Systems.</p>
<p>The feedstock produced by the facility will have a smaller carbon footprint than crude oil-derived feedstocks and will contribute to a more circular economy for plastic production.</p>
<h4>About Freepoint Eco-Systems</h4>
<p>Freepoint Eco-Systems is an affiliate of Freepoint Commodities LLC, a global commodities merchant providing supply chain management services and eco-friendly products and solutions to its customers. Among other things, Freepoint Eco-Systems is in the business of securing supplies of waste plastic that is not being recycled and converting that waste into recycled products via its advanced recycling facilities. Freepoint Eco-Systems is engaged in business operations in the U.S., Europe, and Asia. More information can be found at <a href="https://freepointecosystems.com/" target="_blank" rel="noopener">www.FreepointEcoSystems.com</a>.</p>`
    },
    {
      id: 35,
      title: 'Murphy Road Recycling Seeks Green Fence Standard with VAN DYK',
      excerpt: 'To keep up with tightening market requirements (like the Green Fence standard), USA Hauling & Recycling chose our systems, which produce quality end products.',
      category: 'Case Studies',
      date: '2018-03-06',
      readTime: '2 min read',
      image: '/wp-content/uploads/2013/06/13OCC-Screen-s.jpg',
      featured: false,
      link: 'https://vdrs.com/news-media/murphy-road-recycling-seeks-green-fence-standard-with-van-dyk-equipment/',
      type: 'html',
      views: '1.2k',
      fullContent: `<div>
<h2 class="h2_org" style="color: #184d8f;">USA Hauling &amp; Recycling is currently upgrading their Murphy Road Recycling facility in Bridgeport, CT with industry leading equipment by VAN DYK Recycling Solutions. The commercial single stream plant will start up in December, 2013.</h2>
<p><img fetchpriority="high" decoding="async" class="aligncenter size-full wp-image-857" style="padding-top: 12px; padding-bottom: 18px;" src="/wp-content/uploads/2014/04/13OCC-ScreenH.jpg" alt="OCC-Star Screen Lubo" width="700" height="467" /></p>
<p>November 2013 – Owners Frank and Jerry Antonacci chose VAN DYK to help them keep up with tightening market requirements (such as the Green Fence standard) that force recyclers to continuously produce a quality end product.</p>
<p>To meet Murphy Road Recycling's specific needs, VAN DYK provided a custom designed solution to improve the facility's efficiency and quality of end product. The upgrade includes the addition of infeed conveyors, a Lubo OCC StarScreen®, and a TOMRA optical sorter, whose flexibility will allow the facility to make quick adjustments driven by fluctuating market dynamics.</p>
<p>VAN DYK Recycling Solutions is North America's leading designer and system supplier of world-class recycling and recovery technology, and the exclusive distributor of Bollegraaf, Lubo, and TOMRA machinery. They specialize in proven technology in the fields of sizing, sorting, recovery, and baling of recyclables. Their systems provide solutions for single stream, commercial waste, C&amp;D, MSW, waste-to-energy/fuel, presorted plastics, and e-waste markets. Technologies in their arsenal include high-capacity pre-press flap balers, sensor based sorters, PaperMagnets®, StarScreens®, PaperSpikes®, density separators, air systems, trommel screens, and more. Boasting 2,400 profitable plants, their turnkey service fully equips with design, installation, training, and superior, lifelong support.</p>
<p>&nbsp;</p>
</div>`
    },
    {
      id: 36,
      title: 'QRS Recycling Enhances Louisville Facility with New Bollegraaf HBC-120MR Baler',
      excerpt: 'QRS Recycling Adds Bollegraaf HBC-120MR Baler to Louisville Facility April 1, 2015 – As part of a continuous effort to provide industry leading capabilities and customer service, QRS Recycling will be enhancing its Louisville facility...',
      category: 'Product Updates',
      date: '2018-03-15',
      readTime: '2 min read',
      image: '/wp-content/uploads/2015/08/26QRSbaler215.jpg',
      featured: false,
      link: 'https://vdrs.com/news-media/qrs-recycling-adds-bollegraaf-hbc-120mr-baler-to-louisville-facility/',
      type: 'html',
      views: '1.2k',
      fullContent: `<div>
<h2 style="display: none;">QRS Recycling Adds Bollegraaf HBC-120MR Baler to Louisville Facility</h2>
<p><img decoding="async" class="aligncenter size-full" src="/wp-content/uploads/2015/08/26QRSbaler700.jpg" alt="QRS Recycling Adds Bollegraaf HBC-120MR Baler to Louisville Facility" width="700"></p>
<p>April 1, 2015 &#8211; As part of a continuous effort to provide industry leading capabilities and customer service, QRS Recycling will be enhancing its Louisville facility and consolidating commercial and residential paper, cardboard and single stream processing at this location. At the heart of this facility expansion and enhancement is the purchase and installation of a new Bollegraaf HBC-120MR from Van Dyk Recycling Solutions. According to Matt and Greg Janson, the owners of QRS Recycling, the ability of the HBC-120MR to bale high volumes of OCC and achieve maximum rail car weights were the key capabilities that led them to purchase this baler.</p>
<p>"The Bollegraaf baler has a great reputation in the recycling industry and we're excited to finally own one," says Greg Janson. Matt Janson adds, "I'm very much looking forward to having a Bollegraaf baler as part of the QRS family." The new baling system is scheduled to be operational in June of 2015.</p>
<p>VAN DYK Recycling Solutions is North America's leading designer and system supplier of world-class recycling and recovery technology, and the exclusive distributor of Bollegraaf, Lubo, and TOMRA machinery. We specialize in proven technology in the fields of sizing, sorting, recovery, and baling of recyclables. Our systems provide solutions for single stream, commercial waste, C&amp;D, MSW, waste-to-energy/fuel, presorted plastics, and e-waste markets. Technologies in our arsenal include high-capacity pre-press flap balers, sensor based sorters, PaperMagnets®, StarScreens®, PaperSpikes®, density separators, air systems, trommel screens, and more. Boasting 2,400 profitable plants, our turnkey service fully equips with design, installation, training, and superior, lifelong support.</p>
<p>&nbsp;</p>
</div>`
    },
    {
      id: 37,
      title: 'Republic Services\' New Plano, TX MRF Does Its Part to Solve MRF Crisis',
      excerpt: 'Republic Services is tackling head-on the crisis of overly contaminated waste streams in today\'s MRFs. With current residential contamination levels reaching as high as 30% or more, it is critical that processors send a clear message to the community...',
      category: 'Case Studies',
      date: '2019-10-23',
      readTime: '5 min read',
      image: '/wp-content/uploads/2019/10/Plano-best-215x115.jpg',
      featured: false,
      link: 'https://vdrs.com/news-media/republic-services-new-plano-tx-mrf-does-its-part-to-solve-mrf-crisis/',
      type: 'html',
      views: '1.8k',
      fullContent: `<p><img fetchpriority="high" decoding="async" class="primg aligncenter size-full wp-image-11642" src="/wp-content/uploads/2019/10/Plano-best-700x465.jpg" alt="Republic Services MRF Plano TX" width="700" height="465" /></p>
<p>Republic Services is tackling head-on the crisis of overly contaminated waste streams in today's MRFs. With current residential contamination levels reaching as high as 30% or more, it is critical that processors send a clear message to the community about what is accepted in the recycling program, while also employing the most advanced, flexible technology on the market to separate this evolving stream.</p>
<p>The company's Plano, TX facility, which opened in April 2019, has put community education at the forefront. A 5,000 square foot Learning Center features interactive games aimed to educate the public on what materials are properly recyclable, as well as an observation deck overlooking the 77,000 square foot recycling facility itself. A video campaign called Recycling Simplified breaks down recycling into simple steps with easily remembered tips, such as common items that do or don't belong in the bin, and to never bag items in plastic film.</p>
<p>An engaged approach toward the community helps eliminate some common and problematic habits that residents can have when it comes to their curbside bin. Phenomena like "wishcycling" (a misguided hope that the recycling facility will know what to do with questionable items) are discouraged with the simple phrase "when in doubt, throw it out." <a href="https://www.youtube.com/watch?v=jJ0G65ako44" target="_blank" rel="noopener noreferrer">A popular industry webinar</a> from last year addressed the destructive impact of consumer behaviors that arise when the public is not provided with a clear and united message. Republic Plano works to solve part of the problem that begins with community guidance.</p>
<p>When it comes to dealing with the material the plant does receive, which serves more than 510,000 residents and 2,500 commercial customers throughout the Dallas-Fort Worth metro area, Republic takes a unique approach with the technology on its sorting line. Equipment that makes intelligent sorting decisions with high degree of flexibility prepares the facility for the future.</p>
<p>To achieve extremely high recovery of all mix paper that is clean and sellable with minimal QC sorting, Republic uses equipment supplied by Van Dyk Recycling Solutions, along with the supplier's <a href="/positive-sorting">"Positive Sorting" method</a>. The unique method uses a combination of non-wrapping screens and optical sorters to intelligently separate and improve the quality of the fiber recovered from the stream. Optical units shoot positively on paper at the front end by identifying its material characteristics and positively separating it from the stream. Traditional methods of removing contaminants from paper based on size, shape, and density create too much collateral damage for today's high purity standards. With a higher purity fiber stream headed to quality control, the plant will need fewer manual sorters to remove nonfibrous materials.</p>
<p>To prepare the material for positive sorting (optical units perform best when the material is properly pre-sorted and evenly spread on the belt), a non-wrapping ONP screen separates paper from containers. Traditional inclining screens meant to do the same job are notorious for getting so clogged with plastic films and other contaminants that everything goes up and over the screen and separation ceases to occur. Severely clogged screens are known to take well over an hour to clean after each shift. Stars take a beating and need to be replaced frequently.</p>
<p>Van Dyk's non-wrapping screen has a larger shaft with specially shaped and spaced stars. Because of this design, it incurs virtually no film wrapping and continues to separate materials at peak ability for an entire shift at full capacity. Reportedly the screen takes as little as ten minutes to clean. And because the screen has larger and fewer stars, the need for replacement parts is significantly reduced.</p>
<p>This non-wrapping screen to optical setup gives Republic's facility an unprecedented degree of flexibility. With the ever-evolving ton, many facilities are constantly facing changes in their stream's composition, which brings new challenges. Traditional screening approaches struggle to adapt to a changing stream and will continue to produce degrading fiber quality and require high maintenance costs. But having multiple sensor optical sorting units on primary separation prepares a plant for the future. The optical units can be reprogrammed on the spot to recognize and recover a different commodity, should the incoming stream undergo drastic changes. There are also 4 separate fiber storage bunkers to make OCC and 3 different grades of mix paper that can be baled separately or blended.</p>
<p>The design incorporates a mono-platform and second-level system access, which allows sorting personnel to safely access all QC lines on a central platform, without walking on the operating floor. The system also features an elliptical screen for film removal, another series of optical sorters to separate plastics, a system-wide dust collection network, and a glass cleanup system proven to recover over 95% of clean glass via a specialized vibratory screen and density separator. A Bollegraaf HBC-120S baler is intended for baling fiber and OCC, but is capable of baling all commodities for full baler redundancy.</p>`
    },
    {
      id: 38,
      title: 'Sims Chooses Bollegraaf for New York City MRF',
      excerpt: 'Sims Metal Management Municipal Recycling has selected VAN DYK Recycling Solutions, the exclusive distributor of Bollegraaf, Lubo, and TOMRA Recycling Equipment, to supply the new processing equipment for New York City\'s residential recycling MRF in Brooklyn, NY.',
      category: 'Case Studies',
      date: '2015-02-24',
      readTime: '4 min read',
      image: '/wp-content/uploads/2013/10/2SIMS-s.jpg',
      featured: false,
      link: 'https://vdrs.com/news-media/sims-chooses-bollegraaf-for-new-york-city-mrf/',
      type: 'html',
      views: '1.5k',
      fullContent: `<div>
<h2 style="color: #184d8f;margin-top:0px;">Sims Metal Management Municipal Recycling has selected VAN DYK Recycling Solutions, the exclusive distributor of Bollegraaf, Lubo, and TOMRA Recycling Equipment, to supply the new processing equipment for New York City's residential recycling MRF in Brooklyn, NY.</h2>
<p><img fetchpriority="high" decoding="async" class="aligncenter size-full wp-image-896" style="padding-top: 12px; padding-bottom: 18px;" src="/wp-content/uploads/2014/04/2SIMS-H.jpg" alt="Sims chooses Bollegraaf for New York City MRF" width="700" height="378" /></p>
<p>June 2012 – The plant is designed to process over 1,000 tons per day of curbside recyclables and will sort all of the plastics, metal, and aluminum recycled in all five Boroughs of New York City. "We are excited to break ground on what will be the most advanced municipal recycling center in the country," stated Robert Kelman, President of Commercial &amp; Business Development, Sims Metal Management &#8211; North America, at the center's ground breaking ceremony.</p>
<p>The New York City recycling program faces many unique challenges. Materials arrive in bags and electronic and larger household metals are also collected in the same stream. To meet the challenge, VAN DYK expanded upon their initial pilot plant design and added state-of-the-art technology to remove the bags as well as sort out the metal and e-waste for further recycling.</p>
<p>"The existing Jersey City Pilot Plant utilizes 4 TOMRA optical sorters to sort plastics, but because of the volume of the material in the new facility we have incorporated 16 TOMRA optical sorters to separate plastics, metals, and containers," stated Pete Bond, Sales Engineer for VAN DYK Recycling Solutions. The TOMRA optical sorters will sort and verify 10 different marketable products for the city, and the MRF's employees will perform quality control instead of the primary sorting.</p>
<h3>The facility is expected to be fully operational in the fall of 2013</h3>
<p>The new Sims/NYC facility is located on the 30th Street Pier in the South Brooklyn Marine Terminal in Sunset Park, Brooklyn. New York City has the largest, most ambitious recycling program in the nation. All of the city's institutions, public schools, and 3 million households receive recycling collection from the New York City Department of Sanitation. All the beverage cartons, bottles, cans, metal, and foil that the department collects for recycling goes to Sims Metal Management Municipal Recycling. Sims uses waterfront facilities to accept, process, and then transport NYC's recyclables by barge to minimize truck traffic on the city's busy streets.</p>
<p>Sims Metal Management is investing $44 million to create the new 100,000 square-foot facility, which will include processing, storage buildings, and a Visitor Education Center where school groups and visitors can learn about recycling. The facility will collect Brooklyn's recyclables with no more than 100 trucks per day, while the remainder of the city's metal, glass, and plastic recyclables will be delivered to the facility via barge from two existing Sims facilities in the Bronx and Queens. The facility is expected to be fully operational in the fall of 2013.</p>
<p>Since 1984, VAN DYK Recycling Solutions has led the North American market by building over 2,400 efficiently operating and profitable plants. At VAN DYK Recycling Solutions, we work with our customers to offer innovative solutions that deliver the lowest processing cost per ton. Contact us to learn why our customers trust VAN DYK.</p>
<p>&nbsp;</p>
</div>`
    },
    {
      id: 39,
      title: 'Van Dyk Helps FCC Environmental Kick Off Dallas MRF',
      excerpt: 'January 2017 – Van Dyk is proud to announce the opening of the FCC Dallas MRF, one of FCC Environmental\'s first MRFs in the United States. The facility will accept all singlestream material from the city of Dallas and the city of University Park, Texas.',
      category: 'Case Studies',
      date: '2018-03-22',
      readTime: '2 min read',
      image: '/wp-content/uploads/2018/03/FCC_Dallas215.jpg',
      featured: false,
      link: 'https://vdrs.com/news-media/van-dyk-helps-fcc-environmental-kick-off-dallas-mrf/',
      type: 'html',
      views: '1.3k',
      fullContent: `<p><img fetchpriority="high" decoding="async" class="aligncenter size-full wp-image-5121" style="padding-top: 12px; padding-bottom: 18px;" src="/wp-content/uploads/2018/03/FCC_Dallas700.jpg" alt="Van Dyk Helps FCC Environmental Kick Off Dallas MRF" width="700" height="377" /></p>
<p>January 2017 – Van Dyk is proud to announce the opening of the FCC Dallas MRF, one&nbsp;of FCC Environmental's first MRFs in the United States. The facility will accept all singlestream material from the city of Dallas and the city of University Park, Texas. The&nbsp;system was designed by Van Dyk Recycling Solutions to bring Dallas closer to its goal of&nbsp;zero-waste by the year 2040. It&nbsp; successfully processed over 1,000 tons of material in its&nbsp;first two weeks and passed its required acceptance test for the city of Dallas prior to the&nbsp;contract start date of January 1, 2017.</p>
<p>The facility contains cutting-edge technology provided by Van Dyk Recycling Solutions&nbsp;of Stamford, CT. A series of starscreens (Lubo Systems) separates OCC, glass, fiber and&nbsp;containers. The series features Van Dyk's newest offering, the Anti-Wrapping ONP&nbsp;screen, the widest screen in the industry at 13.3 ft. with 440 stars. The stars incur&nbsp;virtually no wrapping, even after hours of operation. Cleaning and maintenance time is&nbsp;reduced to less than 10% of that of traditional starscreens.</p>
<p>A total of four TOMRA (TITECH) Autosort 4 optical sorters recover any remaining fiber&nbsp;and separate all plastics. An overbelt magnet and eddy current recover ferrous and&nbsp;aluminum cans, respectively. And a glass cleanup system (Walair) creates four fractions&nbsp;of clean, sellable glass. The system is capped off by a Bollegraaf HBC-120S that is&nbsp;capable of baling all commodities accepted at the facility.</p>
<p>Van Dyk Recycling Solutions is North America's leading recycling supplier and the&nbsp;exclusive distributor of Bollegraaf, Lubo, and TOMRA equipment.</p>
<p>&nbsp;</p>`
    },
    {
      id: 40,
      title: 'Van Dyk in 2022: From New Designs to Startups',
      excerpt: 'Catch up on some of the biggest news from Van Dyk in 2022, including new facility startups, current installations, and upcoming projects across North America.',
      category: 'Company News',
      date: '2023-01-15',
      readTime: '8 min read',
      image: '/wp-content/uploads/2023/01/1-Startups-Murphy-Road-Recycling.jpg',
      featured: true,
      link: 'https://vdrs.com/news-media/van-dyk-in-2022-from-new-designs-to-startups/',
      type: 'html',
      views: '2.1k',
      fullContent: `<div>
<h2 style="text-align: center;">Catch up on some of the biggest news from Van Dyk in 2022</h2>
<div style="height: 40px;">&nbsp;</div>
<h3 style="text-align: center; margin-bottom: 25px;">Startups: Murphy Road Recycling</h3>
<figure id="attachment_14832" aria-describedby="caption-attachment_14832" style="width: 700px" class="wp-caption aligncenter"><img fetchpriority="high" decoding="async" class="size-full wp-image-14832" src="/wp-content/uploads/2023/01/1-Startups-Murphy-Road-Recycling.jpg" alt="Startups Murphy Road Recycling" width="700" height="394" /><figcaption id="caption-attachment_14832" class="wp-caption-text">The largest and most advanced single stream system on the East Coast will have their grand opening in the coming weeks. Murphy Road's "All American MRF" seeks to revolutionize recycling for the state of Connecticut.</figcaption></figure>
<div style="height: 40px;">&nbsp;</div>
<h3 style="text-align: center; margin-bottom: 25px;">Startups: Rockland Green</h3>
<figure id="attachment_14833" aria-describedby="caption-attachment_14833" style="width: 700px" class="wp-caption aligncenter"><img decoding="async" class="size-full wp-image-14833" src="/wp-content/uploads/2023/01/2-Startups-Rockland-Green.jpg" alt="Startups Rockland Green" width="700" height="394" /><figcaption id="caption-attachment_14833" class="wp-caption-text">As an historic leader in NYS waste management since 1997, Rockland Green (the designated NYS Waste Management Unit formerly known as the Rockland County Solid Waste Management Authority) has now completely over-hauled and upgraded its entire dual stream MRF with the very latest cutting-edge equipment and technologies including an optical sorting system along with enhancements to the fiber recovery line, full container line, and glass cleanup system.</figcaption></figure>
<div style="height: 40px;">&nbsp;</div>
<h3 style="text-align: center;margin-bottom: 25px;">Startups: WM – the Westside MRF</h3>
<figure id="attachment_14834" aria-describedby="caption-attachment_14834" style="width: 700px" class="wp-caption aligncenter"><img decoding="async" class="size-full wp-image-14834" src="/wp-content/uploads/2023/01/3-Startups-WM-The-Westside-MRF.jpg" alt="Startups WM The Westside MRF" width="700" height="394" /><figcaption id="caption-attachment_14834" class="wp-caption-text">WM's newest MRF in their hometown headquarters of Houston, TX delivers amazing results producing clean paper and maximum recovery of all recyclables using fewer human sorters and a fully automated container line.</figcaption></figure>
<div style="height: 40px;">&nbsp;</div>
<h3 style="text-align: center;margin-bottom: 25px;">Current Installations: Atlantic Coast Fibers</h3>
<figure id="attachment_14835" aria-describedby="caption-attachment_14835" style="width: 700px" class="wp-caption aligncenter"><img loading="lazy" decoding="async" class="size-full wp-image-14835" src="/wp-content/uploads/2023/01/4-Current-Installations-Atlantic-Coast-Fibers.jpg" alt="Current Installations Atlantic Coast Fibers" width="700" height="394" /><figcaption id="caption-attachment_14835" class="wp-caption-text">Installation has begun in Passaic, NJ on this dual stream system with a highly automated container line. The paper line will alternate shifts of mixed paper and single stream and include screens and opticals for cleaning up fiber and targeting cardboard.</figcaption></figure>
<div style="height: 40px;">&nbsp;</div>
<h3 style="text-align: center;margin-bottom: 25px;">Current Installations: Westrock</h3>
<figure id="attachment_14836" aria-describedby="caption-attachment_14836" style="width: 700px" class="wp-caption aligncenter"><img loading="lazy" decoding="async" class="size-full wp-image-14836" src="/wp-content/uploads/2023/01/5-Current-Installations-Westrock.jpg" alt="Current Installations Westrock" width="700" height="394" /><figcaption id="caption-attachment_14836" class="wp-caption-text">WestRock's various fiber line upgrades in Portland, Louisville, and Chattanooga will clean up paper to reduce contamination and reach less than 2% prohibitives.</figcaption></figure>
<div style="height: 40px;">&nbsp;</div>
<h3 style="text-align: center;margin-bottom: 25px;">Upcoming Installations: FCC Environmental Services</h3>
<figure id="attachment_14837" aria-describedby="caption-attachment_14837" style="width: 700px" class="wp-caption aligncenter"><img loading="lazy" decoding="async" class="wp-image-14837 size-full" src="/wp-content/uploads/2023/01/6-Upcoming-Installations-FCC-Environmental-Services.jpg" alt="Upcoming Installations: FCC Environmental Services" width="700" height="394" /><figcaption id="caption-attachment_14837" class="wp-caption-text">Van Dyk is proud to continue their partnership with FCC Environmental Services. FCC's newest project will be a state-of-the-art MSW + C&amp;D MRF in Placer County, California.</figcaption></figure>
<div style="height: 40px;">&nbsp;</div>
<h3 style="text-align: center;margin-bottom: 25px;">Upcoming Installations: Günther Splitter Screen</h3>
<figure id="attachment_14838" aria-describedby="caption-attachment_14838" style="width: 700px" class="wp-caption aligncenter"><img loading="lazy" decoding="async" class="wp-image-14838 size-full" src="/wp-content/uploads/2023/01/7-Upcoming-Installations-Gunther-SPLITTER2.jpg" alt="Upcoming Installations: Günther Splitter Screen" width="700" height="394"><figcaption id="caption-attachment_14838" class="wp-caption-text">The first SPLITTER screen will go into a 35tph single stream system in Illinois to do initial sizing at presort. The system will also feature a full container line with 11 optical units from Pellenc ST.</figcaption></figure>
<div style="height: 40px;">&nbsp;</div>
<h3 style="text-align: center;margin-bottom: 25px;">Upcoming Installations: Freepoint Eco-Systems</h3>
<figure id="attachment_14839" aria-describedby="caption-attachment_14839" style="width: 700px" class="wp-caption aligncenter"><img loading="lazy" decoding="async" class="wp-image-14839 size-full" src="/wp-content/uploads/2023/01/8-Upcoming-Installations-Freepoint-EcoSystems.jpg" alt="Upcoming Installations: Freepoint Eco-Systems" width="700" height="394" /><figcaption id="caption-attachment_14839" class="wp-caption-text">Freepoint Eco-Systems is partnering with Van Dyk to develop a large mixed plastics pre-processing plant in Hebron, Ohio that will use elliptical separation and positive sorting to recover plastics from MRF residue.</figcaption></figure>
<div style="height: 40px;">&nbsp;</div>
<h3 style="text-align: center;margin-bottom: 25px;">Upcoming Installations: All American Recycling</h3>
<figure id="attachment_14840" aria-describedby="caption-attachment_14840" style="width: 700px" class="wp-caption aligncenter"><img loading="lazy" decoding="async" class="size-full wp-image-14840" src="/wp-content/uploads/2023/01/9-Upcoming-Installations-All-American-Recycling.jpg" alt="Upcoming Installations: All American Recycling" width="700" height="394" /><figcaption id="caption-attachment_14840" class="wp-caption-text">An upgrade of this residential/commercial MRF in Jersey City, New Jersey, will include Lubo nonwrapping 440 Screens, several of the newest generation TOMRA Autosort Five optical sorters, a Bakker inline overbelt magnet and an eddy current separator.</figcaption></figure>
<div style="height: 40px;">&nbsp;</div>
<h3 style="text-align: center;margin-bottom: 25px;">High-Volume Fiber Baling</h3>
<p>Van Dyk continues to expand its high-volume fiber baling capabilities with multiple installations across North America, helping facilities maximize their fiber recovery and baling efficiency.</p>
</div>`
    },
    {
      id: 41,
      title: 'Van Dyk in 2023: Major Projects and Expansions',
      excerpt: 'A closer look at the major projects and expansions in Van Dyk\'s 2023 portfolio, including facility startups, system upgrades, and new installations across North America.',
      category: 'Company News',
      date: '2024-01-15',
      readTime: '10 min read',
      image: '/wp-content/uploads/2024/01/1-Intro-Slide.jpg',
      featured: true,
      link: 'https://vdrs.com/news-media/van-dyk-in-2023-major-projects-and-expansions/',
      type: 'html',
      views: '2.5k',
      fullContent: `<div>
<h2 style="text-align: center;">A closer look at the major projects and expansions in Van Dyk's 2023 portfolio</h2>
<div style="height: 40px;"></div>
<figure id="attachment_15181" aria-describedby="caption-attachment_15181" style="width: 700px" class="wp-caption aligncenter"><img fetchpriority="high" decoding="async" class="wp-image-15181 size-full" src="/wp-content/uploads/2024/01/1-Intro-Slide.jpg" alt="Van Dyk Recycling Solutions 2023 major projects" width="700" height="394" /><figcaption id="caption-attachment_15181" class="wp-caption-text">Major projects and expansions close 2023 for Van Dyk Recycling Solutions</figcaption></figure>
<div style="height: 40px;"></div>
<h3 style="text-align: center; margin-bottom: 25px;">Murphy Road Recycling</h3>
<figure id="attachment_15182" aria-describedby="caption-attachment_15182" style="width: 700px" class="wp-caption aligncenter"><img decoding="async" class="wp-image-15182 size-full" src="/wp-content/uploads/2024/01/2-Murphy-Road-Recycling.jpg" alt="Murphy Road Recycling - Van Dyk Recycling Solutions 2023 major projects" width="700" height="394" /><figcaption id="caption-attachment_15182" class="wp-caption-text">Murphy Road Recycling, LLC was awarded the 2023 Recycling Facility of the Year title by the National Waste &amp; Recycling Association for their new single stream MRF in Berlin, CT (dubbed the All American MRF). Facilities with Van Dyk systems have won 7 out of the last 9 NWRA awards for Recycling Facility of the Year.</figcaption></figure>
<div style="height: 40px;"></div>
<h3 style="text-align: center; margin-bottom: 25px;">FCC Environmental Services</h3>
<figure id="attachment_15183" aria-describedby="caption-attachment_15183" style="width: 700px" class="wp-caption aligncenter"><img decoding="async" class="wp-image-15183 size-full" src="/wp-content/uploads/2024/01/3-FCC-CandD.jpg" alt="FCC C&amp;D - Van Dyk Recycling Solutions 2023 major projects" width="700" height="394" /><figcaption id="caption-attachment_15183" class="wp-caption-text">In a deal with the Western Placer Waste Management Authority, FCC Environmental Services is building a 650,000-ton-per-year recycling complex to process the county's solid waste. The construction and demolition (C&amp;D) portion of the system is preparing for the commissioning stage. It will use density separation and optical sorting to process construction and demolition waste.</figcaption></figure>
<div style="height: 40px;"></div>
<h3 style="text-align: center; margin-bottom: 25px;">FCC Environmental Services MSW System</h3>
<figure id="attachment_15184" aria-describedby="caption-attachment_15184" style="width: 700px" class="wp-caption aligncenter"><img loading="lazy" decoding="async" class="wp-image-15184 size-full" src="/wp-content/uploads/2024/01/4-FCC-MSW.jpg" alt="FCC MSW - Van Dyk Recycling Solutions 2023 major projects" width="700" height="394" /><figcaption id="caption-attachment_15184" class="wp-caption-text">Following completion of the C&amp;D system at FCC Environmental Services' Placer County MRF, installation will begin on the municipal solid waste (MSW) system. Equipment has already been delivered. The system will separate household waste to divert recyclables and organics from landfill in compliance with California's SB-1383 regulation.</figcaption></figure>
<div style="height: 40px;"></div>
<h3 style="text-align: center; margin-bottom: 25px;">WM Automated Single-Stream Systems</h3>
<figure id="attachment_15185" aria-describedby="caption-attachment_15185" style="width: 700px" class="wp-caption aligncenter"><img loading="lazy" decoding="async" class="wp-image-15185 size-full" src="/wp-content/uploads/2024/01/5-WM-logo.jpg" alt="WM residential single stream systems - Van Dyk Recycling Solutions 2023 major projects" width="700" height="394" /><figcaption id="caption-attachment_15185" class="wp-caption-text">In 2024, Van Dyk looks forward to kicking off installation on two brand new, highly automated residential single-stream sorting systems in Texas, one in the New Braunfels area between Austin and San Antonio and one in the Fort Worth area. Both will be owned and operated by WM.</figcaption></figure>
<div style="height: 40px;"></div>
<h3 style="text-align: center; margin-bottom: 25px;">WM Invests in Upgrading Facilities Throughout North America</h3>
<figure id="attachment_15186" aria-describedby="caption-attachment_15186" style="width: 700px" class="wp-caption aligncenter"><img loading="lazy" decoding="async" class="wp-image-15186 size-full" src="/wp-content/uploads/2024/01/6-WM-Cleveland.jpg" alt="WM new and upgraded facilities - Van Dyk Recycling Solutions 2023 major projects" width="700" height="394" /><figcaption id="caption-attachment_15186" class="wp-caption-text">WM has announced plans to make substantial investments in new and upgraded recycling facilities throughout North America. Van Dyk is proud to collaborate with WM on many of these projects, including: Woodinville, Washington; Cleveland, Ohio; Germantown, Wisconsin; Pittsburgh, Pennsylvania; and Surprise, Arizona.</figcaption></figure>
<div style="height: 40px;"></div>
<h3 style="text-align: center; margin-bottom: 25px;">Crown Shred &amp; Recycling</h3>
<figure id="attachment_15187" aria-describedby="caption-attachment_15187" style="width: 700px" class="wp-caption aligncenter"><img loading="lazy" decoding="async" class="size-full wp-image-15187" src="/wp-content/uploads/2024/01/7-Crown-Shred-and-Recycling.jpg" alt="Crown Shred and Recycling - Van Dyk Recycling Solutions 2023 major projects" width="700" height="394" /><figcaption id="caption-attachment_15187" class="wp-caption-text">Crown Shred &amp; Recycling Inc. of Regina, Saskatchewan, is building a brand new 30-ton-per-hour single stream system to increase the volume of material processed by the company. The highly automated technology is anticipated to also increase recycling rates in the area.</figcaption></figure>
<div style="height: 40px;"></div>
<h3 style="text-align: center; margin-bottom: 25px;">GFL's "Future-Ready" MRF</h3>
<figure id="attachment_15188" aria-describedby="caption-attachment_15188" style="width: 700px" class="wp-caption aligncenter"><img loading="lazy" decoding="async" class="wp-image-15188 size-full" src="/wp-content/uploads/2024/01/8-GFL-logo.jpg" alt="GFL's MRF - Van Dyk Recycling Solutions 2023 major projects" width="700" height="394" /><figcaption id="caption-attachment_15188" class="wp-caption-text">GFL's Edmonton location is rebuilding their MRF in a brand new building with the latest technology from Van Dyk Recycling Solutions. The highly modernized system will feature a flexible and "future ready" design to meet emerging material sorting requirements.</figcaption></figure>
<div style="height: 40px;"></div>
<h3 style="text-align: center; margin-bottom: 25px;">Penn Waste System Rebuild</h3>
<figure id="attachment_15189" aria-describedby="caption-attachment_15189" style="width: 700px" class="wp-caption aligncenter"><img loading="lazy" decoding="async" class="wp-image-15189 size-full" src="/wp-content/uploads/2024/01/9-Penn-Waste.jpg" alt="Penn Waste system - Van Dyk Recycling Solutions 2023 major projects" width="700" height="394" /><figcaption id="caption-attachment_15189" class="wp-caption-text">After Penn Waste suffered a devastating fire, they put forth a well-coordinated effort to rebuild their system in just one year. To replace its container line, the company turned to Van Dyk Recycling Solutions and Pellenc ST to supply six Mistral+ CONNECT optical sorters, which brought an increase in the plant's recovery capabilities.</figcaption></figure>
<div style="height: 40px;"></div>
<h3 style="text-align: center; margin-bottom: 25px;">NOVA Circular Solutions</h3>
<p>Van Dyk continues to support innovative circular economy initiatives with advanced sorting and processing technologies.</p>
</div>`
    },
    {
      id: 42,
      title: 'Delivering the Best Solutions to the Customer',
      excerpt: 'Van Dyk presents the newest technologies for cost-efficient recycling. Van Dyk Recycling Solutions has evolved with the recycling industry, originally founded in 1984 as Van Dyk Baler Corporation.',
      category: 'Company News',
      date: '2022-06-14',
      readTime: '11 min read',
      image: '/wp-content/uploads/2022/11/wm_westside_primary_tn.jpg',
      featured: true,
      link: 'https://vdrs.com/news-media/delivering-the-best-solutions-to-the-customer/',
      type: 'html',
      views: '2.8k',
      fullContent: `<div>
<h3 style="text-align: center; font-size: 170%;">Van Dyk presents the newest technologies for cost-efficient recycling</h3>
<figure id="attachment_14791" aria-describedby="caption-attachment_14791" style="width: 720px" class="wp-caption aligncenter"><img fetchpriority="high" decoding="async" class="primg wp-image-14791 size-full" src="/wp-content/uploads/2022/11/wm_westside_primary_fmt-1-722-361.png" alt="Van Dyk Recycling Solutions westside_primary" width="720" height="359" /><figcaption id="caption-attachment_14791" class="wp-caption-text">WM 40-tph single-stream system in Houston</figcaption></figure>
<div style="float: right; margin-left: 15px;">
<figure id="attachment_14794" aria-describedby="caption-attachment_14794" style="width: 180px" class="wp-caption alignright"><img decoding="async" class="size-full wp-image-14794" src="/wp-content/uploads/2022/11/gunther_splitter_fmt-2.png" alt="Gunther SPLITTER" width="180" height="180" /><figcaption id="caption-attachment_14794" class="wp-caption-text">Gunther SPLITTER</figcaption></figure>
</div>
<p>Van Dyk Recycling Solutions has evolved with the recycling industry. Originally founded in 1984 as Van Dyk Baler Corporation, in 2012 the name was changed to Van Dyk Recycling Solutions (Van Dyk) to reflect the firm's successful movement into recycling system integration.</p>
<p>Van Dyk's original mission, to represent Bollegraaf balers in North America, reflects what still drives the company today; to offer best-in-class processing solutions.</p>
<p>"We've always been driven by a collaborative approach with our customers to understand their requirements and provide processing technology to meet that need," says Pieter van Dijk, founder and president.</p>
<p>"We have invested a great deal to understand what technology is available but also to understand how it can be best applied and then integrated into a cost-effective recovery plant," says Pieter van Dijk.</p>
<p>"That's the hard part, getting the integration correct and seamless. We have decades of experience doing that, more than any other provider," shares Erik van Dijk, executive vice president and COO.</p>
<p>While Bollegraaf Recycling Solutions equipment provides the core success to Van Dyk's designs, Van Dyk has continually leveraged cutting-edge technology from other globally leading suppliers like TOMRA and Pellenc (for optical sorting) and Walair (for air separation systems).</p>
<p>As material streams continue to evolve, it drives the need for new and different processing methodologies. Van Dyk has always been committed to diligently researching new technologies that could help improve its customers' bottom lines.</p>
<p>"Today, we're seeing the value of auger screens, and Van Dyk has partnered with Günther screens, the global leader and originator of spiral shaft screening technology," Erik van Dijk says.</p>
<p>"We are constantly searching the globe to find the best solution for our clients. We compare the technology out there to the customer's goals and needs and put together the design we know will work best," says Pieter van Dijk.</p>
<h2>The culmination of experience</h2>
<div style="float: right; margin-left: 15px;">
<figure id="attachment_14795" aria-describedby="caption-attachment_14795" style="width: 180px" class="wp-caption alignright"><img decoding="async" class="size-full wp-image-14795" src="/wp-content/uploads/2022/11/wm_westside_optical_secondary_fmt-3.png" alt="westside_optical_secondary" width="180" height="116" /><figcaption id="caption-attachment_14795" class="wp-caption-text">Optical with DeftAir and DEEP LAISER</figcaption></figure>
</div>
<p>Van Dyk's newest startup, a 40-tph facility built for WM in Houston was modeled after the company's successful designs of the recent past. Pieter van Dijk led the design team by posing this question: "How can we take a design that we already know works and use today's technology to make it more highly automated and more efficient?"</p>
<p>The resulting system incorporates 14 optical sorters cleaning up paper and containers to make clean SCN, SRP and mixed paper grades. All fiber and container grades are sorted and quality controlled by optical sorters. Fewer human sorters are needed throughout the facility, with only a few on presort, OCC quality control, and aluminum QC.</p>
<p>A standout of the system's state-of-the-art technology is DEEP LAISER, an artificial intelligence device that can recognize and eject black plastics (which cannot be seen on the infrared spectrum). DEEP LAISER is implemented on the SCN sort line.</p>
<p>"This is the best system currently running in North America," says Pieter van Dijk. "It is the culmination of all knowledge and experience gained from our facilities built to date."</p>
<h2>Van Dyk University</h2>
<h3>A level of training unavailable elsewhere</h3>
<div style="float: right; margin-left: 15px;"><img loading="lazy" decoding="async" class="alignright size-full wp-image-14801" src="/wp-content/uploads/2022/11/training_room_fmt-4.png" alt="Van Dyk Recycling Solutions training_room" width="329" height="245" /></div>
<p>As material recovery facilities (MRFs) and downstream processing operations become increasingly automated and sophisticated, understanding the technology and maintaining the equipment are vital.</p>
<p>Seeing this, Van Dyk Recycling Solutions made an industry-leading investment in training. In 2016 it opened Van Dyk University to educate customers on the ever-evolving technology in modern MRFs. Located right next to the company's 19,000-square-foot test facility, Van Dyk University offers both classroom and hands-on education.</p>
<p>Programs include baler and optical training. Coursework includes electrical, mechanical and hydraulic systems. Troubleshooting and maintenance are always part of the curriculum.</p>
<p>"These programs are designed to train our customers to become self-sufficient in supporting their equipment," comments Mark Neitzey, sales director at Van Dyk.</p>
<h3>The customers' view</h3>
<p>Van Dyk's commitment to customer success extends beyond equipment installation. The company provides comprehensive training, ongoing support, and continuous innovation to help customers achieve their recycling goals.</p>
</div>`
    },
    {
      id: 43,
      title: 'Recent Developments with Regards to Bollegraaf, Lubo & TOMRA',
      excerpt: 'Company news and developments, October 2013.',
      category: 'Company News',
      date: '2018-03-05',
      readTime: '6 min read',
      image: '/wp-content/uploads/2013/06/12VDRS-CorpHQ2.jpg',
      featured: false,
      link: 'https://vdrs.com/news-media/recent-developments-with-regards-to-bollegraaf-lubo-and-titech-equipment/',
      type: 'html',
      views: '1.5k',
      fullContent: `<div>
<p>Company news and developments, October 2013.</p>
<p>Van Dyk Recycling Solutions continues to expand its partnerships with leading equipment manufacturers including Bollegraaf, Lubo, and TOMRA to provide cutting-edge recycling solutions to customers across North America.</p>
</div>`
    },
    {
      id: 44,
      title: 'Remote Testing Helps MRFs Safely Plan System Improvements',
      excerpt: 'Van Dyk Recycling Solutions has implemented remote testing at their Technology & Testing Center in Norwalk, CT to comply with social-distancing recommendations.',
      category: 'Company News',
      date: '2020-10-30',
      readTime: '2 min read',
      image: '/wp-content/uploads/2020/10/3-Test-Center-215.jpg',
      featured: false,
      link: 'https://vdrs.com/news-media/remote-testing-helps-mrfs-safely-plan-system-improvements/',
      type: 'html',
      views: '1.2k',
      fullContent: `<div>
<p>Van Dyk Recycling Solutions has implemented remote testing at their Technology &amp; Testing Center in Norwalk, CT to comply with social-distancing recommendations. With airline travel becoming less desirable for most, Van Dyk offers a way for customers to do research on potential purchases without putting themselves at risk.</p>
<p>These tests can be particularly useful during the planning stages of a retrofit or new facility. Customers can send material samples to Van Dyk's test facility, where the material is processed through the equipment in question. The customer can then watch the test remotely via video conferencing and receive detailed reports on the results.</p>
<p>This remote testing capability allows MRF operators to safely evaluate equipment and make informed decisions about system improvements without the need for in-person visits.</p>
</div>`
    },
    {
      id: 45,
      title: 'Renewable Energy Project Aims to Raise Santa Barbara Diversions Rate Above 85%',
      excerpt: 'Santa Barbara County, CA has buried about 200,000 tons of annual trash in its Tajiguas Landfill since 1967. The landfill was on track to hit its capacity in about six years from now, until the announcement of a renewable energy project.',
      category: 'Sustainability',
      date: '2019-10-23',
      readTime: '3 min read',
      image: '/wp-content/uploads/2019/10/Santa-Barbara-215x115.jpg',
      featured: false,
      link: 'https://vdrs.com/news-media/renewable-energy-project-aims-to-raise-santa-barbara-diversions-rate-above-85/',
      type: 'html',
      views: '1.4k',
      fullContent: `<div>
<p>Santa Barbara County, CA has buried about 200,000 tons of annual trash in its Tajiguas Landfill since 1967. The landfill was on track to hit its capacity in about six years from now, until the announcement of a renewable energy project that is expected to extend its life by an additional decade.</p>
<p>The ReSource Center will allow the county to truck in and process its own waste, turning it into renewable energy and recyclable materials. This innovative project represents a significant step forward in sustainable waste management.</p>
</div>`
    },
    {
      id: 46,
      title: 'Rhode Island Dual Stream MRF Converted to Single Stream',
      excerpt: 'In a seamless transition, the Rhode Island Resource Recovery Corp. (RIRRC) started operations on its new single stream material recovery facility (MRF).',
      category: 'Case Studies',
      date: '2015-02-23',
      readTime: '4 min read',
      image: '/wp-content/uploads/2013/10/1RIRRC-s.jpg',
      featured: false,
      link: 'https://vdrs.com/news-media/rhode-island-resource-recovery-corporation-dual-stream-mrf-converted-to-single-stream/',
      type: 'html',
      views: '1.3k',
      fullContent: `<div>
<p>In a seamless transition, the Rhode Island Resource Recovery Corp. (RIRRC) started operations on its new single stream material recovery facility (MRF). The conversion from dual stream to single stream processing represents a significant upgrade in the facility's capabilities and efficiency.</p>
</div>`
    },
    {
      id: 47,
      title: 'Santa Barbara County Unveils Renewable Energy Facility in Grand Opening',
      excerpt: 'July 20, 2021 – Friday, July 16 saw a gathering of county officials, staff, engineers and contractors at the Tajiguas landfill in Santa Barbara, CA for the grand opening of the County\'s new recycling and waste management facility.',
      category: 'Sustainability',
      date: '2021-07-27',
      readTime: '4 min read',
      image: '/wp-content/uploads/2021/07/santa-barbara-grand-opening-215.jpg',
      featured: true,
      link: 'https://vdrs.com/news-media/santa-barbara-county-unveils-renewable-energy-facility-in-grand-opening/',
      type: 'html',
      views: '1.8k',
      fullContent: `<div>
<p>July 20, 2021 – Friday, July 16 saw a gathering of county officials, staff, engineers and contractors at the Tajiguas landfill in Santa Barbara, CA for the grand opening of the County's new recycling and waste management facility. The ReSource Center will allow the county to truck in and process its own waste, turning it into renewable energy and recyclable materials.</p>
<p>This state-of-the-art facility represents a major milestone in sustainable waste management and renewable energy production for Santa Barbara County.</p>
</div>`
    },
    {
      id: 48,
      title: 'Second Densimetric Table in U.S. Installed at ZWEDC in San Jose, CA',
      excerpt: 'August 24, 2015 – Zero Waste Energy Development Company LLC (ZWEDC) of San Jose, CA purchased the second densimetric table in the U.S. The first d-table went to sister company Z-Best Composting Facility of Gilroy, CA, in 2013.',
      category: 'Product Updates',
      date: '2018-03-19',
      readTime: '2 min read',
      image: '/wp-content/uploads/2015/08/28Dtable_ZWED_3-215.jpg',
      featured: false,
      link: 'https://vdrs.com/news-media/second-densimetric-table-in-u-s-installed-atzwedc-in-san-jose-ca/',
      type: 'html',
      views: '1.1k',
      fullContent: `<div>
<p>August 24, 2015 – Zero Waste Energy Development Company LLC (ZWEDC) of San Jose, CA purchased the second densimetric table in the U.S. The first d-table went to sister company Z-Best Composting Facility of Gilroy, CA, in 2013. Both were installed by Connecticut based system supplier VAN DYK Recycling Solutions.</p>
</div>`
    },
    {
      id: 49,
      title: 'Simple Retrofit at Great Northern Fibers Has Major Impact on OCC and News Recovery',
      excerpt: 'Feb. 21, 2021 – In a bid to recover more value in existing materials, Great Northern Fibers LCC of West Babylon, NY sought to upgrade their fiber sorting line to a more automatic design.',
      category: 'Case Studies',
      date: '2021-03-12',
      readTime: '4 min read',
      image: '/wp-content/uploads/2021/03/Baled-news-215.jpg',
      featured: false,
      link: 'https://vdrs.com/news-media/simple-retrofit-at-great-northern-fibers-has-major-impact-on-occ-and-news-recovery-2/',
      type: 'html',
      views: '1.3k',
      fullContent: `<div>
<p>Feb. 21, 2021 – In a bid to recover more value in existing materials, Great Northern Fibers LCC of West Babylon, NY sought to upgrade their fiber sorting line to a more automatic design. The fiber system alternates processing commercial fiber and residential dual stream news from Long Island communities on the same sort line.</p>
</div>`
    },
    {
      id: 50,
      title: 'SIMS Leverages VAN DYK Technology to Produce Clean Recyclables',
      excerpt: 'Sims Municipal Recycling built its highly sophisticated MRF in Brooklyn, NY, with designs and Bollegraaf and TOMRA equipment from VAN DYK Recycling Solutions.',
      category: 'Case Studies',
      date: '2018-03-09',
      readTime: '9 min read',
      image: '/wp-content/uploads/2013/06/16-SIMS-s.jpg',
      featured: true,
      link: 'https://vdrs.com/news-media/sims-leverages-van-dyk-technology-to-produce-clean-recyclables/',
      type: 'html',
      views: '2.1k',
      fullContent: `<div>
<p>Sims Municipal Recycling built its highly sophisticated MRF in Brooklyn, NY, with designs and Bollegraaf and TOMRA equipment from VAN DYK Recycling Solutions. The facility represents one of the most advanced material recovery operations in North America.</p>
</div>`
    },
    {
      id: 51,
      title: 'Sims Recycling Opens Bollegraaf Commingled Container Stream NYC',
      excerpt: 'The MRF can process 1,000 tons per day and features 16 TOMRA AUTOSORT 4 optical sorters, which will identify and sort 12 different marketable products for the city.',
      category: 'Case Studies',
      date: '2018-03-11',
      readTime: '3 min read',
      image: '/wp-content/uploads/2013/06/20SIMSgrandopening215.jpg',
      featured: true,
      link: 'https://vdrs.com/news-media/sims-recycling-bollegraaf-commingled-container-stream-nyc/',
      type: 'html',
      views: '1.9k',
      fullContent: `<div>
<p>The MRF can process 1,000 tons per day and features 16 TOMRA AUTOSORT 4 optical sorters, which will identify and sort 12 different marketable products for the city. This represents a significant advancement in New York City's recycling capabilities.</p>
</div>`
    },
    {
      id: 52,
      title: 'Son of Baling Wire Mogul Joins Van Dyk Recycling Solutions',
      excerpt: 'Van Dyk adds a new member to its inside sales team. Jericho Swimmer, graduate of Drexel University with a degree in marketing and finance, brings with him some inside knowledge of the industry.',
      category: 'Company News',
      date: '2020-10-30',
      readTime: '2 min read',
      image: '/wp-content/uploads/2018/03/Signature_logo_wt_bg215x115-b.png',
      featured: false,
      link: 'https://vdrs.com/news-media/son-of-baling-wire-mogul-joins-van-dyk-recycling-solutions/',
      type: 'html',
      views: '1.0k',
      fullContent: `<div>
<p>Van Dyk adds a new member to its inside sales team. Jericho Swimmer, graduate of Drexel University with a degree in marketing and finance, brings with him some inside knowledge of the industry. Jericho is the son of Joshua Swimmer, a 40+ year veteran of the Baling Wire industry, most recently associated with Accent Wire.</p>
</div>`
    },
    {
      id: 53,
      title: 'The New Anti Wrapping StarScreen® from Lubo - Up to 50 tph',
      excerpt: 'The AWS StarScreen® can process up to 50 tph, divert 95% of <2" organic fines with virtually no wrapping or cleaning needs & achieve high purity with aggressive agitation.',
      category: 'Product Updates',
      date: '2018-02-28',
      readTime: '2 min read',
      image: '/wp-content/uploads/2013/10/6AWS-StarScreen-s.jpg',
      featured: false,
      link: 'https://vdrs.com/news-media/the-new-anti-wrapping-starscreen-from-lubo/',
      type: 'html',
      views: '1.2k',
      fullContent: `<div>
<p>The AWS StarScreen® can process up to 50 tph, divert 95% of &lt;2" organic fines with virtually no wrapping or cleaning needs &amp; achieve high purity with aggressive agitation. This represents a significant advancement in screening technology for material recovery facilities.</p>
</div>`
    }
  ];

  // Customer news articles (converted to Article format)
  const customerNewsArticles: Article[] = [
    {
      id: 1001,
      title: 'Yes Recycling Newark NJ Achieves 95% Recovery Rate with Bollegraaf Baler',
      excerpt: 'Municipal recycling facility in New Jersey reports exceptional performance improvements after installing Van Dyk\'s Bollegraaf HBC 140 baler system.',
      category: 'Success Story',
      date: '2024-12-20',
      readTime: '6 min read',
      image: '/Images/bollegraaf-products.jpg',
      link: 'https://vdrs.com/customers/yes-recycling-newark-success/',
      type: 'html',
      views: '3.2k',
      trending: true,
      fullContent: '<p>Yes Recycling in Newark, New Jersey has achieved remarkable success with their new Bollegraaf HBC 140 baler system...</p>'
    },
    {
      id: 1002,
      title: 'Premier Surplus Dawsonville GA Expands E-Scrap Processing Capabilities',
      excerpt: 'Leading electronic waste processor enhances their operations with advanced TOMRA optical sorting technology.',
      category: 'Expansion',
      date: '2024-12-18',
      readTime: '5 min read',
      image: '/Images/tomra-optical-sorting.jpg',
      link: 'https://vdrs.com/customers/premier-surplus-expansion/',
      type: 'html',
      views: '2.8k',
      fullContent: '<p>Premier Surplus has expanded their e-scrap processing capabilities...</p>'
    },
    {
      id: 1003,
      title: 'Municipal MRF in California Reduces Contamination by 40%',
      excerpt: 'City recycling facility implements advanced sorting technology resulting in significantly cleaner material streams.',
      category: 'Innovation',
      date: '2024-12-15',
      readTime: '7 min read',
      image: '/Images/single-stream-recycling.jpg',
      link: 'https://vdrs.com/customers/california-mrf-contamination-reduction/',
      type: 'html',
      views: '2.1k',
      trending: true,
      fullContent: '<p>Municipal MRF in California has reduced contamination by 40%...</p>'
    },
    {
      id: 1004,
      title: 'Food Waste Processing Facility Achieves Zero Waste to Landfill',
      excerpt: 'Commercial food waste processor reaches sustainability milestone with Smicon depackaging technology.',
      category: 'Sustainability',
      date: '2024-12-12',
      readTime: '4 min read',
      image: '/Images/smicon-depackager.jpg',
      link: 'https://vdrs.com/customers/food-waste-zero-landfill/',
      type: 'html',
      views: '1.9k',
      fullContent: '<p>Food waste processing facility achieves zero waste to landfill...</p>'
    },
    {
      id: 1005,
      title: 'Multi-MRF System Increases Processing Capacity by 60%',
      excerpt: 'Regional waste management company doubles their processing capabilities with integrated MRF technology.',
      category: 'Capacity',
      date: '2024-12-10',
      readTime: '8 min read',
      image: '/Images/mrf-systems.jpg',
      link: 'https://vdrs.com/customers/multi-mrf-capacity-increase/',
      type: 'html',
      views: '2.5k',
      fullContent: '<p>Multi-MRF system increases processing capacity by 60%...</p>'
    },
    {
      id: 1006,
      title: 'Construction Waste Processor Improves Material Recovery',
      excerpt: 'C&D waste facility enhances sorting efficiency with advanced screening and optical sorting technology.',
      category: 'Efficiency',
      date: '2024-12-08',
      readTime: '5 min read',
      image: '/Images/cd-recycling.jpg',
      link: 'https://vdrs.com/customers/cd-waste-recovery-improvement/',
      type: 'html',
      views: '1.7k',
      fullContent: '<p>Construction waste processor improves material recovery...</p>'
    },
    {
      id: 1007,
      title: 'Plastics Recycling Facility Achieves Food-Grade Quality',
      excerpt: 'Advanced sorting technology enables production of high-quality recycled plastics for food packaging.',
      category: 'Quality',
      date: '2024-12-05',
      readTime: '6 min read',
      image: '/Images/plastics-recycling.jpg',
      link: 'https://vdrs.com/customers/plastics-food-grade-quality/',
      type: 'html',
      views: '2.3k',
      trending: true,
      fullContent: '<p>Plastics recycling facility achieves food-grade quality...</p>'
    },
    {
      id: 1008,
      title: 'Composting Facility Reduces Processing Time by 50%',
      excerpt: 'Organic waste processor streamlines operations with densimetric table technology.',
      category: 'Innovation',
      date: '2024-12-03',
      readTime: '4 min read',
      image: '/Images/densimetric-table.jpg',
      link: 'https://vdrs.com/customers/composting-time-reduction/',
      type: 'html',
      views: '1.5k',
      fullContent: '<p>Composting facility reduces processing time by 50%...</p>'
    },
    {
      id: 1009,
      title: 'MSW Processing Plant Achieves 99% Uptime',
      excerpt: 'Municipal solid waste facility maintains exceptional operational reliability with advanced equipment.',
      category: 'Reliability',
      date: '2024-12-01',
      readTime: '5 min read',
      image: '/Images/msw-processing.jpg',
      link: 'https://vdrs.com/customers/msw-99-percent-uptime/',
      type: 'html',
      views: '1.8k',
      fullContent: '<p>MSW processing plant achieves 99% uptime...</p>'
    },
    {
      id: 1010,
      title: 'E-Scrap Processor Implements AI-Powered Sorting',
      excerpt: 'Electronic waste facility adopts artificial intelligence for enhanced material identification and sorting.',
      category: 'Technology',
      date: '2024-11-28',
      readTime: '7 min read',
      image: '/Images/greyparrot-ai-recognition.jpg',
      link: 'https://vdrs.com/customers/e-scrap-ai-sorting/',
      type: 'html',
      views: '2.6k',
      fullContent: '<p>E-Scrap processor implements AI-powered sorting...</p>'
    }
  ];

  // Combine all news articles
  const allNews: Article[] = [...(newsData || []), ...(customerNewsArticles || [])];

  // Sort by date (most recent first)
  const sortedNews = [...allNews].sort((a, b) => {
    try {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateB - dateA;
    } catch (error) {
      console.error('Error sorting news by date:', error);
      return 0;
    }
  });

  // Get unique categories from all news
  const categories = ['All', ...Array.from(new Set(sortedNews.map(article => article.category).filter(Boolean)))];

  const handleArticleClick = (article: Article) => {
    setSelectedArticle(article);
    setShowArticleModal(true);
  };

  const closeArticleModal = () => {
    setShowArticleModal(false);
    setSelectedArticle(null);
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const filteredNews = (sortedNews || []).filter(article => {
    if (!article) return false;
    const matchesFilter = activeFilter === 'All' || article.category === activeFilter;
    return matchesFilter;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative text-white py-20 -mt-20 pt-20 overflow-hidden">
        {/* HD Background Image */}
        <img 
          src={IMAGE_ASSIGNMENTS.newsMedia.hero}
          alt="News & Media"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
          width="1920"
          height="1080"
          loading="eager"
          decoding="sync"
          onError={(e) => {
            e.currentTarget.src = '/Images/first.jpg';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40"></div>
        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Latest News
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Stay informed with the latest industry insights, company updates, customer success stories, and technological breakthroughs in recycling and waste management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/solutions"
                  className="bg-vd-orange hover:bg-vd-orange-alt text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 hover:scale-105 flex items-center justify-center"
                >
                  Explore Solutions
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
                <h3 className="text-xl font-semibold mb-4">Why Choose Van Dyk?</h3>
                <ul className="space-y-3 text-blue-100">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-vd-orange rounded-full mr-3"></div>
                    40+ years of industry experience
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-vd-orange rounded-full mr-3"></div>
                    2400+ successful installations
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-vd-orange rounded-full mr-3"></div>
                    Comprehensive support & training
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-vd-orange rounded-full mr-3"></div>
                    Cutting-edge technology solutions
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content with Sidebar */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sticky top-8">
              <h2 className="text-xl font-bold text-vd-blue mb-4">News & Media</h2>
              <nav className="space-y-2">
                {sidebarItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-4 py-3 rounded-lg transition-all duration-200 ${
                      item.isActive
                        ? 'bg-vd-blue text-white shadow-md'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-vd-blue'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    activeFilter === category
                      ? 'bg-vd-orange text-white shadow-md'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* View Toggle */}
            <div className="flex bg-gray-50 rounded-xl p-1 border border-gray-200">
              <button 
                onClick={() => setActiveView('grid')}
                className={`p-2 rounded-lg transition-all ${
                  activeView === 'grid' ? 'bg-white text-vd-orange shadow-sm' : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setActiveView('list')}
                className={`p-2 rounded-lg transition-all ${
                  activeView === 'list' ? 'bg-white text-vd-orange shadow-sm' : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* All Articles Grid - No Featured Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-vd-blue mb-6">Latest News</h2>
          {filteredNews && filteredNews.length > 0 ? (
          <div className={`grid gap-6 ${
            activeView === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {filteredNews.map((article) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer ${
                  activeView === 'list' ? 'flex' : ''
                }`}
                onClick={() => handleArticleClick(article)}
              >
                <div className={`relative overflow-hidden ${
                  activeView === 'list' ? 'w-1/3 h-48' : 'h-48'
                }`}>
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    width={activeView === 'list' ? "300" : "400"}
                    height="192"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = '/Images/first.jpg';
                    }}
                  />
                  {article.trending && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        Trending
                      </span>
                    </div>
                  )}
                </div>
                <div className={`p-6 ${activeView === 'list' ? 'flex-1' : ''}`}>
                  <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(article.date)}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {article.readTime}
                    </span>
                    <span className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      {article.views}
                    </span>
                  </div>
                  <h3 className={`font-bold text-vd-blue mb-3 leading-tight group-hover:text-vd-orange transition-colors ${
                    activeView === 'list' ? 'text-lg' : 'text-xl'
                  }`}>
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-vd-orange bg-orange-50 px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                    <ArrowRight className="w-5 h-5 text-vd-orange group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No articles found</h3>
            <p className="text-gray-500">Try adjusting your filters.</p>
          </div>
          )}
        </div>
          </div>
        </div>
      </div>

      {/* Article Modal */}
      <AnimatePresence>
        {showArticleModal && selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeArticleModal}
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
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover opacity-80"
                  width="800"
                  height="256"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = '/Images/first.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
                  <h2 className="text-4xl font-bold text-white mb-2 leading-tight">{selectedArticle.title}</h2>
                </div>
                <button
                  onClick={closeArticleModal}
                  className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors bg-black/30 rounded-full p-2"
                  aria-label="Close article modal"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto scrollbar-thin scrollbar-thumb-vd-orange scrollbar-track-gray-100 max-h-[calc(90vh-16rem)]">
                <div className="flex items-center text-sm text-gray-600 mb-4 space-x-4">
                  <span>{selectedArticle.category}</span>
                  <span>•</span>
                  <span>{formatDate(selectedArticle.date)}</span>
                  <span>•</span>
                  <span>{selectedArticle.readTime}</span>
                </div>
                {selectedArticle.fullContent ? (
                  <div className="prose max-w-none text-gray-800 leading-relaxed" dangerouslySetInnerHTML={{ __html: selectedArticle.fullContent }} />
                ) : (
                  <div className="space-y-4">
                    <p className="text-gray-800 leading-relaxed text-lg">
                      {selectedArticle.excerpt}
                    </p>
                    <a 
                      href={selectedArticle.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center text-vd-orange hover:text-vd-orange-alt font-medium"
                    >
                      Read the full article
                      <ExternalLink className="inline-block w-4 h-4 ml-1" />
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Quote Form Modal */}
      {showQuoteForm && <QuoteForm />}
    </div>
  );
};

export default NewsMedia;