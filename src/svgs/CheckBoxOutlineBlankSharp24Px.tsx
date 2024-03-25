import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCheckBoxOutlineBlankSharp24Px = (
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
    <path d="M19 5v14H5V5zm2-2H3v18h18z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCheckBoxOutlineBlankSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
