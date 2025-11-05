import Image from "next/image";
import heroImage from "../public/images/Hero/Hero.png";
import AnimatedFadeInUp from "./AnimationFadeUp";
import { useEffect, useState } from "react";
// import videobg from "../public/video/videoplayback.mp4";
export default function HeroSection() {
  const [isVideoReady, setIsVideoReady] = useState(false);

  useEffect(() => {
    // หน่วงเวลาเล็กน้อยให้ iframe โหลดก่อนแล้วค่อยโชว์
    const timer = setTimeout(() => setIsVideoReady(true), 2500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <section className="relative h-[75vh] overflow-hidden">
      {/* 🔹 รูปพื้นหลังขณะรอโหลด */}
      <img
        src="/assets/Hero_image.jpg" // 👈 เปลี่ยนเป็น path รูปคุณ เช่น /public/images/bg.jpg
        alt="Background placeholder"
        className={`absolute top-0 left-auto w-full h-full object-cover transition-opacity duration-700 ${
          isVideoReady ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* 🔹 วิดีโอพื้นหลัง YouTube */}
      <div
        className={`absolute top-0 left-0 w-full h-full overflow-hidden transition-opacity duration-700 ${
          isVideoReady ? "opacity-100" : "opacity-0"
        }`}
      >
        <iframe
          src="https://www.youtube.com/embed/Erflio-agG4?autoplay=1&mute=1&loop=1&playlist=Erflio-agG4&controls=0&showinfo=0&modestbranding=1&fs=0&rel=0&iv_load_policy=3&disablekb=1&playsinline=1"
          title="Background video"
          allow="autoplay; encrypted-media"
          frameBorder="0"
          className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none scale-125"
          style={{
            width: "100vw",
            height: "100vh",
            objectFit: "cover",
            transform: "scale(1.2)",
          }}
        ></iframe>
      </div>
      {/* 🔹 เนื้อหา hero */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full text-left text-white pl-36">
        <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold">
            Solunar.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-normal">
            🌙 - Between Light, Sea & Serenity.
          </p>
        </div>
      </div>
    </section>
  );
}
