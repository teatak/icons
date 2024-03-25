import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgDoubleArrowSharp24Px = (
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
    <path d="M15.5 5H11l5 7-5 7h4.5l5-7z" />
    <path d="M8.5 5H4l5 7-5 7h4.5l5-7z" />
  </svg>
);
const ForwardRef = forwardRef(SvgDoubleArrowSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
