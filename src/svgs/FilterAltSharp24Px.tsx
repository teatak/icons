import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFilterAltSharp24Px = (
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
    <path fill="none" d="M0 0h24m0 24H0" />
    <path d="M3 4c2.01 2.59 7 9 7 9v7h4v-7s4.98-6.41 7-9z" />
    <path fill="none" d="M0 0h24v24H0z" />
  </svg>
);
const ForwardRef = forwardRef(SvgFilterAltSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
