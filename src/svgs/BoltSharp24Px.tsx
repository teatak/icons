import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBoltSharp24Px = (
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
    <path d="M11 21h-1l1-7H6.74S10.42 7.54 13 3h1l-1 7h4.28z" />
  </svg>
);
const ForwardRef = forwardRef(SvgBoltSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
