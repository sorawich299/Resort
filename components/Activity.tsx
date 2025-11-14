"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const activities = [
  { title: "Pattaya Shooting Park and Adventure", image: "https://scontent.fbkk22-2.fna.fbcdn.net/v/t39.30808-6/479185053_1191744546025078_5265047148802615056_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=86c6b0&_nc_ohc=YZoxHs4AvKoQ7kNvwHtBJE4&_nc_oc=AdkUM-ihkhKhCpFSZoGoaUe6zrza_o-VfnJW_wryfHEtLYdY9FSXYqMQ0a2rU_xTmBs&_nc_zt=23&_nc_ht=scontent.fbkk22-2.fna&_nc_gid=Pzo6x9lcnh7S2mMBP1Hv7A&oh=00_AfgFgxFqjEta3qmQTrAvVqvdqp3FcWf1b25juHb11jOAPQ&oe=691C65DE" },
  { title: "Tarzan Adventure Zipline Pattaya ", image: "https://scontent.fbkk22-2.fna.fbcdn.net/v/t39.30808-6/491801939_1469682597709782_7222883037467101277_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=_e9aGNGnivoQ7kNvwHtnIeH&_nc_oc=AdlVSh_DOqjQGxqnvTLUcqokoekbWT5O0j_FDwmUoXLEsprEIUAr37M6nEcj6H7fq10&_nc_zt=23&_nc_ht=scontent.fbkk22-2.fna&_nc_gid=dtOHHreaM33t0jCNZ89FMw&oh=00_Afijae5Y_HoCLkjPm8QJEdFRm5E5NqjkfkPTFYpvU2jImA&oe=691C631E" },
  { title: "Paramotor Pattaya", image: "https://scontent.fbkk22-3.fna.fbcdn.net/v/t39.30808-6/540043472_1320369999978507_940190556150463555_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Tmv4ihXmg3YQ7kNvwFO4lIE&_nc_oc=Adl7Os4CWTDQJJwgN2S1iuLa75RXwgC8FiV863NtDPQ4xUNK0AsuhgkbH6BB6WP2gvo&_nc_zt=23&_nc_ht=scontent.fbkk22-3.fna&_nc_gid=Y4Bfccn3g1Wl0wEXmOsGxQ&oh=00_Afj67hSkwFW39YkhBS0D65fzc4LB5b-q8miusBRYjUAwjA&oe=691C6008" },
  { title: "Settura Jetski", image: "https://scontent.fbkk22-8.fna.fbcdn.net/v/t39.30808-6/480819339_3499355103694646_6875320156832424007_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=lIUCNRzlFV0Q7kNvwHdt2p0&_nc_oc=Adl-2_j1BxpbKJPdUcZQtYuUECy5xYav5ILNAMNGpk29QwS7pZ5klQXmoyrV4ye58W8&_nc_zt=23&_nc_ht=scontent.fbkk22-8.fna&_nc_gid=Pz_odeeWjw2IpBBODenM-Q&oh=00_AfhwqNo-eknDVs4jLqlw_BX32aE9NTBAG2grAyxQBDp3sQ&oe=691C7443" },
  { title: "Pattaya Paintball Park ", image: "https://scontent.fbkk22-2.fna.fbcdn.net/v/t39.30808-6/538496422_757142320395038_5359628404804250268_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=La-XlwuxUuEQ7kNvwFwEBmE&_nc_oc=AdnRWmIa0MWuQUBJPZ3q-yttKqWcTGVGN1bjQYhriYMgCJF_GDJ3k6TS10LFoLIAfQE&_nc_zt=23&_nc_ht=scontent.fbkk22-2.fna&_nc_gid=b2iat3K1iazD0I1yAFUaDw&oh=00_AfhD29iTmZMX0BNXg2SXIiAjgz6xOgtuXKNiCysGc9KQ0w&oe=691C84F1" },
  { title: "Sanook Park", image: "https://scontent.fbkk22-7.fna.fbcdn.net/v/t39.30808-6/481970649_1063067779174557_1874880682085615574_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=5QIa85sJxCwQ7kNvwFdRCrB&_nc_oc=Adl-9h-Ef05VU9Nb74E5q_TM_YOZNe-pVpRR8XV06KqyxGf2FdfH2fDz0T56Gp0h8h8&_nc_zt=23&_nc_ht=scontent.fbkk22-7.fna&_nc_gid=1vihHO3-n7HnRc-QMuazow&oh=00_AfigRGbR32EPrPFzLZfJVz7WnEAi3HdONOm5UCBB59TU6Q&oe=691C58B8" },
  { title: "Skydive Pattaya", image: "https://scontent.fbkk22-1.fna.fbcdn.net/v/t39.30808-6/482323232_630329229607262_8555655240268500842_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=T0w3kItqSUEQ7kNvwE3PcMF&_nc_oc=AdkvzrWDlcBDWeJm0vPImrefqjKlWXg2KTF9zr-ZuPC5163bI9pXSzA9LzZvd1X-_ak&_nc_zt=23&_nc_ht=scontent.fbkk22-1.fna&_nc_gid=3seshSPJwXUngvG6Cx5ndg&oh=00_Afgam1w5BgR5GIwUIL40hlIyVHcU4MXtUAfejH-t5eYWag&oe=691C5C72" },
  { title: "Go-Karting (Pattaya, Bali Hai Pier)", image: "https://scontent.fbkk22-7.fna.fbcdn.net/v/t39.30808-6/571330811_1262583169239863_3951229286392578199_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=gL0WoaCZZ-IQ7kNvwGCJPsW&_nc_oc=AdmuGvcg5xczNh8zJ7VWUdZkYRbV84oUByZzW5Ixuw-oogKB-l0yPOczVEUeqrTdjUI&_nc_zt=23&_nc_ht=scontent.fbkk22-7.fna&_nc_gid=V7uOdl-4sxIzRjD6L1j6Ug&oh=00_AfjeWYsBN0ypQ6muvFIjW9nVsNJdjQAxORabICHLMhiAag&oe=691C7654" },
  { title: "Pattaya Water Sports Club", image: "https://scontent.fbkk22-7.fna.fbcdn.net/v/t39.30808-6/491752628_1211791844289518_3297060558359384915_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=atAmygV2kAoQ7kNvwFr5CZh&_nc_oc=AdnZuEroy_NkrAZxocRtr3nldAVKQJNFx82Q5Jlm9qzXOOv0KCfdSUf0Qbd3EJKv3GU&_nc_zt=23&_nc_ht=scontent.fbkk22-7.fna&_nc_gid=vK9TT3WaSeHMqgjAElemWw&oh=00_AfhqzQ8eIrjpQ4KAUrRRFe0K4EfIlzUOLUazsRkjA9-E9A&oe=691C6625" },
  { title: "Drive Thru ATV adventure - Khao Kheow", image: "https://scontent.fbkk22-2.fna.fbcdn.net/v/t39.30808-6/581008935_1422991999679229_7869598022185039623_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=LscEDju68AoQ7kNvwFsqzFD&_nc_oc=AdnC3zOvQZWgeAiuzy2zMMdme23msX6kyZe_YmNIHn5kvudCat_mH1ddOnT4LOAd-fc&_nc_zt=23&_nc_ht=scontent.fbkk22-2.fna&_nc_gid=5vxwjwuyoWdVIh7Z_WOx5Q&oh=00_Afj5TwOzvhjGNNnU2E7p6fgJI2ScbfYAbdho6QkhQ1T0ZA&oe=691C63F8" },
];

export default function Activities() {
  return (
    <section style={{ fontFamily: '"Cormorant Infant", sans-serif' }} className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      {/* 🔹 BG Layer */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-light)] via-[#f8f9fa] to-[var(--color-bg-dark)]" /> */}
      <motion.div
        className="absolute inset-0 bg-[url('https://image.makewebeasy.net/makeweb/m_1920x0/bL4zZ31F3/webp/S6_bg.webp?v=202405291424')] bg-cover bg-center opacity-100"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/20 to-transparent z-10" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/10 to-transparent z-10" />

      <div className="w-full max-w-7xl relative z-20">
        {/* 🔹 Header */}
        <div className="text-center pt-8 pb-4">
          <h1 className="text-3xl md:text-4xl  font-semibold text-white">
            Activities Playground
          </h1>
          <div className="w-24 h-[2px] bg-[var(--color-logo)] mx-auto mt-3 rounded-full"></div>
        </div>

        {/* 🔹 Masonry Grid */}
        <div className="flex-1 overflow-y-auto px-8 pb-12">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
            {activities.map((a, i) => (
              <motion.div
                key={i}
                className="mb-4 overflow-hidden rounded-2xl relative group break-inside-avoid shadow-md shadow-black/10"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={a.image}
                  alt={a.title}
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Bottom text with background blur/40 */}
                <div className="absolute bottom-0 left-0 right-0 
                  bg-black/40 backdrop-blur-sm
                  px-4 py-3 
                  text-white text-lg font-semibold 
                  flex items-center justify-center">
                  {a.title}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
