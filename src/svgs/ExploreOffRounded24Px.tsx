import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgExploreOffRounded24Px = (
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
    <path d="m18 6-2.91 6.26 5.25 5.25A9.9 9.9 0 0 0 22 12c0-5.52-4.48-10-10-10-2.04 0-3.93.61-5.51 1.66l5.25 5.25zM2.81 5.64l.85.85c-1.37 2.07-2 4.68-1.48 7.45.75 3.95 3.92 7.13 7.88 7.88 2.77.52 5.38-.1 7.45-1.48l.85.85a.996.996 0 1 0 1.41-1.41L4.22 4.22a.996.996 0 0 0-1.41 0c-.39.39-.39 1.03 0 1.42m6.1 6.1 3.35 3.35L6 18z" />
  </svg>
);
const ForwardRef = forwardRef(SvgExploreOffRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
