import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBookmarksSharp24Px = (
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
    <path d="m19 18 2 1V1H7v2h12zM17 5H3v18l7-3 7 3z" />
  </svg>
);
const ForwardRef = forwardRef(SvgBookmarksSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
