// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import NUT6023 from '../public/images/Portrait/Preview_1400px/_NUT6023.jpg';
// import NUT6234 from '../public/images/Portrait/Preview_1400px/_NUT6234.jpg';
// import NUT5890 from '../public/images/Portrait/Preview_1400px/_NUT5890.jpg';
// import View from '../public/images/Drone/Preview_1400px/DJI_20241224061556_0006_D-HDR.jpg';

// import ImageGallery from "react-image-gallery";
// import "react-image-gallery/styles/css/image-gallery.css";


// const images = [
//   NUT6023,
//   NUT6234,
//   NUT5890,
//   View,
// ];


// const image = [
//   {
//     original: NUT6023.src,
//     thumbnail: NUT6023.src,
//   },
//   {
//     original: NUT6234.src,
//     thumbnail: NUT6234.src,
//   },
//   {
//     original: NUT5890.src,
//     thumbnail: NUT5890.src,
//   },
// ];

// export default function ImageGallery2() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const goToPrevious = () => {
//     setCurrentIndex((prev) =>
//       prev === 0 ? images.length - 1 : prev - 1
//     );
//   };

//   const goToNext = () => {
//     setCurrentIndex((prev) =>
//       prev === images.length - 1 ? 0 : prev + 1
//     );
//   };

//   const selectImage = (index: number) => {
//     setCurrentIndex(index);
//   };

//   return (
//     <div className="w-full max-w-7xl mx-auto">
//       <ImageGallery items={image} showPlayButton={false} showFullscreenButton={false}/>


//       {/* กล่องรูปหลัก + ปุ่มซ้ายขวา */}
//       <div className="flex items-center justify-center gap-4 mb-4">
//         {/* ปุ่ม Previous */}
//         <button
//           onClick={goToPrevious}
//           className="hidden md:block border-gray-300 border-1 bg-white max-w-[120px] w-full text-gray-500 px-5 py-3 rounded-full shadow"
//         >
//           Previous
//         </button>

//         {/* รูปหลัก */}
//         <div className="relative w-full h-50 md:h-100 lg:h-150 flex-1 border rounded-lg shadow  mx-5 md:p-0">
//           <Image
//             src={images[currentIndex]}
//             alt="Main"
//             fill
//             className="object-cover"
//           />

//           <h1 className="absolute -bottom-15 left-0 w-full text-black py-3">
//             Explore the twisting and charming streets
//           </h1>
//         </div>


//         {/* ปุ่ม Next */}
//         <button
//           onClick={goToNext}
//           className="hidden md:block border-gray-300 border-1 bg-white max-w-[120px] w-full text-gray-500 px-5 py-3 rounded-full shadow"
//         >
//           Next
//         </button>
//       </div>

//       {/* Thumbnail ด้านล่าง */}

//       <div className="flex gap-5 md:gap-15 justify-center h-[250px] items-center">
//         {images.map((img, index) => (
//           <button
//             key={index}
//             onClick={() => selectImage(index)}
//             className={`relative aspect-[78.1974/78.2] w-20 h-20 border rounded overflow-hidden transition-transform duration-300 transform origin-top-right  hover:rotate-6 !p-4 ${index === currentIndex ? "ring-10 ring-[#E5CBAD]" : ""
//               }`}
//           >
//             <Image
//               src={img}
//               alt={`Thumbnail ${index + 1}`}
//               layout="fill"
//               style={{ objectFit: "cover" }}
//             />
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import NUT6023 from "../public/images/Portrait/Preview_1400px/_NUT6023.jpg";
import NUT6234 from "../public/images/Portrait/Preview_1400px/_NUT6234.jpg";
import NUT5890 from "../public/images/Portrait/Preview_1400px/_NUT5890.jpg";
import View from "../public/images/Drone/Preview_1400px/DJI_20241224061556_0006_D-HDR.jpg";
import { motion } from "framer-motion";

const images = [
  { src: NUT6023, title: "Golden Hour Portrait" },
  { src: NUT6234, title: "Studio Elegance" },
  { src: NUT5890, title: "Natural Light Mood" },
  { src: View, title: "Drone Cityscape" },
];

export default function ImageGallery2() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const goToNext = () =>
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  const selectImage = (index: number) => setCurrentIndex(index);

  // ✅ Auto slide ทุก 5 วินาที
  useEffect(() => {
    const timer = setInterval(() => {
      goToNext();
    }, 5000); // เปลี่ยนเวลา slide ที่นี่ (5000 = 5 วินาที)
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div className="w-full min-h-screen  text-gray-900 flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-7xl">
        {/* รูปหลัก + ปุ่ม */}
        <div className="relative flex items-center justify-center mb-12">
          {/* ปุ่ม Prev */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 md:left-8 bg-white/80 hover:bg-white shadow-lg text-gray-700 px-4 py-2 rounded-full transition-all duration-300 z-10  cursor-pointer"
          >
            ◀
          </button>

          {/* รูปหลัก */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative w-full md:w-[80%] overflow-hidden rounded-2xl shadow-xl group h-[600px]"
          >
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Title ตอนปกติ */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent p-5 text-white">
              <h2 className="text-2xl font-semibold tracking-wide">
                {images[currentIndex].title}
              </h2>
              <p className="text-gray-300 max-w-md mb-6 text-sm md:text-base">
                Explore the emotion and story behind this frame. Crafted with
                light, depth, and passion.
              </p>
            </div>

          </motion.div>

          {/* ปุ่ม Next */}
          <button
            onClick={goToNext}
            className="absolute right-4 md:right-8 bg-white/80 hover:bg-white shadow-lg text-gray-700 px-4 py-2 rounded-full transition-all duration-300 z-10 cursor-pointer"
          >
            ▶
          </button>
        </div>

        {/* Thumbnail ด้านล่าง */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {images.map((img, index) => (
            <motion.button
              key={index}
              onClick={() => selectImage(index)}
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              className={`relative rounded-xl overflow-hidden shadow-md transition-all duration-300 border-2 ${
                index === currentIndex
                  ? "border-[var(--color-logo)] scale-105"
                  : "border-transparent"
              }`}
            >
              <Image
                src={img.src}
                alt={img.title}
                width={120}
                height={80}
                className="object-cover w-28 h-20 md:w-32 md:h-24"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-sm font-medium">
                {img.title}
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}

