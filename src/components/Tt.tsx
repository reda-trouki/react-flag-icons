import * as React from "react";
const SvgTt = ({size=24, ...props}: {size?: number } & react.SVGProps<SVGSVGElement>) => (
  <svg
    width={size}
    height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" {...props}>
    <path fill="#fff" d="M0 0h640v480H0z" />
    <path
      fill="#e00000"
      fillRule="evenodd"
      d="M463.7 480 0 1v478.8zM176.3 0 640 479V.2z"
    />
    <path
      fill="#000001"
      fillRule="evenodd"
      d="M27.7.2h118.6l468.2 479.3H492.2z"
    />
  </svg>
);
export default SvgTt;
