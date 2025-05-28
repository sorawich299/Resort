import { ReactElement } from "react";

// components/PrivateQuarters.tsx
type Amenity = {
  icon: string | ReactElement;   // ใช้ Emoji หรือ SVG ได้
  label: string;
};

type PrivateQuartersProps = {
  title: string;
  subtitle: string;
  amenities: Amenity[];
};

export default function PrivateQuarters({ title, subtitle, amenities }: PrivateQuartersProps) {
  return (
    <section className="flex flex-col gap-20">
      <div className="flex flex-col gap-4"  style={{ fontFamily: '"IBM Plex Sans Thai Looped", sans-serif' }}>
        <p className="text-base font-normal text-black">{subtitle}</p>
        <h1 className="text-4xl font-medium text-black">{title}</h1>
      </div>


      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 max-w-[900px] mx-auto w-full gap-12">
        {amenities.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col border border-gray-300 rounded-2xl max-w-[264px] w-full gap-5 p-5"
          >
            {item.icon}
            <p className="text-xl font-medium text-black">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
