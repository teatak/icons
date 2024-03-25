import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBookmarkRemoveSharp24Px = (
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
    <path d="M21 7h-6V5h6zm-2 3.9c-.64.13-1.32.14-2.02 0-1.91-.38-3.47-1.92-3.87-3.83A5.02 5.02 0 0 1 14 3H5v18l7-3 7 3z" />
  </svg>
);
const ForwardRef = forwardRef(SvgBookmarkRemoveSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
