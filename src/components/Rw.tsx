import * as React from "react";
const SvgRw = ({size=24, ...props}: {size?: number } & react.SVGProps<SVGSVGElement>) => (
  <svg
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 640 480"
    {...props}
  >
    <path fill="#20603d" d="M0 0h640v480H0z" />
    <path fill="#fad201" d="M0 0h640v360H0z" />
    <path fill="#00a1de" d="M0 0h640v240H0z" />
    <g transform="translate(511 125.4)scale(.66667)">
      <g id="rw_svg__b">
        <path
          id="rw_svg__a"
          fill="#e5be01"
          d="M116.1 0 35.7 4.7l76.4 25.4-78.8-16.3L100.6 58l-72-36.2L82 82.1 21.9 28.6l36.2 72-44.3-67.3L30 112 4.7 35.7 0 116.1-1-1z"
        />
        <use
          xlinkHref="#rw_svg__a"
          width="100%"
          height="100%"
          transform="scale(1 -1)"
        />
      </g>
      <use
        xlinkHref="#rw_svg__b"
        width="100%"
        height="100%"
        transform="scale(-1 1)"
      />
      <circle r={34.3} fill="#e5be01" stroke="#00a1de" strokeWidth={3.4} />
    </g>
  </svg>
);
export default SvgRw;
