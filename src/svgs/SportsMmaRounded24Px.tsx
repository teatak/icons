import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSportsMmaRounded24Px = (
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
    <g fill="none">
      <path d="M0 0h24v24H0z" />
      <path d="M0 0h24v24H0z" />
    </g>
    <path d="M7 20c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-3H7zM18 7c-.55 0-1 .45-1 1V5c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v5.8c0 .13.01.26.04.39l.8 4c.09.47.5.8.98.8h10.36c.45 0 .89-.36.98-.8l.8-4c.03-.13.04-.26.04-.39V8c0-.55-.45-1-1-1m-4 3H8c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1" />
  </svg>
);
const ForwardRef = forwardRef(SvgSportsMmaRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
