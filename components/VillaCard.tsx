'use client'
import Image, { StaticImageData } from "next/image";
import AnimatedFadeInUp from "./AnimationFadeUp";
import SunIcon from "@/public/icons/SunIcon";
import BedroomIcon from "@/public/icons/BedroomIcon";
import Modal from "./Modal";
import { useState } from "react";

interface Features {
  subtitle?: string;
  view?: string;
  bedrooms?: number;
}

interface VillaCardProps {
  title: string;
  description: string;
  image: string | StaticImageData; // รองรับทั้ง string และ StaticImageData
  features: Features;
}

const VillaCard: React.FC<VillaCardProps> = ({
  title,
  description,
  image,
  features,
}) => {

  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="py-14 px-8 lg:py-28 lg:px-16 flex gap-20 flex-col lg:flex-row items-center lg:justify-center">
      {/* Image Section */}
      <div className="relative w-full max-w-[560px] aspect-square overflow-hidden rounded-lg flex justify-center items-center">
        <AnimatedFadeInUp className="w-full">
          <div className="w-full h-full relative">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </AnimatedFadeInUp>
      </div>

      {/* Text Section */}
      <div
        className="flex flex-col justify-between w-full 
                  lg:w-[616px]"
      >
        <AnimatedFadeInUp delay={0.25}>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <h5 className="text-base font-normal text-black" style={{ fontFamily: '"IBM Plex Sans Thai Looped", sans-serif' }}>
                  {features.subtitle || "Featured Villa"}
                </h5>
                <div className="flex flex-col gap-6">
                  <h2 className="text-4xl font-medium text-black">{title}</h2>
                  <p className="text-[var(--color-secondary)] text-lg font-normal"  style={{ fontFamily: '"IBM Plex Sans Thai Looped", sans-serif' }}>{description}</p>
                </div>
              </div>

              <div className="flex items-center gap-8 space-x-4 text-blue-500">
                <div className="flex items-center gap-2">
                  <span><SunIcon color="var(--color-icon-primary)" width="22" height="22"/></span>
                  <span className="text-lg font-normal text-black" style={{ fontFamily: '"IBM Plex Sans Thai Looped", sans-serif' }}>{features.view || "Ocean View"}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span><BedroomIcon color="var(--color-icon-primary)"  width="22" height="22"/></span>
                  <span className="text-lg font-normal text-black" style={{ fontFamily: '"IBM Plex Sans Thai Looped", sans-serif' }}>{features.bedrooms || "N/A"} bedrooms</span>
                </div>
              </div>
            </div>
            <div>
              <button className=" bg-blue-500 text-white text-xl py-3.5 px-7 font-medium rounded-lg hover:bg-blue-600 max-w-[178px] w-full" onClick={()=>setIsOpen(!isOpen)}>
                Reserve
              </button>
            </div>
          </div>
        </AnimatedFadeInUp>
      </div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}>
        <h2 className="text-xl font-bold mb-4">Hello from Modal</h2>
        <p>This is a simple modal component in Next.js.</p>
      </Modal>
    </div>
  );
};

export default VillaCard;
