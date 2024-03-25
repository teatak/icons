import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgRestaurantMenuTwoTone24Px = (
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
    <path d="m8.1 13.34 2.83-2.83L3.91 3.5a4.01 4.01 0 0 0 0 5.66zm12.05-3.19c1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47c1.53.71 3.68.21 5.27-1.38" />
  </svg>
);
const ForwardRef = forwardRef(SvgRestaurantMenuTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
