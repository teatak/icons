import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBlindsSharp24Px = (
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
    <path d="M20 19V3H4v16H2v2h20v-2zM16 9h2v2h-2zm-2 2H6V9h8zm4-4h-2V5h2zm-4-2v2H6V5zM6 19v-6h8v1.82A1.746 1.746 0 0 0 15 18a1.746 1.746 0 0 0 1-3.18V13h2v6z" />
  </svg>
);
const ForwardRef = forwardRef(SvgBlindsSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
