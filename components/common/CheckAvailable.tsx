import React, { useState, useEffect, useRef } from 'react';

type DateRangePickerProps = {
  onChange?: (start: string, end: string) => void;
  placeholder?: string;
};

export const DateRangePicker: React.FC<DateRangePickerProps> = ({
  onChange,
  placeholder = 'Select dates',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isOpen &&
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Notify parent on change
  useEffect(() => {
    onChange && onChange(start, end);
  }, [start, end, onChange]);

  const clearDates = () => {
    setStart('');
    setEnd('');
  };

  return (
    <div className="relative inline-block" ref={containerRef}>
      {/* Toggle button */}
      <button
        type="button"
        className="flex items-center space-x-2 px-4 py-2 text-gray-700 bg-white"
        onClick={() => setIsOpen((o) => !o)}
      >
        <span className="text-lg">📅</span>
        <div className="flex flex-col">
          <span className="font-medium text-orange-500">{placeholder}</span>
          {start && end ? (
            <div className="flex flex-col items-start leading-tight text-sm font-medium">
              <span>{start}</span>
              <span>{end}</span>
            </div>
          ) : (
            <span className="font-medium text-black">{placeholder}</span>
          )}
        </div>


      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute z-10 mt-2 w-64 bg-white border rounded-lg shadow-lg p-4 space-y-4">
          <div className="flex flex-col">
            <label className="text-sm text-orange-500 font-medium">
              Check-in
            </label>
            <input
              type="date"
              value={start}
              onChange={(e) => setStart(e.target.value)}
              className="mt-1 font-semibold bg-transparent border-b border-gray-300 text-gray-700 focus:outline-none focus:border-orange-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-orange-500 font-medium">
              Check-out
            </label>
            <input
              type="date"
              value={end}
              onChange={(e) => setEnd(e.target.value)}
              className="mt-1 font-semibold bg-transparent border-b border-gray-300 text-gray-700 focus:outline-none focus:border-orange-500"
            />
          </div>
          {/* Clear button */}
          {(start || end) && (
            <button
              type="button"
              onClick={clearDates}
              className="w-full text-center text-sm text-gray-500 hover:text-gray-700"
            >
              Clear dates
            </button>
          )}
        </div>
      )}
    </div>
  );
};
