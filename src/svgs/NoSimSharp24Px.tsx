import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgNoSimSharp24Px = (
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
    <path d="M3.79 3.74 2.38 5.15l2.74 2.74-.12.12V21h13.27l1.58 1.62 1.41-1.41zM19 16.11V3h-8.99L7.95 5.06z" />
  </svg>
);
const ForwardRef = forwardRef(SvgNoSimSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
