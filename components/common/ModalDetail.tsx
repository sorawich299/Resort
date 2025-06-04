import DateBox from "./DateBox";
import SelectBox from "./SelectBox";
import { useForm } from "react-hook-form";



export default function ModalDetail() {
    const { register, control, handleSubmit } = useForm();
    return (
        <div className="flex flex-row gap-4">
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
                    <div className="flex flex-col gap-2">
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
                    </div>
                </div>
            </div>
            <div className="flex-1 flex flex-col gap-4">2</div>


        </div>
    )
}