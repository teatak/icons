import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgViewCompactOutlined24Px = (
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
    <path d="M2 4v16h20V4zm4.5 14H4v-2.5h2.5zm0-4.75H4v-2.5h2.5zm0-4.75H4V6h2.5zM11 18H8.5v-2.5H11zm0-4.75H8.5v-2.5H11zm0-4.75H8.5V6H11zm4.5 9.5H13v-2.5h2.5zm0-4.75H13v-2.5h2.5zm0-4.75H13V6h2.5zM20 18h-2.5v-2.5H20zm0-4.75h-2.5v-2.5H20zm0-4.75h-2.5V6H20z" />
  </svg>
);
const ForwardRef = forwardRef(SvgViewCompactOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
