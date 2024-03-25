import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgNearMeSharp24Px = (
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
    <path d="M21 3 3 10.53v.98l6.84 2.65L12.48 21h.98z" />
  </svg>
);
const ForwardRef = forwardRef(SvgNearMeSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
