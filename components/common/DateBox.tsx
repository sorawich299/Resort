import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Control, Controller, FieldValues, Path, UseFormWatch } from "react-hook-form";

type DateRangeBoxProps<T extends FieldValues> = {
    label: string;
    startDateName: Path<T>;
    endDateName: Path<T>;
    control: Control<T>;
    watch: UseFormWatch<T>;
    required?: boolean;
    error?: string | undefined;
};

const DateRangeBox = <T extends FieldValues>({
    label,
    startDateName,
    endDateName,
    control,
    watch,
    required,
    error, // รับ error prop
}: DateRangeBoxProps<T>) => {
    const startDate = watch(startDateName);
    const endDate = watch(endDateName);

    return (
        <div>
            <label className="text-sm font-medium text-[var(--color-logo)] block mb-1">{label}</label>
            <div className={`flex gap-2 items-center border-b ${error ? "border-red-500" : "border-black"}`}>
                <Controller
                    control={control}
                    name={startDateName}
                    rules={{ required }}
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
                    rules={{ required }}
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
            {error !== undefined && (
                <p className="text-red-500 text-xs mt-1">{error}</p>
            )}
        </div>
    );
};


export default DateRangeBox;
