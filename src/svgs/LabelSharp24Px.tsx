import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgLabelSharp24Px = (
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
    <path d="M17.03 5 3 5.01v13.98l14.03.01L22 12z" />
  </svg>
);
const ForwardRef = forwardRef(SvgLabelSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
