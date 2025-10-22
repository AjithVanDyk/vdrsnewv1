import React, { Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

// Lazy load pages for better performance
const Home = React.lazy(() => import('./pages/Home'));
const Services = React.lazy(() => import('./pages/Services'));
const Equipment = React.lazy(() => import('./pages/Equipment'));
const Solutions = React.lazy(() => import('./pages/Solutions'));
const NewsMedia = React.lazy(() => import('./pages/NewsMedia'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Support = React.lazy(() => import('./pages/Support'));
const About = React.lazy(() => import('./pages/About'));
const Beginnings = React.lazy(() => import('./pages/Beginnings'));
const WorkForUs = React.lazy(() => import('./pages/WorkForUs'));

// Loading component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-vd-blue"></div>
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <div className="min-h-screen bg-white">
          <Navbar />
          <Suspense fallback={<LoadingFallback />}>
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/equipment" element={<Equipment />} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/news-media" element={<NewsMedia />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/support" element={<Support />} />
                <Route path="/about" element={<About />} />
                <Route path="/about/beginnings" element={<Beginnings />} />
                <Route path="/about/work-for-us" element={<WorkForUs />} />
                {/* Add a catch-all route for 404s */}
                <Route path="*" element={
                  <div className="min-h-screen flex items-center justify-center bg-gray-100">
                    <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg text-center">
                      <h1 className="text-4xl font-bold text-vd-blue mb-4">404</h1>
                      <p className="text-gray-600 mb-4">Page not found</p>
                      <a
                        href="/"
                        className="inline-block bg-vd-blue text-white py-2 px-4 rounded hover:bg-vd-blue-dark transition-colors duration-200"
                      >
                        Return Home
                      </a>
                    </div>
                  </div>
                } />
              </Routes>
            </AnimatePresence>
          </Suspense>
          <Footer />
          <Chatbot />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;