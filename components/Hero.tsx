import Image from "next/image";
import heroImage from "../public/images/Hero/Hero.png";
import AnimatedFadeInUp from "./AnimationFadeUp";
// import videobg from "../public/video/videoplayback.mp4";
export default function HeroSection() {
  return (
    // <section className="relative w-full flex items-center text-white px-4 sm:px-8 md:px-12 lg:px-20 min-h-screen">

    //   <video
    //     autoPlay
    //     loop
    //     muted
    //     playsInline
    //     className="absolute top-0 left-0 w-full h-full object-cover"
    //   >
    //     <source src="../public/video/vedioplayback.mp4" type="video/mp4" />
    //   </video>
    //   {/* <div className="absolute inset-0 z-0">
    //     <Image
    //       src={heroImage}
    //       alt="Hero Background"
    //       fill
    //       className="object-cover sm:object-cover object-[center_top]" // Mobile จะเลื่อนไปโชว์ด้านบนของภาพ
    //       priority
    //     />
    //   </div> */}

    //   <div className="container mx-auto relative z-10 py-20 sm:py-0">
    //     <AnimatedFadeInUp>
    //       <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 text-center sm:text-left">
    //         <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold">
    //           Solunar.
    //         </h1>
    //         <p className="text-lg sm:text-xl md:text-2xl font-normal">
    //           🌙 - Between Light, Sea & Serenity.
    //         </p>
    //       </div>
    //     </AnimatedFadeInUp>
    //   </div>
    // </section>

    <section className="relative h-screen overflow-hidden">
      {/* 🔹 วิดีโอพื้นหลัง */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        
        <source src="/public/video/videoplayback.mp4" type="video/mp4" />
      </video>

      {/* /public */}

      {/* 🔹 Overlay มืดเบา ๆ */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

      {/* 🔹 เนื้อหา hero */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full text-left text-white pl-36">
        
        <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 text-center sm:text-left"><AnimatedFadeInUp>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold">
            Solunar.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-normal">
            🌙 - Between Light, Sea & Serenity.  
          </p></AnimatedFadeInUp>
        </div>
      </div>
    </section>
  );
}
