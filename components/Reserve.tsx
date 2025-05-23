import VillaCard from "./VillaCard";
// import heroImage from '../assets/img/5146a703aa1d1ecaec17e76c534a98e984b15d2c.avif';

export default function  Reserve() {
  return (
    <div className="flex gap-20 p-6 flex-col">
      <VillaCard
        title="The Infinity Villa"
        description="Experience the ultimate beachfront luxury at our exclusive 5-bedroom villa — where every room boasts a private jacuzzi overlooking the ocean."
        image={'heroImage'}
        features={{
          subtitle: "The Infinity Villa and The Horizon Retreat",
          view: "Ocean View",
          bedrooms: 5,
        }}
      />

      <VillaCard
        title="The Horizon Retreat"
        description="Nestled atop a secluded cliff, this villa offers breathtaking mountain and ocean views, perfect for a romantic getaway."
        image={'heroImage'}
        features={{
          subtitle: "Horizon Luxury",
          view: "Mountain View",
          bedrooms: 3,
        }}
      />
    </div>
  );
};
