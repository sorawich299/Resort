'use client';

import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import styles from './Masonry.module.css';

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

  // แปลงคอลัมน์กลับเป็น array เดียว พร้อม mapping index สำหรับ lightbox
  let globalIndex = 0;

  return (
    <>
      <div className={styles.row}>
        {columnsData.map((column, colIndex) => (
          <div key={colIndex} className={styles.column}>
            {column.map((src, imgIndex) => {
              const image = typeof src === 'string' ? src : src.src;
              const index = globalIndex;
              globalIndex++;
              return (
                <div
                  key={imgIndex}
                  className={styles.imageWrapper}
                  onClick={() => handleImageClick(index)}
                  style={{ cursor: 'pointer' }}
                >
                  <Image
                    src={src}
                    alt={`Image ${imgIndex}`}
                    width={300}
                    height={Math.floor(Math.random() * 200) + 200}
                    layout="responsive"
                    style={{ objectFit: 'cover' }}
                    placeholder="blur"
                  />
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {lightboxOpen && (
        <Lightbox
          mainSrc={flatImageList[currentIndex]}
          nextSrc={flatImageList[(currentIndex + 1) % flatImageList.length]}
          prevSrc={flatImageList[(currentIndex + flatImageList.length - 1) % flatImageList.length]}
          onCloseRequest={() => setLightboxOpen(false)}
          onMovePrevRequest={() =>
            setCurrentIndex((currentIndex + flatImageList.length - 1) % flatImageList.length)
          }
          onMoveNextRequest={() =>
            setCurrentIndex((currentIndex + 1) % flatImageList.length)
          }
        />
      )}
    </>
  );
};

export default Masonry;
