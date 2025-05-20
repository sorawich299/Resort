export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200 text-sm text-gray-600">
            <div className="max-w-6xl mx-auto px-4 py-10">
                <div className="flex flex-col sm:flex-row justify-between gap-8">
                    {/* Logo and Address */}
                    <div className="flex flex-col gap-2">
                        <img src="/assets/img/logo.png" alt="PBB Logo" className="w-20 h-auto" />

                        <div className="font-bold text-black">PBB SAILOM SEA BEACH</div>
                        <div>Bang Sare, Sattahip, Chon Buri 20250</div>

                        <div className="flex items-center gap-4 mt-2">
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M2 4v16h20V4H2zm18 2v2H4V6h16zm0 4v8H4v-8h16z"></path>
                                </svg>
                                <span>hello@relume.io</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h2l.4 2M7 10h10M7 16h10m1-8h2a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2h2"></path>
                                </svg>
                                <span>+1 (555) 000-0000</span>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="my-8 border-t border-gray-300" />

                <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
                    <div>2025 appworks. All right reserved.</div>
                    <div className="flex gap-4 mt-2 sm:mt-0">
                        <a href="#" className="hover:underline">Privacy Policy</a>
                        <a href="#" className="hover:underline">Terms of Service</a>
                        <a href="#" className="hover:underline">Cookies Settings</a>
                    </div>
                </div>
            </div>
        </footer>

    );
}
