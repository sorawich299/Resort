import React from "react";

export const VillaType: React.FC = () => {
  return (
    <div className="flex items-center space-x-2">
      <span className="text-gray-600 text-lg">🏠</span>
      <div>
        <p className="text-sm text-orange-500 font-medium">Villa Type</p>
        <select className="font-semibold bg-transparent border-b border-gray-300 text-gray-700 focus:outline-none focus:border-orange-500">
          <option>The Infinity Villa</option>
          <option>Beachfront Villa</option>
          <option>Mountain Retreat</option>
        </select>
      </div>
    </div>
  );
};
