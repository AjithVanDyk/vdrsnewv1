import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Filter, Search, ExternalLink, FileText, Users, Award, Building, ChevronRight, Play, BookOpen, Star, Video, Lightbulb, Trophy, TrendingUp, Eye, Share2, Bell, Download, ChevronDown, Globe } from 'lucide-react';

const NewsMedia = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [showNewsletter, setShowNewsletter] = useState(false);
  const [activeView, setActiveView] = useState('news');

  // All news articles data
  const newsData = [
    {
      id: 1,
      title: '2024 Marks Strong Year for Van Dyk',
      excerpt: 'New installations, deals and partnerships mark strong year for Van Dyk Recycling Solutions. NOVA Circular Solutions opens film recycling plant, Freepoint Eco-Systems begins chemical recycling, and multiple major facility openings across North America.',
      category: 'Company News',
      date: '2024-12-20',
      readTime: '8 min read',
      image: 'https://vdrs.com/wp-content/uploads/2025/01/1a-NOVA-Circular-Solutions-to-open-film-recycling-plant.jpg',
      featured: true,
      link: 'https://vdrs.com/news-media/2024-marks-strong-year-for-van-dyk/',
      type: 'html',
      views: '2.1K',
      trending: true
    },
    {
      id: 2,
      title: 'Van Dyk Partners with Reckelberg Environmental Technologies to Enable North American Customers to Recycle EV Batteries',
      excerpt: 'December 13, 2024 — Van Dyk Recycling Solutions has signed a contract to sell equipment from Reckelberg Environmental Technologies (RET) to recycle lithium-ion batteries of all kinds and scrap fractions from battery production, especially EV batteries containing rare and valuable raw materials.',
      category: 'Partnerships',
      date: '2024-12-13',
      readTime: '6 min read',
      image: 'https://vdrs.com/wp-content/uploads/2025/01/19a-Van-Dyk-partners-with-battery-recycler.jpg',
      featured: true,
      link: 'https://vdrs.com/news-media/van-dyk-partners-with-reckelberg-environmental-technologies-to-enable-north-american-customers-to-recycle-ev-batteries/',
      type: 'html',
      views: '1.8K',
      trending: true
    },
    {
      id: 3,
      title: 'Van Dyk Presents Its Newest Technologies for Cost-Efficient Recycling – October 2024',
      excerpt: 'Read about new technologies and products that enhance safety, materials identification, odor control, and more in Van Dyk\'s comprehensive technology overview.',
      category: 'Technology',
      date: '2024-12-01',
      readTime: 'PDF Document',
      image: '/Images/image-1749759502636.png',
      featured: false,
      link: 'https://vdrs.com/wp-content/uploads/2024/12/van-dyk-4pg-advertorial-oct-2024.pdf',
      type: 'pdf',
      views: '892',
      trending: false
    },
    {
      id: 4,
      title: 'Equipment Enhancements Help Sunnyvale\'s Organics Operations Achieve Close to 90% Organic Recovery',
      excerpt: 'Leading edge depackaging system increased the City\'s food waste recovery, capacity, and efficiency. November 21, 2024 — The City of Sunnyvale, CA has completed an installation of a full-scale replacement of their existing food waste depackaging system to comply with California\'s SB1383 mandate.',
      category: 'Case Studies',
      date: '2024-11-21',
      readTime: '7 min read',
      image: 'https://vdrs.com/wp-content/uploads/2025/01/14a-Sunnyvale-CA-improves-organics-system-with-Smicon-equipment.jpg',
      featured: false,
      link: 'https://vdrs.com/news-media/equipment-enhancements-help-sunnyvales-organics-operations-achieve-close-to-90-organic-recovery/',
      type: 'html',
      views: '1.3K',
      trending: false
    },
    {
      id: 5,
      title: 'Van Dyk Recycling Solutions Hires Enrico Siewert as Director of Business Development – Plastics',
      excerpt: 'Van Dyk Recycling Solutions welcomes Enrico Siewert in the role of Director of Business Development – Plastics. An experienced executive specializing in recycling systems, Siewert brings 20 years\' experience in the plastics industry and a strong background in developing innovative processes.',
      category: 'Company News',
      date: '2024-10-15',
      readTime: '5 min read',
      image: 'https://vdrs.com/wp-content/uploads/2025/01/18a-Van-Dyk-hires-plastics-expert-to-expand-offerings.jpg',
      featured: false,
      link: 'https://vdrs.com/news-media/van-dyk-recycling-solutions-hires-enrico-siewert-as-director-of-business-development-plastics/',
      type: 'html',
      views: '756',
      trending: false
    },
    {
      id: 6,
      title: 'Greyparrot and Van Dyk Partner to Revolutionize U.S. Waste Sorting and Processing with AI',
      excerpt: 'Bollegraaf\'s exclusive distributor in the U.S. will deploy AI waste analytics from Greyparrot Analyzers. LAS VEGAS, May 2, 2024 — Strategic alliance formalized ahead of WasteExpo 2024, with Van Dyk serving as sole distributor of the Greyparrot Analyzer across all 50 states.',
      category: 'Technology',
      date: '2024-05-02',
      readTime: '8 min read',
      image: 'https://vdrs.com/wp-content/uploads/2025/01/9a-Greyparrot-Analyzer-try-before-you-buy.jpg',
      featured: false,
      link: 'https://vdrs.com/news-media/greyparrot-and-van-dyk-partner-to-revolutionize-u-s-waste-sorting-and-processing-with-ai/',
      type: 'html',
      views: '2.4K',
      trending: true
    },
    {
      id: 7,
      title: 'Van Dyk in 2023: Major Projects and Expansions',
      excerpt: 'A closer look at the major projects and expansions in Van Dyk\'s 2023 portfolio including Murphy Road Recycling, FCC Environmental Services, WM Automated Single-Stream Systems, Crown Shred & Recycling, GFL\'s "Future-Ready" MRF, Penn Waste System Rebuild, and more major installations.',
      category: 'Company News',
      date: '2024-01-11',
      readTime: '10 min read',
      image: '/Images/image-1749759479881.png',
      featured: false,
      link: 'https://vdrs.com/news-media/van-dyk-in-2023-major-projects-and-expansions/',
      type: 'html',
      views: '1.9K',
      trending: false
    },
    {
      id: 8,
      title: 'Van Dyk in 2022: From New Designs to Startups',
      excerpt: 'Catch up on some of the biggest news from Van Dyk in 2022 including new system startups, innovative design implementations, and major facility completions across North America.',
      category: 'Company News',
      date: '2023-01-15',
      readTime: '7 min read',
      image: '/Images/image-1749759499434.png',
      featured: false,
      link: 'https://vdrs.com/news-media/van-dyk-in-2022-from-new-designs-to-startups/',
      type: 'html',
      views: '1.2K',
      trending: false
    },
    {
      id: 9,
      title: 'Delivering the Best Solutions to the Customer',
      excerpt: 'Van Dyk presents the newest technologies for cost-efficient recycling, featuring WM 40-tph automated single-stream systems and innovative equipment solutions.',
      category: 'Technology',
      date: '2022-12-01',
      readTime: '6 min read',
      image: '/Images/image-1749759490576.png',
      featured: false,
      link: 'https://vdrs.com/news-media/delivering-the-best-solutions-to-the-customer/',
      type: 'html',
      views: '934',
      trending: false
    },
    {
      id: 10,
      title: 'Freepoint Eco-Systems Works with Van Dyk to Open Advanced Plastic Recycling Facility in U.S.',
      excerpt: 'Norwalk, CT, May 6, 2022 – Freepoint Eco-Systems LLC is committed to helping solve the plastic waste problem through advanced recycling solutions and partnerships with leading technology providers.',
      category: 'Partnerships',
      date: '2022-05-06',
      readTime: '5 min read',
      image: 'https://vdrs.com/wp-content/uploads/2025/01/2a-Freepoint-Eco-Systems-LLC-begins-chemical-recycling-of-plastics.jpg',
      featured: false,
      link: 'https://vdrs.com/news-media/freepoint-eco-systems-works-with-van-dyk-to-open-advanced-plastic-recycling-facility-in-u-s/',
      type: 'html',
      views: '1.5K',
      trending: false
    },
    {
      id: 11,
      title: 'Van Dyk Recycling Solutions Introduces Günther SPLITTER Screen to Its Line of MRF Equipment',
      excerpt: 'Feb. 2, 2022 – Van Dyk Recycling Solutions welcomes their newest equipment partner Günther to continue supplying world-class recycling solutions. The German manufacturer specializes in screening technology and is the original designer of spiral shaft screen technology.',
      category: 'Product Launch',
      date: '2022-02-02',
      readTime: '4 min read',
      image: '/Images/image-1749759502636.png',
      featured: false,
      link: 'https://vdrs.com/news-media/van-dyk-recycling-solutions-introduces-gunther-splitter-screen-to-its-line-of-mrf-equipment-2/',
      type: 'html',
      views: '678',
      trending: false
    },
    {
      id: 12,
      title: 'Systems that Minimize Labor while Maximizing Throughput, Recovery, and Quality',
      excerpt: 'Read how the newest systems from Van Dyk minimize or eliminate labor while maximizing throughput, recovery, and quality in recycling operations through innovative automation.',
      category: 'Technology',
      date: '2021-10-01',
      readTime: 'PDF Document',
      image: '/Images/image-1749759490576.png',
      featured: false,
      link: 'https://vdrs.com/wp-content/uploads/2021/10/Systems-that-Minimize-Labor-Oct-2021.pdf',
      type: 'pdf',
      views: '823',
      trending: false
    },
    {
      id: 13,
      title: 'Santa Barbara County Unveils Renewable Energy Facility in Grand Opening',
      excerpt: 'July 20, 2021 – Friday, July 16 saw a gathering of county officials, staff, engineers and community leaders to celebrate the grand opening of this innovative renewable energy facility.',
      category: 'Case Studies',
      date: '2021-07-20',
      readTime: '6 min read',
      image: '/Images/image-1749759487003.png',
      featured: false,
      link: 'https://vdrs.com/news-media/santa-barbara-county-unveils-renewable-energy-facility-in-grand-opening/',
      type: 'html',
      views: '1.1K',
      trending: false
    },
    {
      id: 14,
      title: 'Murphy Road Recycling Announces $30 Million State of the Art All American Recycling Facility',
      excerpt: 'Facility designed and supplied by Van Dyk Recycling Solutions of Norwalk, CT. Groundbreaking project in the Town of Berlin representing the latest in recycling technology.',
      category: 'Case Studies',
      date: '2021-06-15',
      readTime: '7 min read',
      image: 'https://vdrs.com/wp-content/uploads/2025/01/10a-Murphy-Road-Recycling-LLC-invests-in-AI-software.jpg',
      featured: false,
      link: 'https://vdrs.com/news-media/murphy-road-recycling-announces-30-million-state-of-the-art-all-american-recycling-facility-in-town-of-berlin/',
      type: 'html',
      views: '1.6K',
      trending: false
    },
    {
      id: 15,
      title: 'Simple Retrofit at Great Northern Fibers Has Major Impact on OCC and News Recovery',
      excerpt: 'Feb. 21, 2021 - In a bid to recover more value in existing materials, Great Northern Fibers LLC of West Babylon, NY sought to upgrade their fiber sorting line to a more automatic design, resulting in dramatically increased OCC tonnage and improved product quality.',
      category: 'Case Studies',
      date: '2021-02-21',
      readTime: '6 min read',
      image: '/Images/image-1749759479881.png',
      featured: false,
      link: 'https://vdrs.com/news-media/simple-retrofit-at-great-northern-fibers-has-major-impact-on-occ-and-news-recovery-2/',
      type: 'html',
      views: '945',
      trending: false
    }
  ];

  // Video content data
  const videoData = [
    {
      id: 1,
      title: 'Van Dyk Recycling Solutions and Greyparrot at Waste Expo 2025',
      description: 'Van Dyk\'s partner Greyparrot demonstrates its AI-based waste intelligence platform along with its latest AI models and tools, such as its Analyzer Portal that helps MRF processors optimize their systems and increase their return on investment.',
      category: 'Trade Shows',
      duration: '3:45',
      thumbnail: 'https://vdrs.com/wp-content/uploads/2025/01/9a-Greyparrot-Analyzer-try-before-you-buy.jpg',
      link: 'https://vdrs.com/videos/van-dyk-recycling-solutions-and-greyparrot-at-waste-expo-2025/',
      featured: true,
      views: '3.2K'
    },
    {
      id: 2,
      title: 'Van Dyk Recycling Solutions and SMICON at Waste Expo 2025',
      description: 'Van Dyk\'s partner SMICON demonstrates its depackaging and organics recycling equipment, pointing out the unique features and benefits of SMICON\'s machines to waste handling and food processing companies.',
      category: 'Equipment Demos',
      duration: '4:12',
      thumbnail: 'https://vdrs.com/wp-content/uploads/2025/01/14a-Sunnyvale-CA-improves-organics-system-with-Smicon-equipment.jpg',
      link: 'https://vdrs.com/videos/van-dyk-recycling-solutions-and-smicon-at-waste-expo-2025-las-vegas-nv/',
      featured: true,
      views: '2.8K'
    },
    {
      id: 3,
      title: 'Van Dyk Recycling Solutions and Centriair at Waste Expo 2025',
      description: 'Centriair, a partner of Van Dyk Recycling Solutions, demonstrates its odor and VOC treatment technologies that result in a 99.5% reduction of odors in MRFs.',
      category: 'Environmental Solutions',
      duration: '2:58',
      thumbnail: '/Images/image-1749759502636.png',
      link: 'https://vdrs.com/videos/van-dyk-recycling-solutions-and-centriair-at-waste-expo-2025/',
      featured: false,
      views: '1.9K'
    },
    {
      id: 4,
      title: 'Van Dyk Recycling Solutions and Reckelberg Environmental Technologies at Waste Expo 2025',
      description: 'Van Dyk\'s partner, Reckelberg Environmental Technologies, explains the benefits of their innovative battery recycling technology.',
      category: 'Battery Recycling',
      duration: '3:22',
      thumbnail: 'https://vdrs.com/wp-content/uploads/2025/01/19a-Van-Dyk-partners-with-battery-recycler.jpg',
      link: 'https://vdrs.com/videos/van-dyk-recycling-solutions-and-reckelberg-environmental-technologies-at-waste-expo-2025/',
      featured: false,
      views: '2.1K'
    },
    {
      id: 5,
      title: 'Lubo Elliptical Separator',
      description: 'The Lubo Elliptical Separator sorts 2D, 3D, and minus materials. It performs a final removal of fiber and film before 3D containers move on for further sorting.',
      category: 'Equipment Demos',
      duration: '2:35',
      thumbnail: '/Images/image-1749759490576.png',
      link: 'https://vdrs.com/videos/lubo-elliptical-separator/',
      featured: false,
      views: '1.4K'
    },
    {
      id: 6,
      title: 'Smimo 120 Depackager – Organic Food Waste Processing',
      description: 'Riley Casey, Southwest Sales Manager for Van Dyk Recycling Solutions, explains the unique features and benefits of the Smimo 120 depackaging machine at Waste Expo 2023.',
      category: 'Food Waste',
      duration: '4:45',
      thumbnail: '/Images/image-1749759487003.png',
      link: 'https://vdrs.com/videos/smimo-120-depackager-organic-food-waste-processing/',
      featured: false,
      views: '2.3K'
    },
    {
      id: 7,
      title: 'Van Dyk Baler Rebuild Center',
      description: 'See our team of in-house technicians rebuild a used baler from start to finish. Our rebuilt balers are thoroughly inspected for parts needing repair or replacement.',
      category: 'Service & Support',
      duration: '5:18',
      thumbnail: '/Images/image-1749759499434.png',
      link: 'https://vdrs.com/videos/van-dyk-baler-rebuild-center/',
      featured: false,
      views: '1.7K'
    },
    {
      id: 8,
      title: 'Our Parts & Service Guarantee',
      description: 'Van Dyk Recycling Solutions has always been dedicated to customer service. Now, more than ever, we are working as hard as we can to provide the same great support.',
      category: 'Service & Support',
      duration: '1:52',
      thumbnail: '/Images/image-1749759479881.png',
      link: 'https://vdrs.com/videos/our-parts-service-guarantee/',
      featured: false,
      views: '1.2K'
    }
  ];

  // Expert tips data
  const expertTipsData = [
    {
      id: 1,
      title: 'Five Questions about Food Waste Depackagers',
      excerpt: 'Florian covers a breadth of topics about food waste depackagers in this informative Q&A. Click to find out why you should add a depackager, what the end markets are, and more.',
      author: 'Florian Eenkema van Dijk',
      category: 'Equipment Advice',
      readTime: '6 min read',
      link: 'https://vdrs.com/expert-tips/five-questions-about-food-waste-depackagers/',
      type: 'html',
      featured: true,
      views: '1.8K'
    },
    {
      id: 2,
      title: 'How AI Helps Recovery Facilities Turn Waste Data into Action',
      excerpt: 'Take a look at how our customers increase efficiency and profits with actionable waste analytics from Greyparrot Analyzer.',
      author: 'Greyparrot AI',
      category: 'AI & Technology',
      readTime: 'PDF Document',
      link: 'https://vdrs.com/wp-content/uploads/2024/08/Greyparrot_Helping-recovery-facilities.pdf',
      type: 'pdf',
      featured: true,
      views: '2.4K'
    },
    {
      id: 3,
      title: 'Five Questions About Future-Proof MRF Design',
      excerpt: 'As material streams change, here are the top 5 questions customers ask Alex about future-proofing their MRF designs.',
      author: 'Alex Wolf',
      category: 'MRF Design',
      readTime: '8 min read',
      link: 'https://vdrs.com/expert-tips/five-questions-about-future-proof-mrf-design/',
      type: 'html',
      featured: false,
      views: '1.9K'
    },
    {
      id: 4,
      title: 'Learning from Robotics Missteps in Rolling Out AI in Waste Management',
      excerpt: 'The correct approach to using AI in MRFs, derived from our experience with robots, can maximise MRFs\' ROI and minimise the amount of time it takes for robotics payback.',
      author: 'Gaspard Duthilleul',
      category: 'AI & Robotics',
      readTime: '7 min read',
      link: 'https://vdrs.com/expert-tips/learning-from-robotics-missteps-in-rolling-out-ai-in-waste-management/',
      type: 'html',
      featured: false,
      views: '1.6K'
    },
    {
      id: 5,
      title: 'Five Questions About Planning a MRF Retrofit',
      excerpt: 'Planning a retrofit? Here are the top 5 questions customers ask Mark about MRF retrofits.',
      author: 'Mark Neitzey',
      category: 'Retrofits',
      readTime: '5 min read',
      link: 'https://vdrs.com/expert-tips/five-questions-about-planning-a-retrofit/',
      type: 'html',
      featured: false,
      views: '1.3K'
    },
    {
      id: 6,
      title: 'Robotic Sorting – 5 Things to Consider Before You Invest',
      excerpt: 'Robotic sorting solutions are the hot topic of today and the technology of the future. Mark cautions you about five things you should consider before you invest.',
      author: 'Mark Neitzey',
      category: 'AI & Robotics',
      readTime: '6 min read',
      link: 'https://vdrs.com/expert-tips/robotic-sorting-5-things-to-consider-before-you-invest-in-this-technology/',
      type: 'html',
      featured: false,
      views: '2.1K'
    }
  ];

  // Customer stories data
  const customerStoriesData = [
    {
      id: 1,
      title: 'Freepoint Eco-Systems Announces First PyOil Movement from Ohio Upcycling Facility',
      excerpt: 'VDRS\'s customer helps companies and waste collectors turn plastic waste into a valuable commodity. STAMFORD, Connecticut – Freepoint Eco-Systems LLC is pleased to announce the loading of its first rail car of pyrolysis oil (PyOil) made from waste plastic.',
      company: 'Freepoint Eco-Systems',
      industry: 'Advanced Recycling',
      date: '2024-11-15',
      link: 'https://vdrs.com/van-dyk-customers-in-the-news/freepoint-eco-systems-announces-first-pyoil-movement-from-ohio-upcycling-facility/',
      type: 'html',
      featured: true,
      image: 'https://vdrs.com/wp-content/uploads/2025/01/2a-Freepoint-Eco-Systems-LLC-begins-chemical-recycling-of-plastics.jpg',
      views: '2.7K'
    },
    {
      id: 2,
      title: 'Murphy Road Recycling Adds Greyparrot AI and More Optical Sorters to Its MRF',
      excerpt: 'Adaptable Design - Murphy Road Recycling has expanded its MRF\'s capabilities by adding Greyparrot Analyzers and more optical sorters.',
      company: 'Murphy Road Recycling',
      industry: 'Single Stream MRF',
      date: '2024-10-20',
      link: 'https://vdrs.com/van-dyk-customers-in-the-news/murphy-road-recycling-adds-greyparrot-ai-and-more-optical-sorters-to-its-mrf/',
      type: 'html',
      featured: true,
      image: 'https://vdrs.com/wp-content/uploads/2025/01/10a-Murphy-Road-Recycling-LLC-invests-in-AI-software.jpg',
      views: '3.1K'
    },
    {
      id: 3,
      title: 'Nova Chemicals Commissions Its First U.S. Film Recycling Facility',
      excerpt: 'Partners Novolex and Nova Chemicals are proactively working to increase feedstock supply for the new Indiana facility, which can process 140 million pounds a year.',
      company: 'Nova Chemicals',
      industry: 'Film Recycling',
      date: '2024-09-25',
      link: 'https://vdrs.com/van-dyk-customers-in-the-news/nova-chemicals-commissions-its-first-u-s-film-recycling-facility/',
      type: 'html',
      featured: false,
      image: 'https://vdrs.com/wp-content/uploads/2025/01/1a-NOVA-Circular-Solutions-to-open-film-recycling-plant.jpg',
      views: '1.9K'
    },
    {
      id: 4,
      title: 'Murphy Road Recycling Unlocks Value with New All American MRF',
      excerpt: 'MURPHY ROAD RECYCLING in Connecticut has helped position the New England region as a nationwide recycling leader with the state\'s largest recycling infrastructure.',
      company: 'Murphy Road Recycling',
      industry: 'Single Stream MRF',
      date: '2024-06-12',
      link: 'https://vdrs.com/van-dyk-customers-in-the-news/murphy-road-recycling-unlocks-value-with-new-all-american-mrf/',
      type: 'html',
      featured: false,
      image: '/Images/image-1749759499434.png',
      views: '1.5K'
    },
    {
      id: 5,
      title: 'ReSource Center Largest Reducer of Greenhouse Gases in Santa Barbara County, CA',
      excerpt: 'June 1, 2021 – The Santa Barbara County Public Works Department has been looking for ways to improve recycling programs and overall diversion from landfilling.',
      company: 'Santa Barbara County',
      industry: 'Municipal Recycling',
      date: '2021-06-01',
      link: 'https://vdrs.com/van-dyk-customers-in-the-news/resource-center-largest-reducer-of-greenhouse-gases-in-santa-barbara-county-ca/',
      type: 'html',
      featured: false,
      image: '/Images/image-1749759479881.png',
      views: '1.2K'
    }
  ];

  const categories = ['All', 'Company News', 'Partnerships', 'Technology', 'Product Launch', 'Case Studies'];
  const viewTypes = [
    { id: 'news', label: 'Latest News', icon: Globe },
    { id: 'videos', label: 'Videos', icon: Video },
    { id: 'expert-tips', label: 'Expert Tips', icon: Lightbulb },
    { id: 'customer-stories', label: 'Customer Stories', icon: Trophy }
  ];

  const filteredNews = newsData.filter(item => {
    const matchesFilter = activeFilter === 'All' || item.category === activeFilter;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const featuredNews = filteredNews.filter(item => item.featured);
  const regularNews = filteredNews.filter(item => !item.featured);

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'Company News': return <Building className="w-4 h-4" />;
      case 'Partnerships': return <Users className="w-4 h-4" />;
      case 'Technology': return <Award className="w-4 h-4" />;
      case 'Product Launch': return <ArrowRight className="w-4 h-4" />;
      case 'Case Studies': return <FileText className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const formatViews = (views) => {
    return views;
  };

  // Newsletter popup effect
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!showNewsletter) {
        setShowNewsletter(true);
      }
    }, 10000);
    return () => clearTimeout(timer);
  }, [showNewsletter]);

  const renderContent = () => {
    switch(activeView) {
      case 'videos':
        return (
          <div className="space-y-8">
            {/* Featured Videos */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Videos</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {videoData.filter(video => video.featured).map((video) => (
                  <motion.div
                    key={video.id}
                    whileHover={{ y: -3 }}
                    className="group bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => { e.currentTarget.src = '/Images/image-1749759453479.png'; }}
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Play className="w-16 h-16 text-white" />
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          VIDEO
                        </span>
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <span className="bg-black bg-opacity-75 text-white px-2 py-1 rounded text-xs">
                          {video.duration}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                        <Eye className="w-4 h-4 text-white" />
                        <span className="text-white text-xs">{video.views}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-red-50 text-red-700">
                          <Video className="w-3 h-3" />
                          {video.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {video.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{video.description}</p>
                      <a
                        href={video.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                      >
                        <Play className="w-4 h-4 mr-1" />
                        Watch Video
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* All Videos Grid */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">All Videos</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videoData.filter(video => !video.featured).map((video) => (
                  <motion.div
                    key={video.id}
                    whileHover={{ y: -2 }}
                    className="group bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => { e.currentTarget.src = '/Images/image-1749759453479.png'; }}
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Play className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute bottom-2 right-2">
                        <span className="bg-black bg-opacity-75 text-white px-2 py-1 rounded text-xs">
                          {video.duration}
                        </span>
                      </div>
                      <div className="absolute bottom-2 left-2 flex items-center space-x-1">
                        <Eye className="w-3 h-3 text-white" />
                        <span className="text-white text-xs">{video.views}</span>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-red-50 text-red-700">
                          <Video className="w-3 h-3" />
                          {video.category}
                        </span>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {video.title}
                      </h4>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{video.description}</p>
                      <a
                        href={video.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium"
                      >
                        <Play className="w-3 h-3 mr-1" />
                        Watch
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        );
      
      case 'expert-tips':
        return (
          <div className="space-y-8">
            {/* Featured Expert Tips */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Expert Insights</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {expertTipsData.filter(tip => tip.featured).map((tip) => (
                  <motion.div
                    key={tip.id}
                    whileHover={{ y: -3 }}
                    className="group bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                          tip.category === 'AI & Technology' ? 'bg-purple-50 text-purple-700' :
                          tip.category === 'Equipment Advice' ? 'bg-green-50 text-green-700' :
                          tip.category === 'MRF Design' ? 'bg-blue-50 text-blue-700' :
                          'bg-gray-50 text-gray-700'
                        }`}>
                          <Lightbulb className="w-3 h-3" />
                          {tip.category}
                        </span>
                        <span className="bg-yellow-50 text-yellow-700 px-2 py-1 rounded-full text-xs font-medium">
                          FEATURED
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {tip.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{tip.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-500">
                          <span className="font-medium">By {tip.author}</span>
                          <div className="flex items-center mt-1">
                            <Eye className="w-3 h-3 mr-1" />
                            <span>{tip.views} views</span>
                          </div>
                        </div>
                        <a
                          href={tip.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-medium"
                        >
                          {tip.type === 'pdf' ? 'Read PDF' : 'Read More'}
                          {tip.type === 'pdf' ? 
                            <ExternalLink className="w-4 h-4 ml-1" /> : 
                            <ArrowRight className="w-4 h-4 ml-1" />
                          }
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* All Expert Tips */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">More Expert Tips</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {expertTipsData.filter(tip => !tip.featured).map((tip) => (
                  <motion.div
                    key={tip.id}
                    whileHover={{ y: -2 }}
                    className="group bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                          tip.category === 'AI & Robotics' ? 'bg-purple-50 text-purple-700' :
                          tip.category === 'MRF Design' ? 'bg-blue-50 text-blue-700' :
                          tip.category === 'Retrofits' ? 'bg-orange-50 text-orange-700' :
                          'bg-gray-50 text-gray-700'
                        }`}>
                          <Lightbulb className="w-3 h-3" />
                          {tip.category}
                        </span>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {tip.title}
                      </h4>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{tip.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-xs text-gray-500">By {tip.author}</span>
                          <div className="flex items-center mt-1">
                            <Eye className="w-3 h-3 mr-1 text-gray-400" />
                            <span className="text-xs text-gray-500">{tip.views}</span>
                          </div>
                        </div>
                        <a
                          href={tip.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-yellow-600 hover:text-yellow-700 text-sm font-medium"
                        >
                          {tip.type === 'pdf' ? 'PDF' : 'Read'}
                          <ArrowRight className="w-3 h-3 ml-1" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'customer-stories':
        return (
          <div className="space-y-8">
            {/* Featured Customer Stories */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Success Stories</h2>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {customerStoriesData.filter(story => story.featured).map((story) => (
                  <motion.div
                    key={story.id}
                    whileHover={{ y: -3 }}
                    className="group bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={story.image}
                        alt={story.company}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => { e.currentTarget.src = '/Images/image-1749759453479.png'; }}
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          SUCCESS STORY
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                        <Eye className="w-4 h-4 text-white" />
                        <span className="text-white text-sm">{story.views}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-orange-50 text-orange-700">
                          <Building className="w-3 h-3" />
                          {story.industry}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {story.company}
                      </h3>
                      <h4 className="text-lg font-semibold text-gray-700 mb-3 line-clamp-2">
                        {story.title.replace(story.company, '').replace(' - ', '').trim()}
                      </h4>
                      <p className="text-gray-600 mb-4 line-clamp-3">{story.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="w-4 h-4 mr-1" />
                          {formatDate(story.date)}
                        </div>
                        <a
                          href={story.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium"
                        >
                          Read Story
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* All Customer Stories */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">More Customer Stories</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {customerStoriesData.filter(story => !story.featured).map((story) => (
                  <motion.div
                    key={story.id}
                    whileHover={{ y: -2 }}
                    className="group bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={story.image}
                        alt={story.company}
                        className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => { e.currentTarget.src = '/Images/image-1749759453479.png'; }}
                      />
                      <div className="absolute bottom-2 left-2 flex items-center space-x-1">
                        <Eye className="w-3 h-3 text-white" />
                        <span className="text-white text-xs">{story.views}</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-orange-50 text-orange-700">
                          <Building className="w-3 h-3" />
                          {story.industry}
                        </span>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                        {story.company}
                      </h4>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{story.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">{formatDate(story.date)}</span>
                        <a
                          href={story.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-orange-600 hover:text-orange-700 text-sm font-medium"
                        >
                          Read
                          <ArrowRight className="w-3 h-3 ml-1" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        );

      default: // news
        return (
          <div className="space-y-8">
            {/* Featured News */}
            {featuredNews.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Stories</h2>
                <div className="grid lg:grid-cols-2 gap-8 mb-8">
                  {featuredNews.map((article) => (
                    <motion.div
                      key={article.id}
                      whileHover={{ y: -3 }}
                      className="group bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
                    >
                      <div className="relative overflow-hidden">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => { e.currentTarget.src = '/Images/image-1749759453479.png'; }}
                        />
                        <div className="absolute top-4 left-4 flex items-center gap-2">
                          <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                            FEATURED
                          </span>
                          {article.trending && (
                            <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                              <TrendingUp className="w-3 h-3 mr-1" />
                              TRENDING
                            </span>
                          )}
                        </div>
                        <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                          <Eye className="w-4 h-4 text-white" />
                          <span className="text-white text-sm">{article.views}</span>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                            article.category === 'Company News' ? 'bg-blue-50 text-blue-700' :
                            article.category === 'Partnerships' ? 'bg-green-50 text-green-700' :
                            article.category === 'Technology' ? 'bg-purple-50 text-purple-700' :
                            'bg-gray-50 text-gray-700'
                          }`}>
                            {getCategoryIcon(article.category)}
                            {article.category}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                          {article.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-gray-500">
                            <Calendar className="w-4 h-4 mr-1" />
                            {formatDate(article.date)}
                          </div>
                          <a
                            href={article.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                          >
                            Read More
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* All News Grid */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">All News</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularNews.map((article) => (
                  <motion.div
                    key={article.id}
                    whileHover={{ y: -2 }}
                    className="group bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => { e.currentTarget.src = '/Images/image-1749759453479.png'; }}
                      />
                      {article.type === 'pdf' && (
                        <div className="absolute top-2 right-2">
                          <FileText className="w-5 h-5 text-red-600 bg-white rounded p-1" />
                        </div>
                      )}
                      {article.trending && (
                        <div className="absolute top-2 left-2">
                          <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            TRENDING
                          </span>
                        </div>
                      )}
                      <div className="absolute bottom-2 left-2 flex items-center space-x-1">
                        <Eye className="w-3 h-3 text-white" />
                        <span className="text-white text-xs">{article.views}</span>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                          article.category === 'Company News' ? 'bg-blue-50 text-blue-700' :
                          article.category === 'Partnerships' ? 'bg-green-50 text-green-700' :
                          article.category === 'Technology' ? 'bg-purple-50 text-purple-700' :
                          article.category === 'Product Launch' ? 'bg-orange-50 text-orange-700' :
                          article.category === 'Case Studies' ? 'bg-indigo-50 text-indigo-700' :
                          'bg-gray-50 text-gray-700'
                        }`}>
                          {getCategoryIcon(article.category)}
                          {article.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{article.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-xs text-gray-500">
                          <Calendar className="w-3 h-3 mr-1" />
                          {formatDate(article.date)}
                        </div>
                        <a
                          href={article.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium"
                        >
                          {article.type === 'pdf' ? 'View PDF' : 'Read More'}
                          {article.type === 'pdf' ? 
                            <ExternalLink className="w-3 h-3 ml-1" /> : 
                            <ArrowRight className="w-3 h-3 ml-1" />
                          }
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Greyparrot Inspired */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Van Dyk in the News
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover what industry leaders and major publications are saying about our recycling innovations and sustainable technology solutions.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
              <span className="flex items-center">
                <Globe className="w-4 h-4 mr-1" />
                340+ MRFs Worldwide
              </span>
              <span className="flex items-center">
                <Award className="w-4 h-4 mr-1" />
                40+ Years Excellence
              </span>
              <span className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                Trusted by Industry Leaders
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 bg-white p-2 rounded-xl shadow-sm">
          {viewTypes.map((type) => {
            const IconComponent = type.icon;
            return (
              <button
                key={type.id}
                onClick={() => setActiveView(type.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeView === type.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                {type.label}
              </button>
            );
          })}
        </div>

        {/* Search and Filter Bar */}
        {activeView === 'news' && (
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search news articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      activeFilter === category
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Content */}
        {renderContent()}

        {/* No Results Message */}
        {activeView === 'news' && filteredNews.length === 0 && (
          <div className="text-center py-16 bg-white rounded-xl shadow-sm">
            <div className="bg-gray-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No articles found</h3>
            <p className="text-gray-500 mb-6">Try adjusting your search terms or filters</p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setActiveFilter('All');
              }}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Newsletter CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Stay Updated with Van Dyk News</h3>
          <p className="text-blue-100 mb-6">Get the latest recycling industry insights, technology updates, and company news delivered to your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Newsletter Popup */}
      <AnimatePresence>
        {showNewsletter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowNewsletter(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Bell className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Never Miss an Update</h3>
                <p className="text-gray-600 mb-6">Subscribe to get the latest recycling technology news and industry insights.</p>
                <div className="space-y-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Subscribe Now
                  </button>
                </div>
                <button
                  onClick={() => setShowNewsletter(false)}
                  className="mt-4 text-gray-500 hover:text-gray-700 text-sm"
                >
                  Maybe later
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NewsMedia;