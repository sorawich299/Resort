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
  imageSrc: string | StaticImageData;
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
        'flex flex-col lg:flex-row  py-28 px-16  items-center justify-center container mx-auto max-w-[1200px] w-full gap-20',
        reverse && 'flex-col-reverse  lg:flex-row-reverse'
      )}
    >
      {/* Text Content */}

      <AnimatedFadeInUp className='flex flex-col gap-8 w-[570px]'>
        <div className="flex flex-col gap-4">
          <p className="text-base font-normal text-black" style={{ fontFamily: '"IBM Plex Sans Thai Looped", sans-serif' }}>{subtitle}</p>
          <span className="text-3xl font-medium text-black text-wrap">{title}</span>
        </div>
        <div className="flex gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col p-5 gap-5 w-[264px] border border-gray-300 rounded-3xl"
            >
              {feature.icon}
              <p className="text-xl font-medium text-black" style={{ fontFamily: '"IBM Plex Sans Thai Looped", sans-serif' }} >{feature.label}</p>
            </div>
          ))}
        </div>
      </AnimatedFadeInUp>


      {/* Image */}

      <div className="w-[536px] h-[556px] rounded-3xl overflow-hidden shadow-lg">
        <AnimatedFadeInUp>
          <Image
            src={imageSrc}
            alt="Seaside retreat"
            width={536}
            height={556}
            className="w-full h-full object-cover rounded-3xl"
          />
        </AnimatedFadeInUp>
      </div>

    </section>
  );
}
