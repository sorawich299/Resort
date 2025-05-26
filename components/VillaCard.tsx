import Image, { StaticImageData } from "next/image";
import AnimatedFadeInUp from "./AnimationFadeUp";

interface Features {
    subtitle?: string;
    view?: string;
    bedrooms?: number;
}

interface VillaCardProps {
    title: string;
    description: string;
    image: string | StaticImageData; // รองรับทั้ง string และ StaticImageData
    features: Features;
}

const VillaCard: React.FC<VillaCardProps> = ({ title, description, image, features }) => {
    return (
        <div className="max-w-4xl mx-auto p-4 flex gap-6 mb-6">
            {/* Image Section */}
            <div className="relative w-1/2 h-96 overflow-hidden rounded-lg">
                <AnimatedFadeInUp><Image
                    src={image} // รองรับ StaticImageData
                    alt={title}
                    layout="fill"
                    style={{ objectFit: "cover" }}
                    className="rounded-lg"
                /></AnimatedFadeInUp>

            </div>

            {/* Text Section */}
            <div className="flex flex-col justify-between w-1/2">
                <AnimatedFadeInUp delay={0.25}>
                    <div>
                        <h5 className="text-sm text-gray-500">
                            {features.subtitle || "Featured Villa"}
                        </h5>
                        <h2 className="text-2xl font-bold mt-2">{title}</h2>
                        <p className="text-gray-700 mt-4">{description}</p>
                        <div className="flex items-center mt-4 space-x-4 text-blue-500">
                            <div className="flex items-center gap-2">
                                <span>🌊</span>
                                <span>{features.view || "Ocean View"}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span>🛏️</span>
                                <span>{features.bedrooms || "N/A"} bedrooms</span>
                            </div>
                        </div>
                        <button className="mt-6 px-6 py-2 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-600">
                            Reserve
                        </button>
                    </div>

                </AnimatedFadeInUp>

            </div>
        </div>
    );
};

export default VillaCard;
