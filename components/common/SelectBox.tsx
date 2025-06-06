// components/SelectBox.tsx
import React from "react";

type Option = {
  label: string;
  value: string;
};

type SelectBoxProps = {
  label: string;
  name: string;
  options: Option[];
  register: any; // React Hook Form register function
  rules?: object;
  required?: boolean;
  defaultValue?: string; // เพิ่มตรงนี้
  error?: string | undefined;
};

const SelectBox: React.FC<SelectBoxProps> = ({
  label,
  name,
  options,
  register,
  rules,
  required,
  defaultValue,
  error,  // รับ error prop
}) => {
  return (
    <div className="flex-1">
      <label className="text-sm font-medium text-[var(--color-logo)] block mb-1">{label}</label>
      <select
        {...register(name, { required, ...rules })}
        className={`w-full px-2 focus:outline-none border-b-1 ${error ? 'border-red-300' : 'border-gray-300'}`}
        defaultValue={defaultValue}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="text-red-500 text-xs mt-1">{error}</p>
      )}
    </div>
  );
};
export default SelectBox;
