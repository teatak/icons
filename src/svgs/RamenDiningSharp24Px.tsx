import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgRamenDiningSharp24Px = (
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
    <path d="M22 3.51V2L4 3.99V12H2c0 3.69 2.47 6.86 6 8.25V22h8v-1.75c3.53-1.39 6-4.56 6-8.25H10.5V8H22V6.5H10.5V4.78zM6.5 5.22V6.5h-1V5.34zM5.5 8h1v4h-1zM9 12H8V8h1zm0-5.5H8V5.06l1-.11z" />
  </svg>
);
const ForwardRef = forwardRef(SvgRamenDiningSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
