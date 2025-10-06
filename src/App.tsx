import React, { Suspense, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ErrorBoundary from './components/ErrorBoundary';
import NavigationErrorBoundary from './components/NavigationErrorBoundary';
import LoadingFallback from './components/LoadingFallback';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import { initializeImageLoading } from './utils/imageLoader';
import serviceWorkerManager from './utils/serviceWorker';

const Home = React.lazy(() => import('./pages/Home'));
const Equipment = React.lazy(() => import('./pages/Equipment'));
const Solutions = React.lazy(() => import('./pages/Solutions'));
const ServicesSupport = React.lazy(() => import('./pages/ServicesSupport'));
const NewsMedia = React.lazy(() => import('./pages/NewsMedia'));
const ContactUs = React.lazy(() => import('./pages/ContactUs'));
const About = React.lazy(() => import('./pages/About'));
const Careers = React.lazy(() => import('./pages/Careers'));
const Support = React.lazy(() => import('./pages/Support'));
const PMI = React.lazy(() => import('./pages/PMI'));
const QuoteForm = React.lazy(() => import('./components/QuoteForm'));
const TestCenter = React.lazy(() => import('./pages/TestCenter'));
const InstallationProcess = React.lazy(() => import('./pages/InstallationProcess'));
const TrainingSchedule = React.lazy(() => import('./pages/TrainingSchedule'));

// Enhanced lazy loading with better error handling
const createLazyComponent = (importFunc: () => Promise<any>) => {
  return React.lazy(() => 
    importFunc().catch((error) => {
      console.error('Failed to load component:', error);
      return {
        default: () => (
          <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="text-center">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Loading...
              </h2>
              <p className="text-gray-600 mb-4">
                Please wait while we load the page.
              </p>
            </div>
          </div>
        )
      };
    })
  );
};

const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg text-center">
      <h1 className="text-4xl font-bold text-vd-blue mb-4">404</h1>
      <p className="text-gray-600 mb-4">Page not found</p>
      <Link
        to="/"
        className="inline-block bg-vd-blue text-white py-2 px-4 rounded hover:bg-vd-blue-dark transition-colors duration-200"
      >
        Return Home
      </Link>
    </div>
  </div>
);

// Smooth scroll handler component
const SmoothScrollHandler = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Wait for the page to load and then scroll to the element
      const timer = setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
          });
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [location.hash]);

  return null;
};

function App() {
  useEffect(() => {
    serviceWorkerManager.register();
    initializeImageLoading();
    
    return () => {
      serviceWorkerManager.unregister();
    };
  }, []);

  return (
    <ErrorBoundary>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <div className="min-h-screen bg-white">
          <Navbar />
          <SmoothScrollHandler />
          <NavigationErrorBoundary>
            <Suspense fallback={<LoadingFallback message="Loading page..." />}>
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/support" element={<ServicesSupport />} />
                  <Route path="/equipment" element={<Equipment />} />
                  <Route path="/solutions" element={<Solutions />} />
                  <Route path="/news-media" element={<NewsMedia />} />
                  <Route path="/contact" element={<ContactUs />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/careers" element={<Careers />} />
                  <Route path="/pmi" element={<PMI />} />
                  <Route path="/quote" element={<QuoteForm />} />
                  <Route path="/test-center" element={<TestCenter />} />
                  <Route path="/installation-process" element={<InstallationProcess />} />
                  <Route path="/training-schedule" element={<TrainingSchedule />} />
                  {/* Legacy route redirects */}
                  <Route path="/services" element={<Navigate to="/support" replace />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </AnimatePresence>
            </Suspense>
          </NavigationErrorBoundary>
          <Footer />
          <Chatbot />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
