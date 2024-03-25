import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBattery2BarSharp24Px = (
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
    <path d="M17 4v18H7V4h3V2h4v2zm-2 2H9v10h6z" />
  </svg>
);
const ForwardRef = forwardRef(SvgBattery2BarSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
