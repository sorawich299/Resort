import React from "react";

type Option = {
  label: string;
  value: string;
};

type SelectBoxProps = {
  label: string;
  name: string;
  options: Option[];
  register: any;
  rules?: object;
  required?: boolean;
  error?: string;
};

const SelectBox: React.FC<SelectBoxProps> = ({
  label,
  name,
  options,
  register,
  rules,
  required,
  error,
}) => {
  return (
    <div className="flex-1">
      <label className="text-sm font-medium text-[var(--color-logo)] block mb-1">
        {label}
      </label>
      <select
        {...register(name, { required, ...rules })}
        className={`w-full px-2 py-2 border-b-1 focus:outline-none ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default SelectBox;
