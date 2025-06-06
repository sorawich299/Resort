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
  rules?: object;
  error?: string | undefined;
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
  rules,
  error,
}) => {
  return (
    <div className="flex-1 flex flex-col gap-0">
      <label className="text-sm font-medium text-[var(--color-logo)] block mb-1">
        {label}
      </label>
      {multiline ? (
        <textarea
          {...register(name, { required, ...rules })}
          className={`w-full border px-2  rounded-lg  ${error ? 'border-red-300' : 'border-gray-300'}`}
          placeholder={placeholder}
          rows={rows}
        />
      ) : (
        <input
          {...register(name, { required, ...rules })}
          type={type}
          className={`w-full border-b px-2 ${error ? 'border-red-300' : 'border-gray-300'}`}
          placeholder={placeholder}
        />
      )}
      {error ? (
        <p className="text-red-500 text-xs mt-1">{error}</p>
      ) : (
        subText && <span className="text-sm text-[var(--color-secondary)]">{subText}</span>
      )}


    </div>
  );
};

export default TextField;
