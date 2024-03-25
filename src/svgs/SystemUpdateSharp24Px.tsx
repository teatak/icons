import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSystemUpdateSharp24Px = (
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
    <path d="M5 1v22h14V1zm12 18H7V5h10zm-1-6h-3V8h-2v5H8l4 4z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSystemUpdateSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
