'use client';
import SelectBox from "./SelectBox";
import { FormProvider, useForm } from "react-hook-form";
import TextField from "./TextField";
import TextFiledWithSelectBox from "./TextFiledWithSelectBox";
import DateRangeBox from "./DateBox";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { format } from "date-fns";

export interface FormValues {
    villaType: string;
    startDate: Date | null;
    endDate: Date | null;
    adults: string;
    children: string;
    message: string;
    name: string;
    phoneNumber: string;
    email: string;
    countryCode: string;
}

export interface ModalDetailProps {
    defaultValues?: Partial<FormValues>;
}

const defaultFormValues: FormValues = {
    villaType: "",
    startDate: null,
    endDate: null,
    adults: "",
    children: "",
    message: "",
    name: "",
    phoneNumber: "",
    email: "",
    countryCode: "",
};


export default function ModalDetail({ defaultValues = {} }: ModalDetailProps) {
    const [sending, setSending] = useState(false);
    const methods = useForm<FormValues>({
        defaultValues: {
            ...defaultFormValues,
            ...defaultValues,
        },
        shouldUnregister: true,
    });

    const onSubmit = async (data: FormValues) => {
        let formattedStart = '-';
        let formattedEnd = '-';
        let stayNights = '0';

        if (data.startDate && data.endDate) {
            const start = new Date(data.startDate);
            const end = new Date(data.endDate);
            formattedStart = format(start, 'yyyy-MM-dd');
            formattedEnd = format(end, 'yyyy-MM-dd');
            const diffTime = end.getTime() - start.getTime();
            stayNights = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24))).toString();
        }

        setSending(true);
        try {
            const formData = {
                name: data.name,
                email: data.email,
                countryCode: data.countryCode,
                phoneNumber: data.phoneNumber,
                villaType: data.villaType,
                startDate: formattedStart,
                endDate: formattedEnd,
                adults: data.adults,
                children: data.children,
                message: data.message,
                stayDate: stayNights,
            };

            await emailjs.send(
                'service_hgyjn9e',
                'template_yb9kxof',
                formData,
                'w4jT__kyB1Xq52xiB'
            );

            const formDataReply = {
                stayDate: stayNights,
                name: data.name,
                email: data.email,
                villaType: data.villaType,
                startDate: formattedStart,
                endDate: formattedEnd,
                adults: data.adults,
                children: data.children,
                message: data.message,
            };

            await emailjs.send(
                'service_hgyjn9e',
                'template_0ts40k9',
                formDataReply,
                'w4jT__kyB1Xq52xiB'
            );

            alert('Reservation submitted successfully');
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Something went wrong. Please try again.');
        } finally {
            setSending(false);
        }
    };

    return (
        <FormProvider {...methods}>
            <form
                className="flex flex-col lg:flex-row gap-4"
                style={{ fontFamily: '"IBM Plex Sans Thai Looped", sans-serif' }}
                onSubmit={methods.handleSubmit(onSubmit)}
                autoComplete="off"
            >
                <div className="flex-1 flex flex-col gap-4">
                    <h1 className="text-black font-bold text-lg">Detail</h1>
                    <div className="flex flex-col gap-4">
                        <SelectBox
                            label="Villa Type"
                            name="villaType"
                            register={methods.register}
                            rules={{ required: "Villa Type is required" }}
                            options={[
                                { label: "Please select", value: "" },
                                { label: "The Infinity Villa", value: "infinity" },
                                { label: "The Horizon Retreat", value: "horizon" },
                            ]}
                            error={methods.formState.errors.villaType?.message}
                        />
                        <DateRangeBox
                            label="Select Date Range"
                            startDateName="startDate"
                            endDateName="endDate"
                            control={methods.control}
                            watch={methods.watch}
                            required
                            error={{
                                start: methods.formState.errors.startDate,
                                end: methods.formState.errors.endDate,
                            }}
                        />
                        <div className="flex flex-col gap-0">
                            <div className="flex flex-col md:flex-row justify-between gap-4">
                                <SelectBox
                                    label="Adults"
                                    name="adults"
                                    register={methods.register}
                                    rules={{ required: "Number of adults is required" }}
                                    options={[
                                        { label: "Please select", value: "" },
                                        ...[...Array(10).keys()].map((i) => ({
                                            label: (i + 1).toString(),
                                            value: (i + 1).toString(),
                                        })),
                                    ]}
                                    error={methods.formState.errors.adults?.message}
                                />
                                <SelectBox
                                    label="Children"
                                    name="children"
                                    register={methods.register}
                                    rules={{ required: "Number of children is required" }}
                                    options={[
                                        { label: "Please select", value: "" },
                                        ...[...Array(10).keys()].map((i) => ({
                                            label: (i + 1).toString(),
                                            value: (i + 1).toString(),
                                        })),
                                    ]}
                                    error={methods.formState.errors.children?.message}
                                />
                            </div>
                            <span className="text-[var(--color-secondary)] text-sm">
                                Maximum occupancy: 10 guests
                            </span>
                        </div>
                        <TextField
                            label=""
                            name="message"
                            register={methods.register}
                            rules={{ required: "Message is required" }}
                            required
                            multiline
                            rows={4}
                            placeholder="Special requests or notes for your stay"
                            error={methods.formState.errors.message?.message}
                        />
                    </div>
                </div>
                <div className="flex-1 flex flex-col gap-4">
                    <h1 className="text-black font-bold text-lg">Contact Info</h1>
                    <div className="flex flex-col gap-4">
                        <TextField
                            label="Legal name"
                            name="name"
                            register={methods.register}
                            rules={{ required: "Name is required" }}
                            required
                            placeholder="First name - Last name"
                            subText="Make sure this matches the name on your government ID"
                            error={methods.formState.errors.name?.message}
                        />
                        <TextFiledWithSelectBox
                            label="Phone number"
                            name="phoneNumber"
                            register={methods.register}
                            rules={{ required: "Phone number is required" }}
                            required
                            placeholder="Your phone number"
                            showSelect
                            type="phone"
                            selectName="countryCode"
                            selectRules={{ required: "Country code is required" }}
                            error={methods.formState.errors.phoneNumber?.message}
                        />
                        <TextField
                            label="Email"
                            name="email"
                            register={methods.register}
                            rules={{ required: "Email is required" }}
                            required
                            type="email"
                            placeholder="email@example.com"
                            error={methods.formState.errors.email?.message}
                        />
                        <div className="w-full flex">
                            <button
                                type="submit"
                                className="bg-blue-500 text-white text-xl py-3.5 px-7 font-medium rounded-lg hover:bg-blue-600 w-full"
                                disabled={sending}
                            >
                                {sending ? 'Sending...' : 'Reserve'}
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </FormProvider>
    );
}
