import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTrafficSharp24Px = (
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
    <path d="M20 10h-3V8.86c1.72-.45 3-2 3-3.86h-3V3H7v2H4c0 1.86 1.28 3.41 3 3.86V10H4c0 1.86 1.28 3.41 3 3.86V15H4c0 1.86 1.28 3.41 3 3.86V21h10v-2.14c1.72-.45 3-2 3-3.86h-3v-1.14c1.72-.45 3-2 3-3.86m-8 9a2 2 0 1 1-.001-3.999A2 2 0 0 1 12 19m0-5a2 2 0 1 1-.001-3.999A2 2 0 0 1 12 14m0-5a2 2 0 0 1-2-2c0-1.11.89-2 2-2a2 2 0 1 1 0 4" />
  </svg>
);
const ForwardRef = forwardRef(SvgTrafficSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
