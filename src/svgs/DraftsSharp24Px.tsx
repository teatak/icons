import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgDraftsSharp24Px = (
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
    <path d="M21.99 6.86 12 1 2 6.86V20h20zM12 13 3.74 7.84 12 3l8.26 4.84z" />
  </svg>
);
const ForwardRef = forwardRef(SvgDraftsSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
