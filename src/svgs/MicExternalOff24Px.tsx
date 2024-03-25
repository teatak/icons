import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMicExternalOff24Px = (
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
    <path d="M21.19 21.19 2.81 2.81 1.39 4.22 5.17 8H4l1 10h1c0 2.21 1.79 4 4 4s4-1.79 4-4v-1.17l5.78 5.78zM12 18c0 1.1-.9 2-2 2s-2-.9-2-2h1l.56-5.61L12 14.83zm2-12v5.17l-2-2V6c0-2.21 1.79-4 4-4s4 1.79 4 4v11.17l-2-2V6c0-1.1-.9-2-2-2s-2 .9-2 2m-4-1c0 .62-.2 1.18-.52 1.66L5.33 2.51A2.996 2.996 0 0 1 10 5" />
  </svg>
);
const ForwardRef = forwardRef(SvgMicExternalOff24Px);
const Memo = memo(ForwardRef);
export default Memo;
