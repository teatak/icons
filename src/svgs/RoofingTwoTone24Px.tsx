import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgRoofingTwoTone24Px = (
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
    <path d="M11 16h2v2h-2z" opacity={0.3} />
    <path d="M13 18h-2v-2h2zm2-4H9v6h6zm4-4.7V4h-3v2.6L12 3 2 12h3l7-6.31L19 12h3z" />
  </svg>
);
const ForwardRef = forwardRef(SvgRoofingTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
