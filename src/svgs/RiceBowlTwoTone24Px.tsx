import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgRiceBowlTwoTone24Px = (
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
    <path
      d="M19.66 14c-.66 1.92-2.24 3.54-4.4 4.39l-1.26.49V20h-4v-1.12l-1.27-.5c-2.16-.85-3.74-2.47-4.4-4.39h15.33"
      opacity={0.3}
    />
    <path d="M19.66 14c-.66 1.92-2.24 3.54-4.4 4.39l-1.26.49V20h-4v-1.12l-1.27-.5c-2.16-.85-3.74-2.47-4.4-4.39h15.33M12 2C6.48 2 2 6.48 2 12c0 3.69 2.47 6.86 6 8.25V22h8v-1.75c3.53-1.39 6-4.56 6-8.25 0-5.52-4.48-10-10-10m-2 10V4.26c.64-.16 1.31-.26 2-.26s1.36.1 2 .26V12zm6 0V5.08c2.39 1.39 4 3.96 4 6.92zM4 12c0-2.95 1.61-5.53 4-6.92V12z" />
  </svg>
);
const ForwardRef = forwardRef(SvgRiceBowlTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
