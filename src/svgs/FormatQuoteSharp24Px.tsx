import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFormatQuoteSharp24Px = (
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
    <path d="M5 17h3l2-4V7H4v6h3zm10 0h3l2-4V7h-6v6h3z" />
  </svg>
);
const ForwardRef = forwardRef(SvgFormatQuoteSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
