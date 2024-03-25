import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgStayCurrentPortraitSharp24Px = (
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
    <path d="M19 1.01 5.01 1v22H19zM17 19H7V5h10z" />
  </svg>
);
const ForwardRef = forwardRef(SvgStayCurrentPortraitSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
