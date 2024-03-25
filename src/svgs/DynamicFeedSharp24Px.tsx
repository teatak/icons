import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgDynamicFeedSharp24Px = (
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
    <path d="M8 8H6v9h11v-2H8z" />
    <path d="M22 3H10v10h12zm-2 8h-8V7h8zM4 12H2v9h11v-2H4z" />
  </svg>
);
const ForwardRef = forwardRef(SvgDynamicFeedSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
