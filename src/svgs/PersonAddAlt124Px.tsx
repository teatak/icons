import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPersonAddAlt124Px = (
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
    <path d="M13 8c0-2.21-1.79-4-4-4S5 5.79 5 8s1.79 4 4 4 4-1.79 4-4m2 2v2h3v3h2v-3h3v-2h-3V7h-2v3zM1 18v2h16v-2c0-2.66-5.33-4-8-4s-8 1.34-8 4" />
  </svg>
);
const ForwardRef = forwardRef(SvgPersonAddAlt124Px);
const Memo = memo(ForwardRef);
export default Memo;
