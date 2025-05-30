import React, { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  color?: string;
  width?: string;
  height?: string;
}

const EmailIcon: React.FC<IconProps> = ({
  color = "white",
  width = "28",
  height = "22",
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 28 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.33329 0.333984H24.6666C26.1394 0.333984 27.3333 1.52789 27.3333 3.00065V19.0007C27.3333 20.4735 26.1394 21.6673 24.6666 21.6673H3.33329C1.86053 21.6673 0.666626 20.4735 0.666626 19.0007V3.00065C0.666626 1.52789 1.86053 0.333984 3.33329 0.333984ZM16.2 15.6007L24.6666 9.66732V6.86732L14.8666 13.734C14.3454 14.0957 13.6545 14.0957 13.1333 13.734L3.33329 6.86732V9.66732L11.8 15.6007C13.1213 16.5243 14.8786 16.5243 16.2 15.6007Z"
        fill={color}
      />
    </svg>
  );
};

export default EmailIcon;
