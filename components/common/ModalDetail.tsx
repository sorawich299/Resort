'use client';
import DateBox from "./DateBox";
import SelectBox from "./SelectBox";
import { FormProvider, useForm } from "react-hook-form";
import TextField from "./TextField";
import TextFiledWithSelectBox from "./TextFiledWithSelectBox";
import DateRangeBox from "./DateBox";

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

export default function ModalDetail() {
    const methods = useForm<FormValues>({
        defaultValues: {
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
        },
        shouldUnregister: true,
    });

    const onSubmit = async (data: FormValues) => {
        try {
            const res = await fetch("http://localhost:3001/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await res.json();

            if (res.ok) {
                alert("✅ Email sent successfully!");
            } else {
                alert("❌ Failed to send email: " + result.error);
            }
        } catch (err) {
            console.error("Network error:", err);
            alert("❌ Network error occurred.");
        }
    };

    return (
        <FormProvider {...methods}>
            <form
                className="flex flex-row gap-4"
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
                            <div className="flex flex-row justify-between gap-4">
                                <SelectBox
                                    label="Adults"
                                    name="adults"
                                    register={methods.register}
                                    rules={{ required: "Number of adults is required" }}
                                    options={[
                                        { label: "Please select", value: "" }, // ✅ Default
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
                                        { label: "Please select", value: "" }, // ✅ Default
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
                            >
                                Reserve
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </FormProvider>
    );
}
