import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgKeyboardControlKey24Px = (
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
    <path d="m5 12 1.41 1.41L12 7.83l5.59 5.58L19 12l-7-7z" />
  </svg>
);
const ForwardRef = forwardRef(SvgKeyboardControlKey24Px);
const Memo = memo(ForwardRef);
export default Memo;
