import * as React from "react";
const SvgMm = ({size=24, ...props}: {size?: number } & react.SVGProps<SVGSVGElement>) => (
  <svg
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 640 480"
    {...props}
  >
    <path fill="#fecb00" d="M0 0h640v480H0z" />
    <path fill="#34b233" d="M0 160h640v320H0z" />
    <path fill="#ea2839" d="M0 320h640v160H0z" />
    <g transform="translate(320 256.9)scale(176.87999)">
      <path id="mm_svg__a" fill="#fff" d="m0-1 .3 1h-.6z" />
      <use
        xlinkHref="#mm_svg__a"
        width="100%"
        height="100%"
        transform="rotate(-144)"
      />
      <use
        xlinkHref="#mm_svg__a"
        width="100%"
        height="100%"
        transform="rotate(-72)"
      />
      <use
        xlinkHref="#mm_svg__a"
        width="100%"
        height="100%"
        transform="rotate(72)"
      />
      <use
        xlinkHref="#mm_svg__a"
        width="100%"
        height="100%"
        transform="rotate(144)"
      />
    </g>
  </svg>
);
export default SvgMm;
