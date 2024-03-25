import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgViewCarousel24Px = (
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
    <path d="M2 7h4v10H2zm5 12h10V5H7zM18 7h4v10h-4z" />
  </svg>
);
const ForwardRef = forwardRef(SvgViewCarousel24Px);
const Memo = memo(ForwardRef);
export default Memo;
