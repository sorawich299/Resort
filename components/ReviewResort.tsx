'use client';
import Image, { StaticImageData } from 'next/image';
import AnimatedFadeInUp from './AnimationFadeUp';


interface ReviewResortProps{
    image: StaticImageData;
    title: string;
    subTitle: string;
}
export default function ReviewResort({image, title, subTitle}:ReviewResortProps) {
    return (
        <AnimatedFadeInUp>
        <section className="relative h-[50vh] w-full flex items-center justify-center text-white px-20">
            {/* Background Image */}
            
            <Image
                src={image}
                alt="Hero Background"
                fill
                className="object-cover z-0"
                priority
            />
            <div className="absolute inset-0 bg-black opacity-50 z-10" />

            {/* Overlay Content */}
            <div className="relative z-10 text-center">
                <h1 className="text-5xl font-bold mb-2">{title}</h1>
                <p className="text-lg mb-4">{subTitle}</p>
                <button className="cursor-pointer px-6 py-2 bg-white text-black border border-gray-200 rounded-xl shadow hover:shadow-md transition" onClick={()=>{console.log('A')}}>
                    Reserve
                </button>
            </div>
        </section>
        </AnimatedFadeInUp>

    );
}
