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
import { ReactElement, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

interface Amenity {
  icon: React.FC<any>; // หรือ typeof Waves;
  name: string;
}

const amenitiesData: Amenity[] = [
  { icon: Waves, name: "Routine Maintenance" },
  { icon: Waves, name: "Espresso machine" },
  { icon: Waves, name: "Electric kettle" },
  { icon: Waves, name: "Indoor Sofa" },
  { icon: Waves, name: "Microwave oven" },
  { icon: Waves, name: "Fridge" },
  { icon: Waves, name: "Wine chiller" },
  { icon: Waves, name: "water heater" },
  { icon: Waves, name: "Automated sanitary fixtures" },
  { icon: Waves, name: "Jacuzzi" },
  { icon: Waves, name: "Intelligent Television" },
  { icon: Waves, name: "Wi-Fi" },
  { icon: Waves, name: "air conditioning unit" },
  { icon: Waves, name: "Dishes, bowls, mugs, spoons, forks, espresso cups, wine goblets" },
  { icon: Waves, name: "Private Infinity Swimming pool" },
  { icon: Waves, name: "Sundeck with Loungers" },
  { icon: Waves, name: "5 Day Beds" },
  { icon: Waves, name: "Laundry Services" },
]

const additionalAmenities: Amenity[] = [
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
        className="grid gap-4 mb-6"
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
                {/* <IconComponent className="h-6 w-6 text-blue-600 flex-shrink-0" /> */}
                <span className="text-gray-800 font-medium">{amenity.name}</span>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </motion.div>

      {/* Show More Button */}
      {
        additionalAmenities.length > 0 ? (<div className="">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-gray-600 hover:text-blue-600 p-0 h-auto font-normal"
          >
            {showAll ? "Show less amenities" : "Show all " + additionalAmenities.length + " amenities"}
          </button>
        </div>) :
          <div className="">

          </div>
      }

    </div>
  )
}
