import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgNoFoodSharp24Px = (
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
    <path d="M11.35 8.52 11 5h5V1h2v4h5l-1.38 13.79L18 15.17zM21.9 21.9 2.1 2.1.69 3.51l5.7 5.7C3.46 9.83 1 11.76 1 15h11.17l2 2H1v2h15v-.17l4.49 4.49zM1 23h15v-2H1z" />
  </svg>
);
const ForwardRef = forwardRef(SvgNoFoodSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
