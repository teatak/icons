import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const Svg60FpsSelect24Px = (
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
    <path d="M18 6v6h-3V6zm0-2h-3c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h3c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-7 2V4H6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h3c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2H6V6zm-2 4v2H6v-2zM5 22H3v-5h2zm4 0H7v-5h2zm4 0h-2v-5h2zm8 0h-6v-5h6z" />
  </svg>
);
const ForwardRef = forwardRef(Svg60FpsSelect24Px);
const Memo = memo(ForwardRef);
export default Memo;
