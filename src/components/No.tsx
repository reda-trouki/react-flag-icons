import * as React from "react";
const SvgNo = ({size=24, ...props}: {size?: number } & react.SVGProps<SVGSVGElement>) => (
  <svg
    width={size}
    height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" {...props}>
    <path fill="#ed2939" d="M0 0h640v480H0z" />
    <path fill="#fff" d="M180 0h120v480H180z" />
    <path fill="#fff" d="M0 180h640v120H0z" />
    <path fill="#002664" d="M210 0h60v480h-60z" />
    <path fill="#002664" d="M0 210h640v60H0z" />
  </svg>
);
export default SvgNo;
