import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSatellite24Px = (
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
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M5 4.99h3C8 6.65 6.66 8 5 8zM5 12v-2c2.76 0 5-2.25 5-5.01h2C12 8.86 8.87 12 5 12m0 6 3.5-4.5 2.5 3.01L14.5 12l4.5 6z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSatellite24Px);
const Memo = memo(ForwardRef);
export default Memo;
