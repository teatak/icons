import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgLocalHospitalTwoTone24Px = (
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
    <path
      d="M5 19h14V5H5zm2-8.5h3.5V7h3v3.5H17v3h-3.5V17h-3v-3.5H7z"
      opacity={0.3}
    />
    <path d="M21 5c0-1.1-.9-2-2-2H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zm-2 14H5V5h14zm-8.5-2h3v-3.5H17v-3h-3.5V7h-3v3.5H7v3h3.5z" />
  </svg>
);
const ForwardRef = forwardRef(SvgLocalHospitalTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
