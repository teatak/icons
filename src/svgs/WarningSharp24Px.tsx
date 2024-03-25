import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgWarningSharp24Px = (
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
    <path d="M1 21h22L12 2zm12-3h-2v-2h2zm0-4h-2v-4h2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgWarningSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
