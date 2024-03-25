import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSignalCellularNull24Px = (
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
    <path d="M20 6.83V20H6.83zM22 2 2 22h20z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSignalCellularNull24Px);
const Memo = memo(ForwardRef);
export default Memo;
