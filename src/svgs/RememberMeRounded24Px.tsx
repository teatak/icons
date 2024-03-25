import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgRememberMeRounded24Px = (
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
    <path d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2m0 14.21c-1.5-.77-3.2-1.21-5-1.21s-3.5.44-5 1.21V6h10z" />
    <circle cx={12} cy={10} r={3} />
  </svg>
);
const ForwardRef = forwardRef(SvgRememberMeRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
