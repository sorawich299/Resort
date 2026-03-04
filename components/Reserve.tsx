import VillaCard from "./VillaCard";
import Infinity from "../public/images/Information/Infinity.png";
import Horizon from "../public/images/Information/Horizon.png";

export default function Reserve() {
  return (
    <section style={{ fontFamily: '"Cormorant Infant", sans-serif' }} className="relative flex flex-col justify-center overflow-hidden py-20">
      
      {/* 🔹 เนื้อหาภายใน */}
      <div className="relative container mx-auto flex flex-col justify-center gap-12 px-8 md:px-16">
        <VillaCard
          title="The Infinity Villa"
          description="Experience the ultimate beachfront luxury at our exclusive 5-bedroom villa — where every room boasts a private jacuzzi overlooking the ocean."
          image={Infinity}
          href="/Infinity"
        />

        <VillaCard
          title="The Horizon Retreat"
          description="Experience panoramic ocean views from every room of this 5-bedroom villa, featuring a private infinity pool, a personal fitness studio, and a refined minimalist design. Bask in golden sunsets, embrace the privacy, and unwind in your own seaside escape."
          image={Horizon}
          href="/Horizon"
          reverse={true}
        />
      </div>
    </section>
  );
}
