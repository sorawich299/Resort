"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const activities = [
  { title: "Surfboard", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80" },
  { title: "Flite Board", image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=400&q=80" },
  { title: "Paramotor", image: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&w=400&q=80" },
  { title: "Diving", image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=400&q=80" },
  { title: "Microlight", image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400&q=80" },
  { title: "Jet Ski", image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400&q=80" },
  { title: "Ultralight", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80" },
  { title: "Windsurf", image: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&w=400&q=80" },
  { title: "Kayak", image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=400&q=80" },
  { title: "Paragliding", image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=400&q=80" },
];

export default function Activities() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      {/* 🔹 BG Layer */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-light)] via-[#f8f9fa] to-[var(--color-bg-dark)]" /> */}
      <motion.div
        className="absolute inset-0 bg-[url('https://image.makewebeasy.net/makeweb/m_1920x0/bL4zZ31F3/webp/S6_bg.webp?v=202405291424')] bg-cover bg-center opacity-70"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/20 to-transparent z-10" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/10 to-transparent z-10" />

      <div className="w-full max-w-7xl relative z-20">
        {/* 🔹 Header */}
        <div className="text-center pt-8 pb-4">
          <h1 className="text-3xl md:text-4xl font-[Playfair_Display] font-semibold text-white">
            Activities Playground
          </h1>
          <div className="w-24 h-[2px] bg-[var(--color-logo)] mx-auto mt-3 rounded-full"></div>
        </div>

        {/* 🔹 Masonry Grid */}
        <div className="flex-1 overflow-y-auto px-8 pb-12">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
            {activities.map((a, i) => (
              <motion.div
                key={i}
                className="mb-4 overflow-hidden rounded-2xl relative group break-inside-avoid shadow-md shadow-black/10"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={a.image}
                  alt={a.title}
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-lg font-semibold transition-opacity duration-500">
                  {a.title}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
