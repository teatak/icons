import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSwipeDownAlt24Px = (
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
    <path d="M13 13.9a5 5 0 1 0-2 0v4.27l-1.59-1.59L8 18l4 4 4-4-1.41-1.41L13 18.17z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSwipeDownAlt24Px);
const Memo = memo(ForwardRef);
export default Memo;
