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
  <div className="flex flex-col items-center space-y-2 w-full lg:w-auto">
    {children}
  </div>
);

type ReservationData = {
  villaType: string;
  startDate: string; // Consider using Date if applicable
  endDate: string;
  adults: string;
  children: string;
};

const ReservationForm: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [reservationData, setReservationData] = useState<ReservationData>({
    villaType: '',
    startDate: '',
    endDate: '',
    adults: '',
    children: '',
  });



  return (
    <div
      className="flex flex-col lg:flex-row items-center justify-center lg:space-x-6 p-4 gap-4"
      style={{ fontFamily: '"IBM Plex Sans Thai Looped", sans-serif' }}
    >
      <SharedStyleWrapper>
        <VillaType
          value={reservationData.villaType}
          onChange={(value) =>
            setReservationData(prev => ({ ...prev, villaType: value }))
          } />
      </SharedStyleWrapper>
      <HorizontalLine />
      <VerticalLine />

      <SharedStyleWrapper>
        <DateRangePicker
          placeholder="Check Available"
          onChange={(start, end) =>
            setReservationData(prev => ({
              ...prev,
              startDate: start,
              endDate: end,
            }))
          }
        />
      </SharedStyleWrapper>
      <HorizontalLine />
      <VerticalLine />

      <SharedStyleWrapper>
        <GuestSelector
          adults={reservationData.adults}
          children={reservationData.children}
          onChange={(adults, children) =>
            setReservationData(prev => ({ ...prev, adults, children }))
          }
        />
      </SharedStyleWrapper>
      <HorizontalLine />
      <VerticalLine />

      <SharedStyleWrapper>
        <ReserveButton onClick={() => setIsOpen(!isOpen)} />
      </SharedStyleWrapper>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}>
        <ModalDetail
          defaultValues={{
            villaType: reservationData.villaType,
            startDate: reservationData.startDate ? new Date(reservationData.startDate) : null,
            endDate: reservationData.endDate ? new Date(reservationData.endDate) : null,
            adults: reservationData.adults,
            children: reservationData.children,
          }}
        />
      </Modal>
    </div>
  );
};

export default ReservationForm;