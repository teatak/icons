import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBubbleChart24Px = (
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
    <circle cx={7.2} cy={14.4} r={3.2} />
    <circle cx={14.8} cy={18} r={2} />
    <circle cx={15.2} cy={8.8} r={4.8} />
  </svg>
);
const ForwardRef = forwardRef(SvgBubbleChart24Px);
const Memo = memo(ForwardRef);
export default Memo;
