import * as React from "react";
const SvgPs = ({size=24, ...props}) => (
  <svg
    width={size}
    height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" {...props}>
    <defs>
      <clipPath id="ps_svg__a">
        <path fillOpacity={0.7} d="M-118 0h682.7v512H-118z" />
      </clipPath>
    </defs>
    <g clipPath="url(#ps_svg__a)" transform="translate(110.6)scale(.9375)">
      <g fillRule="evenodd" strokeWidth="1pt">
        <path fill="#000001" d="M-246 0H778v170.7H-246z" />
        <path fill="#fff" d="M-246 170.7H778v170.6H-246z" />
        <path fill="#090" d="M-246 341.3H778V512H-246z" />
        <path fill="red" d="m-246 512 512-256L-246 0z" />
      </g>
    </g>
  </svg>
);
export default SvgPs;
