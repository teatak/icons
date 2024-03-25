import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgNoCellSharp24Px = (
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
    <path d="M21.19 21.19 2.81 2.81 1.39 4.22 5 7.83V23h14v-1.17l.78.78zM7 18V9.83L15.17 18zM8.83 6 5 2.17V1h14v15.17l-2-2V6z" />
  </svg>
);
const ForwardRef = forwardRef(SvgNoCellSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
