import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMarginTwoTone24Px = (
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
    <path
      d="M5 19h14V5H5zM15 7h2v2h-2zm0 4h2v2h-2zm-4-4h2v2h-2zm0 4h2v2h-2zM7 7h2v2H7zm0 4h2v2H7z"
      opacity={0.3}
    />
    <path d="M7 7h2v2H7zM7 11h2v2H7z" />
    <path d="M3 3v18h18V3zm16 16H5V5h14z" />
    <path d="M11 7h2v2h-2zM15 11h2v2h-2zM11 11h2v2h-2zM15 7h2v2h-2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMarginTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
