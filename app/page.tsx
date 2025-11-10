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
import ReservationForm from "@/components/common/ReservationForm";
import Activity from "@/components/Activity";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import PlaceRecommendClassic from "@/components/PlaceRecommend";

const images = [
  [{ src: SECTION1, width: 362, height: 204 }, { src: SECTION2, width: 362, height: 204 }, { src: SECTION3, width: 362, height: 362 }],
  [{ src: SECTION4, width: 362, height: 362 }, { src: SECTION5, width: 362, height: 362 }],
  [{ src: SECTION6, width: 362, height: 204 }, { src: SECTION7, width: 362, height: 362 }, { src: SECTION8, width: 362, height: 204 }],
  [{ src: SECTION9, width: 362, height: 362 }, { src: SECTION10, width: 362, height: 362 }],
  [{ src: SECTION11, width: 362, height: 204 }, { src: SECTION12, width: 362, height: 204 }, { src: SECTION13, width: 362, height: 362 }],
  [{ src: SECTION14, width: 362, height: 362 }, { src: SECTION15, width: 362, height: 362 }],
];


const items = [
  {
    id: "1",
    title: "Nongnooch Garden Pattaya",
    imageUrl:
      "https://www.nongnoochpattaya.com/uploads/images/202312/1cc59c50e70dc6d874cac40663db10cb.jpg",
    minutes: 5,
    href: "#",
  },
  {
    id: "2",
    title: "Columbia Picture Aquaverse",
    imageUrl:
      "https://columbiapicturesaquaverse.com/en/wp-content/uploads/2024/01/kvdesktop1.jpg",
    minutes: 3,
    href: "#",
  },
  {
    id: "3",
    title: "Max Muay Thai Stadium Pattaya",
    imageUrl:
      "https://maxmuaythai.co.th/wp-content/uploads/2024/04/3IMG_1078-2048x1365.jpg",
    minutes: 10,
    href: "#",
  },
];

 const foodItems = [
    {
      id: "4",
      title: "The Oxygen Pattaya",
      imageUrl:
        "https://scontent.fbkk22-2.fna.fbcdn.net/v/t39.30808-6/480220787_936846538635449_7193350373101981417_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=HA_Ail3DJn8Q7kNvwFdIXjs&_nc_oc=AdkJ737BuDV1sVMjca-llIv8_2mEtKahBJ-ax1C-IvVnSDOmZuwdjM_CkZZwQrCBUqE&_nc_zt=23&_nc_ht=scontent.fbkk22-2.fna&_nc_gid=n12JOH0Bb-bg7pUkQNCo7w&oh=00_Afip9u1V4ivDKXzgBARzvyP4DRjQLK4lBKoeOQVV56rQSw&oe=69178FC9",
      minutes: 2,
      href: "#",
    },
    {
      id: "5",
      title: "Castello Di Bellagio Pattaya",
      imageUrl:
        "https://scontent.fbkk22-2.fna.fbcdn.net/v/t39.30808-6/497709148_1100654288763266_6866494021417173089_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=qjy2JBDhZfoQ7kNvwGmoZIj&_nc_oc=Adk0p5zZWduSnHASmu6_3QNQ9tOqf8JffpoQzh2eszithY823oNOxFWuVfBch7RMeos&_nc_zt=23&_nc_ht=scontent.fbkk22-2.fna&_nc_gid=GVJ7T8UGp0iKrRnmE5P3eA&oh=00_Afg56y3OjM58Pfr8lfD0SmbtDFDGq6O5wKrKdRAQ-jfQfg&oe=69178E72",
      minutes: 4,
      href: "#",
    },
    {
      id: "6",
      title: "Horizon Rooftop Restaurant & Bar",
      imageUrl:
        "https://scontent.fbkk22-8.fna.fbcdn.net/v/t1.6435-9/155458395_2960615650835104_9166571135936235335_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=68gUnhGP5fUQ7kNvwGMACSe&_nc_oc=AdnLBENr4QV-KteZL4ZyHm9S_Ha_wv6-BzubLNeNwUhU2OMK_-ZnTXOM_zEWuXYziac&_nc_zt=23&_nc_ht=scontent.fbkk22-8.fna&_nc_gid=PKDPE8_sqX0jcsD-bm_jEg&oh=00_AfiyB36R6c1CAvaKEHEAiXEPWqgdy3R4lR0yZD02tYPHsA&oe=69392D3D",
      minutes: 8,
      href: "#",
    },
  ];
export default function Home() {

  

  return (
    <div className="flex flex-col gap-4">
      <HeroSection />
      <ReservationForm />
      {/* <Infomation /> */}
      {/* <VideoPlayer videoId="Erflio-agG4" /> */}
      <Reserve />
      <ImageSlider images={images} />
      <VillaRetreatOverview />
      {/* <SeasideEscape
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
      </div> */}

      <ImageGallery />
      <Activity/>
      <PlaceRecommendClassic items={items} />
      <PlaceRecommendClassic
        kicker="RESTAURANT"
        heading="WE RECOMMEND"
        sideLabel="RESTAURANT"
        items={foodItems}
        className="pt-12 bg-[#fffaf5]"
      />
      {/* <ReviewResort
        title="The Infinity Villa"
        subTitle="Experience the ultimate beachfront luxury at our exclusive 5-bedroom villa — where every room boasts a private jacuzzi overlooking the ocean."
        image={Infinity}
      />
      <ReviewResort
        title="The Horizon Retreat"
        subTitle="Experience the ultimate beachfront luxury at our exclusive 5-bedroom villa — where every room boasts a private jacuzzi overlooking the ocean."
        image={Horizon}
      /> */}
      
      <Contact />

    </div>
  );
}
