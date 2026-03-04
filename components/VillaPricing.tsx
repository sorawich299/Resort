"use client";

export default function VillaPricingSection() {
  return (
    <section className="w-full bg-gray-50 py-16" style={{ fontFamily: '"Cormorant Infant", sans-serif' }}>
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT */}
          <div>
            <h2 className="text-4xl font-semibold mb-6">
              Starting from{" "}
              <span className="text-blue-600 font-bold">$3,000</span> / night
            </h2>

            <h3 className="font-semibold mb-4 text-xl">
              Exclusive Privileges Included:
            </h3>

            <ul className="space-y-3 text-gray-600 leading-relaxed text-xl font-bold">
              <li>
                <span className='text-green-600 text-2xl font-bold'>✓</span> Personal Butler: Available 24/7 for your every need.
              </li>
              <li>
                <span className='text-green-600 text-2xl font-bold'>✓</span> Daily Gourmet Breakfast: For up to 10 guests.
              </li>
              <li>
                <span className='text-green-600 text-2xl font-bold'>✓</span> Signature Afternoon Tea: Served daily in-villa for 10 guests.
              </li>
            </ul>
          </div>

          {/* RIGHT TABLE */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xl font-bold">
              <thead>
                <tr className="border-b border-gray-400">
                  <th className="pb-3 font-semibold">Stay Duration</th>
                  <th className="pb-3 font-semibold">Price per Night</th>
                  <th className="pb-3 font-semibold">Total Savings</th>
                </tr>
              </thead>

              <tbody className="text-gray-700 text-lg font-bold">
                <tr className="border-b">
                  <td className="py-4">
                    Daily Rate (1-6 Nights)
                  </td>
                  <td>$4,000</td>
                  <td>Standard Rate</td>
                </tr>

                <tr className="border-b">
                  <td className="py-4">
                    Weekly Rate (7+ Nights)
                  </td>
                  <td>$3,500</td>
                  <td className="text-green-600">
                    Save $500 / night
                  </td>
                </tr>

                <tr>
                  <td className="py-4">
                    Monthly Rate (30+ Nights)
                  </td>
                  <td>$3,000</td>
                  <td className="text-green-600">
                    Save $1,000 / night
                  </td>
                </tr>
              </tbody>
            </table>

            <p className="text-lg text-gray-500 italic mt-4">
              * Extra person: $280/night
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}