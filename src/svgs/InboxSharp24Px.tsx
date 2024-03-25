import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgInboxSharp24Px = (
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
    <path d="M21 3H3.01v18H21zm-2 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H5V5h14z" />
  </svg>
);
const ForwardRef = forwardRef(SvgInboxSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
