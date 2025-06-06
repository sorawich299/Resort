import React from "react";
import { VillaType } from "./VillaType";
import { CheckAvailable } from "./CheckAvailable";
import { GuestSelector } from "./GuestSelector";
import { ReserveButton } from "./ReserveButton";

const VerticalLine: React.FC = () => (
  <div className="w-px h-20 bg-gray-300"></div> // เส้นแนวตั้ง
);

const SharedStyleWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex flex-col items-center space-y-2">
    {children}
  </div>
);

const ReservationForm: React.FC = () => {
  return (
    <div
      className="flex items-center justify-center space-x-6 p-4"
      style={{ fontFamily: '"IBM Plex Sans Thai Looped", sans-serif' }}
    >
        <VerticalLine />
      <SharedStyleWrapper>
        <VillaType />
      </SharedStyleWrapper>
      <VerticalLine />
      <SharedStyleWrapper>
        <CheckAvailable />
      </SharedStyleWrapper>
      <VerticalLine />
      <SharedStyleWrapper>
        <GuestSelector />
      </SharedStyleWrapper>
      <VerticalLine />
      <SharedStyleWrapper>
        <ReserveButton />
      </SharedStyleWrapper>
    </div>
  );
};

export default ReservationForm;
