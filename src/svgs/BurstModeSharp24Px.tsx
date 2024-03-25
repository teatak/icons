import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBurstModeSharp24Px = (
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
    <path d="M1 5h2v14H1zm4 0h2v14H5zm18 0H9v14h14zM11 17l2.5-3.15L15.29 16l2.5-3.22L21 17z" />
  </svg>
);
const ForwardRef = forwardRef(SvgBurstModeSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
