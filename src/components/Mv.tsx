import * as React from "react";
const SvgMv = ({size=24, ...props}: {size?: number } & react.SVGProps<SVGSVGElement>) => (
  <svg
    width={size}
    height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" {...props}>
    <path fill="#d21034" d="M0 0h640v480H0z" />
    <path fill="#007e3a" d="M120 120h400v240H120z" />
    <circle cx={350} cy={240} r={80} fill="#fff" />
    <circle cx={380} cy={240} r={80} fill="#007e3a" />
  </svg>
);
export default SvgMv;
