import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBrowserNotSupportedSharp24Px = (
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
    <path d="M19 6v10.5l2 2V4H6.5l2 2zM3.22 3.32 1.95 4.59 3 5.64V20h14.36l2.06 2.06 1.27-1.27zM15 18H5V7.64L15.36 18z" />
  </svg>
);
const ForwardRef = forwardRef(SvgBrowserNotSupportedSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
