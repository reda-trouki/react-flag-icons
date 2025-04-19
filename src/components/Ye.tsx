import * as React from "react";
const SvgYe = ({size=24, ...props}: {size?: number } & react.SVGProps<SVGSVGElement>) => (
  <svg
    width={size}
    height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" {...props}>
    <g fillRule="evenodd" strokeWidth="1pt">
      <path fill="#fff" d="M0 0h640v472.8H0z" />
      <path fill="#f10600" d="M0 0h640v157.4H0z" />
      <path fill="#000001" d="M0 322.6h640V480H0z" />
    </g>
  </svg>
);
export default SvgYe;
