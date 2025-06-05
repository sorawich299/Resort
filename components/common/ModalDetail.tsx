'use client';
import DateBox from "./DateBox";
import SelectBox from "./SelectBox";
import { useForm } from "react-hook-form";
import TextField from "./TextField";
import TextFiledWithSelectBox from "./TextFiledWithSelectBox";

interface FormValues {
    villaType: string;
    checkIn: string;
    adults: string;
    children: string;
    message: string;
    name: string;
    phoneNumber: string;
    email: string;
    countryCode: string
}

export default function ModalDetail() {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<FormValues>();

    const onSubmit = (data: FormValues) => {
        console.log("Form Data Submitted:", data);
        alert("Form submitted successfully!");
    };

    return (
        <form
            className="flex flex-row gap-4"
            style={{ fontFamily: '"IBM Plex Sans Thai Looped", sans-serif' }}
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className="flex-1 flex flex-col gap-4">
                <h1 className="text-black font-bold text-lg">Detail</h1>
                <div className="flex flex-col gap-4">
                    <SelectBox
                        label="Villa Type"
                        name="villaType"
                        register={register}
                        rules={{ required: "Villa Type is required" }}
                        options={[
                            { label: "Please select", value: "" },
                            { label: "The Infinity Villa", value: "infinity" },
                            { label: "The Horizon Retreat", value: "horizon" },
                        ]}
                    />
                    {errors.villaType && (
                        <span className="text-red-500">{errors.villaType.message}</span>
                    )}

                    <DateBox label="Date" name="checkIn" control={control} required />
                    {errors.checkIn && <span className="text-red-500">Date is required</span>}

                    <div className="flex flex-col gap-0">
                        <div className="flex flex-row justify-between gap-4">
                            <SelectBox
                                label="Adults"
                                name="adults"
                                register={register}
                                rules={{ required: "Number of adults is required" }}
                                options={[...Array(10).keys()].map((i) => ({
                                    label: (i + 1).toString(),
                                    value: (i + 1).toString(),
                                }))}
                            />
                            <SelectBox
                                label="Children"
                                name="children"
                                register={register}
                                rules={{ required: "Number of children is required" }}
                                options={[...Array(10).keys()].map((i) => ({
                                    label: (i + 1).toString(),
                                    value: (i + 1).toString(),
                                }))}
                            />
                        </div>
                        {errors.adults && (
                            <span className="text-red-500">{errors.adults.message}</span>
                        )}
                        {errors.children && (
                            <span className="text-red-500">{errors.children.message}</span>
                        )}

                        <span className="text-[var(--color-secondary)] text-sm">
                            Maximum occupancy: 10 guests
                        </span>
                    </div>

                    <TextField
                        label=""
                        name="message"
                        register={register}
                        // rules={{ required: "Message is required" }}
                        // required
                        multiline
                        rows={4}
                        placeholder="Special requests or notes for your stay"
                    />
                    {errors.message && (
                        <span className="text-red-500">{errors.message.message}</span>
                    )}
                </div>
            </div>
            <div className="flex-1 flex flex-col gap-4">
                <h1 className="text-black font-bold text-lg">Contact Info</h1>
                <div className="flex flex-col gap-4">
                    <TextField
                        label="Legal name"
                        name="name"
                        register={register}
                        rules={{ required: "Name is required" }}
                        required
                        placeholder="First name - Last name"
                        subText="Make sure this matches the name on your government ID"
                    />
                    {errors.name && (
                        <span className="text-red-500">{errors.name.message}</span>
                    )}

                    <TextFiledWithSelectBox
                        label="Phone number"
                        name="phoneNumber"
                        register={register}
                        rules={{ required: "Phone number is required" }}
                        required
                        placeholder="Your phone number"
                        showSelect
                        type="phone"
                        selectName="countryCode"
                        selectRules={{ required: "Country code is required" }}
                        selectOptions={[
                            { value: "TH", label: "TH +66" },
                            { value: "US", label: "US +1" },
                            { value: "UK", label: "UK +44" },
                        ]}
                    />
                    {errors.countryCode && (
                        <span className="text-red-500">{errors.countryCode.message}</span>
                    )}

                    {errors.phoneNumber && (
                        <span className="text-red-500">{errors.phoneNumber.message}</span>
                    )}
                    
                    <TextField
                        label="Email"
                        name="email"
                        register={register}
                        rules={{ required: "Email is required" }}
                        required
                        type="email"
                        placeholder="email@example.com"
                    />
                    {errors.email && (
                        <span className="text-red-500">{errors.email.message}</span>
                    )}

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
    );
}
