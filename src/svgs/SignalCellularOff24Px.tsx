import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSignalCellularOff24Px = (
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
    <path d="m21 1-8.59 8.59L21 18.18zM4.77 4.5 3.5 5.77l6.36 6.36L1 21h17.73l2 2L22 21.73z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSignalCellularOff24Px);
const Memo = memo(ForwardRef);
export default Memo;
