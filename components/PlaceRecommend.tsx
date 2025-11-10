"use client";

import Image from "next/image";

type Item = {
    id: string;
    title: string;
    imageUrl: string;
    minutes?: number;
    href?: string;
};

type Props = {
    kicker?: string;
    heading?: string;
    sideLabel?: string;
    items: Item[];
    className?: string;
};

export default function PlaceRecommendClassic({
    kicker = "PLACE TRAVEL",
    heading = "WE RECOMMEND",
    sideLabel = "POOL VILLA",
    items,
    className = "",
}: Props) {
    return (
        <section className={`relative mx-auto max-w-7xl px-6 py-16 ${className}`}>


            {/* ส่วนหัว */}
            <div className="text-center">
                <div className="text-sm tracking-[0.35em] text-[#d8b08f] uppercase">
                    {kicker}
                </div>
                <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[#1f2d3d]">
                    {heading}
                </h2>
                <div className="mx-auto mt-3 h-[2px] w-14 bg-[#d8b08f]" />
            </div>

            {/* การ์ด */}
            <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
                {items.map((it, idx) => {
                    const isCenter = idx === Math.floor(items.length / 2);
                    return (
                        <article
                            key={it.id}
                            className={`w-[min(90vw,320px)] sm:w-[320px] transition-transform duration-300 transform-gpu p-2
                                    ${isCenter
                                    ? "lg:scale-120 lg:z-10 lg:translate-y-8.5"
                                    : "lg:opacity-90"
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

                            <p className="mt-4 text-center text-[17px] leading-7 text-[#2d2d2d]">
                                {it.title}
                                {typeof it.minutes === "number" && (
                                    <> use time {it.minutes} minutes</>
                                )}
                            </p>

                            <div className="mt-5 flex justify-center">
                                {it.href ? (
                                    <a
                                        href={it.href}
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
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}
