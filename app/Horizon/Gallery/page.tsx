'use client'
import GalleryImage from "@/components/Gallery/GalleryImage";
import { useRouter } from "next/navigation";

import BR1 from '../../../public/images/Room 1/Preview_1400px/_NUT5044-HDR.jpg'
import BR2 from '../../../public/images/Room 2/Preview_1400px/_NUT4993-HDR.jpg'
import BR3 from '../../../public/images/Room 3/Preview_1400px/_NUT4939-HDR.jpg'
import BR4 from '../../../public/images/Room 4/Preview_1400px/_NUT5107-HDR.jpg'
import BR5 from '../../../public/images/Room 5/Preview_1400px/_NUT5164-HDR.jpg'
import BR6 from '../../../public/images/Room 1/Preview_1400px/_NUT5077-HDR.jpg'
import BR7 from '../../../public/images/Room 1/Preview_1400px/_NUT5074-HDR.jpg'
import BR8 from '../../../public/images/Room 1/Preview_1400px/_NUT5068-HDR.jpg'
import BR9 from '../../../public/images/Room 1/Preview_1400px/_NUT5050-HDR.jpg'
import BR10 from '../../../public/images/Room 1/Preview_1400px/_NUT5086-HDR.jpg'
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
    return (<>
        <div className="container m-auto p-4  pt-20">
            {/* Header */}
            <div className="flex items-center gap-4">
                {/* Back */}
                <div className="flex flex-1 justify-end font-bold text-2xl text-[#2970FF] cursor-pointer" onClick={()=>router.back()}>{'←'}</div>
                <div className="flex-9">
                    <div className="flex flex-col gap-5">
                        <span className="text-sm text-orange-400 font-bold">Gallery</span>
                        <h1 className="text-2xl md:text-5xl font-bold ">The Horizon Retreat - Gallery</h1>
                    </div>
                </div>
            </div>
            <GalleryImage title="G Floor" images={images}/>
            <GalleryImage title="Master Bedroom" subtitle="62 sq.m." images={images}/>
            <GalleryImage title="G Floor" images={images}/>
            <GalleryImage title="G Floor" images={images}/>
            <GalleryImage title="G Floor" images={images}/>
            <GalleryImage title="G Floor" images={images}/>
            <GalleryImage title="G Floor" images={images}/>
            <GalleryImage title="G Floor" images={images}/>
            <GalleryImage title="G Floor" images={images}/>
            <GalleryImage title="G Floor" images={images}/>
            <GalleryImage title="G Floor" images={images}/>


        </div>
    </>)
}