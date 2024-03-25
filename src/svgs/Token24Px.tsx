import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgToken24Px = (
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
    <path d="M19.97 6.43 12 2 4.03 6.43 9.1 9.24C9.83 8.48 10.86 8 12 8s2.17.48 2.9 1.24zM10 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2m1 9.44L3 17V8.14l5.13 2.85c-.09.32-.13.66-.13 1.01 0 1.86 1.27 3.43 3 3.87zm2 0v-5.57c1.73-.44 3-2.01 3-3.87 0-.35-.04-.69-.13-1.01L21 8.14V17z" />
  </svg>
);
const ForwardRef = forwardRef(SvgToken24Px);
const Memo = memo(ForwardRef);
export default Memo;
