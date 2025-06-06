'use client';
import Contact from "@/components/Contact";
import HeroSection from "@/components/Hero";
import ImageGallery from "@/components/ImageGallery";
import Infomation from "@/components/Information";
import PrivateQuarters from "@/components/PrivateQuarters";
import Reserve from "@/components/Reserve";
import ReviewResort from "@/components/ReviewResort";
import SeasideEscape from "@/components/SeasideEscape";
import ImageSlider from "@/components/Slideshow";
import VideoPlayer from "@/components/VideoPlayer";
import VillaRetreatOverview from "@/components/VillaRetreatOverview";

import SECTION1 from "../public/images/Slider/section6-image01.jpg";
import SECTION2 from "../public/images/Slider/section6-image02.jpg";
import SECTION3 from "../public/images/Slider/section6-image03.jpg";
import SECTION4 from "../public/images/Slider/section6-image04.jpg";
import SECTION5 from "../public/images/Slider/section6-image05.jpg";
import SECTION6 from "../public/images/Slider/section6-image06.jpg";
import SECTION7 from "../public/images/Slider/section6-image07.jpg";
import SECTION8 from "../public/images/Slider/section6-image08.jpg";
import SECTION9 from "../public/images/Slider/section6-image09.jpg";
import SECTION10 from "../public/images/Slider/section6-image10.jpg";
import SECTION11 from "../public/images/Slider/section6-image11.jpg";
import SECTION12 from "../public/images/Slider/section6-image12.jpg";
import SECTION13 from "../public/images/Slider/section6-image13.jpg";
import SECTION14 from "../public/images/Slider/section6-image14.jpg";
import SECTION15 from "../public/images/Slider/section6-image15.jpg";

import Infinity from "../public/images/Information/Infinity.png";
import Horizon from "../public/images/Information/Horizon.png";

import Private from "../public/images/Information/Private.jpg";
import Jacuzzi from "../public/images/Information/Jacuzzi.jpg";
import Dining from "../public/images/Information/Din.jpg";
import PoolIcon from "@/public/icons/PoolIcon";
import SunIcon from "@/public/icons/SunIcon";
import JacuzziIcon from "@/public/icons/JacuzziIcon";
import DiningIcon from "@/public/icons/DiningIcon";
import WifiIcon from "@/public/icons/WifiIcon";
import AirConditionerIcon from "@/public/icons/AirConditionerIcon";
import LivingRoomIcon from "@/public/icons/LivingRoomIcon";
import HomeTheaterIcon from "@/public/icons/HomeTheaterIcon";
import PrivateBarIcon from "@/public/icons/PrivateBarIcon";
import PrivateFitnessGymIcon from "@/public/icons/PrivateFitnessGymIcon";
import PoolTableIcon from "@/public/icons/PoolTableIcon";
import ToiletIcon from "@/public/icons/ToiletIcon";
import ButlerIcon from "@/public/icons/ButlerIcon";
import BedroomIcon from "@/public/icons/BedroomIcon";
import KingSizeIcon from "@/public/icons/KingSizeIcon";
import BathroomIcon from "@/public/icons/BathroomIcon";
import { useEffect, useState } from "react";
import ConsentBanner from "@/components/common/ConsentBanner";

const images = [
  [{ src: SECTION1, width: 362, height: 204 }, { src: SECTION2, width: 362, height: 204 }, { src: SECTION3, width: 362, height: 362 }],
  [{ src: SECTION4, width: 362, height: 362 }, { src: SECTION5, width: 362, height: 362 }],
  [{ src: SECTION6, width: 362, height: 204 }, { src: SECTION7, width: 362, height: 362 }, { src: SECTION8, width: 362, height: 204 }],
  [{ src: SECTION9, width: 362, height: 362 }, { src: SECTION10, width: 362, height: 362 }],
  [{ src: SECTION11, width: 362, height: 204 }, { src: SECTION12, width: 362, height: 204 }, { src: SECTION13, width: 362, height: 362 }],
  [{ src: SECTION14, width: 362, height: 362 }, { src: SECTION15, width: 362, height: 362 }],
];

export default function Home() {
  const [isConsentGiven, setIsConsentGiven] = useState<boolean | null>(null);
  const [isBannerClosed, setIsBannerClosed] = useState(false);

  useEffect(() => {
    // ตรวจสอบค่าจาก localStorage เมื่อโหลดหน้าเว็บ
    const consent = localStorage.getItem("consentGiven");
    setIsConsentGiven(consent === "true");
  }, []);

  const handleConsentAccept = () => {
    // บันทึกการยินยอมใน localStorage
    localStorage.setItem("consentGiven", "true");
    setIsConsentGiven(true);
  };

  const handleBannerClose = () => {
    // ปิดแบนเนอร์โดยไม่บันทึกการยินยอม
    setIsBannerClosed(true);
  };

  // ระหว่างรอโหลดค่า localStorage ไม่แสดงแบนเนอร์หรือหน้าเพจที่ผิดพลาด
  if (isConsentGiven === null) {
    return null; // หรืออาจเพิ่ม Loading Indicator
  }
  return (
    <div>
      <HeroSection />
      <Infomation />
      <VideoPlayer videoId="Erflio-agG4" />
      <Reserve />
      <ImageSlider images={images} />
      <VillaRetreatOverview />
      <SeasideEscape
        title="Your Private Seaside Escape Awaits"
        subtitle="The Infinity Villa and The Horizon Retreat"
        imageSrc={Private}
        features={[
          {
            icon: <SunIcon color="var(--color-icon-primary)" width="44" height="44" />,
            label: "Ocean View",
          },
          {
            icon: <PoolIcon color="var(--color-icon-primary)" width="44" height="44" />,
            label: "Private Infinity Pool",
          },
        ]}
        reverse={false} // ลองเปลี่ยนเป็น true เพื่อสลับฝั่ง
      />
      <SeasideEscape
        title="Wake up to the sound of waves, unwind in your private jacuzzi, and enjoy a seamless luxury getaway."
        subtitle="The Infinity Villa and The Horizon Retreat"
        imageSrc={Jacuzzi}
        features={[
          {
            icon: <JacuzziIcon color="var(--color-icon-primary)" width="44" height="44" />,
            label: "Private Jacuzzi",
          },
        ]}
        reverse={true} // ลองเปลี่ยนเป็น true เพื่อสลับฝั่ง
      />
      <SeasideEscape
        title="Host an unforgettable corporate retreat by the sea"
        subtitle="The Infinity Villa and The Horizon Retreat"
        imageSrc={Dining}
        features={[
          {
            icon: <DiningIcon color="var(--color-icon-primary)" width="44" height="44" />,
            label: "Dining room",
          },
        ]}
        reverse={false} // ลองเปลี่ยนเป็น true เพื่อสลับฝั่ง
      />
      <div className="container mx-auto py-14 lg:py-28 px-8 lg:px-16 max-w-[1200px] flex flex-col gap-20">
        <PrivateQuarters
          title="Private Quarters"
          subtitle="The Infinity Villa and The Horizon Retreat"
          amenities={[
            {
              icon: <SunIcon color="var(--color-icon-primary)" width="44" height="44" />,
              label: "Ocean View",
            },
            {
              icon: <WifiIcon color="var(--color-icon-primary)" width="44" height="44" />,
              label: "Free Wi-Fi",
            },
            {
              icon: (
                <AirConditionerIcon color="var(--color-icon-primary)" width="44" height="44" />
              ),
              label: "Air conditioner",
            },
            {
              icon: <PoolIcon color="var(--color-icon-primary)" width="44" height="44" />,
              label: "Private Infinity Pool",
            },
            {
              icon: <LivingRoomIcon color="var(--color-icon-primary)" width="44" height="44" />,
              label: "Living room",
            },
            {
              icon: <HomeTheaterIcon color="var(--color-icon-primary)" width="44" height="44" />,
              label: "Home theater",
            },
            {
              icon: <DiningIcon color="var(--color-icon-primary)" width="44" height="44" />,
              label: "Dining room",
            },
            {
              icon: <PrivateBarIcon color="var(--color-icon-primary)" width="44" height="44" />,
              label: "Private Bar",
            },
            {
              icon: (
                <PrivateFitnessGymIcon color="var(--color-icon-primary)" width="44" height="44" />
              ),
              label: "Private fitness gym",
            },
            {
              icon: <PoolTableIcon color="var(--color-icon-primary)" width="44" height="44" />,
              label: "Pool-table",
            },
            {
              icon: <ToiletIcon color="var(--color-icon-primary)" width="44" height="44" />,
              label: "Toilets",
            },
            {
              icon: <ButlerIcon color="var(--color-icon-primary)" width="44" height="44" />,
              label: "Butler Assistant",
            },
          ]}
        />
        <PrivateQuarters
          title="En-suite Bedrooms"
          subtitle=""
          amenities={[
            {
              icon: <BedroomIcon color="var(--color-icon-primary)" width="44" height="44" />,
              label: "5 Bedrooms",
            },
            {
              icon: <KingSizeIcon color="var(--color-icon-primary)" width="44" height="44" />,
              label: "5 King size",
            },
            {
              icon: (
                <AirConditionerIcon color="var(--color-icon-primary)" width="44" height="44" />
              ),
              label: "Air conditioner",
            },
            {
              icon: <BathroomIcon color="var(--color-icon-primary)" width="44" height="44" />,
              label: "5 bathrooms",
            },
            {
              icon: <JacuzziIcon color="var(--color-icon-primary)" width="44" height="44" />,
              label: "5 Jacuzzi",
            },
            {
              icon: <SunIcon color="var(--color-icon-primary)" width="44" height="44" />,
              label: "5 Ocean View",
            },
          ]}
        />
      </div>

      <ImageGallery />
      <ReviewResort
        title="The Infinity Villa"
        subTitle="Experience the ultimate beachfront luxury at our exclusive 5-bedroom villa — where every room boasts a private jacuzzi overlooking the ocean."
        image={Infinity}
      />
      <ReviewResort
        title="The Horizon Retreat"
        subTitle="Experience the ultimate beachfront luxury at our exclusive 5-bedroom villa — where every room boasts a private jacuzzi overlooking the ocean."
        image={Horizon}
      />
      <Contact />
      {!isConsentGiven && !isBannerClosed && (
        <ConsentBanner
          onAccept={handleConsentAccept}
          onClose={handleBannerClose}
        />
      )}
    </div>
  );
}
