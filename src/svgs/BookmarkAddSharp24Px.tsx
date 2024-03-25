import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBookmarkAddSharp24Px = (
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
    <path d="M21 7h-2v2h-2V7h-2V5h2V3h2v2h2zm-2 14-7-3-7 3V3h9a5.002 5.002 0 0 0 5 7.9z" />
  </svg>
);
const ForwardRef = forwardRef(SvgBookmarkAddSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
