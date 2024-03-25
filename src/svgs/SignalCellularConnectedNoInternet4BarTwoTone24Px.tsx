import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSignalCellularConnectedNoInternet4BarTwoTone24Px = (
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
    <path d="M20 18h2v-8h-2zm0 4h2v-2h-2zM2 22h16V8h4V2z" />
  </svg>
);
const ForwardRef = forwardRef(
  SvgSignalCellularConnectedNoInternet4BarTwoTone24Px
);
const Memo = memo(ForwardRef);
export default Memo;
