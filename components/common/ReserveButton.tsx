import React from "react";

type ReserveButtonProps = {
  onClick: () => void;
};

export const ReserveButton: React.FC<ReserveButtonProps> = ({ onClick }) => {
  return (
    <button className="bg-[var(--color-icon-primary)] text-white font-semibold py-2 px-6 rounded-lg" onClick={onClick}>
      Reserve
    </button>
  );
};
