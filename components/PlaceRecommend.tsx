"use client";

import Image from "next/image";

type Item = {
  id: string;
  title: string;
  imageUrl: string;
  minutes?: number;
  href?: string;
};

type Group = {
  kicker: string;
  heading: string;
  sideLabel: string;
  items: Item[];
  className?: string;
};

type Props = {
  groups: Group[];
  className?: string;
};

export default function PlaceRecommendCombined({ groups, className = "" }: Props) {
  return (
    <section style={{ fontFamily: '"Cormorant Infant", sans-serif' }} className={`relative mx-auto max-w-8xl px-6 py-16 flex flex-col gap-20 min-h-screen ${className}`}>
      {groups.map((group, groupIdx) => {
        const { kicker, heading, sideLabel, items, className: sectionClass } = group;

        return (
          <div key={groupIdx} className={`relative ${sectionClass ?? ""}`}>
            {/* 🔹 side label (แนวตั้งด้านขวา) */}
            <div className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 rotate-90 select-none text-2xl tracking-[0.35em] text-[#d8b08f]/70 font-semibold">
              {sideLabel}
            </div>

            {/* 🔹 หัวข้อ */}
            <div className="text-center mb-12">
              
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[#1f2d3d]" style={{fontStyle: 'italic'}}>{kicker}</h2>
              <div className="mx-auto mt-3 h-[2px] w-14 bg-[#d8b08f]" />
            </div>

            {/* 🔹 การ์ด */}
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
              {items.map((it, idx) => {
                const isCenter = idx === Math.floor(items.length / 2);
                return (
                  <article
                    key={it.id}
                    className={`w-[min(90vw,320px)] sm:w-[320px] transition-transform duration-300 transform-gpu p-2
                      ${isCenter
                        ? "shadow-md lg:shadow-xl lg:scale-110 lg:z-10"
                        : "shadow-md lg:opacity-90"
                      }`}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded">
                      <Image
                        src={it.imageUrl}
                        alt={it.title}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-[1.05]"
                        sizes="(min-width:1024px) 320px, 80vw"
                      />
                    </div>

                    <p className="mt-4 text-center text-[17px] leading-7 text-[#2d2d2d]" style={{fontStyle: 'italic'}}>
                      {typeof it.minutes === "number" && (
                        <> Only {it.minutes} minutes away from </>
                      )}
                      {it.title}
                    </p>

                    {/* <div className="mt-5 flex justify-center">
                      {it.href ? (
                        <a
                          // href={it.href}
                          className="inline-block rounded border border-[#d8b08f] px-6 py-2.5 text-sm tracking-wide text-[#d8b08f] hover:bg-[#d8b08f]/10 transition"
                        >
                          MORE DETAILS
                        </a>
                      ) : (
                        <button
                          disabled
                          className="inline-block rounded border border-[#d8b08f] px-6 py-2.5 text-sm tracking-wide text-[#d8b08f]/70 cursor-not-allowed"
                        >
                          MORE DETAILS
                        </button>
                      )}
                    </div> */}
                  </article>
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
}
