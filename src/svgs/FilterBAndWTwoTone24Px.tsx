import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFilterBAndWTwoTone24Px = (
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
    <path d="M19 5h-7v6l7 8zm-7 14v-8l-7 8z" opacity={0.3} />
    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2m-9 0H5l7-8V5h7v14l-7-8z" />
  </svg>
);
const ForwardRef = forwardRef(SvgFilterBAndWTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
