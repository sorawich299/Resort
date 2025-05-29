import Image from "next/image";
import Infinity from '../public/images/Information/Infinity.png';

import Horizon from "../public/images/Information/Horizon.png";
import Link from "next/link";
import LogoIcon from "@/public/icons/LogoIcon";
import AnimatedFadeInUp from "./AnimationFadeUp";

export default function Information() {
  return (
    <section className="bg-white text-center px-4 sm:px-6 md:px-12 lg:px-32 py-12 sm:py-20 lg:py-28 flex flex-col gap-12 sm:gap-16 items-center justify-center">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:gap-5">
        <div className="text-2xl sm:text-3xl font-bold flex justify-center mb-2">
          <LogoIcon color="black" width="120" height="48" />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black font-semibold">
          Solunar.
        </h1>
        <p
          className="text-sm sm:text-base md:text-lg mt-2 sm:mt-4 text-black max-w-xl mx-auto"
          style={{ fontFamily: '"IBM Plex Sans Thai Looped", sans-serif' }}
        >
          Each private suite is a sanctuary of comfort, complete with a sea-view jacuzzi and floor-to-ceiling windows.
        </p>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 w-full max-w-6xl px-2 sm:px-4">
        {[
          {
            alt: "The Infinity Villa",
            label: "The Infinity Villa",
            slug: "/Infinity",
            image: Infinity,
          },
          {
            alt: "The Horizon Retreat",
            label: "The Horizon Retreat",
            slug: "/Horizon",
            image: Horizon,
          },
        ].map((villa, index) => (
          <AnimatedFadeInUp
            key={villa.alt}
            delay={index * 0.25}
            y={300}
            className="flex justify-center"
          >
            <Link
              href={villa.slug}
              className="group relative block w-full max-w-[440px] aspect-[4/3] sm:aspect-[5/4] md:aspect-square overflow-hidden rounded-xl shadow-md transition-transform duration-300"
            >
              <Image
                src={villa.image}
                alt={villa.alt}
                fill
                className="object-cover transition duration-300 group-hover:brightness-110"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 z-10" />

              <div className="absolute inset-0 bottom-10 z-20 flex justify-center items-center md:items-end">
                <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-white text-center mb-0 md:mb-6">
                  {villa.label}
                </div>
              </div>
            </Link>
          </AnimatedFadeInUp>

        ))}
      </div>
    </section>
  );
}
