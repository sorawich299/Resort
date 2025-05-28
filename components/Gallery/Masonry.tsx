'use client';

import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';
import styles from './Masonry.module.css';
import lightboxStyles from './Lightbox.module.css';

interface MasonryProps {
  images: (string | StaticImageData)[];
  columns?: number;
}

function splitIntoColumns(arr: (string | StaticImageData)[], numCols: number): (string | StaticImageData)[][] {
  const columns: (string | StaticImageData)[][] = Array.from({ length: numCols }, () => []);
  arr.forEach((item, index) => {
    columns[index % numCols].push(item);
  });
  return columns;
}

const Masonry: React.FC<MasonryProps> = ({ images, columns = 3 }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const flatImageList = images.map((img) => typeof img === 'string' ? img : img.src);
  const columnsData = splitIntoColumns(images, columns);

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  let globalIndex = 0;

  return (
    <>
      <div className={styles.row}>
        {columnsData.map((column, colIndex) => (
          <div key={colIndex} className={styles.column}>
            {column.map((src, imgIndex) => {
              const index = globalIndex++;
              return (
                <div
                  key={imgIndex}
                  className={styles.imageWrapper}
                  onClick={() => handleImageClick(index)}
                  style={{ cursor: 'pointer' }}
                >
                  <Image
                    src={src}
                    alt={`Image ${index}`}
                    width={300}
                    height={Math.floor(Math.random() * 200) + 200}
                    layout="responsive"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 300px"
                    style={{ objectFit: 'cover' }}
                    placeholder={typeof src === 'string' ? 'empty' : 'blur'}
                    priority={index === 0}
                  />
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {lightboxOpen && (
        <div className={lightboxStyles.overlay} onClick={() => setLightboxOpen(false)}>
          <div className={lightboxStyles.content} onClick={(e) => e.stopPropagation()}>
            <button className={lightboxStyles.close} onClick={() => setLightboxOpen(false)}>×</button>
            <button
              className={lightboxStyles.prev}
              onClick={() => setCurrentIndex((currentIndex - 1 + flatImageList.length) % flatImageList.length)}
            >
              ‹
            </button>
            <div className={lightboxStyles.imageWrapper}>
              <Image
                src={flatImageList[currentIndex]}
                alt={`Image ${currentIndex}`}
                fill
                sizes="100vw"
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
            <button
              className={lightboxStyles.next}
              onClick={() => setCurrentIndex((currentIndex + 1) % flatImageList.length)}
            >
              ›
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Masonry;
