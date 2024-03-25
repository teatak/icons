import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFilterTiltShiftTwoTone24Px = (
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
    <path d="M13 2.05v2.02c1.46.18 2.79.76 3.9 1.62l1.42-1.43A9.95 9.95 0 0 0 13 2.05m0 17.88v2.02c2.01-.2 3.84-1 5.32-2.21l-1.43-1.43c-1.1.86-2.43 1.44-3.89 1.62m-8.74-1.61 1.43-1.43A7.87 7.87 0 0 1 4.07 13H2.05c.2 2.01 1 3.84 2.21 5.32M2.05 11h2.02c.18-1.46.76-2.79 1.62-3.9L4.26 5.68A9.95 9.95 0 0 0 2.05 11m16.26-3.9a7.94 7.94 0 0 1 1.62 3.9h2.02c-.2-2.01-1-3.84-2.21-5.32zM7.1 5.69A7.94 7.94 0 0 1 11 4.07V2.05c-2.01.2-3.84 1-5.32 2.21zM5.68 19.74A10 10 0 0 0 11 21.95v-2.02a7.94 7.94 0 0 1-3.9-1.62zm16.27-6.73h-2.02a7.95 7.95 0 0 1-1.62 3.89l1.43 1.43a10 10 0 0 0 2.21-5.32M9 12c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3" />
  </svg>
);
const ForwardRef = forwardRef(SvgFilterTiltShiftTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
