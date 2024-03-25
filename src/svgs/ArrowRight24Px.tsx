import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowRight24Px = (
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
    <path d="m10 17 5-5-5-5z" />
    <path fill="none" d="M0 24V0h24v24z" />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowRight24Px);
const Memo = memo(ForwardRef);
export default Memo;
