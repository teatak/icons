import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPersonOffRounded24Px = (
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
    <path d="M8.65 5.82a3.999 3.999 0 1 1 5.53 5.53zM20 17.17c-.02-1.1-.63-2.11-1.61-2.62-.54-.28-1.13-.54-1.77-.76zm.49 3.32L3.51 3.51A.996.996 0 1 0 2.1 4.92l8.18 8.18c-1.82.23-3.41.8-4.7 1.46C4.6 15.08 4 16.11 4 17.22V20h13.17l1.9 1.9c.39.39 1.02.39 1.41 0 .4-.39.4-1.02.01-1.41" />
  </svg>
);
const ForwardRef = forwardRef(SvgPersonOffRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
