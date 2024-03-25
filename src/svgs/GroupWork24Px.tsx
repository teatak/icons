import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgGroupWork24Px = (
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
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M8 17.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5M9.5 8a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1-5 0m6.5 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5" />
  </svg>
);
const ForwardRef = forwardRef(SvgGroupWork24Px);
const Memo = memo(ForwardRef);
export default Memo;
