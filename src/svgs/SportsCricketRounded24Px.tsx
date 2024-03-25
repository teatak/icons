import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSportsCricketRounded24Px = (
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
    <path d="M15.05 12.81 6.56 4.32a.996.996 0 0 0-1.41 0L2.32 7.15a.996.996 0 0 0 0 1.41l8.49 8.49c.39.39 1.02.39 1.41 0l2.83-2.83a.996.996 0 0 0 0-1.41M14.34 17.76l3.53 3.53c.39.39 1.03.39 1.42 0s.39-1.03 0-1.42l-3.53-3.53z" />
    <circle cx={18.5} cy={5.5} r={3.5} />
  </svg>
);
const ForwardRef = forwardRef(SvgSportsCricketRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
