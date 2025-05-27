import DealIcon from "@/public/icons/DealIcon";
import DiningIcon from "@/public/icons/DiningIcon";
import MeetingIcon from "@/public/icons/MeetingIcon";
import PoolIcon from "@/public/icons/PoolIcon";

export default function VillaRetreatOverview() {
    return (
        <section className="max-w-6xl mx-auto px-4 py-16">
            <div className="max-w-[600px]">
                <h2 className="text-base text-black font-normal">The Infinity Villa and The Horizon Retreat</h2>
                <h1 className="text-4xl text-black font-medium py-4">Host an unforgettable corporate retreat by the sea</h1>
                <p className="text-lg text-black font-noraml">Whether it’s a private mini party, a strategic meeting, or simply a luxurious reward trip — our villa offers the perfect blend of privacy, comfort, and stunning seaside views for your team.</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 w-full justify-center gap-5 pt-6">
                <div className="flex flex-col justify-center flex-1 py-4 gap-4 font-bold">
                    <i className="text-xl font-bold text-blue-600 not-italic">
                        <DiningIcon color="#2970FF" />
                    </i>
                    <span className="text-gray-700 text-lg">
                        Elegant living spaces ideal for intimate gatherings
                    </span>
                </div>
                <div className="flex flex-col justify-center flex-1 py-4 gap-4 font-bold">
                    <i className="text-xl font-bold text-green-600 not-italic">
                        <MeetingIcon color="#2970FF" />
                    </i>
                    <span className="text-gray-700 text-lg">
                        Spacious open area for meetings or private parties
                    </span>
                </div>
                <div className="flex flex-col justify-center flex-1 py-4 gap-4 font-bold">
                    <i className="text-xl font-bold text-red-600 not-italic">
                        <PoolIcon color="#2970FF" />
                    </i>
                    <span className="text-gray-700 text-lg">
                        Private infinity pool and jacuzzi for relaxation
                    </span>
                </div>
                <div className="flex flex-col justify-center flex-1 py-4 gap-4 font-bold">
                    <i className="text-xl font-bold text-purple-600 not-italic">
                        <DealIcon color="#2970FF" />
                    </i>
                    <span className="text-gray-700 text-lg">
                        Tailored packages available for corporate groups
                    </span>
                </div>
            </div>


        </section>
    );
};
