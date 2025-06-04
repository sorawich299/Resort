import DealIcon from "@/public/icons/DealIcon";
import DiningIcon from "@/public/icons/DiningIcon";
import MeetingIcon from "@/public/icons/MeetingIcon";
import PoolIcon from "@/public/icons/PoolIcon";
import FeatureItem from "./common/FeatureItem";

export default function VillaRetreatOverview() {
    return (
        <section className="container mx-auto  py-14 px-8 lg:py-28 lg:px-16 flex flex-col gap-10 lg:gap-20 max-w-[1200px]">
            <div className="flex flex-col gap-4 max-w-[570px]">
                <h2 className="text-base font-normal text-black" style={{ fontFamily: '"IBM Plex Sans Thai Looped", sans-serif' }}>The Infinity Villa and The Horizon Retreat</h2>
                <div className="flex flex-col gap-6">
                    <h1 className="text-4xl font-medium text-black">Host an unforgettable corporate retreat by the sea</h1>
                    <p className="text-lg font-normal text-[var(--color-secondary)]" style={{ fontFamily: '"IBM Plex Sans Thai Looped", sans-serif' }}>Whether it’s a private mini party, a strategic meeting, or simply a luxurious reward trip — our villa offers the perfect blend of privacy, comfort, and stunning seaside views for your team.</p>
                </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 w-full justify-center gap-12 max-w-[1200px]">
                <FeatureItem
                    Icon={DiningIcon}
                    text="Elegant living spaces ideal for intimate gatherings"
                />
                <FeatureItem
                    Icon={MeetingIcon}
                    text="Spacious open area for meetings or private parties"
                />
                <FeatureItem
                    Icon={PoolIcon}
                    text="Private infinity pool and jacuzzi for relaxation"
                />
                <FeatureItem
                    Icon={DealIcon}
                    text="Tailored packages available for corporate groups"
                />
            </div>


        </section>
    );
};
