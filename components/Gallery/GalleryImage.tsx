import Image, { StaticImageData } from "next/image";

interface GalleryImageProps {
    title: string;
    subtitle?: string;
    images: string[] | StaticImageData[]
}
export default function GalleryImage({ title, subtitle = "", images }: GalleryImageProps) {
    return (<div className="py-28 px-16 flex flex-col gap-8 max-w-[1200px] mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-orange-400">{title} {subtitle === "" ? "" : (<span className="text-[#344054] font-semibold">{'- ' + subtitle}</span>)}</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {images.map((src, imgIndex) => (
                <div
                    key={imgIndex}
                    className="relative w-full aspect-[3/2] overflow-hidden border border-white rounded-lg"
                >
                    <Image
                        src={src}
                        alt={`Image ${imgIndex}`}
                        fill
                        className="object-cover"
                    />
                </div>
            ))}
        </div>
    </div>)
}