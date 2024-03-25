import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFitScreenRounded24Px = (
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
    <path d="M18 4h2c1.1 0 2 .9 2 2v2c0 .55-.45 1-1 1s-1-.45-1-1V6h-2c-.55 0-1-.45-1-1s.45-1 1-1M4 8V6h2c.55 0 1-.45 1-1s-.45-1-1-1H4c-1.1 0-2 .9-2 2v2c0 .55.45 1 1 1s1-.45 1-1m16 8v2h-2c-.55 0-1 .45-1 1s.45 1 1 1h2c1.1 0 2-.9 2-2v-2c0-.55-.45-1-1-1s-1 .45-1 1M6 18H4v-2c0-.55-.45-1-1-1s-1 .45-1 1v2c0 1.1.9 2 2 2h2c.55 0 1-.45 1-1s-.45-1-1-1M16 8H8c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2" />
  </svg>
);
const ForwardRef = forwardRef(SvgFitScreenRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
