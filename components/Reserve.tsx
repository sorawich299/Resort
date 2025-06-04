import VillaCard from "./VillaCard";
import Infinity from "../public/images/Information/Infinity.png";
import Horizon from "../public/images/Information/Horizon.png";

export default function  Reserve() {
  return (
    <div className="container mx-auto flex flex-col">
      <VillaCard
        title="The Infinity Villa"
        description="Experience the ultimate beachfront luxury at our exclusive 5-bedroom villa — where every room boasts a private jacuzzi overlooking the ocean."
        image={Infinity}
        features={{
          subtitle: "Solunar.",
          view: "Ocean View",
          bedrooms: 5,
        }}
      />

      <VillaCard
        title="The Horizon Retreat"
        description="Experience panoramic ocean views from every room of this 5-bedroom villa, featuring a private infinity pool, a personal fitness studio, and a refined minimalist design. Bask in gloden sunsets, embrace the privacy, and unwind in your own seaside escape."
        image={Horizon}
        features={{
          subtitle: "Solunar.",
          view: "Ocean View",
          bedrooms: 5,
        }}
      />
    </div>
  );
};
