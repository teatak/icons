import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCommentsDisabledSharp24Px = (
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
    <path d="M16.83 14H18v-2h-3.17l-1-1H18V9h-6.17l-1-1H18V6H8.83l-4-4H22v17.17zM2.1 2.1.69 3.51 2 4.83V18h13.17l5.31 5.31 1.41-1.41zM6 9h.17l2 2H6zm0 5v-2h3.17l2 2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCommentsDisabledSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
