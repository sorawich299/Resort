import React from "react";

type ReserveButtonProps = {
  onClick: () => void;
};

export const ReserveButton: React.FC<ReserveButtonProps> = ({ onClick }) => {
  return (
    <button className="bg-[var(--color-icon-primary)] text-white font-semibold py-3.5 px-7 rounded-lg max-w-[178px] w-[178px] text-xl cursor-pointer" onClick={onClick}>
      Reserve
    </button>
  );
};
