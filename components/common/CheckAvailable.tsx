import React from "react";

export const CheckAvailable: React.FC = () => {
  return (
    <div className="flex items-center space-x-2">
      <span className="text-gray-600 text-lg">📅</span>
      <div>
        <p className="text-sm text-orange-500 font-medium">Check Available</p>
        <input
          type="date"
          className="font-semibold bg-transparent border-b border-gray-300 text-gray-700 focus:outline-none focus:border-orange-500"
        />
      </div>
    </div>
  );
};
