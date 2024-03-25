import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgEast24Px = (
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
    <path d="m15 5-1.41 1.41L18.17 11H2v2h16.17l-4.59 4.59L15 19l7-7z" />
  </svg>
);
const ForwardRef = forwardRef(SvgEast24Px);
const Memo = memo(ForwardRef);
export default Memo;
