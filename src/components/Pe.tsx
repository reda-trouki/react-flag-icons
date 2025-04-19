import * as React from "react";
const SvgPe = ({size=24, ...props}: {size?: number } & react.SVGProps<SVGSVGElement>) => (
  <svg
    width={size}
    height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" {...props}>
    <path fill="#D91023" d="M0 0h640v480H0z" />
    <path fill="#fff" d="M213.3 0h213.4v480H213.3z" />
  </svg>
);
export default SvgPe;
