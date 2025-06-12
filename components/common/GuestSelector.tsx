import AdultsIcon from "@/public/icons/AdultsIcon";
import ChildrenIcon from "@/public/icons/ChildrenIcon";
import React from "react";

interface GuestSelectorProps {
  adults: string;
  children: string;
  onChange: (adults: string, children: string) => void;
}

export const GuestSelector: React.FC<GuestSelectorProps> = ({
  adults,
  children,
  onChange,
}) => {
  return (
    <div className="flex items-center space-x-6">
      <div className="flex items-center gap-5">
        <span className="text-gray-600 text-lg"><AdultsIcon color="#344054"/></span>
        <div>
          <p className="text-sm text-orange-500 font-medium">Adults</p>
          <select
            value={adults}
            onChange={(e) => onChange(e.target.value, children)}
            className="font-semibold bg-transparent border-b border-gray-300 text-gray-700 focus:outline-none focus:border-orange-500 w-16 text-center"
          >
            {[...Array(10)].map((_, i) => (
              <option key={i+1} value={i+1}>
                {i+1}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <span className="text-gray-600 text-lg"><ChildrenIcon color="#344054"/></span>
        <div>
          <p className="text-sm text-orange-500 font-medium">Children</p>
          <select
            value={children}
            onChange={(e) => onChange(adults, e.target.value)}
            className="font-semibold bg-transparent border-b border-gray-300 text-gray-700 focus:outline-none focus:border-orange-500 w-16 text-center"
          >
            {[...Array(10)].map((_, i) => (
              <option key={i+1} value={i+1}>
                {i+1}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
