import * as React from "react";
const SvgTd = ({size=24, ...props}) => (
  <svg
    width={size}
    height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" {...props}>
    <g fillRule="evenodd">
      <path fill="#002664" d="M0 0h214v480H0z" />
      <path fill="#c60c30" d="M426 0h214v480H426z" />
      <path fill="#fecb00" d="M214 0h212v480H214z" />
    </g>
  </svg>
);
export default SvgTd;
