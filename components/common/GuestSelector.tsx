import React from "react";

export const GuestSelector: React.FC = () => {
  return (
    <div className="flex items-center space-x-6">
      <div className="flex items-center space-x-2">
        <span className="text-gray-600 text-lg">👤</span>
        <div>
          <p className="text-sm text-orange-500 font-medium">Adults</p>
          <select className="font-semibold bg-transparent border-b border-gray-300 text-gray-700 focus:outline-none focus:border-orange-500">
            {[...Array(5)].map((_, i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-gray-600 text-lg">🧒</span>
        <div>
          <p className="text-sm text-orange-500 font-medium">Children</p>
          <select className="font-semibold bg-transparent border-b border-gray-300 text-gray-700 focus:outline-none focus:border-orange-500">
            {[...Array(5)].map((_, i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
