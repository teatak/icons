import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgAutoAwesomeMotionSharp24Px = (
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
    <path d="M14 2H2v12h2V4h10zm4 4H6v12h2V8h10zm4 4H10v12h12z" />
  </svg>
);
const ForwardRef = forwardRef(SvgAutoAwesomeMotionSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
