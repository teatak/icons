import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSegment24Px = (
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
    <path d="M9 18h12v-2H9zM3 6v2h18V6zm6 7h12v-2H9z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSegment24Px);
const Memo = memo(ForwardRef);
export default Memo;
