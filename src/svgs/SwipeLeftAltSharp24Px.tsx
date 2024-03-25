import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSwipeLeftAltSharp24Px = (
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
    <path d="M10.1 13a5 5 0 1 0 0-2H5.83l1.59-1.59L6 8l-4 4 4 4 1.41-1.41L5.83 13z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSwipeLeftAltSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
