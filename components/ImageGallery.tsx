"use client";
import { useState } from "react";
import Image from "next/image";
import NUT6023 from '../public/images/Portrait/Preview_1400px/_NUT6023.jpg';
import NUT6234 from '../public/images/Portrait/Preview_1400px/_NUT6234.jpg';
import NUT5890 from '../public/images/Portrait/Preview_1400px/_NUT5890.jpg';
import View from '../public/images/Drone/Preview_1400px/DJI_20241224061556_0006_D-HDR.jpg';

const images = [
  NUT6023,
  NUT6234,
  NUT5890,
  View,
];

export default function ImageGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const selectImage = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* กล่องรูปหลัก + ปุ่มซ้ายขวา */}
      <div className="flex items-center justify-center gap-4 mb-4">
        {/* ปุ่ม Previous */}
        <button
          onClick={goToPrevious}
          className="hidden md:block border-gray-300 border-1 bg-white max-w-[120px] w-full text-gray-500 px-5 py-3 rounded-full shadow"
        >
          Previous
        </button>

        {/* รูปหลัก */}
        <div className="relative w-full h-50 md:h-100 lg:h-150 flex-1 border rounded-lg shadow  mx-5 md:p-0">
          <Image
            src={images[currentIndex]}
            alt="Main"
            fill
            className="object-cover"
          />

          <h1 className="absolute -bottom-15 left-0 w-full text-black py-3">
            Explore the twisting and charming streets
          </h1>
        </div>


        {/* ปุ่ม Next */}
        <button
          onClick={goToNext}
          className="hidden md:block border-gray-300 border-1 bg-white max-w-[120px] w-full text-gray-500 px-5 py-3 rounded-full shadow"
        >
          Next
        </button>
      </div>

      {/* Thumbnail ด้านล่าง */}

      <div className="flex gap-5 md:gap-15 justify-center h-[250px] items-center">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => selectImage(index)}
            className={`relative aspect-[78.1974/78.2] w-20 h-20 border rounded overflow-hidden transition-transform duration-300 transform origin-top-right  hover:rotate-6 !p-4 ${index === currentIndex ? "ring-10 ring-[#E5CBAD]" : ""
              }`}
          >
            <Image
              src={img}
              alt={`Thumbnail ${index + 1}`}
              layout="fill"
              style={{ objectFit: "cover" }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

