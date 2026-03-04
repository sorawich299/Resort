"use client";

export default function TomorrowlandThailand2026() {
  return (
    <section className="relative py-20 px-6" style={{ fontFamily: '"Cormorant Infant", sans-serif' }}>

      {/* Neon Background */}
      <div className="absolute inset-0 bg-gradient-to-br 
        from-purple-900 via-black to-indigo-900 opacity-95" />

      <div className="relative max-w-5xl mx-auto">

        <div className="rounded-3xl p-10
          bg-white/5 backdrop-blur-xl
          border border-white/10
          shadow-[0_0_60px_rgba(168,85,247,0.4)]">

          {/* TITLE */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-wide">
            Tomorrowland Thailand 2026
          </h2>

          <p className="text-purple-300 mt-2 text-lg">
            EDM Festival ครั้งแรกในเอเชีย • Concept “Consciencia”
          </p>

          {/* Description */}
          <p className="text-gray-300 mt-6 leading-relaxed">
            เทศกาลดนตรีระดับโลก ณ Wisdom Valley พัทยา
            คาดผู้เข้าร่วมกว่า
            <span className="text-pink-400 font-bold"> 50,000 คนต่อวัน </span>
            พร้อม 6 เวทีระดับตำนาน
          </p>

          {/* INFO GRID */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">

            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <p className="text-pink-400 font-semibold">วันจัดงาน</p>
              <p className="text-white">11–13 ธันวาคม 2569</p>
            </div>

            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <p className="text-purple-400 font-semibold">สถานที่</p>
              <p className="text-white">Wisdom Valley พัทยา</p>
            </div>

            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <p className="text-cyan-400 font-semibold">Stages</p>
              <p className="text-white">Mainstage • CORE • FREEDOM</p>
            </div>

          </div>

          {/* TICKET */}
          <div className="mt-10 bg-gradient-to-r
            from-pink-500/20 to-purple-500/20
            border border-pink-400/30
            rounded-2xl p-6">

            <p className="text-white font-semibold text-lg">
              🎟 การจำหน่ายบัตร
            </p>

            <ul className="text-gray-200 mt-3 space-y-1">
              <li>Hotel Package — 28 ก.พ. 2569 เวลา 16:00</li>
              <li>General Ticket — 7 มี.ค. 2569 เวลา 16:00</li>
            </ul>

          </div>

          {/* CTA */}
          <a
            href="https://thailand.tomorrowland.com/th/welcome/"
            target="_blank"
            className="block mt-10 text-center
            py-4 rounded-xl
            font-bold text-lg
            text-white
            bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
            hover:scale-105
            transition-all duration-300
            shadow-[0_0_40px_rgba(236,72,153,0.8)]"
          >
            ✨ ดูรายละเอียด & ลงทะเบียน
          </a>

        </div>
      </div>
    </section>
  );
}