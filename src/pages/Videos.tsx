import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Play, Calendar, Clock, Eye, Grid, List, X } from 'lucide-react';

interface Video {
  id: number;
  title: string;
  description: string;
  category: string;
  date: string;
  duration: string;
  thumbnail: string;
  videoUrl: string;
  views: string;
  featured?: boolean;
  trending?: boolean;
}

const getEmbeddedUrl = (url: string) => {
  try {
    const normalized = url.replace('youtu.be/', 'www.youtube.com/watch?v=');
    const parsed = new URL(normalized);
    const videoId = parsed.searchParams.get('v') || parsed.pathname.split('/').pop();
    return videoId ? `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1` : url;
  } catch {
    return url;
  }
};

const Videos = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeView, setActiveView] = useState<'grid' | 'list'>('grid');
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const location = useLocation();

  const videos: Video[] = [
    {
      id: 1,
      title: 'A New Way to Sort Single Stream',
      description: 'Revolutionary single stream sorting technology that maximizes material recovery and efficiency.',
      category: 'Single Stream',
      date: '2024-12-20',
      duration: '3:45',
      thumbnail: '/Images/single-stream-recycling.jpg',
      videoUrl: 'https://youtu.be/Qerp8XcGDw0',
      views: '15.2k',
      featured: true,
      trending: true
    },
    {
      id: 2,
      title: 'Bollegraaf HBC 140 Baler at Yes Recycling Newark NJ',
      description: 'High-capacity baler demonstration showing exceptional performance in real-world conditions.',
      category: 'Equipment',
      date: '2024-12-18',
      duration: '4:20',
      thumbnail: '/Images/bollegraaf-products.jpg',
      videoUrl: 'https://youtu.be/zqbJbMABi-A',
      views: '12.8k',
      featured: true
    },
    {
      id: 3,
      title: 'E-Scrap Processing with Tomra Autosort Fines Optical Sorter',
      description: 'Advanced optical sorting technology for electronic waste processing and material recovery.',
      category: 'E-Scrap',
      date: '2024-12-15',
      duration: '5:30',
      thumbnail: '/Images/tomra-optical-sorting.jpg',
      videoUrl: 'https://youtu.be/OSOB0JfqPTY',
      views: '18.5k',
      trending: true
    },
    {
      id: 4,
      title: 'VDRS Smimo Depackager',
      description: 'Food waste depackaging technology for efficient organic waste processing.',
      category: 'Food Waste',
      date: '2024-12-12',
      duration: '2:45',
      thumbnail: '/Images/smicon-depackager.jpg',
      videoUrl: 'https://youtu.be/ircipzTwJRM',
      views: '9.7k'
    },
    {
      id: 5,
      title: 'Single Stream Recycling Tour Material Recovery Facility',
      description: 'Complete tour of a modern MRF facility showcasing advanced sorting technology.',
      category: 'Single Stream',
      date: '2024-12-10',
      duration: '8:15',
      thumbnail: '/Images/mrf-systems.jpg',
      videoUrl: 'https://youtu.be/M5nmNKVNCBw',
      views: '22.1k',
      featured: true
    },
    {
      id: 6,
      title: 'Construction and Demolition Waste Sorting System',
      description: 'Comprehensive C&D waste processing system for maximum material recovery.',
      category: 'C&D',
      date: '2024-12-08',
      duration: '6:20',
      thumbnail: '/Images/cd-recycling.jpg',
      videoUrl: 'https://youtu.be/MOjFp3y7mEw',
      views: '11.3k'
    },
    {
      id: 7,
      title: 'E-Scrap E-Waste Sorting with Artificial Intelligence',
      description: 'AI-powered sorting technology revolutionizing electronic waste processing.',
      category: 'E-Scrap',
      date: '2024-12-05',
      duration: '4:50',
      thumbnail: '/Images/greyparrot-ai-recognition.jpg',
      videoUrl: 'https://youtu.be/B_VmEcZBy6M',
      views: '16.9k',
      trending: true
    },
    {
      id: 8,
      title: 'Compost Cleaning with an Allgaier Densimetric Table',
      description: 'Advanced compost refining technology for high-quality organic material production.',
      category: 'Composting',
      date: '2024-12-03',
      duration: '3:30',
      thumbnail: '/Images/densimetric-table.jpg',
      videoUrl: 'https://youtu.be/5VvtScst8yI',
      views: '7.8k'
    },
    {
      id: 9,
      title: 'Container Line Featuring Optical Sorting',
      description: 'Modern container processing line with advanced optical sorting capabilities.',
      category: 'Plastics',
      date: '2024-12-01',
      duration: '5:15',
      thumbnail: '/Images/plastics-recycling.jpg',
      videoUrl: 'https://youtu.be/8Xj4Zwv81uE',
      views: '13.4k'
    },
    {
      id: 10,
      title: 'Lubo StarScreen Sorting MSW',
      description: 'Municipal solid waste sorting with advanced screening technology.',
      category: 'MSW',
      date: '2024-11-28',
      duration: '4:05',
      thumbnail: '/Images/msw-processing.jpg',
      videoUrl: 'https://youtu.be/lTQ4xEe7WOg',
      views: '10.6k'
    }
  ];

  const categories = ['All', 'Single Stream', 'Equipment', 'E-Scrap', 'Food Waste', 'C&D', 'Composting', 'Plastics', 'MSW'];

  const handleVideoClick = (video: Video) => {
    setSelectedVideo(video);
    setShowVideoModal(true);
  };

  const closeVideoModal = () => {
    setShowVideoModal(false);
    setSelectedVideo(null);
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  // Sort videos by date (most recent first)
  const sortedVideos = [...videos].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA;
  });

  const filteredVideos = sortedVideos.filter(video => {
    const matchesFilter = activeFilter === 'All' || video.category === activeFilter;
    return matchesFilter;
  });

  const sidebarItems = [
    { name: 'Latest News', path: '/news-media', isActive: location.pathname === '/news-media' },
    { name: 'Videos', path: '/videos', isActive: location.pathname === '/videos' },
    { name: 'Expert Tips', path: '/expert-tips', isActive: location.pathname === '/expert-tips' }
  ];

  return (
    <>
      <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative text-white py-24 -mt-20 pt-20 overflow-hidden">
        <img 
          src="/Images/pollutec-trade-show.jpg"
          alt="Videos"
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
              Videos
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              Watch our latest videos showcasing recycling technology, equipment demonstrations, and industry insights.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Filters */}
      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        <aside className="lg:w-1/4">
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
        </aside>

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

          {/* All Videos Grid */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-vd-blue mb-6">Videos</h2>
            <div
              className={`grid gap-6 ${
                activeView === 'grid'
                  ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                  : 'grid-cols-1'
              }`}
            >
              {filteredVideos.map((video) => {
                return (
                  <motion.div
                    key={video.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
                    onClick={() => handleVideoClick(video)}
                  >
                    <div className={`relative overflow-hidden ${activeView === 'list' ? 'h-64' : 'h-64'}`}>
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        width="600"
                        height="256"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.src = '/Images/first.jpg';
                        }}
                      />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-all">
                        <div className="bg-white/90 rounded-full p-4 group-hover:scale-110 transition-transform">
                          <Play className="w-8 h-8 text-vd-orange ml-1" />
                        </div>
                      </div>
                      {video.trending && (
                        <div className="absolute top-4 right-4">
                          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                            Trending
                          </span>
                        </div>
                      )}
                      <div className="absolute bottom-4 right-4">
                        <span className="bg-black/70 text-white px-2 py-1 rounded text-sm">
                          {video.duration}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {formatDate(video.date)}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {video.duration}
                        </span>
                        <span className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          {video.views}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-vd-blue mb-3 leading-tight group-hover:text-vd-orange transition-colors">
                        {video.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {video.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-vd-orange bg-orange-50 px-3 py-1 rounded-full">
                          {video.category}
                        </span>
                        <Play className="w-5 h-5 text-vd-orange group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
              </div>
            </div>

          {filteredVideos.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No videos found</h3>
              <p className="text-gray-500">Try adjusting your filters.</p>
            </div>
          )}
        </div>
      </div>

      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideoModal && selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeVideoModal}
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
                  src={selectedVideo.thumbnail}
                  alt={selectedVideo.title}
                  className="w-full h-full object-cover opacity-80"
                  width="800"
                  height="256"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = '/Images/first.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
                  <h2 className="text-4xl font-bold text-white mb-2 leading-tight">{selectedVideo.title}</h2>
                </div>
                <button
                  onClick={closeVideoModal}
                  className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors bg-black/30 rounded-full p-2"
                  aria-label="Close video modal"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto scrollbar-thin scrollbar-thumb-vd-orange scrollbar-track-gray-100 max-h-[calc(90vh-16rem)]">
                <div className="flex items-center text-sm text-gray-600 mb-4 space-x-4">
                  <span>{selectedVideo.category}</span>
                  <span>•</span>
                  <span>{formatDate(selectedVideo.date)}</span>
                  <span>•</span>
                  <span>{selectedVideo.duration}</span>
                  <span>•</span>
                  <span>{selectedVideo.views} views</span>
                </div>
                <div className="space-y-5">
                  <div className="relative w-full pt-[56.25%] rounded-xl overflow-hidden shadow-xl">
                    <iframe
                      src={getEmbeddedUrl(selectedVideo.videoUrl)}
                      title={selectedVideo.title}
                      className="absolute inset-0 w-full h-full rounded-xl"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                    />
                  </div>
                  <p className="text-gray-800 leading-relaxed text-lg">
                    {selectedVideo.description}
                  </p>
                  <a
                    href={selectedVideo.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-vd-orange hover:text-vd-orange-alt font-semibold transition-colors"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Open on YouTube
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Videos;







