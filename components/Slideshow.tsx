"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import Image, { StaticImageData } from "next/image";

interface ImageItem {
  src: string | StaticImageData;
  width: number;
  height: number;
}

interface MasonryHorizontalAutoScrollProps {
  images: ImageItem[][];
}

export default function MasonryHorizontalAutoScroll({
  images,
}: MasonryHorizontalAutoScrollProps) {
  return (
    <div className="w-full overflow-hidden">
      <Marquee speed={40} gradient={false}>
      <div className="flex gap-8 px-4">
        {images.map((columnImages, colIndex) => (
          <div
            key={colIndex}
            className="flex flex-col gap-8 items-center justify-center"
            style={{
              flex: "0 0 auto",
              width: columnImages[0]?.width || 300, // เอาความกว้างรูปแรกในคอลัมน์ หรือ 300 เป็น default
            }}
          >
            {columnImages.map(({ src, width, height }, imageIndex) => (
              <div
                key={`${colIndex}-${imageIndex}`}
                className="relative rounded overflow-hidden"
                style={{
                  width: width,
                  height: height,
                }}
              >
                <Image
                  src={src}
                  alt={`image-${colIndex}-${imageIndex}`}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes={`(max-width: 768px) 100vw, ${width}px`}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
      </Marquee>
    </div>
  );
}
