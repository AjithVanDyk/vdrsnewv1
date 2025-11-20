import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle, Star, Quote, X, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import QuoteForm from './QuoteForm';

interface ApplicationItem {
  name: string;
  link?: string;
}

interface EquipmentPageProps {
  equipment: {
    id: number;
    name: string;
    image: string;
    description: string;
    features: string[];
    specifications: { [key: string]: string };
    applications: ApplicationItem[];
    benefits?: string[];
    gallery?: string[];
    videos?: string[];
    testimonials?: Array<{
      name: string;
      company: string;
      quote: string;
      rating: number;
    }>;
  };
}

const EquipmentPageTemplate: React.FC<EquipmentPageProps> = ({ equipment }) => {
  const [showQuoteForm, setShowQuoteForm] = React.useState(false);
  const [selectedVideo, setSelectedVideo] = React.useState<string | null>(null);
  const [currentGallerySlide, setCurrentGallerySlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  // Combine gallery images and videos into one slideshow array
  const galleryItems = [
    ...(equipment.gallery || []).map(img => ({ type: 'image' as const, src: img })),
    ...(equipment.videos || []).map(vid => ({ type: 'video' as const, src: vid }))
  ];

  // Auto-advance slideshow
  useEffect(() => {
    if (autoPlay && galleryItems.length > 1) {
      const timer = setInterval(() => {
        setCurrentGallerySlide((prev) => (prev + 1) % galleryItems.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [autoPlay, galleryItems.length]);

  const goToNextSlide = () => {
    setCurrentGallerySlide((prev) => (prev + 1) % galleryItems.length);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  const goToPrevSlide = () => {
    setCurrentGallerySlide((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  const goToSlide = (index: number) => {
    setCurrentGallerySlide(index);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.split('v=')[1]?.split('&')[0] || url.split('/').pop();
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Color Band */}
      <section className="relative text-white py-24 -mt-20 pt-24 overflow-hidden">
        {/* Color Band Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-vd-blue-dark via-vd-blue to-vd-blue-dark"></div>
        <div className="container mx-auto px-4 relative z-10 pt-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-6 pt-8">{equipment.name}</h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              {equipment.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-vd-blue-dark mb-4">
              Key Features
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the advanced capabilities that make {equipment.name} the industry leader
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {equipment.features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-vd-orange flex-shrink-0 mt-1" />
                  <p className="text-gray-700 font-medium">{feature}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-vd-blue-dark mb-4">
              Technical Specifications
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Detailed specifications and performance metrics for {equipment.name}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                {Object.entries(equipment.specifications).map(([key, value], index) => (
                  <div
                    key={index}
                    className={`p-6 border-b border-gray-200 ${
                      index % 2 === 0 ? 'border-r border-gray-200' : ''
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-700">{key}</span>
                      <span className="text-vd-blue-dark font-bold">{value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Applications Section */}
      {equipment.applications && equipment.applications.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-vd-blue-dark mb-4">
                {equipment.name === 'Certified Pre-Owned Equipment' ? 'Available Equipment' : 'Applications'}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Versatile applications across various industries and use cases
              </p>
            </motion.div>

            <motion.div
              variants={staggerChildren}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {equipment.applications.map((application, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-vd-blue to-vd-blue-dark text-white p-6 rounded-xl"
                >
                  <div className="flex items-center space-x-3">
                    <Star className="w-6 h-6 text-vd-orange" />
                    {application.link ? (
                      <Link
                        to={application.link}
                        className="font-medium hover:text-vd-orange transition-colors"
                      >
                        {application.name}
                      </Link>
                    ) : (
                      <p className="font-medium">{application.name}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Unified Gallery Section (Photos and Videos) - Slideshow */}
      {galleryItems.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-vd-blue-dark mb-4">
                Gallery
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                See {equipment.name} in action through photos and videos
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentGallerySlide}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                  >
                    {galleryItems[currentGallerySlide].type === 'image' ? (
                      <img
                        src={galleryItems[currentGallerySlide].src}
                        alt={`${equipment.name} - Image ${currentGallerySlide + 1}`}
                        className="w-full h-[28rem] object-cover"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.src = '/Images/image-1749759453479.png';
                        }}
                      />
                    ) : (
                      <div
                        className="relative cursor-pointer"
                        onClick={() => setSelectedVideo(galleryItems[currentGallerySlide].src)}
                      >
                        <img
                          src={`https://img.youtube.com/vi/${galleryItems[currentGallerySlide].src.split('v=')[1]?.split('&')[0] || galleryItems[currentGallerySlide].src.split('/').pop()}/maxresdefault.jpg`}
                          alt={`${equipment.name} Video ${currentGallerySlide + 1}`}
                          className="w-full h-[28rem] object-cover"
                          onError={(e) => {
                            const currentSrc = e.currentTarget.src;
                            if (currentSrc.includes('maxresdefault')) {
                              e.currentTarget.src = currentSrc.replace('maxresdefault', 'hqdefault');
                            } else if (currentSrc.includes('hqdefault')) {
                              e.currentTarget.src = currentSrc.replace('hqdefault', 'default');
                            } else {
                              e.currentTarget.src = '/Images/image-1749759453479.png';
                            }
                          }}
                        />
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center hover:bg-black/60 transition-colors">
                          <Play className="w-16 h-16 text-white" />
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                {galleryItems.length > 1 && (
                  <>
                    <button
                      onClick={goToPrevSlide}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-vd-blue rounded-full p-3 shadow-lg transition-colors"
                      aria-label="Previous slide"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={goToNextSlide}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-vd-blue rounded-full p-3 shadow-lg transition-colors"
                      aria-label="Next slide"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}
              </div>

              {galleryItems.length > 1 && (
                <div className="flex justify-center gap-2 mt-6">
                  {galleryItems.map((item, index) => (
                    <button
                      key={`${item.type}-${index}`}
                      onClick={() => goToSlide(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentGallerySlide
                          ? 'w-10 bg-vd-orange'
                          : 'w-4 bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-vd-blue to-vd-blue-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started with {equipment.name}?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Contact our experts to learn more about how {equipment.name} can benefit your operation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowQuoteForm(true)}
                className="bg-vd-orange hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center space-x-2 transition-colors"
              >
                <Quote className="w-5 h-5" />
                <span>Get a Quote</span>
              </motion.button>
              <Link
                to="/contact"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-vd-blue px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center space-x-2 transition-colors"
              >
                <ArrowRight className="w-5 h-5" />
                <span>Contact Us</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300"
              >
                <X className="w-8 h-8" />
              </button>
              <div className="relative w-full h-0 pb-[56.25%]">
                <iframe
                  src={getYouTubeEmbedUrl(selectedVideo)}
                  title={`${equipment.name} Video`}
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Quote Form Modal */}
      <AnimatePresence>
        {showQuoteForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowQuoteForm(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-vd-blue-dark">
                    Get a Quote for {equipment.name}
                  </h3>
                  <button
                    onClick={() => setShowQuoteForm(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <QuoteForm />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EquipmentPageTemplate;
