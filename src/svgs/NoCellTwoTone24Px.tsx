import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgNoCellTwoTone24Px = (
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
    <path d="M7 21h10v-1H7zM7 3v1h10V3z" opacity={0.3} />
    <path d="M17 6v8.17l2 2V3c0-1.1-.9-1.99-2-1.99L7 1c-.85 0-1.58.55-1.87 1.3L8.83 6zM7 3h10v1H7zm14.19 18.19L2.81 2.81 1.39 4.22 5 7.83V21c0 1.1.9 2 2 2h10c.85 0 1.58-.55 1.87-1.3l.91.91zM17 21H7v-1h10zM7 18V9.83L15.17 18z" />
  </svg>
);
const ForwardRef = forwardRef(SvgNoCellTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
