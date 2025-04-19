import * as React from "react";
const SvgSy = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 640 480"
    {...props}
  >
    <path d="M0 0h640v480H0Z" />
    <path fill="#fff" d="M0 0h640v320H0Z" />
    <path fill="#007a3d" d="M0 0h640v160H0Z" />
    <path
      fill="#ce1126"
      d="m101 300 39-120 39 120-102-74.2h126M461 300l39-120 39 120-102-74.2h126M281 300l39-120 39 120-102.1-74.2h126.2"
    />
  </svg>
);
export default SvgSy;
