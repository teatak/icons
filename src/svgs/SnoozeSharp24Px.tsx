import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSnoozeSharp24Px = (
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
    <path d="M9 11h3.63L9 15.2V17h6v-2h-3.63L15 10.8V9H9zm7.056-7.654 1.282-1.535 4.607 3.85-1.28 1.54zM3.336 7.19l-1.28-1.536L6.662 1.81l1.28 1.536zM12 6c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.14-7-7 3.14-7 7-7m0-2a9 9 0 1 0 .001 18.001A9 9 0 0 0 12 4" />
  </svg>
);
const ForwardRef = forwardRef(SvgSnoozeSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
