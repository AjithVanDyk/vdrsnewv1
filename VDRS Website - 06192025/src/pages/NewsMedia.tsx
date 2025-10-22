import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Filter, Search } from 'lucide-react';

const NewsMedia = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const newsData = [
    {
      id: 1,
      title: 'VDRS Launches Revolutionary AI-Powered Sorting Technology',
      excerpt: 'New optical sorting system achieves record 99.5% accuracy in material separation, setting new industry standards.',
      category: 'Product Launch',
      date: '2024-01-15',
      readTime: '5 min read',
      image: '/Images/image-1749759499434.png',
      featured: true
    },
    {
      id: 2,
      title: 'Partnership with Global Recycling Initiative Announced',
      excerpt: 'VDRS partners with leading environmental organizations to promote sustainable recycling practices worldwide.',
      category: 'Partnership',
      date: '2024-01-10',
      readTime: '3 min read',
      image: '/Images/image-1749759495211.png',
      featured: false
    },
    {
      id: 3,
      title: 'Award Recognition for Innovation in Recycling Technology',
      excerpt: 'VDRS receives prestigious Green Technology Award for contributions to sustainable waste management.',
      category: 'Awards',
      date: '2024-01-05',
      readTime: '4 min read',
      image: '/Images/image-1749759502636.png',
      featured: false
    },
    {
      id: 4,
      title: 'New Facility Opens in Asia-Pacific Region',
      excerpt: 'Expansion continues with state-of-the-art manufacturing facility to serve growing Asian markets.',
      category: 'Company News',
      date: '2023-12-20',
      readTime: '6 min read',
      image: '/Images/image-1749759490576.png',
      featured: false
    },
    {
      id: 5,
      title: 'Case Study: 40% Efficiency Increase at Municipal Facility',
      excerpt: 'Detailed analysis of how VDRS solutions transformed a major city\'s recycling operations.',
      category: 'Case Study',
      date: '2023-12-15',
      readTime: '8 min read',
      image: '/Images/image-1749759487003.png',
      featured: false
    },
    {
      id: 6,
      title: 'Sustainability Report 2023: Record Year for Material Recovery',
      excerpt: 'Annual report shows significant improvements in global material recovery rates across all facilities.',
      category: 'Report',
      date: '2023-12-01',
      readTime: '7 min read',
      image: '/Images/image-1749759479881.png',
      featured: false
    },
    {
      id: 7,
      title: 'Van Dyk Appoints New Sales Team Member',
      excerpt: '',
      date: 'May 10, 2024',
      image: '/Images/image-1749759499434.png',
      category: 'Company News',
      link: '#'
    },
    {
      id: 8,
      title: 'Innovative MRF Solutions Launched',
      excerpt: '',
      date: 'April 25, 2024',
      image: '/Images/image-1749759495211.png',
      category: 'Product Innovations',
      link: '#'
    },
    {
      id: 9,
      title: 'Recycling Industry Trends 2024',
      excerpt: '',
      date: 'March 15, 2024',
      image: '/Images/image-1749759502636.png',
      category: 'Industry Insights',
      link: '#'
    },
    {
      id: 10,
      title: 'Sustainability Partnership Announced',
      excerpt: '',
      date: 'February 1, 2024',
      image: '/Images/image-1749759490576.png',
      category: 'Partnerships',
      link: '#'
    },
    {
      id: 11,
      title: 'Waste-to-Energy Technologies',
      excerpt: '',
      date: 'January 10, 2024',
      image: '/Images/image-1749759487003.png',
      category: 'Technology',
      link: '#'
    },
    {
      id: 12,
      title: 'New Baler Line Introduced',
      excerpt: '',
      date: 'December 5, 2023',
      image: '/Images/image-1749759479881.png',
      category: 'Product Launch',
      link: '#'
    }
  ];

  const categories = ['All', 'Product Launch', 'Partnership', 'Awards', 'Company News', 'Case Study', 'Report'];

  const filteredNews = newsData.filter(item => {
    const matchesFilter = activeFilter === 'All' || item.category === activeFilter;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const featuredNews = newsData.filter(item => item.featured);
  const regularNews = filteredNews.filter(item => !item.featured);

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-brand-blue mb-6">News and Media</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {/* News Section */}
        <div className="bg-white rounded-lg shadow p-6 flex flex-col">
          <img 
            src="/Images/first.jpg" 
            alt="Van Dyk in the News" 
            className="rounded mb-4 object-cover h-40 w-full"
            onError={(e) => { e.currentTarget.src = '/Images/image-1749759453479.png'; e.currentTarget.alt = 'Image not available'; }}
          />
          <h2 className="text-xl font-semibold text-brand-blue mb-2">Van Dyk in the News</h2>
          <p className="text-gray-700 mb-4">See the latest press releases, company news, and industry features about Van Dyk Recycling Solutions.</p>
          <a href="https://vdrs.com/news-media/" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline font-medium">Read More</a>
        </div>
        {/* Videos Section */}
        <div className="bg-white rounded-lg shadow p-6 flex flex-col">
          <img 
            src="/Images/wasttoenergy.jpg" 
            alt="Videos" 
            className="rounded mb-4 object-cover h-40 w-full"
            onError={(e) => { e.currentTarget.src = '/Images/image-1749759453479.png'; e.currentTarget.alt = 'Image not available'; }}
          />
          <h2 className="text-xl font-semibold text-brand-blue mb-2">Videos</h2>
          <p className="text-gray-700 mb-4">Watch our latest equipment demos, customer stories, and technology spotlights on our YouTube channel and video library.</p>
          <a href="https://vdrs.com/videos/" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline font-medium">Watch Videos</a>
        </div>
        {/* Expert Tips Section */}
        <div className="bg-white rounded-lg shadow p-6 flex flex-col">
          <img 
            src="/Images/impactreactor-RET.jpg" 
            alt="Expert Tips" 
            className="rounded mb-4 object-cover h-40 w-full"
            onError={(e) => { e.currentTarget.src = '/Images/image-1749759453479.png'; e.currentTarget.alt = 'Image not available'; }}
          />
          <h2 className="text-xl font-semibold text-brand-blue mb-2">Expert Tips</h2>
          <p className="text-gray-700 mb-4">Get advice from our recycling experts on best practices, maintenance, and maximizing your system's performance.</p>
          <a href="https://vdrs.com/expert-tips/" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline font-medium">Read Tips</a>
        </div>
        {/* Customers in the News Section */}
        <div className="bg-white rounded-lg shadow p-6 flex flex-col">
          <img 
            src="/Images/image-1749759472678.png" 
            alt="Our Customers in the News" 
            className="rounded mb-4 object-cover h-40 w-full"
            onError={(e) => { e.currentTarget.src = '/Images/image-1749759453479.png'; e.currentTarget.alt = 'Image not available'; }}
          />
          <h2 className="text-xl font-semibold text-brand-blue mb-2">Our Customers in the News</h2>
          <p className="text-gray-700 mb-4">Read about the success stories and achievements of Van Dyk customers in the recycling industry.</p>
          <a href="https://vdrs.com/van-dyk-customers-in-the-news/" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline font-medium">See Stories</a>
        </div>
      </div>
    </div>
  );
};

export default NewsMedia;