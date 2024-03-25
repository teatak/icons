import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSubscriptionsSharp24Px = (
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
    <path d="M20 8H4V6h16zm-2-6H6v2h12zm4 8v12H2V10zm-6 6-6-3.27v6.53z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSubscriptionsSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
