import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFilter9Sharp24Px = (
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
    <path d="M3 5H1v18h18v-2H3zm20-4H5v18h18zm-2 16H7V3h14zM17 5h-6v6h4v2h-4v2h6zm-2 4h-2V7h2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgFilter9Sharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
