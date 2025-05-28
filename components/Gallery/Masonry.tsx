"use client";

import Image, { StaticImageData } from "next/image";
import { useState, useEffect } from "react";
import styles from "./Masonry.module.css";
import lightboxStyles from "./Lightbox.module.css";
import Lightbox from "../LightBox";

interface MasonryProps {
  images: (string | StaticImageData)[];
  columns?: number;
}

interface ImgWithHeight {
  src: string | StaticImageData;
  height: number;
}

function splitIntoColumnsBalanced(
  images: ImgWithHeight[],
  numCols: number
): ImgWithHeight[][] {
  const columns: ImgWithHeight[][] = Array.from({ length: numCols }, () => []);
  const columnHeights = new Array(numCols).fill(0);

  images.forEach((image) => {
    const shortestColIndex = columnHeights.indexOf(Math.min(...columnHeights));
    columns[shortestColIndex].push(image);
    columnHeights[shortestColIndex] += image.height;
  });

  return columns;
}

const Masonry: React.FC<MasonryProps> = ({ images, columns = 3 }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesWithHeight, setImagesWithHeight] = useState<ImgWithHeight[]>([]);
  const [columnsData, setColumnsData] = useState<ImgWithHeight[][]>([]);

  // ฟังก์ชันวัดความสูงรูปจริงจาก naturalWidth/naturalHeight
  useEffect(() => {
    const loadImages = async () => {
      const promises = images.map(
        (img) =>
          new Promise<ImgWithHeight>((resolve) => {
            let srcStr: string;
            if (typeof img === "string") {
              srcStr = img;
            } else {
              srcStr = img.src;
            }
            const imageObj = new window.Image();
            imageObj.src = srcStr;
            imageObj.onload = () => {
              // กำหนด width เป็น 300 ตามที่เราแสดง แล้วคำนวณ height ตามสัดส่วนจริง
              const fixedWidth = 300;
              const height =
                (imageObj.naturalHeight / imageObj.naturalWidth) * fixedWidth;
              resolve({ src: img, height });
            };
            imageObj.onerror = () => {
              // ถ้าวัดไม่ได้ ใช้ height default 250
              resolve({ src: img, height: 250 });
            };
          })
      );
      const results = await Promise.all(promises);
      setImagesWithHeight(results);
    };

    loadImages();
  }, [images]);

  // แบ่ง column เมื่อได้ข้อมูลความสูงรูป
  useEffect(() => {
    if (imagesWithHeight.length === 0) return;
    const cols = splitIntoColumnsBalanced(imagesWithHeight, columns);
    setColumnsData(cols);
  }, [imagesWithHeight, columns]);

  const flatImageList = imagesWithHeight.map((img) =>
    typeof img.src === "string" ? img.src : img.src.src
  );

  const handleImageClick = (src: string | StaticImageData) => {
    const srcStr = typeof src === "string" ? src : src.src;
    const index = flatImageList.indexOf(srcStr);
    if (index !== -1) {
      setCurrentIndex(index);
      setLightboxOpen(true);
    }
  };

  if (columnsData.length === 0) {
    // รอโหลดรูปและแบ่ง column
    return <div>Loading gallery...</div>;
  }

  return (
    <>
      <div className={styles.row}>
        {columnsData.map((column, colIndex) => (
          <div key={colIndex} className={styles.column}>
            {column.map((image, imgIndex) => (
              <div
                key={imgIndex}
                className={styles.imageWrapper}
                onClick={() => handleImageClick(image.src)}
                style={{ cursor: "pointer" }}
              >
                <Image
                  src={image.src}
                  alt="Gallery image"
                  width={300}
                  height={Math.round(image.height)}
                  style={{ objectFit: "cover" }}
                  placeholder={typeof image.src === "string" ? "empty" : "blur"}
                  priority={
                    flatImageList.indexOf(
                      typeof image.src === "string" ? image.src : image.src.src
                    ) === 0
                  }
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      {lightboxOpen && (
        <Lightbox
          images={flatImageList.map((src, index) => ({
            src,
            alt: `Image ${index + 1}`, // ✅ หรือใส่ชื่อภาพจริงถ้ามี
          }))}
          currentIndex={currentIndex}
          onClose={() => setLightboxOpen(false)}
          setCurrentIndex={setCurrentIndex}
        />
      )}
    </>
  );
};

export default Masonry;
