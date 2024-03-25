import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgNavigateBeforeSharp24Px = (
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
    <path d="M15.61 7.41 14.2 6l-6 6 6 6 1.41-1.41L11.03 12z" />
  </svg>
);
const ForwardRef = forwardRef(SvgNavigateBeforeSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
