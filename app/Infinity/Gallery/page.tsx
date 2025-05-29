"use client";
import GalleryImage from "@/components/Gallery/GalleryImage";
import { useRouter } from "next/navigation";

import BR1 from "../../../public/images/Room 1/Preview_1400px/_NUT5044-HDR.jpg";
import BR2 from "../../../public/images/Room 2/Preview_1400px/_NUT4993-HDR.jpg";
import BR3 from "../../../public/images/Room 3/Preview_1400px/_NUT4939-HDR.jpg";
import BR4 from "../../../public/images/Room 4/Preview_1400px/_NUT5107-HDR.jpg";
import BR5 from "../../../public/images/Room 5/Preview_1400px/_NUT5164-HDR.jpg";
import BR6 from "../../../public/images/Room 1/Preview_1400px/_NUT5077-HDR.jpg";
import BR7 from "../../../public/images/Room 1/Preview_1400px/_NUT5074-HDR.jpg";
import BR8 from "../../../public/images/Room 1/Preview_1400px/_NUT5068-HDR.jpg";
import BR9 from "../../../public/images/Room 1/Preview_1400px/_NUT5050-HDR.jpg";
import BR10 from "../../../public/images/Room 1/Preview_1400px/_NUT5086-HDR.jpg";
import { StaticImageData } from "next/image";

export default function Gallery() {
  const images: StaticImageData[] = [
    BR1,
    BR2,
    BR3,
    BR4,
    BR5,
    BR6,
    BR7,
    BR8,
    BR9,
    BR10,
  ];

  const router = useRouter();
  return (
    <>
      <div className="container m-auto p-4  pt-20">
        {/* Header */}
        <div className="flex items-center gap-4">
          {/* Back */}
          <div
            className="flex justify-center items-center font-bold text-2xl text-[#2970FF]  cursor-pointer w-[48px] h-[48px]"
            onClick={() => router.back()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              width="24"
              height="19"
              overflow="visible"
              preserveAspectRatio="none"
              viewBox="0 0 24 19"
            >
              <path
                d="M10.2761 2.27614C10.7968 1.75544 10.7968 0.911223 10.2761 0.390524C9.75544 -0.130175 8.91122 -0.130175 8.39052 0.390524L0.390524 8.39052C-0.130175 8.91122 -0.130175 9.75544 0.390524 10.2761L8.39052 18.2761C8.91122 18.7968 9.75544 18.7968 10.2761 18.2761C10.7968 17.7554 10.7968 16.9112 10.2761 16.3905L4.55229 10.6667L22.6667 10.6667C23.403 10.6667 24 10.0697 24 9.33334C24 8.59696 23.403 8 22.6667 8L4.55229 8L10.2761 2.27614Z"
                fill="var(--fill-0, #2970FF)"
                id="Solid"
              ></path>
            </svg>
          </div>
          <div className="flex-9">
            <div className="flex flex-col gap-2.5 py-3 px-6">
              <span className="text-sm text-orange-400 font-bold">Gallery</span>
              <h1 className="text-2xl md:text-5xl font-bold ">
                The Infinity Villa - Gallery
              </h1>
            </div>
          </div>
        </div>
        <GalleryImage title="G Floor" images={images} />
        <GalleryImage
          title="Master Bedroom"
          subtitle="62 sq.m."
          images={images}
        />
        <GalleryImage title="Bedroom 4" subtitle="46 sq.m." images={images} />
        <GalleryImage title="Bedroom 3" subtitle="34 sq.m." images={images} />
        <GalleryImage title="Bedroom 2" subtitle="32 sq.m." images={images} />
        <GalleryImage title="Bedroom 1" subtitle="33 sq.m." images={images} />
      </div>
    </>
  );
}
