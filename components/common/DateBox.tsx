import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Control,
  Controller,
  FieldValues,
  Path,
  UseFormWatch,
  FieldError,
} from "react-hook-form";

type DateRangeBoxProps<T extends FieldValues> = {
  label: string;
  startDateName: Path<T>;
  endDateName: Path<T>;
  control: Control<T>;
  watch: UseFormWatch<T>;
  required?: boolean;
  error?: {
    start?: FieldError;
    end?: FieldError;
  };
};

const DateRangeBox = <T extends FieldValues>({
  label,
  startDateName,
  endDateName,
  control,
  watch,
  required,
  error,
}: DateRangeBoxProps<T>) => {
  const startDate = watch(startDateName);
  const endDate = watch(endDateName);

  const hasError = Boolean(error?.start || error?.end);

  return (
    <div>
      <label className="text-sm font-medium text-[var(--color-logo)] block mb-1">
        {label}
      </label>
      <div
        className={`flex gap-2 items-center border-b ${
          hasError ? "border-red-500" : "border-black"
        }`}
      >
        <Controller
          control={control}
          name={startDateName}
          rules={required ? { required: "Start date is required" } : {}}
          render={({ field }) => (
            <DatePicker
              selected={field.value}
              onChange={(date) => field.onChange(date)}
              selectsStart
              startDate={field.value}
              endDate={endDate as Date}
              dateFormat="EEE, dd MMM yyyy"
              placeholderText="Start Date"
              className="w-full p-2"
            />
          )}
        />
        <span className="px-2">-</span>
        <Controller
          control={control}
          name={endDateName}
          rules={required ? { required: "End date is required" } : {}}
          render={({ field }) => (
            <DatePicker
              selected={field.value}
              onChange={(date) => field.onChange(date)}
              selectsEnd
              startDate={startDate as Date}
              endDate={field.value}
              minDate={startDate as Date}
              dateFormat="EEE, dd MMM yyyy"
              placeholderText="End Date"
              className="w-full p-2"
            />
          )}
        />
      </div>

      {(error?.start || error?.end) && (
        <div className="flex gap-4 mt-1">
          {error?.start && (
            <p className="text-red-500 text-xs">{error.start.message}</p>
          )}
          {error?.end && (
            <p className="text-red-500 text-xs">{error.end.message}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default DateRangeBox;
