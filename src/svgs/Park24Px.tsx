import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPark24Px = (
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
    <path d="M17 12h2L12 2 5.05 12H7l-3.9 6h6.92v4h3.96v-4H21z" />
  </svg>
);
const ForwardRef = forwardRef(SvgPark24Px);
const Memo = memo(ForwardRef);
export default Memo;
