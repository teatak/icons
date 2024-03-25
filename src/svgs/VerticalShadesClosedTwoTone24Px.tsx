import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgVerticalShadesClosedTwoTone24Px = (
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
    <path
      d="M9.5 5H11v14H9.5zM6 5h1.5v14H6zM13 5h1.5v14H13zM16.5 5H18v14h-1.5z"
      opacity={0.2}
    />
    <path d="M20 19V3H4v16H2v2h20v-2zM7.5 19H6V5h1.5zm3.5 0H9.5V5H11zm3.5 0H13V5h1.5zm3.5 0h-1.5V5H18z" />
  </svg>
);
const ForwardRef = forwardRef(SvgVerticalShadesClosedTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
