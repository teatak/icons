import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgWidthWideSharp24Px = (
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
    <path d="M22 4H2v16h20zM4 6h2v12H4zm16 12h-2V6h2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgWidthWideSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
