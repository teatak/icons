import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgStackedBarChartRounded24Px = (
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
    <path d="M6 20c1.1 0 2-.9 2-2V9H4v9c0 1.1.9 2 2 2M4 8h4V6c0-1.1-.9-2-2-2s-2 .9-2 2zM10 11h4V9c0-1.1-.9-2-2-2s-2 .9-2 2zM16 12v2h4v-2c0-1.1-.9-2-2-2s-2 .9-2 2M18 20c1.1 0 2-.9 2-2v-3h-4v3c0 1.1.9 2 2 2M12 20c1.1 0 2-.9 2-2v-6h-4v6c0 1.1.9 2 2 2" />
  </svg>
);
const ForwardRef = forwardRef(SvgStackedBarChartRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
