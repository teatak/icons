import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const Svg12MpSharp24Px = (
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
    <path d="M3 3v18h18V3zm9 5h3V7h-3V5.5h4.5V9h-3v1h3v1.5H12zM7 5.5h3v6H8.5V7H7zm5.5 13H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5zM18 17h-3v1.5h-1.5v-6H18z" />
    <path d="M15 14h1.5v1.5H15z" />
  </svg>
);
const ForwardRef = forwardRef(Svg12MpSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
