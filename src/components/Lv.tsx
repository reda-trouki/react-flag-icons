import * as React from "react";
const SvgLv = ({size=24, ...props}: {size?: number } & react.SVGProps<SVGSVGElement>) => (
  <svg
    width={size}
    height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" {...props}>
    <g fillRule="evenodd">
      <path fill="#fff" d="M0 0h640v480H0z" />
      <path fill="#981e32" d="M0 0h640v192H0zm0 288h640v192H0z" />
    </g>
  </svg>
);
export default SvgLv;
