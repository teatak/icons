import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgOutdoorGrillSharp24Px = (
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
    <path d="M17 22c1.66 0 3-1.34 3-3s-1.34-3-3-3c-1.3 0-2.4.84-2.82 2H9.14l1.99-3.06a6.4 6.4 0 0 0 1.74 0l1.02 1.57c.42-.53.96-.95 1.6-1.21l-.6-.93A6.99 6.99 0 0 0 19 8H5c0 2.84 1.69 5.27 4.12 6.37l-4.5 6.92 1.68 1.09L7.84 20h6.34c.42 1.16 1.52 2 2.82 2m0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M9.41 7h1c.15-1.15.23-1.64-.89-2.96-.42-.5-.68-.77-.46-2.04h-.99c-.21 1.11.03 2.05.89 2.96.22.24.79.67.45 2.04M11.89 7h1c.15-1.15.23-1.64-.89-2.96-.42-.5-.68-.78-.46-2.04h-.99c-.21 1.11.03 2.05.89 2.96.23.24.8.67.45 2.04M14.41 7h1c.15-1.15.23-1.64-.89-2.96-.42-.5-.68-.77-.46-2.04h-.99c-.21 1.11.03 2.05.89 2.96.22.24.79.67.45 2.04" />
  </svg>
);
const ForwardRef = forwardRef(SvgOutdoorGrillSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
