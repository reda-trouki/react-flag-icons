import * as React from "react";
const SvgGa = ({size=24, ...props}: {size?: number } & react.SVGProps<SVGSVGElement>) => (
  <svg
    width={size}
    height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" {...props}>
    <g fillRule="evenodd">
      <path fill="#ffe700" d="M640 480H0V0h640z" />
      <path fill="#36a100" d="M640 160H0V0h640z" />
      <path fill="#006dbc" d="M640 480H0V320h640z" />
    </g>
  </svg>
);
export default SvgGa;
