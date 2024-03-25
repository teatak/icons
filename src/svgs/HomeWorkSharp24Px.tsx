import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgHomeWorkSharp24Px = (
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
    <path d="M1 11v10h5v-6h4v6h5V11L8 6z" />
    <path d="M10 3v1.97l7 5V11h2v2h-2v2h2v2h-2v4h6V3zm9 6h-2V7h2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgHomeWorkSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
