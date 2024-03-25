import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTransitEnterexitTwoTone24Px = (
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
    <path d="M15.98 6 9 12.77V8H6v10h10v-3h-4.85L18 8.03z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTransitEnterexitTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
