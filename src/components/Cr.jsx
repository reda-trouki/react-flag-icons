import * as React from "react";
const SvgCr = ({size=24, ...props}) => (
  <svg
    width={size}
    height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" {...props}>
    <g fillRule="evenodd" strokeWidth="1pt">
      <path fill="#0000b4" d="M0 0h640v480H0z" />
      <path fill="#fff" d="M0 75.4h640v322.3H0z" />
      <path fill="#d90000" d="M0 157.7h640v157.7H0z" />
    </g>
  </svg>
);
export default SvgCr;
