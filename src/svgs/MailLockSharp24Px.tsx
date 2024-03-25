import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMailLockSharp24Px = (
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
    <path d="M22 9.97V4H2.01L2 20h14v-5.03c0-2.76 2.24-5 5-5zM20 8l-8 5-8-5V6l8 5 8-5z" />
    <path d="M23 15v-.89c0-1-.68-1.92-1.66-2.08A2 2 0 0 0 19 14v1h-1v5h6v-5zm-1 0h-2v-1c0-.55.45-1 1-1s1 .45 1 1z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMailLockSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
