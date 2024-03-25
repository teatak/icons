import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPlayArrowOutlined24Px = (
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
    <path d="M10 8.64 15.27 12 10 15.36zM8 5v14l11-7z" />
  </svg>
);
const ForwardRef = forwardRef(SvgPlayArrowOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
