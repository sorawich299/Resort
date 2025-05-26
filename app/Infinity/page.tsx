import Gallery from "@/components/Gallery";
import Information from "@/components/Information";
import InformationVilla from "@/components/InformationVilla";
import NearbySection from "@/components/VillaDetail/NearBySection";

export default function Home() {
    const images = [
        "https://via.placeholder.com/800x800?text=1", // รูปใหญ่
        "https://via.placeholder.com/400x400?text=2",
        "https://via.placeholder.com/400x400?text=3",
        "https://via.placeholder.com/400x400?text=4",
        "https://via.placeholder.com/400x400?text=5",
    ];
    return (
        <div className="container m-auto p-4  pt-20">
            <div className="header">
                <h1 className="text-[#344054] text-5xl font-semibold">The Infinity Villa</h1>
                <span className="text-[#344054] text-lg font-medium">10 guests ・ 5 bedrooms・5 beds・5 toilets・5 baths・5 Jacuzzi</span>
                <Gallery images={images} link={'/Infinity/Gallery'}/>
            </div>
            <InformationVilla/>
            <hr className="border-gray-300 mt-20"/>
            <NearbySection/>
            <Information/>
        </div>
    );
}
