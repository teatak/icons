import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgViewSidebarOutlined24Px = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="tui-icon"
    ref={ref}
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M2 4v16h20V4zm18 4.67h-2.5V6H20zm-2.5 2H20v2.67h-2.5zM4 6h11.5v12H4zm13.5 12v-2.67H20V18z" />
  </svg>
);
const ForwardRef = forwardRef(SvgViewSidebarOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
