// components/DateBox.tsx
'use client';

import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Control, Controller } from "react-hook-form";

type DateBoxProps = {
    label: string;
    name: string;
    control: Control<any>; // กำหนดเป็น any หรือ Generic ตามฟอร์ม
    required?: boolean;
};

const DateBox: React.FC<DateBoxProps> = ({ label, name, control, required }) => {
    return (
        <div>
            <label className="text-sm font-medium text-orange-600 block mb-1">{label}</label>
            <Controller
                control={control}
                name={name}
                rules={{ required }}
                render={({ field }) => (
                    <DatePicker
                        selected={field.value ? field.value[0] : null}
                        onChange={(dates) => field.onChange(dates)}
                        startDate={field.value ? field.value[0] : null}
                        endDate={field.value ? field.value[1] : null}
                        selectsRange
                        dateFormat="EEE, dd MMM"
                        placeholderText="Select a date range"
                        className="w-full border-b p-2"
                    />
                )}
            />
        </div>
    );
};

export default DateBox;
