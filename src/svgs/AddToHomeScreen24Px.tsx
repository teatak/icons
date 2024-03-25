import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgAddToHomeScreen24Px = (
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
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M18 1.01 8 1c-1.1 0-2 .9-2 2v3h2V5h10v14H8v-1H6v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M10 15h2V8H5v2h3.59L3 15.59 4.41 17 10 11.41z" />
  </svg>
);
const ForwardRef = forwardRef(SvgAddToHomeScreen24Px);
const Memo = memo(ForwardRef);
export default Memo;
