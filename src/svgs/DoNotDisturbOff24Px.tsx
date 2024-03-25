import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgDoNotDisturbOff24Px = (
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
    <path d="M17 11v2h-1.46l4.68 4.68A9.9 9.9 0 0 0 22 12c0-5.52-4.48-10-10-10-2.11 0-4.07.66-5.68 1.78L13.54 11zM2.27 2.27 1 3.54l2.78 2.78A9.9 9.9 0 0 0 2 12c0 5.52 4.48 10 10 10 2.11 0 4.07-.66 5.68-1.78L20.46 23l1.27-1.27L11 11zM7 13v-2h1.46l2 2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgDoNotDisturbOff24Px);
const Memo = memo(ForwardRef);
export default Memo;
