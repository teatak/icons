import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgEMobiledata24Px = (
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
    <path d="M16 9V7H8v10h8v-2h-6v-2h6v-2h-6V9z" />
  </svg>
);
const ForwardRef = forwardRef(SvgEMobiledata24Px);
const Memo = memo(ForwardRef);
export default Memo;
