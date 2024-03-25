import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTireRepairRounded24Px = (
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
    <path d="M18 7a1.003 1.003 0 0 0 1.71.71c.4-.4 1.04-2.46 1.04-2.46s-2.06.64-2.46 1.04c-.18.18-.29.43-.29.71" />
    <path d="M19 2c-2.76 0-5 2.24-5 5 0 2.05 1.23 3.81 3 4.58V12c0 .55.45 1 1 1v5c0 .55-.45 1-1 1s-1-.45-1-1v-3a3.01 3.01 0 0 0-4-2.83V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2v-4c0-.55.45-1 1-1s1 .45 1 1v3c0 1.65 1.35 3 3 3s3-1.35 3-3v-5c.55 0 1-.45 1-1v-.42c1.77-.77 3-2.53 3-4.58 0-2.76-2.24-5-5-5M6 19.5l-2-2v-2.83l2 2zm0-5-2-2V9.67l2 2zm0-5-2-2V4.67l2 2zm4 8-2 2v-2.83l2-2zm0-5-2 2v-2.83l2-2zm0-5-2 2V6.67l2-2zm9 2.5c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3" />
  </svg>
);
const ForwardRef = forwardRef(SvgTireRepairRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
