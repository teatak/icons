import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgElectricBoltSharp24Px = (
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
    <path d="M15 2 2.5 13 13 14l-5 7 1 1 12.5-11L11 10l5-7z" />
  </svg>
);
const ForwardRef = forwardRef(SvgElectricBoltSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
