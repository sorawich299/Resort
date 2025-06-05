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
};

const SelectBox: React.FC<SelectBoxProps> = ({
  label,
  name,
  options,
  register,
  rules,
  required,
  defaultValue,  // รับ prop defaultValue
}) => {
  return (
    <div className="flex-1">
      <label className="text-sm font-medium text-[var(--color-logo)] block mb-1">{label}</label>
      <select
        {...register(name, { required, ...rules })}
        className="w-full border-b p-2 focus:outline-none"
        defaultValue={defaultValue} // ใส่ defaultValue ที่นี่
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
