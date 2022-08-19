import * as React from "react";
import { SVGProps } from "react";

interface IconShowSidebarProps extends SVGProps<SVGSVGElement> {
  dimension: number;
  color: string;
}

const SvgIconShowSidebar = (iconShowSidebarProps: IconShowSidebarProps) => (
  <svg
    width={iconShowSidebarProps.dimension}
    height={iconShowSidebarProps.dimension}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...iconShowSidebarProps}
  >
    <path
      d="M15.815 4.434A9.055 9.055 0 0 0 8 0 9.055 9.055 0 0 0 .185 4.434a1.333 1.333 0 0 0 0 1.354A9.055 9.055 0 0 0 8 10.222c3.33 0 6.25-1.777 7.815-4.434a1.333 1.333 0 0 0 0-1.354ZM8 8.89a3.776 3.776 0 0 1-3.778-3.78A3.776 3.776 0 0 1 8 1.333a3.776 3.776 0 0 1 3.778 3.778A3.776 3.776 0 0 1 8 8.89Zm2.889-3.778a2.889 2.889 0 1 1-5.438-1.36 1.19 1.19 0 1 0 1.19-1.189H6.64a2.889 2.889 0 0 1 4.25 2.549Z"
      fill={iconShowSidebarProps.color}
    />
  </svg>
);

export default SvgIconShowSidebar;
