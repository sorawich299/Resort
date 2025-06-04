// components/Modal.tsx
import CloseIcon from "@/public/icons/CloseIcon";
import React from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />

      {/* Modal Panel */}
      <div
        className="relative z-10 flex items-center justify-center min-h-screen p-4"
        onClick={onClose} // click outside
      >
        <div
          className="w-full max-w-4xl bg-white rounded-xl shadow-xl"
          onClick={(e) => e.stopPropagation()} 
        >
          {/* Header */}
          <div className="flex justify-between items-center p-8">
            <div className="flex flex-col gap-4                               ">
              <h2 className="text-2xl font-semibold text-orange-600">
                Request a Reservation
              </h2>
              <p className="text-gray-600">
                Reach Out to Reserve – We’ll Get Back to You with Availability
              </p>
            </div>
            <button onClick={onClose} className="cursor-pointer"><CloseIcon color="#000000" /></button>
          </div>
          <hr className="border-gray-300" />
          <div className="p-8">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
