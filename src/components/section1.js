import React from 'react';
import { motion } from 'framer-motion';

const campaigns = [
  { id: 1, title: "All", budget: null, image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80", isGrid: true },
  { id: 2, title: "Average Working Adults (25–45)", budget: "RWF 500k", image: "https://images.pexels.com/photos/10415856/pexels-photo-10415856.jpeg" },
  { id: 3, title: "Parents & Family Heads", budget: "RWF 760k", image: "https://images.pexels.com/photos/3819540/pexels-photo-3819540.jpeg" },
  { id: 4, title: "Rural / Countryside Population", budget: "RWF 1M", image: "https://images.pexels.com/photos/34445925/pexels-photo-34445925.jpeg" },
  { id: 5, title: "Motari & Transport Workers", budget: "RWF 600k", image: "https://igisabo.rw/wp-content/uploads/2022/02/CODMG-750x375.jpg" },
  { id: 6, title: "Car Owners / Middle–High Income", budget: "RWF 900k", image: "https://images.pexels.com/photos/804130/pexels-photo-804130.jpeg" },
  { id: 7, title: "High-Net-Worth / Corporate Clients", budget: "RWF 500k", image: "https://images.pexels.com/photos/5648103/pexels-photo-5648103.jpeg" },
  { id: 8, title: "Youth / Young Adults (18–30)", budget: "RWF 800k", image: "https://images.pexels.com/photos/5537506/pexels-photo-5537506.jpeg" },
];

function Section1() {
  return (
    <div className="min-h-screen bg-white p-8 md:p-16 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Choose the campaigns</h1>
          <div className="relative max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search"
              className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-red-500">
          {campaigns.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -5 }}
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-sm border border-gray-100 group cursor-pointer"
            >
              {/* Image Rendering */}
              <img 
                src={item.image} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Gradient Overlay for Text Visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Budget Badge */}
              {item.budget && (
                <div className="absolute top-4 right-4 bg-gray-800/60 backdrop-blur-md px-3 py-1 rounded text-[10px] text-white font-medium uppercase tracking-wider">
                  Total Budget: {item.budget}
                </div>
              )}

              {/* Content */}
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="text-white font-bold text-lg leading-tight mb-4">
                  {item.title}
                </h3>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-1.5 rounded-md text-xs font-semibold flex items-center gap-2 transition-colors ${
                    item.id === 1 ? 'bg-black text-white' : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-md'
                  }`}
                >
                  Select <span>→</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section1;