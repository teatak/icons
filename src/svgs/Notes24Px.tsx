import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgNotes24Px = (
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
    <path d="M3 18h12v-2H3zM3 6v2h18V6zm0 7h18v-2H3z" />
  </svg>
);
const ForwardRef = forwardRef(SvgNotes24Px);
const Memo = memo(ForwardRef);
export default Memo;
