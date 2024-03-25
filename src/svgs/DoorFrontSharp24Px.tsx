import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgDoorFrontSharp24Px = (
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
    <path d="M19 19V3H5v16H3v2h18v-2zm-4-6h-2v-2h2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgDoorFrontSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
