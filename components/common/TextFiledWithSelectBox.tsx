import React, { useState } from "react";
import countries from "../../public/data/CountryCodes.json";

type Option = { value: string; label: string };

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
  rules?: object;
  selectRules?: object;
  error?: string; // Error message for the main input
  selectError?: string; // Error message for the select box
};

const TextFiledWithSelectBox: React.FC<TextFieldProps> = ({
  label,
  name,
  register,
  required,
  type = "text",
  placeholder = "",
  multiline = false,
  rows,
  subText,
  showSelect = false,
  selectLabel,
  selectName,
  rules,
  selectRules,
  error,
  selectError,
}) => {
  const selectOptions = countries.map((country) => ({
    value: country.code,
    label: `${country.code} (${country.dial_code})`,
  }));

  const [inputValue, setInputValue] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInputValue(val);
    setDropdownOpen(true);
  };

  const handleOptionClick = (value: string, label: string) => {
    setSelectedValue(value);
    setInputValue(label); // Set input text ให้ตรงกับ label ของ option ที่เลือก
    setDropdownOpen(false);
  };

  return (
    <div className="flex-1">
      <label className="text-sm font-medium text-[var(--color-logo)] block mb-1">
        {label}
      </label>
      <div
        className={`flex items-center border-b-1 ${
          selectError || error ? "border-red-300" : "border-gray-300"
        }`}
      >
        {showSelect && (
          <div className="relative">
            <input
              {...register(selectName || "select", { required, ...selectRules })}
              type="text"
              className={`p-2 w-40 bg-transparent focus:outline-none ${
                selectError ? "border-red-300" : ""
              }`}
              placeholder="Search or Select..."
              value={inputValue}
              onChange={handleInputChange}
              onClick={() => setDropdownOpen(true)}
              autoComplete="off"
            />
            {dropdownOpen && (
              <ul
                className="absolute bg-white border border-gray-300 w-40 mt-1 max-h-40 overflow-y-auto z-10"
                style={{ maxHeight: "200px" }}
              >
                {selectOptions
                  .filter((option) =>
                    option.label.toLowerCase().includes(inputValue.toLowerCase())
                  )
                  .map((option) => (
                    <li
                      key={option.value}
                      className="p-2 hover:bg-gray-200 cursor-pointer"
                      onClick={() => handleOptionClick(option.value, option.label)}
                    >
                      {option.label}
                    </li>
                  ))}
              </ul>
            )}
          </div>
        )}
        <input
          {...register(name, { required, ...rules })}
          type={type}
          className={`flex-1 p-2 bg-transparent focus:outline-none ${
            error ? "border-red-300" : ""
          }`}
          placeholder={placeholder}
          autoComplete="off"
        />
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
      {selectError && <p className="text-red-500 text-xs mt-1">{selectError}</p>}
      {subText && <span className="text-sm text-[var(--color-secondary)]">{subText}</span>}
    </div>
  );
};

export default TextFiledWithSelectBox;
