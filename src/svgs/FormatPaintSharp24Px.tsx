import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFormatPaintSharp24Px = (
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
    <path d="M18 4V2H4v6h14V6h1v4H9v12h4V12h8V4z" />
  </svg>
);
const ForwardRef = forwardRef(SvgFormatPaintSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
