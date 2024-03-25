import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSignalCellularAlt2BarTwoTone24Px = (
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
    <path d="M5 14h3v6H5zm6-5h3v11h-3z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSignalCellularAlt2BarTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
