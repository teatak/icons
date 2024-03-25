import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const Svg24MpSharp24Px = (
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
    <path d="M15 14h1.5v1.5H15z" />
    <path d="M3 3v18h18V3zm3.5 5h3V7h-3V5.5H11V9H8v1h3v1.5H6.5zm6 10.5H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5zM18 17h-3v1.5h-1.5v-6H18zm.5-7h-1v1.5H16V10h-3V5.5h1.5v3H16v-3h1.5v3h1z" />
  </svg>
);
const ForwardRef = forwardRef(Svg24MpSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
