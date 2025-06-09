import React, { useState, useEffect } from "react";
import countries from "../../public/data/CountryCodes.json";
import { useFormContext } from "react-hook-form";

type TextFieldProps = {
  label: string;
  name: string;
  register: any;
  required?: boolean;
  type?: string;
  placeholder?: string;
  multiline?: boolean;
  rows?: number;
  subText?: string;
  options?: { value: string; label: string }[];
  showSelect?: boolean;
  selectLabel?: string;
  selectName?: string;
  rules?: object;
  selectRules?: object;
  error?: string;
  selectError?: string;
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
  const { setValue } = useFormContext();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInputValue(val);
    setDropdownOpen(true);
  };

  const handleOptionClick = (value: string, label: string) => {
    setSelectedValue(value);
    setInputValue(label);
    setValue(selectName || "select", value); // <- Key part
    setDropdownOpen(false);
  };

  useEffect(() => {
    if (selectedValue) {
      const found = selectOptions.find((opt) => opt.value === selectedValue);
      if (found) setInputValue(found.label);
    }
  }, [selectedValue]);

  return (
    <div className="flex-1">
      <label className="text-sm font-medium text-[var(--color-logo)] block mb-1">
        {label}
      </label>
      <div className={`flex items-center border-b-1 ${selectError || error ? "border-red-300" : "border-gray-300"}`}>
        {showSelect && (
          <div className="relative">
            <input
              {...register(selectName || "select", { required, ...selectRules })}
              type="text"
              className={`p-2 w-40 bg-transparent focus:outline-none ${selectError ? "border-red-300" : ""}`}
              placeholder="Search or Select..."
              value={inputValue}
              onChange={handleInputChange}
              onClick={() => setDropdownOpen(true)}
              autoComplete="off"
            />
            {dropdownOpen && (
              <ul className="absolute bg-white border border-gray-300 w-40 mt-1 max-h-40 overflow-y-auto z-10">
                {selectOptions
                  .filter((option) => option.label.toLowerCase().includes(inputValue.toLowerCase()))
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
          className={`flex-1 p-2 bg-transparent focus:outline-none ${error ? "border-red-300" : ""}`}
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
