import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgDoNotTouchSharp24Px = (
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
    <path d="m13 10.17-2.5-2.5V1H13zM20 4h-2.5v7h-1V2H14v9.17l6 6zM9.5 3H7.01v1.18L9.5 6.67zm11.69 18.19L2.81 2.81 1.39 4.22 7 9.83v4.3l-3.32-1.9L2 13.88 9.68 22h9.54l.56.61z" />
  </svg>
);
const ForwardRef = forwardRef(SvgDoNotTouchSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
