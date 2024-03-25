import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPriorityHighSharp24Px = (
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
    <circle cx={12} cy={19} r={2} />
    <path d="M10 3h4v12h-4z" />
  </svg>
);
const ForwardRef = forwardRef(SvgPriorityHighSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
