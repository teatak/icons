import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgDoorSlidingOutlined24Px = (
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
    <path d="M10 13H8v-2h2zm6-2h-2v2h2zm5 8v2H3v-2h1V5c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v14zM11 5H6v14h5zm7 0h-5v14h5z" />
  </svg>
);
const ForwardRef = forwardRef(SvgDoorSlidingOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
