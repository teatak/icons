import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFilterTiltShift24Px = (
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
    <path d="M11 4.07V2.05c-2.01.2-3.84 1-5.32 2.21L7.1 5.69A7.94 7.94 0 0 1 11 4.07m7.32.19A9.95 9.95 0 0 0 13 2.05v2.02c1.46.18 2.79.76 3.9 1.62zM19.93 11h2.02c-.2-2.01-1-3.84-2.21-5.32L18.31 7.1a7.94 7.94 0 0 1 1.62 3.9M5.69 7.1 4.26 5.68A9.95 9.95 0 0 0 2.05 11h2.02c.18-1.46.76-2.79 1.62-3.9M4.07 13H2.05c.2 2.01 1 3.84 2.21 5.32l1.43-1.43A7.87 7.87 0 0 1 4.07 13M15 12c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3m3.31 4.9 1.43 1.43a10 10 0 0 0 2.21-5.32h-2.02a7.95 7.95 0 0 1-1.62 3.89M13 19.93v2.02c2.01-.2 3.84-1 5.32-2.21l-1.43-1.43c-1.1.86-2.43 1.44-3.89 1.62m-7.32-.19A10 10 0 0 0 11 21.95v-2.02a7.94 7.94 0 0 1-3.9-1.62z" />
  </svg>
);
const ForwardRef = forwardRef(SvgFilterTiltShift24Px);
const Memo = memo(ForwardRef);
export default Memo;
