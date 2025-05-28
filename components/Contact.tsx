export default function Contact() {
    return (
        <section className="container max-w-[1200px] w-full mx-auto px-[120px] py-28 flex flex-col gap-20">
            <h2 className="text-5xl font-medium text-black">Contact us</h2>
            <div className="grid md:grid-cols-2 gap-12 items-start">
                {/* Contact Info */}
                <div className="flex flex-col gap-10">


                    {/* Email */}
                    <div className="flex flex-col gap-4">
                        <div className="text-blue-600">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M2 4v16h20V4H2zm18 2v2H4V6h16zm0 4v8H4v-8h16z" />
                            </svg>
                        </div>
                        <div className="flex flex-col gap-2"  style={{ fontFamily: '"IBM Plex Sans Thai Looped", sans-serif' }}>
                            <h1 className="text-xl font-bold text-black" >Email</h1>
                            <p className="text-lg font-normal text-black">Lorem ipsum dolor sit amet.</p>
                            <p className="text-lg font-normal text-black">hello@relume.io</p>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col gap-4">
                        <div className="text-blue-600">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h2l.4 2M7 10h10M7 16h10m1-8h2a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2h2" />
                            </svg>
                        </div>
                        <div className="flex flex-col gap-2"  style={{ fontFamily: '"IBM Plex Sans Thai Looped", sans-serif' }}>
                            <h1 className="text-xl font-bold text-black">Phone</h1>
                            <p className="text-lg font-normal text-black">Lorem ipsum dolor sit amet.</p>
                            <p className="text-lg font-normal text-black">+1 (555) 000-0000</p>
                        </div>
                    </div>

                    {/* Address */}
                    <div className="flex flex-col gap-4">
                        <div className="text-blue-600">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                            </svg>
                        </div>
                        <div className="flex flex-col gap-2"  style={{ fontFamily: '"IBM Plex Sans Thai Looped", sans-serif' }}>
                            <h1 className="text-xl font-bold text-black">PBB SAILOM SEA BEACH</h1>
                            <p className="text-lg font-normal text-black">Bang Sare, Sattahip, Chon Buri 20250</p>
                            <a href="#" className="text-base text-black mt-4 inline-flex items-center underline"  style={{ fontFamily: '"Roboto", sans-serif' }}>
                                Get Directions
                                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Map / Placeholder */}
                <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden ">
                    <iframe
                        title="Google Map"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        style={{ border: 0 }}
                        referrerPolicy="no-referrer-when-downgrade"
                        loading="lazy"
                        allowFullScreen
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.392418054667!2d100.89170247490333!3d12.757624118365043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3102f729a8c3bcb9%3A0xf9b7481e2c4d14b0!2sBang%20Sare%2C%20Sattahip%2C%20Chon%20Buri%2020250!5e0!3m2!1sen!2sth!4v1716218015676!5m2!1sen!2sth"
                    ></iframe>
                </div>
            </div>
        </section>


    );
}
