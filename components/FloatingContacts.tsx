"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Facebook, Instagram, MessageSquare, Contact } from "lucide-react";

interface FloatingContactsProps {
  shiftUp?: boolean;
}

export default function FloatingContacts({ shiftUp = false }: FloatingContactsProps) {
  const [open, setOpen] = useState(false);

  const items = [
    {
      icon: <Facebook size={22} />,
      link: "https://facebook.com",
      bg: "bg-blue-600",
    },
    {
      icon: <MessageSquare size={22} />,
      link: "https://line.me",
      bg: "bg-green-500",
    },
    {
      icon: <Instagram size={22} />,
      link: "https://instagram.com",
      bg: "bg-gradient-to-tr from-purple-500 via-pink-500 to-yellow-500",
    },
  ];

  return (
    <div
      className={`fixed right-6 z-50 flex flex-col items-end transition-all duration-300 cursor-pointer
                  ${shiftUp ? "bottom-38" : "bottom-20"}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <AnimatePresence>
        {open &&
          items.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.15, delay: i * 0.05 }}
              className={`w-12 h-12 mb-2 rounded-full ${item.bg} 
                         flex items-center justify-center shadow-lg text-white`}
            >
              {item.icon}
            </motion.a>
          ))}
      </AnimatePresence>

      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-black text-white 
                   shadow-xl flex items-center justify-center cursor-pointer"
      >
        <Contact size={26} />
      </button>
    </div>
  );
}
