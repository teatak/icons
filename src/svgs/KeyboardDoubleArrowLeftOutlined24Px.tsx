import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgKeyboardDoubleArrowLeftOutlined24Px = (
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
    <path d="M17.59 18 19 16.59 14.42 12 19 7.41 17.59 6l-6 6z" />
    <path d="m11 18 1.41-1.41L7.83 12l4.58-4.59L11 6l-6 6z" />
  </svg>
);
const ForwardRef = forwardRef(SvgKeyboardDoubleArrowLeftOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
