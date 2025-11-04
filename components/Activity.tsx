"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// ---------- Dataset ----------
const activities = [
  {
    title: "Surfboard",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Flite Board",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Paramotor",
    image:
      "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Diving",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Microlight",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Jet Ski",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Ultralight",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
  },
];

// ---------- Layout Selector Component ----------
export default function Activities() {
  const [layout, setLayout] = useState("masonry");
  const [theme, setTheme] = useState("light");

  // ---------- Theme Styling ----------
  const themeClasses: Record<string, string> = {
    light: "bg-gray-50 text-gray-800",
    dark: "bg-[#0a0a0a] text-gray-100",
    ocean:
      "bg-gradient-to-b from-[#001F3F] via-[#002B5B] to-[#003566] text-white",
  };

  // ---------- Layout Renderer ----------
  const renderLayout = () => {
    switch (layout) {
      case "modern":
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {activities.map((a, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all bg-white/10 backdrop-blur border border-white/20"
              >
                <Image
                  src={a.image}
                  alt={a.title}
                  width={800}
                  height={600}
                  className="h-64 w-full object-cover"
                />
                <div className="p-5 flex justify-between items-center">
                  <h3 className="text-lg font-medium">{a.title}</h3>
                  <span className="text-[#C5A45B] text-sm">→</span>
                </div>
              </motion.div>
            ))}
          </div>
        );

      case "editorial":
        return (
          <div className="max-w-6xl mx-auto space-y-12">
            {activities.map((a, i) => (
              <motion.div
                key={i}
                className={`flex flex-col md:flex-row ${
                  i % 2 ? "md:flex-row-reverse" : ""
                } items-center gap-8`}
                whileHover={{ y: -3 }}
              >
                <div className="flex-1 overflow-hidden rounded-2xl shadow-md">
                  <Image
                    src={a.image}
                    alt={a.title}
                    width={800}
                    height={600}
                    className="object-cover h-72 w-full"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-2">{a.title}</h3>
                  <p className="opacity-80 leading-relaxed">
                    Experience the thrill of {a.title.toLowerCase()} in
                    luxurious surroundings with expert guidance.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        );

      case "horizontal":
        return (
          <div className="overflow-x-auto flex gap-6 px-4 scrollbar-hide">
            {activities.map((a, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="min-w-[300px] rounded-2xl overflow-hidden bg-white/10 border border-white/20 shadow-md"
              >
                <Image
                  src={a.image}
                  alt={a.title}
                  width={400}
                  height={300}
                  className="object-cover w-full h-60"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{a.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        );

      case "parallax":
        return (
          <>
            <div
              className="relative h-[60vh] flex items-center justify-center bg-fixed bg-cover bg-center text-white"
              style={{ backgroundImage: `url(${activities[0].image})` }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-4xl md:text-6xl font-semibold z-10 text-center"
              >
                Explore Our Partner Activities
              </motion.h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-16 max-w-6xl mx-auto px-4">
              {activities.map((a, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.03 }}
                  className="rounded-2xl overflow-hidden shadow-md bg-white/10 border border-white/20"
                >
                  <Image
                    src={a.image}
                    alt={a.title}
                    width={800}
                    height={600}
                    className="object-cover h-64 w-full"
                  />
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-medium">{a.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        );

      case "masonry":
        return (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 max-w-6xl mx-auto space-y-4">
            {activities.map((a, i) => (
              <motion.div
                key={i}
                className="relative overflow-hidden rounded-2xl break-inside-avoid group cursor-pointer"
                whileHover={{ scale: 1.02 }}
              >
                {/* ภาพพื้นหลัง */}
                <Image
                  src={a.image}
                  alt={a.title}
                  width={800}
                  height={600}
                  className="object-cover w-full transition-transform duration-500 group-hover:scale-110"
                />

                {/* Title ที่แสดงตลอดเวลา */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white py-3 px-4">
                  <h3 className="text-lg font-semibold">{a.title}</h3>
                </div>

                {/* Overlay ตอน hover */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center px-6">
                  <h3 className="text-2xl font-semibold mb-3">{a.title}</h3>
                  <p className="text-sm text-gray-200 mb-4">
                    Experience the best of {a.title.toLowerCase()} with top-tier
                    facilities and expert guidance.
                  </p>
                  <button
                    className="px-5 py-2 bg-[#C5A45B] hover:bg-[#b6944f] text-black font-medium rounded-full transition"
                    onClick={() => alert(`Navigating to ${a.title}`)}
                  >
                    View Activity
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        );

      case "glass":
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto backdrop-blur-lg">
            {activities.map((a, i) => (
              <motion.div
                key={i}
                className="bg-white/10 border border-white/20 rounded-3xl p-4 shadow-lg hover:shadow-2xl transition-all"
                whileHover={{ y: -5 }}
              >
                <Image
                  src={a.image}
                  alt={a.title}
                  width={800}
                  height={600}
                  className="rounded-2xl object-cover h-56 w-full mb-3"
                />
                <h3 className="text-lg text-center font-medium">{a.title}</h3>
              </motion.div>
            ))}
          </div>
        );

      case "dark":
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {activities.map((a, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="rounded-2xl overflow-hidden bg-[#111] border border-[#333]"
              >
                <Image
                  src={a.image}
                  alt={a.title}
                  width={800}
                  height={600}
                  className="h-64 w-full object-cover opacity-90"
                />
                <div className="p-5 text-[#C5A45B] text-center font-medium">
                  {a.title}
                </div>
              </motion.div>
            ))}
          </div>
        );

      case "split":
        return (
          <div className="max-w-5xl mx-auto space-y-12">
            {activities.map((a, i) => (
              <motion.div
                key={i}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  i % 2 ? "md:grid-flow-col-dense" : ""
                }`}
                whileHover={{ scale: 1.01 }}
              >
                <Image
                  src={a.image}
                  alt={a.title}
                  width={800}
                  height={600}
                  className="rounded-2xl object-cover h-64 w-full"
                />
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{a.title}</h3>
                  <p className="opacity-70">
                    Enjoy premium {a.title.toLowerCase()} experiences with
                    top-class facilities.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        );

      case "floating":
        return (
          <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
            {activities.map((a, i) => (
              <motion.div
                key={i}
                whileHover={{ rotateX: 10, rotateY: -10, scale: 1.05 }}
                className="rounded-3xl overflow-hidden shadow-xl transition-all bg-white/10 border border-white/20"
              >
                <Image
                  src={a.image}
                  alt={a.title}
                  width={800}
                  height={600}
                  className="h-64 w-[300px] object-cover"
                />
                <div className="p-3 text-center">{a.title}</div>
              </motion.div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={`min-h-screen py-16 px-6 transition-colors duration-500 ${themeClasses[theme]}`}
    >
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-[Playfair_Display] font-semibold">
          Activities Playground
        </h1>
        <div className="w-24 h-[2px] bg-[#C5A45B] mx-auto mt-3 rounded-full"></div>

        {/* Selectors */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <select
            value={layout}
            onChange={(e) => setLayout(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg bg-white/10 focus:ring-2 focus:ring-[#C5A45B]"
          >
            <option value="modern">Modern Luxury Grid</option>
            <option value="editorial">Editorial / Magazine</option>
            <option value="horizontal">Horizontal Scroll</option>
            <option value="parallax">Parallax Hero</option>
            <option value="masonry">Masonry Layout</option>
            <option value="glass">Glassmorphism</option>
            <option value="dark">Dark Mode Showcase</option>
            <option value="split">Minimal Split</option>
            <option value="floating">3D Floating Cards</option>
          </select>

          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg bg-white/10 focus:ring-2 focus:ring-[#C5A45B]"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="ocean">Ocean</option>
          </select>
        </div>
      </div>

      {/* Render Layout */}
      <motion.div
        key={layout + theme}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {renderLayout()}
      </motion.div>
    </div>
  );
}
