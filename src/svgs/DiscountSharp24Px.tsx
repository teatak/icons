import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgDiscountSharp24Px = (
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
    <path d="M12.79 21 3 11.21v2.83l9.79 9.79 9.04-9.04-1.42-1.41z" />
    <path d="m3 9.04 9.79 9.79 9.04-9.04L12.04 0H3zM7.25 3a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5" />
  </svg>
);
const ForwardRef = forwardRef(SvgDiscountSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
