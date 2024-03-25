import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBookmarkTwoTone24Px = (
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
    <path d="m7 17.97 5-2.15 5 2.15V5H7z" opacity={0.3} />
    <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2m0 14.97-5-2.14-5 2.14V5h10z" />
  </svg>
);
const ForwardRef = forwardRef(SvgBookmarkTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
