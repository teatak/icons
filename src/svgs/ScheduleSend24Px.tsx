import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgScheduleSend24Px = (
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
    <path d="M16.5 12.5H15v4l3 2 .75-1.23-2.25-1.52zM16 9 2 3v7l9 2-9 2v7l7.27-3.11C10.09 20.83 12.79 23 16 23c3.86 0 7-3.14 7-7s-3.14-7-7-7m0 12c-2.75 0-4.98-2.22-5-4.97v-.07a5.01 5.01 0 0 1 5-4.97c2.76 0 5 2.24 5 5S18.76 21 16 21" />
  </svg>
);
const ForwardRef = forwardRef(SvgScheduleSend24Px);
const Memo = memo(ForwardRef);
export default Memo;
