"use client";
import { motion } from "framer-motion";
import Image from "next/image";

// const activities = [
//   { title: "Pattaya Shooting Park and Adventure", image: "https://lh3.googleusercontent.com/p/AF1QipNg17UrvzY0ZvTVFw_roFy23Xfzh5QPxTDwjGwc=s680-w680-h510-rw" },
//   { title: "Paramotor Pattaya", image: "https://www.pelago.com/img/products/TH-Thailand/paramotor-in-pattaya-with-private-pick-up/adfb2221-c954-49ef-bcc4-fb43895152b9_paramotor-in-pattaya-with-private-pick-up-xlarge.webp" },
//   { title: "Settura Jetski", image: "https://scontent.fbkk5-5.fna.fbcdn.net/v/t39.30808-6/594065565_1459127826220423_4805056807531144568_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_ohc=0agRGR_QrgcQ7kNvwFjDT5f&_nc_oc=Adnh86JPzgD2OhFIspB-biqu_YUBJiHlrpUeIdlChoTXKT805ITk4zTwE8yotnD2oR8&_nc_zt=23&_nc_ht=scontent.fbkk5-5.fna&_nc_gid=gnVyRihoIuIUSmKgNmSyEA&_nc_ss=8&oh=00_AfwLE44EPEBwKpsTk8hNV9BGzJNXC_daZEBdigOCC5aPUg&oe=69ADD713" },
//   { title: "Pattaya Paintball Park ", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsi8AvsUJI6tfKnTvRfty3K74qPnHheq4xZA&s" },
//   { title: "Sanook Park", image: "https://inzpy.com/wp-content/uploads/2022/07/Sanook-Park-1200x800-01.jpg" },
//   { title: "Tarzan Adventure Zipline Pattaya ", image: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepxsYbOHZmCcgfs12RwpIIsTNcIGQH8W1XTXPEmkFeOTluFRHh6NONxpNEO-8x0-6dFrNMq6Gk5Jn5npdjgIoFtBEsZlthnVKnYwQN3FTf8pdzfIKKewO6vNgg5293izgWfHffQHg=s680-w680-h510-rw" },
//   { title: "Skydive Pattaya", image: "https://i.ytimg.com/vi/jM146iGcq_U/maxresdefault.jpg" },
//   { title: "Go-Karting (Pattaya, Bali Hai Pier)", image: "https://cdn-imgix.headout.com/media/images/b7cf3dbbd0ddcf08795cda77abffa940-33750-pattaya-outdoor-karting-in-bali-hai-pier-pattaya-05.jpg?auto=compress&w=768&h=480&fit=min" },
//   { title: "Drive Thru ATV adventure - Khao Kheow", image: "https://www.lemon8-app.com/seo/image?item_id=7416301201379131920&index=0&sign=4b6258ea8588d3b1739aea4a5df0653b" },
//   { title: "Pattaya Water Sports Club", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6r8u4WG5RuLVQEinb_2fM7t_8Qz6xqrzblQ&s" },
// ];

const activities = [
  {
    title: "Limousine Service",
    image: "https://images.unsplash.com/photo-1771775751121-3091d79073d4?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Private Yacht",
    image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Butler Service",
    image: "https://poloandtweed.com/wp-content/uploads/2023/02/Blog-Photos-5.png"
  },
  {
    title: "Beauty & Spa",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Private Chef",
    image: "https://staffinghut.com/wp-content/uploads/2023/01/private-chef.jpg"
  },
  {
    title: "Skydiving",
    image: "https://media3.thrillophilia.com/filestore/3gvdyxi7vxy45ljiq3yfi09tgmx5_LRM_EXPORT_20161122_182311.jpg?w=576&h=650"
  },
  {
    title: "Jet Ski",
    image: "https://images.unsplash.com/photo-1618858227841-9beacd3b5f6f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
{
    title: "Sunset Dinner Cruise",
    image: "https://e-c.storage.googleapis.com/res/8e5a3765-8810-484c-b280-5f9d769adb43/original"
  }
];

// const activities = [
//   {
//     title: "Limousine Service",
//     image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1200&auto=format&fit=crop"
//   },
//   {
//     title: "Private Yacht Charter",
//     image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=1200&auto=format&fit=crop"
//   },
//   {
//     title: "Private Butler Service",
//     image: "https://images.unsplash.com/photo-1551776235-dde6d4829808?q=80&w=1200&auto=format&fit=crop"
//   },
//   {
//     title: "Luxury Beauty & Spa",
//     image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop"
//   },
//   {
//     title: "Private Chef Experience",
//     image: "https://images.unsplash.com/photo-1556911220-bda9f7f7597e?q=80&w=1200&auto=format&fit=crop"
//   },
//   {
//     title: "Skydiving Adventure",
//     image: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?q=80&w=1200&auto=format&fit=crop"
//   },
//   {
//     title: "Jet Ski Experience",
//     image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=1200&auto=format&fit=crop"
//   },
  
// ];

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
            Services & Activities
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
