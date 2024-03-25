import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMinorCrashRounded24Px = (
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
    <path d="M19.5 24c.82 0 1.5-.67 1.5-1.5v-7.16c0-.22-.04-.45-.11-.66l-1.97-5.67C18.72 8.42 18.16 8 17.5 8h-11c-.66 0-1.21.42-1.42 1.01l-1.97 5.67c-.07.21-.11.43-.11.66v7.16c0 .83.68 1.5 1.5 1.5S6 23.33 6 22.5V22h12v.5c0 .83.67 1.5 1.5 1.5M6.85 10h10.29l1.04 3H5.81zM6 17.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S8.33 19 7.5 19 6 18.33 6 17.5m9 0c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5M8.71 5.71a.996.996 0 0 1-1.41 0L5.71 4.12a.996.996 0 1 1 1.41-1.41L8.71 4.3c.39.38.39 1.02 0 1.41m9.58-3c.39.39.39 1.02 0 1.41L16.7 5.71a.996.996 0 1 1-1.41-1.41l1.59-1.59a.996.996 0 0 1 1.41 0M12 5c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1s1 .45 1 1v3c0 .55-.45 1-1 1" />
  </svg>
);
const ForwardRef = forwardRef(SvgMinorCrashRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
