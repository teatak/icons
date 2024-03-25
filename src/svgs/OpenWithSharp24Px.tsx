import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgOpenWithSharp24Px = (
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
    <path d="M10 9h4V6h3l-5-5-5 5h3zm-1 1H6V7l-5 5 5 5v-3h3zm14 2-5-5v3h-3v4h3v3zm-9 3h-4v3H7l5 5 5-5h-3z" />
  </svg>
);
const ForwardRef = forwardRef(SvgOpenWithSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
