import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSendToMobileSharp24Px = (
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
    <path d="M17 18H7V6h10v1h2V1H5v22h14v-6h-2z" />
    <path d="m22 12-4-4v3h-5v2h5v3z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSendToMobileSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
