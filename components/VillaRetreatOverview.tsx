import DealIcon from "@/public/icons/DealIcon";
import DiningIcon from "@/public/icons/DiningIcon";
import MeetingIcon from "@/public/icons/MeetingIcon";
import PoolIcon from "@/public/icons/PoolIcon";

export default function VillaRetreatOverview() {
    return (
        <section className="container mx-auto py-28 px-16 flex flex-col gap-20">
            <div className="flex flex-col gap-4 max-w-[570px]">
                <h2 className="text-base font-normal text-black" style={{ fontFamily: '"IBM Plex Sans Thai Looped", sans-serif' }}>The Infinity Villa and The Horizon Retreat</h2>
                <div className="flex flex-col gap-6">
                    <h1 className="text-4xl font-medium text-black">Host an unforgettable corporate retreat by the sea</h1>
                    <p className="text-lg font-normal text-black" style={{ fontFamily: '"IBM Plex Sans Thai Looped", sans-serif' }}>Whether it’s a private mini party, a strategic meeting, or simply a luxurious reward trip — our villa offers the perfect blend of privacy, comfort, and stunning seaside views for your team.</p>
                </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 w-full justify-center gap-12 max-w-[1200px]">
                <div className="flex flex-col gap-6 max-w-[264px] w-full">
                    <DiningIcon color="#2970FF" />
                    <span className="text-xl font-medium text-black" style={{ fontFamily: '"IBM Plex Sans Thai Looped", sans-serif' }}>
                        Elegant living spaces ideal for intimate gatherings
                    </span>
                </div>
                <div className="flex flex-col gap-6 max-w-[264px] w-full">
                    <MeetingIcon color="#2970FF" />
                    <span className="text-xl font-medium text-black" style={{ fontFamily: '"IBM Plex Sans Thai Looped", sans-serif' }}>
                        Spacious open area for meetings or private parties
                    </span>
                </div>
                <div className="flex flex-col gap-6 max-w-[264px] w-full">
                    <PoolIcon color="#2970FF" />
                    <span className="text-xl font-medium text-black" style={{ fontFamily: '"IBM Plex Sans Thai Looped", sans-serif' }}>
                        Private infinity pool and jacuzzi for relaxation
                    </span>
                </div>
                <div className="flex flex-col gap-6 max-w-[264px] w-full">
                    <DealIcon color="#2970FF" />
                    <span className="text-xl font-medium text-black" style={{ fontFamily: '"IBM Plex Sans Thai Looped", sans-serif' }}>
                        Tailored packages available for corporate groups
                    </span>
                </div>
            </div>


        </section>
    );
};
