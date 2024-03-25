import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBorderBottomTwoTone24Px = (
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
    <path d="M3 11h2v2H3zm0 4h2v2H3zm0 4h18v2H3zm16-4h2v2h-2zM3 7h2v2H3zm16 4h2v2h-2zm0-8h2v2h-2zm-4 8h2v2h-2zm4-4h2v2h-2zm-4-4h2v2h-2zm-8 8h2v2H7zM3 3h2v2H3zm8 4h2v2h-2zM7 3h2v2H7zm4 8h2v2h-2zm0 4h2v2h-2zm0-12h2v2h-2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgBorderBottomTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
