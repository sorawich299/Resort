import Image, { StaticImageData } from "next/image";
import AnimatedFadeInUp from "./AnimationFadeUp";
import Infinity from "../public/images/Information/Infinity.png";
import Horizon from "../public/images/Information/Horizon.png";
import Link from "next/link";
import LogoIcon from "@/public/icons/LogoIcon";

export default function Information() {
  return (
    <section className="bg-white text-center px-4 py-12 h-fit">
      <div className="mb-8">
        <div className="text-4xl font-bold mb-2 flex justify-center">
          <LogoIcon color="black" width="160" height="64" />
        </div>
        <h1 className="text-5xl font-bold">Solunar.</h1>
        <p className="mt-4 text-gray-600">
          Each private suite is a sanctuary of comfort, complete with a sea-view
          jacuzzi and floor-to-ceiling windows.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 container mx-auto">
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
          <AnimatedFadeInUp key={villa.alt} delay={index * 0.25} y={300}>
            <div className="relative rounded-xl overflow-hidden shadow-md aspect-[4/3]">
              <Image
                src={villa.image}
                alt={villa.alt}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-60 lg:bottom-6 left-0 text-white text-xl font-semibold drop-shadow-lg w-full text-center">
                <Link
                  href={villa.slug}
                  className="text-3xl text-white font-bold"
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
