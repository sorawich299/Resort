import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
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

import NUT5845 from '../public/images/Portrait/Preview_1400px/_NUT5845.jpg';
import NUT5849 from '../public/images/Portrait/Preview_1400px/_NUT5849.jpg';
import NUT5854 from '../public/images/Portrait/Preview_1400px/_NUT5854.jpg';
import NUT5859 from '../public/images/Portrait/Preview_1400px/_NUT5859.jpg';
import NUT5862 from '../public/images/Portrait/Preview_1400px/_NUT5862.jpg';
import NUT5864 from '../public/images/Portrait/Preview_1400px/_NUT5864.jpg';
import NUT5870 from '../public/images/Portrait/Preview_1400px/_NUT5870.jpg';
import NUT5876 from '../public/images/Portrait/Preview_1400px/_NUT5876.jpg';
import NUT5889 from '../public/images/Portrait/Preview_1400px/_NUT5889.jpg';
import NUT5890 from '../public/images/Portrait/Preview_1400px/_NUT5890.jpg';
import NUT5913 from '../public/images/Portrait/Preview_1400px/_NUT5913.jpg';
import NUT5924 from '../public/images/Portrait/Preview_1400px/_NUT5924.jpg';
import NUT5939 from '../public/images/Portrait/Preview_1400px/_NUT5939.jpg';
import NUT5951 from '../public/images/Portrait/Preview_1400px/_NUT5951.jpg';
import NUT5974 from '../public/images/Portrait/Preview_1400px/_NUT5974.jpg';
import NUT5980 from '../public/images/Portrait/Preview_1400px/_NUT5980.jpg';
import NUT5998 from '../public/images/Portrait/Preview_1400px/_NUT5998.jpg';
import NUT6004 from '../public/images/Portrait/Preview_1400px/_NUT6004.jpg';
import NUT6009 from '../public/images/Portrait/Preview_1400px/_NUT6009.jpg';
import NUT6023 from '../public/images/Portrait/Preview_1400px/_NUT6023.jpg';
import NUT6048 from '../public/images/Portrait/Preview_1400px/_NUT6048.jpg';
import NUT6061 from '../public/images/Portrait/Preview_1400px/_NUT6061.jpg';
import NUT6068 from '../public/images/Portrait/Preview_1400px/_NUT6068.jpg';
import NUT6079 from '../public/images/Portrait/Preview_1400px/_NUT6079.jpg';
import NUT6083 from '../public/images/Portrait/Preview_1400px/_NUT6083.jpg';
import NUT6093 from '../public/images/Portrait/Preview_1400px/_NUT6093.jpg';
import NUT6097 from '../public/images/Portrait/Preview_1400px/_NUT6097.jpg';
import NUT6098 from '../public/images/Portrait/Preview_1400px/_NUT6098.jpg';
import NUT6107 from '../public/images/Portrait/Preview_1400px/_NUT6107.jpg';
import NUT6116 from '../public/images/Portrait/Preview_1400px/_NUT6116.jpg';
import NUT6117 from '../public/images/Portrait/Preview_1400px/_NUT6117.jpg';
import NUT6155 from '../public/images/Portrait/Preview_1400px/_NUT6155.jpg';
import NUT6182 from '../public/images/Portrait/Preview_1400px/_NUT6182.jpg';
import NUT6192 from '../public/images/Portrait/Preview_1400px/_NUT6192.jpg';
import NUT6206 from '../public/images/Portrait/Preview_1400px/_NUT6206.jpg';
import NUT6230 from '../public/images/Portrait/Preview_1400px/_NUT6230.jpg';
import NUT6234 from '../public/images/Portrait/Preview_1400px/_NUT6234.jpg';
import NUT6237 from '../public/images/Portrait/Preview_1400px/_NUT6237.jpg';
import NUT6242 from '../public/images/Portrait/Preview_1400px/_NUT6242.jpg';
import NUT6257 from '../public/images/Portrait/Preview_1400px/_NUT6257.jpg';

import Infinity from "../public/images/Information/Infinity.png";
import Horizon from "../public/images/Information/Horizon.png";

import Private from '../public/images/Information/Private.jpg'
import Jacuzzi from '../public/images/Information/Jacuzzi.jpg'
import Dining from '../public/images/Information/Din.jpg'
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
  return (
    <div >

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
          { icon: <SunIcon color="#2970FF" width="44" height="44"/>, label: 'Ocean View' },
          { icon: <PoolIcon color="#2970FF" width="44" height="44" />, label: 'Private Infinity Pool' },
        ]}
        reverse={false} // ลองเปลี่ยนเป็น true เพื่อสลับฝั่ง
      />
      <SeasideEscape
        title="Wake up to the sound of waves, unwind in your private jacuzzi, and enjoy a seamless luxury getaway."
        subtitle="The Infinity Villa and The Horizon Retreat"
        imageSrc={Jacuzzi}
        features={[
          { icon: <JacuzziIcon color="#2970FF" width="44" height="44" />, label: 'Private Jacuzzi' },
        ]}
        reverse={true} // ลองเปลี่ยนเป็น true เพื่อสลับฝั่ง
      />
      <SeasideEscape
        title="Host an unforgettable corporate retreat by the sea"
        subtitle="The Infinity Villa and The Horizon Retreat"
        imageSrc={Dining}
        features={[
          { icon: <DiningIcon color="#2970FF" width="44" height="44" />, label: 'Dining room' },
        ]}
        reverse={false} // ลองเปลี่ยนเป็น true เพื่อสลับฝั่ง
      />
      <PrivateQuarters
        title="Private Quarters"
        subtitle="The Infinity Villa and The Horizon Retreat"
        amenities={[
          { icon: <SunIcon color="#2970FF" />, label: 'Ocean View' },
          { icon: <WifiIcon color="#2970FF" />, label: 'Free Wi-Fi' },
          { icon: <AirConditionerIcon color="#2970FF" />, label: 'Air conditioner' },
          { icon: <PoolIcon color="#2970FF" />, label: 'Private Infinity Pool' },
          { icon: <LivingRoomIcon color="#2970FF" />, label: 'Living room' },
          { icon: <HomeTheaterIcon color="#2970FF" />, label: 'Home theater' },
          { icon: <DiningIcon color="#2970FF" />, label: 'Dining room' },
          { icon: <PrivateBarIcon color="#2970FF" />, label: 'Private Bar' },
          { icon: <PrivateFitnessGymIcon color="#2970FF" />, label: 'Private fitness gym' },
          { icon: <PoolTableIcon color="#2970FF" />, label: 'Pool-table' },
          { icon: <ToiletIcon color="#2970FF" />, label: 'Toilets' },
          { icon: <ButlerIcon color="#2970FF" />, label: 'Butler Assistant' },
        ]}
      />
      <PrivateQuarters
        title="En-suite Bedrooms"
        subtitle=""
        amenities={[
          { icon: <BedroomIcon color="#2970FF" />, label: '5 Bedrooms' },
          { icon: <KingSizeIcon color="#2970FF" />, label: '5 King size' },
          { icon: <AirConditionerIcon color="#2970FF" />, label: 'Air conditioner' },
          { icon: <BathroomIcon color="#2970FF" />, label: '5 bathrooms' },
          { icon: <JacuzziIcon color="#2970FF" />, label: '5 Jacuzzi' },
          { icon: <SunIcon color="#2970FF" />, label: '5 Ocean View' },
        ]}
      />
      <ImageGallery />
      <ReviewResort title="The Infinity Villa" subTitle="Experience the ultimate beachfront luxury at our exclusive 5-bedroom villa — where every room boasts a private jacuzzi overlooking the ocean." image={Infinity} />
      <ReviewResort title="The Horizon Retreat" subTitle="Experience the ultimate beachfront luxury at our exclusive 5-bedroom villa — where every room boasts a private jacuzzi overlooking the ocean." image={Horizon} />
      <Contact />
    </div>
  );
}
