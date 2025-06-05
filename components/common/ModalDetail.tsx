import DateBox from "./DateBox";
import SelectBox from "./SelectBox";
import { useForm } from "react-hook-form";
import TextField from "./TextField";
import TextFiledWithSelectBox from "./TextFiledWithSelectBox";



export default function ModalDetail() {
    const { register, control, handleSubmit } = useForm();
    return (
        <div className="flex flex-row gap-4" style={{
                      fontFamily: '"IBM Plex Sans Thai Looped", sans-serif',
                    }}>
            <div className="flex-1 flex flex-col gap-4">
                {/* Header */}
                <h1 className="text-black font-bold text-lg">Detail</h1>
                {/* Description */}
                <div className="flex flex-col gap-4">
                    <SelectBox
                        label="Villa Type"
                        name="villaType"
                        register={register}
                        options={[
                            { label: "The Infinity Villa", value: "infinity" },
                            { label: "The Horizon Retreat", value: "horizon" },
                        ]}
                    />
                    <DateBox label="Date" name="checkIn" control={control} required />
                    <div className="flex flex-col gap-0">
                        <div className="flex flex-row justify-between gap-4">
                            <SelectBox
                                label="Adults"
                                name="adults"
                                register={register}
                                options={[
                                    { label: "1", value: "1" },
                                    { label: "2", value: "2" },
                                    { label: "3", value: "3" },
                                    { label: "4", value: "4" },
                                    { label: "5", value: "5" },
                                    { label: "6", value: "6" },
                                    { label: "7", value: "7" },
                                    { label: "8", value: "8" },
                                    { label: "9", value: "9" },
                                    { label: "10", value: "10" },
                                ]}
                            />
                            <SelectBox
                                label="Children"
                                name="Children"
                                register={register}
                                options={[
                                    { label: "1", value: "1" },
                                    { label: "2", value: "2" },
                                    { label: "3", value: "3" },
                                    { label: "4", value: "4" },
                                    { label: "5", value: "5" },
                                    { label: "6", value: "6" },
                                    { label: "7", value: "7" },
                                    { label: "8", value: "8" },
                                    { label: "9", value: "9" },
                                    { label: "10", value: "10" },
                                ]}
                            />
                        </div>

                        <span className="text-[var(--color-secondary)] text-sm">Maximum occupancy: 10 guests</span>
                    </div>
                    <TextField label=""
                        name="message"
                        register={register}
                        required
                        multiline
                        rows={4}
                        placeholder="Special requests or notes for your stay" />
                    {/* <textarea className="border rounded-2xl border-gray-300 p-4 font-normal text-[var(--color-secondary)]" rows={6} placeholder="Special requests or notes for your stay." /> */}
                </div>
            </div>
            <div className="flex-1 flex flex-col gap-4">
                {/* Header */}
                <h1 className="text-black font-bold text-lg">Contact Info</h1>
                {/* Description */}
                <div className="flex flex-col gap-4">
                    <TextField label="Legal name"
                        name="name"
                        register={register}
                        required
                        placeholder="First anme - Last name"

                        subText="Make sure this matches the name on your government ID" />
                    <TextFiledWithSelectBox
                        label="Phone number"
                        name="phoneNumber"
                        register={register}
                        required
                        placeholder="Your phone number"
                        showSelect
                        type="phone"
                        selectName="countryCode"
                        selectOptions={[
                            { value: "TH", label: "TH +66" },
                            { value: "US", label: "US +1" },
                            { value: "UK", label: "UK +44" },
                        ]}
                    />
                    <TextField label="Email"
                        name="name"
                        register={register}
                        required
                        type='email'
                        placeholder="email@example.com" />
                    <div className="w-full flex">
                        <button className=" bg-blue-500 text-white text-xl py-3.5 px-7 font-medium rounded-lg hover:bg-blue-600 w-full" >
                            Reserve
                        </button>
                    </div>

                </div>
            </div>


        </div>
    )
}