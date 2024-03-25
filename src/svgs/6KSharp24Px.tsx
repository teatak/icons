import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const Svg6KSharp24Px = (
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
    <path d="M8 12.5h1.5V14H8zM21 3H3v18h18zm-10 7.5H8v1h3V15H6.5V9H11zm7 4.5h-1.75l-1.75-2.25V15H13V9h1.5v2.25L16.25 9H18l-2.25 3z" />
  </svg>
);
const ForwardRef = forwardRef(Svg6KSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
