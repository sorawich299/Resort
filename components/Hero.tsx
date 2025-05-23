import Image from 'next/image';
// import heroImage from '../assets/img/5146a703aa1d1ecaec17e76c534a98e984b15d2c.avif';

export default function HeroSection() {
  return (
    <section className="relative h-[100vh] w-full flex items-center text-white px-20">
      <Image
        src={'heroImage'}
        alt="Hero Background"
        fill
        style={{ objectFit: 'cover' }}
        priority
      />
      <div className="relative z-10">
        <h1 className="text-5xl font-bold mb-2">Solunar.</h1>
        <p className="text-lg">Between Light, Sea & Serenity.</p>
      </div>
    </section>
  );
}
