import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgNightlightSharp24Px = (
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
    <path d="M14 2c1.82 0 3.53.5 5 1.35-2.99 1.73-5 4.95-5 8.65s2.01 6.92 5 8.65A10 10 0 0 1 14 22C8.48 22 4 17.52 4 12S8.48 2 14 2" />
  </svg>
);
const ForwardRef = forwardRef(SvgNightlightSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
