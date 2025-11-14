"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

interface ScrollToTopButtonProps {
  onVisibleChange?: (visible: boolean) => void;
}

export default function ScrollToTopButton({ onVisibleChange }: ScrollToTopButtonProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const visible = window.scrollY > 300;
      setIsVisible(visible);
      onVisibleChange?.(visible);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [onVisibleChange]);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-20 right-6 z-50 w-14 h-14 rounded-full 
                 bg-[#C6A875] text-white flex items-center justify-center 
                 shadow-lg transition-all duration-300 cursor-pointer
                 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <ArrowUp size={22} />
    </button>
  );
}
