import * as React from "react";
const SvgKw = ({size=24, ...props}: {size?: number } & react.SVGProps<SVGSVGElement>) => (
  <svg
    width={size}
    height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" {...props}>
    <defs>
      <clipPath id="kw_svg__a">
        <path fillOpacity={0.7} d="M0 0h682.7v512H0z" />
      </clipPath>
    </defs>
    <g
      fillRule="evenodd"
      strokeWidth="1pt"
      clipPath="url(#kw_svg__a)"
      transform="scale(.9375)"
    >
      <path fill="#fff" d="M0 170.6h1024v170.7H0z" />
      <path fill="#f31830" d="M0 341.3h1024V512H0z" />
      <path fill="#00d941" d="M0 0h1024v170.7H0z" />
      <path fill="#000001" d="M0 0v512l255.4-170.7.6-170.8z" />
    </g>
  </svg>
);
export default SvgKw;
