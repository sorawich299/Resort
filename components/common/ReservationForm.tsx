'use client'
import React, { useState } from "react";
import { VillaType } from "./VillaType";
import { DateRangePicker } from "./CheckAvailable";
import { GuestSelector } from "./GuestSelector";
import { ReserveButton } from "./ReserveButton";
import Modal from "../Modal";
import ModalDetail from "./ModalDetail";

const VerticalLine: React.FC = () => (
  <div className="hidden lg:block w-px h-20 bg-gray-300"></div>
);

const HorizontalLine: React.FC = () => (
  <div className="block lg:hidden h-px w-full bg-gray-300 my-2"></div>
);

const SharedStyleWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex flex-col items-center space-y-2 w-full lg:w-fit">
    {children}
  </div>
);

type ReservationData = {
  villaType: string;
  startDate: string;   // ควรเก็บเป็น 'YYYY-MM-DD'
  endDate: string;     // ควรเก็บเป็น 'YYYY-MM-DD'
  adults: string;
  children: string;
};

const ReservationForm: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [formData, setFormData] = useState<ReservationData>({
    villaType: "",
    startDate: "",
    endDate: "",
    adults: "",
    children: "",
  });

  // แปลง Date -> 'YYYY-MM-DD' (เผื่อกรณี DateRangePicker ส่ง Date object มาในอนาคต)
  const toYMD = (d: Date | string | null) => {
    if (!d) return "";
    if (typeof d === "string") return d; // assume already 'YYYY-MM-DD'
    const pad = (n: number) => n.toString().padStart(2, "0");
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  };

  // ⤴ เมื่อกด Reserve: สร้าง URL พร้อม query
  const handleReserve = () => {
    const params = new URLSearchParams({
      villaType: formData.villaType || "",
      startDate: toYMD(formData.startDate as unknown as Date | string),
      endDate: toYMD(formData.endDate as unknown as Date | string),
      adults: formData.adults || "",
      children: formData.children || "",
    });

    // เปลี่ยนปลายทางตามจริงของคุณ
    // https://booking.solunarvilla.com


    const url = `http://localhost:8080/?${params.toString()}`;
    // window.location.href = url; // หรือ window.open(url, "_blank")
    window.open(url, "_blank")
  };

  return (
    <div
      className="flex flex-col lg:flex-row items-center justify-center lg:space-x-6 p-4"
      style={{ fontFamily: '"IBM Plex Sans Thai Looped", sans-serif' }}
    >
      <SharedStyleWrapper>
        <VillaType
          value={formData.villaType}
          onChange={(value) =>
            setFormData((prev) => ({ ...prev, villaType: value }))
          }
        />
      </SharedStyleWrapper>
      <HorizontalLine />
      <VerticalLine />

      <SharedStyleWrapper>
        <DateRangePicker
          placeholder="Check Available"
          onChange={(start, end) =>
            setFormData((prev) => ({
              ...prev,
              startDate: start, // ให้ DateRangePicker ส่งเป็น 'YYYY-MM-DD' จะง่ายสุด
              endDate: end,
            }))
          }
        />
      </SharedStyleWrapper>
      <HorizontalLine />
      <VerticalLine />

      <SharedStyleWrapper>
        <GuestSelector
          adults={formData.adults}
          children={formData.children}
          onChange={(adults, children) =>
            setFormData((prev) => ({ ...prev, adults, children }))
          }
        />
      </SharedStyleWrapper>
      <HorizontalLine />
      <VerticalLine />

      <SharedStyleWrapper>
        {/* ใช้ฟังก์ชัน handleReserve แทน href ตรง ๆ */}
        <ReserveButton onClick={handleReserve} />
      </SharedStyleWrapper>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalDetail
          defaultValues={{
            villaType: formData.villaType,
            startDate: formData.startDate ? new Date(formData.startDate) : null,
            endDate: formData.endDate ? new Date(formData.endDate) : null,
            adults: formData.adults,
            children: formData.children,
          }}
        />
      </Modal>
    </div>
  );
};

export default ReservationForm;
