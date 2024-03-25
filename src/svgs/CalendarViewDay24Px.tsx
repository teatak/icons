import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCalendarViewDay24Px = (
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
    <path d="M3 17h18v2H3zm0-7h18v5H3zm0-4h18v2H3z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCalendarViewDay24Px);
const Memo = memo(ForwardRef);
export default Memo;
