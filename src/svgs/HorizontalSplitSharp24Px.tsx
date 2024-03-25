import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgHorizontalSplitSharp24Px = (
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
    <path d="M3 19h18v-6H3zm0-8h18V9H3zm0-6v2h18V5z" />
  </svg>
);
const ForwardRef = forwardRef(SvgHorizontalSplitSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
