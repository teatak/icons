import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTurnedInNotSharp24Px = (
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
    <path d="M19 3H5.01L5 21l7-3 7 3zm-2 15-5-2.18L7 18V5h10z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTurnedInNotSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
