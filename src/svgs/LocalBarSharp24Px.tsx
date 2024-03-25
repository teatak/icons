import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgLocalBarSharp24Px = (
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
    <path d="M21 5V3H3v2l8 9v5H6v2h12v-2h-5v-5zM7.43 7 5.66 5h12.69l-1.78 2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgLocalBarSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
