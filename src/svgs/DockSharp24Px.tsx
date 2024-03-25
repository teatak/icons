import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgDockSharp24Px = (
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
    <path d="M8 23h8v-2H8zM18 1.01 6 1v18h12zM16 15H8V5h8z" />
  </svg>
);
const ForwardRef = forwardRef(SvgDockSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
