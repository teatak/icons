import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgWbIridescent24Px = (
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
    <path d="M5 14.5h14v-6H5zM11 .55V3.5h2V.55zm8.04 2.5-1.79 1.79 1.41 1.41 1.8-1.79zM13 22.45V19.5h-2v2.95zm7.45-3.91-1.8-1.79-1.41 1.41 1.79 1.8zM3.55 4.46l1.79 1.79 1.41-1.41-1.79-1.79zm1.41 15.49 1.79-1.8-1.41-1.41-1.79 1.79z" />
  </svg>
);
const ForwardRef = forwardRef(SvgWbIridescent24Px);
const Memo = memo(ForwardRef);
export default Memo;
