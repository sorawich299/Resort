export default function TomorrowlandThailand2026() {
  return (
    <section className="py-8 px-6 bg-white text-neutral-900">
      <div className="max-w-5xl mx-auto">

        {/* SECTION HEADER */}
        <div className="text-center mb-8">
          <h1
            className="text-3xl md:text-4xl font-semibold tracking-wide"
            style={{ fontFamily: '"Cormorant Infant", serif' }}
          >
            Upcoming Events
          </h1>
          <div className="w-14 h-[2px] bg-neutral-900 mx-auto mt-3" />
        </div>

        {/* EVENT CARD */}
        <div className="rounded-xl border border-neutral-200 shadow-sm overflow-hidden">

          <div className="grid md:grid-cols-2">

            {/* IMAGE */}
            <div className="h-56 md:h-full">
              <img
                src="https://www.salika.co/wp-content/uploads/2025/12/tomorrowland-thailand-2026.jpg"
                alt="Tomorrowland Thailand 2026"
                className="w-full h-full object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="p-7">

              <h2
                className="text-2xl md:text-3xl font-semibold"
                style={{ fontFamily: '"Cormorant Infant", serif' }}
              >
                Tomorrowland Thailand 2026
              </h2>

              <p className="text-neutral-500 mt-2 text-base">
                Asia’s First Tomorrowland Experience • Concept “Consciencia”
              </p>

              <p className="text-neutral-700 mt-4 leading-relaxed text-base">
                A world-class electronic music festival held at Wisdom Valley,
                Pattaya. Expected attendance of
                <span className="font-semibold text-neutral-900">
                  {" "}50,000 visitors per day
                </span>
                , featuring multiple legendary stages and immersive experiences.
              </p>

              {/* INFO GRID */}
              <div className="grid grid-cols-3 gap-4 mt-6 text-sm">

                <div>
                  <p className="text-neutral-500">Event Dates</p>
                  <p className="font-medium">11–13 December 2026</p>
                </div>

                <div>
                  <p className="text-neutral-500">Location</p>
                  <p className="font-medium">Wisdom Valley, Pattaya</p>
                </div>

                <div>
                  <p className="text-neutral-500">Stages</p>
                  <p className="font-medium">
                    Mainstage • CORE • Freedom
                  </p>
                </div>

              </div>

              {/* TICKET INFO */}
              <div className="mt-6 text-sm">
                <p className="font-semibold">Ticket Sales</p>
                <ul className="text-neutral-700 mt-2 space-y-1">
                  <li>Hotel Packages — Feb 28, 2026 • 16:00</li>
                  <li>General Tickets — Mar 7, 2026 • 16:00</li>
                </ul>
              </div>

              {/* CTA */}
              <a
                href="https://thailand.tomorrowland.com/th/welcome/"
                target="_blank"
                className="inline-block mt-6 px-6 py-3 rounded-lg
                font-semibold text-white
                bg-neutral-900 hover:bg-neutral-800 transition"
              >
                View Details & Register
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}