import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgClassSharp24Px = (
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
    <path d="M20 2H4v20h16zM6 4h5v8l-2.5-1.5L6 12z" />
  </svg>
);
const ForwardRef = forwardRef(SvgClassSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
