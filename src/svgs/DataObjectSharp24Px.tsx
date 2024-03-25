import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgDataObjectSharp24Px = (
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
    <path d="M4 10H2v4h2v6h6v-2H6v-5.5H4v-1h2V6h4V4H4zM20 10V4h-6v2h4v5.5h2v1h-2V18h-4v2h6v-6h2v-4z" />
  </svg>
);
const ForwardRef = forwardRef(SvgDataObjectSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
