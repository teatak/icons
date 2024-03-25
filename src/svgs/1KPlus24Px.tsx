import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const Svg1KPlus24Px = (
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
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M9 15H7.5v-4.5H6V9h3zm4.75 0L12 12.75V15h-1.5V9H12v2.25L13.75 9h1.75l-2.25 3 2.25 3zm5.75-2.5H18V14h-1v-1.5h-1.5v-1H17V10h1v1.5h1.5z" />
  </svg>
);
const ForwardRef = forwardRef(Svg1KPlus24Px);
const Memo = memo(ForwardRef);
export default Memo;
