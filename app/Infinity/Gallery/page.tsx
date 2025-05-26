'use client'
import GalleryImage from "@/components/Gallery/GalleryImage";
import { useRouter } from "next/navigation";

export default function Gallery() {
    const images: string[] = [
    "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
  ];

  const router = useRouter();
    return (<>
        <div className="container m-auto p-4  pt-20">
            {/* Header */}
            <div className="flex items-center gap-4">
                {/* Back */}
                <div className="flex flex-1 justify-end font-bold text-2xl text-[#2970FF]  cursor-pointer" onClick={()=>router.back()}>{'←'}</div>
                <div className="flex-9">
                    <div className="flex flex-col gap-5">
                        <span className="text-sm text-orange-400 font-bold">Gallery</span>
                        <h1 className="text-2xl md:text-5xl font-bold ">The Infinity Villa - Gallery</h1>
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