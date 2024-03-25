import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgThumbDownOffAltSharp24Px = (
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
    <path d="M19 3h4v12h-4zM1 11.6V16h8.31l-1.12 5.38L9.83 23 17 15.82V3H4.69zM15 5v9.99l-4.34 4.35.61-2.93.5-2.41H3v-1.99L6.01 5z" />
  </svg>
);
const ForwardRef = forwardRef(SvgThumbDownOffAltSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
