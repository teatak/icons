import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgInsertCommentTwoTone24Px = (
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
    <path
      d="M4 16h14.83L20 17.17V4H4zM6 6h12v2H6zm0 3h12v2H6zm0 3h12v2H6z"
      opacity={0.3}
    />
    <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2m0 2v13.17L18.83 16H4V4zM6 12h12v2H6zm0-3h12v2H6zm0-3h12v2H6z" />
  </svg>
);
const ForwardRef = forwardRef(SvgInsertCommentTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
