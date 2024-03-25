import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBedtimeOffRounded24Px = (
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
    <path d="M11.65 3.46c.27-.71-.36-1.45-1.12-1.34-1.48.21-2.85.76-4.04 1.54l4.59 4.59c-.2-1.56-.04-3.2.57-4.79m-9.55.05a.996.996 0 0 0 0 1.41l1.56 1.56c-1.4 2.11-2.02 4.77-1.46 7.56.79 3.94 3.99 7.07 7.94 7.78 2.74.49 5.3-.15 7.35-1.51l1.57 1.57a.996.996 0 1 0 1.41-1.41L3.51 3.51a.996.996 0 0 0-1.41 0" />
  </svg>
);
const ForwardRef = forwardRef(SvgBedtimeOffRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
