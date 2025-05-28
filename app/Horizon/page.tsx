import Gallery from "@/components/Gallery";
import Information from "@/components/Information";
import InformationVilla from "@/components/InformationVilla";
import NearbySection from "@/components/VillaDetail/NearBySection";
import Horizon from "../../public/images/Information/Horizon.png";
import Horizon2 from "../../public/images/Information/e75722b3185602c1f46f08b002e8190efafab706.jpg";
import Horizon3 from "../../public/images/Information/ba9fdbd300f115a67162f23ebe7e01d3df3c6523.jpg";
import Horizon4 from "../../public/images/Information/4aaf9188c5edb63031e4d8d16f50735c74137852.jpg";
import Horizon5 from "../../public/images/Information/b2953f007e500fb57c735b11ecb31dd6c2234834.jpg";

export default function Home() {
  const images = [
    Horizon, // รูปใหญ่
    Horizon2, // รูปใหญ่
    Horizon3, // รูปใหญ่
    Horizon4, // รูปใหญ่
    Horizon5, // รูปใหญ่
  ];
  return (
    <div className="pt-16">
      <div className="flex flex-col px-16 py-14 gap-3">
        <h1 className="text-[#344054] text-5xl/15 font-semibold">
          The Horizon Retreat
        </h1>
        <span className="text-[#344054] text-lg font-medium">
          10 guests ・ 5 bedrooms・5 beds・5 toilets・5 baths・5 Jacuzzi
        </span>
      </div>
      <div className="max-w-[1274px] mx-auto w-full px-16">
        <Gallery images={images} link={"/Horizon/Gallery"} />
      </div>

      <InformationVilla villa="The Horizon Retreat" link={"/Horizon/Gallery"} />
      <hr className="border-gray-300 mt-20" />
      <NearbySection />
      <Information />
    </div>
  );
}
