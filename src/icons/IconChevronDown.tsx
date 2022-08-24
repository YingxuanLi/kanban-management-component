import * as React from "react";
import { SVGProps } from "react";

const SvgIconChevronDown = (props: SVGProps<SVGSVGElement>) => (
  <svg width={10} height={7} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path stroke="#635FC7" strokeWidth={2} fill="none" d="m1 1 4 4 4-4" />
  </svg>
);

export default SvgIconChevronDown;
