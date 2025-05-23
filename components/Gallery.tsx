"use client";

export default function Gallery() {
    const images = [
        "https://via.placeholder.com/800x800?text=1", // รูปใหญ่
        "https://via.placeholder.com/400x400?text=2",
        "https://via.placeholder.com/400x400?text=3",
        "https://via.placeholder.com/400x400?text=4",
        "https://via.placeholder.com/400x400?text=5",
    ];

    return (
        <div className="relative">
            <div className="flex gap-2 mx-auto p-4 h-[600px] max-w-6xl">
                {/* รูปใหญ่ (กินพื้นที่ซ้ายครึ่งหนึ่ง) */}
                <div className="flex-1">
                    <img
                        src={images[0]}
                        alt="Large"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>

                {/* รูปเล็ก 4 รูป (2x2 grid) */}
                <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-2">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-full h-full">
                            <img
                                src={images[i]}
                                alt={`Small ${i}`}
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="absolute bottom-10 right-20">
                <button className="cursor-pointer p-4 bg-gray-600 border-lg rounded-lg text-white z-100" onClick={()=> alert(5555)}>Show all photos</button>
            </div>
        </div>
    );
}
