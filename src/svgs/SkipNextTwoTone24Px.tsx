import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSkipNextTwoTone24Px = (
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
    <path d="M8 9.86v4.28L11.03 12z" opacity={0.3} />
    <path d="M14.5 12 6 6v12zM8 9.86 11.03 12 8 14.14zM16 6h2v12h-2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSkipNextTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
