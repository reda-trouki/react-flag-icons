import * as React from "react";
const SvgGbEng = ({size=24, ...props}: {size?: number } & react.SVGProps<SVGSVGElement>) => (
  <svg
    width={size}
    height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" {...props}>
    <path fill="#fff" d="M0 0h640v480H0z" />
    <path fill="#ce1124" d="M281.6 0h76.8v480h-76.8z" />
    <path fill="#ce1124" d="M0 201.6h640v76.8H0z" />
  </svg>
);
export default SvgGbEng;
