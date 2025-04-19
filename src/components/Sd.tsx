import * as React from "react";
const SvgSd = ({size=24, ...props}: {size?: number } & react.SVGProps<SVGSVGElement>) => (
  <svg
    width={size}
    height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" {...props}>
    <defs>
      <clipPath id="sd_svg__a">
        <path fillOpacity={0.7} d="M0 0h682.7v512H0z" />
      </clipPath>
    </defs>
    <g
      fillRule="evenodd"
      strokeWidth="1pt"
      clipPath="url(#sd_svg__a)"
      transform="scale(.9375)"
    >
      <path fill="#000001" d="M0 341.3h1024V512H0z" />
      <path fill="#fff" d="M0 170.6h1024v170.7H0z" />
      <path fill="red" d="M0 0h1024.8v170.7H0z" />
      <path fill="#009a00" d="M0 0v512l341.3-256z" />
    </g>
  </svg>
);
export default SvgSd;
