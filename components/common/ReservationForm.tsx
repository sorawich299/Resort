'use client';
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
  startDate: string;   // 'YYYY-MM-DD'
  endDate: string;     // 'YYYY-MM-DD'
  adults: string;      // เก็บเป็น string จาก <select>/<input>
  children: string;    // เก็บเป็น string จาก <select>/<input>
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

  // Date -> 'YYYY-MM-DD'
  const toYMD = (d: Date | string | null) => {
    if (!d) return "";
    if (typeof d === "string") return d; // assume already 'YYYY-MM-DD'
    const pad = (n: number) => n.toString().padStart(2, "0");
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  };

  // ✅ สถานะพร้อมกด
  const guestsCount =
    (Number(formData.adults || "0") || 0) + (Number(formData.children || "0") || 0);
  const hasDates = Boolean(formData.startDate && formData.endDate);
  const validDateRange = hasDates
    ? new Date(formData.startDate) <= new Date(formData.endDate)
    : false;

  // ถ้าต้องการให้ “ผู้ใหญ่ ≥ 1 คน” แทนรวมทั้งหมด ให้ใช้: Number(formData.adults || '0') > 0
  const canReserve =
    Boolean(formData.villaType) && hasDates && validDateRange && guestsCount > 0;

  // ⤴ เมื่อกด Reserve: สร้าง URL พร้อม query
  const handleReserve = () => {
    if (!canReserve) return; // กันการลัดคลิกด้วย programmatic click

    const params = new URLSearchParams({
      villaType: formData.villaType || "",
      startDate: toYMD(formData.startDate as unknown as Date | string),
      endDate: toYMD(formData.endDate as unknown as Date | string),
      adults: formData.adults || "",
      children: formData.children || "",
    });

    // ปลายทางจริงของคุณ เช่น https://booking.solunarvilla.com
    const url = `http://localhost:8080/?${params.toString()}`;
    window.open(url, "_blank");
  };

  return (
    <div
      className="flex flex-col lg:flex-row items-center justify-center lg:space-x-6 p-4"
      // style={{ fontFamily: '"IBM Plex Sans Thai Looped", sans-serif' }}
      style={{ fontFamily: '"Cormorant Infant", sans-serif' }}
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
              // แนะนำให้ DateRangePicker ส่ง 'YYYY-MM-DD' มาจะง่ายสุด
              startDate: start || "",
              endDate: end || "",
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
        {/* ปุ่มจะ disabled ถ้าไม่ผ่านเงื่อนไข canReserve */}
        <ReserveButton onClick={handleReserve} disabled={!canReserve} />
        
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
