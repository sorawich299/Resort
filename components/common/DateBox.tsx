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
};

const DateRangeBox = <T extends FieldValues>({
    label,
    startDateName,
    endDateName,
    control,
    watch,
    required,
}: DateRangeBoxProps<T>) => {
    // ใช้ watch เพื่อให้ component รู้ว่าค่าที่เปลี่ยนแปลงคืออะไร
    const startDate = watch(startDateName);
    const endDate = watch(endDateName);

    return (
        <div>
            <label className="text-sm font-medium text-[var(--color-logo)] block mb-1">{label}</label>
            <div className="flex gap-2">
                {/* Start Date */}
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
                            className="w-full border-b p-2"
                        />
                    )}
                />
                {/* End Date */}
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
                            className="w-full border-b p-2"
                        />
                    )}
                />
            </div>
        </div>
    );
};

export default DateRangeBox;
