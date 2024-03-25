import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSpaceBarSharp24Px = (
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
    <path d="M18 9v4H6V9H4v6h16V9z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSpaceBarSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
