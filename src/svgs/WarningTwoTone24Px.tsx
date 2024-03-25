import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgWarningTwoTone24Px = (
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
    <path
      d="M4.47 19h15.06L12 5.99zM13 18h-2v-2h2zm0-4h-2v-4h2z"
      opacity={0.3}
    />
    <path d="M1 21h22L12 2zm3.47-2L12 5.99 19.53 19zM11 16h2v2h-2zm0-6h2v4h-2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgWarningTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
