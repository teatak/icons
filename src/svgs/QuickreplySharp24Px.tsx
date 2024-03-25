import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgQuickreplySharp24Px = (
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
    <path d="M22 2H2v20l4-4h9v-8h7z" />
    <path d="M22.5 16h-2.2l1.7-4h-5v6h2v5z" />
  </svg>
);
const ForwardRef = forwardRef(SvgQuickreplySharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
