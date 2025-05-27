// components/SeasideEscape.tsx
import Image, { StaticImageData } from 'next/image';
import clsx from 'clsx';
import { ReactElement } from 'react';
import AnimatedFadeInUp from './AnimationFadeUp';

type Feature = {
  icon: string | ReactElement;       // Emoji หรือ URL ของไอคอน
  label: string;
};

type SeasideEscapeProps = {
  title: string;
  subtitle: string;
  features: Feature[];
  imageSrc: string|StaticImageData;
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
        'flex flex-col lg:flex-row  gap-10 p-8 items-center justify-center',
        reverse && 'flex-col-reverse  lg:flex-row-reverse'
      )}
    >
      {/* Text Content */}
      
      <div className="flex-1 max-w-[600px]"><AnimatedFadeInUp>
        <p className="text-base text-black font-normal mb-2">{subtitle}</p>
        <h1 className="text-4xl font-medium text-black mb-6">{title}</h1>

        <div className="flex gap-4 flex-wrap">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col p-6 border rounded-xl shadow-md w-60"
            >
              <span className="text-xl text-blue-600">{feature.icon}</span>
              <p className="mt-4 font-medium text-base lg:text-xl">{feature.label}</p>
            </div>
          ))}
        </div></AnimatedFadeInUp>
      </div>
      

      {/* Image */}
      
      <div className="flex-1 rounded-3xl overflow-hidden shadow-lg max-w-[600px]">
       <AnimatedFadeInUp> <Image
          src={imageSrc}
          alt="Seaside retreat"
          width={600}
          height={400}
          className="rounded-3xl object-cover w-full h-auto"
        /></AnimatedFadeInUp>
      </div>
      
    </section>
  );
}
