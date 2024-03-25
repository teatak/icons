import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgEditCalendarSharp24Px = (
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
    <path d="M12 22H3V4h3V2h2v2h8V2h2v2h3v8h-2v-2H5v10h7zm10.13-5.01 1.41-1.41-2.12-2.12-1.41 1.41zm-.71.71-5.3 5.3H14v-2.12l5.3-5.3z" />
  </svg>
);
const ForwardRef = forwardRef(SvgEditCalendarSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
