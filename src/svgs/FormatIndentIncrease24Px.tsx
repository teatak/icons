import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFormatIndentIncrease24Px = (
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
    <path d="M3 21h18v-2H3zM3 8v8l4-4zm8 9h10v-2H11zM3 3v2h18V3zm8 6h10V7H11zm0 4h10v-2H11z" />
  </svg>
);
const ForwardRef = forwardRef(SvgFormatIndentIncrease24Px);
const Memo = memo(ForwardRef);
export default Memo;
