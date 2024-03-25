import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgStopTwoTone24Px = (
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
    <path d="M8 8h8v8H8z" opacity={0.3} />
    <path d="M6 18h12V6H6zM8 8h8v8H8z" />
  </svg>
);
const ForwardRef = forwardRef(SvgStopTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
