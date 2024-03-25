import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgKeyboardDoubleArrowUpSharp24Px = (
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
    <path d="M6 17.59 7.41 19 12 14.42 16.59 19 18 17.59l-6-6z" />
    <path d="m6 11 1.41 1.41L12 7.83l4.59 4.58L18 11l-6-6z" />
  </svg>
);
const ForwardRef = forwardRef(SvgKeyboardDoubleArrowUpSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
