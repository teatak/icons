import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFlashAutoTwoTone24Px = (
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
    <path d="M3 2v12h3v9l7-12H9l4-9zm14 0-3.2 9h1.9l.7-2h3.2l.7 2h1.9L19 2zm-.15 5.65L18 4l1.15 3.65z" />
  </svg>
);
const ForwardRef = forwardRef(SvgFlashAutoTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
