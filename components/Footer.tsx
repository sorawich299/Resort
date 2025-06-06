'use client';
import EmailIcon from "@/public/icons/EmailIcon";
import LogoIcon from "@/public/icons/LogoIcon";
import PhoneIcon from "@/public/icons/PhoneIcon";
import { useEffect, useState } from "react";
import ConsentBanner from "./common/ConsentBanner";
import PrivacyPolicyModal from "./common/ModalPrivacyPolicy";
import ModalTermsOfService from "./common/ModalTermsOfService";

export default function Footer() {
    const [isConsentGiven, setIsConsentGiven] = useState<boolean | null>(null);
    const [isBannerClosed, setIsBannerClosed] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isOpenPrivacyPolicy, setIsOpenPrivacyPolicy] = useState<boolean>(false);
    const [isOpenTermsOfService, setIsOpenTermsOfService] = useState<boolean>(false);

    useEffect(() => {
        // ตรวจสอบค่าจาก localStorage เมื่อโหลดหน้าเว็บ
        const consent = localStorage.getItem("consentGiven");
        setIsConsentGiven(consent === "true");
    }, []);

    const handleConsentAccept = () => {
        // บันทึกการยินยอมใน localStorage
        localStorage.setItem("consentGiven", "true");
        setIsConsentGiven(true);
        setIsBannerClosed(true); // ปิดแบนเนอร์
    };

    const handleBannerClose = () => {
        // ปิดแบนเนอร์โดยไม่บันทึกการยินยอม
        setIsBannerClosed(true);
        setIsVisible(false); // ซ่อนแบนเนอร์
    };

    const handleOpenConsentSettings = () => {
        // เปิดแบนเนอร์ใหม่
        setIsBannerClosed(false);
        setIsVisible(true);
    };

    // ระหว่างรอโหลดค่า localStorage ไม่แสดงแบนเนอร์หรือหน้าเพจที่ผิดพลาด
    if (isConsentGiven === null) {
        return null; // หรืออาจเพิ่ม Loading Indicator
    }
    return (
        <footer className="bg-white text-sm text-gray-600" style={{ fontFamily: '"IBM Plex Sans Thai Looped", sans-serif' }}>
            <div className="mx-auto px-[42px] lg:px-[84px] py-10 lg:py-20 flex flex-col gap-20">
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
                                <EmailIcon color="#000000" width="20" height="16" />
                                <span>hello@relume.io</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <PhoneIcon color="#000000" width="20" height="16" />
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
                            <button onClick={() => setIsOpenPrivacyPolicy(!isOpenPrivacyPolicy)} className="underline cursor-pointer">Privacy Policy</button>
                            <button onClick={() => setIsOpenTermsOfService(!isOpenTermsOfService)} className="underline cursor-pointer">Terms of Service</button>
                            <button onClick={handleOpenConsentSettings} className="underline cursor-pointer">
                                Cookies Settings
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {!isConsentGiven && !isBannerClosed && (
                <ConsentBanner
                    onAccept={handleConsentAccept}
                    onClose={handleBannerClose}
                    isVisibleValue={isVisible}
                />
            )}
            <PrivacyPolicyModal isOpen={isOpenPrivacyPolicy} onClose={() => setIsOpenPrivacyPolicy(!isOpenPrivacyPolicy)}>

            </PrivacyPolicyModal>
            <ModalTermsOfService isOpen={isOpenTermsOfService} onClose={() => setIsOpenTermsOfService(!isOpenTermsOfService)}>

            </ModalTermsOfService>
        </footer>
    );
}
