import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTurnSlightLeftSharp24Px = (
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
    <path d="M11.66 6V4H6v5.66h2V7.41l5 5V20h2v-8.41L9.41 6z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTurnSlightLeftSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
