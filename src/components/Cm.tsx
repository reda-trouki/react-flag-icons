import * as React from "react";
const SvgCm = ({size=24, ...props}: {size?: number } & react.SVGProps<SVGSVGElement>) => (
  <svg
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 640 480"
    {...props}
  >
    <path fill="#007a5e" d="M0 0h213.3v480H0z" />
    <path fill="#ce1126" d="M213.3 0h213.4v480H213.3z" />
    <path fill="#fcd116" d="M426.7 0H640v480H426.7z" />
    <g fill="#fcd116" transform="translate(320 240)scale(7.1111)">
      <g id="cm_svg__b">
        <path id="cm_svg__a" d="M0-8-2.5-.4 1.3.9z" />
        <use
          xlinkHref="#cm_svg__a"
          width="100%"
          height="100%"
          transform="scale(-1 1)"
        />
      </g>
      <use
        xlinkHref="#cm_svg__b"
        width="100%"
        height="100%"
        transform="rotate(72)"
      />
      <use
        xlinkHref="#cm_svg__b"
        width="100%"
        height="100%"
        transform="rotate(144)"
      />
      <use
        xlinkHref="#cm_svg__b"
        width="100%"
        height="100%"
        transform="rotate(-144)"
      />
      <use
        xlinkHref="#cm_svg__b"
        width="100%"
        height="100%"
        transform="rotate(-72)"
      />
    </g>
  </svg>
);
export default SvgCm;
