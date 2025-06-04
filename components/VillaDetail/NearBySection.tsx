"use client";

import NearByIcon from "@/public/icons/NearByIcon";
import { useState } from "react";

const nearbyData = {
  popular: [
    { name: "Bang Saray Beach", distance: "2 km", type: "beach" },
    { name: "Bang Saray Night Market", distance: "3.4 km", type: "market" },
    {
      name: "Nongnooch Garden Pattaya",
      distance: "8.3 km",
      type: "attraction",
    },
    {
      name: "Khao Chee-chan (Buddha Mountain)",
      distance: "9.3 km",
      type: "attraction",
    },
    { name: "Jomtien Beach", distance: "14 km", type: "beach" },
    { name: "Thepprasit Night Market", distance: "17 km", type: "market" },
    { name: "South Pattaya Beach", distance: "21 km", type: "beach" },
    { name: "Walking Street", distance: "21 km", type: "entertainment" },
    {
      name: "Central Festival Pattaya Beach",
      distance: "22 km",
      type: "shopping",
    },
    { name: "Terminal 21 Pattaya", distance: "23.5 km", type: "shopping" },
  ],
  restaurants: [
    { name: "Tide Bang Saray", distance: "500 m", type: "restaurant" },
    { name: "Preecha Seafood Bang Saray", distance: "1.5 km", type: "seafood" },
    {
      name: "Anek Kusorn Sala (Viharnra Sien)",
      distance: "8.3 km",
      type: "restaurant",
    },
    { name: "NITAN Coffee's Tale", distance: "11.9 km", type: "coffee" },
  ],
  transportation: [
    { name: "Bali Hai Pier Pattaya", distance: "22 km", type: "pier" },
    {
      name: "U-Tapao Rayong-Pattaya International Airport",
      distance: "24 km",
      type: "airport",
    },
    { name: "Bus Terminal Pattaya-Bangkok", distance: "28 km", type: "bus" },
    { name: "Bangphe Municipality Pier", distance: "76 km", type: "pier" },
    { name: "Suvarnabhumi Airport (BKK)", distance: "137 km", type: "airport" },
  ],
};

export default function NearbySection() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="py-14 px-16">
      <div className="flex flex-col gap-10">
        {/* Header */}
        <div className="">
          <h3 className="text-3xl font-bold text-gray-800">Nearby</h3>
        </div>
        {/* Map Section */}
        <div className="h-[600px] ">
          <iframe
            title="Google Map"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            referrerPolicy="no-referrer-when-downgrade"
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d5395.794992286238!2d100.901945!3d12.775116999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDQ2JzMwLjQiTiAxMDDCsDU0JzA3LjAiRQ!5e1!3m2!1sth!2sth!4v1748511134104!5m2!1sth!2sth"
          ></iframe>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-3 gap-10 max-w-[1152px] mx-auto">
          {/* Popular */}
          <div className="space-y-3">
            <h4 className="font-semibold text-lg text-gray-800 flex items-center gap-2">
              {/* <Star className="h-5 w-5 text-yellow-500" /> */}
              Popular
            </h4>
            <div className="space-y-2">
              {nearbyData.popular.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col p-2 hover:bg-white rounded-lg transition-all duration-200 group"
                  onClick={() =>
                    setSelectedCategory(
                      selectedCategory === `transport-${index}`
                        ? null
                        : `transport-${index}`
                    )
                  }
                >
                  <div className="flex gap-2">
                    <span className="text-sm">
                      {<NearByIcon color="var(--color-icon-primary)" />}
                    </span>
                    <span className="text-sm text-gray-700 transition-colors">
                      {item.name}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500 font-medium pl-7">
                    {item.distance}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Restaurant - Coffee shop */}
          <div className="space-y-3">
            <h4 className="font-semibold text-lg text-gray-800 flex items-center gap-2">
              {/* <Utensils className="h-5 w-5 text-orange-500" /> */}
              Restaurant - Coffee shop
            </h4>
            <div className="space-y-2">
              {nearbyData.restaurants.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col p-2 hover:bg-white rounded-lg transition-all duration-200 group"
                  onClick={() =>
                    setSelectedCategory(
                      selectedCategory === `transport-${index}`
                        ? null
                        : `transport-${index}`
                    )
                  }
                >
                  <div className="flex gap-2">
                    <span className="text-sm">
                      {<NearByIcon color="var(--color-icon-primary)" />}
                    </span>
                    <span className="text-sm text-gray-700 transition-colors">
                      {item.name}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500 font-medium pl-7">
                    {item.distance}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Transportation */}
          <div className="space-y-3">
            <h4 className="font-semibold text-lg text-gray-800 flex items-center gap-2">
              {/* <Car className="h-5 w-5 text-green-500" /> */}
              Transportation
            </h4>
            <div className="space-y-2">
              {nearbyData.transportation.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col p-2 hover:bg-white rounded-lg transition-all duration-200 group"
                  onClick={() =>
                    setSelectedCategory(
                      selectedCategory === `transport-${index}`
                        ? null
                        : `transport-${index}`
                    )
                  }
                >
                  <div className="flex gap-2">
                    <span className="text-sm">
                      {<NearByIcon color="var(--color-icon-primary)" />}
                    </span>
                    <span className="text-sm text-gray-700 transition-colors">
                      {item.name}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500 font-medium pl-7">
                    {item.distance}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
