import Link from "next/link";
import AmenitiesSection from "./VillaDetail/AmenittiesSection";
import GalleryShow from "./VillaDetail/GalleryShow";
import SunIcon from "@/public/icons/SunIcon";
import PoolIcon from "@/public/icons/PoolIcon";
import ListIcon from "@/public/icons/ListIcon";

interface InformationVillaProps {
  link: string;
  villa: string;
}
export default function InformationVilla({ link, villa }: InformationVillaProps) {
  return (
    <div className="flex flex-col lg:flex-row h-fit transition duration-300 ease-in-out max-w-[1200px] w-full pt-28 mx-auto gap-10">
      {/* Information */}
      <div className="flex-1 flex flex-col gap-10">
        <div>
          <div className="flex flex-col gap-[8px] py-4">
            <h1 className="text-3xl/9.5 text-[#344054] font-bold">
              {villa}
            </h1>
            <span className="text-lg text-[#667085] font-medium">
              10 guests ・ 5 bedrooms・5 beds・5 toilets・5 baths・5 Jacuzzi
            </span>
          </div>

          <p
            className="mb-4 text-base text-[#344054] font-normal"
            style={{ fontFamily: '"IBM Plex Sans Thai Looped", sans-serif' }}
          >
            “A Sanctuary by the Sea — Where Modern Elegance Meets Timeless
            Tranquility”
          </p>
          <p
            className="mb-4 text-base text-[#344054] font-normal"
            style={{ fontFamily: '"IBM Plex Sans Thai Looped", sans-serif' }}
          >
            Completed in 2023, this villa is designed in a Modern Minimal Luxury
            style — clean architectural lines, soft neutral tones, and expansive
            glass panels that blur the line between indoor comfort and the
            stunning natural landscape outside.
          </p>
          <p
            className="mb-4 text-base text-[#344054] font-normal"
            style={{ fontFamily: '"IBM Plex Sans Thai Looped", sans-serif' }}
          >
            Every bedroom offers panoramic ocean views, complete with a private
            in-room jacuzzi facing the sea — where you can soak under the golden
            sky and let time drift by.
          </p>
          <p
            className="mb-4 text-base text-[#344054] font-normal"
            style={{ fontFamily: '"IBM Plex Sans Thai Looped", sans-serif' }}
          >
            On the ground floor, an open-concept living space spills out onto a
            pristine infinity-edge pool, surrounded by sleek white sun loungers
            and soft lighting that glows at sunset.
          </p>
          <p
            className="mb-4 text-base text-[#344054] font-normal"
            style={{ fontFamily: '"IBM Plex Sans Thai Looped", sans-serif' }}
          >
            This isn’t just a place to stay. It’s a place to reconnect — with
            nature, with luxury, and with yourself.
          </p>
        </div>
        <div className="flex gap-6">
          <div className="flex flex-col p-5 border rounded-xl w-full max-w-[264px] gap-5">
            <span className="text-3xl text-blue-600">
              <SunIcon color="#2970FF" />
            </span>
            <p className="font-medium text-xl">5 Ocean View</p>
          </div>
          <div className="flex flex-col p-5 border rounded-xl w-full max-w-[264px] gap-5">
            <span className="text-3xl text-blue-600">
              <PoolIcon color="#2970FF" />
            </span>
            <p className="font-medium text-xl">Private Infinity Pool</p>
          </div>
        </div>
        <hr className="border-gray-300" />
        <div className="flex flex-col gap-4">
          {/* Detail */}
          <h1 className="text-xl font-bold ">Detail</h1>
          <ul className=" list-inside text-base text-[#1a1a1a] leading-normal">
            <li className="relative pl-6 before:content-['•'] before:absolute before:left-2 before:top-0.25  before:text-base">
              <span
                style={{
                  fontFamily: '"IBM Plex Sans Thai Looped", sans-serif',
                }}
              >
                2-storey area / total 473 square meters
              </span>
            </li>
            <li className="relative pl-6 before:content-['•'] before:absolute before:left-2 before:top-0.25  before:text-base">
              <span
                style={{
                  fontFamily: '"IBM Plex Sans Thai Looped", sans-serif',
                }}
              >
                5 bedrooms, king size beds
              </span>
            </li>
            <li className="relative pl-6 before:content-['•'] before:absolute before:left-2 before:top-0.25  before:text-base">
              <span
                style={{
                  fontFamily: '"IBM Plex Sans Thai Looped", sans-serif',
                }}
              >
                10 guests
              </span>
            </li>
          </ul>
          {/* Ground level */}
          <h1 className="text-xl font-bold ">
            Ground level{" "}
            <span className="text-[#344054] font-normal">
              - Private Quarters
            </span>
          </h1>
          <ul className=" list-inside text-base text-[#1a1a1a] leading-normal">
            <li className="relative pl-6 before:content-['•'] before:absolute before:left-2 before:top-0.25  before:text-base">
              <span
                style={{
                  fontFamily: '"IBM Plex Sans Thai Looped", sans-serif',
                }}
              >
                Dining room measuring 63 square meters
              </span>
            </li>
            <li className="relative pl-6 before:content-['•'] before:absolute before:left-2 before:top-0.25  before:text-base">
              <span
                style={{
                  fontFamily: '"IBM Plex Sans Thai Looped", sans-serif',
                }}
              >
                Recreation room measuring 80 square meters, equipped with an LED
                screen, two microphones, a pool table, and a wine cooler.
              </span>
            </li>
            <li className="relative pl-6 before:content-['•'] before:absolute before:left-2 before:top-0.25  before:text-base">
              <span
                style={{
                  fontFamily: '"IBM Plex Sans Thai Looped", sans-serif',
                }}
              >
                Fitness room measuring 27 square meters, equipped with exercise
                apparatus, including a treadmill.
              </span>
            </li>
            <li className="relative pl-6 before:content-['•'] before:absolute before:left-2 before:top-0.25  before:text-base">
              <span
                style={{
                  fontFamily: '"IBM Plex Sans Thai Looped", sans-serif',
                }}
              >
                Shared bathroom and toilet, 24 square meters.
              </span>
            </li>
            <li className="relative pl-6 before:content-['•'] before:absolute before:left-2 before:top-0.25  before:text-base">
              <span
                style={{
                  fontFamily: '"IBM Plex Sans Thai Looped", sans-serif',
                }}
              >
                Swimming pool dimensions: 6.0 x 12.0 meters (saltwater system)
              </span>
            </li>
            <li className="relative pl-6 before:content-['•'] before:absolute before:left-2 before:top-0.25  before:text-base">
              <span
                style={{
                  fontFamily: '"IBM Plex Sans Thai Looped", sans-serif',
                }}
              >
                Meadow
              </span>
            </li>
          </ul>
          {/* Upper level */}
          <div className="flex flex-col gap-4 ">
            <h1 className="text-xl font-bold ">
              Upper level{" "}
              <span className="text-[#344054] font-normal">
                - Private Quarters
              </span>
            </h1>
            <div className="">
              <h4 className="text-base text-[#2970FF] font-bold">
                Bedroom1<span className="text-[#344054]">: 33 sq.m.</span>
              </h4>
              <h4 className="text-base text-[#344054] pb-5">
                King-size bed, shower, rain shower, jacuzzi
              </h4>
              <ul className=" list-inside text-base text-[#1a1a1a] leading-normal">
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-2 before:top-0.25  before:text-base">
                  <span
                    style={{
                      fontFamily: '"IBM Plex Sans Thai Looped", sans-serif',
                    }}
                  >
                    Bedroom area 21 sq.m.
                  </span>
                </li>
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-2 before:top-0.25  before:text-base">
                  <span
                    style={{
                      fontFamily: '"IBM Plex Sans Thai Looped", sans-serif',
                    }}
                  >
                    Jacuzzi area of 7.5 sq.m.
                  </span>
                </li>
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-2 before:top-0.25  before:text-base">
                  <span
                    style={{
                      fontFamily: '"IBM Plex Sans Thai Looped", sans-serif',
                    }}
                  >
                    Bathroom measuring 4.5 sq.m.
                  </span>
                </li>
              </ul>
            </div>
            <div className="">
              <h4 className="text-base text-[#2970FF] font-bold">
                Bedroom2<span className="text-[#344054]">: 32 sq.m.</span>
              </h4>
              <h4 className="text-base text-[#344054] pb-5">
                King-size bed, shower, rain shower, jacuzzi
              </h4>
              <ul className=" list-inside text-base text-[#1a1a1a] leading-normal">
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-2 before:top-0.25  before:text-base">
                  <span
                    style={{
                      fontFamily: '"IBM Plex Sans Thai Looped", sans-serif',
                    }}
                  >
                    Bedroom area 20 sq.m.
                  </span>
                </li>
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-2 before:top-0.25  before:text-base">
                  <span
                    style={{
                      fontFamily: '"IBM Plex Sans Thai Looped", sans-serif',
                    }}
                  >
                    Jacuzzi area of 7.5 sq.m.
                  </span>
                </li>
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-2 before:top-0.25  before:text-base">
                  <span
                    style={{
                      fontFamily: '"IBM Plex Sans Thai Looped", sans-serif',
                    }}
                  >
                    Bathroom measuring 4.5 sq.m.
                  </span>
                </li>
              </ul>
            </div>
            <div className="">
              <h4 className="text-base text-[#2970FF] font-bold">
                Bedroom3<span className="text-[#344054]">: 34 sq.m.</span>
              </h4>
              <h4 className="text-base text-[#344054] pb-5">
                King-size bed, shower, rain shower, jacuzzi
              </h4>
              <ul className=" list-inside text-base text-[#1a1a1a] leading-normal">
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-2 before:top-0.25  before:text-base">
                  <span
                    style={{
                      fontFamily: '"IBM Plex Sans Thai Looped", sans-serif',
                    }}
                  >
                    Bedroom area 20 sq.m.
                  </span>
                </li>
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-2 before:top-0.25  before:text-base">
                  <span
                    style={{
                      fontFamily: '"IBM Plex Sans Thai Looped", sans-serif',
                    }}
                  >
                    Jacuzzi area of 7 sq.m.
                  </span>
                </li>
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-2 before:top-0.25  before:text-base">
                  <span
                    style={{
                      fontFamily: '"IBM Plex Sans Thai Looped", sans-serif',
                    }}
                  >
                    Bathroom measuring 7 sq.m.
                  </span>
                </li>
              </ul>
            </div>
            <div className="">
              <h4 className="text-base text-[#2970FF] font-bold">
                Bedroom4<span className="text-[#344054]">: 46 sq.m.</span>
              </h4>
              <h4 className="text-base text-[#344054] pb-5">
                King-size bed, shower, rain shower, jacuzzi
              </h4>
              <ul className=" list-inside text-base text-[#1a1a1a] leading-normal">
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-2 before:top-0.25  before:text-base">
                  <span
                    style={{
                      fontFamily: '"IBM Plex Sans Thai Looped", sans-serif',
                    }}
                  >
                    Bedroom area 33 sq.m.
                  </span>
                </li>
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-2 before:top-0.25  before:text-base">
                  <span
                    style={{
                      fontFamily: '"IBM Plex Sans Thai Looped", sans-serif',
                    }}
                  >
                    Jacuzzi area of 6 sq.m.
                  </span>
                </li>
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-2 before:top-0.25  before:text-base">
                  <span
                    style={{
                      fontFamily: '"IBM Plex Sans Thai Looped", sans-serif',
                    }}
                  >
                    Bathroom measuring 7 sq.m.
                  </span>
                </li>
              </ul>
            </div>
            <div className="">
              <h4 className="text-base text-[#2970FF] font-bold">
                Bedroom5<span className="text-[#344054]">: 62 sq.m.</span>
              </h4>
              <h4 className="text-base text-[#344054] pb-5">
                King-size bed, shower, rain shower, jacuzzi
              </h4>
              <ul className=" list-inside text-base text-[#1a1a1a] leading-normal">
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-2 before:top-0.25  before:text-base">
                  <span
                    style={{
                      fontFamily: '"IBM Plex Sans Thai Looped", sans-serif',
                    }}
                  >
                    Bedroom area 43 sq.m.
                  </span>
                </li>
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-2 before:top-0.25  before:text-base">
                  <span
                    style={{
                      fontFamily: '"IBM Plex Sans Thai Looped", sans-serif',
                    }}
                  >
                    Jacuzzi area of 12 sq.m.
                  </span>
                </li>
                <li className="relative pl-6 before:content-['•'] before:absolute before:left-2 before:top-0.25  before:text-base">
                  <span
                    style={{
                      fontFamily: '"IBM Plex Sans Thai Looped", sans-serif',
                    }}
                  >
                    Bathroom measuring 7 sq.m.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex">
            <Link
              href={link}
              className="py-4 px-6 bg-white border border-[#344054] rounded-lg text-xl text-[#344054] flex items-center gap-3"
            >
              <ListIcon color="#344054" width="20" height="20" />
              <span>Show all photos</span>
            </Link>
          </div>
        </div>
        <hr className="border-gray-300" />
        <GalleryShow />
        <hr className="border-gray-300" />
        <AmenitiesSection />
      </div>
      {/* Button Sticky */}
      <div className="flex flex-1  justify-center">
        <div className="relative">
          <div className="sticky top-20 left-0 border py-6 px-5 rounded-lg gap-6 flex flex-col justify-center text-center">
            <div className="flex flex-col gap-2.5">
              <h1 className="text-[#344054] font-bold text-2xl">
                ✨ Reserve your private seaside escape
              </h1>
              <p className="text-[#344054] font-normal text-lg" style={{
                      fontFamily: '"IBM Plex Sans Thai Looped", sans-serif',
                    }}>
                Our dedicated team is ready to assist you with every detail.
              </p>
            </div>
            <button className="p-4 bg-blue-600 border rounded-lg w-full text-white font-semibold text-lg">
              💌Send Email💌
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
