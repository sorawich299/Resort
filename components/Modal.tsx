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
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />

      {/* Modal Panel */}
      <div
        className="relative z-10 w-full max-w-4xl bg-white rounded-xl shadow-xl mx-4 sm:mx-6 md:mx-auto max-h-[70vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-start p-6 md:p-8 sticky top-0 bg-white z-20 border-b">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl md:text-2xl font-semibold text-[var(--color-logo)]">
              Request a Reservation
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Reach Out to Reserve – We’ll Get Back to You with Availability
            </p>
          </div>
          <button onClick={onClose} className="p-1 md:p-2 hover:opacity-80">
            <CloseIcon color="#000000" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
