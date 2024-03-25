import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCollectionsBookmarkSharp24Px = (
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
    <path d="M4 6H2v16h16v-2H4zm18-4H6v16h16zm-2 10-2.5-1.5L15 12V4h5z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCollectionsBookmarkSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
