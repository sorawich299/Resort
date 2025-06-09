// components/TextField.tsx
import React from "react";
import { RegisterOptions, UseFormRegister } from "react-hook-form";

type TextFieldProps = {
  label: string;
  name: string;
  register: UseFormRegister<any>; // ใช้ type ของ react-hook-form โดยตรง
  required?: boolean;
  type?: string;
  placeholder?: string;
  multiline?: boolean;
  rows?: number;
  subText?: string;
  rules?: RegisterOptions;
  error?: string;
};

const TextField: React.FC<TextFieldProps> = ({
  label,
  name,
  register,
  required,
  type = "text",
  placeholder = "",
  multiline = false,
  rows = 3,
  subText,
  rules = {},
  error,
}) => {
  const finalRules: RegisterOptions = {
    required: required ? "This field is required" : false,
    ...rules,
  };

  return (
    <div className="flex-1 flex flex-col gap-0">
      {label && (
        <label className="text-sm font-medium text-[var(--color-logo)] block mb-1">
          {label}
        </label>
      )}

      {multiline ? (
        <textarea
          {...register(name, finalRules)}
          className={`w-full border px-2 rounded-lg ${error ? "border-red-300" : "border-gray-300"}`}
          placeholder={placeholder}
          rows={rows}
        />
      ) : (
        <input
          {...register(name, finalRules)}
          type={type}
          className={`w-full border-b px-2 ${error ? "border-red-300" : "border-gray-300"}`}
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
