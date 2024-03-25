import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSchool24Px = (
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
    <path d="M5 13.18v4L12 21l7-3.82v-4L12 17zM12 3 1 9l11 6 9-4.91V17h2V9z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSchool24Px);
const Memo = memo(ForwardRef);
export default Memo;
