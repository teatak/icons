import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBatterySaverRounded24Px = (
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
    <path d="M16 4h-2V3c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v1H8c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1m-2 10h-1v1c0 .55-.45 1-1 1s-1-.45-1-1v-1h-1c-.55 0-1-.45-1-1s.45-1 1-1h1v-1c0-.55.45-1 1-1s1 .45 1 1v1h1c.55 0 1 .45 1 1s-.45 1-1 1" />
  </svg>
);
const ForwardRef = forwardRef(SvgBatterySaverRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
