import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPhotoCameraBackSharp24Px = (
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
    <path d="M16.83 5 15 3H9L7.17 5H2v16h20V5zM6 17l3-4 2.25 3 3-4L18 17z" />
  </svg>
);
const ForwardRef = forwardRef(SvgPhotoCameraBackSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
