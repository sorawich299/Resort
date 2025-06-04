'use client';
import Image, { StaticImageData } from 'next/image';
import AnimatedFadeInUp from './AnimationFadeUp';
import Modal from './Modal';
import { useState } from 'react';
import ModalDetail from './common/ModalDetail';


interface ReviewResortProps {
    image: StaticImageData;
    title: string;
    subTitle: string;
}
export default function ReviewResort({ image, title, subTitle }: ReviewResortProps) {
    const [isOpen, setIsOpen] = useState<boolean>(true);
    return (
        <>
            <AnimatedFadeInUp>
                <section className="relative h-[900px] w-full flex items-center justify-center text-white px-5 lg:px-20">
                    {/* Background Image */}

                    <Image
                        src={image}
                        alt="Hero Background"
                        fill
                        className="object-cover z-0"
                        priority
                    />
                    <div className="absolute inset-0 bg-black opacity-50 z-10" />

                    {/* Overlay Content */}                <div className="relative py-14 lg:py-28 px-8 lg:px-16 z-10 text-center w-full h-full flex flex-col justify-center items-center gap-6">
                        <h1 className="text-5xl font-medium text-white">{title}</h1>
                        <p className="lg:max-w-[560px] text-lg font-normal text-white" style={{ fontFamily: '"IBM Plex Sans Thai Looped", sans-serif' }}>{subTitle}</p>
                        <button className="cursor-pointer px-7 py-3.5 bg-white text-black border border-gray-200 rounded-lg font-medium" onClick={() => setIsOpen(!isOpen)}>
                            Reserve
                        </button>
                    </div>

                </section>
            </AnimatedFadeInUp>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}>
                <ModalDetail/>
            </Modal>
        </>
    );
}
