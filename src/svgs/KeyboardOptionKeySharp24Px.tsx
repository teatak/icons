import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgKeyboardOptionKeySharp24Px = (
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
    <path d="M15 5h6v2h-6zM9 5H3v2h4.85l6.92 12H21v-2h-5.07z" />
  </svg>
);
const ForwardRef = forwardRef(SvgKeyboardOptionKeySharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
