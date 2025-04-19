import * as React from "react";
const SvgHn = ({size=24, ...props}) => (
  <svg
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 640 480"
    {...props}
  >
    <path fill="#18c3df" d="M0 0h640v480H0z" />
    <path fill="#fff" d="M0 160h640v160H0z" />
    <g
      id="hn_svg__c"
      fill="#18c3df"
      transform="translate(320 240)scale(26.66665)"
    >
      <g id="hn_svg__b">
        <path id="hn_svg__a" d="m-.3 0 .5.1L0-1z" />
        <use
          xlinkHref="#hn_svg__a"
          width="100%"
          height="100%"
          transform="scale(-1 1)"
        />
      </g>
      <use
        xlinkHref="#hn_svg__b"
        width="100%"
        height="100%"
        transform="rotate(72)"
      />
      <use
        xlinkHref="#hn_svg__b"
        width="100%"
        height="100%"
        transform="rotate(-72)"
      />
      <use
        xlinkHref="#hn_svg__b"
        width="100%"
        height="100%"
        transform="rotate(144)"
      />
      <use
        xlinkHref="#hn_svg__b"
        width="100%"
        height="100%"
        transform="rotate(-144)"
      />
    </g>
    <use
      xlinkHref="#hn_svg__c"
      width="100%"
      height="100%"
      transform="translate(133.3 -42.7)"
    />
    <use
      xlinkHref="#hn_svg__c"
      width="100%"
      height="100%"
      transform="translate(133.3 37.3)"
    />
    <use
      xlinkHref="#hn_svg__c"
      width="100%"
      height="100%"
      transform="translate(-133.3 -42.7)"
    />
    <use
      xlinkHref="#hn_svg__c"
      width="100%"
      height="100%"
      transform="translate(-133.3 37.3)"
    />
  </svg>
);
export default SvgHn;
