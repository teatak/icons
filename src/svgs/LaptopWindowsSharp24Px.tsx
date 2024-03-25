import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgLaptopWindowsSharp24Px = (
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
    <path d="M20 18v-1h1.99L22 3H2v14h2v1H0v2h24v-2zM4 5h16v10H4z" />
  </svg>
);
const ForwardRef = forwardRef(SvgLaptopWindowsSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
