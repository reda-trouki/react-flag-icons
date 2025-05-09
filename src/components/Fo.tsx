import * as React from "react";
const SvgFo = ({size=24, ...props}: {size?: number } & react.SVGProps<SVGSVGElement>) => (
  <svg
    width={size}
    height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" {...props}>
    <defs>
      <clipPath id="fo_svg__a">
        <path fillOpacity={0.7} d="M-78 32h640v480H-78z" />
      </clipPath>
    </defs>
    <g
      fillRule="evenodd"
      strokeWidth={0}
      clipPath="url(#fo_svg__a)"
      transform="translate(78 -32)"
    >
      <path fill="#fff" d="M-78 32h663.9v480H-78z" />
      <path
        fill="#003897"
        d="M-76 218.7h185.9V32H216v186.7h371.8v106.6H216V512H109.9V325.3h-186z"
      />
      <path
        fill="#d72828"
        d="M-76 245.3h212.4V32h53.1v213.3H588v53.4H189.5V512h-53V298.7H-76z"
      />
    </g>
  </svg>
);
export default SvgFo;
