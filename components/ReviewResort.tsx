'use client';
import Image from 'next/image';
import heroImage from '../assets/img/5146a703aa1d1ecaec17e76c534a98e984b15d2c.avif';

export default function ReviewResort() {
    return (
        <section className="relative h-[50vh] w-full flex items-center justify-center text-white px-20">
            {/* Background Image */}
            <Image
                src={heroImage}
                alt="Hero Background"
                fill
                className="object-cover z-0"
                priority
            />

            {/* Overlay Content */}
            <div className="relative z-10 text-center">
                <h1 className="text-5xl font-bold mb-2">Solunar.</h1>
                <p className="text-lg mb-4">Between Light, Sea & Serenity.</p>
                <button className="cursor-pointer px-6 py-2 bg-white text-black border border-gray-200 rounded-xl shadow hover:shadow-md transition" onClick={()=>{console.log('A')}}>
                    Reserve
                </button>
            </div>
        </section>

    );
}
