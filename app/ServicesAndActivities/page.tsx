"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Activities from "@/components/Activity";

export default function ServicesPage() {
  return (
    <main
      style={{ fontFamily: '"Cormorant Infant", serif' }}
      className="bg-neutral-950 text-white"
    >
      {/* HERO */}
      <section className="relative h-[70vh] flex items-center justify-center text-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://image.makewebeasy.net/makeweb/m_1920x0/bL4zZ31F3/webp/S6_bg.webp?v=202405291424')",
          }}
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-5xl md:text-6xl font-semibold tracking-wide text-white">
            Services & Activities
          </h1>

          <div className="w-24 h-[2px] bg-[#C8A46B] mx-auto my-6"></div>

          <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl mx-auto">
            Elevate your stay with a curated selection of premium services and
            unforgettable experiences. From private chefs and luxury limousine
            transfers to thrilling adventures and exclusive leisure activities,
            our villa team is dedicated to creating exceptional moments for you.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-semibold">
            Tailored Experiences for Your Stay
          </h2>

          <p className="text-neutral-300 leading-relaxed">
            Our villa concierge team is delighted to assist you in arranging a
            wide range of additional services and activities designed to enhance
            your stay. Whether you seek relaxation, adventure, or luxury
            experiences, we are here to ensure every moment of your journey is
            seamless and memorable.
          </p>

          <p className="text-neutral-400 leading-relaxed">
            Simply contact our villa staff to reserve services or request
            personalized arrangements during your stay.
          </p>
        </div>
      </section>

      {/* ACTIVITIES GRID */}
      <Activities />

      {/* CONTACT CTA */}
      <section className="pb-28 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-semibold">Arrange Your Experience</h2>

          <p className="text-neutral-300">
            To book additional services or activities, please contact our villa
            staff. Our team will be delighted to assist you in creating a
            personalized and unforgettable stay.
          </p>

          <button
            onClick={() =>
              (window.location.href =
                "mailto:info@solunarvilla.com?subject=Service Request&body=Hello, I would like to request additional services during my stay.")
            }
            className="mt-4 px-8 py-3 border border-white/40 hover:border-white transition rounded-full text-sm tracking-wide"
          >
            Contact Concierge
          </button>
        </div>
      </section>
    </main>
  );
}
