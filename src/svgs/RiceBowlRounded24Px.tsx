import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgRiceBowlRounded24Px = (
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
    <path d="M22 12c0-5.48-4.4-9.93-9.86-10-3.62-.05-6.85 2.03-8.71 5.14C.1 12.69 2.98 18.27 8 20.25v.25c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5v-.25c3.53-1.39 6-4.56 6-8.25m-2 0h-4V5.08c2.39 1.39 4 3.97 4 6.92m-6-7.74V12h-4V4.26c.64-.16 1.31-.26 2-.26s1.36.1 2 .26M4 12c0-2.95 1.61-5.53 4-6.92V12z" />
  </svg>
);
const ForwardRef = forwardRef(SvgRiceBowlRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
