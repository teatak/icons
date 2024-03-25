import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCurtainsClosedTwoTone24Px = (
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
    <path d="M6 5h3v14H6zM15 5h3v14h-3z" opacity={0.3} />
    <path d="M20 19V3H4v16H2v2h20v-2zM9 19H6V5h3zm4 0h-2V5h2zm5 0h-3V5h3z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCurtainsClosedTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
