import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgChargingStationSharp24Px = (
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
    <path d="m14.5 11-3 6v-4h-2l3-6v4zM5 1h14v22H5zm2 5v12h10V6z" />
  </svg>
);
const ForwardRef = forwardRef(SvgChargingStationSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
