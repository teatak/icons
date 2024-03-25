import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgOutletRounded24Px = (
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
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M9 12c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v3c0 .55-.45 1-1 1m4 6h-2c-.55 0-1-.45-1-1v-.89c0-1 .68-1.92 1.66-2.08A2 2 0 0 1 14 16v1c0 .55-.45 1-1 1m3-7c0 .55-.45 1-1 1s-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1z" />
  </svg>
);
const ForwardRef = forwardRef(SvgOutletRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
