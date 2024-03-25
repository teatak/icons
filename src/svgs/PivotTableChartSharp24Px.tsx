import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPivotTableChartSharp24Px = (
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
    <path d="M10 3h11v5H10zM3 10h5v11H3zM3 3h5v5H3zM18 9l-4 4h3v4h-4v-3l-4 4 4 4v-3h6v-6h3z" />
  </svg>
);
const ForwardRef = forwardRef(SvgPivotTableChartSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
