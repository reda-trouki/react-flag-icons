import * as React from "react";
const SvgUa = ({size=24, ...props}: {size?: number } & react.SVGProps<SVGSVGElement>) => (
  <svg
    width={size}
    height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" {...props}>
    <g fillRule="evenodd" strokeWidth="1pt">
      <path fill="gold" d="M0 0h640v480H0z" />
      <path fill="#0057b8" d="M0 0h640v240H0z" />
    </g>
  </svg>
);
export default SvgUa;
