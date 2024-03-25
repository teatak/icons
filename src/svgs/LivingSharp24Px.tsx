import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgLivingSharp24Px = (
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
    <path d="M15.5 12v2.5h-7V12h-2v4.5h11V12z" />
    <path d="M10 10v3h4v-3l2.25-.01V7.5h-8.5v2.49z" />
    <path d="M22 2H2v20h20zm-3 7.99V18H5v-8l1.25-.01V6h11.5v3.99z" />
  </svg>
);
const ForwardRef = forwardRef(SvgLivingSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
