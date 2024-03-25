import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPersonPinTwoTone24Px = (
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
    <path
      d="m9.83 18 .59.59L12 20.17l1.59-1.59.58-.58H19V4H5v14zM12 5c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3M6 15.58C6 13.08 9.97 12 12 12s6 1.08 6 3.58V17H6z"
      opacity={0.3}
    />
    <path d="m9 20 3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2zM5 4h14v14h-4.83l-.59.59L12 20.17l-1.59-1.59-.58-.58H5zm7 7c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3 1.35 3 3 3m0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m6 8.58c0-2.5-3.97-3.58-6-3.58s-6 1.08-6 3.58V17h12zM8.48 15c.74-.51 2.23-1 3.52-1s2.78.49 3.52 1z" />
  </svg>
);
const ForwardRef = forwardRef(SvgPersonPinTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
