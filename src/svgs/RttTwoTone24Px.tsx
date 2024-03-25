import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgRttTwoTone24Px = (
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
    <path d="m9.03 3-1.11 7.07h2.62l.7-4.5h2.58L11.8 18.43H9.47L9.06 21h7.27l.4-2.57h-2.35l2-12.86h2.58l-.71 4.5h2.65L22 3zM8 5H4l-.31 2h4zm-.61 4h-4l-.31 2h4zm.92 8h-6L2 19h6zm.62-4h-6l-.31 2h6.01z" />
  </svg>
);
const ForwardRef = forwardRef(SvgRttTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
