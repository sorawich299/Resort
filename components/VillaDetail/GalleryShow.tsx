"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const villaData = [
  {
    id: 1,
    title: "Master Bedrooms",
    rooms: [
      {
        name: "Bedroom 1",
        image: "/placeholder.svg?height=400&width=500",
        description:
          "Spacious master bedroom with ocean view and en-suite bathroom",
      },
      {
        name: "Bedroom 2",
        image: "/placeholder.svg?height=400&width=500",
        description:
          "Modern bedroom with navy accents and entertainment system",
      },
    ],
  },
  {
    id: 2,
    title: "Guest Bedrooms",
    rooms: [
      {
        name: "Bedroom 3",
        image: "/placeholder.svg?height=400&width=500",
        description: "Comfortable guest bedroom with garden view",
      },
      {
        name: "Bedroom 4",
        image: "/placeholder.svg?height=400&width=500",
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
        image: "/placeholder.svg?height=400&width=500",
        description: "Open-plan living area with panoramic ocean views",
      },
      {
        name: "Dining Area",
        image: "/placeholder.svg?height=400&width=500",
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
        image: "/placeholder.svg?height=400&width=500",
        description: "Fully equipped kitchen with premium appliances",
      },
      {
        name: "Wine Bar",
        image: "/placeholder.svg?height=400&width=500",
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
        image: "/placeholder.svg?height=400&width=500",
        description: "Luxurious bathroom with glass bathtub and ocean view",
      },
      {
        name: "Guest Bathroom",
        image: "/placeholder.svg?height=400&width=500",
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
        image: "/placeholder.svg?height=400&width=500",
        description: "Stunning infinity pool overlooking the ocean",
      },
      {
        name: "Pool Deck",
        image: "/placeholder.svg?height=400&width=500",
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
        image: "/placeholder.svg?height=400&width=500",
        description: "Private terrace with stunning ocean views",
      },
      {
        name: "Garden Terrace",
        image: "/placeholder.svg?height=400&width=500",
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
        image: "/placeholder.svg?height=400&width=500",
        description: "Private cinema room with surround sound",
      },
      {
        name: "Game Room",
        image: "/placeholder.svg?height=400&width=500",
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
        image: "/placeholder.svg?height=400&width=500",
        description: "Private spa with massage table and relaxation area",
      },
      {
        name: "Gym",
        image: "/placeholder.svg?height=400&width=500",
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
        image: "/placeholder.svg?height=400&width=500",
        description: "Exclusive rooftop area with 360-degree views",
      },
      {
        name: "Private Beach Access",
        image: "/placeholder.svg?height=400&width=500",
        description: "Direct access to pristine private beach",
      },
    ],
  },
];
export default function GalleryShow() {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);
  const totalPages = villaData.length;

  const handlePrevious = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNext = () => {
    console.log(11)
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  const handleImageClick = (src: string, alt: string) => {
    setSelectedImage({ src, alt });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const currentData = villaData[currentPage];
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Inside the Villa</h1>
        <div className="flex items-center gap-4">
          <span className="text-lg font-medium text-gray-600">{currentPage + 1}/{totalPages}</span>
          <div className="flex gap-2">
            <button
              className="rounded-full p-4 cursor-pointer"
              onClick={handlePrevious}
              disabled={currentPage === 0}
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              className="rounded-full p-4 cursor-pointer"
              onClick={handleNext}
              disabled={currentPage === totalPages - 1}
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Bedroom Gallery */}
      <div className="grid md:grid-cols-2 gap-8">
          {currentData.rooms.map((room, index) => (
            <div key={index} className="space-y-4">
              <div
                className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer group"
                onClick={() => handleImageClick(room.image, room.name)}
              >
                <Image
                  src={room.image || "/placeholder.svg"}
                  alt={room.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
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
    </div>
  );
}
