"use client";
import { useState } from "react";
import Image from "next/image";
// import heroImage from '../assets/img/5146a703aa1d1ecaec17e76c534a98e984b15d2c.avif';

const images = [
  'heroImage',
  'heroImage',
  'heroImage',
  'heroImage',
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
          className="bg-gray-200 hover:bg-gray-300 text-black px-3 py-2 rounded-full shadow"
        >
          Previous
        </button>

        {/* รูปหลัก */}
        <div className="relative w-full h-150 flex-1 border rounded-lg overflow-hidden shadow">
          <Image
            src={images[currentIndex]}
            alt="Main"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* ปุ่ม Next */}
        <button
          onClick={goToNext}
          className="bg-gray-200 hover:bg-gray-300 text-black px-3 py-2 rounded-full shadow"
        >
          Next
        </button>
      </div>

      {/* Thumbnail ด้านล่าง */}
      <div className="flex gap-15 justify-center h-[250px] items-center">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => selectImage(index)}
            className={`relative aspect-[78.1974/78.2] w-40 h-40 border rounded overflow-hidden transition-transform duration-300 transform origin-top-right  hover:rotate-6 !p-4 ${
              index === currentIndex ? "ring-10 ring-[#E5CBAD]" : ""
            }`}
          >
            <Image
              src={img}
              alt={`Thumbnail ${index + 1}`}
              layout="fill"
              objectFit="cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

