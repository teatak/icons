import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgRectangleTwoTone24Px = (
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
    <path d="M4 6h16v12H4z" opacity={0.3} />
    <path d="M2 4v16h20V4zm18 14H4V6h16z" />
  </svg>
);
const ForwardRef = forwardRef(SvgRectangleTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
