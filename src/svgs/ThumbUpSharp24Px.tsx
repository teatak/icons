import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgThumbUpSharp24Px = (
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
    <path fill="none" d="M0 0h24v24H0zm0 0h24v24H0z" />
    <path d="M14.17 1 7 8.18V21h12.31L23 12.4V8h-8.31l1.12-5.38zM1 9h4v12H1z" />
  </svg>
);
const ForwardRef = forwardRef(SvgThumbUpSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
