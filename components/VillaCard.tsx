import Image from "next/image";
import Link from "next/link";

interface VillaCardProps {
  title: string;
  description: string;
  image: any;
  href: string;
  reverse?: boolean;
}

export default function VillaCard({
  title,
  description,
  image,
  href,
  reverse = false,
}: VillaCardProps) {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center justify-between w-full px-6 md:px-16 gap-8`}
    >
      {/* 🔹 รูปภาพ */}
      <div className="relative w-full md:w-[50%] h-[30vh] md:h-[35vh] overflow-hidden rounded-3xl shadow-lg">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-700"
          priority
        />
      </div>

      {/* 🔹 เนื้อหา */}
      <div className="flex flex-col w-full md:w-[40%] text-left gap-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          {title}
        </h2>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          {description}
        </p>
        <Link
          href={href}
          className="mt-4 inline-block bg-[#C6A875] hover:bg-[#b59363] text-white px-6 py-3 rounded-full transition-all duration-300 self-start"
        >
          Explore Villa
        </Link>
      </div>
    </div>
  );
}
