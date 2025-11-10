import React from "react";

type ReserveButtonProps = {
  onClick: () => void;
   disabled?: boolean;
};

export const ReserveButton: React.FC<ReserveButtonProps> = ({ onClick, disabled }) => {
  return (
    <button type="button"
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      aria-disabled={disabled} 
      // className="bg-[var(--color-icon-primary)] text-white font-semibold py-3.5 px-7 rounded-lg max-w-[178px] w-[178px] text-xl cursor-pointer"
      className={[
        "px-6 py-3 rounded-xl font-semibold transition",
        disabled
          ? "bg-gray-300 text-gray-500 cursor-not-allowed"
          : "bg-[var(--color-icon-primary)] text-white font-semibold py-3.5 px-7 rounded-lg max-w-[178px] w-[178px] text-xl cursor-pointer",
      ].join(" ")}
      >
      Reserve
    </button>
  );
};
