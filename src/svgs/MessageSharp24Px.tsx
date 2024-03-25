import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMessageSharp24Px = (
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
    <path d="M22 2H2.01L2 22l4-4h16zm-4 12H6v-2h12zm0-3H6V9h12zm0-3H6V6h12z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMessageSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
