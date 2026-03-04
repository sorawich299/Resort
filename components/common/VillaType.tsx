import HomeIcon from "@/public/icons/HomeIcon";
import React from "react";

interface VillaTypeProps {
  value: string;
  onChange: (value: string) => void;
}

export const VillaType: React.FC<VillaTypeProps> = ({ value, onChange }) => {
  return (
    <div className="flex items-center justify-between w-[240px] lg:w-auto lg:gap-5 text-xl font-bold">
      <span className="text-gray-600 "><HomeIcon color="#344054"/></span>
      <div>
        <p className=" text-orange-500 ">Villa Type</p>
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="bg-transparent border-b border-gray-300 text-gray-700 focus:outline-none focus:border-orange-500"
        >
          <option value="">Please select</option>
          <option value="infinity">The Infinity Villa</option>
          <option value="horizon">The Horizon Retreat</option>
        </select>
      </div>
    </div>
  );
};
