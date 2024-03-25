import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgLooksTwoSharp24Px = (
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
    <path d="M21 3H3v18h18zm-6 10h-4v2h4v2H9v-6h4V9H9V7h6z" />
  </svg>
);
const ForwardRef = forwardRef(SvgLooksTwoSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
