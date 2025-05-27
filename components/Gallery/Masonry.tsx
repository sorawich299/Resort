import Image, { StaticImageData } from "next/image";
import styles from "./Masonry.module.css";

interface MasonryProps {
  images: string[]|StaticImageData[];
  columns?: number;
}

// ฟังก์ชันแบ่ง array เป็นหลายกลุ่ม
function splitIntoColumns(arr: (string | StaticImageData)[], numCols: number): (string | StaticImageData)[][] {
  const columns: (string | StaticImageData)[][] = Array.from({ length: numCols }, () => []);
  arr.forEach((item, index) => {
    columns[index % numCols].push(item);
  });
  return columns;
}

const Masonry: React.FC<MasonryProps> = ({ images, columns = 3 }) => {
  const columnsData = splitIntoColumns(images, columns);

  return (
    <div className={styles.row}>
      {columnsData.map((column, colIndex) => (
        <div key={colIndex} className={styles.column}>
          {column.map((src, imgIndex) => (
            <div key={imgIndex} className={styles.imageWrapper}>
              <Image
                src={src}
                alt={`Image ${imgIndex}`}
                width={300}
                height={Math.floor(Math.random() * 200) + 200} // สำหรับเดโม่
                layout="responsive"
                style={{objectFit: 'cover'}}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Masonry;
