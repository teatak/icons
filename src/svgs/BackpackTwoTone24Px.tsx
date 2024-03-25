import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBackpackTwoTone24Px = (
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
      d="M18 20H6V8c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2zM7.5 12v2h7v2h2v-4z"
      opacity={0.3}
    />
    <path d="M17 4.14V2h-3v2h-4V2H7v2.14c-1.72.45-3 2-3 3.86v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.86-1.28-3.41-3-3.86M18 20H6V8c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2zM7.5 12v2h7v2h2v-4z" />
  </svg>
);
const ForwardRef = forwardRef(SvgBackpackTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
