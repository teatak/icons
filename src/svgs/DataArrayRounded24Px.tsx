import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgDataArrayRounded24Px = (
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
    <path d="M15 5c0 .55.45 1 1 1h2v12h-2c-.55 0-1 .45-1 1s.45 1 1 1h2c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-2c-.55 0-1 .45-1 1M6 20h2c.55 0 1-.45 1-1s-.45-1-1-1H6V6h2c.55 0 1-.45 1-1s-.45-1-1-1H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2" />
  </svg>
);
const ForwardRef = forwardRef(SvgDataArrayRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
