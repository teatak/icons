import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPointOfSaleSharp24Px = (
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
    <path d="M19 2H5v6h14zm-2 4H7V4h10zm5 16H2v-3h20zM18 9H6l-4 9h20zm-8 7H8v-1h2zm0-2H8v-1h2zm0-2H8v-1h2zm3 4h-2v-1h2zm0-2h-2v-1h2zm0-2h-2v-1h2zm3 4h-2v-1h2zm0-2h-2v-1h2zm0-2h-2v-1h2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgPointOfSaleSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
