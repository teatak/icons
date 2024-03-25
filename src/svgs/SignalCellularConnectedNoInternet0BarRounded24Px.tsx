import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSignalCellularConnectedNoInternet0BarRounded24Px = (
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
    <path d="M21 18c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1s-1 .45-1 1v6c0 .55.45 1 1 1m0 4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1m-3-2v2H2L22 2v6h-2V6.83L6.83 20z" />
  </svg>
);
const ForwardRef = forwardRef(
  SvgSignalCellularConnectedNoInternet0BarRounded24Px
);
const Memo = memo(ForwardRef);
export default Memo;
