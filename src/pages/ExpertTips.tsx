import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, Eye, Search, Filter, Grid, List, X, BookOpen, Lightbulb, Settings, Wrench } from 'lucide-react';

interface ExpertTip {
  id: number;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  link: string;
  views: string;
  featured?: boolean;
  trending?: boolean;
  fullContent?: string;
}

const ExpertTips = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeView, setActiveView] = useState<'grid' | 'list'>('grid');
  const [selectedTip, setSelectedTip] = useState<ExpertTip | null>(null);
  const [showTipModal, setShowTipModal] = useState(false);

  const expertTips: ExpertTip[] = [
    {
      id: 1,
      title: 'Maximizing Baler Efficiency: 10 Essential Maintenance Tips',
      description: 'Learn the critical maintenance practices that keep your balers running at peak performance and extend their operational life.',
      category: 'Maintenance',
      date: '2024-12-20',
      readTime: '8 min read',
      image: '/Images/bollegraaf-products.jpg',
      link: 'https://vdrs.com/expert-tips/maximizing-baler-efficiency/',
      views: '2.3k',
      featured: true,
      trending: true,
      fullContent: '<p>Proper maintenance is crucial for maximizing baler efficiency and longevity. Here are 10 essential tips...</p>'
    },
    {
      id: 2,
      title: 'Optical Sorting Optimization: Getting the Best Results',
      description: 'Expert guidance on configuring and optimizing optical sorting systems for maximum material recovery rates.',
      category: 'Technology',
      date: '2024-12-18',
      readTime: '6 min read',
      image: '/Images/tomra-optical-sorting.jpg',
      link: 'https://vdrs.com/expert-tips/optical-sorting-optimization/',
      views: '1.8k',
      featured: true
    },
    {
      id: 3,
      title: 'Single Stream Processing: Common Mistakes to Avoid',
      description: 'Avoid costly mistakes in single stream processing with these expert insights and best practices.',
      category: 'Processing',
      date: '2024-12-15',
      readTime: '7 min read',
      image: '/Images/single-stream-recycling.jpg',
      link: 'https://vdrs.com/expert-tips/single-stream-mistakes/',
      views: '1.5k',
      trending: true
    },
    {
      id: 4,
      title: 'Food Waste Depackaging: Safety and Efficiency Guidelines',
      description: 'Essential safety protocols and efficiency tips for food waste depackaging operations.',
      category: 'Safety',
      date: '2024-12-12',
      readTime: '5 min read',
      image: '/Images/smicon-depackager.jpg',
      link: 'https://vdrs.com/expert-tips/food-waste-depackaging/',
      views: '1.2k'
    },
    {
      id: 5,
      title: 'MRF Design: Layout Optimization for Maximum Throughput',
      description: 'Strategic layout design principles for material recovery facilities to maximize processing efficiency.',
      category: 'Design',
      date: '2024-12-10',
      readTime: '9 min read',
      image: '/Images/mrf-systems.jpg',
      link: 'https://vdrs.com/expert-tips/mrf-design-optimization/',
      views: '2.1k',
      featured: true
    },
    {
      id: 6,
      title: 'Odor Control: Best Practices for Waste Processing Facilities',
      description: 'Comprehensive guide to effective odor management in waste processing operations.',
      category: 'Environmental',
      date: '2024-12-08',
      readTime: '6 min read',
      image: '/Images/centriair-equipment.jpg',
      link: 'https://vdrs.com/expert-tips/odor-control-best-practices/',
      views: '1.7k'
    },
    {
      id: 7,
      title: 'Equipment Troubleshooting: Quick Diagnostic Methods',
      description: 'Fast and effective troubleshooting techniques for common equipment issues in recycling facilities.',
      category: 'Troubleshooting',
      date: '2024-12-05',
      readTime: '8 min read',
      image: '/Images/equipment-maintenance.jpg',
      link: 'https://vdrs.com/expert-tips/equipment-troubleshooting/',
      views: '1.9k',
      trending: true
    },
    {
      id: 8,
      title: 'Energy Efficiency: Reducing Power Consumption in MRFs',
      description: 'Practical strategies for reducing energy consumption while maintaining processing efficiency.',
      category: 'Efficiency',
      date: '2024-12-03',
      readTime: '7 min read',
      image: '/Images/energy-efficiency.jpg',
      link: 'https://vdrs.com/expert-tips/energy-efficiency-mrfs/',
      views: '1.4k'
    },
    {
      id: 9,
      title: 'Material Quality: Ensuring High-Quality Output',
      description: 'Techniques for maintaining consistent material quality throughout the recycling process.',
      category: 'Quality',
      date: '2024-12-01',
      readTime: '6 min read',
      image: '/Images/material-quality.jpg',
      link: 'https://vdrs.com/expert-tips/material-quality-control/',
      views: '1.6k'
    },
    {
      id: 10,
      title: 'Staff Training: Building a Skilled Workforce',
      description: 'Effective training programs for developing skilled operators and maintenance personnel.',
      category: 'Training',
      date: '2024-11-28',
      readTime: '5 min read',
      image: '/Images/staff-training.jpg',
      link: 'https://vdrs.com/expert-tips/staff-training-programs/',
      views: '1.3k'
    }
  ];

  const categories = ['All', 'Maintenance', 'Technology', 'Processing', 'Safety', 'Design', 'Environmental', 'Troubleshooting', 'Efficiency', 'Quality', 'Training'];

  const handleTipClick = (tip: ExpertTip) => {
    setSelectedTip(tip);
    setShowTipModal(true);
  };

  const closeTipModal = () => {
    setShowTipModal(false);
    setSelectedTip(null);
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const filteredTips = expertTips.filter(tip => {
    const matchesFilter = activeFilter === 'All' || tip.category === activeFilter;
    const matchesSearch = tip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tip.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tip.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const featuredTips = filteredTips.filter(tip => tip.featured);
  const regularTips = filteredTips.filter(tip => !tip.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative text-white py-24 -mt-20 pt-20 overflow-hidden">
        <img 
          src="/Images/impactreactor-RET.jpg"
          alt="Expert Tips"
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
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Expert Tips
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              Get professional advice from our recycling experts on best practices, maintenance, and maximizing your system's performance.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search expert tips..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-vd-orange focus:border-transparent transition-all"
              />
            </div>
            
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

        {/* Featured Tips */}
        {featuredTips.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-vd-blue mb-6">Featured Expert Tips</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredTips.map((tip) => (
                <motion.div
                  key={tip.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
                  onClick={() => handleTipClick(tip)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={tip.image}
                      alt={tip.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      width="600"
                      height="256"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = '/Images/first.jpg';
                      }}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-vd-orange text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                    {tip.trending && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Trending
                        </span>
                      </div>
                    )}
                    <div className="absolute bottom-4 left-4">
                      <div className="bg-white/90 rounded-full p-2">
                        <Lightbulb className="w-6 h-6 text-vd-orange" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {formatDate(tip.date)}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {tip.readTime}
                      </span>
                      <span className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {tip.views}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-vd-blue mb-3 leading-tight group-hover:text-vd-orange transition-colors">
                      {tip.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {tip.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-vd-orange bg-orange-50 px-3 py-1 rounded-full">
                        {tip.category}
                      </span>
                      <BookOpen className="w-5 h-5 text-vd-orange group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Regular Tips */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-vd-blue mb-6">All Expert Tips</h2>
          <div className={`grid gap-6 ${
            activeView === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {regularTips.map((tip) => (
              <motion.div
                key={tip.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer ${
                  activeView === 'list' ? 'flex' : ''
                }`}
                onClick={() => handleTipClick(tip)}
              >
                <div className={`relative overflow-hidden ${
                  activeView === 'list' ? 'w-1/3 h-48' : 'h-48'
                }`}>
                  <img
                    src={tip.image}
                    alt={tip.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    width={activeView === 'list' ? "300" : "400"}
                    height="192"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = '/Images/first.jpg';
                    }}
                  />
                  {tip.trending && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        Trending
                      </span>
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white/90 rounded-full p-2">
                      <Lightbulb className="w-5 h-5 text-vd-orange" />
                    </div>
                  </div>
                </div>
                <div className={`p-6 ${activeView === 'list' ? 'flex-1' : ''}`}>
                  <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(tip.date)}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {tip.readTime}
                    </span>
                    <span className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      {tip.views}
                    </span>
                  </div>
                  <h3 className={`font-bold text-vd-blue mb-3 leading-tight group-hover:text-vd-orange transition-colors ${
                    activeView === 'list' ? 'text-lg' : 'text-xl'
                  }`}>
                    {tip.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {tip.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-vd-orange bg-orange-50 px-3 py-1 rounded-full">
                      {tip.category}
                    </span>
                    <BookOpen className="w-5 h-5 text-vd-orange group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {filteredTips.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No expert tips found</h3>
            <p className="text-gray-500">Try adjusting your search terms or filters.</p>
          </div>
        )}
      </div>

      {/* Tip Modal */}
      <AnimatePresence>
        {showTipModal && selectedTip && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeTipModal}
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
                  src={selectedTip.image}
                  alt={selectedTip.title}
                  className="w-full h-full object-cover opacity-80"
                  width="800"
                  height="256"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = '/Images/first.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
                  <h2 className="text-4xl font-bold text-white mb-2 leading-tight">{selectedTip.title}</h2>
                </div>
                <button
                  onClick={closeTipModal}
                  className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors bg-black/30 rounded-full p-2"
                  aria-label="Close tip modal"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto scrollbar-thin scrollbar-thumb-vd-orange scrollbar-track-gray-100 max-h-[calc(90vh-16rem)]">
                <div className="flex items-center text-sm text-gray-600 mb-4 space-x-4">
                  <span>{selectedTip.category}</span>
                  <span>•</span>
                  <span>{formatDate(selectedTip.date)}</span>
                  <span>•</span>
                  <span>{selectedTip.readTime}</span>
                  <span>•</span>
                  <span>{selectedTip.views} views</span>
                </div>
                {selectedTip.fullContent ? (
                  <div className="prose max-w-none text-gray-800 leading-relaxed" dangerouslySetInnerHTML={{ __html: selectedTip.fullContent }} />
                ) : (
                  <div className="space-y-4">
                    <p className="text-gray-800 leading-relaxed text-lg">
                      {selectedTip.description}
                    </p>
                    <div className="bg-gray-100 rounded-xl p-6 text-center">
                      <div className="mb-4">
                        <BookOpen className="w-16 h-16 text-vd-orange mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-vd-blue mb-2">Read Full Article</h3>
                        <p className="text-gray-600 mb-4">Click the button below to read the complete expert tip</p>
                      </div>
                      <a 
                        href={selectedTip.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center bg-vd-orange hover:bg-vd-orange-alt text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                      >
                        <BookOpen className="w-5 h-5 mr-2" />
                        Read Full Article
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExpertTips;



