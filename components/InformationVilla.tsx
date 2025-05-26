import Link from "next/link";
import AmenitiesSection from "./VillaDetail/AmenittiesSection";
import GalleryShow from "./VillaDetail/GalleryShow";


interface InformationVillaProps {
  link: string;
}
export default function InformationVilla({ link }: InformationVillaProps) {
  return (
    <div className="flex flex-col md:flex-row h-fit transition duration-300 ease-in-out">
      {/* Information */}
      <div className="flex-1">
        <div className="flex flex-col gap-[8px] py-4">
          <h1 className="text-3xl text-[#344054] font-bold">
            The Infinity Villa
          </h1>
          <span className="text-lg text-[#344054] font-normal">
            10 guests ・ 5 bedrooms・5 beds・5 toilets・5 baths・5 Jacuzzi
          </span>
        </div>

        <p className="pb-4 text-base text-[#344054]">
          “A Sanctuary by the Sea — Where Modern Elegance Meets Timeless
          Tranquility”
        </p>
        <p className="pb-4 text-base text-[#344054]">
          Completed in 2023, this villa is designed in a Modern Minimal Luxury
          style — clean architectural lines, soft neutral tones, and expansive
          glass panels that blur the line between indoor comfort and the
          stunning natural landscape outside.
        </p>
        <p className="pb-4 text-base text-[#344054]">
          Every bedroom offers panoramic ocean views, complete with a private
          in-room jacuzzi facing the sea — where you can soak under the golden
          sky and let time drift by.
        </p>
        <p className="pb-4 text-base text-[#344054]">
          On the ground floor, an open-concept living space spills out onto a
          pristine infinity-edge pool, surrounded by sleek white sun loungers
          and soft lighting that glows at sunset.
        </p>
        <p className="pb-4 text-base text-[#344054]">
          This isn’t just a place to stay. It’s a place to reconnect — with
          nature, with luxury, and with yourself.
        </p>
        <div className="flex justify-between gap-16 py-16">
          <div className="flex flex-col p-6 border rounded-xl shadow-md w-full">
            <span className="text-3xl text-blue-600">555</span>
            <p className="mt-4 font-bold text-2xl">5 Ocean View</p>
          </div>
          <div className="flex flex-col p-6 border rounded-xl shadow-md w-full">
            <span className="text-3xl text-blue-600">555</span>
            <p className="mt-4 font-bold text-2xl">Private Infinity Pool</p>
          </div>
        </div>
        <hr className="border-gray-300" />
        {/* Detail */}
        <div className="pb-4 pt-16">
          <h1 className="text-xl font-bold pb-4">Detail</h1>
          <ul className="list-disc pl-4">
            <li>2-storey area / total 473 square meters</li>
            <li>5 bedrooms, king size beds</li>
            <li>10 guests</li>
          </ul>
        </div>
        {/* Ground level */}
        <div className="pb-4">
          <h1 className="text-xl font-bold pb-4">
            Ground level{" "}
            <span className="text-[#344054] font-normal">
              - Private Quarters
            </span>
          </h1>
          <ul className="list-disc pl-4">
            <li>Dining room measuring 63 square meters</li>
            <li>
              Recreation room measuring 80 square meters, equipped with an LED
              screen, two microphones, a pool table, and a wine cooler.
            </li>
            <li>
              Fitness room measuring 27 square meters, equipped with exercise
              apparatus, including a treadmill.
            </li>
            <li>Shared bathroom and toilet, 24 square meters.</li>
            <li>
              Swimming pool dimensions: 6.0 x 12.0 meters (saltwater system)
            </li>
            <li>Meadow</li>
          </ul>
        </div>
        {/* Upper level */}
        <div className="pb-4">
          <h1 className="text-xl font-bold pb-4">
            Upper level{" "}
            <span className="text-[#344054] font-normal">
              - Private Quarters
            </span>
          </h1>
          <div className="py-4">
            <h4 className="text-base text-[#2970FF] font-bold">
              Bedroom1<span className="text-[#344054]">: 33 sq.m.</span>
            </h4>
            <h4 className="text-base text-[#344054] pb-5">
              King-size bed, shower, rain shower, jacuzzi
            </h4>
            <ul className="list-disc pl-4">
              <li>Bedroom area 21 sq.m.</li>
              <li>Jacuzzi area of 7.5 sq.m.</li>
              <li>Bathroom measuring 4.5 sq.m.</li>
            </ul>
          </div>
          <div className="py-4">
            <h4 className="text-base text-[#2970FF] font-bold">
              Bedroom2<span className="text-[#344054]">: 32 sq.m.</span>
            </h4>
            <h4 className="text-base text-[#344054] pb-5">
              King-size bed, shower, rain shower, jacuzzi
            </h4>
            <ul className="list-disc pl-4">
              <li>Bedroom area 20 sq.m.</li>
              <li>Jacuzzi area of 7.5 sq.m.</li>
              <li>Bathroom measuring 4.5 sq.m.</li>
            </ul>
          </div>
          <div className="py-4">
            <h4 className="text-base text-[#2970FF] font-bold">
              Bedroom3<span className="text-[#344054]">: 34 sq.m.</span>
            </h4>
            <h4 className="text-base text-[#344054] pb-5">
              King-size bed, shower, rain shower, jacuzzi
            </h4>
            <ul className="list-disc pl-4">
              <li>Bedroom area 20 sq.m.</li>
              <li>Jacuzzi area of 7 sq.m.</li>
              <li>Bathroom measuring 7 sq.m.</li>
            </ul>
          </div>
          <div className="py-4">
            <h4 className="text-base text-[#2970FF] font-bold">
              Bedroom4<span className="text-[#344054]">: 46 sq.m.</span>
            </h4>
            <h4 className="text-base text-[#344054] pb-5">
              King-size bed, shower, rain shower, jacuzzi
            </h4>
            <ul className="list-disc pl-4">
              <li>Bedroom area 33 sq.m.</li>
              <li>Jacuzzi area of 6 sq.m.</li>
              <li>Bathroom measuring 7 sq.m.</li>
            </ul>
          </div>
          <div className="py-4">
            <h4 className="text-base text-[#2970FF] font-bold">
              Bedroom5<span className="text-[#344054]">: 62 sq.m.</span>
            </h4>
            <h4 className="text-base text-[#344054] pb-5">
              King-size bed, shower, rain shower, jacuzzi
            </h4>
            <ul className="list-disc pl-4">
              <li>Bedroom area 43 sq.m.</li>
              <li>Jacuzzi area of 12 sq.m.</li>
              <li>Bathroom measuring 7 sq.m.</li>
            </ul>
          </div>
        </div>

        <div className="flex"><Link href={link} className="py-4 px-6 bg-white border rounded-lg text-xl text-[#344054] flex gap-5"><p>555</p><span>Show all photos</span></Link></div>
        {/* <GalleryShow /> */}
        <AmenitiesSection />
      </div>
      {/* Button Sticky */}
      <div className="flex flex-1  justify-center">
        <div className="relative">
          <div className="sticky top-20 left-0 border py-5 px-10 rounded-lg gap-5 flex flex-col justify-center text-center">
            <h1 className="text-[#344054] font-bold text-2xl">
              ✨ Reserve your private seaside escape
            </h1>
            <p className="text-[#344054] font-normal text-lg">
              Our dedicated team is ready to assist you with every detail.
            </p>
            <button className="p-4 bg-blue-600 border rounded-lg w-full text-white font-semibold text-lg">
              Send Email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
