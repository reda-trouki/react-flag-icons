import * as React from "react";
const SvgGm = ({size=24, ...props}: {size?: number } & react.SVGProps<SVGSVGElement>) => (
  <svg
    width={size}
    height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" {...props}>
    <defs>
      <clipPath id="gm_svg__a">
        <path fillOpacity={0.7} d="M0-48h640v480H0z" />
      </clipPath>
    </defs>
    <g
      fillRule="evenodd"
      strokeWidth="1pt"
      clipPath="url(#gm_svg__a)"
      transform="translate(0 48)"
    >
      <path fill="red" d="M0-128h640V85.3H0z" />
      <path fill="#fff" d="M0 85.3h640V121H0z" />
      <path fill="#009" d="M0 120.9h640V263H0z" />
      <path fill="#fff" d="M0 263.1h640v35.6H0z" />
      <path fill="#090" d="M0 298.7h640V512H0z" />
    </g>
  </svg>
);
export default SvgGm;
