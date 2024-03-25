import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFormatQuoteTwoTone24Px = (
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
    <path
      d="M16.62 16h.76L19 12.76V8h-4v4h3.62zm-10 0h.76L9 12.76V8H5v4h3.62z"
      opacity={0.3}
    />
    <path d="M18.62 18 21 13.24V6h-8v8h2.38l-2 4zM15 12V8h4v4.76L17.38 16h-.76l2-4zM3.38 18h5.24L11 13.24V6H3v8h2.38zM5 12V8h4v4.76L7.38 16h-.76l2-4z" />
  </svg>
);
const ForwardRef = forwardRef(SvgFormatQuoteTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
