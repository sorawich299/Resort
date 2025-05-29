import EmailIcon from "@/public/icons/EmailIcon"
import LogoIcon from "@/public/icons/LogoIcon"
import PhoneIcon from "@/public/icons/PhoneIcon"

export default function Footer() {
    return (
        <footer className="bg-white  text-sm text-gray-600"  style={{ fontFamily: '"IBM Plex Sans Thai Looped", sans-serif' }}>
            <div className=" mx-auto px-[42px] lg:px-[84px] py-10 lg:py-20 flex flex-col gap-20">
                <div className="flex flex-col sm:flex-row justify-between ">
                    {/* Logo and Address */}
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-5">
                            <LogoIcon color="black" />

                            <div className="flex flex-col gap-2">
                                <div className="font-bold text-black">Solunar.</div>
                                <div>129 moo 2 Bang Sare, Sattahip, Chon Buri 20250</div>
                            </div>
                        </div>


                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <EmailIcon color="#000000" width="20" height="16"/>
                                <span>hello@relume.io</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <PhoneIcon color="#000000" width="20" height="16"/>
                                <span>+1 (555) 000-0000</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-8">
                    <hr className="border border-gray-300" />

                    <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
                        <div>2025 All right reserved.</div>
                        <div className="flex gap-4 mt-2 sm:mt-0">
                            <a href="#" className="underline">Privacy Policy</a>
                            <a href="#" className="underline">Terms of Service</a>
                            <a href="#" className="underline">Cookies Settings</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
}
