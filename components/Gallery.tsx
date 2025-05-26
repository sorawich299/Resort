"use client";

import Link from "next/link";

interface GalleryProps{
    images: string[];
    link: string;
}

export default function Gallery({images, link}: GalleryProps) {
    

    return (
        <div className="relative">
            <div className="flex gap-2 mx-auto p-4 h-[600px] max-w-6xl flex-col md:flex-row">
                {/* รูปใหญ่ (กินพื้นที่ซ้ายครึ่งหนึ่ง) */}
                <div className="flex-1">
                    <img
                        src={images[0]}
                        alt="Large"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>

                {/* รูปเล็ก 4 รูป (2x2 grid) */}
                <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-2">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-full h-full">
                            <img
                                src={images[i]}
                                alt={`Small ${i}`}
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="absolute bottom-85 md:bottom-20 right-20">
                <Link className="cursor-pointer p-4 bg-white border-1 border-[#344054] rounded-lg text-[#344054] z-100" href={link}>Show all photos</Link>
            </div>
        </div>
    );
}
