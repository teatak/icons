import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSquareTwoTone24Px = (
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
    <path d="M5 5h14v14H5z" opacity={0.3} />
    <path d="M3 3v18h18V3zm16 16H5V5h14z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSquareTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
