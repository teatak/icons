import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const Svg19MpSharp24Px = (
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
    <path d="M13.5 6.5H15V8h-1.5zM15 14h1.5v1.5H15z" />
    <path d="M3 3v18h18V3zm9 7h3V9h-3V5.5h4.5v6H12zM7 5.5h3v6H8.5V7H7zm5.5 13H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5zM18 17h-3v1.5h-1.5v-6H18z" />
  </svg>
);
const ForwardRef = forwardRef(Svg19MpSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
