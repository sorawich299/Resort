import React, { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  color?: string;
  width?: string;
  height?: string;
}

const BathroomIcon: React.FC<IconProps> = ({ color = "white", width = "48", height = "48", ...props }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 48 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 9.36562C6 7.50937 7.50938 6 9.36563 6C10.2563 6 11.1094 6.35625 11.7469 6.98438L13.2656 8.50312C11.2969 12.15 11.6344 16.7062 14.2875 20.0344L14.1562 20.1562C13.275 21.0375 13.275 22.4625 14.1562 23.3344C15.0375 24.2062 16.4625 24.2156 17.3344 23.3344L32.3438 8.34375C33.225 7.4625 33.225 6.0375 32.3438 5.16562C31.4625 4.29375 30.0375 4.28437 29.1656 5.16562L29.0437 5.2875C25.7156 2.63438 21.15 2.29688 17.5125 4.26562L15.9844 2.74687C14.2312 0.984375 11.85 0 9.36563 0C4.19063 0 0 4.19062 0 9.36562V39C0 40.6594 1.34062 42 3 42C4.65938 42 6 40.6594 6 39V9.36562ZM24 30C24.7956 30 25.5587 29.6839 26.1213 29.1213C26.6839 28.5587 27 27.7956 27 27C27 26.2044 26.6839 25.4413 26.1213 24.8787C25.5587 24.3161 24.7956 24 24 24C23.2044 24 22.4413 24.3161 21.8787 24.8787C21.3161 25.4413 21 26.2044 21 27C21 27.7956 21.3161 28.5587 21.8787 29.1213C22.4413 29.6839 23.2044 30 24 30ZM30 36C30 35.2043 29.6839 34.4413 29.1213 33.8787C28.5587 33.3161 27.7956 33 27 33C26.2044 33 25.4413 33.3161 24.8787 33.8787C24.3161 34.4413 24 35.2043 24 36C24 36.7957 24.3161 37.5587 24.8787 38.1213C25.4413 38.6839 26.2044 39 27 39C27.7956 39 28.5587 38.6839 29.1213 38.1213C29.6839 37.5587 30 36.7957 30 36ZM30 24C30.7956 24 31.5587 23.6839 32.1213 23.1213C32.6839 22.5587 33 21.7956 33 21C33 20.2044 32.6839 19.4413 32.1213 18.8787C31.5587 18.3161 30.7956 18 30 18C29.2044 18 28.4413 18.3161 27.8787 18.8787C27.3161 19.4413 27 20.2044 27 21C27 21.7956 27.3161 22.5587 27.8787 23.1213C28.4413 23.6839 29.2044 24 30 24ZM36 30C36 29.2044 35.6839 28.4413 35.1213 27.8787C34.5587 27.3161 33.7957 27 33 27C32.2043 27 31.4413 27.3161 30.8787 27.8787C30.3161 28.4413 30 29.2044 30 30C30 30.7956 30.3161 31.5587 30.8787 32.1213C31.4413 32.6839 32.2043 33 33 33C33.7957 33 34.5587 32.6839 35.1213 32.1213C35.6839 31.5587 36 30.7956 36 30ZM36 18C36.7957 18 37.5587 17.6839 38.1213 17.1213C38.6839 16.5587 39 15.7956 39 15C39 14.2044 38.6839 13.4413 38.1213 12.8787C37.5587 12.3161 36.7957 12 36 12C35.2043 12 34.4413 12.3161 33.8787 12.8787C33.3161 13.4413 33 14.2044 33 15C33 15.7956 33.3161 16.5587 33.8787 17.1213C34.4413 17.6839 35.2043 18 36 18ZM42 24C42 23.2044 41.6839 22.4413 41.1213 21.8787C40.5587 21.3161 39.7957 21 39 21C38.2043 21 37.4413 21.3161 36.8787 21.8787C36.3161 22.4413 36 23.2044 36 24C36 24.7956 36.3161 25.5587 36.8787 26.1213C37.4413 26.6839 38.2043 27 39 27C39.7957 27 40.5587 26.6839 41.1213 26.1213C41.6839 25.5587 42 24.7956 42 24ZM45 21C45.7957 21 46.5587 20.6839 47.1213 20.1213C47.6839 19.5587 48 18.7956 48 18C48 17.2044 47.6839 16.4413 47.1213 15.8787C46.5587 15.3161 45.7957 15 45 15C44.2043 15 43.4413 15.3161 42.8787 15.8787C42.3161 16.4413 42 17.2044 42 18C42 18.7956 42.3161 19.5587 42.8787 20.1213C43.4413 20.6839 44.2043 21 45 21Z" fill={color} />
    </svg>


  );
};

export default BathroomIcon;