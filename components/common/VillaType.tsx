import HomeIcon from "@/public/icons/HomeIcon";
import React from "react";

interface VillaTypeProps {
  value: string;
  onChange: (value: string) => void;
}

export const VillaType: React.FC<VillaTypeProps> = ({ value, onChange }) => {
  return (
    <div className="flex items-center gap-5">
      <span className="text-gray-600 text-lg"><HomeIcon color="#344054"/></span>
      <div>
        <p className="text-sm text-orange-500 font-medium">Villa Type</p>
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="font-semibold bg-transparent border-b border-gray-300 text-gray-700 focus:outline-none focus:border-orange-500"
        >
          <option value="">Please select</option>
          <option value="infinity">The Infinity Villa</option>
          <option value="horizon">The Horizon Retreat</option>
        </select>
      </div>
    </div>
  );
};
