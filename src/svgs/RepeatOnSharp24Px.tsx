import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgRepeatOnSharp24Px = (
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
    <path d="M21 1H3c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2m-2 18H7v3l-4-4 4-4v3h10v-4h2zm-2-9V7H7v4H5V5h12V2l4 4z" />
  </svg>
);
const ForwardRef = forwardRef(SvgRepeatOnSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
