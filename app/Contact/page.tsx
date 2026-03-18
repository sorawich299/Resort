"use client";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setLoading(false);
    if (res.ok) {
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("error");
    }
  };

  return (
    <>
      <div className="h-[64px]" /> {/* Header spacer */}
      <div className="container flex flex-row mx-auto px-4 md:px-20 max-w-[1200px] relative">
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
      </div>
    </>
  );
}
