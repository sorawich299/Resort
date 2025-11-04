'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const activities = [
  {
    title: 'Surfboard',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Flite Board',
    image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Paramotor',
    image: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Diving',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Microlight',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Jet Ski',
    image: 'https://images.unsplash.com/photo-1593642632559-0c9b7b88c64c?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Ultralight',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80',
  },
];

export default function Activities() {
  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col items-center py-20 px-6">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-[Playfair_Display] tracking-wide mb-4 text-gray-900"
      >
        Partner Activities
      </motion.h1>
      <div className="w-16 h-[2px] bg-[#C5A45B] mb-10 rounded-full"></div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
        {activities.map((activity, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            whileHover={{ y: -5 }}
            className="group overflow-hidden bg-white rounded-3xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="overflow-hidden">
              <Image
                src={activity.image}
                alt={activity.title}
                width={800}
                height={600}
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-5 flex justify-between items-center">
              <h3 className="text-lg font-medium">{activity.title}</h3>
              <span className="text-[#C5A45B] text-sm tracking-wider">Explore →</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
