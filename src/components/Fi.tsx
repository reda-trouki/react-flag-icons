import * as React from "react";
const SvgFi = ({size=24, ...props}: {size?: number } & react.SVGProps<SVGSVGElement>) => (
  <svg
    width={size}
    height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" {...props}>
    <path fill="#fff" d="M0 0h640v480H0z" />
    <path fill="#002f6c" d="M0 174.5h640v131H0z" />
    <path fill="#002f6c" d="M175.5 0h130.9v480h-131z" />
  </svg>
);
export default SvgFi;
