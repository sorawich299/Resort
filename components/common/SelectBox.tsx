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
  required?: boolean;
};

const SelectBox: React.FC<SelectBoxProps> = ({ label, name, options, register, required }) => {
  return (
    <div className="flex-1">
      <label className="text-sm font-medium text-[var(--color-logo)] block mb-1">{label}</label>
      <select
        {...register(name, { required })}
        className="w-full border-b p-2 focus:outline-none "
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectBox;
