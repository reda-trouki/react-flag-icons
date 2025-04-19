import * as React from "react";
const SvgMr = ({size=24, ...props}: {size?: number } & react.SVGProps<SVGSVGElement>) => (
  <svg
    width={size}
    height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" {...props}>
    <path fill="#cd2a3e" d="M0 0h640v480H0z" />
    <path fill="#006233" d="M0 72h640v336H0z" />
    <path
      fill="#ffc400"
      d="M470 154.6a150 150 0 0 1-300 0 155 155 0 0 0-5 39.2 155 155 0 1 0 310 0 154 154 0 0 0-5-39.2"
      className="mr_svg__mr-st1"
    />
    <path
      fill="#ffc400"
      d="m320 93.8-13.5 41.5H263l35.3 25.6-13.5 41.4 35.3-25.6 35.3 25.6-13.5-41.4 35.3-25.6h-43.6z"
    />
  </svg>
);
export default SvgMr;
