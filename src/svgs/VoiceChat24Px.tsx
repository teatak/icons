import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgVoiceChat24Px = (
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
    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H6l-2 2V4h16z" />
    <path d="M11.25 5h1.5v10h-1.5zM8.5 7H10v6H8.5zM6 9h1.5v2H6zM14 7h1.5v6H14zM16.5 9H18v2h-1.5z" />
  </svg>
);
const ForwardRef = forwardRef(SvgVoiceChat24Px);
const Memo = memo(ForwardRef);
export default Memo;
