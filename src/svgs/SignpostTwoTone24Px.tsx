import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSignpostTwoTone24Px = (
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
    <path d="M6 6h11.17l1 1-1 1H6zm12 10H6.83l-1-1 1-1H18z" opacity={0.3} />
    <path d="M13 10h5l3-3-3-3h-5V2h-2v2H4v6h7v2H6l-3 3 3 3h5v4h2v-4h7v-6h-7zM6 6h11.17l1 1-1 1H6zm12 10H6.83l-1-1 1-1H18z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSignpostTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
