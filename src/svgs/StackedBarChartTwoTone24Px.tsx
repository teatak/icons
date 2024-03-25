import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgStackedBarChartTwoTone24Px = (
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
    <path d="M4 9h4v11H4zM4 4h4v4H4zM10 7h4v4h-4zM16 10h4v4h-4zM16 15h4v5h-4zM10 12h4v8h-4z" />
  </svg>
);
const ForwardRef = forwardRef(SvgStackedBarChartTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
