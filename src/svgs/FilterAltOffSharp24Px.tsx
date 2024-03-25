import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFilterAltOffSharp24Px = (
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
    <path d="M21.05 4H6.83l7.97 7.97zM2.81 2.81 1.39 4.22 10 13v7h4v-3.17l5.78 5.78 1.41-1.42z" />
  </svg>
);
const ForwardRef = forwardRef(SvgFilterAltOffSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
