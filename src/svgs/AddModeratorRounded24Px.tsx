import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgAddModeratorRounded24Px = (
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
    <path d="M17 10c1.08 0 2.09.25 3 .68v-4.3a2 2 0 0 0-1.3-1.87l-6-2.25c-.45-.17-.95-.17-1.4 0l-6 2.25C4.52 4.81 4 5.55 4 6.39v4.7c0 5.05 3.41 9.76 8 10.91.03-.01.05-.02.08-.02A7 7 0 0 1 10 17c0-3.87 3.13-7 7-7" />
    <path d="M17 12c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m2.5 5.5h-2v2c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-2h-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h2v-2c0-.28.22-.5.5-.5s.5.22.5.5v2h2c.28 0 .5.22.5.5s-.22.5-.5.5" />
  </svg>
);
const ForwardRef = forwardRef(SvgAddModeratorRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
