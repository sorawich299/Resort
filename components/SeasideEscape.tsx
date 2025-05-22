// components/SeasideEscape.tsx
import Image from 'next/image';
import clsx from 'clsx';

type Feature = {
  icon: string;       // Emoji หรือ URL ของไอคอน
  label: string;
};

type SeasideEscapeProps = {
  title: string;
  subtitle: string;
  features: Feature[];
  imageSrc: string;
  reverse?: boolean;
};

export default function SeasideEscape({
  title,
  subtitle,
  features,
  imageSrc,
  reverse = false,
}: SeasideEscapeProps) {
  return (
    <section
      className={clsx(
        'flex flex-col md:flex-row items-center justify-between gap-10 p-8 max-w-6xl mx-auto',
        reverse && 'md:flex-row-reverse'
      )}
    >
      {/* Text Content */}
      <div className="flex-1">
        <p className="text-sm text-gray-500 mb-2">{subtitle}</p>
        <h1 className="text-4xl font-bold text-gray-900 mb-6">{title}</h1>

        <div className="flex gap-6 flex-wrap">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 border rounded-xl shadow-md w-60"
            >
              <span className="text-3xl text-blue-600">{feature.icon}</span>
              <p className="mt-4 font-medium text-lg text-center">{feature.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Image */}
      <div className="flex-1 rounded-3xl overflow-hidden shadow-lg max-w-xl">
        <Image
          src={imageSrc}
          alt="Seaside retreat"
          width={600}
          height={400}
          className="rounded-3xl object-cover w-full h-auto"
        />
      </div>
    </section>
  );
}
