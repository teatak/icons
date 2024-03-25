import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgExpandLess24Px = (
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
    <path d="m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
  </svg>
);
const ForwardRef = forwardRef(SvgExpandLess24Px);
const Memo = memo(ForwardRef);
export default Memo;
