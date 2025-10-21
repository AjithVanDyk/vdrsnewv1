import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle, Star, Quote, X, Play } from 'lucide-react';
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
    equipmentNews?: Array<{
      id: number;
      title: string;
      description: string;
      date: string;
      image: string;
      link: string;
      category: string;
    }>;
  };
}

const EquipmentPageTemplate: React.FC<EquipmentPageProps> = ({ equipment }) => {
  const [showQuoteForm, setShowQuoteForm] = React.useState(false);
  const [selectedVideo, setSelectedVideo] = React.useState<string | null>(null);

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
      {/* Hero Section */}
      <section className="relative text-white py-20 -mt-20 pt-20 overflow-hidden">
        {/* HD Background Image */}
        <img 
          src={equipment.image}
          alt={equipment.name}
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
          width="1920"
          height="1080"
          loading="eager"
          decoding="sync"
          onError={(e) => {
            console.log('Hero image failed to load, using fallback');
            e.currentTarget.src = '/Images/bollegraaf-new-1.jpg';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-6">{equipment.name}</h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              {equipment.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Image */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <img
              src={equipment.image}
              alt={equipment.name}
              className="w-full h-96 md:h-[500px] object-cover rounded-2xl shadow-2xl"
            />
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

      {/* Videos Section */}
      {equipment.videos && equipment.videos.length > 0 && (
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
                See {equipment.name} in Action
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Watch our videos to see the equipment in operation
              </p>
            </motion.div>

            <motion.div
              variants={staggerChildren}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {equipment.videos.map((video, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="relative group cursor-pointer"
                  onClick={() => setSelectedVideo(video)}
                >
                  <div className="relative overflow-hidden rounded-xl shadow-lg">
                    <img
                      src={`https://img.youtube.com/vi/${video.split('v=')[1]?.split('&')[0] || video.split('/').pop()}/maxresdefault.jpg`}
                      alt={`${equipment.name} Video ${index + 1}`}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        // Fallback to hqdefault if maxresdefault fails
                        const currentSrc = e.currentTarget.src;
                        if (currentSrc.includes('maxresdefault')) {
                          e.currentTarget.src = currentSrc.replace('maxresdefault', 'hqdefault');
                        } else if (currentSrc.includes('hqdefault')) {
                          // Final fallback to default thumbnail
                          e.currentTarget.src = currentSrc.replace('hqdefault', 'default');
                        } else {
                          // Ultimate fallback to a placeholder image
                          e.currentTarget.src = '/Images/image-1749759453479.png';
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/60 transition-colors">
                      <Play className="w-16 h-16 text-white" />
                    </div>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-vd-blue-dark">
                    {equipment.name} Demo {index + 1}
                  </h3>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

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

      {/* Gallery Section */}
      {equipment.gallery && equipment.gallery.length > 0 && (
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
                See {equipment.name} in action
              </p>
            </motion.div>

            <motion.div
              variants={staggerChildren}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {equipment.gallery.map((image, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="overflow-hidden rounded-xl shadow-lg"
                >
                  <img
                    src={image}
                    alt={`${equipment.name} - Image ${index + 1}`}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Equipment News Section */}
      {equipment.equipmentNews && equipment.equipmentNews.length > 0 && (
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
                {equipment.name} in the News
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Latest news, success stories, and expert insights about {equipment.name}
              </p>
            </motion.div>

            <motion.div
              variants={staggerChildren}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {equipment.equipmentNews.map((news, index) => (
                <motion.div
                  key={news.id}
                  variants={fadeInUp}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
                  onClick={() => window.open(news.link, '_blank')}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src = '/Images/first.jpg';
                      }}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-vd-orange text-white px-3 py-1 rounded-full text-sm font-medium">
                        {news.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-gray-500 mb-3">
                      {new Date(news.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                    <h3 className="text-lg font-bold text-vd-blue-dark mb-3 leading-tight group-hover:text-vd-orange transition-colors">
                      {news.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {news.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-vd-orange">
                        Read More →
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
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
