import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTornadoSharp24Px = (
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
    <path d="M20.11 8 23 3H1l2.89 5zM7.95 15 12 22l4.05-7zM18.95 10H5.05l1.74 3h10.42z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTornadoSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
