import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCarpenterTwoTone24Px = (
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
    <path d="M5.71 5.62 7 4.33l8.49 8.49-2.81 2.81z" opacity={0.3} />
    <path d="M19.73 14.23 7 1.5 3.11 5.39l8.13 11.67c-.78.78-.78 2.05 0 2.83l1.41 1.41c.78.78 2.05.78 2.83 0l4.24-4.24c.79-.78.79-2.05.01-2.83M5.71 5.62 7 4.33l8.49 8.49-2.81 2.81zm8.36 14.26-1.41-1.41 4.24-4.24 1.41 1.41z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCarpenterTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
