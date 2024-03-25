import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const Svg1K24Px = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="tui-icon"
    ref={ref}
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-8.5 12H9v-4.5H7.5V9h3zm7 0h-1.75L14 12.75V15h-1.5V9H14v2.25L15.75 9h1.75l-2.25 3z" />
  </svg>
);
const ForwardRef = forwardRef(Svg1K24Px);
const Memo = memo(ForwardRef);
export default Memo;
