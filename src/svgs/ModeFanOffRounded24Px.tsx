import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgModeFanOffRounded24Px = (
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
    <g fill="none">
      <path d="M0 0h24v24H0z" />
      <path d="M0 0h24v24H0z" />
    </g>
    <path d="m16.34 8.36-2.29.82c-.18-.13-.38-.25-.58-.34.17-.83.63-1.58 1.36-2.06C16.85 5.44 16.18 2 13.39 2c-3.08 0-4.9 1.47-5.3 3.26L18.73 15.9c1.5.39 3.27-.51 3.27-2.51 0-4.39-3.01-6.23-5.66-5.03M2.1 3.51a.996.996 0 0 0 0 1.41L5.27 8.1C3.77 7.7 2 8.61 2 10.61c0 4.4 3.01 6.24 5.66 5.03l2.29-.82c.18.13.38.25.58.34-.17.83-.63 1.58-1.36 2.06C7.15 18.56 7.82 22 10.61 22c3.08 0 4.9-1.47 5.3-3.26l3.16 3.16a.996.996 0 1 0 1.41-1.41L3.51 3.51a.996.996 0 0 0-1.41 0" />
  </svg>
);
const ForwardRef = forwardRef(SvgModeFanOffRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
