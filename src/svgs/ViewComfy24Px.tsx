import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgViewComfy24Px = (
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
    <path d="M2 4v7h20V4zm8 16h12v-7H10zm-8 0h6v-7H2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgViewComfy24Px);
const Memo = memo(ForwardRef);
export default Memo;
