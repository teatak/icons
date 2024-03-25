import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgAddModeratorSharp24Px = (
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
    <path d="M17 10c1.08 0 2.09.25 3 .68V5l-8-3-8 3v6.09c0 5.05 3.41 9.76 8 10.91.03-.01.05-.02.08-.02A7 7 0 0 1 10 17c0-3.87 3.13-7 7-7" />
    <path d="M17 12c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m3 5.5h-2.5V20h-1v-2.5H14v-1h2.5V14h1v2.5H20z" />
  </svg>
);
const ForwardRef = forwardRef(SvgAddModeratorSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
