import Image from "next/image";
import heroImage from "../public/images/Hero/Hero.png";
import AnimatedFadeInUp from "./AnimationFadeUp";

export default function HeroSection() {
  return (
    <section className="relative h-[100vh] w-full flex items-center text-white px-20">
      <Image
        src={heroImage}
        alt="Hero Background"
        fill
        style={{ objectFit: "cover" }}
        priority
      />
      <div className="container mx-auto relative z-10">
        <AnimatedFadeInUp>
          <div className="flex flex-col gap-6">
            <h1 className="text-6xl font-semibold">Solunar.</h1>
            <p className="text-2xl font-normal">
              🌙 - Between Light, Sea & Serenity.
            </p>
          </div>
        </AnimatedFadeInUp>
      </div>
    </section>
  );
}
