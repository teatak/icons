import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCalendarTodaySharp24Px = (
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
    <path d="M22 3h-3V1h-2v2H7V1H5v2H2v20h20zm-2 18H4V8h16z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCalendarTodaySharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
