import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgAdUnitsSharp24Px = (
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
    <path d="M19 1H5v22h14zm-2 18H7V5h10z" />
    <path d="M8 6h8v2H8z" />
  </svg>
);
const ForwardRef = forwardRef(SvgAdUnitsSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
