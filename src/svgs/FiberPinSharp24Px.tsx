import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFiberPinSharp24Px = (
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
    <path d="M5.5 10.5h2v1h-2zM22 4H2v16h20zM9 13H5.5v2H4V9h5zm3.5 2H11V9h1.5zm7.5 0h-1.2l-2.55-3.5V15H15V9h1.25l2.5 3.5V9H20z" />
  </svg>
);
const ForwardRef = forwardRef(SvgFiberPinSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
