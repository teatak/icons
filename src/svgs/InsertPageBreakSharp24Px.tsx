import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgInsertPageBreakSharp24Px = (
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
    <path d="M4 17h16v5H4zM20 8l-6-6H4.01L4 11h16zm-7 1V3.5L18.5 9zM9 13h6v2H9zM17 13h6v2h-6zM1 13h6v2H1z" />
  </svg>
);
const ForwardRef = forwardRef(SvgInsertPageBreakSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
