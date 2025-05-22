import Image, { StaticImageData } from "next/image";
import AnimatedFadeInUp from "./AnimationFadeUp";
import heroImage from '../assets/img/5146a703aa1d1ecaec17e76c534a98e984b15d2c.avif';


export default function Home() {
  return (
    <section className="bg-white text-center px-4 py-12">
      
        <div className="mb-8">
          <div className="text-4xl font-bold mb-2">pbb</div>
          <h1 className="text-5xl font-bold">Solunar.</h1>
          <p className="mt-4 text-gray-600">
            Each private suite is a sanctuary of comfort, complete with a sea-view jacuzzi and floor-to-ceiling windows.
          </p>
        </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {[ // แสดง 2 card ด้วย map เพื่อรองรับ animation delay ทีละตัว
          {
            alt: "The Infinity Villa",
            label: "The Infinity Villa",
          },
          {
            alt: "The Horizon Retreat",
            label: "The Horizon Retreat",
          },
        ].map((villa, index) => (
          <AnimatedFadeInUp key={villa.alt} delay={index * 0.25} y={300}>
            <div className="relative rounded-xl overflow-hidden shadow-md">
              <Image
                src={heroImage} // ใช้ StaticImageData โดยตรง
                alt={villa.alt}
                width={800}
                height={600}
                className="object-cover"
                />
              <div className="absolute bottom-4 left-4 text-white text-xl font-semibold drop-shadow-lg">
                {villa.label}
              </div>
            </div>
          </AnimatedFadeInUp>
        ))}
      </div>
    </section>
  );
}
