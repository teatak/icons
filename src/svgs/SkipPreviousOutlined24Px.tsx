import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSkipPreviousOutlined24Px = (
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
    <path d="M6 6h2v12H6zm3.5 6 8.5 6V6zm6.5 2.14L12.97 12 16 9.86z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSkipPreviousOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
