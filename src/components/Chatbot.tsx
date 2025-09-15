import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, ChevronRight, ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

interface QuickQuestion {
  id: string;
  question: string;
  path: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [inputText, setInputText] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<QuickQuestion[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom of messages whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [selectedCategory]);

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.suggestions-container')) {
        setShowSuggestions(false);
      }
    };

    if (showSuggestions) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [showSuggestions]);

  // Tree of questions organized by category
  const questionTree = {
    equipment: {
      title: 'Equipment & Technology',
      icon: '🔧',
      questions: [
        { id: 'bollegraaf', question: 'Tell me about Bollegraaf balers', path: '/equipment#bollegraaf', description: 'High-performance horizontal balers' },
        { id: 'tomra', question: 'What is TOMRA optical sorting?', path: '/equipment#tomra-optical-sorting', description: 'Advanced optical sorting technology' },
        { id: 'pellenc', question: 'How does Pellenc ST work?', path: '/equipment#pellenc-st-optical-sorting', description: 'AI-powered intelligent sorting' },
        { id: 'lubo', question: 'What are Lubo screens?', path: '/equipment#lubo-screening', description: 'Elliptical screening technology' },
        { id: 'greyparrot', question: 'Tell me about Greyparrot AI', path: '/equipment#greyparrot-ai', description: 'AI-based waste analytics' },
        { id: 'all-equipment', question: 'View all equipment', path: '/equipment', description: 'Complete equipment catalog' }
      ]
    },
    solutions: {
      title: 'Recycling Solutions',
      icon: '♻️',
      questions: [
        { id: 'single-stream', question: 'Single stream recycling solutions', path: '/solutions#single-stream-recycling', description: 'Complete single stream processing' },
        { id: 'plastics', question: 'Plastics recycling systems', path: '/solutions#plastics-recycling', description: 'Advanced plastics processing' },
        { id: 'organics', question: 'Organics processing solutions', path: '/solutions#organics-processing', description: 'Food waste and organics handling' },
        { id: 'e-scrap', question: 'E-scrap recycling technology', path: '/solutions#e-scrap-recycling', description: 'Electronics waste processing' },
        { id: 'all-solutions', question: 'View all solutions', path: '/solutions', description: 'Complete solutions overview' }
      ]
    },
    services: {
      title: 'Services & Support',
      icon: '🛠️',
      questions: [
        { id: 'turnkey', question: 'Turnkey design services', path: '/services', description: 'Complete facility design' },
        { id: 'installation', question: 'Installation services', path: '/services', description: 'Professional equipment installation' },
        { id: 'training', question: 'Training programs', path: '/services', description: 'Operator and maintenance training' },
        { id: 'maintenance', question: 'Preventive maintenance', path: '/services', description: 'Ongoing equipment maintenance' },
        { id: 'test-center', question: 'Test center services', path: '/test-center', description: 'Material testing facility' }
      ]
    },
    company: {
      title: 'Company Information',
      icon: '🏢',
      questions: [
        { id: 'about', question: 'About Van Dyk', path: '/about', description: 'Company history and mission' },
        { id: 'careers', question: 'Career opportunities', path: '/careers', description: 'Join our team' },
        { id: 'news', question: 'Latest news & media', path: '/news-media', description: 'Company updates and videos' },
        { id: 'contact', question: 'Contact information', path: '/contact', description: 'Get in touch with us' }
      ]
    },
    support: {
      title: 'Technical Support',
      icon: '📞',
      questions: [
        { id: 'parts', question: 'Order parts', path: '/contact', description: 'Equipment parts and components' },
        { id: 'troubleshooting', question: 'Troubleshooting help', path: '/contact', description: 'Technical assistance' },
        { id: 'warranty', question: 'Warranty information', path: '/contact', description: 'Equipment warranty details' },
        { id: 'emergency', question: 'Emergency support', path: '/contact', description: '24/7 emergency assistance' }
      ]
    }
  };

  // Get all questions for autocomplete
  const allQuestions: QuickQuestion[] = Object.values(questionTree).flatMap(category => 
    category.questions.map(q => ({
      id: q.id,
      question: q.question,
      path: q.path,
      description: q.description,
      icon: () => null
    }))
  );

  // Handle input change with autocomplete
  const handleInputChange = (value: string) => {
    setInputText(value);
    
    if (value.length > 0) {
      const filtered = allQuestions.filter(q => 
        q.question.toLowerCase().includes(value.toLowerCase()) ||
        q.description.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(filtered.slice(0, 5)); // Show top 5 suggestions
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
      setFilteredSuggestions([]);
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion: QuickQuestion) => {
    setInputText(suggestion.question);
    setShowSuggestions(false);
    handleQuestionClick(suggestion.path);
  };

  // Handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputText.trim()) {
      // Try to find exact match first
      const exactMatch = allQuestions.find(q => 
        q.question.toLowerCase() === inputText.toLowerCase()
      );
      
      if (exactMatch) {
        handleQuestionClick(exactMatch.path);
      } else {
        // If no exact match, try to find best match
        const bestMatch = allQuestions.find(q => 
          q.question.toLowerCase().includes(inputText.toLowerCase())
        );
        
        if (bestMatch) {
          handleQuestionClick(bestMatch.path);
        } else {
          // Fallback to contact page
          handleQuestionClick('/contact');
        }
      }
      setInputText('');
      setShowSuggestions(false);
    }
  };

  const handleQuestionClick = (path: string) => {
    // Navigate to the page
    window.location.href = path;
  };

  const resetToMainMenu = () => {
    setSelectedCategory(null);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-vd-orange text-white p-4 rounded-full shadow-lg hover:bg-vd-blue-dark transition-colors z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-24 right-6 w-96 h-[600px] dropdown-glass rounded-lg z-50 flex flex-col smooth-scroll" 
          >
            {/* Header */}
            <div className="bg-vd-blue text-white p-4 rounded-t-lg flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Bot className="h-5 w-5 text-vd-orange" />
                <span className="font-semibold">Quick Navigation</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-300">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Search Input */}
            <div className="p-4 border-b bg-gray-50">
              <form onSubmit={handleSubmit} className="relative suggestions-container">
                <div className="relative">
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => handleInputChange(e.target.value)}
                    placeholder="Type your question or search..."
                    className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-vd-orange text-sm"
                    onFocus={() => setShowSuggestions(inputText.length > 0)}
                  />
                  <Send className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
                
                {/* Autocomplete Suggestions */}
                {showSuggestions && filteredSuggestions.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto"
                  >
                    {filteredSuggestions.map((suggestion) => (
                      <button
                        key={suggestion.id}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="w-full px-4 py-3 text-left hover:bg-vd-orange hover:text-white transition-colors border-b border-gray-100 last:border-b-0"
                      >
                        <div className="font-medium text-sm">{suggestion.question}</div>
                        <div className="text-xs text-gray-500 mt-1">{suggestion.description}</div>
                      </button>
                    ))}
                  </motion.div>
                )}
              </form>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-4 smooth-scroll scrollbar-thin scrollbar-thumb-vd-orange scrollbar-track-gray-100">
              {!selectedCategory ? (
                // Main menu - show categories
                <div className="space-y-4">
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-semibold text-vd-blue mb-2">How can we help you?</h3>
                    <p className="text-sm text-gray-600">Choose a category or type your question above</p>
                  </div>
                  
                  {Object.entries(questionTree).map(([key, category]) => (
                    <motion.button
                      key={key}
                      onClick={() => setSelectedCategory(key)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full p-4 bg-gray-50 hover:bg-vd-orange hover:text-white rounded-lg border border-gray-200 hover:border-vd-orange transition-all duration-200 text-left"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{category.icon}</span>
                          <div>
                            <div className="font-semibold text-sm">{category.title}</div>
                            <div className="text-xs text-gray-500">{category.questions.length} options</div>
                          </div>
                        </div>
                        <ChevronRight className="h-4 w-4" />
                      </div>
                    </motion.button>
                  ))}
                  
                  <div className="pt-4 border-t border-gray-200">
                    <Link
                      to="/contact"
                      className="w-full p-3 bg-vd-orange text-white rounded-lg text-center font-semibold text-sm hover:bg-vd-orange-alt transition-colors flex items-center justify-center space-x-2"
                    >
                      <span>Need Direct Help?</span>
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ) : (
                // Category view - show questions
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <button
                      onClick={resetToMainMenu}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <ArrowRight className="h-4 w-4 rotate-180" />
                    </button>
                    <div>
                      <h3 className="font-semibold text-vd-blue">
                        {questionTree[selectedCategory as keyof typeof questionTree].title}
                      </h3>
                      <p className="text-xs text-gray-500">Select a question to navigate</p>
                    </div>
                  </div>
                  
                  {questionTree[selectedCategory as keyof typeof questionTree].questions.map((question) => (
                    <motion.button
                      key={question.id}
                      onClick={() => handleQuestionClick(question.path)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full p-3 bg-white hover:bg-vd-orange hover:text-white rounded-lg border border-gray-200 hover:border-vd-orange transition-all duration-200 text-left group"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="font-medium text-sm group-hover:text-white">{question.question}</div>
                          <div className="text-xs text-gray-500 group-hover:text-orange-100 mt-1">
                            {question.description}
                          </div>
                        </div>
                        <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-white" />
                      </div>
                    </motion.button>
                  ))}
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
