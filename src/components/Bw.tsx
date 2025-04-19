import * as React from "react";
const SvgBw = ({size=24, ...props}: {size?: number } & react.SVGProps<SVGSVGElement>) => (
  <svg
    width={size}
    height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" {...props}>
    <g fillRule="evenodd">
      <path fill="#00cbff" d="M0 0h640v480H0z" />
      <path fill="#fff" d="M0 160h640v160H0z" />
      <path fill="#000001" d="M0 186h640v108H0z" />
    </g>
  </svg>
);
export default SvgBw;
