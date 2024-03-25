import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPresentToAllSharp24Px = (
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
    <path d="M23 3H1v18h22zm-2 16.02H3V4.98h18zM10 12H8l4-4 4 4h-2v4h-4z" />
  </svg>
);
const ForwardRef = forwardRef(SvgPresentToAllSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
