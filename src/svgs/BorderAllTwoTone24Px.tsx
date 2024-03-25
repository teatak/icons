import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBorderAllTwoTone24Px = (
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
    <path d="M21 3H3v18h18zM11 19H5v-6h6zm0-8H5V5h6zm8 8h-6v-6h6zm0-8h-6V5h6z" />
  </svg>
);
const ForwardRef = forwardRef(SvgBorderAllTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
