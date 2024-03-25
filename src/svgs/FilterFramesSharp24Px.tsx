import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFilterFramesSharp24Px = (
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
    <path d="M22 4h-6l-4-4-4 4H2v18h20zm-2 16H4V6h4.52l3.52-3.5L15.52 6H20zM18 8H6v10h12" />
  </svg>
);
const ForwardRef = forwardRef(SvgFilterFramesSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
