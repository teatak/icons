import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSosSharp24Px = (
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
    <path d="M15.5 7h-7v10h7zm-2 8h-3V9h3zM1 15h4v-2H1V7h6v2H3v2h4v6H1zm16 0h4v-2h-4V7h6v2h-4v2h4v6h-6z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSosSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
