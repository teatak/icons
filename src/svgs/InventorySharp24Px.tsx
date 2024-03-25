import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgInventorySharp24Px = (
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
    <path d="M5 5h2v3h10V5h2v5h2V3h-6.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H3v18h8v-2H5zm7-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1" />
    <path d="M21 11.5 15.51 17l-3.01-3-1.5 1.5 4.51 4.5 6.99-7z" />
  </svg>
);
const ForwardRef = forwardRef(SvgInventorySharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
