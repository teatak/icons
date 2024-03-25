import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTourTwoTone24Px = (
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
    <path d="M7 12V6h11.05l-1.2 3 1.2 3z" opacity={0.3} />
    <path d="M21 4H7V2H5v20h2v-8h14l-2-5zM7 12V6h11.05l-1.2 3 1.2 3zm7-3c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2" />
  </svg>
);
const ForwardRef = forwardRef(SvgTourTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
