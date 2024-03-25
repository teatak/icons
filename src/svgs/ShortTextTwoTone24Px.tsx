import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgShortTextTwoTone24Px = (
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
    <path d="M4 9h16v2H4zm0 4h10v2H4z" />
  </svg>
);
const ForwardRef = forwardRef(SvgShortTextTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
