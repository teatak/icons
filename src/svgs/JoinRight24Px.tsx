import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgJoinRight24Px = (
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
    <ellipse cx={12} cy={12} rx={3} ry={5.74} />
    <path d="M16.5 12c0 .97-.23 4.16-3.03 6.5.78.31 1.63.5 2.53.5 3.86 0 7-3.14 7-7s-3.14-7-7-7c-.9 0-1.75.19-2.53.5 2.8 2.34 3.03 5.53 3.03 6.5M8 19c.9 0 1.75-.19 2.53-.5-.61-.51-1.1-1.07-1.49-1.63-.33.08-.68.13-1.04.13-2.76 0-5-2.24-5-5s2.24-5 5-5c.36 0 .71.05 1.04.13.39-.56.88-1.12 1.49-1.63C9.75 5.19 8.9 5 8 5c-3.86 0-7 3.14-7 7s3.14 7 7 7" />
  </svg>
);
const ForwardRef = forwardRef(SvgJoinRight24Px);
const Memo = memo(ForwardRef);
export default Memo;
