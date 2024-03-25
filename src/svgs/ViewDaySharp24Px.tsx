import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgViewDaySharp24Px = (
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
    <path d="M2 21h19v-3H2zM21 8H2v8h19zM2 3v3h19V3z" />
  </svg>
);
const ForwardRef = forwardRef(SvgViewDaySharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
