// 'use client';
// import EmailIcon from "@/public/icons/EmailIcon";
// import LocationAddressIcon from "@/public/icons/LocationAddressIcon";
// import PhoneIcon from "@/public/icons/PhoneIcon";
// import React from "react";

// export default function Contact() {
//     return (
//         <section id="contact" className="container max-w-[1200px] w-full mx-auto px-[60px] lg:px-[120px] py-14 lg:py-28 flex flex-col gap-20">
//             <h2 className="text-5xl font-medium text-black">Contact us</h2>
//             <div className="grid lg:grid-cols-2 gap-12 items-start">
//                 {/* Contact Info */}
//                 <div className="flex flex-col gap-10">


//                     {/* Email */}
//                     <div className="flex flex-col gap-4">
//                         <EmailIcon color="var(--color-icon-primary)"/>
//                         <div className="flex flex-col gap-2"  style={{ fontFamily: '"IBM Plex Sans Thai Looped", sans-serif' }}>
//                             <h1 className="text-xl font-bold text-black" >Email</h1>
//                             {/* <p className="text-lg font-normal text-black">Lorem ipsum dolor sit amet.</p> */}
//                             <p className="text-lg font-normal text-black">info@solunarvilla.com </p>
//                         </div>
//                     </div>

//                     {/* Phone */}
//                     <div className="flex flex-col gap-4">
//                         <PhoneIcon color="var(--color-icon-primary)"/>
//                         <div className="flex flex-col gap-2"  style={{ fontFamily: '"IBM Plex Sans Thai Looped", sans-serif' }}>
//                             <h1 className="text-xl font-bold text-black">Phone</h1>
//                             {/* <p className="text-lg font-normal text-black">Lorem ipsum dolor sit amet.</p> */}
//                             <p className="text-lg font-normal text-black">093-659-9815 </p>
//                         </div>
//                     </div>

//                     {/* Address */}
//                     <div className="flex flex-col gap-4">
//                         <LocationAddressIcon color="var(--color-icon-primary)"/>
//                         <div className="flex flex-col gap-2"  style={{ fontFamily: '"IBM Plex Sans Thai Looped", sans-serif' }}>
//                             <h1 className="text-xl font-bold text-black">Solunar.</h1>
//                             <p className="text-lg font-normal text-black">129 moo 2 Bang Sare, Sattahip, Chon Buri 20250</p>
//                             <a href="#" className="text-base text-black mt-4 inline-flex items-center underline"  style={{ fontFamily: '"Roboto", sans-serif' }}>
//                                 Get Directions
//                                 <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//                                 </svg>
//                             </a>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Map / Placeholder */}
//                 <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden ">
//                     {/* <DynamicVectorMap /> */}
//                     <iframe
//                         title="Google Map"
//                         width="100%"
//                         height="100%"
//                         frameBorder="0"
//                         style={{ border: 0 }}
//                         referrerPolicy="no-referrer-when-downgrade"
//                         loading="lazy"
//                         allowFullScreen
//                         src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d5395.794992286238!2d100.901945!3d12.775116999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDQ2JzMwLjQiTiAxMDDCsDU0JzA3LjAiRQ!5e1!3m2!1sth!2sth!4v1748511134104!5m2!1sth!2sth"
//                     ></iframe>
//                 </div>
//             </div>
//         </section>


//     );
// }



"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="flex flex-col items-center justify-center py-10 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-10 bg-white/20 backdrop-blur-lg border border-white/30 rounded-3xl shadow-xl p-10"
      >
        {/* Left Side - Contact Info */}
        <div className="space-y-8 text-gray-900">
          <h2 className="text-4xl font-semibold tracking-wide mb-8">
            Contact <span className="text-[var(--color-logo)]">Us</span>
          </h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Mail className="text-[var(--color-logo)] w-6 h-6 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <a
                      href="mailto:info@solunarvilla.com"
                      className="text-gray-700 hover:underline"
                    >
                      info@solunarvilla.com
                    </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-[var(--color-logo)] w-6 h-6 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Phone</h3>
                <a
                      href="tel:+66936599815"
                      className="text-gray-700 hover:underline"
                    >
                      +66 93-659-9815
                    </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="text-[var(--color-logo)] w-6 h-6 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Solunar Villa</h3>
                <p className="text-gray-700 leading-relaxed">
                  129 moo 2 Bang Sare, Sattahip, Chon Buri 20250
                </p>
                <a
                  href="https://maps.app.goo.gl/Yfx2WVPoPCZWW8gc7"
                  target="_blank"
                  className="text-[var(--color-logo)] hover:underline mt-1 inline-block"
                >
                  Get Directions →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Google Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl overflow-hidden shadow-md"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d5395.794992286238!2d100.901945!3d12.775116999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDQ2JzMwLjQiTiAxMDDCsDU0JzA3LjAiRQ!5e1!3m2!1sth!2sth!4v1748511134104!5m2!1sth!2sth"
            width="100%"
            height="400"
            loading="lazy"
            className="rounded-2xl border-0 w-full h-full"
          ></iframe>
        </motion.div>
      </motion.div>
    </section>
  );
}

