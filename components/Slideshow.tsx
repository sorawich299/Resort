'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ImageSlider() {
  const images = [
    "https://picsum.photos/id/1015/600/400",
    "https://picsum.photos/id/1016/600/400",
    "https://picsum.photos/id/1018/600/400",
    "https://picsum.photos/id/1020/600/400",
  ];

  // เพิ่มอาร์เรย์ต่อท้ายเพื่อต่อเนื่อง
  const extendedImages = [...images, ...images];

  return (
    <div className="relative overflow-hidden">
      <div className="flex animate-marquee">
        {images.map((img, index) => (
          <div key={index} className="flex-shrink-0 w-1/4">
            <img
              src={img}
              className="w-full h-auto rounded-lg"
            />
          </div>
        ))}
        {images.map((img, index) => (
          <div key={index + images.length} className="flex-shrink-0 w-1/4">
            <img
              src={img}
              className="w-full h-auto rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};