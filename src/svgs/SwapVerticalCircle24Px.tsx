import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSwapVerticalCircle24Px = (
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
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M6.5 9 10 5.5 13.5 9H11v4H9V9zm11 6L14 18.5 10.5 15H13v-4h2v4z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSwapVerticalCircle24Px);
const Memo = memo(ForwardRef);
export default Memo;
