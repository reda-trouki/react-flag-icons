import * as React from "react";
const SvgTz = ({size=24, ...props}: {size?: number } & react.SVGProps<SVGSVGElement>) => (
  <svg
    width={size}
    height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" {...props}>
    <defs>
      <clipPath id="tz_svg__a">
        <path fillOpacity={0.7} d="M10 0h160v120H10z" />
      </clipPath>
    </defs>
    <g
      fillRule="evenodd"
      strokeWidth="1pt"
      clipPath="url(#tz_svg__a)"
      transform="matrix(4 0 0 4 -40 0)"
    >
      <path fill="#09f" d="M0 0h180v120H0z" />
      <path fill="#090" d="M0 0h180L0 120z" />
      <path fill="#000001" d="M0 120h40l140-95V0h-40L0 95z" />
      <path
        fill="#ff0"
        d="M0 91.5 137.2 0h13.5L0 100.5zM29.3 120 180 19.5v9L42.8 120z"
      />
    </g>
  </svg>
);
export default SvgTz;
