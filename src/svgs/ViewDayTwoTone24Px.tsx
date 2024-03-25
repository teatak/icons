import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgViewDayTwoTone24Px = (
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
    <path d="M4 10h15v4H4z" opacity={0.3} />
    <path d="M2 18h19v2H2zM20 8H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1m-1 6H4v-4h15zM2 4h19v2H2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgViewDayTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
