import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMobileOffSharp24Px = (
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
    <path d="M17 5v8.61l2 2V1H5v.61L8.39 5zM2.9 2.35 1.49 3.76 5 7.27V23h14v-1.73l1.7 1.7 1.41-1.41zM7 19V9.27L16.73 19z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMobileOffSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
