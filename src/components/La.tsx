import * as React from "react";
const SvgLa = ({size=24, ...props}: {size?: number } & react.SVGProps<SVGSVGElement>) => (
  <svg
    width={size}
    height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" {...props}>
    <defs>
      <clipPath id="la_svg__a">
        <path fillOpacity={0.7} d="M0 0h640v480H0z" />
      </clipPath>
    </defs>
    <g fillRule="evenodd" clipPath="url(#la_svg__a)">
      <path fill="#ce1126" d="M-40 0h720v480H-40z" />
      <path fill="#002868" d="M-40 119.3h720v241.4H-40z" />
      <path
        fill="#fff"
        d="M423.4 240a103.4 103.4 0 1 1-206.8 0 103.4 103.4 0 1 1 206.8 0"
      />
    </g>
  </svg>
);
export default SvgLa;
