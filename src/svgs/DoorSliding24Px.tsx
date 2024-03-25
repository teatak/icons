import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgDoorSliding24Px = (
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
    <path d="M20 19V5c0-1.1-.9-2-2-2h-5.25v16h-1.5V3H6c-1.1 0-2 .9-2 2v14H3v2h18v-2zm-10-6H8v-2h2zm6 0h-2v-2h2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgDoorSliding24Px);
const Memo = memo(ForwardRef);
export default Memo;
