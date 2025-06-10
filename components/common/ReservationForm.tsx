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

const ReservationForm: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [defaultData, setDefaultData] = useState({
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
        <VillaType />
      </SharedStyleWrapper>
      <HorizontalLine />
      <VerticalLine />

      <SharedStyleWrapper>
        <DateRangePicker
          placeholder="Check Available"
          onChange={(start, end) =>
            // setDefaultData(old => ({
            //   ...old,
            //   startDate: start,
            //   endDate: end,
            // }))
            console.log(start, end)
          }
        />
      </SharedStyleWrapper>
      <HorizontalLine />
      <VerticalLine />

      <SharedStyleWrapper>
        <GuestSelector />
      </SharedStyleWrapper>
      <HorizontalLine />
      <VerticalLine />

      <SharedStyleWrapper>
        <ReserveButton onClick={() => setIsOpen(!isOpen)} />
      </SharedStyleWrapper>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}>
        <ModalDetail />
      </Modal>
    </div>
  );
};

export default ReservationForm;