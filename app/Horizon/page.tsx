import Gallery from "@/components/Gallery";
import Information from "@/components/Information";

export default function Home() {
    return (
        <div className="container m-auto p-4  pt-20">
            <div className="header">
                <h1 className="text-[#344054] text-5xl font-semibold">The Horizon Reteat</h1>
                <span className="text-[#344054] text-lg font-medium">10 guests ・ 5 bedrooms・5 beds・5 toilets・5 baths・5 Jacuzzi</span>
                <Gallery/>
            </div>
            <Information/>
        </div>
    );
}
