// components/TextField.tsx
import React from "react";

type TextFieldProps = {
  label: string;
  name: string;
  register: any; // React Hook Form register function
  required?: boolean;
  type?: string; // e.g., "text", "email", "password", etc.
  placeholder?: string;
  multiline?: boolean; // for multi-line text input
  rows?: number; // number of rows for multi-line input
  subText?: string;
  options?: { value: string; label: string }[]; // for select box options
  showSelect?: boolean; // whether to show a SelectBox alongside the TextField
  selectLabel?: string; // label for the SelectBox
  selectName?: string; // name for the SelectBox
  selectOptions?: { value: string; label: string }[]; // options for the SelectBox
  rules?: object;
  selectRules?: object;
};

const TextField: React.FC<TextFieldProps> = ({
  label,
  name,
  register,
  required,
  type = "text",
  placeholder = "",
  multiline = false,
  rows,
  subText,
  options,
  showSelect = false,
  selectLabel,
  selectName,
  selectOptions,
  rules,
  selectRules
}) => {
  return (
    <div className="flex-1">
      <label className="text-sm font-medium text-[var(--color-logo)] block mb-1">
        {label}
      </label>
      <div className="flex items-center border-b border-gray-300">
        {showSelect && selectOptions && (
          <select
            {...register(selectName || "select", { required, ...selectRules })}
            className="p-2 w-28 bg-transparent focus:outline-none"
          >
            <option value="">Select</option>
            {selectOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        )}
        <input
          {...register(name, { required, ...rules })}
          type={type}
          className="flex-1 p-2 bg-transparent focus:outline-none"
          placeholder={placeholder}
        />
      </div>
      {subText && (
        <span className="text-sm text-[var(--color-secondary)]">
          {subText}
        </span>
      )}
    </div>
  );
};

export default TextField;
