import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCallReceivedSharp24Px = (
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
    <path d="M20 5.41 18.59 4 7 15.59V9H5v10h10v-2H8.41z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCallReceivedSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
