import Image, { StaticImageData } from "next/image";
import AnimatedFadeInUp from "./AnimationFadeUp";
import Infinity from "../public/images/Information/Infinity.png";
import Horizon from "../public/images/Information/Horizon.png";
import Link from "next/link";
import LogoIcon from "@/public/icons/LogoIcon";

export default function Information() {
  return (
    <section className="bg-white text-center px-32 py-28 lg:h-[1016px] flex flex-col gap-20 items-center justify-center">
      <div className="flex flex-col gap-6">
        <div className="text-4xl font-bold mb-2 flex justify-center">
          <LogoIcon color="black" width="160" height="64" />
        </div>
        <h1 className="text-6xl text-black font-semibold">Solunar.</h1>
        <p
          className="text-lg mt-4 text-black"
          style={{ fontFamily: '"IBM Plex Sans Thai Looped", sans-serif' }}
        >
          Each private suite is a sanctuary of comfort, complete with a sea-view
          jacuzzi and floor-to-ceiling windows.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 container mx-auto max-w-[1200px]">
        {[
          // แสดง 2 card ด้วย map เพื่อรองรับ animation delay ทีละตัว
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
          <AnimatedFadeInUp key={villa.alt} delay={index * 0.25} y={300} className="flex justify-center">
            <div className="relative w-full max-w-[580px] aspect-square overflow-hidden rounded-xl shadow-md">
              <Image
                src={villa.image}
                alt={villa.alt}
                fill
                className="object-cover"
              />

              {/* Overlay ดำโปร่งแสง */}
              <div className="absolute inset-0 bg-black/40 z-10" />

              {/* ข้อความทับภาพ */}
              <div className="absolute inset-0 z-20 flex justify-center items-center md:items-end">
                <Link
                  href={villa.slug}
                  className="text-4xl font-semibold text-white text-center whitespace-nowrap mb-0 md:mb-6"
                >
                  {villa.label}
                </Link>
              </div>
            </div>
          </AnimatedFadeInUp>
        ))}
      </div>
    </section>
  );
}
