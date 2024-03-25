import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMultipleStopSharp24Px = (
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
    <path d="m17 4 4 4-4 4V9h-4V7h4zM7 17h4v-2H7v-3l-4 4 4 4zm12-2h-2v2h2zm-4 0h-2v2h2zm-4-8H9v2h2zM7 7H5v2h2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMultipleStopSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
