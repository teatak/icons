import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTerminalRounded24Px = (
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
    <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16c1.1 0 2-.9 2-2V6a2 2 0 0 0-2-2m0 14H4V8h16zm-8-2c0-.55.45-1 1-1h4c.55 0 1 .45 1 1s-.45 1-1 1h-4c-.55 0-1-.45-1-1M6.79 9.71a.996.996 0 0 1 1.41 0l2.59 2.59c.39.39.39 1.02 0 1.41L8.2 16.3a.996.996 0 1 1-1.41-1.41L8.67 13l-1.88-1.88a.996.996 0 0 1 0-1.41" />
  </svg>
);
const ForwardRef = forwardRef(SvgTerminalRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
