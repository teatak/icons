import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCheckBoxSharp24Px = (
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
    <path d="M21 3H3v18h18zM10 17l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCheckBoxSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
