import * as React from "react";
const SvgAt = ({size=24, ...props}: {size?: number } & react.SVGProps<SVGSVGElement>) => (
  <svg
    width={size}
    height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" {...props}>
    <path fill="#fff" d="M0 160h640v160H0z" />
    <path fill="#c8102e" d="M0 0h640v160H0zm0 320h640v160H0z" />
  </svg>
);
export default SvgAt;
