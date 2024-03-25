import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBusinessCenterSharp24Px = (
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
    <path d="M10 16v-1H3.01v6H21v-6h-7v1zm12-9h-6V5l-2-2h-4L8 5v2H2v7h8v-2h4v2h8zm-8 0h-4V5h4z" />
  </svg>
);
const ForwardRef = forwardRef(SvgBusinessCenterSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
