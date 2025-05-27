import { ReactElement } from "react";

// components/PrivateQuarters.tsx
type Amenity = {
  icon: string | ReactElement ;   // ใช้ Emoji หรือ SVG ได้
  label: string;
};

type PrivateQuartersProps = {
  title: string;
  subtitle: string;
  amenities: Amenity[];
};

export default function PrivateQuarters({ title, subtitle, amenities }: PrivateQuartersProps) {
  return (
    <section className="p-8 max-w-6xl mx-auto">
      <p className="text-sm text-gray-500 mb-2">{subtitle}</p>
      <h2 className="text-3xl font-bold text-gray-900 mb-6">{title}</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {amenities.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col border rounded-2xl p-6 shadow-sm hover:shadow-md transition"
          >
            <span className="text-3xl text-blue-600">{item.icon}</span>
            <p className="mt-4 font-medium">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
