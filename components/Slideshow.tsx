'use client'
import React from 'react'

const images = [
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
]

export default function MasonryHorizontalAutoScroll() {
  const cols = 4

  // จัดกลุ่มภาพ (masonry)
  const grouped = Array.from({ length: cols }, (_, col) =>
    images.filter((_, i) => i % cols === col)
  )

  // clone 2 รอบเพื่อ seamless loop
  const extended = [...grouped, ...grouped]

  return (
    <>
      <style>{`
        .scroll-container {
          overflow: hidden;
          width: 100%;
        }
        .marquee {
          display: flex;
          gap: 0.3rem; /* ลด gap */
          width: calc(2 * 100%);
          animation: marquee 30s linear infinite;
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .col {
          display: flex;
          flex-direction: column;
          gap: 0.3rem; /* ลด gap */
          min-width: 50px;/* ลดความกว้าง */
        }

        .col img {
          width: 100%;
          border-radius: 0.5rem;
          object-fit: cover;
          break-inside: avoid;
        }
      `}</style>

      <div className="scroll-container">
        <div className="marquee">
          {extended.map((col, i) => (
            <div key={i} className="col justify-center">
              {col.map((src, idx) => (
                <img key={idx} src={src} alt={`image-${i}-${idx}`} loading="lazy" />
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
