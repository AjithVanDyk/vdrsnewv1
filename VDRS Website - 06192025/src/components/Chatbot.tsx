import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

interface ChatMessage {
  type: 'user' | 'bot';
  text: string;
}

const OPEN_ROUTER_API_URL = 'https://openrouter.ai/api/v1/chat/completions';
// IMPORTANT: Replace 'YOUR_OPEN_ROUTER_API_KEY' with your actual key.
// For production, consider using environment variables (e.g., import.meta.env.VITE_OPEN_ROUTER_API_KEY)
// and setting them up in your Vite configuration.
const OPEN_ROUTER_API_KEY = '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'; 

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { type: 'bot', text: 'Hello! I\'m your Van Dyk Recycling Solutions assistant. How can I assist you today?' }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom of messages whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Define website links and their keywords for intelligent routing
  const websiteRoutes = [
    { keywords: ['equipment', 'bollegraaf', 'lubo', 'tomra', 'pellenc', 'walair', 'smicon', 'günther', 'centriair', 'greyparrot', 'densimetric', 'beefoam', 'reckelberg', 'pre-owned', 'machines'], path: '/equipment', response: 'We offer a full range of recycling equipment. You can explore them on our <a href="/equipment" class="text-vd-orange hover:underline">Equipment page</a>.' },
    { keywords: ['solution', 'single stream', 'plastics', 'organics', 'food waste', 'msw', 'commercial waste', 'c&d', 'multi-mrf', 'waste to energy', 'e-scrap', 'glass cleanup', 'composting', 'balers', 'ai-based analytics', 'odor control', 'ev battery'], path: '/solutions', response: 'We provide innovative recycling solutions for various waste streams. Find out more on our <a href="/solutions" class="text-vd-orange hover:underline">Solutions page</a>.' },
    { keywords: ['service', 'turnkey', 'retrofit', 'installation', 'setup'], path: '/services', response: 'Our services include turnkey design, retrofits, installation, and more. Visit our <a href="/services" class="text-vd-orange hover:underline">Services page</a> for details.' },
    { keywords: ['support', 'parts', 'maintenance', 'remote', 'training', 'test center', 'warranty'], path: '/support', response: 'For support, parts, preventive maintenance, training, or information about our test center, please check our <a href="/support" class="text-vd-orange hover:underline">Support page</a>.' },
    { keywords: ['news', 'media', 'videos', 'expert tips', 'customers in the news'], path: '/news-media', response: 'Stay up-to-date with our latest news, videos, expert tips, and customer stories on our <a href="/news-media" class="text-vd-orange hover:underline">News & Media page</a>.' },
    { keywords: ['contact', 'main office', 'address', 'email', 'phone', 'call', 'fax', 'quote'], path: '/contact', response: 'You can find all our contact details and a quote request form on our <a href="/contact" class="text-vd-orange hover:underline">Contact Us page</a>.' },
    { keywords: ['about', 'company', 'beginnings', 'history', 'work for us', 'careers', 'job'], path: '/about', response: 'Learn more about Van Dyk Recycling Solutions, our history, and career opportunities on our <a href="/about" class="text-vd-orange hover:underline">About Us page</a>.' },
    { keywords: ['privacy', 'policy', 'privacy policy'], path: '/privacy-policy', response: 'Our Privacy Policy is available on our <a href="/privacy-policy" class="text-vd-orange hover:underline">Privacy Policy page</a>.' },
    { keywords: ['site map', 'sitemap'], path: '/site-map', response: 'You can view the full structure of our website on the <a href="/site-map" class="text-vd-orange hover:underline">Site Map page</a>.' },
  ];

  // Function to call the Open Router API for troubleshooting
  const fetchTroubleshootingAnswer = async (question: string): Promise<string> => {
    try {
      const response = await fetch(OPEN_ROUTER_API_URL, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${OPEN_ROUTER_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'deepseek/deepseek-coder-6.7b-instruct', // Using deepseek model as per user request
          messages: [
            { role: 'system', content: 'You are a helpful assistant for Van Dyk Recycling Solutions. Provide concise and direct answers for troubleshooting, or suggest contacting technical support if unable to answer.' },
            { role: 'user', content: `Troubleshooting question: ${question}. Provide a basic, direct answer. If unable to answer, suggest contacting technical support or service@vdrs.com.` },
          ],
        }),
      });

      if (!response.ok) {
         console.error("API error (status):", response.status, response.statusText);
         throw new Error(`API error: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("API response (data):", data);
      const aiAnswer = data.choices?.[0]?.message?.content;
      if (aiAnswer) {
         return aiAnswer;
      } else {
         console.warn("API response did not contain an answer (choices[0]?.message?.content is missing).");
         return "I apologize, but I couldn't retrieve a troubleshooting answer from our AI. Please contact our technical support (service@vdrs.com or 203-967-1100) for further assistance.";
      }
    } catch (error) {
      console.error("Error fetching troubleshooting answer (catch):", error);
      // Fallback (dummy) answer if the API call fails.
      return "I am currently unable to fetch troubleshooting information. Please contact our technical support at service@vdrs.com or call 203-967-1100.";
    }
  };

  const handleSend = async () => {
    if (!inputText.trim()) return;

    const userMessage: ChatMessage = { type: 'user', text: inputText };
    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    const lowerInput = inputText.toLowerCase();
    let botResponseText = '';
    let foundRoute = false;

    // 1. Try to route to existing website pages
    for (const route of websiteRoutes) {
      if (route.keywords.some(keyword => lowerInput.includes(keyword))) {
        botResponseText = route.response;
        foundRoute = true;
        break;
      }
    }

    // 2. If not routed, check for troubleshooting questions and call API
    if (!foundRoute && (lowerInput.includes('troubleshoot') || lowerInput.includes('error') || lowerInput.includes('fix') || lowerInput.includes('issue') || lowerInput.includes('breakdown') || lowerInput.includes('malfunction'))) {
      botResponseText = await fetchTroubleshootingAnswer(inputText);
    } else if (!foundRoute) {
      // 3. Fallback if no specific route or troubleshooting match
      botResponseText = 'I can help by guiding you to relevant sections of our website or answering basic questions. For more detailed assistance, please visit our <a href="/contact" class="text-vd-orange hover:underline">Contact Us page</a> or call 203-967-1100.';
    }

    setIsTyping(false);
    setMessages(prev => [...prev, { type: 'bot', text: botResponseText } as ChatMessage]);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
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
            // Adjusted size for "medium"
            className="fixed bottom-24 right-6 w-96 h-[500px] bg-white rounded-lg shadow-xl border z-50 flex flex-col" 
          >
            {/* Header */}
            <div className="bg-vd-blue text-white p-4 rounded-t-lg flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Bot className="h-5 w-5 text-vd-orange" />
                <span className="font-semibold">Van Dyk Assistant</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-300">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{ scrollBehavior: 'smooth' }}>
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[75%] px-3 py-2 rounded-lg text-sm ${
                      message.type === 'user'
                        ? 'bg-vd-orange text-white'
                        : 'bg-gray-100 text-vd-blue'
                    }`}
                    dangerouslySetInnerHTML={{ __html: message.text }} // Use dangerouslySetInnerHTML to render HTML links
                  >
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="max-w-xs px-3 py-2 rounded-lg text-sm bg-gray-100 text-vd-blue">
                    Typing...
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} /> {/* Scroll to this element */}
            </div>

            {/* Input */}
            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about our recycling solutions..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-vd-orange text-sm"
                  disabled={isTyping}
                />
                <button
                  onClick={handleSend}
                  className="bg-vd-orange text-white p-2 rounded-lg hover:bg-vd-blue-dark transition-colors"
                  disabled={isTyping}
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;