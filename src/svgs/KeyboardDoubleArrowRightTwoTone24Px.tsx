import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgKeyboardDoubleArrowRightTwoTone24Px = (
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
    <path d="M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z" />
    <path d="m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z" />
  </svg>
);
const ForwardRef = forwardRef(SvgKeyboardDoubleArrowRightTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
