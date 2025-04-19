import * as React from "react";
const SvgGbSct = ({size=24, ...props}: {size?: number } & react.SVGProps<SVGSVGElement>) => (
  <svg
    width={size}
    height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" {...props}>
    <path fill="#0065bd" d="M0 0h640v480H0z" />
    <path
      stroke="#fff"
      strokeWidth={0.6}
      d="m0 0 5 3M0 3l5-3"
      transform="scale(128 160)"
    />
  </svg>
);
export default SvgGbSct;
