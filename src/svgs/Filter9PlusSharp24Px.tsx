import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFilter9PlusSharp24Px = (
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
    <path d="M3 5H1v18h18v-2H3zm11 9V6H9v5h3v1H9v2zm-3-5V8h1v1zm12-8H5v18h18zm-2 8h-2V7h-2v2h-2v2h2v2h2v-2h2v6H7V3h14z" />
  </svg>
);
const ForwardRef = forwardRef(SvgFilter9PlusSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
