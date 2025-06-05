"use client";

import Image, { StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

import BR1 from "../../public/images/Room 1/Preview_1400px/_NUT5047-HDR.jpg";
import BR2 from "../../public/images/Room 2/Preview_1400px/_NUT4993-HDR.jpg";
import BR3 from "../../public/images/Room 3/Preview_1400px/_NUT4939-HDR.jpg";
import BR4 from "../../public/images/Room 4/Preview_1400px/_NUT5107-HDR.jpg";
import BR5 from "../../public/images/Room 5/Preview_1400px/_NUT5164-HDR.jpg";
import BR6 from "../../public/images/Room 1/Preview_1400px/_NUT5077-HDR.jpg";
import BR7 from "../../public/images/Room 1/Preview_1400px/_NUT5074-HDR.jpg";
import BR8 from "../../public/images/Room 1/Preview_1400px/_NUT5068-HDR.jpg";
import BR9 from "../../public/images/Room 1/Preview_1400px/_NUT5050-HDR.jpg";
import BR10 from "../../public/images/Room 1/Preview_1400px/_NUT5086-HDR.jpg";

import Lightbox from "../LightBox"; // ✅ ต้องแน่ใจว่า Lightbox รองรับ props ด้านล่าง

const villaData = [
  {
    id: 1,
    title: "Master Bedrooms",
    rooms: [
      {
        name: "Bedroom 1",
        image: BR1,
        description: "Spacious master bedroom with ocean view and en-suite bathroom",
      },
      {
        name: "Bedroom 2",
        image: BR2,
        description: "Modern bedroom with navy accents and entertainment system",
      },
    ],
  },
  {
    id: 2,
    title: "Guest Bedrooms",
    rooms: [
      {
        name: "Bedroom 3",
        image: BR2,
        description: "Comfortable guest bedroom with garden view",
      },
      {
        name: "Bedroom 4",
        image: BR3,
        description: "Cozy bedroom perfect for children or additional guests",
      },
    ],
  },
  {
    id: 3,
    title: "Living Spaces",
    rooms: [
      {
        name: "Living Room",
        image: BR3,
        description: "Open-plan living area with panoramic ocean views",
      },
      {
        name: "Dining Area",
        image: BR4,
        description: "Elegant dining space perfect for entertaining",
      },
    ],
  },
  {
    id: 4,
    title: "Kitchen & Bar",
    rooms: [
      {
        name: "Modern Kitchen",
        image: BR4,
        description: "Fully equipped kitchen with premium appliances",
      },
      {
        name: "Wine Bar",
        image: BR5,
        description: "Sophisticated bar area with wine storage",
      },
    ],
  },
  {
    id: 5,
    title: "Bathrooms",
    rooms: [
      {
        name: "Master Bathroom",
        image: BR5,
        description: "Luxurious bathroom with glass bathtub and ocean view",
      },
      {
        name: "Guest Bathroom",
        image: BR6,
        description: "Modern guest bathroom with premium fixtures",
      },
    ],
  },
  {
    id: 6,
    title: "Outdoor Pool",
    rooms: [
      {
        name: "Infinity Pool",
        image: BR6,
        description: "Stunning infinity pool overlooking the ocean",
      },
      {
        name: "Pool Deck",
        image: BR7,
        description: "Spacious deck area with sun loungers",
      },
    ],
  },
  {
    id: 7,
    title: "Terraces",
    rooms: [
      {
        name: "Ocean Terrace",
        image: BR7,
        description: "Private terrace with stunning ocean views",
      },
      {
        name: "Garden Terrace",
        image: BR8,
        description: "Peaceful garden terrace for relaxation",
      },
    ],
  },
  {
    id: 8,
    title: "Entertainment",
    rooms: [
      {
        name: "Home Theater",
        image: BR8,
        description: "Private cinema room with surround sound",
      },
      {
        name: "Game Room",
        image: BR9,
        description: "Fun game room with pool table and arcade",
      },
    ],
  },
  {
    id: 9,
    title: "Wellness",
    rooms: [
      {
        name: "Spa Room",
        image: BR9,
        description: "Private spa with massage table and relaxation area",
      },
      {
        name: "Gym",
        image: BR10,
        description: "Fully equipped fitness center with ocean view",
      },
    ],
  },
  {
    id: 10,
    title: "Special Features",
    rooms: [
      {
        name: "Rooftop Lounge",
        image: BR10,
        description: "Exclusive rooftop area with 360-degree views",
      },
      {
        name: "Private Beach Access",
        image: BR1,
        description: "Direct access to pristine private beach",
      },
    ],
  },
];

export default function GalleryShow() {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const currentData = villaData[currentPage];
  const totalPages = villaData.length;

  const handlePrevious = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setCurrentIndex(null);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };

    if (typeof window !== "undefined") {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }

  }, []);

  return (
    <div className="max-w-6xl mx-auto bg-white">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Inside the Villa</h1>
        <div className="flex items-center gap-4">
          <span className="text-lg font-medium text-gray-600">
            {currentPage + 1}/{totalPages}
          </span>
          <div className="flex gap-2">
            <button
              className="rounded-full p-4"
              onClick={handlePrevious}
              aria-label="Previous"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              className="rounded-full p-4"
              onClick={handleNext}
              aria-label="Next"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {currentData.rooms.map((room, index) => (
          <div key={index} className="space-y-4">
            <div
              className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => handleImageClick(index)}
            >
              <Image
                src={room.image}
                alt={room.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                  Click to view full size
                </span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">{room.name}</h3>
              <p className="text-gray-600 mt-1">{room.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {currentIndex !== null && (
        <Lightbox
          images={currentData.rooms.map((room) => ({
            src: room.image,
            alt: room.name,
          }))}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          onClose={closeModal}
        />
      )}
    </div>
  );
}
