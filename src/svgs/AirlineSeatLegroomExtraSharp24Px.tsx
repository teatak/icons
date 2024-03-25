import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgAirlineSeatLegroomExtraSharp24Px = (
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
    <path d="M4 3H2v14h11v-2H4zm18.24 12.96-2.53 1.15-3.41-6.98A2.02 2.02 0 0 0 14.51 9H11V3H5v11h10l3.41 7 5.07-2.32z" />
  </svg>
);
const ForwardRef = forwardRef(SvgAirlineSeatLegroomExtraSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
