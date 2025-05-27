import Masonry from "@/components/Gallery/Masonry";
import Link from "next/link";

import NUT5845 from '../../public/images/Portrait/Preview_1400px/_NUT5845.jpg';
import NUT5849 from '../../public/images/Portrait/Preview_1400px/_NUT5849.jpg';
import NUT5854 from '../../public/images/Portrait/Preview_1400px/_NUT5854.jpg';
import NUT5859 from '../../public/images/Portrait/Preview_1400px/_NUT5859.jpg';
import NUT5862 from '../../public/images/Portrait/Preview_1400px/_NUT5862.jpg';
import NUT5864 from '../../public/images/Portrait/Preview_1400px/_NUT5864.jpg';
import NUT5870 from '../../public/images/Portrait/Preview_1400px/_NUT5870.jpg';
import NUT5876 from '../../public/images/Portrait/Preview_1400px/_NUT5876.jpg';
import NUT5889 from '../../public/images/Portrait/Preview_1400px/_NUT5889.jpg';
import NUT5890 from '../../public/images/Portrait/Preview_1400px/_NUT5890.jpg';
import NUT5913 from '../../public/images/Portrait/Preview_1400px/_NUT5913.jpg';
import NUT5924 from '../../public/images/Portrait/Preview_1400px/_NUT5924.jpg';
import NUT5939 from '../../public/images/Portrait/Preview_1400px/_NUT5939.jpg';
import NUT5951 from '../../public/images/Portrait/Preview_1400px/_NUT5951.jpg';
import NUT5974 from '../../public/images/Portrait/Preview_1400px/_NUT5974.jpg';
import NUT5980 from '../../public/images/Portrait/Preview_1400px/_NUT5980.jpg';
import NUT5998 from '../../public/images/Portrait/Preview_1400px/_NUT5998.jpg';
import NUT6004 from '../../public/images/Portrait/Preview_1400px/_NUT6004.jpg';
import NUT6009 from '../../public/images/Portrait/Preview_1400px/_NUT6009.jpg';
import NUT6023 from '../../public/images/Portrait/Preview_1400px/_NUT6023.jpg';
import NUT6048 from '../../public/images/Portrait/Preview_1400px/_NUT6048.jpg';
import NUT6061 from '../../public/images/Portrait/Preview_1400px/_NUT6061.jpg';
import NUT6068 from '../../public/images/Portrait/Preview_1400px/_NUT6068.jpg';
import NUT6079 from '../../public/images/Portrait/Preview_1400px/_NUT6079.jpg';
import NUT6083 from '../../public/images/Portrait/Preview_1400px/_NUT6083.jpg';
import NUT6093 from '../../public/images/Portrait/Preview_1400px/_NUT6093.jpg';
import NUT6097 from '../../public/images/Portrait/Preview_1400px/_NUT6097.jpg';
import NUT6098 from '../../public/images/Portrait/Preview_1400px/_NUT6098.jpg';
import NUT6107 from '../../public/images/Portrait/Preview_1400px/_NUT6107.jpg';
import NUT6116 from '../../public/images/Portrait/Preview_1400px/_NUT6116.jpg';
import NUT6117 from '../../public/images/Portrait/Preview_1400px/_NUT6117.jpg';
import NUT6155 from '../../public/images/Portrait/Preview_1400px/_NUT6155.jpg';
import NUT6182 from '../../public/images/Portrait/Preview_1400px/_NUT6182.jpg';
import NUT6192 from '../../public/images/Portrait/Preview_1400px/_NUT6192.jpg';
import NUT6206 from '../../public/images/Portrait/Preview_1400px/_NUT6206.jpg';
import NUT6230 from '../../public/images/Portrait/Preview_1400px/_NUT6230.jpg';
import NUT6234 from '../../public/images/Portrait/Preview_1400px/_NUT6234.jpg';
import NUT6237 from '../../public/images/Portrait/Preview_1400px/_NUT6237.jpg';
import NUT6242 from '../../public/images/Portrait/Preview_1400px/_NUT6242.jpg';
import NUT6257 from '../../public/images/Portrait/Preview_1400px/_NUT6257.jpg';

const images = [
  NUT5845,
  NUT5849,
  NUT5854,
  NUT5859,
  NUT5862,
  NUT5864,
  NUT5870,
  NUT5876,
  NUT5889,
  NUT5890,
  NUT5913,
  NUT5924,
  NUT5939,
  NUT5951,
  NUT5974,
  NUT5980,
  NUT5998,
  NUT6004,
  NUT6009,
  NUT6023,
  NUT6048,
  NUT6061,
  NUT6068,
  NUT6079,
  NUT6083,
  NUT6093,
  NUT6097,
  NUT6098,
  NUT6107,
  NUT6116,
  NUT6117,
  NUT6155,
  NUT6182,
  NUT6192,
  NUT6206,
  NUT6230,
  NUT6234,
  NUT6237,
  NUT6242,
  NUT6257,
];

export default function Home() {
//     const images: string[] = [
//     "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
//   "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
//   "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
//   "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
//   "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
//   "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
//   "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
//   "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
//   "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
//   "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
//   "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
//   "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
//   "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
//   "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
//   "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
//   "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
//   "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
//   "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
//   "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
//   "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
//   "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
//   "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
//   "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
//   "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
//   "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
//   "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
//   "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
//   "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
//   "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
//   "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
//   "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
//   "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
//   "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
//   "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
//   "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
//   "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
//   "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
//   "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
//   "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
//   "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
//   ];
    return (
        <div className="container m-auto px-4 pt-20">
            <div className="flex gap-4 h-fit">
                {/* Navigation */}
                <div className="relative flex-1">
                    <div className="sticky top-20 left-0">
                        <h1 className="text-5xl font-bold text-[#344054] py-4">Gallery</h1>
                        <div className="flex flex-col gap-4">
                            <Link href={"/Infinity/Gallery"} className="text-gray-400 text-base ">The Infinity Villa</Link>
                            <Link href={"/Horizon/Gallery"} className="text-gray-400 text-base ">The Horizon Retreat</Link>
                        </div>

                    </div>
                </div>
                {/* Image */}
                <div className="flex flex-2">
                    <Masonry images={images}/>
                </div>
            </div>
        </div>
    );
}
