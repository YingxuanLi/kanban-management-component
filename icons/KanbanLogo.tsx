import * as React from "react";
import { SVGProps } from "react";

const SvgKanbanLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={6} height={25} rx={2} fill="#635FC7" />
    <rect opacity={0.75} x={9} width={6} height={25} rx={2} fill="#635FC7" />
    <rect opacity={0.5} x={18} width={6} height={25} rx={2} fill="#635FC7" />
  </svg>
);

export default SvgKanbanLogo;
