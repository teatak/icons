import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSwipeUpSharp24Px = (
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
    <path d="M2.06 5.56 1 4.5 4.5 1 8 4.5 6.94 5.56 5.32 3.94a10.457 10.457 0 0 0 1.88 8.99L6.13 14A11.97 11.97 0 0 1 3.5 6.5c0-.92.1-1.82.3-2.68zm19.65 5.62 2.09 7.39-8.23 3.65-6.84-2.85.61-1.62 3.8-.75-4.35-9.83c-.34-.76 0-1.64.76-1.98s1.64 0 1.98.76l2.43 5.49 1.26-.56z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSwipeUpSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
