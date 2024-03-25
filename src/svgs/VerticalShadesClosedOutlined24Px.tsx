import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgVerticalShadesClosedOutlined24Px = (
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
    <path d="M20 19V3H4v16H2v2h20v-2zM13 5h1.5v14H13zm-2 14H9.5V5H11zM6 5h1.5v14H6zm10.5 14V5H18v14z" />
  </svg>
);
const ForwardRef = forwardRef(SvgVerticalShadesClosedOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
