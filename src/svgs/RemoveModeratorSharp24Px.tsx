import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgRemoveModeratorSharp24Px = (
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
    <g fill="none">
      <path d="M0 0h24v24H0z" />
      <path d="M0 0h24v24H0z" />
    </g>
    <path d="M20 11.09V5l-8-3-5.22 1.96 12.09 12.09c.72-1.53 1.13-3.22 1.13-4.96M2.81 2.81 1.39 4.22 4 6.83v4.26c0 5.05 3.41 9.76 8 10.91 1.72-.43 3.28-1.36 4.55-2.62l3.23 3.23 1.41-1.41z" />
  </svg>
);
const ForwardRef = forwardRef(SvgRemoveModeratorSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
