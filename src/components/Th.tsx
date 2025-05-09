import * as React from "react";
const SvgTh = ({size=24, ...props}: {size?: number } & react.SVGProps<SVGSVGElement>) => (
  <svg
    width={size}
    height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" {...props}>
    <g fillRule="evenodd">
      <path fill="#f4f5f8" d="M0 0h640v480H0z" />
      <path fill="#2d2a4a" d="M0 162.5h640v160H0z" />
      <path fill="#a51931" d="M0 0h640v82.5H0zm0 400h640v80H0z" />
    </g>
  </svg>
);
export default SvgTh;
