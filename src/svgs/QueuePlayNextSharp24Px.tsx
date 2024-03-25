import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgQueuePlayNextSharp24Px = (
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
    <path d="M23 3H1v16h7v2h8v-2h2v-2H3V5h18v8h2zm-10 7V7h-2v3H8v2h3v3h2v-3h3v-2zm11 8-4.5 4.5L18 21l3-3-3-3 1.5-1.5z" />
  </svg>
);
const ForwardRef = forwardRef(SvgQueuePlayNextSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
