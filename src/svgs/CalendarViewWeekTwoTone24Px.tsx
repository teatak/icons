import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCalendarViewWeekTwoTone24Px = (
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
      d="M8.5 6H11v12H8.5zM13 6h2.5v12H13zM4 6h2.5v12H4zM17.5 6H20v12h-2.5z"
      opacity={0.3}
    />
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M6.5 18H4V6h2.5zm4.5 0H8.5V6H11zm4.5 0H13V6h2.5zm4.5 0h-2.5V6H20z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCalendarViewWeekTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
