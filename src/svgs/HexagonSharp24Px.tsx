import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgHexagonSharp24Px = (
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
    <path d="M17.2 3H6.8l-5.2 9 5.2 9h10.4l5.2-9z" />
  </svg>
);
const ForwardRef = forwardRef(SvgHexagonSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
