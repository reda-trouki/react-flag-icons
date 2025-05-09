import * as React from "react";
const SvgGd = ({size=24, ...props}: {size?: number } & react.SVGProps<SVGSVGElement>) => (
  <svg
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 640 480"
    {...props}
  >
    <defs>
      <g id="gd_svg__c">
        <g id="gd_svg__b">
          <path
            id="gd_svg__a"
            fill="#fcd116"
            d="M0-1v1h.5"
            transform="rotate(18 0 -1)"
          />
          <use xlinkHref="#gd_svg__a" transform="scale(-1 1)" />
        </g>
        <use xlinkHref="#gd_svg__b" transform="rotate(72)" />
        <use xlinkHref="#gd_svg__b" transform="rotate(144)" />
        <use xlinkHref="#gd_svg__b" transform="rotate(216)" />
        <use xlinkHref="#gd_svg__b" transform="rotate(288)" />
      </g>
    </defs>
    <path fill="#ce1126" d="M0 0h640v480H0z" />
    <path fill="#007a5e" d="M67.2 67.2h505.6v345.6H67.2z" />
    <path fill="#fcd116" d="M67.2 67.3h505.6L67.2 412.9h505.6z" />
    <circle cx={319.9} cy={240.1} r={57.6} fill="#ce1126" />
    <use
      xlinkHref="#gd_svg__c"
      width="100%"
      height="100%"
      transform="translate(320 240)scale(52.8)"
    />
    <use
      xlinkHref="#gd_svg__d"
      width="100%"
      height="100%"
      x={-100}
      transform="translate(-30.3)"
    />
    <use
      xlinkHref="#gd_svg__c"
      id="gd_svg__d"
      width="100%"
      height="100%"
      transform="translate(320 33.6)scale(31.2)"
    />
    <use
      xlinkHref="#gd_svg__d"
      width="100%"
      height="100%"
      x={100}
      transform="translate(30.3)"
    />
    <path
      fill="#ce1126"
      d="M102.3 240.7a80 80 0 0 0 33.5 33.2 111 111 0 0 0-11.3-45z"
    />
    <path
      fill="#fcd116"
      d="M90.1 194.7c10.4 21.7-27.1 73.7 35.5 85.9a63 63 0 0 1-10.9-41.9 70 70 0 0 1 32.5 30.8c16.4-59.5-42-55.8-57.1-74.8"
    />
    <use
      xlinkHref="#gd_svg__d"
      width="100%"
      height="100%"
      x={-100}
      transform="translate(-30.3 414.6)"
    />
    <use
      xlinkHref="#gd_svg__c"
      width="100%"
      height="100%"
      transform="translate(320 448.2)scale(31.2)"
    />
    <use
      xlinkHref="#gd_svg__d"
      width="100%"
      height="100%"
      x={100}
      transform="translate(30.3 414.6)"
    />
  </svg>
);
export default SvgGd;
