import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgRemoveFromQueueSharp24Px = (
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
    <path d="M23 3H1v16h7v2h8v-2h7zm-2 14H3V5h18zm-5-7v2H8v-2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgRemoveFromQueueSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
