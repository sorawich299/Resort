import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import Infomation from "@/components/Information";
import PrivateQuarters from "@/components/PrivateQuarters";
import Reserve from "@/components/Reserve";
import ReviewResort from "@/components/ReviewResort";
import SeasideEscape from "@/components/SeasideEscape";
import ImageSlider from "@/components/Slideshow";
import VideoPlayer from "@/components/VideoPlayer";
import VillaRetreatOverview from "@/components/VillaRetreatOverview";

export default function Home() {
  return (
    <div >
      <Header/>
      <HeroSection/>
      <Infomation/>
      <VideoPlayer videoId="Erflio-agG4" />
      <Reserve/>
      <ImageSlider/>
      <VillaRetreatOverview/>
      <SeasideEscape
        title="Your Private Seaside Escape Awaits"
        subtitle="The Infinity Villa and The Horizon Retreat"
        imageSrc="/images/villa-pool.png"
        features={[
          { icon: '🌅', label: 'Ocean View' },
          { icon: '🏊‍♂️', label: 'Private Infinity Pool' },
        ]}
        reverse={false} // ลองเปลี่ยนเป็น true เพื่อสลับฝั่ง
      />
      <SeasideEscape
        title="Your Private Seaside Escape Awaits"
        subtitle="The Infinity Villa and The Horizon Retreat"
        imageSrc="/images/villa-pool.png"
        features={[
          { icon: '🌅', label: 'Ocean View' },
          { icon: '🏊‍♂️', label: 'Private Infinity Pool' },
        ]}
        reverse={true} // ลองเปลี่ยนเป็น true เพื่อสลับฝั่ง
      />
      <SeasideEscape
        title="Your Private Seaside Escape Awaits"
        subtitle="The Infinity Villa and The Horizon Retreat"
        imageSrc="/images/villa-pool.png"
        features={[
          { icon: '🌅', label: 'Ocean View' },
          { icon: '🏊‍♂️', label: 'Private Infinity Pool' },
        ]}
        reverse={false} // ลองเปลี่ยนเป็น true เพื่อสลับฝั่ง
      />
      <PrivateQuarters
        title="Private Quarters"
        subtitle="The Infinity Villa and The Horizon Retreat"
        amenities={[
          { icon: '🌅', label: 'Ocean View' },
          { icon: '📶', label: 'Free Wi-Fi' },
          { icon: '❄️', label: 'Air conditioner' },
          { icon: '🏊‍♂️', label: 'Private Infinity Pool' },
          { icon: '🛋️', label: 'Living room' },
          { icon: '📽️', label: 'Home theater' },
          { icon: '🍽️', label: 'Dining room' },
          { icon: '🍸', label: 'Private Bar' },
          { icon: '🏋️‍♂️', label: 'Private fitness gym' },
        ]}
      />
      <PrivateQuarters
        title="Private Quarters"
        subtitle=""
        amenities={[
          { icon: '🌅', label: 'Ocean View' },
          { icon: '📶', label: 'Free Wi-Fi' },
          { icon: '❄️', label: 'Air conditioner' },
          { icon: '🏊‍♂️', label: 'Private Infinity Pool' },
          { icon: '🛋️', label: 'Living room' },
          { icon: '📽️', label: 'Home theater' },
          { icon: '🍽️', label: 'Dining room' },
          { icon: '🍸', label: 'Private Bar' },
        ]}
      />
      <ReviewResort/>
      <ReviewResort/>
      <Contact/>
      <Footer/>
    </div>
  );
}
