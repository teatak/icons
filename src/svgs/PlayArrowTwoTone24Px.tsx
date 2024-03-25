import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPlayArrowTwoTone24Px = (
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
    <path d="M10 8.64v6.72L15.27 12z" opacity={0.3} />
    <path d="m8 19 11-7L8 5zm2-10.36L15.27 12 10 15.36z" />
  </svg>
);
const ForwardRef = forwardRef(SvgPlayArrowTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
