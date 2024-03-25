import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgNavigateNextTwoTone24Px = (
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
    <path d="m10.02 18 6-6-6-6-1.41 1.41L13.19 12l-4.58 4.59z" />
  </svg>
);
const ForwardRef = forwardRef(SvgNavigateNextTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
