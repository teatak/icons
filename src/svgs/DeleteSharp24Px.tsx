import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgDeleteSharp24Px = (
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
    <path d="M6 21h12V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z" />
  </svg>
);
const ForwardRef = forwardRef(SvgDeleteSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
