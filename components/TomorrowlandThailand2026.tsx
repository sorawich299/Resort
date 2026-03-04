export default function TomorrowlandThailand2026() {
  return (
    <section className="py-6 px-6 bg-white text-neutral-900">
      <div className="max-w-5xl mx-auto">

        {/* SECTION HEADER */}
        <div className="text-center mb-14">
          <h1
            className="text-5xl md:text-6xl font-semibold tracking-wide"
            style={{ fontFamily: '"Cormorant Infant", serif' }}
          >
            Up coming events !
          </h1>

          <div className="w-24 h-[2px] bg-neutral-900 mx-auto mt-4" />
        </div>

        {/* EVENT CARD */}
        <div className="rounded-3xl p-10 bg-white border border-neutral-200 shadow-sm">

          {/* TITLE */}
          <h2
            className="text-4xl md:text-5xl font-semibold tracking-wide"
            style={{ fontFamily: '"Cormorant Infant", serif' }}
          >
            Tomorrowland Thailand 2026
          </h2>

          <p className="text-neutral-500 mt-3 text-lg font-medium">
            Asia’s First Tomorrowland Experience • Concept “Consciencia”
          </p>

          {/* Description */}
          <p className="text-neutral-700 mt-6 leading-relaxed text-base max-w-3xl">
            A world-class electronic music festival held at Wisdom Valley,
            Pattaya. Expected attendance of
            <span className="font-semibold text-neutral-900">
              {" "}50,000 visitors per day
            </span>
            , featuring multiple legendary stages and immersive experiences.
          </p>

          {/* INFO GRID */}
          <div className="grid md:grid-cols-3 gap-6 mt-10">

            <div className="rounded-xl p-5 border border-neutral-200">
              <p className="text-sm text-neutral-500 mb-1">Event Dates</p>
              <p className="font-semibold">
                11–13 December 2026
              </p>
            </div>

            <div className="rounded-xl p-5 border border-neutral-200">
              <p className="text-sm text-neutral-500 mb-1">Location</p>
              <p className="font-semibold">
                Wisdom Valley, Pattaya
              </p>
            </div>

            <div className="rounded-xl p-5 border border-neutral-200">
              <p className="text-sm text-neutral-500 mb-1">Stages</p>
              <p className="font-semibold">
                Mainstage • CORE • Freedom
              </p>
            </div>

          </div>

          {/* TICKET INFO */}
          <div className="mt-10 rounded-2xl p-6 border border-neutral-200 bg-neutral-50">
            <p className="text-lg font-semibold">
              Ticket Sales
            </p>

            <ul className="text-neutral-700 mt-3 space-y-1">
              <li>Hotel Packages — Feb 28, 2026 • 16:00</li>
              <li>General Tickets — Mar 7, 2026 • 16:00</li>
            </ul>
          </div>

          {/* CTA */}
          <a
            href="https://thailand.tomorrowland.com/th/welcome/"
            target="_blank"
            className="block mt-10 text-center py-4 rounded-xl
            font-semibold text-lg text-white
            bg-neutral-900 hover:bg-neutral-800
            transition-all duration-300"
          >
            View Details & Register
          </a>

        </div>
      </div>
    </section>
  );
}