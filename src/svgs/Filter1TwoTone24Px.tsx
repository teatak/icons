import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFilter1TwoTone24Px = (
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
    <path d="M7 17h14V3H7zm5-12h4v10h-2V7h-2z" opacity={0.3} />
    <path d="M14 15h2V5h-4v2h2zm7-14H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2m0 16H7V3h14zM1 5v16c0 1.1.9 2 2 2h16v-2H3V5z" />
  </svg>
);
const ForwardRef = forwardRef(SvgFilter1TwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
