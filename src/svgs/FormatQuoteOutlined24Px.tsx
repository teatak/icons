import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFormatQuoteOutlined24Px = (
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
    <path d="M18.62 18h-5.24l2-4H13V6h8v7.24zm-2-2h.76L19 12.76V8h-4v4h3.62zm-8 2H3.38l2-4H3V6h8v7.24zm-2-2h.76L9 12.76V8H5v4h3.62z" />
  </svg>
);
const ForwardRef = forwardRef(SvgFormatQuoteOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
