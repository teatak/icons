import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMarkunreadSharp24Px = (
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
    <path d="M22 4H2v16h20zm-2 4-8 5-8-5V6l8 5 8-5z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMarkunreadSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
