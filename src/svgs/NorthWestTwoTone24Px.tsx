import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgNorthWestTwoTone24Px = (
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
    <path d="M5 15h2V8.41L18.59 20 20 18.59 8.41 7H15V5H5z" />
  </svg>
);
const ForwardRef = forwardRef(SvgNorthWestTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
