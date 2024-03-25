import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSpatialAudioSharp24Px = (
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
    <circle cx={10} cy={9} r={4} />
    <path d="M16.39 15.56C14.71 14.7 12.53 14 10 14s-4.71.7-6.39 1.56A2.97 2.97 0 0 0 2 18.22V21h16v-2.78c0-1.12-.61-2.15-1.61-2.66M16 1h-2a9 9 0 0 0 9 9V8c-3.86 0-7-3.14-7-7" />
    <path d="M20 1h-2c0 2.76 2.24 5 5 5V4c-1.65 0-3-1.35-3-3" />
  </svg>
);
const ForwardRef = forwardRef(SvgSpatialAudioSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
