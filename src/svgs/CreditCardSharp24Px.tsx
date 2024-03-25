import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCreditCardSharp24Px = (
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
    <path d="M22 4H2.01L2 20h20zm-2 14H4v-6h16zm0-10H4V6h16z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCreditCardSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
