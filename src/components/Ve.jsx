import * as React from "react";
const SvgVe = ({size=24, ...props}) => (
  <svg
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 640 480"
    {...props}
  >
    <defs>
      <g id="ve_svg__d" transform="translate(0 -36)">
        <g id="ve_svg__c">
          <g id="ve_svg__b">
            <path id="ve_svg__a" fill="#fff" d="M0-5-1.5-.2l2.8.9z" />
            <use
              xlinkHref="#ve_svg__a"
              width={180}
              height={120}
              transform="scale(-1 1)"
            />
          </g>
          <use
            xlinkHref="#ve_svg__b"
            width={180}
            height={120}
            transform="rotate(72)"
          />
        </g>
        <use
          xlinkHref="#ve_svg__b"
          width={180}
          height={120}
          transform="rotate(-72)"
        />
        <use
          xlinkHref="#ve_svg__c"
          width={180}
          height={120}
          transform="rotate(144)"
        />
      </g>
    </defs>
    <path fill="#cf142b" d="M0 0h640v480H0z" />
    <path fill="#00247d" d="M0 0h640v320H0z" />
    <path fill="#fc0" d="M0 0h640v160H0z" />
    <g id="ve_svg__f" transform="matrix(4 0 0 4 320 336)">
      <g id="ve_svg__e">
        <use
          xlinkHref="#ve_svg__d"
          width={180}
          height={120}
          transform="rotate(10)"
        />
        <use
          xlinkHref="#ve_svg__d"
          width={180}
          height={120}
          transform="rotate(30)"
        />
      </g>
      <use
        xlinkHref="#ve_svg__e"
        width={180}
        height={120}
        transform="rotate(40)"
      />
    </g>
    <use
      xlinkHref="#ve_svg__f"
      width={180}
      height={120}
      transform="rotate(-80 320 336)"
    />
  </svg>
);
export default SvgVe;
