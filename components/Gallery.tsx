"use client";

import ListIcon from "@/public/icons/ListIcon";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface GalleryProps {
    images: string[] | StaticImageData[];
    link: string;
}

export default function Gallery({ images, link }: GalleryProps) {


    return (
        <div className="relative">
            <div className="flex gap-2 lg:h-[600px]  flex-col lg:flex-row">
                {/* รูปใหญ่ (กินพื้นที่ซ้ายครึ่งหนึ่ง) */}
                <div className="flex-1">
                    <Image
                        src={images[0]}
                        alt="Large"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>

                {/* รูปเล็ก 4 รูป (2x2 grid) */}
                <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-2">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-full h-full">
                            <Image
                                src={images[i]}
                                alt={`Small ${i}`}
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="absolute -bottom-16 md:bottom-125 lg:bottom-10 right-1 md:right-10">
                <Link
                    className="cursor-pointer p-4 bg-white border border-[#344054] rounded-lg text-[#344054] z-100 flex items-center gap-2"
                    href={link}
                >
                    <ListIcon color="#344054" width="12" height="12" />
                    <span>Show all photos</span>
                </Link>
            </div>
        </div>
    );
}
