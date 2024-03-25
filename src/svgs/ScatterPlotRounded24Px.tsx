import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgScatterPlotRounded24Px = (
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
    <circle cx={7} cy={14} r={3} />
    <circle cx={11} cy={6} r={3} />
    <circle cx={16.6} cy={17.6} r={3} />
  </svg>
);
const ForwardRef = forwardRef(SvgScatterPlotRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
