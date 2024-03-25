import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCommentsDisabledOutlined24Px = (
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
    <path d="M18.83 16H20V4H6.83l-2-2H20c1.1 0 2 .9 2 2v15.17zM18 6H8.83l2 2H18zm0 3h-6.17l2 2H18zm0 5v-2h-3.17l2 2zm3.9 7.9-1.41 1.41L15.17 18H4c-1.1 0-2-.9-2-2V4.83L.69 3.51 2.1 2.1zM13.17 16l-2-2H6v-2h3.17l-1-1H6V9h.17L4 6.83V16z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCommentsDisabledOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
