import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSlowMotionVideoOutlined24Px = (
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
    <path d="M13.05 9.79 10 7.5v9l3.05-2.29L16 12zm0 0L10 7.5v9l3.05-2.29L16 12zm0 0L10 7.5v9l3.05-2.29L16 12zM11 4.07V2.05c-2.01.2-3.84 1-5.32 2.21L7.1 5.69A7.94 7.94 0 0 1 11 4.07M5.69 7.1 4.26 5.68A9.95 9.95 0 0 0 2.05 11h2.02c.18-1.46.76-2.79 1.62-3.9M4.07 13H2.05c.2 2.01 1 3.84 2.21 5.32l1.43-1.43A7.87 7.87 0 0 1 4.07 13m1.61 6.74A10 10 0 0 0 11 21.95v-2.02a7.94 7.94 0 0 1-3.9-1.62zM22 12c0 5.16-3.92 9.42-8.95 9.95v-2.02C16.97 19.41 20 16.05 20 12s-3.03-7.41-6.95-7.93V2.05C18.08 2.58 22 6.84 22 12" />
  </svg>
);
const ForwardRef = forwardRef(SvgSlowMotionVideoOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
