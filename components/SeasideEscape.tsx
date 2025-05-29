import Image, { StaticImageData } from 'next/image';
import clsx from 'clsx';
import { ReactElement } from 'react';
import AnimatedFadeInUp from './AnimationFadeUp';

type Feature = {
  icon: string | ReactElement;
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
        'flex flex-col lg:flex-row py-16 sm:py-20 lg:py-28 px-4 sm:px-8 md:px-12 lg:px-16 items-center justify-center container mx-auto max-w-[1200px] w-full gap-10 lg:gap-20',
        reverse && 'flex-col-reverse lg:flex-row-reverse'
      )}
    >
      {/* Text Content */}
      <AnimatedFadeInUp className="flex flex-col gap-6 sm:gap-8 w-full lg:w-[570px]">
        <div className="flex flex-col gap-2 sm:gap-4">
          <p
            className="text-sm sm:text-base font-normal text-black"
            style={{ fontFamily: '"IBM Plex Sans Thai Looped", sans-serif' }}
          >
            {subtitle}
          </p>
          <span className="text-2xl sm:text-3xl font-medium text-black text-wrap">
            {title}
          </span>
        </div>

        <div className="flex flex-col lg:flex-row  gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col p-4 sm:p-5 gap-3 sm:gap-5  w-[264px] border border-gray-300 rounded-3xl"
            >
              {feature.icon}
              <p
                className="text-base sm:text-lg md:text-xl font-medium text-black"
                style={{ fontFamily: '"IBM Plex Sans Thai Looped", sans-serif' }}
              >
                {feature.label}
              </p>
            </div>
          ))}
        </div>
      </AnimatedFadeInUp>

      {/* Image */}
      <div className="w-full  lg:w-[536px] aspect-[4/5] lg:aspect-[536/556] rounded-3xl overflow-hidden shadow-lg">
        <AnimatedFadeInUp>
          <Image
            src={imageSrc}
            alt="Seaside retreat"
            fill
            className="object-cover rounded-3xl"
          />
        </AnimatedFadeInUp>
      </div>
    </section>
  );
}
