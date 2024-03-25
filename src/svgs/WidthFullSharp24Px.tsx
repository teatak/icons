import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgWidthFullSharp24Px = (
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
    <path d="M22 4H2v16h20zM4 6h1v12H4zm16 12h-1V6h1z" />
  </svg>
);
const ForwardRef = forwardRef(SvgWidthFullSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
