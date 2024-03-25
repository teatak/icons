import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgAlignHorizontalRightOutlined24Px = (
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
    <path d="M20 2h2v20h-2zM2 10h16V7H2zm6 7h10v-3H8z" />
  </svg>
);
const ForwardRef = forwardRef(SvgAlignHorizontalRightOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
