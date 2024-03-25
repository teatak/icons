import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCrop75Sharp24Px = (
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
    <path d="M21 5H3v14h18zm-2 12H5V7h14z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCrop75Sharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
