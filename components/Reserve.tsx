import VillaCard from "./VillaCard";
import Infinity from "../public/images/Information/Infinity.png";
import Horizon from "../public/images/Information/Horizon.png";

export default function  Reserve() {
  return (
    <div className="flex gap-20 p-6 flex-col">
      <VillaCard
        title="The Infinity Villa"
        description="Experience the ultimate beachfront luxury at our exclusive 5-bedroom villa — where every room boasts a private jacuzzi overlooking the ocean."
        image={Infinity}
        features={{
          subtitle: "The Infinity Villa and The Horizon Retreat",
          view: "Ocean View",
          bedrooms: 5,
        }}
      />

      <VillaCard
        title="The Horizon Retreat"
        description="Nestled atop a secluded cliff, this villa offers breathtaking mountain and ocean views, perfect for a romantic getaway."
        image={Horizon}
        features={{
          subtitle: "Horizon Luxury",
          view: "Mountain View",
          bedrooms: 3,
        }}
      />
    </div>
  );
};
