'use client';

import Image, { StaticImageData } from 'next/image';
import { useEffect } from 'react';
import styles from '../components/Gallery/Lightbox.module.css';

interface LightboxImage {
  src: string | StaticImageData;
  alt: string;
}

interface LightboxProps {
  images: LightboxImage[];
  currentIndex: number;
  onClose: () => void;
  setCurrentIndex: (index: number) => void;
}

const Lightbox: React.FC<LightboxProps> = ({ images, currentIndex, onClose, setCurrentIndex }) => {
  const total = images.length;

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + total) % total);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % total);
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowLeft') handlePrev();
      else if (e.key === 'ArrowRight') handleNext();
    };
    if (typeof window !== "undefined") {
      window.addEventListener('keydown', handleKey);
      return () => window.removeEventListener('keydown', handleKey);
    }

  }, [currentIndex, total]);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose}>×</button>
        <button className={styles.prev} onClick={handlePrev}>‹</button>
        <div className={styles.imageWrapper}>
          <Image
            src={images[currentIndex].src}
            alt={`Image ${currentIndex}`}
            fill
            sizes="100vw"
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
        <button className={styles.next} onClick={handleNext}>›</button>
      </div>
    </div>
  );
};

export default Lightbox;
