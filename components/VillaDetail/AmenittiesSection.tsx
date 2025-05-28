"use client"

import {
  Waves,
  Wifi,
  AirVent,
  PocketIcon as Pool,
  Sofa,
  Tv,
  UtensilsCrossed,
  Wine,
  Dumbbell,
  RectangleEllipsis,
  Bath,
  User,
} from "lucide-react"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

const amenitiesData = [
  { icon: Waves, name: "Routine Maintenance" },
  { icon: Wifi, name: "Free Wi-Fi" },
  { icon: AirVent, name: "Air conditioner" },
  { icon: Pool, name: "Private Infinity Pool" },
  { icon: Sofa, name: "Living room" },
  { icon: Tv, name: "TV with home theater" },
  { icon: UtensilsCrossed, name: "Dining room" },
  { icon: Wine, name: "Private Bar" },
  { icon: Dumbbell, name: "Gym" },
  { icon: RectangleEllipsis, name: "Pool-table" },
  { icon: Bath, name: "5 Toilets" },
  { icon: User, name: "Butler Assistant" },
]

const additionalAmenities = [
  { icon: Waves, name: "Private Beach Access" },
  { icon: AirVent, name: "Central Heating" },
  { icon: Wifi, name: "High-Speed Internet" },
  { icon: User, name: "Concierge Service" },
  { icon: Sofa, name: "Outdoor Lounge" },
  { icon: Wine, name: "Wine Cellar" },
  { icon: Tv, name: "Smart TV in All Rooms" },
  { icon: Dumbbell, name: "Yoga Studio" },
]

export default function AmenitiesSection() {
  const [showAll, setShowAll] = useState(false)
  const displayedAmenities = showAll ? [...amenitiesData, ...additionalAmenities] : amenitiesData

  return (
    <div className="flex flex-col gap-4">
      {/* Header */}
        <h3 className="text-2xl font-bold text-gray-800">Amenities</h3>

      {/* Amenities Grid with animation */}
      <motion.div
        layout
        className="grid md:grid-cols-2 gap-4 mb-6"
        transition={{ layout: { duration: 0.4, ease: "easeInOut" } }}
      >
        <AnimatePresence initial={false}>
          {displayedAmenities.map((amenity, index) => {
            const IconComponent = amenity.icon
            return (
              <motion.div
                key={amenity.name + index}
                layout
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-3"
                style={{
                      fontFamily: '"IBM Plex Sans Thai Looped", sans-serif',
                    }}
              >
                <IconComponent className="h-6 w-6 text-blue-600 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{amenity.name}</span>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </motion.div>

      {/* Show More Button */}
      <div className="">
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-gray-600 hover:text-blue-600 p-0 h-auto font-normal"
        >
          {showAll ? "Show less amenities" : "Show all 20 amenities"}
        </button>
      </div>
    </div>
  )
}
