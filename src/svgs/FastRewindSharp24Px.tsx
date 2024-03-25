import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFastRewindSharp24Px = (
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
    <path d="M11 18V6l-8.5 6zm.5-6 8.5 6V6z" />
  </svg>
);
const ForwardRef = forwardRef(SvgFastRewindSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
