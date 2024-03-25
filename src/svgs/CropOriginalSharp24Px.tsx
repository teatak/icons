import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCropOriginalSharp24Px = (
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
    <path d="M21 3H3v18h18zm-2 16H5V5h14zm-5.04-6.71-2.75 3.54-1.96-2.36L6.5 17h11z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCropOriginalSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
