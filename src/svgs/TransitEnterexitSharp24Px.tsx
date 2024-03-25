import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTransitEnterexitSharp24Px = (
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
    <path d="M16 18H6V8h3v4.77L15.98 6 18 8.03 11.15 15H16z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTransitEnterexitSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
