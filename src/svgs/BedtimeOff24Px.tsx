import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBedtimeOff24Px = (
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
    <path d="M21.19 21.19 2.81 2.81 1.39 4.22l2.27 2.27A9.96 9.96 0 0 0 2 12c0 5.52 4.48 10 10 10 2.04 0 3.93-.62 5.51-1.66l2.27 2.27zM12.34 2.02c-2.18-.07-4.19.55-5.85 1.64l4.59 4.59c-.27-2.05.1-4.22 1.26-6.23" />
  </svg>
);
const ForwardRef = forwardRef(SvgBedtimeOff24Px);
const Memo = memo(ForwardRef);
export default Memo;
